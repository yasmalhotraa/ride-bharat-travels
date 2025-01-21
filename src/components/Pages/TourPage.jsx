import React from "react";
import TourPackages from "../custom/TourPackages";
import Footer from "../custom/footer";
import Navbar from "../custom/Navbar";

const TourPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <section id="packages">
          <h2 className="fade-in">Tour Packages</h2>
          <TourPackages />
        </section>
        <section id="GetInTouch">
          <div className="content">
            <div>
              <p>
                <span className="short-text">Looking for more options? </span>
                <br /> Connect with us to explore additional tour packages
                tailored to your interests!
              </p>
            </div>
            <div>
              <a href="/contact" className="get-in-touch-btn">
                Contact Us!
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TourPage;
