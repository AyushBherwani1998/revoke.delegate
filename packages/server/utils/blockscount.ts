import { Chain } from "viem";
import { baseSepolia, celo, celoAlfajores, lineaSepolia, mantleSepoliaTestnet, polygonAmoy, sepolia } from "viem/chains";

export async function getBlockscountUrl(chain:Chain, transactionHash:string) {
    if(chain === sepolia) {
        return `https://eth-sepolia.blockscout.com/tx/${transactionHash}`
    } else if(chain === lineaSepolia) {
        return `https://sepolia.lineascan.build/tx/${transactionHash}`
    } else if(chain === baseSepolia) {
        return `https://base-sepolia.blockscout.com/tx/${transactionHash}`
    } else if(chain === mantleSepoliaTestnet) {
        return `https://explorer.sepolia.mantle.xyz/tx/${transactionHash}`
    } else if(chain === polygonAmoy) {
        return `https://www.oklink.com/amoy/tx/${transactionHash}`
    } else if(chain=== celoAlfajores) {
        return `https://celo-alfajores.blockscout.com/tx/${transactionHash}`
    } else if(chain === celo) {
        return `https://explorer.celo.org/mainnet/tx/${transactionHash}`
    }
}