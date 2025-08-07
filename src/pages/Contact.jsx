import React from 'react';
import './Contact.css';

const icons = {
  address: (
    <svg width="20" height="20" fill="none" stroke="#2196F3" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
  ),
  phone: (
    <svg width="20" height="20" fill="none" stroke="#2196F3" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z"/></svg>
  ),
  email: (
    <svg width="20" height="20" fill="none" stroke="#2196F3" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
  ),
  facebook: (
    <svg width="20" height="20" fill="#1877f3" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
  ),
  instagram: (
    <svg width="20" height="20" fill="none" stroke="#E1306C" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="#E1306C"/></svg>
  ),
  cta: (
    <svg width="22" height="22" fill="none" stroke="#2196F3" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5"/><path d="M3 10.5V18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.5"/><path d="M16 3v4M8 3v4"/></svg>
  ),
  website: (
    <svg width="20" height="20" fill="none" stroke="#2196F3" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/></svg>
  ),
};

const Contact = () => (
  <div className="contact-page">
    <div className="contact-header">
      <h1>Contact <span>Us</span></h1>
      <p className="subtitle">Get in Touch for Expert Study Abroad Guidance</p>
    </div>
    
    <div className="contact-content">
      <section className="contact-section">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Have questions or need guidance? The <strong>Titan Career Solutions</strong> team is here to help you with your study abroad journey. Reach out to us for expert advice, application support, or any queries you may have!
        </p>
      </section>

      <section className="contact-section">
        <h2>Contact Information</h2>
        <div className="contact-info-grid">
          <div className="contact-info-item">
            <div className="contact-info-icon">{icons.address}</div>
            <div className="contact-info-content">
              <h3>Address</h3>
              <p>Putalisadak, Angan Building 3rd Floor, Kathmandu, Nepal</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-info-icon">{icons.phone}</div>
            <div className="contact-info-content">
              <h3>Phone</h3>
              <a href="tel:+9779851334607">+977 9851334607</a>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-info-icon">{icons.email}</div>
            <div className="contact-info-content">
              <h3>Email</h3>
              <a href="mailto:info@tcs.edu.np">info@tcs.edu.np</a>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-info-icon">{icons.facebook}</div>
            <div className="contact-info-content">
              <h3>Facebook</h3>
              <a href="https://www.facebook.com/titancareersolutions" target="_blank" rel="noopener noreferrer">facebook.com/titancareersolutions</a>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-info-icon">{icons.instagram}</div>
            <div className="contact-info-content">
              <h3>Instagram</h3>
              <a href="https://www.instagram.com/titancareersolutions/" target="_blank" rel="noopener noreferrer">instagram.com/titancareersolutions</a>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">{icons.website}</div>
            <div className="contact-info-content">
              <h3>Website</h3>
              <a href="https://www.tcs.edu.np/" target="_blank" rel="noopener noreferrer">tcs.edu.np</a>
            </div>
          </div>
        </div>
      </section>
      

      <section className="contact-section">
        <h2>Ready to Take the Next Step?</h2>
        <p>Fill out our contact form or connect with us directly. We look forward to helping you achieve your dreams!</p>
        <div className="cta-section">
          <a href="/" className="cta-button">Back to Home</a>
        </div>
      </section>
    </div>
  </div>
);

export default Contact; 