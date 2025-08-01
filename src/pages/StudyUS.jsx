import React from 'react';
import { Link } from 'react-router-dom';
import './StudyAustralia.css';

const usFlag = 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg';
const usImg = 'https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const StudyUS = () => (
  <div className="study-country-section">
    <div className="study-country-hero-container">
      <img src={usImg} alt="United States" className="study-country-hero" />
      <div className="study-country-hero-overlay">
        <h2 className="study-country-title">
          <img src={usFlag} alt="US Flag" className="study-country-flag" />
          Study in United States
        </h2>
      </div>
    </div>
    <div className="study-country-intro">
      <p>
        The United States is a top destination for international students, known for its world-class universities, diverse culture, and cutting-edge research. With a wide range of programs and opportunities, the US offers a dynamic environment for academic and personal growth.
      </p>
    </div>
    <div className="study-country-facts">
      <h3 className="study-country-subtitle">Key Facts</h3>
      <ul className="study-country-facts-list">
        <li><span className="fact-label">Capital:</span> Washington, D.C.</li>
        <li><span className="fact-label">Major Cities:</span> New York, Los Angeles, Chicago, Houston, Boston</li>
        <li><span className="fact-label">Official Language:</span> English</li>
        <li><span className="fact-label">Currency:</span> US Dollar (USD)</li>
        <li><span className="fact-label">International Students:</span> 1,000,000+</li>
        <li><span className="fact-label">Academic Intakes:</span> August, January, May</li>
      </ul>
    </div>
    <div className="study-country-reasons">
      <h3 className="study-country-subtitle">Reasons for Studying in the United States</h3>
      <ul className="study-country-reasons-list">
        <li>Top-ranked universities and diverse programs</li>
        <li>Cutting-edge research and innovation</li>
        <li>Vibrant campus life and multicultural society</li>
        <li>Opportunities for internships and OPT/CPT</li>
        <li>Strong support for international students</li>
        <li>Global career prospects and networking</li>
        <li>Pathways to advanced degrees and research</li>
      </ul>
    </div>
    
    <div className="study-country-resources">
      <h3 className="study-country-subtitle">Study Resources</h3>
      <div className="study-resources-grid">
        <Link to="/study-guide/united-states" className="study-resource-card">
          <h4>Study Guide</h4>
          <p>Comprehensive guide to studying in the United States</p>
        </Link>
        <Link to="/colleges/united-states" className="study-resource-card">
          <h4>Colleges</h4>
          <p>Explore colleges and vocational institutions</p>
        </Link>
        <Link to="/universities/united-states" className="study-resource-card">
          <h4>Universities</h4>
          <p>Top universities and academic programs</p>
        </Link>
        <Link to="/eligibility/united-states" className="study-resource-card">
          <h4>Eligibility Criteria</h4>
          <p>Requirements and application process</p>
        </Link>
      </div>
    </div>
  </div>
);

export default StudyUS; 