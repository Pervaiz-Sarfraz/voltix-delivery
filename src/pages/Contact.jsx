import React from "react";
import ContactSection from "../Components/ContactSection";

function Contact() {
  return (
    <>
      <div className="flex justify-center items-center py-20 my-5 bg-green-100 ">
        <h1 className="text-6xl font-extrabold text-[#02a95c] ">Contact US</h1>
      </div>
      <div className="flex justify-around items-center flex-wrap gap-5 mt-8">
        <div
          className="  hover:shadow-xl w-80 h-60 px-3 border duration-150"
          data-aos="flip-right"
        >
          <h1 className="py-4 px-3 text-black text-2xl font-medium">About </h1>
          <p className="text-gray-600 py-2 px-3 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro esse
            enim quia accusantium tempora.
          </p>
        </div>
        {/* 2 */}
        <div
          className="  hover:shadow-xl w-80 h-60 px-3 border duration-150"
          data-aos="flip-right"
        >
          <h1 className="py-4 px-3 text-black text-2xl font-medium">
            Address{" "}
          </h1>
          <p className="text-gray-600 py-2 px-3 leading-7">
            666 Road Broklyn Street, 88 New York, USA .
          </p>
        </div>
        {/* 3 */}
        <div
          className="  hover:shadow-xl w-80 h-60 px-3 border duration-150"
          data-aos="flip-right"
        >
          <h1 className="py-4 px-3 text-black text-2xl font-medium">Contact</h1>
          <p className="text-gray-600 py-2 px-3 leading-7">
            <a href="href=mailto:someone@example.com">someone@example.com</a>
          </p>
          <p className="text-gray-600 py-2 px-3 leading-7">
            <a href="tel:008172123">008172123</a>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center my-3">
        <ContactSection />
      </div>
      <hr className="w-[70%] bg-[#02a95c] h-[2px] mx-auto my-4" />
    </>
  );
}

export default Contact;
