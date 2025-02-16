import React from "react";
import logo from "../assets/logo.png";
import hero1 from "../assets/hero1.png";
import fuel from "../assets/fuel.png";
import rider2 from "../assets/rider2.jpg";

function Rider() {
  return (
    <>
      <div className="flex justify-center items-center py-20 my-5 bg-green-100 ">
        <h1 className="sm:text-6xl text-4xl font-extrabold text-[#34a46f] ">
          EV For Rider
        </h1>
      </div>
      <div className="rider">
        <div className="py-24 px-6 text-white mx-4">
          <div>
            <img src={logo} alt="" className="w-48 h-20 rounded-full" />
          </div>
          <div className="py-3">
            <h1 className="font-bold text-4xl">Become a Quik member today</h1>
          </div>
          <div>
            <li className="py-2 list-none text-2xl">Unlimited free delivery</li>
            <li className="py-2 list-none text-2xl">
              Access to EXCLUSIVE Quik
            </li>
            <li className="py-2 list-none text-2xl">
              Flat 10% discount on eligible restaurants
            </li>
          </div>
          <div className="py-4 ">
            <button class="button">
              <span class="button-content"> Get Started &#8594;</span>
            </button>
          </div>
        </div>
      </div>
      {/* free vechclies */}
      <div
        className=" flex justify-center sm:flex-row flex-col items-center capitalize  my-7"
        data-aos="fade-up"
      >
        <div className=" sm:w-[48%] w-full px-3  text-black">
          <h1 className="font-bold  lg:text-[30px] sm:text-[1.7em] xs:text-[1.2em] text-[1em] lg:leading-[1.3em] mt-2 py-8 capitalize">
            Free EV For Rider
          </h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            ad dicta exercitationem cum porro temporibus ipsum dolorem commodi
            aperiam in illo molestiae magnam illum officiis cupiditate
            voluptatem distinctio quasi quis.
          </p>
        </div>
        <div className="sm:w-[48%] w-full px-3  ">
          <img src={rider2} alt="" className="w-full h-96 object-cover" />
        </div>
      </div>
      {/* cards */}
      <div className="mx-auto my-5 bg-gray-100 py-5  capitalize">
        <div className="py-3 text-center text-black content-bg my-4">
          <h1 className="text-xl font-semibold ">
            Electic Vechicles For Riders
          </h1>
        </div>
        <div
          className="flex justify-around items-center flex-wrap gap-4 px-3"
          data-aos="fade-up"
        >
          {/* 1 */}
          <div className="capitalize w-[400px] h-[400px]">
            <img src={hero1} alt="" className="w-28 h-28 m-auto" />
            <h1 className="font-bold text-lg text-center py-2">
              free Electic Vechicles
            </h1>
            <p className="font-[400] px-1 text-center text-lg py-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              officia non incidunt cum ipsum quos quasi.
            </p>
          </div>
          {/* 2 */}
          <div className="capitalize w-[400px] h-[400px]">
            <img src={hero1} alt="" className="w-28 h-28 m-auto" />
            <h1 className="font-bold text-lg text-center py-2">
              Free Maintence of Vechicles
            </h1>
            <p className="font-[400] px-1 text-center text-lg py-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              officia non incidunt cum ipsum quos quasi.
            </p>
          </div>
          {/* 3 */}
          <div className="capitalize w-[400px] h-[400px]">
            <img src={fuel} alt="" className="w-28 h-28 m-auto" />
            <h1 className="font-bold text-lg text-center py-2">free Fuel</h1>
            <p className="font-[400] px-1 text-center text-lg py-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              officia non incidunt cum ipsum quos quasi.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
}

export default Rider;
