import React from 'react'
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { BiLogoTelegram } from "react-icons/bi";
import { ImMobile } from "react-icons/im";

export default function ThirdC() {
  return (
    <div className='text-right '>
          <h1 className='text-3xl'>خبرنامه</h1>
          <div className="rounded-[5px] flex  mt-8 ml-auto items-center bg-white w-fit">
            <HiOutlineArrowSmLeft className=' bg-primary_1 size-12 mr-4 p-2 rounded-l-[5px]'/>
            <input
              type="email"
              className="focus:outline-none text-gray-500 rounded-[5px] text-right p-2 "
              placeholder="...مشترک شوید"
            />
          </div>
          <h1  className='text-3xl mt-4'>تماس با ما</h1>
          <div className="flex justify-end items-center my-4 ">
             <p className='font-semibold  transition hover:text-primary_1'>۰۹۱۱۱۱۱۱۱۱۱</p>
            <BiLogoTelegram  className='text-primary_1 ml-2 size-5'/>
          </div>
          <div className="flex justify-end items-center my-4">
            <p  className='font-semibold hover:text-primary_1 transition'>test@mail.com</p>
            <ImMobile className='text-primary_1 ml-2 size-5'/>
          </div>
    </div>
  )
}
