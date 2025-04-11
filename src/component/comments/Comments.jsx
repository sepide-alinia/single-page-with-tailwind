import React from "react";
import Title from "../title/Title";
import { commentCard } from "@/data/commentCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavArrowR from "../navArrows/NavArrowsR";
import NavArrowsL from "../navArrows/NavArrowsL";
import Starts from "../stars/Starts";
import ScrollAnimation from "react-animate-on-scroll";

export default function Comments() {

const  settings = {
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  nextArrow: <NavArrowsL 
  class1={"bg-primary_1 text-white absolute -right-28 lg:-right-14 -top-20 h-fit p-3 rounded-[.3rem] mt-[12rem] mr-4 translate-x-16 group-hover:-translate-x-1 opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer"}
  />,
  prevArrow: <NavArrowR 
   class1={"bg-primary_1 text-white absolute -left-20 lg:-left-8 -top-20 h-fit p-3 rounded-[.3rem] mt-[12rem] mr-4 -translate-x-16 group-hover:-translate-x-1 opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer"}
   />,
   responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
 ]
};
  return (
    <div className="h-[95vh]   m-auto">
      
      <ScrollAnimation animateIn="fadeInUp" animateOnce >

      <Title
        text={"آنچه مشتریان درباره     شرکت ما می گویند"}
        class1={
          "text-6xl lg:text-5xl text-center pt-20 w-1/3 lg:w-11/12 m-auto leading-[4rem]"
        }
        class2={"bg-primary_1 h-2 w-10 border rounded-full"}
        class3={"bg-primary_1 h-2 w-5 border rounded-full"}
        />

        </ScrollAnimation>

        <div className="group">
          <Slider {...settings} className="mt-20 m-auto w-[80%] lg:w-11/12">
            {commentCard.map((item) => (
              <div key={item.title} className="   !flex flex-row-reverse">
                <div className=" size-24  relative  top-10  ">
                  <img className="rounded-full " src={item.img} />
                </div>
                
                
                <div className="bg-cardBg rounded-xl relative p-8 text-[#5b5b5b] mr-6 text-right w-3/4 leading-relaxed text-lg">
                
                <div className="smallTriangle absolute -right-5 mt-6"></div>
                  
                  <p>{item.comment}</p>

                  <div className="flex justify-between items-center mt-8">
                    <Starts rating={item.rating}></Starts>
                    <div>
                      <p className="text-2xl font-black pb-2">{item.name}</p>
                      <p className="">{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
  );
}
