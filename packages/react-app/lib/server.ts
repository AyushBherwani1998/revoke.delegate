import axios from 'axios';

export async function getWalletApprovals(walletAddress: string, chainId: string) {
    try {
        const response = await axios.get(
            `https://deep-index.moralis.io/api/v2.2/wallets/${walletAddress}/approvals`, 
            {
                params: {
                    chain: "0x" + parseInt(chainId).toString(16), //int mein fetch and hexm 
                    limit: 100
                },
                headers: {
                    'accept': 'application/json',
                    'X-API-Key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ijg2N2E4YzcyLTRkNzMtNDQ0My1hMDFkLTA3OGJhNjIzZDUxMiIsIm9yZ0lkIjoiNDE0Njk4IiwidXNlcklkIjoiNDI2MTgzIiwidHlwZUlkIjoiY2YzYjdkZjItMjJhYi00Y2RkLWExYjktM2FlMzE1NzVhMTFjIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MzA1NjE2NzEsImV4cCI6NDg4NjMyMTY3MX0.rSzLq1p3mH4xt32DOAw554MPA3sI5v-TDV3qBkdLrq8'
                }
            }
        );

        console.log("API Response:", response.data); // Log the entire response

        // Process the approvals
        const approvals = response.data.result.map((approval: any) => ({
            tokenAddress: approval.token.address,
            spender: approval.spender,
            amount: approval.value,
            amountFormatted: approval.value_formatted,
            tokenName: approval.token.name,
            tokenSymbol: approval.token.symbol,
            tokenDecimals: approval.token.decimals,
            blockTimestamp: approval.block_timestamp,
            valueAtRisk: approval.token.usd_at_risk,
            tokenImage: approval.token.logo
        }));

        return approvals;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('API Error:', error.response?.data || error.message);
        } else {
            console.error('Error:', error);
        }
        throw error;
    }
}


