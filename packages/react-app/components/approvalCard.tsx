import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'



export default function ApprovalCard() {
  return (
    
   <div> <Card className="min-w-[340px]">
  <div className=' p-6 pb-3 flex flex-row inline-block align-middle gap-1 border-b-2'>
     <p className='font-bold'>USDC</p>
     <p className='text-zinc-400'>• 23.45 USDC at Risk</p>  {/* {value_at_risk}+{token_ticker} */}
  </div>
   <div className='flex flex-row gap-4 pt-4'>
   <CardContent>
     <p className='text-zinc-400 text-sm pb-1'>Approved Amount</p>
     <p className='text-sm'>Unlimited USDC</p> {/* {amount} + {ticker} */}
   </CardContent>
   <CardContent >
     <p className='text-zinc-400 text-sm pb-1'>Spender</p>
     <p className='text-sm'>Uni-V2</p> {/* {owner} */}
   </CardContent>
   </div>
   <div className='pl-4 pr-4 flex flex-row gap-16'>
  <div className="overflow-hidden h-[72px] w-[96px]">
    <img src="https://dynamic-assets.coinbase.com/41f6a93a3a222078c939115fc304a67c384886b7a9e6c15dcbfa6519dc45f6bb4a586e9c48535d099efa596dbf8a9dd72b05815bcd32ac650c50abb5391a5bd0/asset_icons/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc.png"  
    className="w-full h-full object-cover object-top" >
    </img>
    </div>
    {/* <button className=' h-10 border-2 border-green-500 fill-none p-1 text-sm !rounded-lg'>Revoke Now</button> */}
    <Button>Revoke now</Button>
     </div>
 </Card></div>
  )
}
