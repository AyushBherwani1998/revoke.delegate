export interface ApprovalLog {
    owner: string;
    spender: string;
    value: bigint;
    blockNumber: bigint;
    transactionHash: string;
    tokenAddress?: string;
}