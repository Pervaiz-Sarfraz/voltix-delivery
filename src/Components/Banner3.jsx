import React from "react";
import hero from "../assets/hero.jpg";

function Banner3() {
  return (
    <>
      <div
        className=" flex justify-center sm:flex-row flex-col items-center h-screen"
        data-aos="fade-right"
      >
        <div className="sm:w-[48%] w-full px-3  ">
          <img src={hero} alt="" />
        </div>
        <div className="r sm:w-[48%] w-full px-3 text-black">
          <div className="px-2">
            <h1
              className="font-bold  lg:text-[30px] sm:text-[1.7em] xs:text-[1.2em] text-[1em] lg:leading-[1.3em] mt-1 capitalize"
              data-aos="fade-up"
            >
              Reciver Your Products hustle Free way.
            </h1>
            <p className="p-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, ad dicta exercitationem cum porro temporibus ipsum
              dolorem commodi aperiam in illo molestiae magnam illum officiis
              cupiditate voluptatem distinctio quasi quis.
            </p>
            <div className="py-4  ">
              <button class="button">
                <span class="button-content"> Get Started &#8594;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner3;
