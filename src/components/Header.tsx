import React from 'react';
import { CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci';
import Logo from './Logo';

const Header = () => {
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
        <CiShoppingCart
          className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 cursor-pointer"
          title="Shopping Cart"
        />
        <CiUser
          className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 cursor-pointer"
          title="User Profile"
        />
      </div>
    </header>
  );
};

export default Header;
    