import React from "react";
import FirstC from "./FirstC";
import SecondC from "./secondC";
import ThirdC from "./ThirdC";
import FourthC from "./FourthC";
import Cntr from "@/component/cntr/Cntr";

export default function Footer() {
  return (
    <div className="h-[65vh] lg:h-fit bg-[url('/src/images/footer-image.png')] bg-[#282828] bg-no-repeat bg-center bg-contain pt-24">
      <div className="h-[88%] ">
        <Cntr>
          <div className="grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1  text-white gap-4">
            <FirstC />
            <SecondC />
            <ThirdC />
            <FourthC />
          </div>
        </Cntr>
      </div>
      {/* footer row */}
      <div className="text-white flex items-center justify-around md:flex-col  text-xl lg:mt-10">
        <div className="md:my-2 md:text-sm">طراحی شده توسط اوج طراحی| induxter </div>
        <div className="md:my-2 md:text-sm"> .تمامی حقوق محفوظ است |induxter ۲۰۲۱ ©</div>
      </div>
    </div>
  );
}
