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

import { getWalletApprovals } from "@/lib/server";
import { maxUint256 } from "viem";

import { useAccount } from 'wagmi';
import { useState, useEffect} from "react";

function address(){
  const { address, isConnected} = useAccount();
  return address
}

function chain() {
  const { chain, isConnected } = useAccount();
  console.log(chain?.id)
  return isConnected ? chain : null;
}



export default function page() {
  const userAddress = address();
  const userChain = chain();
  const [approvals, setApprovals] = useState([])

  useEffect(() => {
    const fetchApprovals = async () => {
      if (userAddress && userChain) {
        console.log("Calling getWalletApprovals with address:", userAddress);
        const approvalData = await getWalletApprovals(userAddress, userChain.id.toString());
        console.log("Fetched approvals:", approvalData);
        setApprovals(approvalData);
      }
    }
    
    fetchApprovals();
  }, [userAddress, userChain?.id]);


  return (
    <div>
    
<div className='flex flex-row'>
    <div className='flex flex-col gap-4'>
      <p className="text-m text-muted-foreground">{userChain?.name} • {userAddress}</p>
      <div className='flex flex-row gap-4 items-baseline'>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{approvals.length} Approvals</h3>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-red-600">at risk</h4>
      </div>
      
      <p className="text-xl text-muted-foreground">Delegate them to be auto revoked in cases of an exploit</p>
    </div>
     <Image src="/pepe-risk.svg" alt="pepe-risk" width={32} height={32} style={{ width: '10rem', height: '10rem' }}/>
     </div>
     <Button>Delegate all approvals</Button>

    <div className='grid grid-cols-3 gap-12 pt-12'>
    {approvals
      .map((approvals: { tokenName: string; spender: { address_label: string }; amount: string; valueAtRisk: string; tokenImage: string  }, index: number) => (
        <Card className="min-w-[340px]" key={index}>
        <div className=' p-6 pb-3 flex flex-row inline-block align-middle gap-1 border-b-2'>
           <p className='font-bold'>{approvals.tokenName}</p>
           <p className='text-zinc-400'>• {approvals.valueAtRisk} USDC at Risk</p>  {/* {value_at_risk}+{token_ticker} */}
        </div>
         <div className='flex flex-row gap-4 pt-4'>
         <CardContent>
           <p className='text-zinc-400 text-sm pb-1'>Approved Amount</p>
           <p className='text-sm'>{BigInt(approvals.amount) === maxUint256 || parseInt(approvals.amount) > 10000
                  ? "Unlimited"
                  : BigInt(approvals.amount).toString()} {approvals.tokenName}</p> {/* {amount} + {ticker} */}
         </CardContent>
         <CardContent >
           <p className='text-zinc-400 text-sm pb-1'>Spender</p>
           <p className='text-sm'>{approvals.spender.address_label}</p> {/* {owner} */}
         </CardContent>
         </div>
         <div className='pl-4 pr-4 flex flex-row gap-16'>
        <div className="overflow-hidden h-[72px] w-[96px]">
          <img src={approvals.tokenImage}  
          className="w-full h-full object-cover object-top" >
          </img>
          </div>
          <Button>Revoke now</Button>
           </div>
       </Card>
  ))}  
    </div>
            
     
    </div>
  )
}
