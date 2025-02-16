import React from "react";
import hero from "../assets/hero3.png";
import box1 from "../assets/box1.png";
import hero1 from "../assets/hero1.png";
function QuikServices() {
  return (
    <>
      <div className="m-auto">
        <div className="py-3 text-center text-[#02a95c] content-bg my-4">
          <h1 className="text-xl font-semibold "> Our Service</h1>
          <div class="divider div-transparent div-dot"></div>
        </div>
        <div
          className="flex justify-around items-center flex-wrap gap-4 px-3"
          data-aos="fade-up"
        >
          {/* 1 */}
          <div className="card w-[400px] h-[420px] hover:bg-[#02a95c] hover:duration-200 text-black hover:text-white hover:border-none">
            <img src={hero1} alt="" className="w-28 h-28 m-auto" />
            <h1 className="font-bold text-lg text-center py-2 ">
              Fast Delivery
            </h1>
            <p className="font-[400] px-6 text-center text-lg py-1 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              facilis provident praesentium amet est eaque error veniam ducimus
              obcaecati quibusdam fugit non perspiciatis quisquam modi.
            </p>
          </div>
          {/* 2 */}
          <div className="card w-[400px] h-[420px] hover:bg-[#02a95c] hover:duration-200 text-black hover:text-white hover:border-none">
            <img src={box1} alt="" className="w-28 h-28 m-auto" />
            <h1 className="font-bold text-lg text-center py-2 ">
              Quality Products
            </h1>
            <p className="font-[400] px-6 text-center text-lg py-1 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              facilis provident praesentium amet est eaque error veniam ducimus
              obcaecati quibusdam fugit non perspiciatis quisquam modi.
            </p>
          </div>
          {/* 3 */}
          <div className="card w-[400px] h-[420px] hover:bg-[#02a95c] hover:duration-200 text-black hover:text-white hover:border-none">
            <img src={hero} alt="" className="w-28 h-28 m-auto" />
            <h1 className="font-bold text-lg text-center py-2 ">
              Door to Door
            </h1>
            <p className="font-[400] px-6 text-center text-lg py-1 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              facilis provident praesentium amet est eaque error veniam ducimus
              obcaecati quibusdam fugit non perspiciatis quisquam modi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuikServices;
