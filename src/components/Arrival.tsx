'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useCartStore } from './context/cartStore'

interface ArrivalProps {
  ImageUrl: string,
  title: string,
  price: string,
  id: string
}

const Arrival: React.FC<ArrivalProps> = ({
  ImageUrl,
  title,
  price,
  id
}) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = async () => {
    try {
      await addToCart(id);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between p-4 bg-white rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg w-full sm:w-[300px]">
      <Link href={`/${id}`} className="w-full">
        <div className="flex flex-col items-center">
          <Image
            src={ImageUrl}
            alt={title}
            height={200}
            width={200}
            className="rounded-lg"
          />
          <div className="text-lg font-semibold mt-3 text-center">{title}</div>
          <div className="text-zinc-500 text-sm mt-1">{price}</div>
        </div>
      </Link>
      <button
        className="mt-4 px-6 py-2 bg-black text-white rounded-lg w-full text-center hover:bg-zinc-800 focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600 transition"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Arrival;
