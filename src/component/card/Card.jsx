import React from 'react'
import { FaPlay } from "react-icons/fa6";

export default function Card({title,text,link,src,poster}) {

  if(title){
  return (
    <div className='group w-[31.5%] h-fit bg-cardBg hover:bg-primary_1 hover:text-white  p-[45px] relative  transition duration-500 ease-in-out'>
        <h1 className='group-hover:text-white text-2xl mb-6 w-fit'>{title}</h1>
        <p className='text-[#8d8d8d] group-hover:text-white  mb-8 '>{text}</p>
        <a href="#" className='text-primary_1 group-hover:text-white  text-lg font-bold border-r-4 border-primary_1 group-hover:border-white  pr-4'>{link}</a>
        <div className='triangle absolute bottom-4 left-4 group-hover:border-b-white '></div>
    </div>
  )
}else{
  return(
    <div className='w-[31.5%] bg-[#FFF2ED] relative aspect-video '>
      <video poster={poster} src={src}></video>
      <div className=' pulse bg-primary_1 rounded-full w-20 h-20 z-5 flex justify-center items-center absolute top-[40%] right-[40%] cursor-pointer'>
        <FaPlay className='text-white size-5'/>
      </div>
    </div>

  )
}
}
