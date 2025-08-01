import React from 'react';
import { Link } from 'react-router-dom';
import './StudyAustralia.css';

const japanFlag = 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg';
const japanImg = 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const StudyJapan = () => (
  <div className="study-country-section">
    <div className="study-country-hero-container">
      <img src={japanImg} alt="Japan" className="study-country-hero" />
      <div className="study-country-hero-overlay">
        <h2 className="study-country-title">
          <img src={japanFlag} alt="Japan Flag" className="study-country-flag" />
          Study in Japan
        </h2>
      </div>
    </div>
    <div className="study-country-intro">
      <p>
        Japan is renowned for its blend of tradition and innovation, offering students a unique educational experience. With top universities, advanced technology, and a rich cultural heritage, Japan is an exciting destination for international students seeking academic excellence and personal growth.
      </p>
    </div>
    <div className="study-country-facts">
      <h3 className="study-country-subtitle">Key Facts</h3>
      <ul className="study-country-facts-list">
        <li><span className="fact-label">Capital:</span> Tokyo</li>
        <li><span className="fact-label">Major Cities:</span> Osaka, Kyoto, Yokohama, Nagoya, Sapporo</li>
        <li><span className="fact-label">Official Language:</span> Japanese</li>
        <li><span className="fact-label">Currency:</span> Japanese Yen (JPY)</li>
        <li><span className="fact-label">International Students:</span> 300,000+</li>
        <li><span className="fact-label">Academic Intakes:</span> April, September</li>
      </ul>
    </div>
    <div className="study-country-reasons">
      <h3 className="study-country-subtitle">Reasons for Studying in Japan</h3>
      <ul className="study-country-reasons-list">
        <li>World-class universities and research institutions</li>
        <li>Cutting-edge technology and innovation</li>
        <li>Rich cultural and historical heritage</li>
        <li>Safe, clean, and efficient cities</li>
        <li>Opportunities for scholarships and financial aid</li>
        <li>Gateway to careers in Asia and beyond</li>
        <li>Unique language and cultural immersion</li>
      </ul>
    </div>
    
    <div className="study-country-resources">
      <h3 className="study-country-subtitle">Study Resources</h3>
      <div className="study-resources-grid">
        <Link to="/study-guide/japan" className="study-resource-card">
          <h4>Study Guide</h4>
          <p>Comprehensive guide to studying in Japan</p>
        </Link>
        <Link to="/colleges/japan" className="study-resource-card">
          <h4>Colleges</h4>
          <p>Explore colleges and vocational institutions</p>
        </Link>
        <Link to="/universities/japan" className="study-resource-card">
          <h4>Universities</h4>
          <p>Top universities and academic programs</p>
        </Link>
        <Link to="/eligibility/japan" className="study-resource-card">
          <h4>Eligibility Criteria</h4>
          <p>Requirements and application process</p>
        </Link>
      </div>
    </div>
  </div>
);

export default StudyJapan; 