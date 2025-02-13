import React, { useState } from "react";
import { profiles } from "../../data/profiles";
import { FaLink } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavArrowR from "../navArrows/NavArrowsR";
import NavArrowsL from "../navArrows/NavArrowsL";

export default function Profile() {

const  settings = {
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  nextArrow: <NavArrowsL />,
  prevArrow: <NavArrowR />
};
  
  const[profile] = useState(profiles)

  return (

    <Slider {...settings}  >

        {profile.map((item, i) => (
          <div key={i}>
            <div className="rounded-full relative  group/item">
              <div className="overflow-hidden rounded-full absolute right-[11%] top-[5%] scale-0 opacity-80 group-hover/item:opacity-100 w-[85%] group-hover/item:scale-100 h-[90%] bg-[rgba(40,40,41,.95)] text-[rgba(40,40,41,.95)] z-10 transition duration-300 ease-in-out">
                <div className="opacity-0 group-hover/item:opacity-100 -translate-y-10 group-hover/item:translate-y-1 bg-white p-3 rounded-full absolute top-[40%] left-[40%] z-10 cursor-pointer hover:text-primary_1 transition duration-700 ease-in-out ">
                  <FaLink className="size-5 " />
                </div>
              </div>
              <img className="rounded-full" src={item.img} />
            </div>
            <div className="mt-12 text-white">
              <p className="text-2xl font-bold">{item.name}</p>
              <p className="mt-2 text-lg font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
        </Slider>
  );
}
