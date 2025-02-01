import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons"; // Add FontAwesome icons
import {
  Carousel as ShadCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ppf2 from "../../assets/Images/ppf2.jpg";
import ppf1 from "../../assets/Images/ppf1.jpg";
import ppf3 from "../../assets/Images/ppf3.jpg";

// Review data
const reviews = [
  {
    name: "Rohit Puri",
    review:
      "Ride Bharat Travels provided an incredible experience! The vehicle was comfortable, and the driver was very professional.",
    rating: 5,
    profilePhoto: ppf2, // replace with actual image path
  },
  {
    name: "Mansi Kadam",
    review:
      "Great experience with Ride Bharat Travels! The driver was friendly, and the vehicle was clean and comfortable.",
    rating: 4,
    profilePhoto: ppf1, // replace with actual image path
  },
  {
    name: "Yogesh Panchal",
    review:
      "Affordable and professional service. Had a fantastic journey and highly recommend them for travels across India.",
    rating: 4.5,
    profilePhoto: ppf3, // replace with actual image path
  },
];

// Client Reviews Carousel
const ClientReviewsCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  // Render star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="stars">
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className="text-[#ffb800] mt-[4px]"
          />
        ))}
        {hasHalfStar && (
          <FontAwesomeIcon
            icon={faStarHalfAlt}
            className="text-[#ffb800] mt-[4px]"
          />
        )}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
          <FontAwesomeIcon
            key={index + fullStars}
            icon={faStar}
            className="text-[#ffb800] mt-[4px]"
          />
        ))}
      </div>
    );
  };

  return (
    <section className="bg-[#cecece] p-[2rem] pb-[4rem] text-center">
      <h2 className="font-bold text-[1.6rem] md:text-[2rem] text-[#2c3e50] mb-[1.5rem]">
        What Our Clients Say
      </h2>
      <div className="flex justify-center items-center ">
        <ShadCarousel
          plugins={[plugin.current]}
          className="w-full max-w-lg"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index}>
                <div className="p-4 rounded-lg flex flex-col items-center">
                  {/* Rating */}
                  <div className="flex justify-center ">
                    {renderStars(review.rating)}
                  </div>
                  {/* Review Text */}
                  <p className="text-[555] md:text-[1.2rem] mt-[1rem] ">
                    "{review.review}"
                  </p>
                  {/* Reviewer Info */}
                  <div className=" flex items-center mt-[10px] justify-center">
                    <img
                      src={review.profilePhoto}
                      alt={`${review.name}'s profile`}
                      className="w-[50px] h-[50px] rounded-full mr-3"
                    />
                    <p className="text-[#333] md:text-1.2rem font-bold text-[1rem]">
                      {review.name}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </ShadCarousel>
      </div>
    </section>
  );
};

export default ClientReviewsCarousel;
