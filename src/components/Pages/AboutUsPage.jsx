import React from "react";
import About from "../custom/About";
import Navbar from "../custom/Navbar";
import Footer from "../custom/footer";
import "../Styling/AboutUs.css";
import SwiftDzire from "../../assets/Images/swift-dzire.jpeg";
import Innova from "../../assets/Images/Innova.jpeg";
import Ertiga from "../../assets/Images/ertiga.jpeg";
import Tampo from "../../assets/Images/TampoTraveller.jpeg";

const AboutPage = () => {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* About Us Section */}
      <div className="about-flexbox">
        <div id="about" className="about-info">
          <About />
        </div>
        <div className="about-images">
          <h2 className="car-heading font-bold text-lg">
            Discover the Range of Cars We Offer
          </h2>
          <img src={SwiftDzire} alt="swift" />
          <img src={Innova} alt="Innova" />
          <img src={Ertiga} alt="Ertiga" />
          <img src={Tampo} alt="Tampo" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
