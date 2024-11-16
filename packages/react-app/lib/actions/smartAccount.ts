import { Implementation, toMetaMaskSmartAccount } from '@codefi/delegator-core-viem';
import { Account, Chain, createPublicClient, createWalletClient, http, WalletClient } from 'viem';
import {createSmartAccountClient} from 'permissionless';
import { createPaymasterClient, entryPoint07Address } from 'viem/account-abstraction';
import { createPimlicoClient } from "permissionless/clients/pimlico";

export async function getSmartAccount(chain: Chain, account: any) {
    
    return await toMetaMaskSmartAccount({
        client: createPublicClient({chain: chain, transport: http()}),
        implementation: Implementation.Hybrid,
        deployParams: [account.account.address, [], [], []],
        deploySalt: '0x0',
        signatory: { walletClient: account },
    });
}

export async function getSmartAccountClient(account: Account) {
    const chain = account.client?.chain;

    const paymasterClient = createPaymasterClient({
        transport: http(`https://api.pimlico.io/v2/${chain?.id}/rpc?apikey=pim_WDBELWbZeo9guUAr7HNFaF`),
    });

    const pimlicoClient = createPimlicoClient({
        transport: http(`https://api.pimlico.io/v2/${chain?.id}/rpc?apikey=pim_WDBELWbZeo9guUAr7HNFaF`),
        entryPoint: {
            address: entryPoint07Address,
            version: "0.7",
        },
    })

    const client = createSmartAccountClient({
        account: account,
        bundlerTransport: http(`https://api.pimlico.io/v2/${chain?.id}/rpc?apikey=pim_WDBELWbZeo9guUAr7HNFaF`),
        paymaster: paymasterClient,
        userOperation: {
            estimateFeesPerGas: async () => {
                let { fast: fee } = await pimlicoClient.getUserOperationGasPrice();
                return fee;
            }
        }
    })

    return client;
}