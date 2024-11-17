'use client';

import '@rainbow-me/rainbowkit/styles.css';
import { ThemeProvider } from "@/components/theme-provider"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  RainbowKitProvider,
  connectorsForWallets,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { rootstock, unichainSepolia, mantle, zircuit, base, linea, morphSepolia, scroll, mainnet, polygon, celo ,  celoAlfajores, sepolia, lineaSepolia } from 'wagmi/chains';


import Layout from '../components/Layout';
import { injectedWallet } from '@rainbow-me/rainbowkit/wallets';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [injectedWallet],
    },
  ],
  {
    appName: 'Celo Composer',
    projectId: process.env.WC_PROJECT_ID ?? '044601f65212332475a09bc14ceb3c34',
  }
);

export const config = createConfig({
  connectors,
  chains: [sepolia, lineaSepolia, rootstock, unichainSepolia, mantle, zircuit, base, linea, morphSepolia, scroll, mainnet, polygon, celo ,  celoAlfajores],
  transports: {
    [sepolia.id]:http(),
    [lineaSepolia.id]:http(),
    [mainnet.id]:http(),
    [rootstock.id]:http(),
    [unichainSepolia.id]:http(),
    [mantle.id]:http(),
    [zircuit.id]:http(),
    [base.id]:http(),
    [linea.id]:http(),
    [morphSepolia.id]:http(),
    [scroll.id]:http(),
    [celo.id]: http(),
    [celoAlfajores.id]: http(),
    [polygon.id]:http(),

  },
});

const queryClient = new QueryClient();

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
<ThemeProvider attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
      <RainbowKitProvider theme={darkTheme({
        accentColor: '#22C25D',
        accentColorForeground: '#062E16',
        borderRadius: 'medium',
      })} >
          <Layout>{children}</Layout>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
    </ThemeProvider>
  );
}
