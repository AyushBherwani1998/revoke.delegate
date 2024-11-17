import { erc20Abi, formatUnits, parseAbiItem } from "viem"
import { ApprovalSummary } from "../interfaces/approval"
import { ApprovalLog } from "../interfaces/approvalLog"
import { TokenDetails } from "../interfaces/token"
import axios from "axios";

export async function getApprovalLogs(publicClient: any, walletAddress: string) {
    try {
        const currentBlock = await publicClient.getBlockNumber()
        const fromBlock = currentBlock - BigInt(1000)

        const logs = await publicClient.getLogs({
            event: parseAbiItem('event Approval(address indexed owner, address indexed spender, uint256 value)'),
            args: { 
                owner: walletAddress,
            },
            fromBlock: fromBlock,
            toBlock: currentBlock,
        })

        return logs.map((log: any) => ({
            owner: log.args.owner,
            spender: log.args.spender,
            value: log.args.value,
            blockNumber: log.blockNumber,
            transactionHash: log.transactionHash,
            tokenAddress: log.address // This is the token contract address
        }))
    } catch (error) {
        console.error('Error fetching approval logs:', error)
        throw error
    }
}

// Add this new function to fetch token details
export async function getTokenDetails(publicClient: any, tokenAddress: string): Promise<TokenDetails> {
    try {
        const [name, symbol, decimals] = await Promise.all([
            publicClient.readContract({
                address: tokenAddress as `0x${string}`,
                abi: erc20Abi,
                functionName: 'name',
            }),
            publicClient.readContract({
                address: tokenAddress as `0x${string}`,
                abi: erc20Abi,
                functionName: 'symbol',
            }),
            publicClient.readContract({
                address: tokenAddress as `0x${string}`,
                abi: erc20Abi,
                functionName: 'decimals',
            })
        ]);

        let usdPrice;
        let logoUrl;

        try {
            const [priceResponse] = await Promise.all([
                axios.get(
                    `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${tokenAddress}&vs_currencies=usd`
                ),
            ]);

            usdPrice = priceResponse.data[tokenAddress.toLowerCase()]?.usd;
        } catch (error) {
            console.error(`Error fetching token details for ${tokenAddress}:`, error);
        }

        return {
            name,
            symbol,
            decimals,
            usdPrice,
            logoUrl
        };
    } catch (error) {
        console.error(`Error fetching token details for ${tokenAddress}:`, error);
        return {
            name: 'Unknown',
            symbol: 'UNKNOWN',
            decimals: 18
        };
    }
}
export async function summarizeApprovals(publicClient: any, logs: ApprovalLog[]): Promise<ApprovalSummary[]> {
    const summaries: ApprovalSummary[] = [];
    
    for (const log of logs) {
        const tokenDetails = await getTokenDetails(publicClient, log.tokenAddress || '');
        const valueFormatted = formatUnits(log.value, tokenDetails.decimals);
        const valueUSD = tokenDetails.usdPrice ? 
            Number(valueFormatted) * tokenDetails.usdPrice : 
            undefined;

        summaries.push({
            spender: log.spender,
            tokenAddress: log.tokenAddress || '',
            value: Number(valueFormatted),
            transactionHash: log.transactionHash,
            owner: log.owner,
            tokenDetails,
            valueAtRisk: valueUSD
        });
    }

    return summaries;
}