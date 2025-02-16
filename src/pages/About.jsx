import React from "react";
import AboutSection from "../Components/AboutSection";
import Faq from "../Components/Faq";
import Team from "../Components/Team";

export default function About() {
  return (
    <>
      <div className="flex justify-center items-center py-20 my-5 bg-green-100 ">
        <h1 className="text-6xl font-extrabold text-[#02a95c] ">About US</h1>
      </div>
      <div>
        <AboutSection />
        <Team />
        <Faq />
      </div>
      <hr className="w-[70%] bg-[#02a95c] h-[2px] mx-auto my-4" />
    </>
  );
}
