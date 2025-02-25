import React from 'react'
import logo from "../../../images/footer-logo.png"
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import MediaIcons from '@/component/mediaIcons/MediaIcons';

export default function FirstC() {
  return (
   <div className='order-last text-right'>
             <img className='ml-auto w-2/3 ' src={logo}></img>
             <p className="text-lg mt-8">
               این یک واقعیت طولانی است که یک خواننده از دیدن محتوای قابل خواندن
               از آن دور می شود
             </p>
   
             <div className="flex cursor-pointer justify-end mt-8">
               <MediaIcons
                 class1={"hover"}
                 icon={<FaPinterestP className="text-inherit size-4 " />}
               />
               <MediaIcons
                 class1={"hover"}
                 icon={<FaLinkedinIn className="text-inherit size-4" />}
               />
               <MediaIcons
                 class1={"hover"}
                 icon={<FaFacebookF className="text-inherit size-4 " />}
               />
               <MediaIcons
                 class1={"hover"}
                 icon={<IoLogoTwitter className="text-inherit size-4  " />}
               />
             </div>
           </div>
  )
}
