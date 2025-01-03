import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as solidStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styling/ClientReviews.css";
import ppf2 from "../../assets/Images/ppf2.jpg";
import ppf1 from "../../assets/Images/ppf1.jpg";
import ppf3 from "../../assets/Images/ppf3.jpg";

const reviews = [
  {
    name: "Rohit Puri",
    review:
      "Om Sai Travels provided an incredible experience! The vehicle was comfortable, and the driver was very professional.",
    rating: 5,
    profilePhoto: ppf2,
  },
  {
    name: "Mansi Kadam",
    review:
      "Great experience with Om Sai Travels! The driver was friendly, and the vehicle was clean and comfortable.",
    rating: 4,
    profilePhoto: ppf1,
  },
  {
    name: "Yogesh Panchal",
    review:
      "Affordable and professional service. Had a fantastic journey and highly recommend them for travels across India.",
    rating: 4.5, // Set Yogesh’s rating to 4.5
    profilePhoto: ppf3,
  },
];

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      &lt; {/* Left Arrow */}
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      &gt; {/* Right Arrow */}
    </div>
  );
};

const ClientReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="stars">
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={solidStar} className="star-icon" />
        ))}
        {hasHalfStar && (
          <FontAwesomeIcon icon={faStarHalfAlt} className="star-icon" />
        )}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
          <FontAwesomeIcon
            key={index + fullStars}
            icon={regularStar}
            className="star-icon"
          />
        ))}
      </div>
    );
  };

  return (
    <section className="client-reviews-section">
      <h2 className="font-extrabold">What Our Clients Say</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            {renderStars(review.rating)}
            <p className="review-text">"{review.review}"</p>
            <div className="reviewer-info">
              <img
                src={review.profilePhoto}
                alt={`${review.name}'s profile`}
                className="profile-photo"
              />
              <p className="reviewer-name">- {review.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ClientReviews;