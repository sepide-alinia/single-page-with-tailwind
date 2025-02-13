import React from 'react'
import preloader from "../../images/preloader.png"
export default function Loading() {
  return (
    <div className='flex justify-center items-center bg-primary_1 w-screen h-screen absolute top-0 left-0 z-2'>
        <img className='w-[8%] -translate-y-4 transition-transform' src={preloader}></img>
    </div>
  )
}
