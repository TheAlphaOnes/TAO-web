import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header className=" body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav
            id="nav"
            className="flex lg:w-2/5 flex-wrap items-center text-xs md:ml-auto"
          >
            <a href="#about" id="⭐" className="mr-8 hover:text-gray-600">
              About Us
            </a>
            <Link to="/launches" className="mr-8 hover:text-gray-600">
              Launches
            </Link>
            <Link to="/team" className="mr-8 hover:text-gray-600">
              Team
            </Link>
            <Link to="/project" className="mr-8 hover:text-gray-600">
              Projects
            </Link>
            <Link to="/contact" className="mr-8 hover:text-gray-600">
              Contact Us
            </Link>
          </nav>
          <a
            href="/"
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center  lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <img src="img/ico.png" className="w-10 h-10  " alt="" />
            <span className="ml-3 text-xl text-white">TheAlphaOnes</span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0"></div>
        </div>
      </header>
    </div>
  );
}

export function NavbarCustom() {
  return (
    <div>
      <header className=" body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav
            id="nav"
            className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto"
          >
            <Link to="/" id="⭐" className="mr-5 hover:text-gray-600">
              About Us
            </Link>
            <Link to="/launches" className="mr-5 hover:text-gray-600">
              Launches
            </Link>
            <Link to="/team" className="mr-5 hover:text-gray-600">
              Team
            </Link>
            <Link to="/project" className="mr-5 hover:text-gray-600">
              Projects
            </Link>
            <Link to="/contact" className="mr-5 hover:text-gray-600">
              Contact Us
            </Link>
          </nav>
          <a
            href="/"
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center  lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <img src="img/ico.png" className="w-10 h-10  " alt="" />
            <span className="ml-3 text-xl text-white">TheAlphaOnes</span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0"></div>
        </div>
      </header>
    </div>
  );
}
