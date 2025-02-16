import React from "react";
import about from "../assets/about.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

function AboutSection() {
  return (
    <>
      <div className="flex justify-between items-center mt-4 mb-3 sm:flex-row flex-col">
        <div class=" sm:w-[w-48%] w-full px-3" data-aos="fade-right">
          <img src={about} className="rounded-sm" />
        </div>

        <div class=" sm:w-[w-48%] w-full">
          <h2 className="uppercase px-2 text-[#3ab17a] font-semibold">
            About Us
          </h2>

          <div className="content " data-aos="fade-up">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
              aspernatur voluptas inventore ab voluptates nostrum minus illo
              laborum harum laudantium earum ut, temporibus fugiat sequi
              explicabo facilis unde quos corporis!
            </p>
            <ul class="links">
              <li>
                <a href="#">
                  <img src={hero2} alt="" />
                </a>
              </li>
              <div class="vertical-line"></div>
              <li>
                <a href="#">
                  {" "}
                  <img src={hero3} alt="" />
                </a>
              </li>
              <div class="vertical-line"></div>
              <li>
                <a href="#">
                  {" "}
                  <img src={hero1} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
