import React, { useState, useEffect } from "react";
import "./ContactForm.css";

const personCallImg =
  "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const destinations = [
  "Australia",
  "Japan",
  "UK",
  "New Zealand",
  "United States",
  "Canada",
];

const icons = {
  user: (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="#b39ddb"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
    </svg>
  ),
  email: (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="#b39ddb"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  phone: (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="#b39ddb"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  achievement: (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="#b39ddb"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  ),
  year: (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="#b39ddb"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  destination: (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="#b39ddb"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  gpa: (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="#b39ddb"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M9 12l2 2 4-4" />
      <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
    </svg>
  ),
  book: (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="#b39ddb"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
};

const ContactForm = () => {
  // Popup state
  const [showPopup, setShowPopup] = useState(false);

  // Show popup if redirected with ?form=success in URL
  useEffect(() => {
    if (window.location.search.includes("form=success")) {
      setShowPopup(true);
      // Remove the query param from the URL for cleanliness
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <div className="contact-form-flex" id="contact-form">
      <div className="contact-form-section left large-text">
        <h3>
          Get in <span>Touch</span>
        </h3>
        <form
          className="contact-form"
          action="https://formsubmit.co/4c1fd812ac5d08e61a0bc6c1fda628bf"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="http://tcs.edu.np?form=success"
          />
          <div className="input-icon-group">
            <span className="input-icon">{icons.user}</span>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              autoComplete="name"
              required
            />
          </div>
          <div className="input-icon-group">
            <span className="input-icon">{icons.email}</span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="email"
              required
            />
          </div>
          <div className="input-icon-group">
            <span className="input-icon">{icons.phone}</span>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              autoComplete="tel"
              required
            />
          </div>
          <div className="input-icon-group">
            <span className="input-icon">{icons.destination}</span>
            <select
              className="select-destination"
              name="destination"
              id="destination"
              autoComplete="country"
              required
            >
              <option value="">Preferred Study Destination</option>
              {destinations.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <div className="input-icon-group">
            <span className="input-icon">{icons.achievement}</span>
            <input
              type="text"
              name="achievement"
              id="achievement"
              placeholder="Latest Academic Achievement"
              autoComplete="organization"
              required
            />
          </div>
          <div className="input-icon-group">
            <span className="input-icon">{icons.gpa}</span>
            <input
              type="text"
              name="gpa"
              id="gpa"
              placeholder="GPA (e.g., 3.5/4.0)"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-icon-group">
            <span className="input-icon">{icons.book}</span>
            <input
              type="text"
              name="faculty"
              id="faculty"
              placeholder="Faculty/Subject (e.g., Computer Science)"
              autoComplete="organization"
              required
            />
          </div>
          <div className="input-icon-group">
            <span className="input-icon">{icons.year}</span>
            <input
              type="text"
              name="year"
              id="year"
              placeholder="Completed Year"
              autoComplete="off"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {showPopup && (
          <div
            className="form-popup-overlay"
            onClick={() => setShowPopup(false)}
          >
            <div className="form-popup" onClick={(e) => e.stopPropagation()}>
              <span
                className="form-popup-close"
                onClick={() => setShowPopup(false)}
              >
                &times;
              </span>
              <h2>Form submitted!</h2>
              <p>We will get back to you soon.</p>
            </div>
          </div>
        )}
      </div>
      <div
        className="contact-form-section right large-text contact-form-bg-image"
        style={{ backgroundImage: `url(${personCallImg})` }}
      >
        <div className="contact-form-message-overlay">
          <h2>Why Students Trust TCS?</h2>
          <p>
            With 98% visa success, 95% scholarship approvals, and over a decade
            of expertise, we’re more than consultants — we’re your partners in
            success. Our counselors guide you through every step, from career
            counseling to arrival in your new country.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
