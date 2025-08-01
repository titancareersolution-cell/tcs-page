import React from 'react';
import { Link } from 'react-router-dom';
import './StudyAustralia.css';

const ukFlag = 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg';
const ukImg = 'https://images.unsplash.com/photo-1562767332-ce0b1e2426bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const StudyUK = () => (
  <div className="study-country-section">
    <div className="study-country-hero-container">
      <img src={ukImg} alt="UK" className="study-country-hero" />
      <div className="study-country-hero-overlay">
        <h2 className="study-country-title">
          <img src={ukFlag} alt="UK Flag" className="study-country-flag" />
          Study in UK
        </h2>
      </div>
    </div>
    <div className="study-country-intro">
      <p>
        The United Kingdom is a global leader in education, home to some of the world's most prestigious universities. With a rich academic tradition, diverse culture, and vibrant student life, the UK offers international students an exceptional environment for learning and personal development.
      </p>
    </div>
    <div className="study-country-facts">
      <h3 className="study-country-subtitle">Key Facts</h3>
      <ul className="study-country-facts-list">
        <li><span className="fact-label">Capital:</span> London</li>
        <li><span className="fact-label">Major Cities:</span> Manchester, Birmingham, Edinburgh, Glasgow, Liverpool</li>
        <li><span className="fact-label">Official Language:</span> English</li>
        <li><span className="fact-label">Currency:</span> Pound Sterling (GBP)</li>
        <li><span className="fact-label">International Students:</span> 600,000+</li>
        <li><span className="fact-label">Academic Intakes:</span> September, January</li>
      </ul>
    </div>
    <div className="study-country-reasons">
      <h3 className="study-country-subtitle">Reasons for Studying in the UK</h3>
      <ul className="study-country-reasons-list">
        <li>World-renowned universities and qualifications</li>
        <li>Shorter course durations and flexible study options</li>
        <li>Rich history, culture, and vibrant student life</li>
        <li>Opportunities for work and internships</li>
        <li>Strong support for international students</li>
        <li>Gateway to Europe and global careers</li>
        <li>Scholarships and funding opportunities</li>
      </ul>
    </div>
    
    <div className="study-country-resources">
      <h3 className="study-country-subtitle">Study Resources</h3>
      <div className="study-resources-grid">
        <Link to="/study-guide/uk" className="study-resource-card">
          <h4>Study Guide</h4>
          <p>Comprehensive guide to studying in the UK</p>
        </Link>
        <Link to="/colleges/uk" className="study-resource-card">
          <h4>Colleges</h4>
          <p>Explore colleges and vocational institutions</p>
        </Link>
        <Link to="/universities/uk" className="study-resource-card">
          <h4>Universities</h4>
          <p>Top universities and academic programs</p>
        </Link>
        <Link to="/eligibility/uk" className="study-resource-card">
          <h4>Eligibility Criteria</h4>
          <p>Requirements and application process</p>
        </Link>
      </div>
    </div>
  </div>
);

export default StudyUK; 