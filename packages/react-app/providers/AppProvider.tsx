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
import { celo, celoAlfajores } from 'wagmi/chains';

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

const config = createConfig({
  connectors,
  chains: [celo, celoAlfajores],
  transports: {
    [celo.id]: http(),
    [celoAlfajores.id]: http(),
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
