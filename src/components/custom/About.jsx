// About.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styling/AboutUs.css";
import {
  faShieldAlt,
  faRoute,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section id="about" className="about-section bg-red">
      <h2 className="font-bold">About Ride Bharat Travels</h2>
      <p className="paragraph">
        Established with a passion for travel and customer satisfaction, Ride
        Bharat Travels has been a trusted name in the travel industry for years.
        We pride ourselves on offering a wide range of services, from convenient
        taxi rentals and comfortable tempo travelers to expertly curated tour
        packages that cover the diverse landscapes of India. Our fleet is
        meticulously maintained to ensure both safety and comfort for our
        passengers.
        <br />
        <br />
        Our commitment to excellence extends to our team of highly trained
        drivers and knowledgeable tour guides who are dedicated to creating a
        memorable travel experience for each of our clients. With Ride Bharat
        Travels, you’re not just a passenger; you’re part of a journey that
        values comfort, safety, and discovery at every step.
      </p>

      <div className="about-content">
        <div className="about-item">
          <FontAwesomeIcon icon={faShieldAlt} className="about-icon" />
          <h3>Trusted & Secure</h3>
          <p>
            Our services prioritize safety and reliability with top-class
            vehicles and secure bookings.
          </p>
        </div>

        <div className="about-item">
          <FontAwesomeIcon icon={faRoute} className="about-icon" />
          <h3>Pan-India Service</h3>
          <p>
            Explore any destination across India with our well-connected and
            expansive service routes.
          </p>
        </div>

        <div className="about-item">
          <FontAwesomeIcon icon={faStar} className="about-icon" />
          <h3>Comfort & Quality</h3>
          <p>
            We provide comfortable seating, clean interiors, and well-maintained
            vehicles for a pleasant journey.
          </p>
        </div>

        <div className="about-item">
          <FontAwesomeIcon icon={faUsers} className="about-icon" />
          <h3>Experienced Drivers</h3>
          <p>
            Our drivers are trained professionals with in-depth knowledge of
            routes and customer service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
