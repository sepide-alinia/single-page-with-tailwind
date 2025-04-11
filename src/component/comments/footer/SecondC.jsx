import React from 'react'
import { HiOutlineArrowSmLeft } from "react-icons/hi";

export default function SecondC() {
  return (
    <div className=' text-right'>
          <h1 className='text-3xl'> دسترسی سریع</h1>
          <div className='mt-8'>
            <div className="flex justify-end items-center text-xl mt-4">
              <a  className=' transition hover:text-primary_1' href="#">درباره ما</a>
              <HiOutlineArrowSmLeft className='ml-2 ' />
            </div>
            <div className="flex justify-end items-center text-xl mt-4 ">
              <a className=' transition hover:text-primary_1'  href="#">تماس با ما</a>
              <HiOutlineArrowSmLeft className='ml-2 ' />
            </div>
            <div className="flex justify-end items-center text-xl mt-4 ">
              <a className=' transition hover:text-primary_1'  href="#">مطالب وبلاگ</a>
              <HiOutlineArrowSmLeft className='ml-2 ' />
            </div>
            <div className="flex justify-end items-center text-xl mt-4 ">
              <a className=' transition hover:text-primary_1'  href="#">خدمات ما</a>
              <HiOutlineArrowSmLeft className='ml-2 ' />
            </div>
          </div>
        </div>
        
)
}
