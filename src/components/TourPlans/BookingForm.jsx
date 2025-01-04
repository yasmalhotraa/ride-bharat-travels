import React, { useState, useEffect } from "react";
import "../Styling/bookingform.css";

const pricingData = {
  delhiDarshan: {
    sedan: 2500,
    suv: 3500,
    tempoTraveller: 5500,
  },
  agraTour: {
    sedan: 6000,
    suv: 8000,
    tempoTraveller: 15000,
  },
};

function BookingForm({ packageType }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cabType, setCabType] = useState("");
  const [cabQuantity, setCabQuantity] = useState(1);
  const [adults, setAdults] = useState(""); // Default to empty string for placeholder
  const [children, setChildren] = useState(""); // Default to empty string for placeholder
  const [totalPrice, setTotalPrice] = useState(0);

  // Effect hook to calculate the price whenever cabType or cabQuantity changes
  useEffect(() => {
    if (cabType) {
      const pricePerCab = pricingData[packageType][cabType];
      setTotalPrice(pricePerCab * cabQuantity);
    }
  }, [cabType, cabQuantity, packageType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="booking-form-container">
      {!formSubmitted ? (
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-heading">
            <h2>Book This Tour</h2>
          </div>

          <input type="text" id="name" placeholder="Enter your name" required />
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            required
          />

          <select
            name="cabType"
            value={cabType}
            onChange={(e) => setCabType(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Cab Type
            </option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="tempoTraveller">Tempo Traveller</option>
          </select>

          <label htmlFor="car-quantity">Select Car Quantity</label>
          <select
            name="carQty"
            value={cabQuantity}
            onChange={(e) => setCabQuantity(parseInt(e.target.value))}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>

          <div className="no-of-people">
            <div>
              <label htmlFor="adults">[ Above 5+ Age ]</label>
              <select
                name="adults"
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                required
              >
                <option value="" disabled>
                  No. of People
                </option>
                {[...Array(14).keys()].map((i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="children">[ Below 5+ Age ]</label>
              <select
                name="children"
                value={children}
                onChange={(e) => setChildren(e.target.value)}
              >
                <option value="" disabled>
                  No. of Children
                </option>
                {[...Array(9).keys()].map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <label htmlFor="journey-date">Journey Date</label>
          <input
            className="date-wrapper"
            type="date"
            id="journey-date"
            required
          />

          {/* Display Total Price */}
          <div className="total-price">
            <p>
              Total Price: ₹{totalPrice || 0} ({cabQuantity} /{" "}
              {cabType || "Select Cab Type"})
            </p>
          </div>

          <button type="submit">Book now!</button>
        </form>
      ) : (
        <div className="form-success-message">
          <h3>Booking Submitted Successfully!</h3>
          <p>
            Thank you for booking. We will contact you shortly to confirm your
            tour.
          </p>
        </div>
      )}
    </div>
  );
}

export default BookingForm;
