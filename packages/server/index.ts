import { createPublicClient, encodeFunctionData, erc20Abi, http} from "viem"
import { transactionClient } from "./utils/multibaas"
import { walletApprovals } from "./utils/approval";
import { sepolia } from "viem/chains";
import { ethers } from "ethers";
import { PushAPI, CONSTANTS } from '@pushprotocol/restapi';
import { createExecution, DelegationFramework, DelegationStorageClient, DelegationStorageEnvironment, DelegationStoreFilter, SINGLE_DEFAULT_MODE } from "@codefi/delegator-core-viem";
import { getBlockscountUrl } from "./utils/blockscount";
import { DELEGATOR_CONTRACTS } from "./utils/delegationContracts";

require('dotenv').config()

const main = async () => {
    const chain = sepolia;

    const delegationStorageClient = new DelegationStorageClient({
        apiKey: process.env.MM_API_KEY as string,
        apiKeyId: process.env.MM_API_KEY_ID as string,    
        environment: DelegationStorageEnvironment.dev
    });

    const delegations = (await delegationStorageClient.fetchDelegations(
        '0x0297d4570023132Ea881c3244807Badb6cfB8F59', 
        DelegationStoreFilter.Received
    ));

    

    const client = await transactionClient()    
    const exploitedAddress = '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238';
    const dmAddress = DELEGATOR_CONTRACTS["1.1.0"][chain.id].DelegationManager;

    const publicClient = createPublicClient({
        chain: chain,
        transport: http(),
    })

    const provider = new ethers.JsonRpcProvider(publicClient.chain.rpcUrls.default.http[0])
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY as `0x${string}`, provider);

    const userAlice = await PushAPI.initialize(signer, {
        env: CONSTANTS.ENV.STAGING,
    });

    for (const delegation of delegations) {
    const approvals = await walletApprovals(publicClient, delegation.delegator);
    console.log(approvals)
    for (const approval of approvals) {
        if (approval.spender.toLowerCase() === exploitedAddress.toLowerCase()) {
            console.log("Token Exploited", approval.tokenAddress, approval.spender)

            const approveData = encodeFunctionData({
                abi: erc20Abi,
                functionName: "approve",
                args: [exploitedAddress, 0n],
            });

            const execution = createExecution(approval.tokenAddress as `0x${string}`, 0n, approveData);

            const reedemData = DelegationFramework.encode.redeemDelegations(
                [[delegation]],
                [SINGLE_DEFAULT_MODE],
                [[execution]]
            );
              
            const calculatedGas = await publicClient.estimateGas({
                account: '0x0297d4570023132Ea881c3244807Badb6cfB8F59',
                to: dmAddress as `0x${string}`,
                data: reedemData,
            })
    
            const transaction = client.signAndSubmitTransaction("ethereum", {
                tx: {
                    from: '0x0297d4570023132Ea881c3244807Badb6cfB8F59',
                    to: dmAddress,
                    value: '0',
                    data: reedemData,
                    gas: Math.round(Number(calculatedGas) * 1.4),
                    type: 0,
                }
            })
    
            transaction.then((tx) => {
                console.log("Transaction:", tx)
                userAlice.channel.send(['0x9ebFDccedb5001DC3d62099460A4B9B52BeC1A50'], {
                    notification: {
                      title: 'Token Approval Revoked',
                      body: `There was an exploit for contract ${approval.spender}, and we have revoked the approval for the ${approval.tokenDetails?.name} token. Please check the hash ${getBlockscountUrl(publicClient.chain, tx.data.result.tx.hash!)} for more details.`,
                    },
                    channel: '0x9ebFDccedb5001DC3d62099460A4B9B52BeC1A50'
                  })
            })    
        }
        }
    }

    // const hash = await client.signAndSubmitTransaction("ethereum", {
    //     tx: {
    //         from: '0x0297d4570023132Ea881c3244807Badb6cfB8F59',
    //         to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
    //         value: parseEther('0.0001').toString(),
    //         data: "0x",
    //         gas: 21000,
    //         type: 0,
    //     }
    // })
    
//     const smartAccount = await toSafeSmartAccount({
//         client: publicClient,
//         owners: [account],
//         version: "1.4.1",
//         entryPoint: {
//             address: entryPoint07Address,
//             version: "0.7",
//         },
//       });

//       const pimlicoUrl = `https://api.pimlico.io/v2/sepolia/rpc?apikey=pim_WDBELWbZeo9guUAr7HNFaF`
 
//       const pimlicoClient = createPimlicoClient({
//           transport: http(pimlicoUrl),
//           entryPoint: {
//               address: entryPoint07Address,
//               version: "0.7",
//           },
//       });

//       const smartAccountClient = createSmartAccountClient({
//         account: smartAccount,
//         chain: sepolia,
//         bundlerTransport: http(pimlicoUrl),
//         paymaster: pimlicoClient,
//         userOperation: {
//             estimateFeesPerGas: async () => {
//                 return (await pimlicoClient.getUserOperationGasPrice()).fast
//             },
//         },
//     })

//    const hash = await smartAccountClient.sendTransaction({
//         to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
//         value: 0n,
//         data: "0x",
//     })
}

main()