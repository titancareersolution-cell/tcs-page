import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Colleges.css';

const CollegesUSA = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the difference between a community college and a university in the USA?",
      answer: "Community colleges offer two-year associate degrees and certificate programs, while universities offer four-year bachelor's degrees and graduate programs. Community colleges are more affordable and often serve as pathways to universities."
    },
    {
      question: "Can I transfer from a community college to a university?",
      answer: "Yes, many students complete their first two years at community colleges and then transfer to universities to complete their bachelor's degrees. This is often more affordable and provides a smooth transition."
    },
    {
      question: "What are the English language requirements for US colleges?",
      answer: "Most colleges require TOEFL 61-80 or IELTS 5.5-6.0 overall. Some colleges offer English language programs for students who need additional preparation."
    },
    {
      question: "How much does it cost to study at a US community college?",
      answer: "Community college fees range from $8,000 to $15,000 per year for international students, which is significantly lower than university fees. This makes them an attractive option for many students."
    },
    {
      question: "Can I work while studying at a US community college?",
      answer: "Yes, international students can work up to 20 hours per week on-campus during studies and full-time during holidays, provided they maintain their student status."
    },
    {
      question: "What types of programs are available at US community colleges?",
      answer: "Community colleges offer associate degrees, certificates, and transfer programs in fields like business, technology, healthcare, arts, and sciences. They also provide workforce training and continuing education."
    }
  ];

  return (
    <div className="colleges-page">
      <div className="colleges-header">
        <h1>Colleges in the USA</h1>
        <p className="subtitle">Explore Community Colleges, Technical Institutes & Pathway Programs</p>
      </div>

      <div className="colleges-content">
        <div className="colleges-section">
          <h2>Understanding the USA's College System</h2>
          <p>The USA offers a diverse college system that provides accessible education, technical training, and pathway programs to universities. US colleges, particularly community colleges, are known for their affordability, flexible learning options, and strong transfer pathways that prepare students for both employment and further academic study.</p>
          
          <div className="education-system">
            <h3>Types of Institutions</h3>
            <div className="system-grid">
              <div className="system-item">
                <h4>🎓 Community Colleges</h4>
                <p>Public two-year institutions offering associate degrees, certificates, and transfer programs to universities with affordable tuition.</p>
                <ul>
                  <li>Two-year associate degrees</li>
                  <li>Certificate programs</li>
                  <li>University transfer pathways</li>
                  <li>Workforce training</li>
                </ul>
              </div>
              <div className="system-item">
                <h4>🏫 Technical Institutes</h4>
                <p>Specialized institutions offering technical and vocational education in specific fields with industry-focused training.</p>
                <ul>
                  <li>Technical programs</li>
                  <li>Industry certifications</li>
                  <li>Hands-on training</li>
                  <li>Career-focused education</li>
                </ul>
              </div>
              <div className="system-item">
                <h4>📚 Junior Colleges</h4>
                <p>Two-year institutions offering academic preparation and transfer programs to four-year universities.</p>
                <ul>
                  <li>Academic transfer programs</li>
                  <li>General education courses</li>
                  <li>University preparation</li>
                  <li>Smaller class sizes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="colleges-section">
          <h2>Top Community Colleges in the USA</h2>
          <div className="colleges-grid">
            <div className="college-card">
              <h3>Santa Monica College</h3>
              <p><strong>📍 Location:</strong> Santa Monica, California</p>
              <p>Premier community college in California, known for excellent transfer rates to UC and CSU systems and diverse academic programs.</p>
              <div className="college-details">
                <p><strong>Popular Courses:</strong> Business, Arts, Sciences, Technology, Health Sciences</p>
                <p><strong>Duration:</strong> 2 years</p>
                <p><strong>Fees:</strong> $8,000 - 12,000/year</p>
                <p><strong>Transfer Rate:</strong> 95% to universities</p>
              </div>
              <div className="college-actions">
                <a href="https://www.smc.edu/" target="_blank" rel="noopener noreferrer" className="visit-website">Visit Website</a>
                <button className="apply-now">Apply Now</button>
              </div>
            </div>

            <div className="college-card">
              <h3>Miami Dade College</h3>
              <p><strong>📍 Location:</strong> Miami, Florida</p>
              <p>Largest community college in Florida, offering diverse programs and strong international student support with multiple campuses.</p>
              <div className="college-details">
                <p><strong>Popular Courses:</strong> Business, Healthcare, Technology, Hospitality, Arts</p>
                <p><strong>Duration:</strong> 2 years</p>
                <p><strong>Fees:</strong> $9,000 - 13,000/year</p>
                <p><strong>Employment Rate:</strong> 92%</p>
              </div>
              <div className="college-actions">
                <a href="https://www.mdc.edu/" target="_blank" rel="noopener noreferrer" className="visit-website">Visit Website</a>
                <button className="apply-now">Apply Now</button>
              </div>
            </div>

            <div className="college-card">
              <h3>Seattle Central College</h3>
              <p><strong>📍 Location:</strong> Seattle, Washington</p>
              <p>Leading community college in the Pacific Northwest, specializing in technology, business, and creative arts with strong industry connections.</p>
              <div className="college-details">
                <p><strong>Popular Courses:</strong> Technology, Business, Creative Arts, Healthcare, Engineering</p>
                <p><strong>Duration:</strong> 2 years</p>
                <p><strong>Fees:</strong> $10,000 - 14,000/year</p>
                <p><strong>Industry Connections:</strong> Major tech companies</p>
              </div>
              <div className="college-actions">
                <a href="https://seattlecentral.edu/" target="_blank" rel="noopener noreferrer" className="visit-website">Visit Website</a>
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
                <h4>Fall Intake (August/September)</h4>
                <p>Main intake for most college programs. Applications typically close in March-May of the same year.</p>
              </div>
              <div className="intake-item">
                <h4>Spring Intake (January)</h4>
                <p>Secondary intake for many programs. Applications typically close in October-November of the previous year.</p>
              </div>
              <div className="intake-item">
                <h4>Summer Intake (May/June)</h4>
                <p>Limited intake for some programs. Applications typically close in February-March.</p>
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
                <li>Work up to 20 hours per week on-campus</li>
                <li>Work full-time during holidays</li>
                <li>Travel in and out of the USA</li>
                <li>Access student support services</li>
              </ul>
              <p><strong>Visa Cost:</strong> $160 (approximately $160 USD)</p>
              <p><strong>Processing Time:</strong> 3-5 weeks</p>
            </div>
          </div>
        </div>

        <div className="colleges-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-section">
            <h3>Common Questions About US Colleges</h3>
            
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
              <h3>🏛️ Universities in the USA</h3>
              <p>Explore prestigious universities and research institutions for undergraduate and graduate studies.</p>
              <Link to="/universities/usa" className="nav-link-button">
                View Universities
              </Link>
            </div>
            <div className="nav-link-card">
              <h3>📋 Eligibility Criteria</h3>
              <p>Learn about academic requirements, English language tests, and visa application processes.</p>
              <Link to="/eligibility/usa" className="nav-link-button">
                View Requirements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegesUSA; 