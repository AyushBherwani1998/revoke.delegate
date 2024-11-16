import { createPublicClient, encodeFunctionData, erc20Abi, http} from "viem"
import { transactionClient } from "./utils/multibaas"
import { walletApprovals } from "./utils/approval";
import { sepolia } from "viem/chains";
import { ethers } from "ethers";
import { PushAPI, CONSTANTS } from '@pushprotocol/restapi';


const main = async () => {
    require('dotenv').config()
    const client = await transactionClient()    
    const exploitedAddress = '0xfba3912ca04dd458c843e2ee08967fc04f3579c2';

    const publicClient = createPublicClient({
        chain: sepolia,
        transport: http(),
    })

    const provider = new ethers.JsonRpcProvider(publicClient.chain.rpcUrls.default.http[0])
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY as `0x${string}`, provider);

    const userAlice = await PushAPI.initialize(signer, {
        env: CONSTANTS.ENV.STAGING,
    });

    const approvals = await walletApprovals(publicClient, '0x9ebFDccedb5001DC3d62099460A4B9B52BeC1A50');

    for (const approval of approvals) {
        if (approval.spender.toLowerCase() === exploitedAddress.toLowerCase()) {
            console.log("Token Exploited", approval.tokenAddress, approval.spender)

            const approveData = encodeFunctionData({
                abi: erc20Abi,
                functionName: "approve",
                args: [exploitedAddress, 0n],
            });
    
            const calculatedGas = await publicClient.estimateGas({
                account: approval.owner as `0x${string}`,
                to: approval.tokenAddress as `0x${string}`,
                data: approveData,

            })
    
            const transaction = client.signAndSubmitTransaction("ethereum", {
                tx: {
                    from: '0x0297d4570023132Ea881c3244807Badb6cfB8F59',
                    to: approval.tokenAddress as `0x${string}`,
                    value: '0',
                    data: approveData,
                    gas: Number(calculatedGas),
                    type: 0,
                }
            })
    
            transaction.then((tx) => {
                console.log("Transaction:", tx)
                userAlice.channel.send(['0x9ebFDccedb5001DC3d62099460A4B9B52BeC1A50'], {
                    notification: {
                      title: 'Token Approval Revoked',
                      body: `There was an exploit for contract ${approval.spender}, and we have revoked the approval for the ${approval.tokenDetails?.name} token. Please check the hash ${tx.data.result.tx.hash} for more details.`,
                    },
                    channel: '0x9ebFDccedb5001DC3d62099460A4B9B52BeC1A50'
                  })
            })    
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