import React from 'react'
import blog from "../../../images/blog-1.jpg"
import PicGallery from '@/component/picGallery/PicGallery'

export default function FourthC() {
  return (
    <div className='order-first'>
    <h1 className='text-3xl text-right'>گالری تصاویر</h1>
    <div className="flex flex-wrap gap-2 w-11/12 mt-8 ml-auto">

    <PicGallery pic={blog}/>
    <PicGallery pic={blog}/>
    <PicGallery pic={blog}/>
    <PicGallery pic={blog}/>
    <PicGallery pic={blog}/>
    <PicGallery pic={blog}/>


    </div>
  </div>
  )
}
