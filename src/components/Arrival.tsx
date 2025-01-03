import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface ArrivalProps{
    ImageUrl:string,
    title:string,
    price:string,
    id:number
}
const Arrival:React.FC<ArrivalProps> = ({
    ImageUrl,
    title,
    price,
    id
}) => {
  return (
  <Link href={`/${id}`}>
    <div className='flex flex-col bg-zinc-200 p-3 items-center w-[250px] rounded-2xl'>
        <Image src={ImageUrl} alt='' height={200} width={200} />
        <div className='text-[15px] font-semibold mt-4'>{title}</div>
        <div className='text-zinc-500'>{price}</div>

    </div>
  </Link>
  )
}

export default Arrival