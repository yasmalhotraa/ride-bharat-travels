// src/components/GoaBeachPackage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styling/Tour.css";
import Footer from "../custom/footer";
import BookingForm from "./BookingForm";
import Navbar from "../custom/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faClock } from "@fortawesome/free-solid-svg-icons";
import TajMahal from "../../assets/Images/Tajmahal.jpg";
import AgraFort from "../../assets/Images/Agra-fort.jpg";
import AgraMosque from "../../assets/Images/Agra-mosque.jpg";
import AgraFort2 from "../../assets/Images/Agra_Fort2.jpg";

const images = [TajMahal, AgraFort, AgraFort2, AgraMosque];

function AgraTour() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clear the interval when the component is unmounted
  }, []);

  return (
    <div className="body-tourpackge">
      <Navbar />
      <div className="tour-heading agra-bg-image">
        <h1>DELHI TO AGRA SAME DAY TOUR PACKAGE</h1>
      </div>
      <div className="tour-package">
        <div className="content">
          <h2>Cab Information</h2>
          <div className="timings">
            <FontAwesomeIcon
              className="timeandlocation-icons"
              icon={faClock}
            ></FontAwesomeIcon>
            <span className="timeandlocation-text">
              {" "}
              1 Day(08 Hours and 80 Kms)
            </span>
            |
            <FontAwesomeIcon
              className="timeandlocation-icons"
              icon={faLocationPin}
            ></FontAwesomeIcon>
            <span className="timeandlocation-text">Place: Delhi</span>
          </div>
          <table className="cab-info-table">
            <thead>
              <tr>
                <th>Cab Type</th>
                <th>Fare (₹)</th>
                <th>Booking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sedan</td>
                <td>₹6000</td>
                <td>
                  <a href="#bookingform">
                    <button className="booking-button">Book Now </button>
                  </a>
                </td>
              </tr>
              <tr>
                <td>SUV</td>
                <td>₹8000</td>
                <td>
                  <a href="#bookingform">
                    <button className="booking-button">Book Now </button>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Tempo Traveller</td>
                <td>₹15000</td>
                <td>
                  <a href="#bookingform">
                    <button className="booking-button">Book Now </button>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="slideshow-container">
            {images.map((image, index) => (
              <div
                key={index}
                className={`slide ${index === currentIndex ? "active" : ""}`}
              >
                <img src={image} alt={`Images ${index + 1}`} />
              </div>
            ))}
          </div>
          <p>
            Explore the iconic cities of Delhi, Agra, and Jaipur, famous for
            their rich history, architecture, and vibrant culture. This 7-day
            tour offers an unforgettable experience through India’s most
            cherished landmarks.
          </p>

          <h2>Places Covered</h2>
          <ul>
            <li>
              <strong>1.</strong> Taj Mahal
            </li>
            <li>
              <strong>2.</strong> Agra Fort
            </li>
            <li>
              <strong>3.</strong> Krishna Janmabhoomi Temple [ Mathura ]
            </li>
            <li>
              <strong>4.</strong> Prem Mandir and Nidhi Van [Vrindavan]
            </li>
          </ul>
          <h2>Highlights</h2>
          <ul>
            <li>
              Witness the awe-inspiring Taj Mahal, one of the Seven Wonders of
              the World.
            </li>
            <li>
              Explore the majestic Agra Fort, a UNESCO World Heritage Site.
            </li>
            <li>
              Visit the sacred Krishna Janmabhoomi Temple, the birthplace of
              Lord Krishna.
            </li>
            <li>
              Admire the beauty of Prem Mandir, known for its stunning
              architecture and carvings.
            </li>
          </ul>
        </div>
        <div id="bookingform" className="image-container section">
          <BookingForm packageType="agraTour" />

          <Link to="/" className="back-button">
            Back to Home
          </Link>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AgraTour;