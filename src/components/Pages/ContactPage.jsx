import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../custom/footer";
import Navbar from "../custom/Navbar";
import "../Styling/GetInTouch.css";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../custom/ContactForm";

const ContactPage = () => {
  return (
    <div className="contact-section">
      {/* Navbar */}
      <Navbar />
      <h2 className="contact-header">Contact Us</h2>
      <div className="contact-content">
        <div className="contact-item">
          <a href="mailto:Omsaitravels101174@gmail.com">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <h3>Email</h3>
            <p>Omsaitravels101174@gmail.com</p>
          </a>
        </div>
        <div className="contact-item">
          <a href="tel:+919250163008">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <h3>Phone</h3>
            <p>+91 9250163008</p>
          </a>
        </div>
        <div className="contact-item">
          <a
            href="https://www.google.com/maps?q=Om+Sai+Travels+Office,+Paharganj,+India"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-location-link" // Optional class for styling
          >
            <div className="contact-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <h3>Location</h3>
            <p>Om Sai Travels Office, Paharganj, India</p>
          </a>
        </div>
      </div>
      <div className="map-form-div">
        <div className="map-container">
          <p className="map-heading">Visit us!</p>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12264.84984906926!2d77.18819599387085!3d28.64238630475234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x390cfddcd0a877d3%3A0xc6c090ec2872595c!2sShop%20No%201%2C%20Om%20Sai%20Travels%2C%20B-1%2C%20near%20Udaseen%20Ashram%2C%20Aram%20Bagh%2C%20Paharganj%2C%20Delhi%20110055!5e0!3m2!1sen!2sin!4v1691886367475!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Directions to Om Sai Travels, Paharganj, Delhi"
          />
        </div>
        <div>
          {/* Add the Contact Form */}
          <ContactForm />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;