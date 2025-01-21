import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faPlus,
  faMinus,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import "../Styling/Navbar.css";

const Navbar = () => {
  // State to control navbar visibility, mobile menu, and dropdown menu
  const [showHeading, setShowHeading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let hoverTimeout = null;

  // Display heading based on scroll position
  useEffect(() => {
    const handleScroll = () => setShowHeading(window.scrollY > 120);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle the main mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Control the dropdown menu appearance
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Show dropdown menu on mouse enter with desktop view
  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setDropdownOpen(true);
  };

  // Hide dropdown with a small delay on mouse leave with desktop view
  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => setDropdownOpen(false), 200);
  };

  return (
    <nav
      className={`navbar ${showHeading ? "show-heading" : ""} ${
        menuOpen ? "open" : ""
      }`}
    >
      <div className="navbar-heading-menu-container">
        <a href="/" className="heading-a">
          {" "}
          <h1 className="navbar-heading font-bold ">Ride Bharat Travels</h1>
        </a>

        <button className="menu-toggle" onClick={toggleMenu}>
          {!showHeading && <span>Menu</span>}
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="/" onClick={toggleMenu}>
          Home
        </a>

        {/* Dropdown Menu for Tour Packages */}
        <div
          className={`${
            window.innerWidth > 768 ? "dropdown" : "dropdown-mobile"
          } ${dropdownOpen ? "open" : ""}`}
          onMouseEnter={() => window.innerWidth > 768 && handleMouseEnter()}
          onMouseLeave={() => window.innerWidth > 768 && handleMouseLeave()}
        >
          <div className="dropdown-heading-menu-container">
            <a className="dropdown-heading" href="/tour-page">
              Tour Packages
            </a>
            <button
              className={`${
                window.innerWidth > 768
                  ? "dropdown-toggle"
                  : "dropdown-toggle-mobile"
              }`}
              onClick={toggleDropdown}
            >
              <FontAwesomeIcon
                icon={
                  dropdownOpen
                    ? window.innerWidth > 768
                      ? faCaretUp
                      : faMinus
                    : window.innerWidth > 768
                    ? faCaretDown
                    : faPlus
                }
              />
            </button>
          </div>

          {/* Dropdown Content */}
          <div
            className={`${
              window.innerWidth > 768
                ? "dropdown-links"
                : "dropdown-links-mobile"
            } ${dropdownOpen ? "open" : ""}`}
          >
            <a href="/delhi-darshan" onClick={toggleDropdown}>
              Delhi Tour Package
            </a>
            <a href="/agra-tour" onClick={toggleDropdown}>
              Agra Tour Package
            </a>
          </div>
        </div>

        <a href="/about-page" onClick={toggleMenu}>
          About Us
        </a>
        <a href="/contact" onClick={toggleMenu}>
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
