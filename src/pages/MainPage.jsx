import Header from "@/component/header/Header";
import Loading from "@/component/loading/Loading";
import Navbar from "@/component/navbar/Navbar";
import React, { useEffect, useState } from "react";
import Card from "@/component/card/Card";
import MiddleBanner from "@/component/middleBanner/MiddleBanner";
import Info from "@/component/info/Info";
import Team from "@/component/team/Team";
import Comments from "@/component/comments/Comments";
import Footer from "@/component/comments/footer/Footer";
import ResetPage from "@/component/resetPage/ResetPage";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(0);

  

  useEffect(() => {
    window.onscroll =()=>{
     setScrolled(window.scrollY)
      // console.log(scrolled);
      if (scrolled > 304){
        setIsVisible(true)
      }else{
        setIsVisible(false)
      }
    }
    
  }, [scrolled]);

  const handleClick =()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  }

  return (
    <>
      {isLoading && <Loading />}
      <Header />
      <Navbar />
      <ResetPage isVisible={isVisible} onclick={handleClick} />

      <div className="h-[50vh] md:h-[35vh] bg-[url('../../src/images/banner-e1632820173730.jpg')]  flex items-center justify-end bg-center bg-cover md:bg-cover bg-no-repeat " >
        <div className="text-white  mr-40 md:mr-20">
          <h1 className="font-extrabold text-[65px] md:text-4xl text-right ">درباره ما</h1>
          <div>
            <h4 className="text-xl font-semibold md:mt-4">
              درباره ما<span className="font-sans"> &lt; </span>
              <a
                href="#"
                className="hover:text-primary_1  font-sans transition ease-in-out"
              >
                induxter قالب
              </a>
            </h4>
          </div>
        </div>
      </div>

      <div className="max-w-[80%]  mx-auto min-h-[44vh] my-32 flex lg:flex-col justify-center items-center text-right  gap-x-6">

        <Card
          title={"چگونه کار خود را شروع کردیم ؟"}
          text={
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
          }
          link={"خدمات ما"}
        />
        <Card
          src={
            "https://oje-tarahy.ir/themes/induxter/wp-content/uploads/2020/06/home-2-project-four-1.jpg"
          }
        
        />
        <Card
          title={"اولین چیزی که باید در مورد ما بدانید"}
          text={
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
          }
          link={"تیم ما"}
        />
      </div>

      <MiddleBanner />

      <Info />

      <Team />

      <Comments />

      <Footer />
    </>
  );
}
