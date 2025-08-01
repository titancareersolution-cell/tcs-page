import React from 'react';
import { Link } from 'react-router-dom';
import './StudyAustralia.css';

const australiaFlag = 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg';
const australiaImg = 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const StudyAustralia = () => (
  <div className="study-country-section">
    <div className="study-country-hero-container">
      <img src={australiaImg} alt="Australia" className="study-country-hero" />
      <div className="study-country-hero-overlay">
        <h2 className="study-country-title">
          <img src={australiaFlag} alt="Australia Flag" className="study-country-flag" />
          Study in Australia
        </h2>
      </div>
    </div>
    <div className="study-country-intro">
      <p>
        Australia is one of the most popular destinations for international students, offering world-class education, a vibrant multicultural environment, and stunning natural beauty. With top-ranked universities, innovative teaching, and a high standard of living, Australia is the perfect place to pursue your academic and career goals.
      </p>
    </div>
    <div className="study-country-facts">
      <h3 className="study-country-subtitle">Key Facts</h3>
      <ul className="study-country-facts-list">
        <li><span className="fact-label">Capital:</span> Canberra</li>
        <li><span className="fact-label">Largest Cities:</span> Sydney, Melbourne, Brisbane, Perth, Adelaide</li>
        <li><span className="fact-label">Official Language:</span> English</li>
        <li><span className="fact-label">Currency:</span> Australian Dollar (AUD)</li>
        <li><span className="fact-label">International Students:</span> 800,000+</li>
        <li><span className="fact-label">Academic Intakes:</span> February, July, November</li>
      </ul>
    </div>
    <div className="study-country-reasons">
      <h3 className="study-country-subtitle">Reasons for Studying in Australia</h3>
      <ul className="study-country-reasons-list">
        <li>Globally recognized universities and qualifications</li>
        <li>Innovative teaching and research facilities</li>
        <li>Multicultural and inclusive society</li>
        <li>Work opportunities for students and graduates</li>
        <li>High quality of life and safe environment</li>
        <li>Beautiful landscapes and vibrant cities</li>
        <li>Pathways to permanent residency</li>
      </ul>
    </div>
    
    <div className="study-country-resources">
      <h3 className="study-country-subtitle">Study Resources</h3>
      <div className="study-resources-grid">
        <Link to="/study-guide/australia" className="study-resource-card">
          <h4>Study Guide</h4>
          <p>Comprehensive guide to studying in Australia</p>
        </Link>
        <Link to="/colleges/australia" className="study-resource-card">
          <h4>Colleges</h4>
          <p>Explore colleges and vocational institutions</p>
        </Link>
        <Link to="/universities/australia" className="study-resource-card">
          <h4>Universities</h4>
          <p>Top universities and academic programs</p>
        </Link>
        <Link to="/eligibility/australia" className="study-resource-card">
          <h4>Eligibility Criteria</h4>
          <p>Requirements and application process</p>
        </Link>
      </div>
    </div>
  </div>
);

export default StudyAustralia; 