import React from "react";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      {/* footer section  */}
      <hr />

      <div className=" w-full text-center relative top-6 left-0 ">
        <div className="flex justify-around items-center flex-wrap ">
          <div className="px-16 py-2">
            <img src={logo} alt="" className="w-32 h-16 rounded-full" />
          </div>
          {/* 2nd column */}
          <div className="px-16 py-2">
            <div className=" text-lg font-medium lg:flex-grow">
              <NavLink
                to="/"
                className="block px-2 mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#02a95c] duration-100 mr-4"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="block px-2 mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#02a95c] duration-100 mr-4"
              >
                About
              </NavLink>
              <NavLink
                to="/Service"
                className="block px-2 mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#02a95c] duration-100"
              >
                Services
              </NavLink>
              <NavLink
                to="/Rider"
                className="block px-2 mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#02a95c] duration-100"
              >
                EV for Rider
              </NavLink>
              <NavLink
                to="/impact"
                className="block px-2 mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#02a95c] duration-100"
              >
                Our Impact
              </NavLink>
              <NavLink
                to="/invest"
                className="block px-2 mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#02a95c] duration-100"
              >
                Invest
              </NavLink>
              <NavLink
                to="/contact"
                className="block px-2 mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#02a95c] duration-100"
              >
                Contact
              </NavLink>
              <NavLink
                to="/term"
                className="block px-2 mt-4 lg:inline-block lg:mt-0 text-black hover:text-[#02a95c] duration-100"
              >
                Terms Ans Conditions
              </NavLink>
            </div>
          </div>

          {/* 3rs column  */}
          <div className="px-16 py-2">
            <div className="flex justify-between items-center">
              <div>
                <FaDiscord target="_blank" className="icons Discord" />
              </div>
              <div>
                <FaInstagram target="_blank" className="icons Instagram" />
              </div>
              <div>
                <NavLink to="https://www.youtube.com/" target="_blank">
                  <FaYoutube target="_blank" className="icons Youtube " />
                </NavLink>
              </div>
              <div>
                <NavLink target="_blank">
                  <FaTwitter className="icons Twitter" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* bottom section  */}
        <div className=" w-full ">
          <hr />
          <div className="flex justify-center items-center p-4">
            <p>
              Copyright @{new Date().getFullYear()}
              <NavLink to="/" className="font-bold text-gray-800 px-1">
                <span className="text-[#02a95c] px-1">QuiK</span>
              </NavLink>
              . All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
