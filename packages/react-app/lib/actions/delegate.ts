import { SmartAccount } from "viem/account-abstraction";
import { createCaveatBuilder, getDeleGatorEnvironment } from "@codefi/delegation-utils";
import { createRootDelegation, DELEGATOR_CONTRACTS, signDelegation } from "@codefi/delegator-core-viem";
import { sepolia } from "viem/chains";
import { createWalletClient, custom, WalletClient } from "viem";
import { DelegationStorageClient, DelegationStorageEnvironment } from "@codefi/delegator-core-viem";

export async function delegate(client: WalletClient ,smartAccount: SmartAccount) {
    const chain = smartAccount.client.chain ?? sepolia;
    
    const walletClient = createWalletClient({
        account:client.account?.address,
        chain: chain,
        transport: custom(window.ethereum),
      });

    const caveatBuilder = createCaveatBuilder(getDeleGatorEnvironment(chain.id), { allowEmptyCaveats: true });

    const caveats = caveatBuilder
      .addCaveat("allowedMethods", [
        "approve(address,uint256)",
      ])
      .build();
  
    const rootDelegation = createRootDelegation(
      "0x0297d4570023132Ea881c3244807Badb6cfB8F59",
      smartAccount.address,
      caveats,
    );

    const rootDelegationSignature = await signDelegation(
        walletClient as any,
        rootDelegation, 
        DELEGATOR_CONTRACTS["1.1.0"][chain.id].DelegationManager as `0x${string}`,
        chain.id
    );
  
    const rootSignedDelegation = {
        ...rootDelegation,
        signature: rootDelegationSignature,
    };

    const delegationStorageClient = new DelegationStorageClient({
        apiKey: process.env.NEXT_PUBLIC_MM_API_KEY as string,
        apiKeyId: process.env.NEXT_PUBLIC_MM_API_KEY_ID as string,    
        environment: DelegationStorageEnvironment.dev
    });

    const hash = await delegationStorageClient.storeDelegation(rootSignedDelegation);
    console.log("Stored delegation with hash:", hash);
}