import React from "react";
import hero2 from "../assets/hero2.png";

function Banner1() {
  return (
    <>
      <div className=" flex justify-center sm:flex-row flex-col items-center  ">
        <div className="sm:w-[48%] w-full px-3  " data-aos="fade-right">
          <img src={hero2} alt="" />
        </div>
        <div className=" sm:w-[48%] w-full px-3  text-black" data-aos="fade-up">
          <h1 className="font-bold  lg:text-[30px] sm:text-[1.7em] xs:text-[1.2em] text-[1em] lg:leading-[1.3em] mt-1  capitalize">
            Our Website Will make your Life Easy.
          </h1>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            ad dicta exercitationem cum porro temporibus ipsum dolorem commodi
            aperiam in illo molestiae magnam illum officiis cupiditate
            voluptatem distinctio quasi quis.
          </p>
          <div className="py-4  ">
            <button class="button">
              <span class="button-content"> Get Started &#8594;</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner1;
