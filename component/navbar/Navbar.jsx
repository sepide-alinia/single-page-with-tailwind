import React from "react";
import logo from "../../images/header-logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { navbar } from "../../data/navbar";

export default function Navbar() {
  return (
    
    <div className=" sticky top-0 z-50 shadow-[0_0_10px_0_rgba(0,0,0,0.2)]">
      <div className=" h-[4.5rem] bg-primary_1 justify-end flex items-center relative overflow-hidden ">
        <div className="h-[60%] border-r px-4 md:px-12 relative flex items-center cursor-pointer">
          <span className=" px-[8px] bg-white rounded-full text-primary_1 absolute right-7 top-0 font-[vazir]">0</span>
          <FaShoppingCart className="text-white text-2xl " />
        </div>
        <div className="flex ">
        <ul className="flex flex-row-reverse space-x-3 text-white font-bold">
  {navbar.map((item, i) => (
    <li key={i} className="py-6 px-2 border-t-4 border-transparent hover:border-white transition ease-in-out cursor-pointer">
      {item.title}
    </li>
  ))}
</ul>
        </div>
        <div className="bg-white md:max-lg:bg-slate-500 h-full skew-x-[45deg] flex items-center  md:pr-44 xl:pr-64 pl-16 relative -right-20 overflow-hidden  ">
          <img src={logo} className="h-4/6 min-w-max -skew-x-[45deg] cursor-pointer " />
        </div>
      </div>
     </div>
  );
}
