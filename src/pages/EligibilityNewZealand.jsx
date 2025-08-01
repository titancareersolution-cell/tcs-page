import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Eligibility.css';

const EligibilityNewZealand = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the academic requirements for New Zealand universities?",
      answer: "For undergraduate programs, you need high school completion or equivalent. For postgraduate programs, a good bachelor's degree is required. Specific requirements vary by university and program."
    },
    {
      question: "What English language tests are accepted for New Zealand student visas?",
      answer: "IELTS, TOEFL, PTE Academic, and Cambridge English are accepted. Most universities require IELTS 6.0-6.5 overall, with no band less than 5.5-6.0. Some programs may require higher scores."
    },
    {
      question: "How much money do I need to show for my New Zealand student visa?",
      answer: "You must show proof of funds covering tuition fees plus NZD 20,000 per year for living expenses. This should be in liquid funds for at least 3 months."
    },
    {
      question: "Can I work while studying in New Zealand?",
      answer: "Yes, international students can work up to 20 hours per week during term time and full-time during holidays, provided they are studying at a recognized institution."
    },
    {
      question: "What is the Student Visa application process?",
      answer: "You need to apply for a Student Visa (Subclass 500) which requires acceptance from a New Zealand institution, proof of funds, English language proficiency, and health/character requirements."
    },
    {
      question: "Are there scholarships available for international students?",
      answer: "Yes, there are various scholarships including New Zealand Government Scholarships, university-specific scholarships, and country-specific awards. Many universities offer merit-based and need-based scholarships."
    }
  ];

  return (
    <div className="eligibility-page">
      <div className="eligibility-header">
        <h1>Eligibility Criteria for New Zealand</h1>
        <p className="subtitle">Complete Guide to New Zealand Student Visa Requirements</p>
      </div>

      <div className="eligibility-content">
        <div className="eligibility-section">
          <h2>Understanding New Zealand Student Visa Requirements</h2>
          <p>New Zealand has specific requirements for international students to ensure they are genuine temporary entrants who will successfully complete their studies. Understanding these requirements is crucial for a successful Student Visa application.</p>
          
          <div className="academic-requirements">
            <h3>Academic & Language Requirements</h3>
            <div className="academic-grid">
              <div className="academic-item">
                <h4>Undergraduate Requirements</h4>
                <p>For Bachelor's degree programs:</p>
                <ul>
                  <li>High school completion or equivalent</li>
                  <li>IELTS 6.0-6.5 overall (5.5-6.0 in each band)</li>
                  <li>TOEFL 80-90 overall</li>
                  <li>PTE Academic 50-58 overall</li>
                </ul>
              </div>
              <div className="academic-item">
                <h4>Postgraduate Requirements</h4>
                <p>For Master's and PhD programs:</p>
                <ul>
                  <li>Good bachelor's degree (B+ average or equivalent)</li>
                  <li>IELTS 6.5-7.0 overall (6.0-6.5 in each band)</li>
                  <li>TOEFL 90-100 overall</li>
                  <li>Relevant work experience may be required</li>
                </ul>
              </div>
              <div className="academic-item">
                <h4>Foundation Programs</h4>
                <p>For students needing academic preparation:</p>
                <ul>
                  <li>High school completion</li>
                  <li>IELTS 5.5-6.0 overall</li>
                  <li>Academic pathway programs</li>
                  <li>English language preparation</li>
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
                <h4>Universities</h4>
                <p>Higher education institutions offering degree programs, research opportunities, and academic qualifications.</p>
              </div>
              <div className="english-item">
                <h4>Institutes of Technology & Polytechnics</h4>
                <p>Institutions offering vocational qualifications, technical training, and pathway programs to university.</p>
              </div>
              <div className="english-item">
                <h4>Private Training Establishments</h4>
                <p>Private institutions offering specialized courses and professional qualifications.</p>
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
                  <li>Undergraduate: NZD 25,000 - 45,000/year</li>
                  <li>Postgraduate: NZD 30,000 - 50,000/year</li>
                  <li>Foundation courses: NZD 20,000 - 30,000/year</li>
                  <li>English language courses: NZD 15,000 - 25,000/year</li>
                </ul>
              </div>
              <div className="financial-item">
                <h4>Living Expenses</h4>
                <p>Additional funds for living costs:</p>
                <ul>
                  <li>Minimum NZD 20,000/year for living expenses</li>
                  <li>Accommodation: NZD 8,000 - 15,000/year</li>
                  <li>Food: NZD 4,000 - 6,000/year</li>
                  <li>Other expenses: NZD 3,000 - 5,000/year</li>
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
                <p>Apply to a New Zealand university or college and receive offer of place.</p>
              </div>
              <div className="process-item">
                <h4>Step 2: Prepare Documents</h4>
                <p>Gather all required documents including academic certificates, financial evidence, and English test results.</p>
              </div>
              <div className="process-item">
                <h4>Step 3: Online Application</h4>
                <p>Complete the online Student Visa application form and pay the visa fee.</p>
              </div>
              <div className="process-item">
                <h4>Step 4: Biometrics & Interview</h4>
                <p>Attend biometrics appointment and interview if required. Visa processing takes 3-6 weeks.</p>
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
                  <li>Academic transcripts and certificates</li>
                  <li>English language test results</li>
                  <li>Personal statement (for some courses)</li>
                  <li>Reference letters</li>
                </ul>
              </div>
              <div className="documents-item">
                <h4>Financial Documents</h4>
                <ul>
                  <li>Bank statements (3+ months old)</li>
                  <li>Sponsor's income certificate</li>
                  <li>Scholarship letters (if applicable)</li>
                  <li>Education loan documents</li>
                </ul>
              </div>
              <div className="documents-item">
                <h4>Visa Documents</h4>
                <ul>
                  <li>Valid passport</li>
                  <li>Offer of place from institution</li>
                  <li>Visa application form</li>
                  <li>Medical and police certificates</li>
                </ul>
              </div>
              <div className="documents-item">
                <h4>Additional Documents</h4>
                <ul>
                  <li>Medical examination results</li>
                  <li>Police clearance certificate</li>
                  <li>Medical insurance</li>
                  <li>Accommodation details</li>
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
                  <li>English language test results</li>
                  <li>Financial documents and sponsor information</li>
                  <li>Personal statement and references</li>
                  <li>Offer of place from institution</li>
                </ul>
              </div>
              <div className="tips-item">
                <h4>Application Timeline</h4>
                <ul>
                  <li>Start 12-18 months before intended intake</li>
                  <li>Apply for universities/colleges first</li>
                  <li>Take English language tests early</li>
                  <li>Apply for scholarships 6-8 months before intake</li>
                </ul>
              </div>
              <div className="tips-item">
                <h4>Common Mistakes to Avoid</h4>
                <ul>
                  <li>Insufficient financial documentation</li>
                  <li>Missing academic documents</li>
                  <li>Late application submission</li>
                  <li>Inadequate English language preparation</li>
                  <li>Incomplete visa application form</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="eligibility-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-section">
            <h3>Common Questions About New Zealand Student Visas</h3>
            
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
              <h3>🏛️ Universities in New Zealand</h3>
              <p>Explore prestigious universities and research institutions for undergraduate and graduate studies.</p>
              <Link to="/universities/newzealand" className="nav-link-button">
                View Universities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityNewZealand; 