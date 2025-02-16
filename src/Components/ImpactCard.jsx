import React from "react";

function ImpactCard({ img, heading, detail }) {
  return (
    <>
      <div className=" w-72 h-72">
        <img src={img} alt="" className="w-28 h-28 m-auto" />
        <h1 className="font-bold text-lg  p-2 ">{heading}</h1>
        <p className="font-[400] px-2  text-lg py-1">{detail} </p>
      </div>
    </>
  );
}

export default ImpactCard;
