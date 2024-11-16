import { Chain } from "viem/chains"
import { getApprovalLogs, summarizeApprovals } from "./approvalLogs"
import { ApprovalSummary } from "../interfaces/approval"
import { getMoralisWalletApprovals, moralisSupportedChains } from "./moralis"

export async function walletApprovals(chain:Chain, walletAddress: string): Promise<ApprovalSummary[]> {
    if (!moralisSupportedChains.includes(chain as any)) { 
        const logs = await getApprovalLogs(chain, walletAddress)
        const summaries = await summarizeApprovals(chain, logs)
        return summaries
    } else {
        const approvals = await getMoralisWalletApprovals(chain, walletAddress);
        return approvals
    }
}