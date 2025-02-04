import React, { useState, useEffect } from "react";
import TajMahal from "../../assets/Images/Tajmahal.jpg";
import RedFort from "../../assets/Images/RedFort.jpg";
import QutubMinar from "../../assets/Images/Qutubminar.jpg";
import LotusTemple from "../../assets/Images/LotusTemple.jpg";
import HawaMahal from "../../assets/Images/HawaMahal.jpg";
import Gurudwara from "../../assets/Images/Gurudwara.jpg";
import HumayuTomb from "../../assets/Images/Humayu_Tomb.jpg";
import IndiaGate from "../../assets/Images/IndiaGate.jpg";
import AgrasenKiBaoli from "../../assets/Images/Agrasen_Ki_Baoli.jpg";

const images = [
  TajMahal,
  RedFort,
  QutubMinar,
  LotusTemple,
  HawaMahal,
  Gurudwara,
  HumayuTomb,
  IndiaGate,
  AgrasenKiBaoli,
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = 3; // Set how many images to display per slide

  // Next Slide Function
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + imagesPerSlide >= images.length
        ? 0 // If at the end, reset to the beginning
        : prevIndex + imagesPerSlide
    );
  };

  // Previous Slide Function
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? images.length - imagesPerSlide // If at the start, go to the last set
        : prevIndex - imagesPerSlide
    );
  };

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // 3 seconds
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-images">
        {images
          .slice(currentIndex, currentIndex + imagesPerSlide) // Show 3 images at a time
          .map((image, index) => (
            <div key={index} className="carousel-image fade">
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
      </div>
      <button className="carousel-arrow left-arrow" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-arrow right-arrow" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel;
