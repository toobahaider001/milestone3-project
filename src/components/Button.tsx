import React from 'react'
interface ButtonProps{
    label:string
}
const Button:React.FC<ButtonProps> = ({label}) => {
  return (
    <button className='bg-black w-[200px] h-[50px] text-white rounded-3xl'>{label}</button>
  )
}

export default Button