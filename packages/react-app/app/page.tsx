'use client';

import { Button } from '@/components/ui/button';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useAccount } from 'wagmi';

export default function Home() {
  const router = useRouter();
  const [userAddress, setUserAddress] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [hideConnectBtn, setHideConnectBtn] = useState(false);
  const { address, isConnected } = useAccount();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address);
      router.push('/dashboard');
    }
  }, [address, isConnected]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 380);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div 
    className="
      flex 
      flex-col 
      justify-center 
      items-center 
      gap-12 
      dark">
      <h1 className="scroll-m-20 text-4xl font-bold lg:leading-normal s lg:text-5xl text-center max-w-75 ">
      Safeguard your <br></br> wallet <Image 
        src="/head-wallet.png" 
        alt="Wallet Image" 
        width={80} 
        height={80} 
        className="inline-block mx-auto" 
      /> approvals against  <br></br> Future Exploits  <Image 
      src="/head-undead.png" 
      alt="Exploits Image" 
      width={80} 
      height={80} 
      className="inline-block mx-auto" 
    />
    </h1>
      <div className='flex flex-col gap-4 item-center'>
        {!hideConnectBtn && (
          <ConnectButton
            showBalance={{
              smallScreen: true,
              largeScreen: false,
            }}
            
          />
        )}
            <p className="text-sm text-muted-foreground">Supports all EVM chains</p>
      </div>
      {isSmallScreen ? (
        <Image 
          src="/hero-footer-small.png" 
          alt="Small Screen Image" 
          layout="fixed" 
          width={250} 
          height={200} 
          className="absolute bottom-0" 
        />
      ) : (
        <Image 
          src="/hero-footer.png" 
          alt="Description of image" 
          layout="fixed" 
          width={700} 
          height={400} 
          className="absolute bottom-0" 
        />
      )}
    </div>
  );
}
