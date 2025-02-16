import React from "react";
import ImpactCard from "./ImpactCard";
import impact2 from "../assets/impact2.png";
import impact3 from "../assets/impact3.png";
import impact4 from "../assets/impact4.png";

function ImpactSection() {
  return (
    <>
      <div className="mx-auto my-5 bg-gray-100 py-5 ">
        <div className="py-3 text-center text-black content-bg my-4">
          <h1 className="text-xl font-semibold text-[#02a95c]">Our Approach</h1>
          <div class="divider div-transparent div-dot"></div>
        </div>
        <div
          className="flex justify-around items-center flex-wrap gap-4 px-3"
          data-aos="fade-up"
        >
          <ImpactCard
            heading={"Connect our customers to causes"}
            img={impact2}
            detail={
              " We use our platforms to help customers support those in need . "
            }
          />
          <ImpactCard
            heading={"Leverage our capabilities and systems"}
            img={impact3}
            detail={
              " We use our platforms to help customers support those in need . "
            }
          />
          <ImpactCard
            heading={"Enable our people to give back"}
            img={impact4}
            detail={
              " We use our platforms to help customers support those in need . "
            }
          />
        </div>
      </div>
    </>
  );
}

export default ImpactSection;
