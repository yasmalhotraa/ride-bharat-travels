import React, { useState, useEffect } from "react";
import Indiagate from "../../assets/Images/Indiagate2.jpg"
import Lotustemple from "../../assets/Images/LotusTemple.jpg";
import Qutubminar from "../../assets/Images/Qutubminar.jpg";
import Redfort from "../../assets/Images/RedFort.jpg";
import Tajmahal from "../../assets/Images/Tajmahal.jpg";
import Agrafort from "../../assets/Images/Agra-fort.jpg";
import Agrammosque from "../../assets/Images/Agra-mosque.jpg";
import Agrafort2 from "../../assets/Images/Agra_Fort2.jpg";

const packages = [
  {
    name: "Delhi Sightseeing",
    description: "Explore the iconic cities of Delhi, Agra, and Jaipur.",
    duration: "7 days",
    images: [Indiagate, Lotustemple, Qutubminar, Redfort], // Array of images for the slider
    link: "delhi-darshan",
  },
  {
    name: "Agra Tour",
    description: "Enjoy the sun, sand, and sea in beautiful Goa.",
    duration: "5 days",
    images: [Tajmahal, Agrafort, Agrafort2, Agrammosque], // Array of images for the slider
    link: "agra-tour",
  },
];

function TourPackages() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % packages[0].images.length
      ); // Loop through images
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="packages-container">
      {packages.map((pkg, index) => (
        <a href={`/${pkg.link}`} className="package-link" key={index}>
          <div className="package-card">
            <div className="package-image-container">
              <div className="slider">
                {pkg.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={pkg.name}
                    className={`package-image ${
                      imgIndex === currentIndex ? "active" : ""
                    }`}
                  />
                ))}
              </div>
              <button className="book-now-btn">Book Now</button>
            </div>
            <div className="package-info shadow">
              <p className="package-duration">{pkg.duration}</p>
              <h3 className="package-name">{pkg.name}</h3>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default TourPackages;