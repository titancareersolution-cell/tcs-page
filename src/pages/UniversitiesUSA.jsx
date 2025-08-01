import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Universities.css';

const UniversitiesUSA = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the main types of universities in the USA?",
      answer: "The USA has public universities (state-funded), private universities (independent), Ivy League universities (elite private institutions), and specialized institutions. Each offers different academic environments and specializations."
    },
    {
      question: "Do I need to take standardized tests for US universities?",
      answer: "Yes, most universities require SAT or ACT for undergraduate programs, and GRE/GMAT for graduate programs. Some universities are now test-optional, but strong scores can improve your application."
    },
    {
      question: "What are the tuition fees for US universities?",
      answer: "Tuition fees vary significantly. Public universities cost $20,000-40,000 per year for international students, while private universities can cost $40,000-70,000 per year. Ivy League universities are typically $50,000-80,000 per year."
    },
    {
      question: "Are there scholarships available for international students?",
      answer: "Yes, there are various scholarships including university-specific scholarships, merit-based awards, need-based financial aid, and country-specific scholarships. Many universities offer generous financial aid packages."
    },
    {
      question: "What is the English language requirement for US universities?",
      answer: "Most universities require TOEFL 80-100 or IELTS 6.5-7.0 overall. Some programs may require higher scores. Universities also accept other tests like PTE and Duolingo English Test."
    }
  ];

  return (
    <div className="universities-page">
      <div className="universities-header">
        <h1>Universities in the USA</h1>
        <p className="subtitle">Discover World-Class Universities & Academic Excellence</p>
      </div>

      <div className="universities-content">
        <div className="universities-section">
          <h2>The USA's University System</h2>
          <p>The USA is home to some of the world's most prestigious universities, known for their academic excellence, research innovation, and global reputation. US universities offer a unique blend of liberal arts education, specialized programs, and cutting-edge research opportunities, with strong emphasis on critical thinking, creativity, and real-world application.</p>
          
          <div className="academic-requirements">
            <h3>Key Features</h3>
            <div className="requirements-grid">
              <div className="requirement-item">
                <h4>🏆 World Rankings</h4>
                <p>US universities dominate global rankings, with many in the world's top 100 institutions.</p>
                <ul>
                  <li>Massachusetts Institute of Technology (#1 globally)</li>
                  <li>Stanford University (#3 globally)</li>
                  <li>Harvard University (#4 globally)</li>
                  <li>University of California, Berkeley (#10 globally)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h4>🎓 Diverse Programs</h4>
                <p>Comprehensive range of undergraduate, postgraduate, and research programs across all major disciplines.</p>
                <ul>
                  <li>Bachelor's degrees (4 years)</li>
                  <li>Master's degrees (1-2 years)</li>
                  <li>PhD programs (4-6 years)</li>
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
                <h4>Fall Intake (August/September)</h4>
                <p>Main intake for most programs. Applications typically close in December-January of the previous year.</p>
              </div>
              <div className="intake-item">
                <h4>Spring Intake (January)</h4>
                <p>Limited intake for some programs. Applications typically close in September-October of the previous year.</p>
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
              <p><strong>Assessment Level:</strong> Agent - University - US Department of State</p>
            </div>
          </div>
        </div>

        <div className="universities-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-section">
            <h3>Common Questions About US Universities</h3>
            
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
          <h2>Explore More About Studying in the USA</h2>
          <div className="navigation-links">
            <div className="nav-link-card">
              <h3>📚 Study Guide</h3>
              <p>Get a comprehensive overview of studying in the USA, including education system, costs, and opportunities.</p>
              <Link to="/study-guide/usa" className="nav-link-button">
                View Study Guide
              </Link>
            </div>
            <div className="nav-link-card">
              <h3>🎓 Colleges in the USA</h3>
              <p>Discover community colleges and specialized institutions offering practical, industry-focused education.</p>
              <Link to="/colleges/usa" className="nav-link-button">
                View Colleges
              </Link>
            </div>
            <div className="nav-link-card">
              <h3>📋 Eligibility Criteria</h3>
              <p>Learn about academic requirements, English language tests, and visa application processes.</p>
              <Link to="/eligibility/usa" className="nav-link-button">
                View Requirements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversitiesUSA; 