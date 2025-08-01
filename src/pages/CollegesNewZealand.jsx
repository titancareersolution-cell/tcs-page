import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Colleges.css';

const CollegesNewZealand = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the difference between a polytechnic and a university in New Zealand?",
      answer: "Polytechnics focus on practical, vocational education and industry-specific skills, while universities offer academic degrees with theoretical knowledge. Polytechnics are now called Institutes of Technology and Polytechnics (ITPs) and offer more hands-on, career-focused programs."
    },
    {
      question: "Can I transfer from a polytechnic to a university?",
      answer: "Yes, many polytechnic courses provide pathways to university. You can receive credit for your polytechnic studies and enter university programs, often starting in the second or third year of a degree."
    },
    {
      question: "What are the English language requirements for New Zealand colleges?",
      answer: "Most colleges require IELTS 5.5-6.0 overall, with no band less than 5.0-5.5. Some courses may have higher requirements. Colleges also offer English language preparation courses."
    },
    {
      question: "How much does it cost to study at a New Zealand college?",
      answer: "College fees range from NZD 15,000 to 25,000 per year for international students, depending on the course and location. This is generally lower than university fees."
    },
    {
      question: "Can I work while studying at a New Zealand college?",
      answer: "Yes, international students can work up to 20 hours per week during term time and full-time during holidays, provided they are studying at a recognized institution."
    },
    {
      question: "What types of courses are available at New Zealand colleges?",
      answer: "New Zealand colleges offer courses in business, IT, hospitality, healthcare, creative arts, engineering, and many other fields. They provide certificates, diplomas, and pathway programs."
    }
  ];

  return (
    <div className="colleges-page">
      <div className="colleges-header">
        <h1>Colleges in New Zealand</h1>
        <p className="subtitle">Explore Institutes of Technology, Vocational Education & Pathway Programs</p>
      </div>

      <div className="colleges-content">
        <div className="colleges-section">
          <h2>Understanding New Zealand's College System</h2>
          <p>New Zealand offers a comprehensive college system that provides vocational education, technical training, and pathway programs to university. New Zealand colleges, now called Institutes of Technology and Polytechnics (ITPs), are known for their practical approach to education, strong industry connections, and flexible learning options that prepare students for both employment and further academic study.</p>
          
          <div className="education-system">
            <h3>Types of Institutions</h3>
            <div className="system-grid">
              <div className="system-item">
                <h4>🎓 Institutes of Technology & Polytechnics (ITPs)</h4>
                <p>Public institutions offering vocational qualifications, technical training, and pathway programs to university with strong industry partnerships.</p>
                <ul>
                  <li>Vocational qualifications</li>
                  <li>Technical training programs</li>
                  <li>Foundation courses</li>
                  <li>University pathway programs</li>
                </ul>
              </div>
              <div className="system-item">
                <h4>🏫 Private Training Establishments (PTEs)</h4>
                <p>Private institutions offering specialized courses in business, IT, hospitality, and other fields with flexible study options.</p>
                <ul>
                  <li>Specialized programs</li>
                  <li>Flexible study options</li>
                  <li>Industry partnerships</li>
                  <li>Smaller class sizes</li>
                </ul>
              </div>
              <div className="system-item">
                <h4>📚 Industry Training Organizations (ITOs)</h4>
                <p>Organizations that develop and deliver industry-specific training and qualifications in partnership with employers.</p>
                <ul>
                  <li>Industry-specific training</li>
                  <li>Workplace-based learning</li>
                  <li>National qualifications</li>
                  <li>Employer partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="colleges-section">
          <h2>Top Institutes of Technology in New Zealand</h2>
          <div className="colleges-grid">
            <div className="college-card">
              <h3>Auckland Institute of Technology</h3>
              <p><strong>📍 Location:</strong> Auckland</p>
              <p>Premier institute of technology in New Zealand's largest city, offering diverse vocational programs and excellent university pathways.</p>
              <div className="college-details">
                <p><strong>Popular Courses:</strong> Business, IT, Hospitality, Creative Arts, Healthcare, Engineering</p>
                <p><strong>Duration:</strong> 1-3 years</p>
                <p><strong>Fees:</strong> NZD 18,000 - 25,000/year</p>
                <p><strong>University Pathways:</strong> 95% success rate</p>
              </div>
              <div className="college-actions">
                <a href="https://www.aut.ac.nz/" target="_blank" rel="noopener noreferrer" className="visit-website">Visit Website</a>
                <button className="apply-now">Apply Now</button>
              </div>
            </div>

            <div className="college-card">
              <h3>Wellington Institute of Technology</h3>
              <p><strong>📍 Location:</strong> Wellington</p>
              <p>Leading institute in the capital city, specializing in technology, business, and creative industries with strong government connections.</p>
              <div className="college-details">
                <p><strong>Popular Courses:</strong> Information Technology, Business, Creative Technologies, Engineering, Design</p>
                <p><strong>Duration:</strong> 1-3 years</p>
                <p><strong>Fees:</strong> NZD 16,000 - 22,000/year</p>
                <p><strong>Employment Rate:</strong> 94%</p>
              </div>
              <div className="college-actions">
                <a href="https://www.weltec.ac.nz/" target="_blank" rel="noopener noreferrer" className="visit-website">Visit Website</a>
                <button className="apply-now">Apply Now</button>
              </div>
            </div>

            <div className="college-card">
              <h3>Christchurch Polytechnic Institute</h3>
              <p><strong>📍 Location:</strong> Christchurch</p>
              <p>Renowned institute in the South Island, known for engineering, trades, and practical skills training with modern facilities.</p>
              <div className="college-details">
                <p><strong>Popular Courses:</strong> Engineering, Trades, Construction, Business, Tourism, Agriculture</p>
                <p><strong>Duration:</strong> 1-3 years</p>
                <p><strong>Fees:</strong> NZD 15,000 - 20,000/year</p>
                <p><strong>Industry Connections:</strong> Major employers</p>
              </div>
              <div className="college-actions">
                <a href="https://www.ara.ac.nz/" target="_blank" rel="noopener noreferrer" className="visit-website">Visit Website</a>
                <button className="apply-now">Apply Now</button>
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
                <p>Main intake for most college programs. Applications typically close in October-November of the previous year.</p>
              </div>
              <div className="intake-item">
                <h4>July Intake</h4>
                <p>Secondary intake for many programs. Applications typically close in April-May of the same year.</p>
              </div>
              <div className="intake-item">
                <h4>Rolling Admissions</h4>
                <p>Some colleges offer rolling admissions throughout the year for certain programs.</p>
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
                <li>Work up to 20 hours per week during studies</li>
                <li>Work full-time during holidays</li>
                <li>Travel in and out of New Zealand</li>
                <li>Access healthcare services</li>
              </ul>
              <p><strong>Visa Cost:</strong> NZD 330 (approximately $200 USD)</p>
              <p><strong>Processing Time:</strong> 3-6 weeks</p>
            </div>
          </div>
        </div>

        <div className="colleges-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-section">
            <h3>Common Questions About New Zealand Colleges</h3>
            
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
              <h3>🏛️ Universities in New Zealand</h3>
              <p>Explore prestigious universities and research institutions for undergraduate and graduate studies.</p>
              <Link to="/universities/newzealand" className="nav-link-button">
                View Universities
              </Link>
            </div>
            <div className="nav-link-card">
              <h3>📋 Eligibility Criteria</h3>
              <p>Learn about academic requirements, English language tests, and visa application processes.</p>
              <Link to="/eligibility/newzealand" className="nav-link-button">
                View Requirements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegesNewZealand; 