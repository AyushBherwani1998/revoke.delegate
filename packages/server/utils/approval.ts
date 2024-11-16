import { sepolia } from "viem/chains"
import { getApprovalLogs, summarizeApprovals } from "./approvalLogs"
import { ApprovalSummary } from "../interfaces/approval"
import { getMoralisWalletApprovals } from "./moralis"

export async function walletApprovals(publicClient: any, walletAddress: string): Promise<ApprovalSummary[]> {
    if (publicClient.chain.id !== sepolia.id) { 
        const logs = await getApprovalLogs(publicClient, walletAddress)
        const summaries = await summarizeApprovals(publicClient, logs)
        return summaries
    } else {
        const approvals = await getMoralisWalletApprovals(walletAddress);
        return approvals
    }
}