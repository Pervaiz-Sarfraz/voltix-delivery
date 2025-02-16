import React from "react";
import meal1 from "../assets/meal1.jpg";
import meal2 from "../assets/meal2.jpg";
import meal3 from "../assets/meal3.jpg";

import ImpactSection from "../Components/ImpactSection";
function Impact() {
  return (
    <>
      <div className="banner flex justify-center items-center py-20 my-5 text-white bg-black">
        <h1 className="text-4xl font-bold py-40 text-center  ">Our Impact </h1>
      </div>
      <div
        className=" flex justify-center sm:flex-row flex-col items-center h-screen"
        data-aos="fade-up"
      >
        <div className=" sm:w-[48%] w-full px-3  text-black">
          <h1 className="font-bold  lg:text-[30px] sm:text-[1.7em] xs:text-[1.2em] text-[1em] lg:leading-[1.3em] mt-2  capitalize">
            Delivering positive impacts for society
          </h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            ad dicta exercitationem cum porro temporibus ipsum dolorem commodi
            aperiam in illo molestiae magnam illum officiis cupiditate
            voluptatem distinctio quasi quis.
          </p>
        </div>
        <div className="sm:w-[48%] w-full px-3">
          <img src={meal3} alt="" />
        </div>
      </div>
      <ImpactSection />
      <div
        className=" flex justify-center sm:flex-row flex-col items-center h-screen "
        data-aos="fade-up"
      >
        <div className=" sm:w-[48%] w-full px-2  text-black">
          <h1 className="font-bold  lg:text-[30px] sm:text-[1.7em] xs:text-[1.2em] text-[1em] lg:leading-[1.3em] mt-2  capitalize">
            Meal donations
          </h1>
          <p className="py-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            ad dicta exercitationem cum porro temporibus ipsum dolorem commodi
            aperiam in illo molestiae magnam illum officiis cupiditate
            voluptatem distinctio quasi quis.
          </p>
        </div>
        <div className="sm:w-[48%] w-full px-3  ">
          <img src={meal2} alt="" />
        </div>
      </div>
    </>
  );
}

export default Impact;
