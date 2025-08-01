import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Colleges.css';

const CollegesCanada = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the difference between a college and a university in Canada?",
      answer: "Colleges in Canada focus on practical, career-oriented education and offer diplomas, certificates, and applied degrees. Universities offer academic degrees with theoretical knowledge. Colleges are often more affordable and provide hands-on training."
    },
    {
      question: "Can I transfer from a college to a university?",
      answer: "Yes, many Canadian colleges have articulation agreements with universities. Students can complete diploma programs at colleges and then transfer to university degree programs, often with credit recognition."
    },
    {
      question: "What are the English language requirements for Canadian colleges?",
      answer: "Most colleges require IELTS 6.0-6.5 overall, with no band less than 5.5-6.0. Some courses may have higher requirements. Colleges also offer English language preparation programs."
    },
    {
      question: "How much does it cost to study at a Canadian college?",
      answer: "College fees range from CAD 15,000 to 25,000 per year for international students, depending on the course and location. This is generally lower than university fees."
    },
    {
      question: "Can I work while studying at a Canadian college?",
      answer: "Yes, international students can work up to 20 hours per week during term time and full-time during holidays, provided they are studying at a designated learning institution."
    },
    {
      question: "What types of programs are available at Canadian colleges?",
      answer: "Canadian colleges offer programs in business, technology, healthcare, trades, hospitality, and many other fields. They provide diplomas, certificates, and applied degrees."
    }
  ];

  return (
    <div className="colleges-page">
      <div className="colleges-header">
        <h1>Colleges in Canada</h1>
        <p className="subtitle">Explore Community Colleges, Technical Institutes & Pathway Programs</p>
      </div>

      <div className="colleges-content">
        <div className="colleges-section">
          <h2>Understanding Canada's College System</h2>
          <p>Canada offers a comprehensive college system that provides practical education, technical training, and pathway programs to university. Canadian colleges are known for their hands-on approach to education, strong industry connections, and flexible learning options that prepare students for both employment and further academic study.</p>
          
          <div className="education-system">
            <h3>Types of Institutions</h3>
            <div className="system-grid">
              <div className="system-item">
                <h4>🎓 Community Colleges</h4>
                <p>Public institutions offering diploma programs, certificates, and applied degrees with strong industry partnerships and practical training.</p>
                <ul>
                  <li>Diploma programs (2-3 years)</li>
                  <li>Certificate programs (1 year)</li>
                  <li>Applied degrees</li>
                  <li>University transfer programs</li>
                </ul>
              </div>
              <div className="system-item">
                <h4>🏫 Technical Institutes</h4>
                <p>Specialized institutions offering technical and vocational education in specific fields with industry-focused training.</p>
                <ul>
                  <li>Technical programs</li>
                  <li>Trade certifications</li>
                  <li>Hands-on training</li>
                  <li>Industry partnerships</li>
                </ul>
              </div>
              <div className="system-item">
                <h4>📚 CEGEPs (Quebec)</h4>
                <p>Pre-university and technical colleges in Quebec offering two-year programs before university or direct entry to workforce.</p>
                <ul>
                  <li>Pre-university programs</li>
                  <li>Technical programs</li>
                  <li>University preparation</li>
                  <li>Career-focused education</li>
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
                <h4>September Intake</h4>
                <p>Main intake for most college programs. Applications typically close in February-March of the same year.</p>
              </div>
              <div className="intake-item">
                <h4>January Intake</h4>
                <p>Secondary intake for many programs. Applications typically close in September-October of the previous year.</p>
              </div>
              <div className="intake-item">
                <h4>May Intake</h4>
                <p>Limited intake for some programs. Applications typically close in January-February.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="colleges-section">
          <h2>Visa Information</h2>
          <div className="visa-info">
            <h3>Student Visa Requirements</h3>
            <div className="visa-details">
              <h4>Visa Rights & Benefits</h4>
              <p>International students on a student visa can:</p>
              <ul>
                <li>Study full-time at a designated learning institution</li>
                <li>Work up to 20 hours per week during studies</li>
                <li>Work full-time during holidays</li>
                <li>Travel in and out of Canada</li>
                <li>Access healthcare services</li>
              </ul>
              <p><strong>Visa Cost:</strong> CAD 150 (approximately $110 USD)</p>
              <p><strong>Processing Time:</strong> 4-8 weeks</p>
            </div>
          </div>
        </div>

        <div className="colleges-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-section">
            <h3>Common Questions About Canadian Colleges</h3>
            
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
              <h3>🏛️ Universities in Canada</h3>
              <p>Explore prestigious universities and research institutions for undergraduate and graduate studies.</p>
              <Link to="/universities/canada" className="nav-link-button">
                View Universities
              </Link>
            </div>
            <div className="nav-link-card">
              <h3>📋 Eligibility Criteria</h3>
              <p>Learn about academic requirements, English language tests, and visa application processes.</p>
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

export default CollegesCanada; 