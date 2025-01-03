import React from 'react'
import Logo from './Logo'

const Footer = () => {
  return (
    <div className='flex md:flex-row flex-col justify-center gap-[100px] md:gap-[300px] mt-[150px]' >
        <div className='flex flex-col gap-9 '>
            <Logo />
            <div className='text-zinc-600'>We have clothes that suits your style and <br />which you're proud to wear.</div>
        </div>
        <div className='flex flex-col gap-7 text-[20px]'>
            <div className='font-bold'>Company</div>
            <div>About</div>
            <div>Features</div>
            <div>Works</div>
            <div>Career</div>
        </div>
        <div className='flex flex-col gap-7 text-[20px]'>
          <div className='font-bold'>Help</div>
          <div>Customer Support</div>
          <div>Delivery Details</div>
          <div>Terms & conditions</div>
          <div>Privacy Policy</div>
        </div>
    </div>
  )
}

export default Footer