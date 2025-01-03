import React from 'react'
import { arrivalData } from './data/arrival'
import Arrival from './Arrival'

const Arrivals = () => {
  return (
    <div className='flex flex-col items-center mt-[50px]'>
        <div className='font-bold text-[30px]'>New Arrivals</div>
        <div className='grid md:grid-cols-4 justify-center gap-8 mt-[30px]'>
          {
            arrivalData.map((item,index)=>{
              return(
              <Arrival
              ImageUrl={item.imageUrl}
              title={item.title}
              price={item.price}
              key={index}
              id={item.id}

               />
              )
            })
          }

        </div>
    </div>
  )
}

export default Arrivals