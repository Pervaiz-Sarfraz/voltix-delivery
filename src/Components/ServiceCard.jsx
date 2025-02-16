import React from "react";

function ServiceCard({ heading, img, detail }) {
  return (
    <>
      <div className="card w-72 h-72" data-aos="flip-right">
        <img src={img} alt="" className="w-28 h-28 m-auto" />
        <h1 className="font-bold text-lg text-center py-2 text-[#02a95c]">
          {heading}
        </h1>
        <p className="font-[400] px-6 text-center text-lg py-1">{detail} </p>
      </div>
    </>
  );
}

export default ServiceCard;
