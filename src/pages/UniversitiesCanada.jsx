import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Universities.css';

const UniversitiesCanada = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the top-ranked universities in Canada?",
      answer: "Canada's top-ranked universities include the University of Toronto, University of British Columbia, McGill University, and University of Alberta. These institutions consistently rank among the world's best for research and teaching quality."
    },
    {
      question: "What are the admission requirements for Canadian universities?",
      answer: "Admission requirements vary by program and university. Generally, applicants need a high school diploma or equivalent, language proficiency (English or French), and standardized test scores (e.g., TOEFL, IELTS, SAT, ACT). Some programs also require letters of recommendation, personal statements, and relevant work experience."
    },
    {
      question: "How much does it cost to study in Canada?",
      answer: "Tuition fees vary significantly. Undergraduate programs can range from CAD$35,000 to CAD$60,000 per year, while graduate programs (Master's, PhD) can cost between CAD$25,000 and CAD$50,000. Living expenses, including accommodation, food, transportation, and healthcare, can add up to CAD$10,000 to CAD$15,000 per year."
    },
    {
      question: "Are there scholarships available for international students?",
      answer: "Yes, numerous scholarships and financial aid options are available for international students. These include entrance scholarships, international student scholarships, research scholarships, and teaching/research assistantships. It's important to research and apply for these opportunities early."
    },
    {
      question: "What is the co-op program in Canadian universities?",
      answer: "Co-op programs are a unique feature of Canadian universities, allowing students to gain practical work experience while studying. Students alternate between academic studies and paid work placements, which can enhance their employability and provide valuable industry connections."
    },
    {
      question: "Can I work while studying in Canada?",
      answer: "Yes, international students can work up to 20 hours per week during academic sessions and full-time during scheduled breaks. This includes on-campus and off-campus work opportunities."
    }
  ];

  return (
    <div className="universities-page">
      <div className="universities-header">
        <h1>Universities in Canada</h1>
        <p className="subtitle">Discover World-Class Universities & Academic Excellence</p>
      </div>

      <div className="universities-content">
        <div className="universities-section">
          <h2>Canada's University System</h2>
          <p>Canada is home to some of the world's most prestigious universities, offering world-class education, cutting-edge research, and excellent career opportunities. Canadian universities are known for their innovative teaching methods, strong industry connections, and multicultural campus environments.</p>
          
          <div className="academic-requirements">
            <h3>Key Features</h3>
            <div className="requirements-grid">
              <div className="requirement-item">
                <h4>🏆 World Rankings</h4>
                <p>Canadian universities consistently rank among the world's best, with many in the top 100 globally.</p>
                <ul>
                  <li>University of Toronto (#18)</li>
                  <li>University of British Columbia (#40)</li>
                  <li>McGill University (#46)</li>
                  <li>University of Alberta (#111)</li>
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
                  <li>Co-op programs</li>
                  <li>Industry partnerships</li>
                  <li>Career services</li>
                  <li>Alumni networks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="universities-section">
          <h2>Academic & Language Requirements</h2>
          <div className="academic-requirements">
            <h3>Entry Requirements</h3>
            <div className="requirements-grid">
              <div className="requirement-item">
                <h4>Undergraduate Requirements</h4>
                <p>Entry requirements for Bachelor's degree programs:</p>
                <ul>
                  <li>Minimum 60% in Year 12 or equivalent</li>
                  <li>IELTS 6.5 overall (6.0 in each band)</li>
                  <li>TOEFL iBT 90 overall</li>
                  <li>Some programs may require higher scores</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h4>Postgraduate Requirements</h4>
                <p>Entry requirements for Master's degree programs:</p>
                <ul>
                  <li>Minimum 70% in undergraduate degree</li>
                  <li>IELTS 6.5 overall (6.0 in each band)</li>
                  <li>TOEFL iBT 90 overall</li>
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
                <h4>September Intake</h4>
                <p>Main intake for most programs. Applications typically close in January-March of the same year.</p>
              </div>
              <div className="intake-item">
                <h4>January Intake</h4>
                <p>Winter intake for many programs. Applications typically close in September-October of the previous year.</p>
              </div>
              <div className="intake-item">
                <h4>Research Programs</h4>
                <p>Rolling intakes throughout the year. Contact supervisors directly for availability.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="universities-section">
          <h2>Study Permit Assessment</h2>
          <div className="gs-assessment">
            <h3>Assessment Criteria</h3>
            <div className="gs-details">
              <h4>Evaluation Parameters</h4>
              <p>The Study Permit assessment evaluates:</p>
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
              <p><strong>Assessment Level:</strong> Agent - TCS - University/College - Canadian High Commission</p>
            </div>
          </div>
        </div>

        <div className="universities-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-section">
            <h3>Common Questions About Canadian Universities</h3>
            
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
              <h3>📋 Eligibility Criteria</h3>
              <p>Learn about academic requirements, English/French language tests, and Study Permit application processes.</p>
              <Link to="/eligibility/canada" className="nav-link-button">
                View Requirements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversitiesCanada; 