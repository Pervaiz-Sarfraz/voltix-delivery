import React from "react";
import hero from "../assets/hero.jpg";
import choose from "../assets/choose.jpg";
import {
  BsFillPieChartFill,
  BsBarChart,
  BsFiletypeDocx,
  BsFillBarChartFill,
} from "react-icons/bs";
function Invest() {
  return (
    <>
      <div className="flex justify-center items-center py-20 my-5 bg-green-100 ">
        <h1 className="sm:text-6xl text-4xl font-extrabold text-[#34a46f] ">
          Invest
        </h1>
      </div>
      <div className=" flex justify-center sm:flex-row flex-col items-center py-3 my-3 ">
        <div
          className=" sm:w-[48%] w-full px-2 text-[#000]"
          data-aos="fade-left"
        >
          <h1 className="font-bold  lg:text-[40px] sm:text-[1.6em] xs:text-[1em] text-[1em] lg:leading-[1.3em] mt-2 ">
            Modern tools for stock investing with clarity.
          </h1>
          <p className="py-3 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            ad dicta exercitationem cum porro temporibus ipsum dolorem commodi
            aperiam in illo molestiae magnam.
          </p>
          <div className="py-4  ">
            <button class="button">
              <span class="button-content"> Get Started &#8594;</span>
            </button>
          </div>
        </div>
        <div className="sm:w-[48%] w-full px-3" data-aos="fade-up">
          <img src={hero} alt="" />
        </div>
      </div>
      {/* why choose us */}
      <div className=" flex justify-center sm:flex-row flex-col items-center py-3 my-3 mb-10">
        <div
          className=" sm:w-[50%] w-full px-2 text-[#000]"
          data-aos="fade-left"
        >
          <h2 className="font-medium lg:text-[20px] sm:text-[0.8em] xs:text-[0.8em] text-[0.8em] lg:leading-[1.3em] mt-2 text-[#02a95c]">
            Why choose us
          </h2>
          <h1 className="font-bold capitalize lg:text-[34px] sm:text-[1.6em] xs:text-[1em] text-[1em] lg:leading-[1.3em] mt-2 ">
            Connecting businesses, ideas, and people for greater impact.
          </h1>
          <p className="py-3 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            ad dicta exercitationem cum porro temporibus ipsum dolorem commodi
            aperiam in illo molestiae magnam.
          </p>
          <div className="flex justify-between items-center flex-wrap px-3">
            <div className="py-4 w-60 h-32 ">
              <BsFillPieChartFill className="w-10 h-10  text-[#02a95c]" />
              <h1 className="font-semibold text-base py-2 text-[#02a95c]">
                Smart Solutions
              </h1>
              <p className="font-[400]   text-sm py-1">
                Sed fringilla luctus scelerisque felis per urna nam non aenean
                congue letius.
              </p>
            </div>
            {/* 2 */}
            <div className="py-4 w-60 h-32 my-5">
              <BsBarChart className="w-10 h-10  text-[#02a95c]" />
              <h1 className="font-semibold text-base py-2 text-[#02a95c]">
                High Conversions
              </h1>
              <p className="font-[400]   text-sm py-1">
                Sed fringilla luctus scelerisque felis per urna nam non aenean
                congue letius.
              </p>
            </div>

            {/* 3 */}
            <div className="py-4 w-60 h-32 my-10">
              <BsFiletypeDocx className="w-10 h-10  text-[#02a95c]" />
              <h1 className="font-semibold text-base py-2 text-[#02a95c]">
                Certified Expert
              </h1>
              <p className="font-[400]   text-sm py-1">
                Sed fringilla luctus scelerisque felis per urna nam non aenean
                congue letius.
              </p>
            </div>
            {/* 4 */}
            <div className="py-4 w-60 h-32 my-10">
              <BsFillBarChartFill className="w-10 h-10  text-[#02a95c]" />
              <h1 className="font-semibold text-base py-2 text-[#02a95c]">
                24/7 Premium Support
              </h1>
              <p className="font-[400]   text-sm py-1">
                Sed fringilla luctus scelerisque felis per urna nam non aenean
                congue letius.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:w-[45%] w-full px-3" data-aos="fade-up">
          <img src={choose} alt="" />
        </div>
      </div>
    </>
  );
}

export default Invest;
