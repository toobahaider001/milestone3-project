import { arrivalData } from '@/components/data/arrival'
import Image from 'next/image'
import React from 'react'
interface Iparams{
    params:{
        id:number
    }
}
const page = ({params:{id}}:Iparams) => {
  const data =arrivalData.find((item)=>{
    return id == item.id
  })
  return (
    <div className='flex justify-center mt-9'>
    <div className='mt-9 h-[650px]  bg-zinc-200 w-[700px] p-9 items-center flex flex-col rounded-2xl'>
    <Image src={data?.imageUrl} alt="" height={500} width={500} className='h-[500px] w-[500px]'/>
    <div className='text-[40px]'>{data?.title}</div>
    <div className='text-[30px] text-zinc-400 '>{data?.price}</div>
    </div>
    </div>
  )
}

export default page