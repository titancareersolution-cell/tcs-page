import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Universities.css';

const UniversitiesAustralia = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the English language requirements for universities?",
      answer: "Most universities require IELTS 6.5 overall with no band less than 6.0, or PTE 58 overall with no band less than 50. Some programs may require higher scores."
    },
    {
      question: "Can I work while studying at university?",
      answer: "Yes, international students can work up to 48 hours per fortnight during their studies and unlimited hours during official breaks."
    },
    {
      question: "How much do university fees cost?",
      answer: "University fees range from AUD 30,000 to 55,000 per year, depending on the program and institution. Medicine and law programs tend to be more expensive."
    },
    {
      question: "What is the difference between undergraduate and postgraduate?",
      answer: "Undergraduate programs (Bachelor's degrees) are typically 3-4 years and are the first level of university study. Postgraduate programs (Master's and PhD) require a completed undergraduate degree."
    },
    {
      question: "Can I transfer credits from my previous studies?",
      answer: "Yes, many universities offer credit transfer for previous studies. The amount of credit depends on the similarity of courses and your academic performance."
    },
    {
      question: "What scholarships are available for international students?",
      answer: "Universities offer various scholarships including merit-based awards, research scholarships, and country-specific scholarships. Check each university's website for available options."
    }
  ];

  return (
    <div className="universities-page">
      <div className="universities-header">
        <h1>Universities in Australia</h1>
        <p className="subtitle">Discover World-Class Universities & Academic Excellence</p>
      </div>

      <div className="universities-content">
        <div className="universities-section">
          <h2>Australia's University System</h2>
          <p>Australia is home to 7 universities ranked in the world's top 100, offering world-class education, cutting-edge research, and excellent career opportunities. Australian universities are known for their innovative teaching methods, strong industry connections, and multicultural campus environments.</p>
          
          <div className="academic-requirements">
            <h3>Key Features</h3>
            <div className="requirements-grid">
              <div className="requirement-item">
                <h4>🏆 World Rankings</h4>
                <p>7 universities in the world's top 100, with many more in the top 500 globally.</p>
                <ul>
                  <li>University of Melbourne (#14)</li>
                  <li>University of Sydney (#19)</li>
                  <li>Australian National University (#34)</li>
                  <li>University of Queensland (#50)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h4>🎓 Diverse Programs</h4>
                <p>Undergraduate, postgraduate, and research degrees across all major disciplines.</p>
                <ul>
                  <li>Bachelor's degrees (3-4 years)</li>
                  <li>Master's degrees (1-2 years)</li>
                  <li>PhD programs (3-4 years)</li>
                  <li>Professional qualifications</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h4>💼 Industry Connections</h4>
                <p>Strong partnerships with industry leaders providing internship and employment opportunities.</p>
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
          <h2>Academic & English Language Requirements</h2>
          <div className="academic-requirements">
            <h3>Entry Requirements</h3>
            <div className="requirements-grid">
              <div className="requirement-item">
                <h4>Undergraduate Requirements</h4>
                <p>Entry requirements for Bachelor's degree programs:</p>
                <ul>
                  <li>Minimum 60% in Year 12 or A-Levels</li>
                  <li>IELTS 6.5 overall (6.0 in each band)</li>
                  <li>PTE 58 overall (50 in each band)</li>
                  <li>Some programs may require higher scores</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h4>Postgraduate Requirements</h4>
                <p>Entry requirements for Master's degree programs:</p>
                <ul>
                  <li>Minimum 50% in undergraduate degree</li>
                  <li>IELTS 6.5 overall (6.0 in each band)</li>
                  <li>PTE 58 overall (50 in each band)</li>
                  <li>Relevant work experience may be required</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h4>Research Programs</h4>
                <p>Entry requirements for PhD programs:</p>
                <ul>
                  <li>Master's degree or honors degree</li>
                  <li>IELTS 6.5 overall (6.0 in each band)</li>
                  <li>Research proposal</li>
                  <li>Supervisor approval</li>
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
                <p>Mid-year intake for many programs. Applications typically close in April-May.</p>
              </div>
              <div className="intake-item">
                <h4>Research Programs</h4>
                <p>Rolling intakes throughout the year. Contact supervisors directly for availability.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="universities-section">
          <h2>Genuine Student (GS) Assessment</h2>
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
              <p><strong>Assessment Level:</strong> Agent - TCS - University/College - Australian High Commission</p>
            </div>
          </div>
        </div>

        <div className="universities-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-section">
            <h3>Common Questions About Australian Universities</h3>
            
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
          <h2>Explore More About Studying in Australia</h2>
          <div className="navigation-links">
            <div className="nav-link-card">
              <h3>📚 Study Guide</h3>
              <p>Get a comprehensive overview of studying in Australia, including education system, costs, and opportunities.</p>
              <Link to="/study-guide/australia" className="nav-link-button">
                View Study Guide
              </Link>
            </div>
            <div className="nav-link-card">
              <h3>🎓 Colleges in Australia</h3>
              <p>Discover top TAFE institutions and vocational colleges offering practical, career-focused education.</p>
              <Link to="/colleges/australia" className="nav-link-button">
                View Colleges
              </Link>
            </div>
            <div className="nav-link-card">
              <h3>📋 Eligibility Criteria</h3>
              <p>Learn about academic requirements, English language tests, and visa application processes.</p>
              <Link to="/eligibility/australia" className="nav-link-button">
                View Requirements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversitiesAustralia; 