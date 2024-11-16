'use client';

import { Button } from '@/components/ui/button';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { useAccount } from 'wagmi';

export default function Home() {
  const [userAddress, setUserAddress] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [hideConnectBtn, setHideConnectBtn] = useState(false);
  const { address, isConnected } = useAccount();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address);
    }
  }, [address, isConnected]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-12 dark">
      <h1 className="scroll-m-20 text-4xl font-bold lg:leading-normal s lg:text-5xl text-center max-w-75 ">
      Safeguard your <br></br> wallet approvals against  <br></br> Future Exploits
    </h1>
      <div>
        {!hideConnectBtn && (
          <ConnectButton
            showBalance={{
              smallScreen: true,
              largeScreen: false,
            }}
            
          />
        )}
      </div>
    </div>
  );
}
