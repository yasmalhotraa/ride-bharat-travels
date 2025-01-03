import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import TajMahal from "../../assets/Images/Tajmahal.jpg";
import RedFort from "../../assets/Images/RedFort.jpg";
import QutubMinar from "../../assets/Images/Qutubminar.jpg";
import LotusTemple from "../../assets/Images/LotusTemple.jpg";
import HawaMahal from "../../assets/Images/HawaMahal.jpg";
import Gurudwara from "../../assets/Images/Gurudwara.jpg";

const ImageModal = ({ isOpen, imageSrc, onClose, onNext, onPrevious }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <button className="close" onClick={onClose}>
        X
      </button>
      <img src={imageSrc} alt="Enlarged Gallery" className="enlarged-image" />
      <button className="arrow left" onClick={onPrevious}>
        ←
      </button>
      <button className="arrow right" onClick={onNext}>
        →
      </button>
    </div>
  );
};

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    TajMahal,
    RedFort,
    QutubMinar,
    HawaMahal,
    LotusTemple,
    Gurudwara,
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  const nextImage = () =>
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  const previousImage = () =>
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + galleryImages.length) % galleryImages.length
    );

  return (
    <div>
      <footer id="footer">
        <div className="footer-div">
          <div className="about-footer-section">
            <h3 className="text-white fade-in font-bold relative inline-block">
              About Royal Hindustan Travels
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 border-b-2 border-red-400"></span>
            </h3>
            <p>
              We are dedicated to providing the best travel experience across
              India. Our services include taxi and tempo traveler options,
              ensuring a comfortable journey for our customers. <br />
              <a className="text-red-400" href="/about-page">
                Read More.
              </a>
            </p>
          </div>

          <div className="contact-info">
            <h3 className="fade-in text-white font-bold inline-block relative">
              Contact Us
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 border-b-2 border-red-400"></span>
            </h3>
            <div className="contact-details">
              <p>For inquiries, please call or email us:</p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <a href="mailto:Omsaitravels101174@gmail.com">
                  Omsaitravels101174@gmail.com
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} />{" "}
                <a href="tel:+919250163008">+91 9250163008</a>
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Om Sai Travels Office,
                Paharganj, India
              </p>
              <a className="contact-btn  fade-in" href="tel:+919250163008">
                Call Us Now!
              </a>
            </div>
          </div>

          <div className="gallery-section">
            <h3 className="fade-in text-white font-bold inline-block relative">
              Gallery
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 border-b-2 border-red-400"></span>
            </h3>
            <div className="gallery-container">
              {galleryImages.map((imageSrc, index) => (
                <img
                  key={index}
                  src={imageSrc}
                  alt={`Gallery ${index + 1}`}
                  className="gallery-image"
                  onClick={() => openModal(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <ImageModal
          isOpen={modalOpen}
          imageSrc={galleryImages[currentImageIndex]}
          onClose={closeModal}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      </footer>
      <div id="copyright">
        <p className="copyright">
          Copyright &copy; 2007 - {new Date().getFullYear()} Om Sai Travels.
        </p>
      </div>
    </div>
  );
};

export default Footer;
