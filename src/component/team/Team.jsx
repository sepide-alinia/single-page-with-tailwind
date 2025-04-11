import React from "react";
import Title from "@/component/title/Title";
import teamBg from "../../images/team-bg.png";
import Profile from "../profile/Profile";
import ScrollAnimation from "react-animate-on-scroll";
import { FaArrowLeft } from "react-icons/fa6";

export default function Team() {
  return (
    <div className="h-[150vh] bg-[url('../../src/images/bg.jpg')] bg-cover ">
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <Title
          text={".ما یک تیم زیبا و قوی داریم"}
          class1={"text-5xl text-center text-white font-bold pt-20"}
          class2={"bg-white h-2 w-10 border rounded-full"}
          class3={"bg-white h-2 w-5 border rounded-full"}
        />
      </ScrollAnimation>

      <div className=" group relative h-fit w-11/12 xl:w-[98%] bg-primary_1  mx-auto rounded-2xl mt-28 pt-1 ">
        <div className=" w-10/12 mx-auto mt-24 text-center">
          <Profile />
        </div>
        <div className=" flex items-center justify-center">
          <img src={teamBg} className="w-11/12" />

            <div className="cursor-pointer bg-white hover:bg-black hover:text-white  shadow-[0px_0px_0px_10px_rgba(255,255,255,0.17),0px_0px_0px_22px_rgba(255,255,255,0.18)] transition duration-300  font-semibold tracking-wider flex items-center justify-center px-10 py-4 rounded-full absolute   ">
              <FaArrowLeft />
              <p className="pl-4 text-lg xl:text-base" >دیدن همه اعضا تیم</p>
            </div>

        </div>
       
      </div>
    </div>
  );
}
