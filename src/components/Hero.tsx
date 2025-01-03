import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex md:flex-row sm:flex-row flex-col justify-center gap-[70px] mt-9 p-9 bg-[#F2F0F1]'>
      <div className='flex flex-col gap-9 mt-[100px]'>
        <div className='font-bold text-[30px] md:text-[60px]'> FIND CLOTHES <br />THAT MATCHES <br />YOUR STYLE</div>
        <div className='text-[15px] md:text-[20px]'>Browse through our diverse range of garments, designed <br />to bring out  your individuality and cater to your sense of style.</div>
        <div><Button label='Shop Now'/></div>
      </div>
      <div>
        <Image src="/hero.png" alt='' height={600} width={600}  className='md:h-[600px] md:w-[600px] h-[400px] w-[400px]'/>
      </div>
    </div>
  )
}

export default Hero