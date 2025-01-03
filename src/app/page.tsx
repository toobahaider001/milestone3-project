'use client'

import Arrivals from "@/components/Arrivals";
import useHabitStore from "@/components/cart";
import useCart from "@/components/cart";
import Hero from "@/components/Hero";
import Line from "@/components/Line";
import { useState } from "react";

export default function Home() {
  const cart = useHabitStore();
  console.log(cart)
  return (

   <div>
    <Hero />
    <Line />
    <Arrivals />
   </div>
  );
}
