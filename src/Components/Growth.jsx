import React from "react";
import GrowthCard from "./GrowthCard";
function Growth() {
  return (
    <>
      <div className="m-auto">
        <div className="py-3 text-center text-[#02a95c] content-bg my-4">
          <h1 className="text-xl font-semibold capitalize ">we are growing</h1>
          <div class="divider div-transparent div-dot"></div>
        </div>
        <div className="flex justify-around items-center flex-wrap gap-4 px-3">
          <GrowthCard poeple={" 453k+"} poepleuser={"user order online"} />

          {/* 2 */}
          <GrowthCard poeple={" 2000k+"} poepleuser={"user order online"} />

          {/* 3 */}
          <GrowthCard poeple={" 459+"} poepleuser={"click event & more"} />
        </div>
      </div>
    </>
  );
}

export default Growth;
