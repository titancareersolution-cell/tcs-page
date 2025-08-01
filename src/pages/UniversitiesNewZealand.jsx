import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Universities.css';

const UniversitiesNewZealand = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the main types of universities in New Zealand?",
      answer: "New Zealand has 8 public universities, all offering comprehensive degree programs. They are research-intensive institutions known for academic excellence and innovation. There are also private universities and specialized institutions."
    },
    {
      question: "Do I need to apply through a centralized system?",
      answer: "No, New Zealand universities accept direct applications. You can apply directly to each university through their individual application systems. Some universities also accept applications through education agents."
    },
    {
      question: "What are the tuition fees for New Zealand universities?",
      answer: "Tuition fees range from NZD 25,000 to 45,000 per year for international students, depending on the program and institution. Medicine and some specialized programs may cost more."
    },
    {
      question: "Are there scholarships available for international students?",
      answer: "Yes, there are various scholarships including New Zealand Government Scholarships, university-specific scholarships, and country-specific awards. Many universities offer merit-based and need-based scholarships."
    },
    {
      question: "What is the English language requirement for New Zealand universities?",
      answer: "Most universities require IELTS 6.0-6.5 overall, with no band less than 5.5-6.0. Some programs may require higher scores. Universities also accept other tests like TOEFL, PTE, and Cambridge English."
    }
  ];

  return (
    <div className="universities-page">
      <div className="universities-header">
        <h1>Universities in New Zealand</h1>
        <p className="subtitle">Discover World-Class Universities & Academic Excellence</p>
      </div>

      <div className="universities-content">
        <div className="universities-section">
          <h2>New Zealand's University System</h2>
          <p>New Zealand is home to 8 world-class universities, all ranked in the global top 3% and known for their academic excellence, research innovation, and strong focus on practical learning. New Zealand universities offer a unique blend of traditional academic rigor and modern educational approaches, with emphasis on creativity, critical thinking, and real-world application.</p>
          
          <div className="academic-requirements">
            <h3>Key Features</h3>
            <div className="requirements-grid">
              <div className="requirement-item">
                <h4>🏆 World Rankings</h4>
                <p>All 8 New Zealand universities rank in the world's top 3%, with several in the global top 200.</p>
                <ul>
                  <li>University of Auckland (#68 globally)</li>
                  <li>University of Otago (#217 globally)</li>
                  <li>University of Canterbury (#256 globally)</li>
                  <li>Victoria University of Wellington (#275 globally)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h4>🎓 Diverse Programs</h4>
                <p>Comprehensive range of undergraduate, postgraduate, and research programs across all major disciplines.</p>
                <ul>
                  <li>Bachelor's degrees (3-4 years)</li>
                  <li>Master's degrees (1-2 years)</li>
                  <li>PhD programs (3-4 years)</li>
                  <li>Professional qualifications</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h4>💼 Industry Connections</h4>
                <p>Strong partnerships with leading companies and organizations providing excellent career opportunities.</p>
                <ul>
                  <li>Industry partnerships</li>
                  <li>Internship programs</li>
                  <li>Career services</li>
                  <li>Alumni networks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="universities-section">
          <h2>Intake Periods</h2>
          <div className="intake-periods">
            <h3>Application Deadlines</h3>
            <div className="intakes-grid">
              <div className="intake-item">
                <h4>February Intake</h4>
                <p>Main intake for most programs. Applications typically close in October-November of the previous year.</p>
              </div>
              <div className="intake-item">
                <h4>July Intake</h4>
                <p>Secondary intake for many programs. Applications typically close in April-May of the same year.</p>
              </div>
              <div className="intake-item">
                <h4>Research Programs</h4>
                <p>Rolling intakes throughout the year. Contact supervisors directly for availability.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="universities-section">
          <h2>Genuine Student Assessment</h2>
          <div className="gs-assessment">
            <h3>Assessment Criteria</h3>
            <div className="gs-details">
              <h4>Evaluation Parameters</h4>
              <p>The Genuine Student assessment evaluates:</p>
              <ul>
                <li>Academic and employment gaps</li>
                <li>Financial status and stability</li>
                <li>Marital status and family ties</li>
                <li>Immigration history</li>
                <li>Career prospects and goals</li>
                <li>Economic situation in home country</li>
                <li>Course relevance to career goals</li>
                <li>Reasons to return to home country</li>
              </ul>
              <p><strong>Assessment Level:</strong> Agent - University - New Zealand Immigration</p>
            </div>
          </div>
        </div>

        <div className="universities-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-section">
            <h3>Common Questions About New Zealand Universities</h3>
            
            <div className="faq-accordion">
              {faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button 
                    className={`faq-question ${openFaq === index ? 'active' : ''}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                  </button>
                  <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="universities-section">
          <h2>Explore More About Studying in New Zealand</h2>
          <div className="navigation-links">
            <div className="nav-link-card">
              <h3>📚 Study Guide</h3>
              <p>Get a comprehensive overview of studying in New Zealand, including education system, costs, and opportunities.</p>
              <Link to="/study-guide/newzealand" className="nav-link-button">
                View Study Guide
              </Link>
            </div>
            <div className="nav-link-card">
              <h3>🎓 Colleges in New Zealand</h3>
              <p>Discover institutes of technology and specialized institutions offering practical, industry-focused education.</p>
              <Link to="/colleges/newzealand" className="nav-link-button">
                View Colleges
              </Link>
            </div>
            <div className="nav-link-card">
              <h3>📋 Eligibility Criteria</h3>
              <p>Learn about academic requirements, English language tests, and visa application processes.</p>
              <Link to="/eligibility/newzealand" className="nav-link-button">
                View Requirements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversitiesNewZealand; 