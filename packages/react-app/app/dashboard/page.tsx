'use client'

import React from 'react'
import Image from 'next/image';
import ApprovalCard from '@/components/approvalCard';
import { Button } from '@/components/ui/button';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { createWalletClient, custom, http, maxUint256, PrivateKeyAccount } from "viem";

import { useAccount, useConfig, useConnectorClient } from 'wagmi';
import { getAccount, watchAsset } from 'wagmi/actions';
import { useState, useEffect} from "react";
import { walletApprovals } from '@/lib/data/approval';
import { ApprovalSummary } from '@/lib/interfaces/approval';
import { getSmartAccount } from '@/lib/actions/smartAccount';
import { config } from '@/providers/AppProvider';
import { SmartAccount } from 'viem/account-abstraction';
import { approve, revokeApproval } from '@/lib/actions/revoke';
import { delegate } from '@/lib/actions/delegate';
import { mainnet } from 'viem/chains';
import { Badge } from '@/components/ui/badge';


export default function page() {
  const { chain, isConnected, address } = useAccount();
  const { data: client } = useConnectorClient({config: config });

  const userAddress = address;
  const userChain = isConnected ? chain : null;

  const [smartAccount, setSmartAccount] = useState<SmartAccount | null>(null);
  const [approvals, setApprovals] = useState<ApprovalSummary[]>([]);

  const [isLoadingRevoke, setIsLoadingRevoke] = useState(false);
  const [isLoadingDelegate, setIsLoadingDelegate] = useState(false);

  const [isRevoke, setRevoke] = useState(true);
  const [isDelegate, setDelegate] = useState(false);

  useEffect(() => {
    const fetchApprovals = async () => {
      if (userAddress && userChain && client) {

        const walletClient = createWalletClient({
          account: client.account.address,
          chain: userChain,
          transport: custom(window.ethereum),
        });

        const smartAccount = await getSmartAccount(userChain, walletClient);
        setSmartAccount(smartAccount);

        const approvalData = await walletApprovals(userChain, smartAccount?.address);
        // approve(smartAccount).then((hash) => {
        //   console.log("Approved", hash);
        // });
        setApprovals(approvalData);
      }
    }
    
    fetchApprovals();
  }, [userChain, userAddress, client]);

  const revoke = (approval: ApprovalSummary ) => {
    setIsLoadingRevoke(true);
    revokeApproval(approval, smartAccount!!).then((value) => {
      setRevoke(true);
    }).catch((error) => {
      setIsLoadingRevoke(false);
    })
  }

  const delegateRevoke = () => {
    setIsLoadingDelegate(true);
    delegate(client as any, smartAccount!!).then((value) => {
      setDelegate(true);
    }).catch((error) => {
      setIsLoadingDelegate(false);
    })
  }


  return (
    <div className='dark p-4'>
      {(isLoadingRevoke || isLoadingDelegate) && 
      <div className='flex flex-col-reverse items-center justify-center'>
        <div className='flex flex-row gap-2'>
        <p className='scroll-m-20 text-2xl font-semibold tracking-tight'>Preparing to revoke your approval(s)</p>
        <div className="flex space-x-1">
          <span className=' scroll-m-20 text-2xl font-semibold tracking-tight animate-bounce'>.</span>
          <span className=' scroll-m-20 text-2xl font-semibold tracking-tight animate-bounce delay-200'>.</span>
          <span className=' scroll-m-20 text-2xl font-semibold tracking-tight animate-bounce delay-400'>.</span>
        </div>
        </div>
        <img src='/loading-pepe.svg' className='ml-2 w-[12rem] h-auto'></img>
      </div>}

        {(isRevoke || isDelegate) && 
      <div className='flex flex-col gap-4'>
        <img src='/happy-pepe.svg' className='ml-2 w-[12rem] h-auto'></img>
        <p>Your Transaction is successful</p>
        <Button onClick={() => {setRevoke(false), setDelegate(false)}}>Manage your Approvals</Button>
        
        </div>}
{!(isRevoke || isLoadingDelegate || isLoadingRevoke || isDelegate) &&
<div>
<div className='flex flex-col-reverse md:flex-row lg:flex-row'>
    <div className='flex flex-col gap-4'>
      <p className="scroll-m-20 text-l font-semibold tracking-tight text-muted-foreground">Smart Account • {smartAccount?.address.slice(0, 4) + '...' + smartAccount?.address.slice(-4)}</p> 
      <div className='flex flex-row gap-4 items-baseline'>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{approvals.length} Approvals</h3>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-red-600">at risk</h4>
      </div>
      
      <p className="text-xl text-muted-foreground">Delegate them to be auto revoked in cases of an exploit</p>
    </div>
     <Image src="/pepe-risk.svg" alt="pepe-risk" width={32} height={32} style={{ width: '10rem', height: '10rem' }}/>
     </div>
     <Button className='mt-4' onClick={() => delegateRevoke()}>Delegate all approvals</Button>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 pt-12'>
    {approvals
      .map((approvals, index: number) => (
        <Card className="dark" key={index}>
        <div className=' p-6 pb-3 flex flex-row inline-block align-middle gap-1 border-b-2'>
           <p className='font-bold'>{approvals.tokenDetails?.name}</p>
           {approvals.valueAtRisk != null && (
             <p className='text-zinc-400'>• {parseFloat(approvals.valueAtRisk.toString() || '0.00').toFixed(2)} USD at Risk</p>  
           )}
        </div>
         <div className='flex flex-row gap-4 pt-4'>
         <CardContent className='w-1/2'>
           <p className='text-zinc-400 text-sm pb-1'>Approved Amount</p>
           <p className='text-sm'>{approvals.value > 10000
                  ? "Unlimited"
                  : approvals.value.toString()} {approvals.tokenDetails?.symbol}</p> {/* {amount} + {ticker} */}
         </CardContent>
         <CardContent className='w-1/2' >
           <p className='text-zinc-400 text-sm pb-1'>Spender</p>
           <p className='text-sm'>
             {approvals.spender.slice(0, 4) + '...' + approvals.spender.slice(-4)}
           </p> 
         </CardContent>
         </div>
         <div className='pl-4 pr-4 flex flex-row gap-16'>
        <div className="overflow-hidden h-[72px] w-[96px]">
          <img src={approvals.tokenDetails?.logoUrl || '/fallback-token.png'}  
          className="w-full h-full object-cover object-top rounded-t-full" >
          </img>
          </div>
          <Button variant={'outline'} onClick={() => revoke(approvals)}>Revoke now</Button>
           </div>
       </Card>
  ))}  
    </div>
    </div> }
            
     
    </div>
  )
}
