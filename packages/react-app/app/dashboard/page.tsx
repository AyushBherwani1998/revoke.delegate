import React from 'react'
import Image from 'next/image';
import ApprovalCard from '@/components/approvalCard';
import { Button } from '@/components/ui/button';


export default function page() {
  return (
    <div>
    
<div className='flex flex-row'>
    <div className='flex flex-col gap-4'>
      <p className="text-m text-muted-foreground">Chain Name • Address</p>
      <div className='flex flex-row gap-4 items-baseline'>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">10 Approvals</h3>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-red-600">at risk</h4>
      </div>
      
      <p className="text-xl text-muted-foreground">Delegate them be auto revoked in cases of an exploit</p>
    </div>
     <Image src="/pepe-risk.svg" alt="pepe-risk" width={32} height={32} style={{ width: '10rem', height: '10rem' }}/>
     </div>
     <Button>Delegate all approvals</Button>

    <div className='grid grid-cols-3 gap-12 pt-12'>
    <ApprovalCard></ApprovalCard>
    <ApprovalCard></ApprovalCard>
    <ApprovalCard></ApprovalCard>
    <ApprovalCard></ApprovalCard>
    </div>
    
     
    </div>
  )
}
