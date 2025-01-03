'use client'

import React from 'react';
import { CiShoppingCart, CiUser } from 'react-icons/ci';
import Logo from './Logo';
import Link from 'next/link';
import { useCartStore } from './context/cartStore';

const Header = () => {
  const { products } = useCartStore();
  const addedItems: number = products.length
  return (
    <header className="flex flex-wrap items-center justify-between p-4 md:px-8 lg:px-12">
      {/* Logo Section */}
      <Logo />

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search here"
        className="bg-zinc-200 p-3 rounded w-full md:w-[400px] lg:w-[600px] xl:w-[800px] mt-3 md:mt-0"
      />

      {/* Icons Section */}
      <div className="flex gap-4 mt-3 md:mt-0">
        <Link href={"/cart"} className='flex items-center gap-2'>
          <CiShoppingCart
            className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 cursor-pointer"
            title="Shopping Cart"
          />
          <div className='text-xl font-medium'>({addedItems})</div>
        </Link>
        <CiUser
          className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 cursor-pointer"
          title="User Profile"
        />
      </div>
    </header>
  );
};

export default Header;
