import React from "react";
import hero from "../assets/hero3.png";
function Hero() {
  return (
    <>
      <div className="hero flex justify-around px-10 sm:flex-row flex-col items-center h-screen ">
        <div className="sm:w-[48%] w-full px-2 " data-aos="fade-left">
          <h1 className="font-bold  lg:text-[40px] sm:text-[1.6em] xs:text-[1em] text-[1em] lg:leading-[1.3em] mt-2 text-black">
            We catalyze part ownership in upcoming startups .
          </h1>
          <p className="py-2 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            ad dicta exercitationem cum porro temporibus ipsum dolorem commodi
            aperiam in illo molestiae magnam.
          </p>
          <div className="py-4 ">
            <button class="button">
              <span class="button-content"> Get Started &#8594;</span>
            </button>
          </div>
        </div>
        <div className="sm:w-[48%] w-full px-3" data-aos="fade-up">
          <img src={hero} alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
