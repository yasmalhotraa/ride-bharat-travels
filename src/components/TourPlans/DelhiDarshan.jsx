// src/components/GoldenTriangleTour.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styling/Tour.css";
import BookingForm from "./BookingForm";
import Footer from "../custom/footer";
import Navbar from "../custom/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import IndiaGate from "../../assets/Images/IndiaGate.jpg";
import Lotustemple from "../../assets/Images/LotusTemple.jpg";
import Qutubminar from "../../assets/Images/Qutubminar.jpg";
import Redfort from "../../assets/Images/RedFort.jpg";

const images = [IndiaGate, Lotustemple, Qutubminar, Redfort];

function DelhiDarshan() {
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
      <div className="tour-heading delhi-bg-image">
        <h1>DELHI DARSHAN</h1>
      </div>
      <div className="tour-package">
        <div className="content">
          <h2>Cab Information</h2>
          <div className="timings">
            <FaClock className="timeandlocation-icons" />
            <span className="timeandlocation-text">
              {" "}
              1 Day(08 Hours and 80 Kms)
            </span>
            |
            <FaLocationDot className="timeandlocation-icons" />
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
                <td>₹2500</td>
                <td>
                  <a href="#bookingform">
                    <button className="booking-button">Book Now </button>
                  </a>
                </td>
              </tr>
              <tr>
                <td>SUV</td>
                <td>₹3500</td>
                <td>
                  <a href="#bookingform">
                    <button className="booking-button">Book Now </button>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Tempo Traveller</td>
                <td>₹5500</td>
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
              <strong>1.</strong> Red Fort
            </li>
            <li>
              <strong>2.</strong> Rajghat
            </li>
            <li>
              <strong>3.</strong>India Gate
            </li>
            <li>
              <strong>4.</strong> Shakti Sthal
            </li>
            <li>
              <strong>5.</strong> Rashtrapati Bhawan
            </li>
            <li>
              <strong>6.</strong> Indira Gandhi Museum
            </li>
            <li>
              <strong>7.</strong>Qutub Minar
            </li>
            <li>
              <strong>8.</strong>Delhi Hatt
            </li>
            <li>
              <strong>9.</strong>Bangla Sahib Gurudwara
            </li>
            <li>
              <strong>10.</strong>Birla Temple
            </li>
          </ul>
          <h2>Highlights</h2>
          <ul>
            <li>
              Discover the grandeur of India Gate and the historical Qutub
              Minar.
            </li>
            <li>
              Admire the architectural elegance of the Lotus Temple and Red
              Fort.
            </li>
            <li>
              Immerse yourself in the vibrant culture of Old Delhi's bustling
              streets.
            </li>
            <li>Capture memorable moments at Delhi's most iconic landmarks.</li>
          </ul>
        </div>
        <div id="bookingform" className="image-container section">
          <BookingForm packageType="delhiDarshan" />

          <Link to="/" className="back-button">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DelhiDarshan;
