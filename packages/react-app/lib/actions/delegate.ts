import { SmartAccount } from "viem/account-abstraction";
import { getSmartAccountClient } from "./smartAccount";
import { createCaveatBuilder, getDeleGatorEnvironment } from "@codefi/delegation-utils";
import { createRootDelegation, signDelegation } from "@codefi/delegator-core-viem";
import { sepolia } from "viem/chains";
import { createWalletClient, custom, WalletClient } from "viem";

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
        '0x56D56e07e3d6Ee5a24e30203A37a0a460f42D7A3',
        chain.id
    );
  
    const rootSignedDelegation = {
        ...rootDelegation,
        signature: rootDelegationSignature,
    };

    console.log(rootSignedDelegation);
}