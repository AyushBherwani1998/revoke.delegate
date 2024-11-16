import * as MultiBaas from '@curvegrid/multibaas-sdk';

export const transactionClient = () => {
    const basePath = new URL('/api/v0', process.env.MB_BASE_URL);
    const config = new MultiBaas.Configuration({
      basePath: basePath.toString(),
      accessToken: process.env.MB_API_KEY
    });
    
    const transactionClient = new MultiBaas.HsmApi(config);
    return transactionClient
}