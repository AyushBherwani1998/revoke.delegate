import { Chain, mainnet, sepolia } from "viem/chains"
import { getApprovalLogs, summarizeApprovals } from "./approvalLogs"
import { ApprovalSummary } from "../interfaces/approval"
import { getMoralisWalletApprovals } from "./moralis"
import { createPublicClient, http } from "viem"

export async function walletApprovals(chain:Chain, walletAddress: string): Promise<ApprovalSummary[]> {
    if (false) { 
        const approvals = await getMoralisWalletApprovals(walletAddress);
        return approvals
    } else {
        const approvals = await getMoralisWalletApprovals(walletAddress);
        return approvals
    }
}