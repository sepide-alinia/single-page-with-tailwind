import React from "react";

export default function PicGallery({ pic }) {
  return (
    <div className="w-[30%] relative">
      <img
        className=" rounded-xl aspect-square object-cover brightness-[.75] saturate-150"
        src={pic}
      />
      <div className="opacity-0 hover:opacity-50 transition bg-primary_1 h-full w-full rounded-xl absolute left-0 top-0 z-10 text-center">
        <p className="flex justify-center h-full items-center text-4xl ">+</p>
      </div>
    </div>
  );
}
