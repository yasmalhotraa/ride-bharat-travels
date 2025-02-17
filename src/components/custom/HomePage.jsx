import React from "react";
import TourPackages from "./TourPackages";
import About from "./About";
import ImageCarousel from "./ImageCarousel";
import Navbar from "./Navbar"; // Import Navbar component
import ClientReviewsCarousel from "./ClientReviewsCarousel";

const HomePage = () => {
  return (
    <div>
      {/* Add Navbar component */}
      <Navbar />

      <div className="container">
        <div className="img-carousel">
          <ImageCarousel />
        </div>

        <section id="packages">
          <h2 className="fade-in font-extrabold">TOUR PACKAGES</h2>
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
        <section id="about">
          <About />
        </section>

        <section id="client-reviews">
          <ClientReviewsCarousel />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
