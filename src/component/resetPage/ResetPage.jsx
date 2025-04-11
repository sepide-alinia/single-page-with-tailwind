import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
export default function ResetPage({isVisible,onclick}) {
  return (
    <div className={`
    ${isVisible ? 'opacity-1' : 'opacity-0'}
    bg-primary_1 rounded-full h-fit p-5 fixed z-20 left-10 bottom-10 cursor-pointer transition ease-in-out`}
    onClick={onclick}
    >
        <FaArrowUp className='text-white size-5'/>
    </div>
  )
}
