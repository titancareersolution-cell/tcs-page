import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StudyGuide.css';

const StudyGuideUK = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle anchor links when page loads
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const scrollToSection = () => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      // Try immediately
      if (!scrollToSection()) {
        // If not found, try after a delay
        setTimeout(() => {
          scrollToSection();
        }, 300);
      }
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { href: '#why-choose', label: 'Why Choose the UK' },
    { href: '#education-system', label: 'Education System' },
    { href: '#cities', label: 'Top Cities' },
    { href: '#cost', label: 'Cost of Study' },
    { href: '#work', label: 'Work While Studying' },
    { href: '#scholarships', label: 'Scholarships' },
    { href: '#application', label: 'Step-by-Step Journey' },
    { href: '#pr', label: 'Post-Study Work & PR' },
    { href: '#life', label: 'Life in the UK' },
    { href: '#get-started', label: 'How TCS Helps' },
    { href: '#eligibility', label: 'Eligibility' },
    { href: '#resources', label: 'Resources' }
  ];

  return (
    <div className="study-guide-page uk-flag">
      <div className="study-guide-header">
        <h1>Study in the UK – <span>The Complete Guide for Nepalese Students</span></h1>
        <p className="subtitle">Your Pathway to World-Class Education, Career Growth & a Bright Future Abroad</p>
        
        {/* Horizontal Navigation Bar */}
        <div className="guide-navigation">
          <div className="nav-container">
            <button 
              className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span>Quick Navigation</span>
              <span className="hamburger-line"></span>
            </button>
            
            <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
              <div className="nav-menu-header">
                <h3>Quick Navigation</h3>
                <button 
                  className="close-menu-btn"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>
              <div className="nav-menu-items">
                {navigationItems.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href} 
                    className="nav-menu-item"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UK Image Section */}
      <div className="australia-image-section">
        <div className="australia-image-container">
          <img 
            src="https://images.unsplash.com/photo-1562767332-ce0b1e2426bb?q=80&w=1470&auto=format&fit=crop" 
            alt="United Kingdom Study Destination" 
            className="australia-image" 
          />
        </div>
      </div>

      <div className="study-guide-content">
        <section className="guide-section">
          <h2>Welcome to the United Kingdom</h2>
          <p>At Titan Career Solutions, we believe studying in the UK is more than just earning a degree—it's a life-changing experience. Imagine learning in some of the world's oldest and most prestigious universities, living in historic cities with rich cultural heritage, gaining international work experience, and even having the chance to settle down permanently. Sounds like a dream? We're here to help make it real.</p>
          <p>The UK isn't just about Big Ben and royal traditions. It's one of the top choices for Nepalese and international students who want a future filled with opportunities, recognition, and success.</p>
        </section>

        {/* 1. Why Nepalese Students Choose the UK */}
        <section id="why-choose" className="guide-section">
          <h2>Why Choose the UK for Your Studies?</h2>
          <p>Here's why thousands of our students have chosen the UK—and why it might be the right choice for you too:</p>
          <ul className="benefits-list">
            <li><strong>Top-ranked universities</strong> – 4 of the world’s top 10 (<a href="https://www.topuniversities.com/world-university-rankings" target="_blank" rel="noopener noreferrer">QS 2025</a>).</li>
            <li><strong>Globally recognised degrees</strong> – valued worldwide.</li>
            <li><strong>Shorter degrees</strong> – 3-year bachelor’s, 1-year master’s.</li>
            <li><strong>Post-study work</strong> – 2–3 years (<a href="https://www.gov.uk/graduate-visa" target="_blank" rel="noopener noreferrer">Graduate Route</a>).</li>
            <li><strong>Clear PR pathways</strong> – <a href="https://www.gov.uk/skilled-worker-visa" target="_blank" rel="noopener noreferrer">Skilled Worker</a> route.</li>
            <li><strong>Safe, multicultural society</strong> – 600k+ international students.</li>
            <li><strong>English immersion</strong> – study in an English-speaking country.</li>
          </ul>
        </section>

        {/* 2. Understanding the UK Education System */}
        <section id="education-system" className="guide-section">
          <h2>Understanding the UK Education System</h2>
          <p>The UK offers flexible, research-driven, and industry-focused education across multiple levels. It has a flexible system with public and private universities, pathway colleges, and technical institutes. Many courses include internships and industry placements—so you get real-world experience before graduating.</p>
          <ul className="education-list">
            <li><strong>Universities:</strong> Undergraduate, postgraduate, and research degrees under the UK Qualifications Framework</li>
            <li><strong>Private Colleges:</strong> Certificate, Diploma, Undergraduate, postgraduate courses</li>
            <li><strong>Foundation & Pathway Programs:</strong> 6–12 months of academic/English preparation</li>
            <li><strong>Vocational Qualifications (HNC/HND):</strong> 1–2 years of industry-specific training</li>
          </ul>
          <p><strong>Intakes typically occur in:</strong></p>
          <ul>
            <li><strong>September/October:</strong> These are the major intakes where most programs are available</li>
            <li><strong>January/February:</strong> Spring intake, usually for Business, IT, and Engineering</li>
          </ul>
        </section>

        {/* 3. Top Student Cities & Their Advantages */}
        <section id="cities" className="guide-section">
          <h2>Top Cities for International Students</h2>
          <p>Each city has something special for students:</p>
          
          <ul className="cities-list">
            <li><strong>🏙️ London – UK's Financial Powerhouse:</strong>
              <p>London is the largest and most iconic city in the UK. It's a financial and business hub offering excellent part-time and graduate job opportunities, especially in finance, IT, hospitality, and professional services. From the famous Big Ben to stunning landmarks like the Tower Bridge, the city offers a dynamic lifestyle with a buzzing nightlife, modern infrastructure, and world-class universities like Imperial College London and University College London. It's fast-paced, global, and full of energy.</p>
            </li>
            
            <li><strong>🎨 Manchester – Cultural Capital & Student Paradise:</strong>
              <p>Often ranked as one of the UK's most livable cities, Manchester is loved for its creative arts scene, music culture, and diverse population. It's home to top universities like the University of Manchester and Manchester Metropolitan University, and is ideal for students who enjoy a balanced lifestyle. With trams, festivals, music venues filled with live performances, and sports events year-round, Manchester offers a rich cultural and academic experience.</p>
            </li>
            
            <li><strong>🏛️ Birmingham – Central, Diverse & Growing:</strong>
              <p>Birmingham, the UK's second-largest city, is known for its diverse culture, affordable living costs, and strong transport links. It's a growing city with booming sectors in health, education, and tech, making it a great place for students looking for jobs and internships. Institutions like the University of Birmingham and Aston University offer strong academic programs with industry links. Plus, it's centrally located with easy access to other UK cities!</p>
            </li>
            
            <li><strong>🏴 Scotland (Edinburgh & Glasgow) – Academic Excellence & Scenic Beauty:</strong>
              <p>Scotland is a hidden gem among UK study destinations. It's budget-friendly, calm, and ideal for students who prefer a quieter environment while still enjoying city life. Edinburgh offers historic charm and academic prestige, while Glasgow provides a more vibrant, affordable alternative. Both cities are known for their festivals, cultural heritage, and respected universities like the University of Edinburgh and University of Glasgow.</p>
            </li>
            
            <li><strong>🌊 Cardiff – Gateway to Wales' Opportunities:</strong>
              <p>Cardiff offers a relaxed lifestyle, beautiful coastline, and a growing economy driven by media, healthcare, and technology. It's less crowded than the major English cities and offers a unique Welsh cultural experience. Students at universities like Cardiff University enjoy smaller class sizes, strong academic support, and close-knit student communities.</p>
            </li>
          </ul>
          
          <h3>City Guides</h3>
          <ul>
            <li><a href="https://www.visitlondon.com" target="_blank" rel="noopener noreferrer">Visit London</a></li>
            <li><a href="https://www.visitmanchester.com" target="_blank" rel="noopener noreferrer">Visit Manchester</a></li>
            <li><a href="https://visitbirmingham.com" target="_blank" rel="noopener noreferrer">Visit Birmingham</a></li>
            <li><a href="https://www.visitscotland.com" target="_blank" rel="noopener noreferrer">Visit Scotland</a></li>
          </ul>
        </section>

        {/* 4. Cost of Studying in the UK */}
        <section id="cost" className="guide-section">
          <h2>Cost of Studying in the UK</h2>
          <p>We'll help you plan your budget wisely.</p>
          
          <ul className="cost-list">
            <li><strong>Tuition Fees (Annual Averages):</strong>
              <ul>
                <li>Bachelor's: £10,000–£25,000</li>
                <li>Master's: £12,000–£35,000</li>
                <li>MBA/Medical: £25,000–£50,000</li>
              </ul>
            </li>
            
            <li><strong>Living Costs (Monthly Averages):</strong>
              <ul>
                <li>Accommodation: £400–£1,200</li>
                <li>Food: £200–£400</li>
                <li>Other (transport, utilities): £100–£250</li>
              </ul>
            </li>
            
            <li><strong>Visa Requirements:</strong>
              <ul>
                <li>London: £1,334/month (<a href="https://www.gov.uk/student-visa/money" target="_blank" rel="noopener noreferrer">Official source</a>)</li>
                <li>Outside London: £1,023/month</li>
              </ul>
            </li>
            
            <li><strong>Other Expenses:</strong>
              <ul>
                <li>Visa fee: £524 (<a href="https://www.gov.uk/student-visa" target="_blank" rel="noopener noreferrer">Official site</a>)</li>
                <li>Immigration Health Surcharge (IHS): £776/year</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* 5. Working While Studying */}
        <section id="work" className="guide-section">
          <h2>Work While You Study</h2>
          <p>The UK allows international students to work up to 20 hours per week during academic sessions and unlimited hours during official breaks. This helps students support their living expenses, gain work experience, and improve soft skills.</p>
          
          <h3>Common Part-Time Job Areas for Students:</h3>
          <ul className="work-list">
            <li>🍽️ Cafés & Restaurants – Waitstaff, baristas, kitchen assistants, dishwashers</li>
            <li>🛍️ Retail Stores – Cashiers, sales assistants, stockroom helpers</li>
            <li>🚚 Delivery Services – Food or parcel delivery via platforms like Deliveroo, Uber Eats</li>
            <li>📚 Tutoring & Academic Support – Peer tutoring, online tutoring, assignment help</li>
            <li>🛒 Supermarkets – Shelf stacking, checkout, customer service</li>
            <li>📞 Call Centers & Customer Service – Phone support, data entry, technical assistance</li>
            <li>📦 Warehouse & Packaging Jobs – Order picking, labeling, packing</li>
            <li>🧹 Cleaning & Housekeeping – Offices, hotels, homes, and commercial cleaning</li>
            <li>👴 Aged Care & Disability Support – Support workers (especially for students in healthcare)</li>
            <li>🎪 Event Staffing – Ushers, ticketing, set-up crew for concerts, conferences, and festivals</li>
          </ul>
          <p><strong>Average pay: £8–£12/hour</strong> (<a href="https://www.gov.uk/national-minimum-wage-rates" target="_blank" rel="noopener noreferrer">Gov.uk</a>)</p>
          <p>We'll guide you on Resume and interview preparation and job search strategies after your visa approval!</p>
        </section>

        {/* 6. Scholarships */}
        <section id="scholarships" className="guide-section">
          <h2>Scholarships for Nepalese Students</h2>
          <p>We guide you through applications for:</p>
          <ul className="scholarship-list">
            <li><a href="https://www.chevening.org" target="_blank" rel="noopener noreferrer">Chevening Scholarship</a> – Fully funded master's degree</li>
            <li><a href="https://cscuk.fcdo.gov.uk" target="_blank" rel="noopener noreferrer">Commonwealth Scholarship</a> – For Commonwealth countries</li>
            <li><a href="https://study-uk.britishcouncil.org/scholarships/great-scholarships" target="_blank" rel="noopener noreferrer">GREAT Scholarships</a> – British Council initiative</li>
            <li>University-specific merit scholarships (up to 50% tuition)</li>
            <li>Regional scholarships for specific areas of study</li>
            <li>Sports and arts scholarships for talented students</li>
          </ul>
        </section>

        {/* 7. Step-by-Step Journey */}
        <section id="application" className="guide-section">
          <h2>Step-by-Step Journey from Nepal to the UK</h2>
          <p>We'll walk with you through every step, but this is the application flow process:</p>
          <ul className="process-list">
            <li><strong>Step 1:</strong> Understand the UK - Set realistic expectations before making a life-changing decision</li>
            <li><strong>Step 2:</strong> Choose the Right Course & University – Based on your goals</li>
            <li><strong>Step 3:</strong> Prepare Your Documents – Transcripts, IELTS/PTE scores, SOP, CV</li>
            <li><strong>Step 4:</strong> Organize Financial Documents - Bank statements (28 days), Education loan or Bank Balance statements</li>
            <li><strong>Step 5:</strong> Meet Entry Conditions – Academic/English requirements, interviews</li>
            <li><strong>Step 6:</strong> Pay Tuition Fee & Get CAS (Confirmation of Acceptance for Studies)</li>
            <li><strong>Step 7:</strong> Pay Immigration Health Surcharge (IHS)</li>
            <li><strong>Step 8:</strong> Apply for Student Visa (Tier 4) – Includes biometrics & financial evidence</li>
            <li><strong>Step 9:</strong> Attend Pre-departure Orientation Session - learn what to do after your visa is granted, how to settle in the UK in the first few days</li>
            <li><strong>Step 10:</strong> Finalize your departure - Worried about tickets, money-exchange, accommodation, airport pickup, and anxious about a new place? Leave this to us, enjoy your time with loved ones while we make sure that your transition to the UK is effortless</li>
          </ul>
          <p><strong>Visa processing time: Typically 3–6 weeks</strong></p>
        </section>

        {/* 8. Post-Study Work & PR Pathways */}
        <section id="pr" className="guide-section">
          <h2>Post-Study Work & PR Opportunities</h2>
          <p>The UK is one of the few countries offering clear pathways to Permanent Residency (PR) for international graduates.</p>
          
          <h3>Work & PR Options Include:</h3>
          <ul className="pr-list">
            <li>Graduate Route Visa (2-3 years)</li>
            <li>Skilled Worker Visa</li>
            <li>Global Talent Visa</li>
            <li>Start-up and Innovator Visas</li>
          </ul>
          <p>Extra PR points if you study in high-demand areas or regional cities</p>
          
          <h3>Popular PR-Friendly Courses:</h3>
          <ul>
            <li>🏥 Healthcare (Nursing, Public Health, Medicine)</li>
            <li>💻 IT & Cybersecurity</li>
            <li>⚙️ Engineering (Civil, Mechanical, Electrical)</li>
            <li>💰 Accounting & Finance</li>
            <li>👨‍🏫 Teaching & Early Childhood Education</li>
            <li>🔬 Research & Development</li>
          </ul>
        </section>

        {/* 9. Life in the UK */}
        <section id="life" className="guide-section">
          <h2>Life in the UK as an International Student</h2>
          <p>Living in the UK is exciting, safe, and full of new experiences.</p>
          <ul className="life-list">
            <li>Enjoy weekend getaways to historic sites and national parks</li>
            <li>Explore diverse cuisines and cultural festivals</li>
            <li>Build a global network of friends</li>
            <li>Access 24/7 student support services on-campus</li>
            <li>Experience rich cultural heritage and traditions</li>
            <li>Travel easily to other European countries</li>
          </ul>
        </section>

        {/* 10. How Titan Career Solutions Helps */}
        <section id="get-started" className="guide-section">
          <h2>Let's Get Started – Your Journey Begins Here</h2>
          <p>At Titan Career Solutions, we don't just send you abroad—we walk with you through your entire journey:</p>
          <ul className="services-list">
            <li>🎯 Personalized Institution & Course Selection</li>
            <li>🚀 Future-Oriented Career Counseling</li>
            <li>💸 Free Processing</li>
            <li>📋 100% Visa Application Support</li>
            <li>🏆 Help with Scholarship Applications</li>
            <li>✈️ Pre-Departure & Settlement Support</li>
          </ul>
          <p>Let's connect today and start planning your future in the UK.</p>
          <p>Your dream is closer than you think—and we're here to guide every step.</p>
        </section>

        <section id="eligibility" className="guide-section">
          <h2>📋 Eligibility Criteria</h2>
          <p>Learn about academic requirements, English language tests, and visa application processes.</p>

          <h3>Academic Requirements</h3>
          <ul>
            <li><b>Undergraduate:</b> Depending on Direct bachelor programs or Foundation to Bachelor programs, <br></br> even students with 2 GPA are elibible.</li>
            <li><b>Postgraduate:</b> Bachelor's degree with minimum GPA (usually 2:1 or equivalent)</li>
            <li><b>Research Programs:</b> Strong academic background and research proposal</li>
            <li><b>Vocational Courses:</b> High school completion or equivalent</li>
            <li><b>Prerequisites:</b> Subject-specific requirements for certain programs</li>
            <li><b>Portfolio:</b> Required for creative arts and design programs</li>
          </ul>

          <h3>English Language Requirements</h3>
          <ul>
            <li><b>IELTS:</b> 6.0–7.0 overall (depending on program)</li>
            <li><b>TOEFL:</b> 80–100 (depending on program)</li>
            <li><b>PTE Academic:</b> 50–65 (depending on program)</li>
            <li><b>Cambridge English:</b> 169–185 (depending on program)</li>
            <li><b>Test Validity:</b> Results must be within 2 years of application</li>
          </ul>

          <h3>Visa Requirements</h3>
          <ul>
            <li><b>Student Visa (Tier 4):</b> Required for all international students</li>
            <li><b>Financial Evidence:</b> Proof of sufficient funds for tuition and living expenses</li>
            <li><b>Health Insurance:</b> Immigration Health Surcharge (IHS) mandatory</li>
            <li><b>Health Requirements:</b> Medical examination may be required</li>
            <li><b>Character Requirements:</b> Police clearance certificate</li>
            <li><b>Genuine Student:</b> Must demonstrate intention to study and return home</li>
          </ul>

          <h3>Required Documents</h3>
          <ul>
            <li><b>Academic:</b> Transcripts and certificates (translated and certified)</li>
            <li><b>Language:</b> English language test results</li>
            <li><b>Personal:</b> Statement of Purpose (SOP)</li>
            <li><b>References:</b> Letters of Recommendation (2-3)</li>
            <li><b>Professional:</b> CV/Resume</li>
            <li><b>Financial:</b> Bank statements, sponsorship letters</li>
            <li><b>Travel:</b> Passport copy (valid for 6+ months)</li>
            <li><b>Insurance:</b> Health insurance certificate</li>
            <li><b>Creative:</b> Portfolio (for creative programs)</li>
            <li><b>Research:</b> Research proposal (for research programs)</li>
          </ul>
        </section>

        {/* Useful Resources Section */}
        <section id="resources" className="guide-section">
          <h2>📚 Useful Resources</h2>
          <ul className="resources-list">
            <li><a href="https://www.gov.uk/student-visa" target="_blank" rel="noopener noreferrer">Official Student Visa Information</a></li>
            <li><a href="https://study-uk.britishcouncil.org" target="_blank" rel="noopener noreferrer">Study UK – British Council</a></li>
            <li><a href="https://www.ukcisa.org.uk" target="_blank" rel="noopener noreferrer">UKCISA – Student Advice</a></li>
          </ul>
        </section>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
};

export default StudyGuideUK; 