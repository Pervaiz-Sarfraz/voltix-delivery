import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full flex items-center justify-around px-10 flex-wrap sticky top-0 left-0 py-2 bg-white z-50 ">
      <div className="flex items-center flex-shrink-0 text-black mr-6 cursor-pointer ">
        <span className="px-1">
          <img src={logo} alt="" className="w-40 h-16 rounded-full" />
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-black border-black "
          onClick={toggleNavbar}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`w-full block   lg:flex lg:items-center lg:w-auto ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="py-3 text-lg font-medium lg:flex-grow">
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
        </div>
      </div>
      <div
        className={`w-full block py-3  lg:flex lg:items-center lg:w-auto ${
          isOpen ? "" : "hidden"
        }`}
      >
        <button className="button ">
          <span className="button-content"> Get Started</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
