import React from "react";
import hero from "../assets/hero3.png";
import ServiceCard from "./ServiceCard";
import box1 from "../assets/box1.png";
import hero1 from "../assets/hero1.png";

function ServiceSection() {
  return (
    <>
      <div className="m-auto">
        <div className="py-3 text-center text-[#02a95c] content-bg my-4">
          <h1 className="text-xl font-semibold "> Three Easy Step</h1>
          <div class="divider div-transparent div-dot"></div>
        </div>
        <div
          className="flex justify-around items-center flex-wrap gap-4 px-3"
          data-aos="fade-up"
        >
          <ServiceCard
            heading={"order from the app"}
            img={box1}
            detail={
              " Browse the menu and order directly from the application . "
            }
          />
          <ServiceCard
            heading={"order collected and sent"}
            img={hero}
            detail={
              " Order will be collected and sent immediately sent by our courier . "
            }
          />{" "}
          <ServiceCard
            heading={"Received Delivery"}
            img={hero1}
            detail={" Pick  up  delivery at your  door and Enjoy Groceries  . "}
          />
        </div>
      </div>
    </>
  );
}

export default ServiceSection;
