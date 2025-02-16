import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import testimonial from "../assets/testimonial.png";
import testimonial1 from "../assets/testimonial-2.jpg";
import testimonia2 from "../assets/testimonial-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import TestimonialSlider from "./TestimonialSlider ";
export default function Testimonial() {
  return (
    <>
      <div className="text-[#02a95c] text-center m-auto  sm:w-[50%] mt-2  w-full pt-5">
        <h1 className=" text-3xl font-bold uppercase px-8 ">
          What Customer Say About Us
        </h1>
        <div class="divider div-transparent div-dot"></div>
      </div>

      <div className="h-[100%]">
        <div className="h-[100%] p-5 sm:w-[70%] w-full m-auto ">
          <Swiper
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <TestimonialSlider
                review={
                  "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,  ad dicta exercitationem cum porro temporibus ipsum dolorem commod    aperiam in illo molestiae magnam illum officiis cupiditate voluptatem distinctio quasi quis."
                }
                name={"jeo Dawson"}
                profile={testimonial}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialSlider
                review={
                  "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,  ad dicta exercitationem cum porro temporibus ipsum dolorem commod    aperiam in illo molestiae magnam illum officiis cupiditate voluptatem distinctio quasi quis."
                }
                name={"Pervaiz Sarfraz"}
                profile={testimonia2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialSlider
                review={
                  "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,  ad dicta exercitationem cum porro temporibus ipsum dolorem commod    aperiam in illo molestiae magnam illum officiis cupiditate voluptatem distinctio quasi quis."
                }
                name={"Chandler Bing"}
                profile={testimonial1}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
