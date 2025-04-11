import React from 'react'
import { FaPlay } from "react-icons/fa6";

export default function Card({title,text,link,src,poster}) {

  if(title){
  return (
    <div className=' shrink-0 group max-w-[350px] lg:max-w-[500px]  min-h-fit lg:mt-10 bg-cardBg hover:bg-primary_1 hover:text-white  p-[45px] relative  transition duration-mt-1000 ease-in-out'>
        <h1 className='group-hover:text-white text-2xl mb-6 '>{title}</h1>
        <p className='text-[#8d8d8d] group-hover:text-white  mb-8 '>{text}</p>
        <a href="#" className='text-primary_1 group-hover:text-white  text-lg font-bold border-r-4 border-primary_1 group-hover:border-white  pr-4'>{link}</a>
        <div className='triangle absolute bottom-4 left-4 group-hover:border-b-white '></div>
    </div>
  )
}else{
  return (
    <div className=" shrink-0 max-w-[350px] lg:max-w-[500px]  relative lg:mt-10">
      <img className="lg:h-[500px] sm:h-[450px]" src={src} alt="image" />
      <div className="pulse bg-primary_1 rounded-full w-16 h-16 z-5 absolute top-[40%] left-[40%] transform  flex justify-center items-center cursor-pointer">
        <FaPlay className="text-white text-2xl" />
      </div>
    </div>
  )
  
}
}
