import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Colleges.css';

const CollegesUK = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the difference between a college and a university in the UK?",
      answer: "Colleges in the UK typically offer vocational and technical education, foundation courses, and pathway programs. Universities offer degree programs and academic qualifications. Colleges are often more practical and industry-focused."
    },
    {
      question: "Can I transfer from a college to a university?",
      answer: "Yes, many UK colleges have articulation agreements with universities. Students can complete foundation courses or diplomas at colleges and then transfer to university degree programs, often with credit recognition."
    },
    {
      question: "What are the English language requirements for UK colleges?",
      answer: "Most colleges require IELTS 5.5-6.0 overall, with no band less than 5.0-5.5. Some courses may have higher requirements. Colleges also offer English language preparation courses."
    },
    {
      question: "How much does it cost to study at a UK college?",
      answer: "College fees range from £8,000 to £15,000 per year for international students, depending on the course and location. This is generally lower than university fees."
    },
    {
      question: "Can I work while studying at a UK college?",
      answer: "Yes, international students can work up to 20 hours per week during term time and full-time during holidays, provided they are studying at a recognized institution."
    },
    {
      question: "What types of courses are available at UK colleges?",
      answer: "UK colleges offer courses in business, IT, hospitality, healthcare, creative arts, engineering, and many other fields. They provide certificates, diplomas, foundation degrees, and pathway programs."
    }
  ];

  return (
    <div className="colleges-page">
      <div className="colleges-header">
        <h1>Colleges in the UK</h1>
        <p className="subtitle">Explore Further Education Colleges, Vocational Training & Pathway Programs</p>
      </div>

      <div className="colleges-content">
        <div className="colleges-section">
          <h2>Understanding the UK's College System</h2>
          <p>The UK offers a comprehensive college system that provides vocational education, technical training, and pathway programs to university. UK colleges are known for their practical approach to education, strong industry connections, and flexible learning options that prepare students for both employment and further academic study.</p>
          
          <div className="education-system">
            <h3>Types of Institutions</h3>
            <div className="system-grid">
              <div className="system-item">
                <h4>🎓 Further Education Colleges</h4>
                <p>Public institutions offering vocational qualifications, technical training, and pathway programs to university with strong industry partnerships.</p>
                <ul>
                  <li>Vocational qualifications</li>
                  <li>Technical training programs</li>
                  <li>Foundation courses</li>
                  <li>University pathway programs</li>
                </ul>
              </div>
              <div className="system-item">
                <h4>🏫 Private Colleges</h4>
                <p>Independent institutions offering specialized courses in business, IT, hospitality, and other fields with flexible study options.</p>
                <ul>
                  <li>Specialized programs</li>
                  <li>Flexible study options</li>
                  <li>Industry partnerships</li>
                  <li>Smaller class sizes</li>
                </ul>
              </div>
              <div className="system-item">
                <h4>📚 Sixth Form Colleges</h4>
                <p>Institutions specializing in A-Level and BTEC qualifications for students aged 16-18 preparing for university entry.</p>
                <ul>
                  <li>A-Level qualifications</li>
                  <li>BTEC diplomas</li>
                  <li>University preparation</li>
                  <li>Academic support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="colleges-section">
          <h2>Top Further Education Colleges in the UK</h2>
          <div className="colleges-grid">
            <div className="college-card">
              <h3>City of London College</h3>
              <p><strong>📍 Location:</strong> London</p>
              <p>Premier further education college in the heart of London, offering diverse vocational programs and excellent university pathways.</p>
              <div className="college-details">
                <p><strong>Popular Courses:</strong> Business, IT, Hospitality, Creative Arts, Healthcare</p>
                <p><strong>Duration:</strong> 1-2 years</p>
                <p><strong>Fees:</strong> £10,000 - 15,000/year</p>
                <p><strong>University Pathways:</strong> 95% success rate</p>
              </div>
              <div className="college-actions">
                <a href="https://www.cityoflondoncollege.ac.uk/" target="_blank" rel="noopener noreferrer" className="visit-website">Visit Website</a>
                <button className="apply-now">Apply Now</button>
              </div>
            </div>

            <div className="college-card">
              <h3>Manchester College of Technology</h3>
              <p><strong>📍 Location:</strong> Manchester</p>
              <p>Leading technical college in the North West, specializing in engineering, technology, and digital skills with strong industry links.</p>
              <div className="college-details">
                <p><strong>Popular Courses:</strong> Engineering, Computing, Digital Media, Construction, Automotive</p>
                <p><strong>Duration:</strong> 1-3 years</p>
                <p><strong>Fees:</strong> £8,000 - 12,000/year</p>
                <p><strong>Employment Rate:</strong> 92%</p>
              </div>
              <div className="college-actions">
                <a href="https://www.manchestertechcollege.ac.uk/" target="_blank" rel="noopener noreferrer" className="visit-website">Visit Website</a>
                <button className="apply-now">Apply Now</button>
              </div>
            </div>

            <div className="college-card">
              <h3>Birmingham Business College</h3>
              <p><strong>📍 Location:</strong> Birmingham</p>
              <p>Specialized business college offering professional qualifications and industry-focused training for the modern business world.</p>
              <div className="college-details">
                <p><strong>Popular Courses:</strong> Business Management, Accounting, Marketing, Finance, HR</p>
                <p><strong>Duration:</strong> 1-2 years</p>
                <p><strong>Fees:</strong> £9,000 - 14,000/year</p>
                <p><strong>Industry Connections:</strong> Major corporations</p>
              </div>
              <div className="college-actions">
                <a href="https://www.birminghambusinesscollege.ac.uk/" target="_blank" rel="noopener noreferrer" className="visit-website">Visit Website</a>
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
                <h4>September Intake</h4>
                <p>Main intake for most college programs. Applications typically close in June-July of the same year.</p>
              </div>
              <div className="intake-item">
                <h4>January Intake</h4>
                <p>Secondary intake for many programs. Applications typically close in October-November of the previous year.</p>
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
                <li>Travel in and out of the UK</li>
                <li>Access healthcare through NHS</li>
              </ul>
              <p><strong>Visa Cost:</strong> £348 (approximately $450 USD)</p>
              <p><strong>Processing Time:</strong> 3-6 weeks</p>
            </div>
          </div>
        </div>

        <div className="colleges-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-section">
            <h3>Common Questions About UK Colleges</h3>
            
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
          <h2>Explore More About Studying in the UK</h2>
          <div className="navigation-links">
            <div className="nav-link-card">
              <h3>📚 Study Guide</h3>
              <p>Get a comprehensive overview of studying in the UK, including education system, costs, and opportunities.</p>
              <Link to="/study-guide/uk" className="nav-link-button">
                View Study Guide
              </Link>
            </div>
            <div className="nav-link-card">
              <h3>🏛️ Universities in the UK</h3>
              <p>Explore prestigious universities and research institutions for undergraduate and graduate studies.</p>
              <Link to="/universities/uk" className="nav-link-button">
                View Universities
              </Link>
            </div>
            <div className="nav-link-card">
              <h3>📋 Eligibility Criteria</h3>
              <p>Learn about academic requirements, English language tests, and visa application processes.</p>
              <Link to="/eligibility/uk" className="nav-link-button">
                View Requirements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegesUK; 