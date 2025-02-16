import React from "react";
import hero from "../assets/hero3.png";

function Banner2() {
  return (
    <>
      <div className=" flex justify-center sm:flex-row flex-col items-center ">
        <div
          className=" sm:w-[48%] w-full px-3  text-black"
          data-aos="fade-right"
        >
          <h1 className="font-bold  lg:text-[30px] sm:text-[1.7em] xs:text-[1.2em] text-[1em] lg:leading-[1.3em] mt-1  capitalize">
            Get Your products in 30 minuttes at the door Step
          </h1>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            ad dicta exercitationem cum porro temporibus ipsum dolorem commodi
            aperiam in illo molestiae magnam illum officiis cupiditate
            voluptatem distinctio quasi quis.
          </p>
          <div className="py-4 text-center ">
            <button class="button">
              <span class="button-content"> Get Started &#8594;</span>
            </button>
          </div>
        </div>
        <div className="sm:w-[48%] w-full px-3 " data-aos="fade-up-right">
          <img src={hero} alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner2;
