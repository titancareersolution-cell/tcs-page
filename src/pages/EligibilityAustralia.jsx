import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Eligibility.css';

const EligibilityAustralia = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the minimum academic requirements for Australian student visas?",
      answer: "For undergraduate programs, you need minimum 60% in Year 12 or A-Levels. For postgraduate programs, minimum 50% in your undergraduate degree. Students with 55-59% can enter via pathway programs."
    },
    {
      question: "What English language tests are accepted for Australian student visas?",
      answer: "IELTS and PTE are the most commonly accepted tests. For most programs: IELTS 6.5 (6.0 in each band) or PTE 58 (50 in each band). Some programs may require higher scores."
    },
    {
      question: "How much money do I need to show for my student visa?",
      answer: "You must show proof of AUD 24,505 per year for living expenses, plus your tuition fees. This should be in liquid funds (savings, fixed deposits) that are 3-6 months old."
    },
    {
      question: "Can I work while studying in Australia?",
      answer: "Yes, international students can work up to 48 hours per fortnight during academic sessions and unlimited hours during official breaks. This helps support living expenses."
    },
    {
      question: "What is the Genuine Student (GS) assessment?",
      answer: "The GS assessment evaluates if you are a genuine temporary entrant who intends to study, not immigrate fraudulently. It considers your academic gaps, financial status, career prospects, and reasons to return home."
    },
    {
      question: "Are students with academic gaps accepted?",
      answer: "Yes, but you need valid evidence such as employment letters, internships, training certificates, or other documentation explaining the gap period."
    },
    {
      question: "Can married students apply for Australian student visas?",
      answer: "Yes, if the marriage is at least 1 year old (some universities require 2 years), the applicant has a strong profile, spouse holds at least a UG degree, and there is strong financial backing."
    },
    {
      question: "What documents are required for the visa application?",
      answer: "Form 956A, eCoE, OSHC letter, passport copies, GS questionnaire, HAP ID, academic documents, financial documents, resume, national ID, family information, and travel history."
    }
  ];

  return (
    <div className="eligibility-page">
      <div className="eligibility-header">
        <h1>Eligibility Criteria for Australia</h1>
        <p className="subtitle">Complete Guide to Australian Student Visa Requirements</p>
      </div>

      <div className="eligibility-content">
        <div className="eligibility-section">
          <h2>Understanding Australian Student Visa Requirements</h2>
          <p>Australia has specific requirements for international students to ensure they are genuine temporary entrants who will successfully complete their studies. Understanding these requirements is crucial for a successful visa application.</p>
          
          <div className="academic-requirements">
            <h3>Academic & English Language Requirements</h3>
            <div className="academic-grid">
              <div className="academic-item">
                <h4>Undergraduate Requirements</h4>
                <p>For direct entry to Bachelor's programs:</p>
                <ul>
                  <li>Minimum 60% in Year 12 or A-Levels</li>
                  <li>IELTS 6.5 overall (6.0 in each band)</li>
                  <li>PTE 58 overall (50 in each band)</li>
                  <li>Some programs may require higher scores</li>
                </ul>
              </div>
              <div className="academic-item">
                <h4>Postgraduate Requirements</h4>
                <p>For Master's and PhD programs:</p>
                <ul>
                  <li>Minimum 50% in undergraduate degree</li>
                  <li>IELTS 6.5 overall (6.0 in each band)</li>
                  <li>PTE 58 overall (50 in each band)</li>
                  <li>Relevant work experience may be required</li>
                </ul>
              </div>
              <div className="academic-item">
                <h4>Pathway Entry</h4>
                <p>For students with 55-59% in Year 12:</p>
                <ul>
                  <li>Diploma-to-degree programs</li>
                  <li>Foundation studies</li>
                  <li>English language preparation (ELICOS)</li>
                  <li>10-week+ programs before main course</li>
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
                <h4>Public & Private Universities</h4>
                <p>Offer undergraduate, postgraduate, and research degrees under the Australian Qualifications Framework (AQF).</p>
              </div>
              <div className="english-item">
                <h4>Pathway Colleges</h4>
                <p>Provide academic preparation and English language support for students who need additional preparation.</p>
              </div>
              <div className="english-item">
                <h4>Private Colleges</h4>
                <p>Offer specialized courses in business, IT, hospitality, and other fields with flexible study options.</p>
              </div>
            </div>
          </div>
          
          <div className="financial-requirements">
            <h3>Intake Periods</h3>
            <div className="financial-details">
              <h4>Major Intakes</h4>
              <ul>
                <li><strong>February Intake:</strong> Main intake for all universities and private colleges</li>
                <li><strong>July Intake:</strong> Mid-year intake for most institutions</li>
                <li><strong>Minor Intakes:</strong> October/November/May (mostly private colleges)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="eligibility-section">
          <h2>Genuine Student (GS) Assessment</h2>
          <div className="visa-info">
            <h3>Assessment Process</h3>
            <div className="visa-details">
              <h4>Assessment Levels</h4>
              <p>The GS assessment involves multiple levels:</p>
              <ul>
                <li><strong>Agent Level:</strong> Initial assessment by TCS</li>
                <li><strong>University/College Level:</strong> Institutional assessment</li>
                <li><strong>Australian High Commission:</strong> Final visa decision</li>
              </ul>
              
              <h4>Evaluation Parameters</h4>
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
            </div>
          </div>
        </div>

        <div className="eligibility-section">
          <h2>Financial Requirements</h2>
          <div className="financial-requirements">
            <h3>Fund Requirements</h3>
            <div className="financial-details">
              <h4>Show Fund Requirement</h4>
              <p>Students must show liquid funds covering:</p>
              <ul>
                <li>Tuition fees for the entire course duration</li>
                <li>Living costs (AUD 24,505 per year)</li>
                <li>Travel expenses</li>
                <li>Health insurance (OSHC)</li>
              </ul>
              
              <h4>Acceptable Sponsors</h4>
              <ul>
                <li>Parents, Grandparents</li>
                <li>Siblings, Uncle/Aunt</li>
                <li><strong>Non-Acceptable:</strong> Cousins, family friends, distant relatives</li>
              </ul>
              
              <h4>Education Loan Requirements</h4>
              <ul>
                <li>Must be fully sanctioned (not conditional)</li>
                <li>Collateral from immediate family members</li>
                <li>Loan disbursement proof required before visa lodgment</li>
              </ul>
              
              <h4>Accepted Fund Sources</h4>
              <ul>
                <li>3-6 month-old savings preferred</li>
                <li>Property sale with registered deed</li>
                <li>Liquidated FDs, Mutual Funds, Insurance</li>
              </ul>
              
              <h4>Sponsor's Income</h4>
              <ul>
                <li>Minimum AUD 18,000 annual income</li>
                <li>If parents' combined income &gt; AUD 87,856, financial docs may be waived</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="eligibility-section">
          <h2>Visa Information (Subclass 500)</h2>
          <div className="visa-info">
            <h3>Student Visa Details</h3>
            <div className="visa-details">
              <h4>Rights and Benefits</h4>
              <ul>
                <li>Study full-time at registered institutions</li>
                <li>Work up to 48 hours per fortnight during studies</li>
                <li>Work unlimited hours during official breaks</li>
                <li>Travel in and out of Australia</li>
                <li>Bring family members (dependents)</li>
              </ul>
              
              <h4>Visa Costs</h4>
              <ul>
                <li>Visa fee: From AUD 2,000</li>
                <li>OSHC: AUD 400-600 per year</li>
                <li>Biometrics fee: AUD 150</li>
              </ul>
              
              <h4>Processing Time</h4>
              <p>Typically 4-8 weeks, depending on application complexity and current processing times.</p>
            </div>
          </div>
        </div>

        <div className="eligibility-section">
          <h2>Health & Character Requirements</h2>
          <div className="health-character">
            <h3>Medical & Character Assessment</h3>
            <div className="health-grid">
              <div className="health-item">
                <h4>Health Requirements</h4>
                <ul>
                  <li>Medical examination by approved panel doctors</li>
                  <li>X-ray examination for tuberculosis</li>
                  <li>Blood tests for certain conditions</li>
                  <li>Must meet health standards for visa approval</li>
                </ul>
              </div>
              <div className="health-item">
                <h4>Character Requirements</h4>
                <ul>
                  <li>Police clearance certificates from all countries lived in</li>
                  <li>No serious criminal convictions</li>
                  <li>Good character assessment</li>
                  <li>Must not pose a risk to Australian community</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="eligibility-section">
          <h2>Exemptions & Waivers</h2>
          <div className="exemptions-waivers">
            <h3>Special Circumstances</h3>
            <div className="exemptions-details">
              <h4>Academic Gaps</h4>
              <p>Students with gaps are accepted with valid evidence:</p>
              <ul>
                <li>Employment letters</li>
                <li>Internships and training certificates</li>
                <li>Professional development courses</li>
                <li>Family responsibilities documentation</li>
              </ul>
              
              <h4>Married Students</h4>
              <p>Married students can apply if:</p>
              <ul>
                <li>Marriage is at least 1 year old (some universities require 2 years)</li>
                <li>Applicant has a strong academic profile</li>
                <li>Spouse holds at least a UG degree</li>
                <li>Strong financial backing is available</li>
              </ul>
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
                  <li>Gather all academic transcripts and certificates</li>
                  <li>Prepare English language test results</li>
                  <li>Organize financial documents</li>
                  <li>Get police clearance certificates</li>
                </ul>
              </div>
              <div className="tips-item">
                <h4>Application Timeline</h4>
                <ul>
                  <li>Start 6-8 months before intended intake</li>
                  <li>Apply for universities/colleges first</li>
                  <li>Book medical examination early</li>
                  <li>Lodge visa application 3-4 months before course start</li>
                </ul>
              </div>
              <div className="tips-item">
                <h4>Common Mistakes to Avoid</h4>
                <ul>
                  <li>Incomplete financial documentation</li>
                  <li>Insufficient English language scores</li>
                  <li>Missing academic documents</li>
                  <li>Late application submission</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="eligibility-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-section">
            <h3>Common Questions About Australian Student Visas</h3>
            
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
              <h3>🏛️ Universities in Australia</h3>
              <p>Explore world-class universities and research institutions for undergraduate and postgraduate studies.</p>
              <Link to="/universities/australia" className="nav-link-button">
                View Universities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityAustralia; 