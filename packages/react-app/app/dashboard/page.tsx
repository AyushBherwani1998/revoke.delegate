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


export default function page() {
  const { chain, isConnected, address } = useAccount();
  const { data: client } = useConnectorClient({config: config });

  const userAddress = address;
  const userChain = isConnected ? chain : null;
  const [smartAccount, setSmartAccount] = useState<SmartAccount | null>(null);
  const [approvals, setApprovals] = useState<ApprovalSummary[]>([]);

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

        const approvalData = await walletApprovals(userChain, smartAccount.address);
        // approve(smartAccount).then((hash) => {
        //   console.log("Approved", hash);
        // });
        setApprovals(approvalData);
      }
    }
    
    fetchApprovals();
  }, [userChain, userAddress, client]);


  return (
    <div>
    
<div className='flex flex-row'>
    <div className='flex flex-col gap-4'>
      <p className="text-m text-muted-foreground">{userChain?.name} • {smartAccount?.address}</p>
      <div className='flex flex-row gap-4 items-baseline'>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{approvals.length} Approvals</h3>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-red-600">at risk</h4>
      </div>
      
      <p className="text-xl text-muted-foreground">Delegate them to be auto revoked in cases of an exploit</p>
    </div>
     <Image src="/pepe-risk.svg" alt="pepe-risk" width={32} height={32} style={{ width: '10rem', height: '10rem' }}/>
     </div>
     <Button onClick={() => delegate(client as any, smartAccount!!)}>Delegate all approvals</Button>

    <div className='grid grid-cols-3 gap-12 pt-12'>
    {approvals
      .map((approvals, index: number) => (
        <Card className="min-w-[340px]" key={index}>
        <div className=' p-6 pb-3 flex flex-row inline-block align-middle gap-1 border-b-2'>
           <p className='font-bold'>{approvals.tokenDetails?.name}</p>
           <p className='text-zinc-400'>• {approvals.valueAtRisk} USDC at Risk</p>  {/* {value_at_risk}+{token_ticker} */}
        </div>
         <div className='flex flex-row gap-4 pt-4'>
         <CardContent>
           <p className='text-zinc-400 text-sm pb-1'>Approved Amount</p>
           <p className='text-sm'>{BigInt(approvals.value) === maxUint256 || approvals.value > 10000
                  ? "Unlimited"
                  : approvals.value.toString()} {approvals.tokenDetails?.symbol}</p> {/* {amount} + {ticker} */}
         </CardContent>
         <CardContent >
           <p className='text-zinc-400 text-sm pb-1'>Spender</p>
           <p className='text-sm'>{approvals.spender}</p> {/* {owner} */}
         </CardContent>
         </div>
         <div className='pl-4 pr-4 flex flex-row gap-16'>
        <div className="overflow-hidden h-[72px] w-[96px]">
          <img src={approvals.tokenDetails?.logoUrl}  
          className="w-full h-full object-cover object-top" >
          </img>
          </div>
          <Button onClick={() => revokeApproval(approvals, smartAccount!!)}>Revoke now</Button>
           </div>
       </Card>
  ))}  
    </div>
            
     
    </div>
  )
}
