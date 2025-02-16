import React from "react";
import Banner1 from "../Components/Banner1";
import Banner2 from "../Components/Banner2";
import Banner3 from "../Components/Banner3";
import QuikServices from "../Components/QuikServices";
import Testimonial from "../Components/Testimonial";

function Service() {
  return (
    <>
      <div className="flex justify-center items-center py-20 my-5 bg-green-100 ">
        <h1 className="text-6xl font-extrabold text-[#02a95c] ">Services</h1>
      </div>
      <div>
        <QuikServices />
        <Banner1 />
        <Banner2 />
        <Banner3 />
        <Testimonial />
      </div>
    </>
  );
}

export default Service;
