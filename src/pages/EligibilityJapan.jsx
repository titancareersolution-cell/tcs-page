import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Eligibility.css';

const EligibilityJapan = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the academic requirements for Japanese universities?",
      answer: "For undergraduate programs, you need 12 years of formal education. For postgraduate programs, a bachelor's degree is required. Some universities may require entrance examinations."
    },
    {
      question: "Do I need to know Japanese to study in Japan?",
      answer: "While some programs are offered in English, basic Japanese proficiency is highly recommended for daily life. Many universities offer Japanese language courses for international students."
    },
    {
      question: "What is the cost of studying in Japan?",
      answer: "Tuition fees range from ¥535,800 to ¥1,000,000 per year for public universities, and ¥800,000 to ¥1,500,000 for private universities. Living expenses are approximately ¥100,000-150,000 per month."
    },
    {
      question: "Can I work while studying in Japan?",
      answer: "Yes, international students can work up to 28 hours per week during academic sessions and 8 hours per day during holidays with proper permission."
    },
    {
      question: "What scholarships are available for international students?",
      answer: "MEXT Scholarship, JASSO Scholarship, and university-specific scholarships are available. These can cover tuition fees, living expenses, and travel costs."
    },
    {
      question: "What is the visa application process for Japan?",
      answer: "You need a Certificate of Eligibility (CoE) from your institution, then apply for a student visa at the Japanese embassy. The process takes 2-3 months."
    }
  ];

  return (
    <div className="eligibility-page">
      <div className="eligibility-header">
        <h1>Eligibility Criteria for Japan</h1>
        <p className="subtitle">Complete Guide to Japanese Student Visa Requirements</p>
      </div>

      <div className="eligibility-content">
        <div className="eligibility-section">
          <h2>Understanding Japanese Student Visa Requirements</h2>
          <p>Japan has specific requirements for international students to ensure they are genuine temporary entrants who will successfully complete their studies. Understanding these requirements is crucial for a successful visa application.</p>
          
          <div className="academic-requirements">
            <h3>Academic & Language Requirements</h3>
            <div className="academic-grid">
              <div className="academic-item">
                <h4>Undergraduate Requirements</h4>
                <p>For Bachelor's degree programs:</p>
                <ul>
                  <li>12 years of formal education</li>
                  <li>Japanese Language Proficiency Test (JLPT) N2 or higher</li>
                  <li>English proficiency (for English-taught programs)</li>
                  <li>Entrance examination (for some universities)</li>
                </ul>
              </div>
              <div className="academic-item">
                <h4>Postgraduate Requirements</h4>
                <p>For Master's and PhD programs:</p>
                <ul>
                  <li>Bachelor's degree for Master's programs</li>
                  <li>Master's degree for PhD programs</li>
                  <li>Research proposal</li>
                  <li>Supervisor approval</li>
                </ul>
              </div>
              <div className="academic-item">
                <h4>Language Requirements</h4>
                <p>Language proficiency requirements:</p>
                <ul>
                  <li>JLPT N2 or higher for Japanese-taught programs</li>
                  <li>IELTS 6.0+ or TOEFL 80+ for English programs</li>
                  <li>Some universities offer preparatory Japanese courses</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="eligibility-section">
          <h2>Education System & Intakes</h2>
          <div className="english-requirements">
            <h3>Types of Institutions</h3>
            <div className="english-grid">
              <div className="english-item">
                <h4>National Universities</h4>
                <p>Public universities funded by the Japanese government, offering high-quality education at lower tuition fees.</p>
              </div>
              <div className="english-item">
                <h4>Private Universities</h4>
                <p>Independent institutions offering diverse programs with higher tuition fees but more flexibility in course offerings.</p>
              </div>
              <div className="english-item">
                <h4>Technical Colleges</h4>
                <p>Specialized institutions offering practical, industry-focused education in engineering and technology.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="eligibility-section">
          <h2>Financial Requirements</h2>
          <div className="financial-requirements">
            <h3>Proof of Funds</h3>
            <div className="financial-grid">
              <div className="financial-item">
                <h4>Tuition Fees</h4>
                <p>You must show proof of funds covering your entire course duration:</p>
                <ul>
                  <li>National Universities: ¥535,800/year</li>
                  <li>Private Universities: ¥800,000 - 1,500,000/year</li>
                  <li>Technical Colleges: ¥535,800 - 1,200,000/year</li>
                </ul>
              </div>
              <div className="financial-item">
                <h4>Living Expenses</h4>
                <p>Additional funds for living costs:</p>
                <ul>
                  <li>Accommodation: ¥50,000 - 100,000/month</li>
                  <li>Food: ¥30,000 - 50,000/month</li>
                  <li>Transportation: ¥10,000 - 20,000/month</li>
                  <li>Other expenses: ¥20,000 - 30,000/month</li>
                </ul>
              </div>
              <div className="financial-item">
                <h4>Acceptable Fund Sources</h4>
                <p>Funds can come from:</p>
                <ul>
                  <li>Personal savings (3+ months old)</li>
                  <li>Parent/guardian sponsorship</li>
                  <li>Scholarship awards</li>
                  <li>Education loans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="eligibility-section">
          <h2>Visa Application Process</h2>
          <div className="visa-process">
            <h3>Step-by-Step Process</h3>
            <div className="process-grid">
              <div className="process-item">
                <h4>Step 1: University Application</h4>
                <p>Apply to a Japanese university or college and receive acceptance letter.</p>
              </div>
              <div className="process-item">
                <h4>Step 2: Certificate of Eligibility</h4>
                <p>Institution applies for CoE on your behalf (takes 1-3 months).</p>
              </div>
              <div className="process-item">
                <h4>Step 3: Visa Application</h4>
                <p>Apply for student visa at Japanese embassy/consulate with CoE.</p>
              </div>
              <div className="process-item">
                <h4>Step 4: Visa Approval</h4>
                <p>Visa processing takes 2-3 weeks. Collect visa and travel to Japan.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="eligibility-section">
          <h2>Required Documents</h2>
          <div className="required-documents">
            <h3>Document Checklist</h3>
            <div className="documents-grid">
              <div className="documents-item">
                <h4>Academic Documents</h4>
                <ul>
                  <li>High school diploma/transcripts</li>
                  <li>University degree/transcripts (for postgraduate)</li>
                  <li>Academic certificates</li>
                  <li>Research proposal (for research programs)</li>
                </ul>
              </div>
              <div className="documents-item">
                <h4>Language Documents</h4>
                <ul>
                  <li>JLPT certificate (if applicable)</li>
                  <li>IELTS/TOEFL scores (if applicable)</li>
                  <li>Language proficiency certificates</li>
                </ul>
              </div>
              <div className="documents-item">
                <h4>Financial Documents</h4>
                <ul>
                  <li>Bank statements (3+ months)</li>
                  <li>Sponsor's income certificate</li>
                  <li>Scholarship letters (if applicable)</li>
                  <li>Education loan documents</li>
                </ul>
              </div>
              <div className="documents-item">
                <h4>Personal Documents</h4>
                <ul>
                  <li>Valid passport</li>
                  <li>Passport-size photographs</li>
                  <li>Medical certificate</li>
                  <li>Police clearance certificate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="eligibility-section">
          <h2>Tips & Checklist</h2>
          <div className="tips-checklist">
            <h3>Application Preparation</h3>
            <div className="tips-grid">
              <div className="tips-item">
                <h4>Document Preparation</h4>
                <ul>
                  <li>Academic transcripts and certificates</li>
                  <li>Japanese language proficiency test results</li>
                  <li>English language test results (if applicable)</li>
                  <li>Financial documents and sponsor information</li>
                  <li>Research proposal (for postgraduate)</li>
                </ul>
              </div>
              <div className="tips-item">
                <h4>Application Timeline</h4>
                <ul>
                  <li>Start 12-18 months before intended intake</li>
                  <li>Apply for universities/colleges first</li>
                  <li>Begin Japanese language study early</li>
                  <li>Apply for scholarships 6-8 months before intake</li>
                </ul>
              </div>
              <div className="tips-item">
                <h4>Common Mistakes to Avoid</h4>
                <ul>
                  <li>Insufficient Japanese language preparation</li>
                  <li>Incomplete financial documentation</li>
                  <li>Missing academic documents</li>
                  <li>Late application submission</li>
                  <li>Inadequate research proposal (for postgraduate)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="eligibility-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-section">
            <h3>Common Questions About Japanese Student Visas</h3>
            
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

        <div className="eligibility-section">
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
              <h3>🏛️ Universities in Japan</h3>
              <p>Explore prestigious universities and research institutions for undergraduate and graduate studies.</p>
              <Link to="/universities/japan" className="nav-link-button">
                View Universities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityJapan; 