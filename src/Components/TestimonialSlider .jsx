import React from "react";
import { BsQuote } from "react-icons/bs";

function TestimonialSlider({ review, name, profile }) {
  return (
    <>
      <div
        className="bg-black-200 p-3 rounded-3xl  mt-20 opacity-100 transform-0 my-6"
        data-aos="zoom-out"
      >
        <div className="mx-auto">
          <img
            src={profile}
            alt=""
            className="w-24 h-24 m-auto rounded-full object-cover"
          />
        </div>

        <div className="mt-1 ">
          <p className="text-black leading-6 text-[18px] py-3">{review}</p>
          <div className="flex justify-center py-4">
            <BsQuote className="text-[#02a95c] text-4xl" />
          </div>
          <div className="mt-7 flex justify-between items-center gap-1">
            <div className="flex flex-col flex-1">
              <p className="text-black font-bold text-[20px]">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialSlider;
