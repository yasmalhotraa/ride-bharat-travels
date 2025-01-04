import React from "react";
import logo from "../../assets/Images/logo.svg";
import Sidebar from "./Sidebar";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom"; // Import Link for routing and useLocation for page detection

function Header() {
  const location = useLocation(); // Get the current location (URL)

  const handleExploreClick = () => {
    if (location.pathname === "/") {
      // If on homepage, scroll to the #packages section
      document
        .getElementById("packages")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      // If on other page, navigate to /tour-page
      window.location.href = "/tour-page"; // This will navigate to the '/tour-page'
    }
  };

  return (
    <div>
      <div className="bg-[#272727] flex md:flex-row flex-col justify-between align-middle md:items-center py-2 md:px-4 px-2">
        <p className="text-white md:text-lg">
          Experience India with Royal Hindustan Travels
        </p>
        <div className="grid grid-cols-[auto,auto] py-2 ps-5 gap-0 md:gap-4 text-white">
          <p className="m-0 text-xs p-0 flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-1" />
            <a href="tel:+919250163008" className="text-white">
              9250163008
            </a>
          </p>
          <p className="m-0 p-0 text-xs flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
            <a
              className="text-white"
              href="mailto:Omsaitravels101174@gmail.com"
            >
              info@royalhindustan.com
            </a>
          </p>
        </div>
        <div className="ms-10 grid grid-flow-col auto-cols-max gap-2 md:gap-3">
          <FaInstagram className="text-white text-2xl" />
          <IoLogoFacebook className="text-white text-2xl" />
        </div>
      </div>

      {/*  background: url("https://dynamic.tourtravelworld.com/package-images/photo-big/dir_9/240299/70557.jpg");*/}
      <div className="py-4 bg-[#dedede]">
        <div className="flex gap-6 p-2 items-center justify-between md:px-20">
          <div className="py-2">
            <Link to="/">
              <img src={logo} alt="Royal Hindustan Travels" />
            </Link>
          </div>

          {/* Buttons and Sidebar for Larger Screens */}
          <div className="hidden md:flex gap-6 items-center">
            {/* Use Link for navigation */}
            <button
              className="bg-gradient-to-r from-[#f87171] to-[#f43f5e] hover:from-[#f43f5e] hover:to-[#f87171] text-white px-2 py-1 rounded-3xl md:text-xl md:py-4 md:px-6 md:rounded-full"
              onClick={handleExploreClick} // Use handleExploreClick for dynamic navigation
            >
              Explore Our Packages
            </button>
            <button className="bg-red-500 md:hidden text-white px-2 py-1 rounded-3xl">
              <Link to="/contact">Contact Us</Link>
            </button>
          </div>

          <div>
            <Sidebar />
          </div>
        </div>
        <div className="flex gap-2 w-full md:items-center justify-center md:flex-row">
          {/* Buttons for Smaller Screens */}
          <div className="md:hidden flex gap-4 items-center">
            <button
              className="bg-gradient-to-r from-[#f87171] to-[#f43f5e] hover:from-[#f43f5e] hover:to-[#f87171] text-white px-2 py-1 rounded-3xl"
              onClick={handleExploreClick} // Use handleExploreClick for dynamic navigation
            >
              Explore Our Packages
            </button>
            <button className="bg-red-500 text-white px-2 py-1 rounded-3xl">
              <Link to="/contact" className="text-white">
                Contact Us
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
