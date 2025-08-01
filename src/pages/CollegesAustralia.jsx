import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Colleges.css';

const CollegesAustralia = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the difference between TAFE and university?",
      answer: "TAFE focuses on practical, vocational training and industry-specific skills, while universities offer academic degrees with theoretical knowledge. TAFE courses are typically shorter and more hands-on."
    },
    {
      question: "Can I transfer from TAFE to university?",
      answer: "Yes, many TAFE courses provide pathways to university. You can receive credit for your TAFE studies and enter university programs, often starting in the second or third year."
    },
    {
      question: "What are the English language requirements for TAFE?",
      answer: "Most TAFE courses require IELTS 5.5-6.0 overall, with no band less than 5.0-5.5. Some courses may have higher requirements."
    },
    {
      question: "How much does it cost to study at TAFE?",
      answer: "TAFE fees range from AUD 7,000 to 16,000 per year, depending on the course and location. International students pay higher fees than domestic students."
    },
    {
      question: "Can I work while studying at TAFE?",
      answer: "Yes, international students can work up to 48 hours per fortnight during their studies and unlimited hours during official breaks."
    },
    {
      question: "What types of courses are available at TAFE?",
      answer: "TAFE offers courses in trades, technology, business, health, hospitality, creative arts, agriculture, and many other fields. Courses range from certificates to advanced diplomas."
    }
  ];

  return (
    <div className="colleges-page">
      <div className="colleges-header">
        <h1>Colleges in Australia</h1>
        <p className="subtitle">Explore TAFE, Vocational Education & Pathway Programs</p>
      </div>

      <div className="colleges-content">
        <div className="colleges-section">
          <h2>Understanding Australia's College System</h2>
          <p>Australia offers a diverse range of college options including TAFE (Technical and Further Education) institutions, private colleges, and pathway programs. These institutions provide practical, career-focused education that prepares students for the workforce or further university studies.</p>
          
          <div className="education-system">
            <h3>Types of Institutions</h3>
            <div className="system-grid">
              <div className="system-item">
                <h4>🎓 TAFE Institutions</h4>
                <p>Government-funded vocational education providers offering practical, industry-focused training in trades, technology, and professional skills.</p>
                <ul>
                  <li>State-funded and regulated</li>
                  <li>Industry-recognized qualifications</li>
                  <li>Practical, hands-on training</li>
                  <li>Pathway to university</li>
                </ul>
              </div>
              <div className="system-item">
                <h4>🏫 Private Colleges</h4>
                <p>Private institutions offering specialized courses in business, IT, hospitality, and other fields with flexible study options.</p>
                <ul>
                  <li>Specialized programs</li>
                  <li>Flexible study options</li>
                  <li>Industry partnerships</li>
                  <li>Smaller class sizes</li>
                </ul>
              </div>
              <div className="system-item">
                <h4>📚 Pathway Programs</h4>
                <p>Academic preparation programs for students who need additional support before entering university degree programs.</p>
                <ul>
                  <li>Academic preparation</li>
                  <li>English language support</li>
                  <li>University pathway</li>
                  <li>Guaranteed entry programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="colleges-section">
          <h2>Education System & Intakes</h2>
          <div className="intakes-section">
            <h3>Intake Periods</h3>
            <div className="intakes-grid">
              <div className="intake-item">
                <h4>February Intake</h4>
                <p>Main intake for most courses. Applications typically close in October-November of the previous year.</p>
              </div>
              <div className="intake-item">
                <h4>July Intake</h4>
                <p>Mid-year intake for many courses. Applications typically close in April-May.</p>
              </div>
              <div className="intake-item">
                <h4>October/November Intake</h4>
                <p>Limited intake for specific courses. Applications typically close in August-September.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="colleges-section">
          <h2>Visa Information (Subclass 500)</h2>
          <div className="visa-info">
            <h3>Student Visa Requirements</h3>
            <div className="visa-details">
              <h4>Visa Rights & Benefits</h4>
              <p>International students on a Subclass 500 visa can:</p>
              <ul>
                <li>Study full-time at a registered institution</li>
                <li>Work up to 48 hours per fortnight during studies</li>
                <li>Work unlimited hours during official breaks</li>
                <li>Travel in and out of Australia</li>
                <li>Bring family members (dependents)</li>
              </ul>
              <p><strong>Visa Cost:</strong> From AUD 2,000</p>
              <p><strong>Processing Time:</strong> Typically 4-8 weeks</p>
            </div>
          </div>
        </div>

        <div className="colleges-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-section">
            <h3>Common Questions About TAFE</h3>
            
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

        <div className="colleges-section">
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
              <h3>🏛️ Universities in Australia</h3>
              <p>Explore world-class universities and research institutions for undergraduate and postgraduate studies.</p>
              <Link to="/universities/australia" className="nav-link-button">
                View Universities
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

export default CollegesAustralia; 