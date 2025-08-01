import React from 'react';
import { Link } from 'react-router-dom';
import './StudyAustralia.css';

const canadaFlag = 'https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg';
const canadaImg = 'https://images.unsplash.com/photo-1519832979-6fa011b87667?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const StudyCanada = () => (
  <div className="study-country-section">
    <div className="study-country-hero-container">
      <img src={canadaImg} alt="Canada" className="study-country-hero" />
      <div className="study-country-hero-overlay">
        <h2 className="study-country-title">
          <img src={canadaFlag} alt="Canada Flag" className="study-country-flag" />
          Study in Canada
        </h2>
      </div>
    </div>
    <div className="study-country-intro">
      <p>
        Canada is one of the world's most popular destinations for international students, offering high-quality education, a welcoming multicultural environment, and excellent opportunities for personal and professional growth. With its stunning natural beauty, safe cities, and world-class institutions, Canada provides an ideal setting for academic success.
      </p>
    </div>
    <div className="study-country-facts">
      <h3 className="study-country-subtitle">Key Facts</h3>
      <ul className="study-country-facts-list">
        <li><span className="fact-label">Capital:</span> Ottawa</li>
        <li><span className="fact-label">Major Cities:</span> Toronto, Vancouver, Montreal, Calgary, Edmonton</li>
        <li><span className="fact-label">Official Languages:</span> English, French</li>
        <li><span className="fact-label">Currency:</span> Canadian Dollar (CAD)</li>
        <li><span className="fact-label">International Students:</span> 642,000+</li>
        <li><span className="fact-label">Academic Intakes:</span> September, January, May</li>
      </ul>
    </div>
    <div className="study-country-reasons">
      <h3 className="study-country-subtitle">Reasons for Studying in Canada</h3>
      <ul className="study-country-reasons-list">
        <li>World-class universities and colleges with global recognition</li>
        <li>Multicultural and inclusive society welcoming students from all backgrounds</li>
        <li>High quality of life with excellent healthcare and safety standards</li>
        <li>Beautiful natural landscapes and outdoor recreational opportunities</li>
        <li>Strong economy with excellent job prospects for graduates</li>
        <li>Pathways to permanent residency and citizenship</li>
        <li>Affordable education compared to other English-speaking countries</li>
      </ul>
    </div>
    
    <div className="study-country-resources">
      <h3 className="study-country-subtitle">Study Resources</h3>
      <div className="study-resources-grid">
        <Link to="/study-guide/canada" className="study-resource-card">
          <h4>Study Guide</h4>
          <p>Comprehensive guide to studying in Canada</p>
        </Link>
        <Link to="/colleges/canada" className="study-resource-card">
          <h4>Colleges</h4>
          <p>Explore colleges and vocational institutions</p>
        </Link>
        <Link to="/universities/canada" className="study-resource-card">
          <h4>Universities</h4>
          <p>Top universities and academic programs</p>
        </Link>
        <Link to="/eligibility/canada" className="study-resource-card">
          <h4>Eligibility Criteria</h4>
          <p>Requirements and application process</p>
        </Link>
      </div>
    </div>
  </div>
);

export default StudyCanada; 