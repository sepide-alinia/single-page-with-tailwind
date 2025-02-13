import React from "react";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { GiFactory } from "react-icons/gi";
import MediaIcons from "../mediaIcons/MediaIcons";

export default function Header() {
  return (
    <div className=" bg-[#282828] h-14 flex justify-evenly items-center sticky">
      <div className="flex cursor-pointer mr-12h">

        {/* <div className=" text-white p-2 transition border rounded-full mr-3 hover:text-primary_1 hover:border-primary_1 ">
          <FaPinterestP className="text-inherit size-4 " />
        </div> */}

        <MediaIcons icon={<FaPinterestP className="text-inherit size-4 " />}/>
        <MediaIcons icon={<FaLinkedinIn className="text-inherit size-4" />}/>
        <MediaIcons icon={<FaFacebookF className="text-inherit size-4 " />}/>
        <MediaIcons icon={<IoLogoTwitter className="text-inherit size-4  " />}/>

          

          

          

      </div>

      <div className="flex ml-[12rem]">
        <div className="flex mr-4 items-center">
          <p className="text-white mr-2 hover:text-primary_1 font-semibold transition cursor-pointer">
            ۰۹۱۱۱۱۱۱۱۱۱
          </p>
          <FiPhoneCall className="text-white size-5" />
        </div>
        <div className="flex mr-4 items-center">
          <p className="text-white mr-2 font-semibold">test@mail.com</p>
          <IoMailOutline className="text-white size-5" />
        </div>
        <div className="flex mr-4 items-center">
          <p className="text-white mr-2 font-semibold">
            !ما با صنایع جهانی کار می کنیم
          </p>
          <GiFactory className="text-white size-5" />
        </div>
      </div>
    </div>
  );
}
