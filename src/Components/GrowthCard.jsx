import React from "react";

function GrowthCard({ poeple, poepleuser }) {
  return (
    <div>
      <div
        className="card w-72 h-56 flex justify-center items-center"
        data-aos="flip-left"
      >
        <div>
          <h1 className="font-bold text-lg text-center py-2 text-[#02a95c]">
            {poeple}
          </h1>
          <p className="font-[400] px-6 text-center text-lg py-1">
            {poepleuser}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GrowthCard;
