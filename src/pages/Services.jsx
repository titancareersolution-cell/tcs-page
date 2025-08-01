import React from 'react';
import './Services.css';

const services = [
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#e67e22" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
    ),
    title: 'Career Counseling',
    content: 'Personalized guidance to help you choose the right course, university, and country based on your academic background and career goals.'
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#e67e22" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
    ),
    title: 'Admission Assistance',
    content: 'Expert support with university applications, documentation, and securing admissions to top institutions worldwide.'
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#e67e22" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M2 9l10 6 10-6"/></svg>
    ),
    title: 'Visa Guidance',
    content: 'Comprehensive visa counseling, document preparation, and interview training to maximize your chances of approval.'
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#e67e22" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 21 12 17.27 7.82 21 9 12.91l-5-3.64 5.91-1.01z"/></svg>
    ),
    title: 'Test Preparation',
    content: 'Coaching and resources for IELTS, TOEFL, PTE, and other language/entrance exams to help you achieve your target scores.'
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#e67e22" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/></svg>
    ),
    title: 'Scholarship & Financial Aid',
    content: 'Information and assistance with scholarships, grants, and financial aid to make your education affordable.'
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#e67e22" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 0v10l6 3"/></svg>
    ),
    title: 'Pre-Departure Briefing',
    content: 'Guidance on travel, accommodation, and settling in, so you are fully prepared for your new academic journey.'
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#e67e22" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M2 9l10 6 10-6"/></svg>
    ),
    title: 'Post-Arrival Support',
    content: 'Ongoing support for students after arrival, including help with accommodation, local orientation, and more.'
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#e67e22" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
    ),
    title: 'Other Services',
    content: 'Assistance with travel arrangements, insurance, document attestation, and more to make your journey smooth.'
  },
];

const Services = () => (
  <div className="services-page">
    <div className="services-header">
      <h1>Our <span>Services</span></h1>
      <p className="subtitle">Comprehensive Support for Your Study Abroad Journey</p>
    </div>
    
    <div className="services-content">
      <section className="services-section">
        <h2>Your Trusted Partner Throughout the Journey</h2>
        <p>
          At <strong>Titan Career Solutions</strong>, we are committed to being your trusted partner throughout your entire study abroad journey. We offer a comprehensive range of services designed to support and guide you every step of the way. Whether you are just beginning to explore international education options or are ready to board your flight, our expert team is here to assist you with care.
        </p>
        <p>
          Our experienced and knowledgeable counselors provide personalized, one-on-one guidance tailored to your academic background, career aspirations, and financial considerations. From helping you choose the right course and university that align with your goals, to navigating complex application procedures, visa processes, and scholarship opportunities, we ensure you are well-informed and confident at every stage.
        </p>
      </section>

      <section className="services-section">
        <h2>Our Comprehensive Services</h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div className="service-card" key={idx}>
              <div className="service-card-icon">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-content">{service.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="services-section">
        <h2>Why Choose Our Services?</h2>
        <ul className="benefits-list">
          <li><strong>Personalized Approach:</strong> Every student is unique, and we tailor our services to your specific needs and goals.</li>
          <li><strong>Expert Guidance:</strong> Our experienced counselors provide up-to-date information and honest advice.</li>
          <li><strong>Comprehensive Support:</strong> From initial consultation to post-arrival assistance, we're with you every step.</li>
          <li><strong>Proven Success:</strong> Hundreds of students have achieved their dreams with our help.</li>
          <li><strong>Strong Partnerships:</strong> We collaborate with top universities and institutions worldwide.</li>
        </ul>
      </section>

      <section className="services-section">
        <h2>Ready to Start Your Journey?</h2>
        <p>Contact us for a free consultation and let <strong>Titan Career Solutions</strong> guide you toward your global education dreams.</p>
        <div className="cta-section">
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
      </section>
    </div>
  </div>
);

export default Services; 