import React from "react";
import testimonial from "../assets/testimonial.png";
import testimonial1 from "../assets/testimonial-2.jpg";
import testimonial2 from "../assets/testimonial-3.jpg";
function Team() {
  return (
    <>
      <div className=" my-10 py-5">
        <h1 className="text-2xl font-bold capitalize text-center text-[#40c285] ">
          Our Team
        </h1>
        <div class="divider div-transparent div-dot"></div>
      </div>
      <div
        className="flex justify-around items-center flex-wrap gap-4 my-10 py-5"
        data-aos="fade-up"
      >
        <div className="card1 w-72 h-72 text-center  flex justify-center items-center flex-col">
          <div className="mx-auto">
            <img src={testimonial} className="w-28 h-28 m-auto rounded-full" />
          </div>
          <h3 className="py-2 text-xl font-bold">Luna Turner</h3>
          <p className="py-2 text-lg">Founder</p>
        </div>
        {/* 2 */}
        <div className="card1 w-72 h-72 text-center  flex justify-center items-center flex-col">
          <div className="mx-auto">
            <img src={testimonial1} className="w-28 h-28 m-auto rounded-full" />
          </div>
          <h3 className="py-2 text-xl font-bold">Luna Turner</h3>
          <p className="py-2 text-lg">Manager</p>
        </div>
        {/* 3 */}
        <div className="card1 w-72 h-72 text-center  flex justify-center items-center flex-col">
          <div className="mx-auto">
            <img src={testimonial2} className="w-28 h-28 m-auto rounded-full" />
          </div>
          <h3 className="py-2 text-xl font-bold">Luna Turner</h3>
          <p className="py-2 text-lg">Assistent Manager</p>
        </div>
      </div>
    </>
  );
}

export default Team;
