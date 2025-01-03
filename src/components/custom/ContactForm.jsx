// src/components/ContactForm.js
import React, { useState } from "react";

function ContactForm() {
  // Form Data Handler
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for submission status

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make the POST request to the backend (using the updated endpoint)
    fetch("http://localhost:5000/send-email", {
      // Update endpoint here
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true); // Set submitted status
        } else {
          alert("Error sending email.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error sending email.");
      });
  };

  return (
    <section id="form">
      {!isSubmitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="form-heading">Get In Touch</h2>

          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <input
            type="text"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            maxLength="10"
            pattern="\d{10}"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            required
          />

          <textarea
            placeholder="Write a Message"
            name="message"
            maxLength="300"
            rows="4"
            style={{ resize: "none" }}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      ) : (
        <div className="submitted-message">
          <h2>Form Submitted</h2>
          <div className="tick-icon">
            {/* Add tick icon using CSS or an SVG */}
            <span className="tick">✔️</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default ContactForm;