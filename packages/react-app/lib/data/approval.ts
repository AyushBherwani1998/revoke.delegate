import { Chain, sepolia } from "viem/chains"
import { getApprovalLogs, summarizeApprovals } from "./approvalLogs"
import { ApprovalSummary } from "../interfaces/approval"
import { getMoralisWalletApprovals } from "./moralis"
import { createPublicClient, http } from "viem"

export async function walletApprovals(chain:Chain, walletAddress: string): Promise<ApprovalSummary[]> {
    if (chain.id !== sepolia.id) { 
        const publicClient = createPublicClient({
            chain,
            transport: http()
        })
        const logs = await getApprovalLogs(publicClient, walletAddress)
        const summaries = await summarizeApprovals(publicClient, logs)
        return summaries
    } else {
        const approvals = await getMoralisWalletApprovals(walletAddress);
        return approvals
    }
}