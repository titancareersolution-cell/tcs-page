import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StudyGuide.css';

const StudyGuideAustralia = () => {
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
    { href: '#why-choose', label: 'Why Choose' },
    { href: '#education-system', label: 'Education System' },
    { href: '#financial', label: 'Financial' },
    { href: '#visa', label: 'Visa' },
    { href: '#assessment', label: 'Assessment' },
    { href: '#application', label: 'Application' },
    { href: '#cities', label: 'Cities' },
    { href: '#cost', label: 'Cost' },
    { href: '#work', label: 'Work' },
    { href: '#pr', label: 'PR' },
    { href: '#life', label: 'Life' },
    { href: '#fit', label: 'Right Fit' },
    { href: '#get-started', label: 'Get Started' },
    { href: '#universities', label: 'Universities' },
    { href: '#colleges', label: 'Colleges' },
    { href: '#eligibility', label: 'Eligibility' },
    { href: '#resources', label: 'Resources' }
  ];

  return (
    <div className="study-guide-page">
      <div className="study-guide-header">
        <h1>Study in Australia – Your Complete Guide to a Brighter Future</h1>
        <p className="subtitle">Your Gateway to World-Class Education, Career Growth & a New Life Abroad</p>
      </div>

      {/* Hamburger Menu Navigation */}
      <div className="guide-navigation">
        <div className="hamburger-container">
          <button 
            className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
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

      <div className="study-guide-content">
        <section className="guide-section">
          <h2>Welcome to Australia</h2>
          <p>At Titan Career Solutions, we believe studying in Australia is more than just earning a degree—it's a life-changing experience. Imagine learning in some of the world's best universities, living in some of the safest and most vibrant multicultural cities, gaining international work experience, and even having the chance to settle down permanently. Sounds like a dream? We're here to help make it real.</p>
          <p>Australia isn't just about kangaroos and sandy beaches. It's one of the top choices for Nepalese and international students who want a future filled with opportunities, recognition, and success.</p>
        </section>

        <section id="why-choose" className="guide-section">
          <h2>Why Choose Australia for Your Studies?</h2>
          <p>Here's why thousands of our students have chosen Australia—and why it might be the right choice for you too:</p>
          <ul className="benefits-list">
            <li><strong>Top-Ranked Universities:</strong> 7 of the world's top 100 universities</li>
            <li><strong>Safe & Welcoming Environment:</strong> Over 500,000 international students feel at home</li>
            <li><strong>Student-Friendly Policies:</strong> Protect rights and financial interests</li>
            <li><strong>Part-Time Work While Studying:</strong> Gain experience and support expenses</li>
            <li><strong>Post-Study Stay Options:</strong> 2–6 years to start your international career</li>
            <li><strong>PR Pathways & Migration:</strong> Real chance for permanent residency</li>
            <li><strong>Cost-Effective Education:</strong> Shorter programs and generous scholarships</li>
          </ul>
        </section>

        <section id="education-system" className="guide-section">
          <h2>Understanding Australia's Education System</h2>
          <p>Australia's education system is modern and career-oriented. It has a flexible system with public and private universities, pathway colleges, and technical institutes. Many courses include internships and industry placements—so you get real-world experience before graduating.</p>
          <ul className="education-list">
            <li><strong>🎓 Universities:</strong> Undergraduate, postgraduate, and research degrees under the Australian Qualifications Framework (AQF)</li>
            <li><strong>🏛️ Private Colleges:</strong> Certificate, Diploma, Undergraduate, postgraduate courses</li>
            <li><strong>🔧 TAFE & Vocational Courses:</strong> Short, skill-based programs in trades and technical fields with strong job demand</li>
            <li><strong>📚 Pathway & English Programs:</strong> Great for students needing academic or language preparation</li>
          </ul>
          <p><strong>Intakes typically occur in:</strong></p>
          <ul>
            <li><strong>February and July:</strong> These are the major intakes where most programs are available</li>
            <li><strong>October/November/May:</strong> Minor intakes, usually for Business, IT, and Engineering</li>
          </ul>
        </section>

        <section id="financial" className="guide-section">
          <h2>Financial Requirements</h2>
          <p>One of the key parts of your application is proving that you have enough funds to cover your tuition, living expenses, and travel. Australia takes this very seriously.</p>
          
          <h3>Who can sponsor you?</h3>
          <ul className="financial-list">
            <li><strong>Accepted sponsors include:</strong> Your parents, grandparents, siblings, uncles or aunts, or even yourself</li>
            <li><strong>Not accepted:</strong> Cousins, friends, or distant relatives</li>
            <li><strong>Education loans:</strong> Allowed, but they must be fully approved (not just conditional), and any collateral used must belong to your immediate family. You'll also need to show proof that the loan has been disbursed before you apply for your visa</li>
            <li><strong>Savings and deposits:</strong> Should ideally be 6-12 months old. However, newer funds can be accepted if you provide strong, valid documentation — like a registered sale deed or evidence of liquidated investments</li>
            <li><strong>Not acceptable:</strong> Certain sources, such as gold sales or informal agreements</li>
            <li><strong>Sponsor's annual income:</strong> Should be at least AUD 18,000 - AUD 20,000. But if your parents' combined income exceeds AUD 87,856, some universities may waive the financial document requirement</li>
          </ul>
        </section>

        <section id="visa" className="guide-section">
          <h2>Student Visa (Subclass 500)</h2>
          <p>This visa allows you to study full-time, work part-time (up to 48 hours per fortnight), and travel in and out of Australia.</p>
          <p><strong>The cost starts at AUD 2,000.</strong></p>
          
          <h3>Documents You'll Need:</h3>
          <ul className="visa-list">
            <li>eCoE (Confirmation of Enrollment)</li>
            <li>OSHC (Overseas Student Health Cover) letter</li>
            <li>Passport (including old passports)</li>
            <li>GS (Genuine Student) Questionnaire with evidence</li>
            <li>Form 956A (if you're using an agent)</li>
            <li>HAP ID for your medical check</li>
            <li>Academic transcripts, work experience letters, financial documents</li>
            <li>Resume, national ID, net worth certificate, and details about your family, travel, and employment history</li>
          </ul>
          <p>Visa applications are submitted online. At Titan Career Solutions, we handle this entire process for you.</p>
        </section>

        <section id="assessment" className="guide-section">
          <h2>Genuine Student (GS) Assessment</h2>
          <p>Before granting a visa, the Australian government needs to be sure you're a genuine student—not someone using the visa for other purposes.</p>
          
          <h3>You'll be assessed on:</h3>
          <ul className="assessment-list">
            <li>Study or work gaps</li>
            <li>Financial background</li>
            <li>Marital status</li>
            <li>Past visa or immigration history</li>
            <li>How your chosen course fits into your long-term career</li>
            <li>Your situation at home and why you plan to return after study</li>
          </ul>
          <p>This assessment happens at three levels: your agent, the university or college, and finally the Australian High commission.</p>
        </section>

        <section id="application" className="guide-section">
          <h2>Step-by-Step Application & Visa Process</h2>
          <p>We'll walk with you through every step, but this is the application flow process:</p>
          <ul className="process-list">
            <li><strong>Step 1:</strong> Understand Australia - Set realistic expectations before making a life-changing decision</li>
            <li><strong>Step 2:</strong> Choose the Right Course & University – Based on your goals and PR possibilities</li>
            <li><strong>Step 3:</strong> Prepare Your Documents – Transcripts, IELTS/PTE scores, SOP, CV</li>
            <li><strong>Step 4:</strong> Organize Financial Documents - Bank statements (12 months), ITR (2-3 years), Education loan or Bank Balance statements</li>
            <li><strong>Step 5:</strong> Meet Entry Conditions – Academic/English requirements, interviews</li>
            <li><strong>Step 6:</strong> Pay Tuition Fee & Get CoE (Confirmation of Enrollment)</li>
            <li><strong>Step 7:</strong> Buy OSHC (Overseas Student Health Cover)</li>
            <li><strong>Step 8:</strong> Apply for Student Visa (Subclass 500) – Includes biometrics & financial evidence</li>
            <li><strong>Step 9:</strong> Attend Pre-departure Orientation Session - learn what to do after your visa is granted, how to settle in Australia in the first few days</li>
            <li><strong>Step 10:</strong> Finalize your departure - Worried about tickets, money-exchange, accommodation, airport pickup, and anxious about a new place? Leave this to us, enjoy your time with loved ones while we make sure that your transition to Australia is effortless</li>
          </ul>
          <p><strong>Visa processing time: Typically 4–8 weeks</strong></p>
        </section>

        <section id="cities" className="guide-section">
          <h2>Top Cities for International Students</h2>
          <p>Each city has something special for students:</p>
          
          <ul className="cities-list">
            <li><strong>🏙️ Sydney – Australia's Financial Powerhouse:</strong>
              <p>Sydney is the largest and most iconic city in Australia. It's a financial and business hub offering excellent part-time and graduate job opportunities, especially in finance, IT, hospitality, and professional services. From the famous Opera House to stunning beaches like Bondi, the city offers a dynamic lifestyle with a buzzing nightlife, modern infrastructure, and world-class universities like the University of Sydney and UNSW. It's fast-paced, global, and full of energy.</p>
            </li>
            
            <li><strong>🎨 Melbourne – Cultural Capital & Student Paradise:</strong>
              <p>Often ranked as one of the world's most livable cities, Melbourne is loved for its creative arts scene, coffee culture, and diverse population. It's home to top universities like the University of Melbourne and Monash University, and is ideal for students who enjoy a balanced lifestyle. With trams, festivals, laneways filled with music, and sports events year-round, Melbourne offers a rich cultural and academic experience.</p>
            </li>
            
            <li><strong>☀️ Brisbane – Sunshine, Affordability & Growth:</strong>
              <p>Brisbane, the capital of Queensland, is known for its sunny weather, laid-back lifestyle, and lower living costs compared to Sydney or Melbourne. It's a growing city with booming sectors in health, education, and tech, making it a great place for students looking for jobs and internships. Institutions like the University of Queensland and QUT offer strong academic programs with industry links. Plus, the Gold Coast is just an hour away!</p>
            </li>
            
            <li><strong>🍷 Adelaide – Regional Advantage with Urban Comfort:</strong>
              <p>Adelaide is a hidden gem among Australian cities. It's budget-friendly, calm, and ideal for students who prefer a quieter environment while still enjoying city life. As a designated regional area, it offers extra PR points, longer post-study work rights, and cheaper accommodation. Adelaide is known for its festivals, food, wine regions, and respected universities like the University of Adelaide and Flinders University.</p>
            </li>
            
            <li><strong>🏖️ Perth – Gateway to Western Australia's Opportunities:</strong>
              <p>Perth offers a relaxed lifestyle, beautiful beaches, and a growing economy driven by mining, engineering, healthcare, and technology. It's less crowded than the east coast cities and is considered a regional area for PR purposes, offering migration benefits. Students at universities like the University of Western Australia enjoy smaller class sizes, strong academic support, and close-knit student communities.</p>
            </li>
          </ul>
        </section>

        <section id="cost" className="guide-section">
          <h2>Cost of Studying in Australia</h2>
          <p>We'll help you plan your budget wisely.</p>
          
          <ul className="cost-list">
            <li><strong>Tuition Fees (Annual Averages):</strong>
              <ul>
                <li>Undergraduate: AUD 20,000–45,000</li>
                <li>Postgraduate: AUD 22,000–50,000</li>
                <li>Vocational Courses: AUD 10,000–20,000</li>
              </ul>
            </li>
            
            <li><strong>Living Expenses (Monthly Averages):</strong>
              <ul>
                <li>Accommodation: AUD 600–1,500</li>
                <li>Food: AUD 300–600</li>
                <li>Other (transport, utilities): AUD 150–300</li>
              </ul>
            </li>
            
            <li><strong>Visa Requirement:</strong>
              <ul>
                <li>You must show proof of AUD 24,505/year in living expenses for your visa (as of 2025)</li>
              </ul>
            </li>
          </ul>
        </section>

        <section id="work" className="guide-section">
          <h2>Work While You Study</h2>
          <p>Australia allows international students to work up to 48 hours per fortnight during academic sessions and unlimited hours during official breaks. This helps students support their living expenses, gain work experience, and improve soft skills.</p>
          
          <h3>Common Part-Time Job Areas for Students:</h3>
          <ul className="work-list">
            <li>🍽️ Cafés & Restaurants – Waitstaff, baristas, kitchen assistants, dishwashers</li>
            <li>🛍️ Retail Stores – Cashiers, sales assistants, stockroom helpers</li>
            <li>🚚 Delivery Services – Food or parcel delivery via platforms like Uber Eats, DoorDash</li>
            <li>📚 Tutoring & Academic Support – Peer tutoring, online tutoring, assignment help</li>
            <li>🛒 Supermarkets – Shelf stacking, checkout, customer service</li>
            <li>📞 Call Centers & Customer Service – Phone support, data entry, technical assistance</li>
            <li>📦 Warehouse & Packaging Jobs – Order picking, labeling, packing</li>
            <li>🧹 Cleaning & Housekeeping – Offices, hotels, homes, and commercial cleaning</li>
            <li>👴 Aged Care & Disability Support – Support workers (especially for students in healthcare)</li>
            <li>🎪 Event Staffing – Ushers, ticketing, set-up crew for concerts, conferences, and festivals</li>
          </ul>
          <p><strong>Average pay: AUD 20–30/hour</strong></p>
          <p>We'll guide you on Resume and interview preparation and job search strategies after your visa approval!</p>
        </section>

        <section className="guide-section">
          <h2>Post-Study Work & PR Opportunities</h2>
          <p>Australia is one of the few countries offering clear pathways to Permanent Residency (PR) for international graduates.</p>
          
          <h3>Work & PR Options Include:</h3>
          <ul className="pr-list">
            <li>Temporary Graduate Visa (Subclass 485)</li>
            <li>Skilled Migration Program</li>
            <li>State Nomination & Regional Study Pathways</li>
          </ul>
          <p>Extra PR points if you study in high-demand areas or regional cities</p>
          
          <h3>Popular PR-Friendly Courses:</h3>
          <ul>
            <li>🏥 Healthcare (Nursing, Public Health)</li>
            <li>💻 IT & Cybersecurity</li>
            <li>⚙️ Engineering (Civil, Mechanical, Electrical)</li>
            <li>💰 Accounting & Finance</li>
            <li>👨‍🏫 Teaching & Early Childhood Education</li>
            <li>🔧 Vocational Trades (Plumbing, Carpentry, Mechanics)</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Life in Australia as an International Student</h2>
          <p>Living in Australia is exciting, safe, and full of new experiences.</p>
          <ul className="life-list">
            <li>Enjoy weekend getaways to beaches and national parks</li>
            <li>Explore diverse cuisines and cultural festivals</li>
            <li>Build a global network of friends</li>
            <li>Access 24/7 student support services on-campus</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Is Australia the Right Fit for You?</h2>
          <p>If you're looking for:</p>
          <ul className="fit-list">
            <li>Globally respected education</li>
            <li>Job-ready skills & work experience</li>
            <li>Affordable and scholarship-friendly options</li>
            <li>Post-study stay & PR opportunities</li>
            <li>A multicultural, welcoming environment</li>
          </ul>
          <p>Then Australia might just be your perfect match.</p>
        </section>

        <section className="guide-section">
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
          <p>Let's connect today and start planning your future in Australia.</p>
          <p>Your dream is closer than you think—and we're here to guide every step.</p>
        </section>

        {/* Universities Section */}
        <section id="universities" className="guide-section">
          <h2>🏛️ Universities in Australia</h2>
          <p>Explore world-class universities and research institutions for undergraduate and postgraduate studies.</p>
          
          <div className="universities-grid">
            <div className="university-card">
              <h3>University System Overview</h3>
              <p><strong>Types:</strong> Public universities, private universities, international branch campuses</p>
              <p><strong>Degrees Offered:</strong> Bachelor's, Master's, PhD, Graduate Certificates/Diplomas</p>
              <p><strong>Duration:</strong> Bachelor's (3-4 years), Master's (1-2 years), PhD (3-4 years)</p>
              <p><strong>Academic Year:</strong> February to November (2 semesters)</p>
            </div>
            
            <div className="university-card">
              <h3>Academic Requirements</h3>
              <p><strong>Undergraduate:</strong> High school diploma with minimum GPA (varies by university)</p>
              <p><strong>Postgraduate:</strong> Bachelor's degree with minimum GPA (usually 3.0/4.0)</p>
              <p><strong>Research Programs:</strong> Strong academic background and research proposal</p>
              <p><strong>Prerequisites:</strong> Subject-specific requirements for certain programs</p>
            </div>
            
            <div className="university-card">
              <h3>English Language Requirements</h3>
              <p><strong>IELTS:</strong> 6.0–7.0 overall (depending on program)</p>
              <p><strong>TOEFL:</strong> 80–100 (depending on program)</p>
              <p><strong>PTE Academic:</strong> 50–65 (depending on program)</p>
              <p><strong>Cambridge English:</strong> 169–185 (depending on program)</p>
            </div>
            
            <div className="university-card">
              <h3>Intake Periods</h3>
              <p><strong>Semester 1:</strong> February/March start</p>
              <p><strong>Semester 2:</strong> July/August start</p>
              <p><strong>Summer Session:</strong> November/December (limited programs)</p>
              <p><strong>Application Deadlines:</strong> 6-12 months before intake</p>
            </div>
            
            <div className="university-card">
              <h3>Tuition Fees</h3>
              <p><strong>Undergraduate:</strong> AUD 20,000–45,000/year</p>
              <p><strong>Postgraduate:</strong> AUD 22,000–50,000/year</p>
              <p><strong>PhD:</strong> AUD 25,000–55,000/year</p>
              <p><strong>Scholarships:</strong> Available for high-achieving students</p>
            </div>
            
            <div className="university-card">
              <h3>Popular Study Areas</h3>
              <p><strong>Business:</strong> MBA, Finance, Marketing, International Business</p>
              <p><strong>Engineering:</strong> Civil, Mechanical, Electrical, Software</p>
              <p><strong>Healthcare:</strong> Medicine, Nursing, Public Health, Pharmacy</p>
              <p><strong>Arts:</strong> Design, Media, Film, Creative Arts</p>
            </div>
          </div>
        </section>

        {/* Colleges Section */}
        <section id="colleges" className="guide-section">
          <h2>🎓 Colleges in Australia</h2>
          <p>Discover TAFE institutions and vocational colleges offering practical, career-focused education.</p>
          
          <div className="colleges-grid">
            <div className="college-card">
              <h3>TAFE System Overview</h3>
              <p><strong>Types:</strong> Technical and Further Education institutions</p>
              <p><strong>Programs Offered:</strong> Certificates, Diplomas, Advanced Diplomas</p>
              <p><strong>Duration:</strong> 6 months to 2 years</p>
              <p><strong>Focus:</strong> Practical skills and industry training</p>
            </div>
            
            <div className="college-card">
              <h3>Academic Requirements</h3>
              <p><strong>Certificate Programs:</strong> High school completion or equivalent</p>
              <p><strong>Diploma Programs:</strong> High school diploma with basic skills</p>
              <p><strong>Advanced Diplomas:</strong> Previous relevant study or work experience</p>
              <p><strong>Prerequisites:</strong> Basic literacy and numeracy skills</p>
            </div>
            
            <div className="college-card">
              <h3>English Language Requirements</h3>
              <p><strong>IELTS:</strong> 5.5–6.0 overall (depending on program)</p>
              <p><strong>TOEFL:</strong> 60–80 (depending on program)</p>
              <p><strong>PTE Academic:</strong> 42–50 (depending on program)</p>
              <p><strong>Cambridge English:</strong> 154–169 (depending on program)</p>
            </div>
            
            <div className="college-card">
              <h3>Intake Periods</h3>
              <p><strong>Semester 1:</strong> February start</p>
              <p><strong>Semester 2:</strong> July start</p>
              <p><strong>Rolling Intakes:</strong> Some programs offer multiple start dates</p>
              <p><strong>Application Deadlines:</strong> 3-6 months before intake</p>
            </div>
            
            <div className="college-card">
              <h3>Tuition Fees</h3>
              <p><strong>Certificate Programs:</strong> AUD 8,000–15,000/year</p>
              <p><strong>Diploma Programs:</strong> AUD 10,000–20,000/year</p>
              <p><strong>Advanced Diplomas:</strong> AUD 12,000–25,000/year</p>
              <p><strong>Government Subsidies:</strong> Available for eligible students</p>
            </div>
            
            <div className="college-card">
              <h3>Popular Study Areas</h3>
              <p><strong>Trades:</strong> Plumbing, Electrical, Carpentry, Automotive</p>
              <p><strong>Business:</strong> Business Administration, Accounting, Marketing</p>
              <p><strong>Healthcare:</strong> Nursing, Aged Care, Disability Support</p>
              <p><strong>Technology:</strong> IT, Web Development, Digital Media</p>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section id="eligibility" className="guide-section">
          <h2>📋 Eligibility Criteria</h2>
          <p>Learn about academic requirements, English language tests, and visa application processes.</p>
          
          <div className="eligibility-cards">
            <div className="eligibility-card">
              <h4>Academic Requirements</h4>
              <p><strong>Undergraduate:</strong> High school diploma with minimum GPA requirements</p>
              <p><strong>Postgraduate:</strong> Bachelor's degree with minimum GPA (usually 3.0/4.0)</p>
              <p><strong>Research Programs:</strong> Strong academic background and research proposal</p>
              <p><strong>Vocational Courses:</strong> High school completion or equivalent</p>
              <p><strong>Prerequisites:</strong> Subject-specific requirements for certain programs</p>
              <p><strong>Portfolio:</strong> Required for creative arts and design programs</p>
            </div>
            
            <div className="eligibility-card">
              <h4>English Language Requirements</h4>
              <p><strong>IELTS:</strong> 6.0–7.0 overall (depending on program)</p>
              <p><strong>TOEFL:</strong> 80–100 (depending on program)</p>
              <p><strong>PTE Academic:</strong> 50–65 (depending on program)</p>
              <p><strong>Cambridge English:</strong> 169–185 (depending on program)</p>
              <p><strong>OET:</strong> Accepted for healthcare programs</p>
              <p><strong>Test Validity:</strong> Results must be within 2 years of application</p>
            </div>
            
            <div className="eligibility-card">
              <h4>Visa Requirements</h4>
              <p><strong>Student Visa (Subclass 500):</strong> Required for all international students</p>
              <p><strong>Financial Evidence:</strong> Proof of sufficient funds for tuition and living expenses</p>
              <p><strong>Health Insurance:</strong> Overseas Student Health Cover (OSHC) mandatory</p>
              <p><strong>Health Requirements:</strong> Medical examination may be required</p>
              <p><strong>Character Requirements:</strong> Police clearance certificate</p>
              <p><strong>Genuine Temporary Entrant:</strong> Must demonstrate intention to return home</p>
            </div>
            
            <div className="eligibility-card">
              <h4>Required Documents</h4>
              <p><strong>Academic:</strong> Transcripts and certificates (translated and certified)</p>
              <p><strong>Language:</strong> English language test results</p>
              <p><strong>Personal:</strong> Statement of Purpose (SOP)</p>
              <p><strong>References:</strong> Letters of Recommendation (2-3)</p>
              <p><strong>Professional:</strong> CV/Resume</p>
              <p><strong>Financial:</strong> Bank statements, sponsorship letters</p>
              <p><strong>Travel:</strong> Passport copy (valid for 6+ months)</p>
              <p><strong>Insurance:</strong> Health insurance certificate</p>
              <p><strong>Creative:</strong> Portfolio (for creative programs)</p>
              <p><strong>Research:</strong> Research proposal (for research programs)</p>
            </div>
          </div>
        </section>

        {/* Useful Resources Section - Moved to Bottom */}
        <section id="resources" className="guide-section">
          <h2>📚 Useful Resources</h2>
          <ul className="resources-list">
            <li><a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500" target="_blank" rel="noopener noreferrer">Official Student Visa Information</a></li>
            <li><a href="https://www.studyaustralia.gov.au/" target="_blank" rel="noopener noreferrer">Study in Australia Official Website</a></li>
            <li><a href="https://cricos.education.gov.au/" target="_blank" rel="noopener noreferrer">CRICOS - Course Registration</a></li>
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

export default StudyGuideAustralia; 