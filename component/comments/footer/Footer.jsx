import React from "react";
import FirstC from "./FirstC";
import SecondC from "./secondC";
import ThirdC from "./ThirdC";
import FourthC from "./FourthC";
import Cntr from "@/component/cntr/Cntr";

export default function Footer() {
  return (
    <div className="h-[65vh] bg-[url('/src/images/footer-image.png')] bg-[#282828] bg-no-repeat bg-center bg-contain pt-24">
      <div className="h-[88%]">
        <Cntr>
          <div className="grid grid-cols-4 text-white gap-x-4">
            <FirstC />
            <SecondC />
            <ThirdC />
            <FourthC />
          </div>
        </Cntr>
      </div>
      {/* footer row */}
      <div className="text-white flex items-center justify-around text-xl">
        <div>طراحی شده توسط اوج طراحی| induxter </div>
        <div> .تمامی حقوق محفوظ است |induxter ۲۰۲۱ ©</div>
      </div>
    </div>
  );
}
