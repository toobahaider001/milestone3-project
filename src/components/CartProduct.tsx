'use client'

import Image from 'next/image'
import React from 'react'

interface CartProductProps {
  id: string
  ImageUrl: string
  title: string
  price: string
}

const CartProduct: React.FC<CartProductProps> = ({
  id,
  ImageUrl,
  title,
  price,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white rounded-xl shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg w-full">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img
          src={'https://images.pexels.com/photos/747470/pexels-photo-747470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
          alt={title}
          height={100}
          width={100}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <div className="flex flex-col text-center sm:text-left">
          <div className="text-lg font-semibold">{title}</div>
          <div className="text-zinc-500 text-sm mt-1">{price}</div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
