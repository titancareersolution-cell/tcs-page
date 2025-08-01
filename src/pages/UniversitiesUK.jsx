import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Universities.css';

const UniversitiesUK = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the main types of universities in the UK?",
      answer: "The UK has ancient universities (Oxford, Cambridge), red brick universities (founded in the 19th century), plate glass universities (1960s), and modern universities (former polytechnics). Each offers different academic environments and specializations."
    },
    {
      question: "Do I need to apply through UCAS?",
      answer: "Yes, most undergraduate applications to UK universities must go through UCAS (Universities and Colleges Admissions Service). Postgraduate applications are usually made directly to universities."
    },
    {
      question: "What are the tuition fees for UK universities?",
      answer: "Tuition fees vary by location. In England, Wales, and Northern Ireland, international students pay £15,000-35,000 per year. In Scotland, EU students may pay lower fees, while international students pay £15,000-30,000 per year."
    },
    {
      question: "Are there scholarships available for international students?",
      answer: "Yes, there are various scholarships including Chevening Scholarships (UK government), Commonwealth Scholarships, university-specific scholarships, and country-specific awards. Many universities offer merit-based and need-based scholarships."
    },
    {
      question: "What is the English language requirement for UK universities?",
      answer: "Most universities require IELTS 6.0-7.0 overall, with no band less than 5.5-6.5. Some programs may require higher scores. Universities also accept other tests like TOEFL, PTE, and Cambridge English."
    }
  ];

  return (
    <div className="universities-page">
      <div className="universities-header">
        <h1>Universities in the UK</h1>
        <p className="subtitle">Discover World-Class Universities & Academic Excellence</p>
      </div>

      <div className="universities-content">
        <div className="universities-section">
          <h2>The UK's University System</h2>
          <p>The UK is home to some of the world's oldest and most prestigious universities, known for their academic excellence, research innovation, and global reputation. UK universities offer a unique blend of traditional academic rigor and modern educational approaches, with strong emphasis on critical thinking and independent learning.</p>
          
          <div className="academic-requirements">
            <h3>Key Features</h3>
            <div className="requirements-grid">
              <div className="requirement-item">
                <h4>🏆 World Rankings</h4>
                <p>UK universities consistently rank among the world's best, with many in the global top 100.</p>
                <ul>
                  <li>University of Oxford (#1 globally)</li>
                  <li>University of Cambridge (#2 globally)</li>
                  <li>Imperial College London (#6 globally)</li>
                  <li>University College London (#8 globally)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h4>🎓 Diverse Programs</h4>
                <p>Comprehensive range of undergraduate, postgraduate, and research programs across all disciplines.</p>
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
                <h4>September Intake</h4>
                <p>Main intake for most programs. UCAS applications typically close in January for most courses.</p>
              </div>
              <div className="intake-item">
                <h4>January Intake</h4>
                <p>Limited intake for some programs. Applications typically close in October of the previous year.</p>
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
              <p><strong>Assessment Level:</strong> Agent - University - UK Visas and Immigration</p>
            </div>
          </div>
        </div>

        <div className="universities-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-section">
            <h3>Common Questions About UK Universities</h3>
            
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
          <h2>Explore More About Studying in the UK</h2>
          <div className="navigation-links">
            <div className="nav-link-card">
              <h3>📚 Study Guide</h3>
              <p>Get a comprehensive overview of studying in the UK, including education system, costs, and opportunities.</p>
              <Link to="/study-guide/uk" className="nav-link-button">
                View Study Guide
              </Link>
            </div>
            <div className="nav-link-card">
              <h3>🎓 Colleges in the UK</h3>
              <p>Discover further education colleges and specialized institutions offering practical, industry-focused education.</p>
              <Link to="/colleges/uk" className="nav-link-button">
                View Colleges
              </Link>
            </div>
            <div className="nav-link-card">
              <h3>📋 Eligibility Criteria</h3>
              <p>Learn about academic requirements, English language tests, and visa application processes.</p>
              <Link to="/eligibility/uk" className="nav-link-button">
                View Requirements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversitiesUK; 