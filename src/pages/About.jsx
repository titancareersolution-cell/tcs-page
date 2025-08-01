import React from 'react';
import './About.css';

const icons = {
  counseling: (
    <svg width="22" height="22" fill="none" stroke="#e67e22" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
  ),
  visa: (
    <svg width="22" height="22" fill="none" stroke="#e67e22" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M2 9l10 6 10-6"/></svg>
  ),
  test: (
    <svg width="22" height="22" fill="none" stroke="#e67e22" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 21 12 17.27 7.82 21 9 12.91l-5-3.64 5.91-1.01z"/></svg>
  ),
  scholarship: (
    <svg width="22" height="22" fill="none" stroke="#e67e22" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/></svg>
  ),
  support: (
    <svg width="22" height="22" fill="none" stroke="#e67e22" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
  ),
  experience: (
    <svg width="22" height="22" fill="none" stroke="#e67e22" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 0v10l6 3"/></svg>
  ),
  partnership: (
    <svg width="22" height="22" fill="none" stroke="#e67e22" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
  ),
  record: (
    <svg width="22" height="22" fill="none" stroke="#e67e22" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M2 9l10 6 10-6"/></svg>
  ),
  person: (
    <svg width="22" height="22" fill="none" stroke="#e67e22" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 8-4 8-4s8 0 8 4"/></svg>
  ),
  contact: (
    <svg width="22" height="22" fill="none" stroke="#e67e22" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5"/><path d="M3 10.5V18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.5"/><path d="M16 3v4M8 3v4"/></svg>
  ),
};

const About = () => (
  <div className="about-page">
    <div className="about-header">
      <h1>About <span>Us</span></h1>
      <p className="subtitle">Your Trusted Partner in Global Education & Career Success</p>
    </div>
    
    <div className="about-content">
      <section className="about-section">
        <h2>Welcome to Titan Career Solutions</h2>
        <p>
          <strong>Titan Career Solutions</strong> is dedicated to guiding students and professionals toward their academic and career aspirations abroad. With years of experience and a passionate team, we provide expert counseling, personalized guidance, and comprehensive support for studying in countries like <strong>Australia</strong>, <strong>Japan</strong>, <strong>UK</strong>, <strong>New Zealand</strong>, and the <strong>United States</strong>.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Do</h2>
        <ul className="services-list">
          <li>{icons.counseling}<strong>Study Abroad Counseling:</strong> We help you choose the right destination, university, and course based on your goals and academic background.</li>
          <li>{icons.visa}<strong>Visa & Application Support:</strong> Our team assists with every step of the application and visa process, ensuring a smooth and successful journey.</li>
          <li>{icons.test}<strong>Test Preparation:</strong> We offer resources and advice for language and entrance exams, including IELTS and Japanese language tests.</li>
          <li>{icons.scholarship}<strong>Scholarship Guidance:</strong> We connect students with scholarship opportunities and financial aid to make education abroad more accessible.</li>
          <li>{icons.support}<strong>Post-Arrival Services:</strong> From airport pickup to accommodation and local support, we ensure you feel at home in your new country.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Why Choose Titan Career Solutions?</h2>
        <ul className="benefits-list">
          <li>{icons.experience}<strong>Experienced Counselors:</strong> Our team is committed to your success, providing honest, up-to-date advice tailored to your needs.</li>
          <li>{icons.partnership}<strong>Strong Partnerships:</strong> We collaborate with top universities and institutions worldwide.</li>
          <li>{icons.record}<strong>Proven Track Record:</strong> Hundreds of students have achieved their dreams with our help.</li>
          <li>{icons.person}<strong>Personalized Approach:</strong> We treat every student as unique, offering one-on-one guidance throughout the process.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Ready to Start Your Journey?</h2>
        <p>Contact us for a free consultation and let <strong>Titan Career Solutions</strong> be your trusted partner in achieving your global education dreams.</p>
        <div className="cta-section">
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
      </section>
    </div>
  </div>
);

export default About; 