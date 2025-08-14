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
    { href: '#why-choose', label: 'Why Choose Australia' },
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
        <h1>Study in Australia – <span>Your Complete Guide to a Brighter Future</span> </h1>
        <p className="subtitle">Your Gateway to World-Class Education, Career Growth & a New Life Abroad</p>
        
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

      {/* Australia Image Section */}
      <div className="australia-image-section">
        <div className="australia-image-container">
          <img src="/australia.jpg" alt="Australia Study Destination" className="australia-image" />
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
            <li><strong>Universities:</strong> Undergraduate, postgraduate, and research degrees under the Australian Qualifications Framework (AQF)</li>
            <li><strong>Private Colleges:</strong> Certificate, Diploma, Undergraduate, postgraduate courses</li>
            <li><strong>TAFE & Vocational Courses:</strong> Short, skill-based programs in trades and technical fields with strong job demand</li>
            <li><strong>Pathway & English Programs:</strong> Great for students needing academic or language preparation</li>
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

        <section id="pr" className="guide-section">
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

        <section id="life" className="guide-section">
          <h2>Life in Australia as an International Student</h2>
          <p>Living in Australia is exciting, safe, and full of new experiences.</p>
          <ul className="life-list">
            <li>Enjoy weekend getaways to beaches and national parks</li>
            <li>Explore diverse cuisines and cultural festivals</li>
            <li>Build a global network of friends</li>
            <li>Access 24/7 student support services on-campus</li>
          </ul>
        </section>

        <section id="fit" className="guide-section">
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
          <p>Let's connect today and start planning your future in Australia.</p>
          <p>Your dream is closer than you think—and we're here to guide every step.</p>
        </section>

        <section id="universities" className="guide-section">
          <h2>🏛️ Universities in Australia</h2>
          <p>Explore world-class universities and research institutions for undergraduate and postgraduate studies.</p>

          <h3>University System Overview</h3>
          <ul>
            <li><b>Types:</b> Public universities, private universities, international branch campuses</li>
            <li><b>Degrees Offered:</b> Bachelor's, Master's, PhD, Graduate Certificates/Diplomas</li>
            <li><b>Duration:</b> Bachelor's (3-4 years), Master's (1-2 years), PhD (3-4 years)</li>
            <li><b>Academic Year:</b> February to November (2 semesters)</li>
          </ul>

          <h3>Academic Requirements</h3>
          <ul>
            <li><b>Undergraduate:</b> High school diploma with minimum GPA (varies by university)</li>
            <li><b>Postgraduate:</b> Bachelor's degree with minimum GPA (usually 3.0/4.0)</li>
            <li><b>Research Programs:</b> Strong academic background and research proposal</li>
            <li><b>Prerequisites:</b> Subject-specific requirements for certain programs</li>
          </ul>

          <h3>English Language Requirements</h3>
          <ul>
            <li><b>IELTS:</b> 6.0–7.0 overall</li>
            <li><b>TOEFL:</b> 80–100</li>
            <li><b>PTE Academic:</b> 50–65</li>
            <li><b>Cambridge English:</b> 169–185</li>
          </ul>

          <h3>Intake Periods</h3>
          <ul>
            <li><b>Semester 1:</b> February/March start</li>
            <li><b>Semester 2:</b> July/August start</li>
            <li><b>Summer Session:</b> November/December (limited programs)</li>
            <li><b>Application Deadlines:</b> 6-12 months before intake</li>
          </ul>

          <h3>Tuition Fees</h3>
          <ul>
            <li><b>Undergraduate:</b> AUD 20,000–45,000/year</li>
            <li><b>Postgraduate:</b> AUD 22,000–50,000/year</li>
            <li><b>PhD:</b> AUD 25,000–55,000/year</li>
            <li><b>Scholarships:</b> Available for high score achieving students</li>
          </ul>

          <h3>Popular Study Areas</h3>
          <ul>
            <li><b>Business:</b> MBA, Finance, Marketing, International Business</li>
            <li><b>Engineering:</b> Civil, Mechanical, Electrical, Software</li>
            <li><b>Healthcare:</b> Medicine, Nursing, Public Health, Pharmacy</li>
            <li><b>Arts:</b> Design, Media, Film, Creative Arts</li>
          </ul>
        </section>

        <section id="colleges" className="guide-section">
          <h2>🎓 Colleges in Australia</h2>
          <p>Discover TAFE institutions and vocational colleges offering practical, career-focused education.</p>

          <h3>TAFE System Overview</h3>
          <ul>
            <li><b>Types:</b> Technical and Further Education institutions</li>
            <li><b>Programs Offered:</b> Certificates, Diplomas, Advanced Diplomas</li>
            <li><b>Duration:</b> 6 months to 2 years</li>
            <li><b>Focus:</b> Practical skills and industry training</li>
          </ul>

          <h3>Academic Requirements</h3>
          <ul>
            <li><b>Certificate Programs:</b> High school completion or equivalent</li>
            <li><b>Diploma Programs:</b> High school diploma with basic skills</li>
            <li><b>Advanced Diplomas:</b> Previous relevant study or work experience</li>
            <li><b>Prerequisites:</b> Basic literacy and numeracy skills</li>
          </ul>

          <h3>English Language Requirements</h3>
          <ul>
            <li><b>IELTS:</b> 5.5–6.0 overall (depending on program)</li>
            <li><b>TOEFL:</b> 60–80 (depending on program)</li>
            <li><b>PTE Academic:</b> 42–50 (depending on program)</li>
            <li><b>Cambridge English:</b> 154–169 (depending on program)</li>
          </ul>

          <h3>Intake Periods</h3>
          <ul>
            <li><b>Semester 1:</b> February start</li>
            <li><b>Semester 2:</b> July start</li>
            <li><b>Rolling Intakes:</b> Some programs offer multiple start dates</li>
            <li><b>Application Deadlines:</b> 3-6 months before intake</li>
          </ul>

          <h3>Tuition Fees</h3>
          <ul>
            <li><b>Certificate Programs:</b> AUD 8,000–15,000/year</li>
            <li><b>Diploma Programs:</b> AUD 10,000–20,000/year</li>
            <li><b>Advanced Diplomas:</b> AUD 12,000–25,000/year</li>
            <li><b>Government Subsidies:</b> Available for eligible students</li>
          </ul>

          <h3>Popular Study Areas</h3>
          <ul>
            <li><b>Trades:</b> Plumbing, Electrical, Carpentry, Automotive</li>
            <li><b>Business:</b> Business Administration, Accounting, Marketing</li>
            <li><b>Healthcare:</b> Nursing, Aged Care, Disability Support</li>
            <li><b>Technology:</b> IT, Web Development, Digital Media</li>
          </ul>
        </section>

        <section id="eligibility" className="guide-section">
          <h2>📋 Eligibility Criteria</h2>
          <p>Learn about academic requirements, English language tests, and visa application processes.</p>

          <h3>Academic Requirements</h3>
          <ul>
            <li><b>Undergraduate:</b> High school diploma with minimum GPA requirements</li>
            <li><b>Postgraduate:</b> Bachelor's degree with minimum GPA (usually 3.0/4.0)</li>
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
            <li><b>OET:</b> Accepted for healthcare programs</li>
            <li><b>Test Validity:</b> Results must be within 2 years of application</li>
          </ul>

          <h3>Visa Requirements</h3>
          <ul>
            <li><b>Student Visa (Subclass 500):</b> Required for all international students</li>
            <li><b>Financial Evidence:</b> Proof of sufficient funds for tuition and living expenses</li>
            <li><b>Health Insurance:</b> Overseas Student Health Cover (OSHC) mandatory</li>
            <li><b>Health Requirements:</b> Medical examination may be required</li>
            <li><b>Character Requirements:</b> Police clearance certificate</li>
            <li><b>Genuine Temporary Entrant:</b> Must demonstrate intention to return home</li>
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