import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Eligibility.css';

const EligibilityCanada = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the academic requirements for Canadian universities?",
      answer: "For undergraduate programs, you need a high school diploma or equivalent. For postgraduate programs, a bachelor's degree is required. Most universities require a minimum GPA of 3.0 on a 4.0 scale, though some may accept lower GPAs with strong test scores."
    },
    {
      question: "What English language tests are accepted for Canadian student visas?",
      answer: "IELTS, TOEFL, PTE Academic, and CAEL are accepted. Most universities require IELTS 6.5-7.0 overall with no band less than 6.0, or TOEFL 90-100. Some universities also accept French language tests for bilingual programs."
    },
    {
      question: "How much money do I need to show for my Canadian student visa?",
      answer: "You must show proof of funds covering tuition fees plus CAD 20,635 per year for living costs (CAD 25,000 for Quebec). The total depends on your course duration and location."
    },
    {
      question: "Can I work while studying in Canada?",
      answer: "Yes, international students can work up to 20 hours per week during academic sessions and full-time during scheduled breaks. You can also work on-campus without restrictions."
    },
    {
      question: "What is the Study Permit application process for Canada?",
      answer: "You need a Letter of Acceptance from a Designated Learning Institution (DLI), then apply for a Study Permit online or at a visa office. The process typically takes 2-8 weeks depending on your country."
    },
    {
      question: "What happens after I complete my studies in Canada?",
      answer: "You can apply for a Post-Graduation Work Permit (PGWP), which allows you to work in Canada for up to 3 years depending on your program length. This can lead to permanent residency through Express Entry."
    },
    {
      question: "Can I bring my family to Canada on a student visa?",
      answer: "Yes, you can bring your spouse/partner and dependent children. Your spouse can apply for an open work permit, and children can study at Canadian schools. You must show additional funds for their living expenses."
    },
    {
      question: "What scholarships are available for international students?",
      answer: "Canada offers various scholarships including Vanier CGS, Banting Postdoctoral Fellowships, university-specific awards, and provincial scholarships. Many universities offer generous financial aid packages for international students."
    }
  ];

  return (
    <div className="eligibility-page">
      <div className="eligibility-header">
        <h1>Eligibility Criteria for Canada</h1>
        <p className="subtitle">Complete Guide to Canadian Student Visa Requirements</p>
      </div>

      <div className="eligibility-content">
        <div className="eligibility-section">
          <h2>Understanding Canadian Student Visa Requirements</h2>
          <p>Canada has specific requirements for international students to ensure they are genuine temporary entrants who will successfully complete their studies. Understanding these requirements is crucial for a successful Study Permit application.</p>
          
          <div className="academic-requirements">
            <h3>Academic & English Language Requirements</h3>
            <div className="academic-grid">
              <div className="academic-item">
                <h4>Undergraduate Requirements</h4>
                <p>For Bachelor's degree programs:</p>
                <ul>
                  <li>High school diploma or equivalent</li>
                  <li>IELTS 6.5-7.0 overall (6.0 in each band)</li>
                  <li>TOEFL 90-100 overall</li>
                  <li>Strong academic record (GPA 3.0+)</li>
                </ul>
              </div>
              <div className="academic-item">
                <h4>Postgraduate Requirements</h4>
                <p>For Master's and PhD programs:</p>
                <ul>
                  <li>Bachelor's degree from recognized institution</li>
                  <li>IELTS 7.0-7.5 overall (6.5 in each band)</li>
                  <li>TOEFL 100-110 overall</li>
                  <li>Strong academic record (GPA 3.0+)</li>
                </ul>
              </div>
              <div className="academic-item">
                <h4>English Language Requirements</h4>
                <p>Accepted tests and scores:</p>
                <ul>
                  <li>IELTS Academic: 6.5-7.5 overall</li>
                  <li>TOEFL iBT: 90-110 overall</li>
                  <li>PTE Academic: 60-70 overall</li>
                  <li>CAEL: 60-70 overall</li>
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
                <p>Research-intensive institutions offering undergraduate and graduate degrees with world-class facilities and diverse academic programs.</p>
              </div>
              <div className="english-item">
                <h4>Colleges</h4>
                <p>Applied learning institutions offering diplomas, certificates, and some degree programs with practical, career-focused education.</p>
              </div>
              <div className="english-item">
                <h4>Polytechnics</h4>
                <p>Technical institutions focusing on applied research and industry partnerships with hands-on learning experiences.</p>
              </div>
            </div>
          </div>
          
          <div className="financial-requirements">
            <h3>Intake Periods</h3>
            <div className="financial-details">
              <h4>Academic Calendar</h4>
              <ul>
                <li><strong>Fall Intake (September):</strong> Main intake for most programs</li>
                <li><strong>Winter Intake (January):</strong> Limited programs available</li>
                <li><strong>Summer Intake (May):</strong> Limited programs and courses</li>
                <li><strong>Application Deadlines:</strong> 6-12 months before intake</li>
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
              <p>Students must show sufficient funds covering:</p>
              <ul>
                <li>Tuition fees for the first year</li>
                <li>Living costs (CAD 20,635 per year)</li>
                <li>Additional funds for dependents (if applicable)</li>
                <li>Travel and accommodation costs</li>
                <li>Health insurance</li>
              </ul>
              
              <h4>Tuition Fees</h4>
              <ul>
                <li>Undergraduate: CAD 20,000-40,000 per year</li>
                <li>Postgraduate: CAD 25,000-50,000 per year</li>
                <li>College Programs: CAD 15,000-30,000 per year</li>
                <li>Living Expenses: CAD 15,000-25,000 per year</li>
              </ul>
              
              <h4>Accepted Fund Sources</h4>
              <ul>
                <li>Personal bank accounts (held for 4+ months)</li>
                <li>Parent/guardian bank accounts</li>
                <li>Scholarship letters</li>
                <li>Education loans from recognized institutions</li>
                <li>Sponsor letters with financial documents</li>
              </ul>
              
              <h4>Financial Documentation</h4>
              <ul>
                <li>Bank statements showing sufficient funds</li>
                <li>Sponsor's income tax returns</li>
                <li>Employment verification letters</li>
                <li>Property ownership documents</li>
                <li>Investment portfolio statements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="eligibility-section">
          <h2>Study Permit Information</h2>
          <div className="visa-info">
            <h3>Visa Details</h3>
            <div className="visa-details">
              <h4>Study Permit Rights & Benefits</h4>
              <ul>
                <li>Study full-time at Designated Learning Institutions (DLI)</li>
                <li>Work up to 20 hours per week during academic sessions</li>
                <li>Work full-time during scheduled breaks</li>
                <li>Work on-campus without restrictions</li>
                <li>Travel in and out of Canada</li>
                <li>Bring dependents (spouse and children)</li>
              </ul>
              
              <h4>Study Permit Application Process</h4>
              <ul>
                <li>Receive Letter of Acceptance from DLI</li>
                <li>Apply online or at visa office</li>
                <li>Processing time: 2-8 weeks</li>
                <li>Application fee: CAD 150</li>
                <li>Biometrics fee: CAD 85</li>
                <li>Health insurance required</li>
              </ul>
              
              <h4>Required Documents</h4>
              <ul>
                <li>Valid passport</li>
                <li>Letter of Acceptance from DLI</li>
                <li>Financial evidence</li>
                <li>English/French language test results</li>
                <li>Academic documents</li>
                <li>Statement of purpose</li>
                <li>Medical examination results (if required)</li>
              </ul>
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
                  <li>Medical examination by approved panel physicians</li>
                  <li>X-ray examination for tuberculosis</li>
                  <li>Health insurance coverage</li>
                  <li>No serious health conditions</li>
                  <li>Must not pose excessive demand on health services</li>
                </ul>
              </div>
              <div className="health-item">
                <h4>Character Requirements</h4>
                <ul>
                  <li>Police clearance certificates from all countries lived in</li>
                  <li>No serious criminal convictions</li>
                  <li>Good character assessment</li>
                  <li>No immigration violations</li>
                  <li>Must not pose a security risk to Canada</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="eligibility-section">
          <h2>Post-Study Work Opportunities</h2>
          <div className="exemptions-waivers">
            <h3>Post-Graduation Work Permit</h3>
            <div className="exemptions-details">
              <h4>Eligibility</h4>
              <p>You can apply for the PGWP if:</p>
              <ul>
                <li>You have completed a program of at least 8 months</li>
                <li>You studied at a Designated Learning Institution</li>
                <li>You maintained full-time student status</li>
                <li>You apply within 180 days of completing your studies</li>
              </ul>
              
              <h4>PGWP Duration</h4>
              <ul>
                <li>Programs less than 8 months: Not eligible</li>
                <li>Programs 8 months to 2 years: Same length as program</li>
                <li>Programs 2+ years: Up to 3 years</li>
                <li>Multiple programs: Combined length up to 3 years</li>
              </ul>
              
              <h4>Work Rights</h4>
              <ul>
                <li>Work in any job without restrictions</li>
                <li>Work for any employer</li>
                <li>Self-employment allowed</li>
                <li>Pathway to permanent residency</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="eligibility-section">
          <h2>Scholarships & Financial Aid</h2>
          <div className="exemptions-waivers">
            <h3>Available Funding Options</h3>
            <div className="exemptions-details">
              <h4>Government Scholarships</h4>
              <p>Canadian government awards:</p>
              <ul>
                <li>Vanier Canada Graduate Scholarships</li>
                <li>Banting Postdoctoral Fellowships</li>
                <li>Canada Graduate Scholarships</li>
                <li>International Student Scholarships</li>
                <li>Provincial scholarships</li>
              </ul>
              
              <h4>University Scholarships</h4>
              <p>Institution-specific awards:</p>
              <ul>
                <li>Merit-based scholarships</li>
                <li>Need-based financial aid</li>
                <li>Research scholarships</li>
                <li>International student awards</li>
                <li>Graduate assistantships</li>
              </ul>
              
              <h4>External Funding</h4>
              <p>Other funding opportunities:</p>
              <ul>
                <li>Home country government scholarships</li>
                <li>International organizations</li>
                <li>Industry partnerships</li>
                <li>Research grants</li>
                <li>Teaching assistantships</li>
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
                  <li>Academic transcripts and certificates</li>
                  <li>English/French language test results</li>
                  <li>Financial documents (4+ months old)</li>
                  <li>Passport valid for entire stay</li>
                  <li>Statement of purpose</li>
                  <li>Letters of recommendation</li>
                </ul>
              </div>
              <div className="tips-item">
                <h4>Application Timeline</h4>
                <ul>
                  <li>Start 12-18 months before intended intake</li>
                  <li>Apply for universities/colleges first</li>
                  <li>Book medical examination early</li>
                  <li>Apply for Study Permit 3-4 months before course starts</li>
                  <li>Plan for biometrics appointment</li>
                </ul>
              </div>
              <div className="tips-item">
                <h4>Common Mistakes to Avoid</h4>
                <ul>
                  <li>Insufficient financial documentation</li>
                  <li>Incomplete language test preparation</li>
                  <li>Missing academic documents</li>
                  <li>Late application submission</li>
                  <li>Inadequate statement of purpose</li>
                  <li>Not maintaining full-time enrollment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="eligibility-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-section">
            <h3>Common Questions About Canadian Student Visas</h3>
            
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
          <h2>Explore More About Studying in Canada</h2>
          <div className="navigation-links">
            <div className="nav-link-card">
              <h3>📚 Study Guide</h3>
              <p>Get a comprehensive overview of studying in Canada, including education system, costs, and opportunities.</p>
              <Link to="/study-guide/canada" className="nav-link-button">
                View Study Guide
              </Link>
            </div>
            <div className="nav-link-card">
              <h3>🎓 Colleges in Canada</h3>
              <p>Discover public colleges and technical institutions offering practical, career-focused education.</p>
              <Link to="/colleges/canada" className="nav-link-button">
                View Colleges
              </Link>
            </div>
            <div className="nav-link-card">
              <h3>🏛️ Universities in Canada</h3>
              <p>Explore research-intensive universities offering undergraduate and graduate degrees with world-class facilities.</p>
              <Link to="/universities/canada" className="nav-link-button">
                View Universities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityCanada; 