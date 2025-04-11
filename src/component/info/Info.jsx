import React from "react";
import Counter from "../counter/Counter";
import { useInView } from "react-intersection-observer";
import ScrollAnimation from "react-animate-on-scroll";

export default function Info() {
  const { ref: myRef, inView: isVisible } = useInView();

  return (
    <div className=" flex justify-center ">
      <div className="  flex justify-center items-center md:grid md:grid-cols-1 md:grid-rows-4 w-fit md:w-11/12 md:h-96 md:rounded-xl bg-[url('../../src/images/small-bg.png')] bg-no-repeat bg-contain md:bg-cover md:bg-center aspect-[4/1]  my-[6rem]  ">
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <Counter
            myRef={myRef}
            visible={isVisible}
            number={2864}
            description={"کل پروژه ها"}
            className1={
              " text-5xl xl:text-4xl md:text-3xl xl:pb-2 font-bold  font-[vazir] border-r-[6px] md:border-r-0  text-white text-center mr-[4rem] md:mr-0 md:mr-0"
            }
            className2={
              " border-r-[6px] md:border-r-0 text-center text-white px-[5rem] md:px-0 mr-[4rem] md:mr-0 text-2xl xl:text-xl font-semibold "
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
              " text-5xl xl:text-4xl md:text-3xl xl:pb-2  font-bold  font-[vazir] border-r-[6px] md:border-r-0 text-white text-center pr-[5rem]  xl:pr-[4rem] lg:pr-[2rem] md:pr-0 mr-[4rem] md:mr-0"
            }
            className2={
              " border-r-[6px] md:border-r-0 text-center text-white pr-[5rem]  xl:pr-[4rem] lg:pr-[2rem] md:pr-0 mr-[4rem] md:mr-0 text-2xl xl:text-xl font-semibold "
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
              " text-5xl xl:text-4xl md:text-3xl xl:pb-2 font-bold  font-[vazir] border-r-[6px] md:border-r-0  text-white text-center pr-[5rem]  xl:pr-[4rem] lg:pr-[2rem] md:pr-0 mr-[4rem] md:mr-0"
            }
            className2={
              " border-r-[6px] md:border-r-0 text-center text-white pr-[5rem]  xl:pr-[4rem] lg:pr-[2rem] md:pr-0 mr-[4rem] md:mr-0 text-2xl xl:text-xl font-semibold "
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
              " text-5xl xl:text-4xl md:text-3xl xl:pb-2 font-bold  font-[vazir]   text-white text-center pr-[5rem]  xl:pr-[4rem] lg:pr-[2rem] md:pr-0 "
            }
            className2={
              "   text-white pr-[5rem]  xl:pr-[4rem] lg:pr-[2rem] md:pr-0 text-center text-2xl xl:text-xl font-semibold "
            }
          />
        </ScrollAnimation>
      </div>
    </div>
  );
}
