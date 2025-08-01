import React from 'react';
import { Link } from 'react-router-dom';
import './StudyAustralia.css';

const nzFlag = 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg';
const nzImg = 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const StudyNewZealand = () => (
  <div className="study-country-section">
    <div className="study-country-hero-container">
      <img src={nzImg} alt="New Zealand" className="study-country-hero" />
      <div className="study-country-hero-overlay">
        <h2 className="study-country-title">
          <img src={nzFlag} alt="New Zealand Flag" className="study-country-flag" />
          Study in New Zealand
        </h2>
      </div>
    </div>
    <div className="study-country-intro">
      <p>
        New Zealand is known for its stunning landscapes, friendly people, and high-quality education system. With a focus on research, innovation, and practical learning, New Zealand offers international students a safe and welcoming environment to achieve their academic and career goals.
      </p>
    </div>
    <div className="study-country-facts">
      <h3 className="study-country-subtitle">Key Facts</h3>
      <ul className="study-country-facts-list">
        <li><span className="fact-label">Capital:</span> Wellington</li>
        <li><span className="fact-label">Major Cities:</span> Auckland, Christchurch, Hamilton, Dunedin, Tauranga</li>
        <li><span className="fact-label">Official Languages:</span> English, Māori, NZ Sign Language</li>
        <li><span className="fact-label">Currency:</span> New Zealand Dollar (NZD)</li>
        <li><span className="fact-label">International Students:</span> 100,000+</li>
        <li><span className="fact-label">Academic Intakes:</span> February, July</li>
      </ul>
    </div>
    <div className="study-country-reasons">
      <h3 className="study-country-subtitle">Reasons for Studying in New Zealand</h3>
      <ul className="study-country-reasons-list">
        <li>Globally recognized universities and qualifications</li>
        <li>Safe, peaceful, and welcoming society</li>
        <li>Stunning natural beauty and outdoor lifestyle</li>
        <li>Focus on research, innovation, and practical learning</li>
        <li>Work opportunities for students and graduates</li>
        <li>Supportive environment for international students</li>
        <li>Pathways to permanent residency</li>
      </ul>
    </div>
    
    <div className="study-country-resources">
      <h3 className="study-country-subtitle">Study Resources</h3>
      <div className="study-resources-grid">
        <Link to="/study-guide/new-zealand" className="study-resource-card">
          <h4>Study Guide</h4>
          <p>Comprehensive guide to studying in New Zealand</p>
        </Link>
        <Link to="/colleges/new-zealand" className="study-resource-card">
          <h4>Colleges</h4>
          <p>Explore colleges and vocational institutions</p>
        </Link>
        <Link to="/universities/new-zealand" className="study-resource-card">
          <h4>Universities</h4>
          <p>Top universities and academic programs</p>
        </Link>
        <Link to="/eligibility/new-zealand" className="study-resource-card">
          <h4>Eligibility Criteria</h4>
          <p>Requirements and application process</p>
        </Link>
      </div>
    </div>
  </div>
);

export default StudyNewZealand; 