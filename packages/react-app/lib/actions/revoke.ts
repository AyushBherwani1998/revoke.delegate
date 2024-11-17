import { ApprovalSummary } from "../interfaces/approval";
import { encodeFunctionData, erc20Abi, parseEther } from "viem";
import { getSmartAccountClient } from "./smartAccount";
import { SmartAccount } from "viem/account-abstraction";
import { encodeNonce } from "permissionless";
import { getBlockscountUrl } from "../utils";

export async function revokeApproval(approval: ApprovalSummary, smartAccount: SmartAccount) {
    const smartAccountClient = await getSmartAccountClient(smartAccount);
    const revokeData = encodeFunctionData({
        abi: erc20Abi,
        functionName: 'approve',
        args: [approval.spender as `0x${string}`, BigInt(0)],
    })

    const parallelNonce1 = encodeNonce({
        key: BigInt(Date.now()),
        sequence: BigInt(0),
    })

    const hash = await smartAccountClient.sendTransaction({
        nonce: parallelNonce1,
        calls: [{
            to: approval.tokenAddress as `0x${string}`, 
            data: revokeData,
            value: BigInt(0),
        }],
    })


    return getBlockscountUrl(smartAccount.client.chain!!,hash)
}

export async function approve( smartAccount: SmartAccount) {
    const smartAccountClient = await getSmartAccountClient(smartAccount);
    
    const revokeData = encodeFunctionData({
        abi: erc20Abi,
        functionName: 'approve',
        args: ["0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238", BigInt(1000)],
    })

    const parallelNonce1 = encodeNonce({
        key: BigInt(Date.now()),
        sequence: BigInt(0),
    })

    const hash = await smartAccountClient.sendUserOperation({
        nonce: parallelNonce1,
        calls: [{
            to: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238" as `0x${string}`, 
            data: revokeData,
            value: BigInt(0),
        }],
    })

    return hash
}