import { sepolia } from "viem/chains"
import { getApprovalLogs, summarizeApprovals } from "./approvalLogs"
import { ApprovalSummary } from "../interfaces/approval"
import { getMoralisWalletApprovals, moralisSupportedChains } from "./moralis"

export async function walletApprovals(publicClient: any, walletAddress: string): Promise<ApprovalSummary[]> {
    if (!moralisSupportedChains.includes(publicClient.chain)) { 
        const logs = await getApprovalLogs(publicClient, walletAddress)
        const summaries = await summarizeApprovals(publicClient, logs)
        return summaries
    } else {
        const approvals = await getMoralisWalletApprovals(walletAddress);
        return approvals
    }
}