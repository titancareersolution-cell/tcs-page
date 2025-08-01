import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Universities.css';

const UniversitiesJapan = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the main types of universities in Japan?",
      answer: "Japan has a diverse university system, including National Universities (operated by the government), Private Universities (private institutions), and Specialized Universities (focusing on specific fields)."
    },
    {
      question: "Do I need to take entrance exams to study in Japan?",
      answer: "Yes, international students typically need to take entrance examinations (EJU) and attend interviews. The specific requirements vary by university and program."
    },
    {
      question: "What are the tuition fees for Japanese universities?",
      answer: "Tuition fees vary significantly. National Universities have relatively low fees (¥535,800 per year), while Private Universities and specialized institutions can be more expensive (¥800,000 - 1,500,000 per year)."
    },
    {
      question: "Are there scholarships available for international students?",
      answer: "Yes, there are several scholarship programs available. The most well-known is the MEXT Scholarship (Japanese government), JASSO Scholarship (short-term), and various merit-based and need-based scholarships offered by individual universities."
    },
    {
      question: "What is the Japanese language proficiency required for studying in Japan?",
      answer: "While not mandatory for all programs, a good command of the Japanese language is highly beneficial for daily life and academic success. Many universities offer preparatory courses for international students."
    }
  ];

  return (
    <div className="universities-page">
      <div className="universities-header">
        <h1>Universities in Japan</h1>
        <p className="subtitle">Discover Prestigious Universities & Academic Excellence</p>
      </div>

      <div className="universities-content">
        <div className="universities-section">
          <h2>Japan's University System</h2>
          <p>Japan is home to some of the world's most prestigious universities, known for their rigorous academic standards, cutting-edge research, and strong emphasis on innovation and technology. Japanese universities offer a unique blend of traditional academic excellence and modern technological advancement.</p>
          
          <div className="academic-requirements">
            <h3>Key Features</h3>
            <div className="requirements-grid">
              <div className="requirement-item">
                <h4>🏆 World Rankings</h4>
                <p>Several Japanese universities rank among the world's top institutions, with strong performance in research and innovation.</p>
                <ul>
                  <li>University of Tokyo (#23 globally)</li>
                  <li>Kyoto University (#36 globally)</li>
                  <li>Osaka University (#68 globally)</li>
                  <li>Tokyo Institute of Technology (#91 globally)</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h4>🎓 Diverse Programs</h4>
                <p>Comprehensive range of undergraduate, postgraduate, and research programs across all major disciplines.</p>
                <ul>
                  <li>Bachelor's degrees (4 years)</li>
                  <li>Master's degrees (2 years)</li>
                  <li>PhD programs (3-5 years)</li>
                  <li>Professional qualifications</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h4>💼 Industry Connections</h4>
                <p>Strong partnerships with leading Japanese companies and global corporations providing excellent career opportunities.</p>
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
                <h4>April Intake</h4>
                <p>Main intake for most programs. Applications typically close in October-November of the previous year.</p>
              </div>
              <div className="intake-item">
                <h4>September Intake</h4>
                <p>Limited intake for some programs. Applications typically close in May-June.</p>
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
              <p><strong>Assessment Level:</strong> Agent - University - Japanese Immigration Bureau</p>
            </div>
          </div>
        </div>

        <div className="universities-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-section">
            <h3>Common Questions About Japanese Universities</h3>
            
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
          <h2>Explore More About Studying in Japan</h2>
          <div className="navigation-links">
            <div className="nav-link-card">
              <h3>📚 Study Guide</h3>
              <p>Get a comprehensive overview of studying in Japan, including education system, costs, and opportunities.</p>
              <Link to="/study-guide/japan" className="nav-link-button">
                View Study Guide
              </Link>
            </div>
            <div className="nav-link-card">
              <h3>🎓 Colleges in Japan</h3>
              <p>Discover technical colleges and specialized institutions offering practical, industry-focused education.</p>
              <Link to="/colleges/japan" className="nav-link-button">
                View Colleges
              </Link>
            </div>
            <div className="nav-link-card">
              <h3>📋 Eligibility Criteria</h3>
              <p>Learn about academic requirements, Japanese language tests, and visa application processes.</p>
              <Link to="/eligibility/japan" className="nav-link-button">
                View Requirements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversitiesJapan; 