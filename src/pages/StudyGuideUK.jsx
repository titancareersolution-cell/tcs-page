import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StudyGuide.css';

const StudyGuideUK = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  return (
    <div className="study-guide-page">
      <div className="study-guide-header">
        <h1>Study Guide - <span>United Kingdom</span></h1>
        <p className="subtitle">Your Gateway to World-Class Education, Career Growth & a New Life Abroad</p>
      </div>

      {/* Navigation Buttons */}
      <div className="guide-navigation">
        <div className="nav-buttons">
          <a href="#universities" className="nav-btn">Universities</a>
          <a href="#colleges" className="nav-btn">Colleges</a>
          <a href="#eligibility" className="nav-btn">Eligibility</a>
          <a href="#resources" className="nav-btn">Resources</a>
        </div>
      </div>

      <div className="study-guide-content">
        <section className="guide-section">
          <h2>Welcome to the United Kingdom</h2>
          <p>At Titan Career Solutions, we believe studying in the UK is more than just earning a degree - it's a life-changing experience. Imagine learning in some of the world's oldest and most prestigious universities, living in a country with rich history and culture, gaining international work experience, and even having the chance to settle down permanently.</p>
          <p>The UK isn't just about tea and Big Ben. It's one of the top choices for Nepalese and international students who want a future filled with opportunities, recognition, and success.</p>
        </section>

        <section className="guide-section">
          <h2>Why Choose the UK for Your Studies?</h2>
          <p>Here's why thousands of our students have chosen the UK—and why it might be the right choice for you too:</p>
          <ul className="benefits-list">
            <li><strong>🏆 Top-Ranked Universities:</strong> 4 of the world's top 10 universities are in the UK</li>
            <li><strong>🛡️ Safe & Welcoming Environment:</strong> Over 500,000 international students feel at home here</li>
            <li><strong>📋 Student-Friendly Policies:</strong> Policies supporting international students' interests</li>
            <li><strong>💼 Part-Time Work While You Study:</strong> Gain experience and support your living expenses</li>
            <li><strong>⏰ Post-Study Stay Options (2 years):</strong> A valuable head start to your international career</li>
            <li><strong>🏠 PR Pathways & Skilled Migration:</strong> A real chance to call the UK your permanent home</li>
            <li><strong>💰 Shorter Programs & Scholarships:</strong> 3-year degrees and generous funding opportunities</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Understanding the UK's Education System</h2>
          <p>The UK's education system is flexible, modern, and career-oriented. Whether you're finishing high school, completing your bachelor's, or switching careers, there's a pathway for you.</p>
          <ul className="education-list">
            <li><strong>🎓 Universities:</strong> Undergraduate, postgraduate, and research degrees under the UK Qualifications Framework</li>
            <li><strong>🔧 Colleges & Further Education:</strong> Short, skill-based programs in trades and technical fields with strong job demand</li>
            <li><strong>📚 Pathway & English Programs:</strong> Great for students needing academic or language preparation</li>
          </ul>
          <p><strong>Most courses include internships and industry placements—so you get real-world experience before graduating.</strong></p>
        </section>

        <section className="guide-section">
          <h2>Top Cities for International Students</h2>
          <p>Each city has something special for students:</p>
          
          <ul className="cities-list">
            <li><strong>🏙️ London – UK's Financial Powerhouse:</strong>
              <ul>
                <li>Largest and most iconic city in the UK</li>
                <li>Financial and business hub with excellent job opportunities</li>
                <li>Famous landmarks like Big Ben and Buckingham Palace</li>
                <li>World-class universities like UCL, LSE, and Imperial College</li>
                <li>Fast-paced, global, and full of energy</li>
              </ul>
            </li>
            
            <li><strong>🎨 Manchester – Industrial Heritage & Innovation:</strong>
              <ul>
                <li>Often ranked as one of the UK's most livable cities</li>
                <li>Creative arts scene, music culture, and diverse population</li>
                <li>Top universities like University of Manchester and Manchester Metropolitan</li>
                <li>Rich cultural and academic experience with festivals and sports events</li>
              </ul>
            </li>
            
            <li><strong>🏛️ Edinburgh – Historic Capital & Student Paradise:</strong>
              <ul>
                <li>Capital of Scotland with medieval charm and modern opportunities</li>
                <li>Lower living costs compared to London</li>
                <li>Growing sectors in finance, technology, and tourism</li>
                <li>Institutions like University of Edinburgh and Heriot-Watt University</li>
                <li>Famous Edinburgh Festival and rich cultural heritage</li>
              </ul>
            </li>
            
            <li><strong>🎓 Oxford – Academic Excellence & Tradition:</strong>
              <ul>
                <li>Home to the world's oldest university</li>
                <li>Historic architecture and academic prestige</li>
                <li>University of Oxford and Oxford Brookes University</li>
                <li>Smaller, more intimate student experience</li>
                <li>Rich academic and cultural heritage</li>
              </ul>
            </li>
            
            <li><strong>🎭 Cambridge – Innovation & Learning:</strong>
              <ul>
                <li>Historic university town with modern innovation</li>
                <li>University of Cambridge and Anglia Ruskin University</li>
                <li>Growing tech sector and research opportunities</li>
                <li>Beautiful architecture and river setting</li>
                <li>Close-knit academic community</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Cost of Studying in the UK</h2>
          <p>We'll help you plan your budget wisely.</p>
          
          <ul className="cost-list">
            <li><strong>Tuition Fees (Annual Averages):</strong>
              <ul>
                <li>Undergraduate: £10,000–38,000</li>
                <li>Postgraduate: £12,000–45,000</li>
                <li>College Programs: £6,000–15,000</li>
              </ul>
            </li>
            
            <li><strong>Living Expenses (Monthly Averages):</strong>
              <ul>
                <li>Accommodation: £500–1,500</li>
                <li>Food: £200–400</li>
                <li>Other (transport, utilities): £100–300</li>
              </ul>
            </li>
            
            <li><strong>Visa Requirement:</strong>
              <ul>
                <li>You must show proof of £1,334/month in living expenses for your visa</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Work While You Study</h2>
          <p>The UK allows international students to work up to 20 hours per week during academic sessions and unlimited hours during official breaks. This helps students support their living expenses, gain work experience, and improve soft skills.</p>
          
          <ul className="work-list">
            <li><strong>Common Part-Time Job Areas for Students:</strong>
              <ul>
                <li>🍽️ Cafés & Restaurants: Waitstaff, baristas, kitchen assistants, dishwashers</li>
                <li>🛍️ Retail Stores: Cashiers, sales assistants, stockroom helpers</li>
                <li>🚚 Delivery Services: Food or parcel delivery via platforms like Deliveroo, Uber Eats</li>
                <li>📚 Tutoring & Academic Support: Peer tutoring, online tutoring, assignment help</li>
                <li>🛒 Supermarkets: Shelf stacking, checkout, customer service</li>
                <li>📞 Call Centers & Customer Service: Phone support, data entry, technical assistance</li>
                <li>📦 Warehouse & Packaging Jobs: Order picking, labeling, packing</li>
                <li>🧹 Cleaning & Housekeeping: Offices, hotels, homes, and commercial cleaning</li>
                <li>👴 Aged Care & Disability Support: Support workers (especially for students in healthcare)</li>
                <li>🎪 Event Staffing: Ushers, ticketing, set-up crew for concerts, conferences, and festivals</li>
              </ul>
            </li>
            <li><strong>Average pay:</strong> £8–12/hour</li>
            <li>We'll guide you on Resume and interview preparation and job search strategies after your visa approval!</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Post-Study Work & PR Opportunities</h2>
          <p>The UK is one of the few countries offering clear pathways to Permanent Residency (PR) for international graduates.</p>
          
          <ul className="pr-list">
            <li><strong>Work & PR Options Include:</strong>
              <ul>
                <li>Graduate Visa (2 years)</li>
                <li>Skilled Worker Visa</li>
                <li>Global Talent Visa</li>
              </ul>
            </li>
            <li>Extra PR points if you study in high-demand areas or complete internships</li>
            
            <li><strong>Popular PR-Friendly Courses:</strong>
              <ul>
                <li>🏥 Healthcare: Nursing, Public Health</li>
                <li>💻 IT & Cybersecurity: Information Technology, Cybersecurity</li>
                <li>⚙️ Engineering: Civil, Mechanical, Electrical</li>
                <li>💰 Accounting & Finance: Accounting, Finance, Business</li>
                <li>👨‍🏫 Teaching & Early Childhood Education: Education, Early Childhood</li>
                <li>🔧 Vocational Trades: Plumbing, Carpentry, Mechanics</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Scholarships You Can Apply For</h2>
          <p>You don't have to do it alone—the UK offers numerous scholarships, and we'll help you apply:</p>
          <ul className="scholarship-list">
            <li>Chevening Scholarships</li>
            <li>Commonwealth Scholarships</li>
            <li>University-Specific Awards (e.g., Oxford, Cambridge, Imperial)</li>
          </ul>
          <p>Scholarships can cover 25%–100% of your tuition based on your academic profile.</p>
        </section>

        <section className="guide-section">
          <h2>Step-by-Step Application & Visa Process</h2>
          <p>We'll walk with you through every step:</p>
          <ul className="process-list">
            <li><strong>Step 1:</strong> Choose the Right Course & University - Based on your goals and PR possibilities</li>
            <li><strong>Step 2:</strong> Prepare Your Documents - Transcripts, IELTS/PTE scores, SOP, CV</li>
            <li><strong>Step 3:</strong> Meet Entry Conditions - Academic/English requirements, interviews</li>
            <li><strong>Step 4:</strong> Pay Tuition Fee & Get CAS - Confirmation of Acceptance for Studies</li>
            <li><strong>Step 5:</strong> Buy Health Insurance - NHS surcharge or private coverage</li>
            <li><strong>Step 6:</strong> Apply for Student Visa (Tier 4) - Includes biometrics & financial evidence</li>
          </ul>
          <p><strong>Visa processing time: Typically 3–6 weeks</strong></p>
        </section>

        <section className="guide-section">
          <h2>Life in the UK as an International Student</h2>
          <p>Living in the UK is exciting, safe, and full of new experiences.</p>
          <ul className="life-list">
            <li>Enjoy weekend trips to historic cities and countryside</li>
            <li>Explore diverse cuisines and cultural festivals</li>
            <li>Build a global network of friends</li>
            <li>Access 24/7 student support services on-campus</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Is the UK the Right Fit for You?</h2>
          <p>If you're looking for:</p>
          <ul className="fit-list">
            <li>Globally respected education</li>
            <li>Job-ready skills & work experience</li>
            <li>Shorter, intensive programs</li>
            <li>Post-study stay & PR opportunities</li>
            <li>A multicultural, welcoming environment</li>
          </ul>
          <p>Then the UK might just be your perfect match.</p>
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
          <p>Let's connect today and start planning your future in the UK.</p>
          <p>Your dream is closer than you think—and we're here to guide every step.</p>
        </section>

        {/* Universities Section */}
        <section id="universities" className="guide-section">
          <h2>🏛️ Universities in the UK</h2>
          <p>Explore world-class universities and research institutions for undergraduate and postgraduate studies.</p>
          
          <div className="universities-grid">
            <div className="university-card">
              <h3>University System Overview</h3>
              <p><strong>Types:</strong> Public universities, private universities, Russell Group institutions</p>
              <p><strong>Degrees Offered:</strong> Bachelor's, Master's, PhD, Graduate Certificates/Diplomas</p>
              <p><strong>Duration:</strong> Bachelor's (3 years), Master's (1 year), PhD (3-4 years)</p>
              <p><strong>Academic Year:</strong> September to June (3 terms)</p>
            </div>
            
            <div className="university-card">
              <h3>Academic Requirements</h3>
              <p><strong>Undergraduate:</strong> A-levels or equivalent with minimum grades</p>
              <p><strong>Postgraduate:</strong> Bachelor's degree with minimum 2:1 classification</p>
              <p><strong>Research Programs:</strong> Strong academic background and research proposal</p>
              <p><strong>Prerequisites:</strong> Subject-specific requirements for certain programs</p>
            </div>
            
            <div className="university-card">
              <h3>English Language Requirements</h3>
              <p><strong>IELTS:</strong> 6.0–7.5 overall (depending on program)</p>
              <p><strong>TOEFL:</strong> 80–110 (depending on program)</p>
              <p><strong>PTE Academic:</strong> 50–75 (depending on program)</p>
              <p><strong>Cambridge English:</strong> 169–191 (depending on program)</p>
            </div>
            
            <div className="university-card">
              <h3>Intake Periods</h3>
              <p><strong>Autumn Term:</strong> September start (main intake)</p>
              <p><strong>Spring Term:</strong> January start (limited programs)</p>
              <p><strong>Summer Term:</strong> April start (limited programs)</p>
              <p><strong>Application Deadlines:</strong> 6-12 months before intake</p>
            </div>
            
            <div className="university-card">
              <h3>Tuition Fees</h3>
              <p><strong>Undergraduate:</strong> £10,000–38,000/year</p>
              <p><strong>Postgraduate:</strong> £12,000–45,000/year</p>
              <p><strong>PhD:</strong> £15,000–50,000/year (often funded)</p>
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
          <h2>🎓 Colleges in the UK</h2>
          <p>Discover further education colleges and vocational institutions offering practical, career-focused education.</p>
          
          <div className="colleges-grid">
            <div className="college-card">
              <h3>College System Overview</h3>
              <p><strong>Types:</strong> Further education colleges, sixth form colleges, specialist colleges</p>
              <p><strong>Programs Offered:</strong> A-levels, BTECs, NVQs, Foundation Degrees</p>
              <p><strong>Duration:</strong> 1-3 years (depending on program)</p>
              <p><strong>Focus:</strong> Vocational training and academic preparation</p>
            </div>
            
            <div className="college-card">
              <h3>Academic Requirements</h3>
              <p><strong>A-level Programs:</strong> GCSEs with minimum grades (usually 5 GCSEs)</p>
              <p><strong>BTEC Programs:</strong> GCSEs or equivalent qualifications</p>
              <p><strong>Foundation Programs:</strong> High school completion or equivalent</p>
              <p><strong>Prerequisites:</strong> Subject-specific requirements for certain programs</p>
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
              <p><strong>Autumn Term:</strong> September start</p>
              <p><strong>Spring Term:</strong> January start (limited programs)</p>
              <p><strong>Rolling Intakes:</strong> Some programs offer multiple start dates</p>
              <p><strong>Application Deadlines:</strong> 3-6 months before intake</p>
            </div>
            
            <div className="college-card">
              <h3>Tuition Fees</h3>
              <p><strong>A-level Programs:</strong> £8,000–15,000/year</p>
              <p><strong>BTEC Programs:</strong> £6,000–12,000/year</p>
              <p><strong>Foundation Programs:</strong> £7,000–14,000/year</p>
              <p><strong>Government Funding:</strong> Available for eligible students</p>
            </div>
            
            <div className="college-card">
              <h3>Popular Study Areas</h3>
              <p><strong>Academic:</strong> A-levels in Sciences, Arts, Business</p>
              <p><strong>Vocational:</strong> BTECs in Business, Technology, Health</p>
              <p><strong>Creative:</strong> Art & Design, Media, Performing Arts</p>
              <p><strong>Technical:</strong> Engineering, IT, Construction</p>
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
              <p><strong>Undergraduate:</strong> A-levels or equivalent with minimum grades</p>
              <p><strong>Postgraduate:</strong> Bachelor's degree with minimum 2:1 classification</p>
              <p><strong>Research Programs:</strong> Strong academic background and research proposal</p>
              <p><strong>Foundation Courses:</strong> High school completion or equivalent</p>
              <p><strong>Prerequisites:</strong> Subject-specific requirements for certain programs</p>
              <p><strong>Portfolio:</strong> Required for creative arts and design programs</p>
            </div>
            
            <div className="eligibility-card">
              <h4>English Language Requirements</h4>
              <p><strong>IELTS:</strong> 6.0–7.5 overall (depending on program)</p>
              <p><strong>TOEFL:</strong> 80–110 (depending on program)</p>
              <p><strong>PTE Academic:</strong> 50–75 (depending on program)</p>
              <p><strong>Cambridge English:</strong> 169–191 (depending on program)</p>
              <p><strong>Test Validity:</strong> Results must be within 2 years of application</p>
              <p><strong>UKVI IELTS:</strong> Required for visa applications</p>
            </div>
            
            <div className="eligibility-card">
              <h4>Visa Requirements</h4>
              <p><strong>Student Visa (Tier 4):</strong> Required for all international students</p>
              <p><strong>Financial Evidence:</strong> Proof of sufficient funds for tuition and living expenses</p>
              <p><strong>Health Insurance:</strong> NHS surcharge or private insurance</p>
              <p><strong>Health Requirements:</strong> Medical examination may be required</p>
              <p><strong>Character Requirements:</strong> Police clearance certificate</p>
              <p><strong>CAS Letter:</strong> Required from university</p>
            </div>
            
            <div className="eligibility-card">
              <h4>Required Documents</h4>
              <p><strong>Academic:</strong> Transcripts and certificates (translated and certified)</p>
              <p><strong>Language:</strong> English language test results</p>
              <p><strong>Personal:</strong> Personal Statement</p>
              <p><strong>References:</strong> Letters of Recommendation (2-3)</p>
              <p><strong>Professional:</strong> CV/Resume</p>
              <p><strong>Financial:</strong> Bank statements, sponsorship letters</p>
              <p><strong>Travel:</strong> Passport copy (valid for 6+ months)</p>
              <p><strong>University:</strong> CAS letter from university</p>
              <p><strong>Creative:</strong> Portfolio (for creative programs)</p>
              <p><strong>Research:</strong> Research proposal (for research programs)</p>
            </div>
          </div>
        </section>

        {/* Useful Resources Section - Moved to Bottom */}
        <section id="resources" className="guide-section">
          <h2>📚 Useful Resources</h2>
          <ul className="resources-list">
            <li><a href="https://www.gov.uk/student-visa" target="_blank" rel="noopener noreferrer">Official Student Visa Information</a></li>
            <li><a href="https://study-uk.britishcouncil.org/" target="_blank" rel="noopener noreferrer">Study in the UK Official Website</a></li>
            <li><a href="https://www.ukcisa.org.uk/" target="_blank" rel="noopener noreferrer">UK Council for International Student Affairs</a></li>
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