'use client'

import CartProduct from '@/components/CartProduct';
import { useCartStore } from '@/components/context/cartStore'
import React, { useEffect } from 'react'

const page = () => {
  const { products, fetchCart } = useCartStore();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  console.log("Product Data:", products);
  return (
    <div className='flex justify-center'>
      <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
        {
          products.map((item, index) => (
            <CartProduct
              ImageUrl={item.image}
              id={item.id}
              price={item.price}
              title={item.title}
              key={index}
            />
          ))
        }
      </div>
    </div>
  )
}

export default page