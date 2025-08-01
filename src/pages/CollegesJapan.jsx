import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Colleges.css';

const CollegesJapan = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the difference between a technical college and a university?",
      answer: "Technical colleges (Kosen) are specialized institutions offering five-year programs in engineering and technology, while universities provide a broader range of academic disciplines and degrees. Universities typically have more research focus and higher academic standards."
    },
    {
      question: "Do I need to speak Japanese to study in Japan?",
      answer: "While Japanese language proficiency is not always required for admission to technical colleges, it is highly recommended for international students. Many programs offer Japanese language courses for beginners, and proficiency is often a prerequisite for certain programs or scholarships."
    },
    {
      question: "What are the admission requirements for technical colleges?",
      answer: "Admission requirements vary by college, but typically include high school graduation, completion of a pre-college program, or successful completion of a Japanese language test. Some colleges may require entrance exams or interviews."
    },
    {
      question: "What are the career prospects after studying in a Japanese technical college?",
      answer: "Graduates from Japanese technical colleges enjoy excellent employment opportunities in Japan's thriving industries. Many companies in Japan, particularly in engineering and manufacturing, actively recruit from these institutions. Opportunities for international employment are also available."
    },
    {
      question: "How much does it cost to study in a Japanese technical college?",
      answer: "Tuition fees vary significantly. National Technical Colleges (Kosen) typically charge around ¥535,800 per year (approximately $4,800 USD). Private Technical Colleges and Specialized Training Colleges (Senmon Gakko) can range from ¥1,000,000 to ¥1,500,000 per year (approximately $9,000 - $13,500 USD) and ¥800,000 - 1,200,000 per year (approximately $7,200 - $10,800 USD) respectively."
    }
  ];

  return (
    <div className="colleges-page">
      <div className="colleges-header">
        <h1>Colleges in Japan</h1>
        <p className="subtitle">Explore Technical Colleges, Vocational Education & Specialized Training</p>
      </div>

      <div className="colleges-content">
        <div className="colleges-section">
          <h2>Understanding Japan's College System</h2>
          <p>Japan offers a unique and highly specialized college system focused on technical education, vocational training, and industry-specific skills. Japanese colleges are known for their rigorous academic standards, strong industry connections, and emphasis on practical, hands-on learning that prepares students for immediate employment.</p>
          
          <div className="education-system">
            <h3>Types of Institutions</h3>
            <div className="system-grid">
              <div className="system-item">
                <h4>🎓 Technical Colleges (Kosen)</h4>
                <p>Specialized five-year institutions offering advanced technical education in engineering, technology, and applied sciences with strong industry partnerships.</p>
                <ul>
                  <li>Five-year integrated programs</li>
                  <li>Advanced technical training</li>
                  <li>Industry-focused curriculum</li>
                  <li>Direct pathway to employment</li>
                </ul>
              </div>
              <div className="system-item">
                <h4>🏫 Specialized Training Colleges (Senmon Gakko)</h4>
                <p>Private institutions offering specialized vocational training in specific fields such as design, animation, business, and healthcare.</p>
                <ul>
                  <li>Specialized vocational programs</li>
                  <li>Industry-specific training</li>
                  <li>Practical skill development</li>
                  <li>Employment-focused education</li>
                </ul>
              </div>
              <div className="system-item">
                <h4>📚 Junior Colleges</h4>
                <p>Two-year institutions offering associate degrees and specialized training in various fields with flexible study options.</p>
                <ul>
                  <li>Two-year associate degrees</li>
                  <li>Specialized field training</li>
                  <li>Flexible study options</li>
                  <li>Pathway to university</li>
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
                <h4>April Intake</h4>
                <p>Main intake for most technical colleges. Applications typically close in October-November of the previous year.</p>
              </div>
              <div className="intake-item">
                <h4>September Intake</h4>
                <p>Limited intake for some specialized programs. Applications typically close in May-June.</p>
              </div>
              <div className="intake-item">
                <h4>Rolling Admissions</h4>
                <p>Some specialized training colleges offer rolling admissions throughout the year.</p>
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
                <li>Study full-time at a registered institution</li>
                <li>Work up to 28 hours per week during studies</li>
                <li>Work unlimited hours during official breaks</li>
                <li>Travel in and out of Japan</li>
                <li>Access student support services</li>
              </ul>
              <p><strong>Visa Cost:</strong> ¥3,000 (approximately $27 USD)</p>
              <p><strong>Processing Time:</strong> 2-3 months</p>
            </div>
          </div>
        </div>

        <div className="colleges-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-section">
            <h3>Common Questions About Japanese Colleges</h3>
            
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
              <h3>🏛️ Universities in Japan</h3>
              <p>Explore prestigious universities and research institutions for undergraduate and graduate studies.</p>
              <Link to="/universities/japan" className="nav-link-button">
                View Universities
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

export default CollegesJapan; 