import React from "react";
import Counter from "../counter/Counter";
import { useInView } from "react-intersection-observer";
import ScrollAnimation from "react-animate-on-scroll";

export default function Info() {
  const { ref: myRef, inView: isVisible } = useInView();

  return (
    <div className="w-4/5 mx-auto">
      <div className="  flex justify-center items-center  bg-[url('../../src/images/small-bg.png')] bg-no-repeat bg-contain py-[6.3rem] my-[6rem] ">
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <Counter
            myRef={myRef}
            visible={isVisible}
            number={2864}
            description={"کل پروژه ها"}
            className1={
              " text-5xl font-bold font-[vazir] border-r-[6px]  text-white text-center px-[5rem] mr-[4rem]"
            }
            className2={
              " border-r-[6px] text-center text-white px-[5rem] mr-[4rem] text-2xl font-semibold "
            }
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft " animateOnce>
          <Counter
            myRef={myRef}
            visible={isVisible}
            number={421}
            description={"اعضای تیم"}
            className1={
              " text-5xl font-bold font-[vazir] border-r-[6px]  text-white text-center pr-[5rem] mr-[4rem]"
            }
            className2={
              " border-r-[6px] text-center text-white pr-[5rem] mr-[4rem] text-2xl font-semibold "
            }
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce>
          <Counter
            myRef={myRef}
            visible={isVisible}
            number={130}
            description={"مشتریان راضی"}
            className1={
              " text-5xl font-bold font-[vazir] border-r-[6px]  text-white text-center pr-[5rem] mr-[4rem]"
            }
            className2={
              " border-r-[6px] text-center text-white pr-[5rem] mr-[4rem] text-2xl font-semibold "
            }
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInDown" animateOnce>
          <Counter
            myRef={myRef}
            visible={isVisible}
            number={302}
            description={"جوایز برنده شده"}
            className1={
              " text-5xl font-bold font-[vazir]   text-white text-center pr-[5rem] "
            }
            className2={
              "   text-white pr-[5rem] text-center text-2xl font-semibold "
            }
          />
        </ScrollAnimation>
      </div>
    </div>
  );
}
