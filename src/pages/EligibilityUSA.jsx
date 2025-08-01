import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Eligibility.css';

const EligibilityUSA = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the academic requirements for US universities?",
      answer: "For undergraduate programs, you need high school completion or equivalent. For postgraduate programs, a good bachelor's degree is required. Most universities also require standardized test scores (SAT/ACT for undergraduate, GRE/GMAT for graduate)."
    },
    {
      question: "What English language tests are accepted for US student visas?",
      answer: "TOEFL, IELTS, PTE Academic, and Duolingo English Test are accepted. Most universities require TOEFL 80-100 or IELTS 6.5-7.0 overall. Some programs may require higher scores."
    },
    {
      question: "How much money do I need to show for my US student visa?",
      answer: "You must show proof of funds covering tuition fees plus living expenses for the first year. This typically ranges from $25,000 to $70,000 depending on the institution and location."
    },
    {
      question: "Can I work while studying in the USA?",
      answer: "Yes, F-1 visa holders can work up to 20 hours per week on-campus during studies and full-time during holidays. Off-campus work requires special authorization."
    },
    {
      question: "What is the F-1 student visa application process?",
      answer: "You need to apply for an F-1 student visa which requires acceptance from a SEVIS-certified institution, proof of funds, English language proficiency, and health/character requirements."
    },
    {
      question: "Are there scholarships available for international students?",
      answer: "Yes, there are various scholarships including university-specific scholarships, merit-based awards, need-based financial aid, and country-specific scholarships. Many universities offer generous financial aid packages."
    }
  ];

  return (
    <div className="eligibility-page">
      <div className="eligibility-header">
        <h1>Eligibility Criteria for the USA</h1>
        <p className="subtitle">Complete Guide to US Student Visa Requirements</p>
      </div>

      <div className="eligibility-content">
        <div className="eligibility-section">
          <h2>Understanding US Student Visa Requirements</h2>
          <p>The USA has specific requirements for international students to ensure they are genuine temporary entrants who will successfully complete their studies. Understanding these requirements is crucial for a successful F-1 student visa application.</p>
          
          <div className="academic-requirements">
            <h3>Academic & Language Requirements</h3>
            <div className="academic-grid">
              <div className="academic-item">
                <h4>Undergraduate Requirements</h4>
                <p>For Bachelor's degree programs:</p>
                <ul>
                  <li>High school completion or equivalent</li>
                  <li>TOEFL 80-100 or IELTS 6.5-7.0 overall</li>
                  <li>SAT or ACT scores (for most universities)</li>
                  <li>Strong academic record</li>
                </ul>
              </div>
              <div className="academic-item">
                <h4>Postgraduate Requirements</h4>
                <p>For Master's and PhD programs:</p>
                <ul>
                  <li>Good bachelor's degree (3.0+ GPA)</li>
                  <li>TOEFL 90-110 or IELTS 7.0-7.5 overall</li>
                  <li>GRE or GMAT scores (for most programs)</li>
                  <li>Relevant work experience may be required</li>
                </ul>
              </div>
              <div className="academic-item">
                <h4>Community College Requirements</h4>
                <p>For two-year programs:</p>
                <ul>
                  <li>High school completion</li>
                  <li>TOEFL 61-80 or IELTS 5.5-6.0 overall</li>
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
                <h4>Community Colleges</h4>
                <p>Two-year institutions offering associate degrees, certificates, and transfer programs to universities.</p>
              </div>
              <div className="english-item">
                <h4>Technical Institutes</h4>
                <p>Specialized institutions offering technical and vocational education in specific fields.</p>
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
                  <li>Public Universities: $20,000 - 40,000/year</li>
                  <li>Private Universities: $40,000 - 70,000/year</li>
                  <li>Community Colleges: $8,000 - 15,000/year</li>
                  <li>Ivy League: $50,000 - 80,000/year</li>
                </ul>
              </div>
              <div className="financial-item">
                <h4>Living Expenses</h4>
                <p>Additional funds for living costs:</p>
                <ul>
                  <li>Accommodation: $8,000 - 20,000/year</li>
                  <li>Food: $3,000 - 6,000/year</li>
                  <li>Transportation: $1,000 - 3,000/year</li>
                  <li>Other expenses: $2,000 - 5,000/year</li>
                </ul>
              </div>
              <div className="financial-item">
                <h4>Acceptable Fund Sources</h4>
                <p>Funds can come from:</p>
                <ul>
                  <li>Personal savings (6+ months old)</li>
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
                <p>Apply to a SEVIS-certified US institution and receive Form I-20 (Certificate of Eligibility).</p>
              </div>
              <div className="process-item">
                <h4>Step 2: Prepare Documents</h4>
                <p>Gather all required documents including academic certificates, financial evidence, and English test results.</p>
              </div>
              <div className="process-item">
                <h4>Step 3: Online Application</h4>
                <p>Complete the DS-160 form and pay the visa fee. Schedule your visa interview.</p>
              </div>
              <div className="process-item">
                <h4>Step 4: Interview & Decision</h4>
                <p>Attend visa interview at US Embassy/Consulate. Visa processing takes 1-3 weeks.</p>
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
                  <li>Standardized test scores (SAT/ACT/GRE/GMAT)</li>
                  <li>Personal statement and references</li>
                </ul>
              </div>
              <div className="documents-item">
                <h4>Financial Documents</h4>
                <ul>
                  <li>Bank statements (6+ months old)</li>
                  <li>Sponsor's income certificate</li>
                  <li>Scholarship letters (if applicable)</li>
                  <li>Education loan documents</li>
                </ul>
              </div>
              <div className="documents-item">
                <h4>Visa Documents</h4>
                <ul>
                  <li>Valid passport</li>
                  <li>Form I-20 from institution</li>
                  <li>DS-160 confirmation</li>
                  <li>Visa fee receipt</li>
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
                  <li>Form I-20 from institution</li>
                </ul>
              </div>
              <div className="tips-item">
                <h4>Application Timeline</h4>
                <ul>
                  <li>Start 12-18 months before intended intake</li>
                  <li>Apply for universities/colleges first</li>
                  <li>Take standardized tests early</li>
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
            <h3>Common Questions About US Student Visas</h3>
            
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
              <h3>🏛️ Universities in the USA</h3>
              <p>Explore prestigious universities and research institutions for undergraduate and graduate studies.</p>
              <Link to="/universities/usa" className="nav-link-button">
                View Universities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityUSA; 