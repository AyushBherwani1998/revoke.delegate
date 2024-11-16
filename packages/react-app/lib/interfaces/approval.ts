import { TokenDetails } from "./token";

export interface ApprovalSummary {
    spender: string;
    tokenAddress: string;
    value: number;
    transactionHash: string;
    owner: string;
    tokenDetails?: TokenDetails;
    valueAtRisk?: number;
}