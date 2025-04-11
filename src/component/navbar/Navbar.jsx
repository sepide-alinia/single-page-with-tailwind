import React from "react";
import logo from "../../images/header-logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { navbar } from "../../data/navbar";
import { FiAlignJustify } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className=" sticky top-0 z-50 shadow-[0_0_10px_0_rgba(0,0,0,0.2)] ">
      <div className=" h-[4.5rem] md:h-14 bg-primary_1 justify-end flex lg:justify-between items-center relative overflow-hidden ">
        
        <div className="flex items-center lg:flex-row-reverse">
          <div className="h-[60%]  border-r lg:border-none px-12 xl:px-8 relative flex  items-center  cursor-pointer">
            <span className=" px-[8px] bg-white rounded-full text-primary_1 absolute right-7 xl:right-3 -top-3 font-[vazir]">
              0
            </span>
            <FaShoppingCart className="text-white text-2xl md:text-xl " />
          </div>
          <div className="lg:hidden">
            <ul className="flex flex-row-reverse space-x-3 xl:space-x-1 text-white font-bold xl:font-semibold">
              {navbar.map((item, i) => (
                <li
                  key={i}
                  className="py-6 px-2 border-t-4 border-transparent hover:border-white transition ease-in-out cursor-pointer"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block pl-5">
            <FiAlignJustify className="text-white size-9 md:size-6 hover:cursor-pointer" />
          </div>
        </div>

        <div className="bg-white h-full skew-x-[45deg] flex items-center pr-64 xl:pr-36 pl-16 xl:pl-11 relative -right-20 xl:-right-28 overflow-hidden  ">
          <img
            src={logo}
            className="h-4/6 min-w-max md:size-10 -skew-x-[45deg] cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
}
