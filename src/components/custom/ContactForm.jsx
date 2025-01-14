import { useState } from "react";

const ContactForm = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch(
      "https://exampleBackendContactServer.com/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      }
    );
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully." });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="form-wrapper">
          <div className="form-header"></div>
          <form onSubmit={handleSubmit} className="contact-form">
            <h2 className="form-heading">Get In Touch</h2>
            <div className="form-group">
              <div className="form-field">
                <input
                  type="text"
                  value={formDetails.firstName}
                  placeholder="First Name"
                  required
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <input
                  type="text"
                  value={formDetails.lastName}
                  placeholder="Last Name"
                  required
                  onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  className="input-field"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-field">
                <input
                  type="email"
                  value={formDetails.email}
                  placeholder="Email Address"
                  required
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                  className="input-field"
                />
              </div>
              <div className="form-field">
                <input
                  type="tel"
                  value={formDetails.phone}
                  placeholder="Phone No."
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  onChange={(e) => onFormUpdate("phone", e.target.value)}
                  className="input-field"
                />
              </div>
            </div>
            <div className="form-field">
              <textarea
                rows={6}
                value={formDetails.message}
                placeholder="Message"
                required
                onChange={(e) => onFormUpdate("message", e.target.value)}
                className="textarea-field"
              />
            </div>
            {status.message && (
              <p
                className={`status-message ${
                  status.success ? "success" : "error"
                }`}
              >
                {status.message}
              </p>
            )}
            <button type="submit" className="submit-button">
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
