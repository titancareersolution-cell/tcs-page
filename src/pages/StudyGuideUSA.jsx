import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StudyGuide.css';

const StudyGuideUSA = () => {
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
        <h1>Study Guide - <span>United States</span></h1>
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
          <h2>Welcome to the United States</h2>
          <p>At Titan Career Solutions, we believe studying in the United States is more than just earning a degree - it's a life-changing experience. Imagine learning in some of the world's most prestigious universities, living in a country with endless opportunities, gaining international work experience, and even having the chance to settle down permanently.</p>
          <p>The United States isn't just about Hollywood and fast food. It's one of the top choices for Nepalese and international students who want a future filled with opportunities, recognition, and success.</p>
        </section>

        <section className="guide-section">
          <h2>Why Choose the United States for Your Studies?</h2>
          <p>Here's why thousands of our students have chosen the United States—and why it might be the right choice for you too:</p>
          <ul className="benefits-list">
            <li><strong>🏆 Top-Ranked Universities:</strong> 8 of the world's top 10 universities are in the US</li>
            <li><strong>🛡️ Safe & Welcoming Environment:</strong> Over 1 million international students feel at home here</li>
            <li><strong>📋 Student-Friendly Policies:</strong> Policies supporting international students' interests</li>
            <li><strong>💼 Part-Time Work While You Study:</strong> Gain experience and support your living expenses</li>
            <li><strong>⏰ Post-Study Stay Options (1–3 years):</strong> A valuable head start to your international career</li>
            <li><strong>🏠 PR Pathways & Skilled Migration:</strong> A real chance to call the US your permanent home</li>
            <li><strong>💰 Generous Scholarships & Financial Aid:</strong> Extensive funding opportunities for international students</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Understanding the United States' Education System</h2>
          <p>The United States' education system is flexible, modern, and career-oriented. Whether you're finishing high school, completing your bachelor's, or switching careers, there's a pathway for you.</p>
          <ul className="education-list">
            <li><strong>🎓 Universities:</strong> Undergraduate, postgraduate, and research degrees under the US Qualifications Framework</li>
            <li><strong>🔧 Community Colleges:</strong> Short, skill-based programs in trades and technical fields with strong job demand</li>
            <li><strong>📚 Pathway & English Programs:</strong> Great for students needing academic or language preparation</li>
          </ul>
          <p><strong>Most courses include internships and industry placements—so you get real-world experience before graduating.</strong></p>
        </section>

        <section className="guide-section">
          <h2>Top Cities for International Students</h2>
          <p>Each city has something special for students:</p>
          
          <ul className="cities-list">
            <li><strong>🏙️ New York City – The Big Apple:</strong>
              <ul>
                <li>Largest and most iconic city in the United States</li>
                <li>Financial and business hub with excellent job opportunities</li>
                <li>Famous landmarks like Times Square and Central Park</li>
                <li>World-class universities like Columbia and NYU</li>
                <li>Fast-paced, global, and full of energy</li>
              </ul>
            </li>
            
            <li><strong>🌉 San Francisco – Tech Capital & Innovation:</strong>
              <ul>
                <li>Often ranked as one of the world's most innovative cities</li>
                <li>Technology hub with Silicon Valley connections</li>
                <li>Top universities like Stanford and UC Berkeley</li>
                <li>Rich cultural and academic experience with diverse population</li>
              </ul>
            </li>
            
            <li><strong>🌴 Los Angeles – Entertainment & Culture:</strong>
              <ul>
                <li>Entertainment capital with Hollywood and diverse culture</li>
                <li>Lower living costs compared to New York or San Francisco</li>
                <li>Growing sectors in entertainment, technology, and healthcare</li>
                <li>Institutions like UCLA and USC</li>
                <li>Beautiful beaches and year-round sunshine</li>
              </ul>
            </li>
            
            <li><strong>🏛️ Boston – Academic Excellence & History:</strong>
              <ul>
                <li>Budget-friendly, historic, and ideal for focused study</li>
                <li>Home to Harvard, MIT, and other prestigious institutions</li>
                <li>Longer post-study work rights and academic opportunities</li>
                <li>Known for research, innovation, and academic excellence</li>
                <li>Strong student community and intellectual environment</li>
              </ul>
            </li>
            
            <li><strong>🌃 Chicago – Windy City & Business Hub:</strong>
              <ul>
                <li>Relaxed lifestyle with beautiful architecture and lake views</li>
                <li>Growing economy driven by finance, technology, and healthcare</li>
                <li>Regional area with diverse opportunities</li>
                <li>Smaller class sizes and strong academic support</li>
                <li>Close-knit student communities</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Cost of Studying in the United States</h2>
          <p>We'll help you plan your budget wisely.</p>
          
          <ul className="cost-list">
            <li><strong>Tuition Fees (Annual Averages):</strong>
              <ul>
                <li>Undergraduate: USD 25,000–55,000</li>
                <li>Postgraduate: USD 30,000–70,000</li>
                <li>Community College: USD 8,000–15,000</li>
              </ul>
            </li>
            
            <li><strong>Living Expenses (Monthly Averages):</strong>
              <ul>
                <li>Accommodation: USD 800–2,000</li>
                <li>Food: USD 400–800</li>
                <li>Other (transport, utilities): USD 200–500</li>
              </ul>
            </li>
            
            <li><strong>Visa Requirement:</strong>
              <ul>
                <li>You must show proof of sufficient funds for tuition and living expenses</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Work While You Study</h2>
          <p>The United States allows international students to work up to 20 hours per week during academic sessions and unlimited hours during official breaks. This helps students support their living expenses, gain work experience, and improve soft skills.</p>
          
          <ul className="work-list">
            <li><strong>Common Part-Time Job Areas for Students:</strong>
              <ul>
                <li>🍽️ Cafés & Restaurants: Waitstaff, baristas, kitchen assistants, dishwashers</li>
                <li>🛍️ Retail Stores: Cashiers, sales assistants, stockroom helpers</li>
                <li>🚚 Delivery Services: Food or parcel delivery via platforms like Uber Eats, DoorDash</li>
                <li>📚 Tutoring & Academic Support: Peer tutoring, online tutoring, assignment help</li>
                <li>🛒 Supermarkets: Shelf stacking, checkout, customer service</li>
                <li>📞 Call Centers & Customer Service: Phone support, data entry, technical assistance</li>
                <li>📦 Warehouse & Packaging Jobs: Order picking, labeling, packing</li>
                <li>🧹 Cleaning & Housekeeping: Offices, hotels, homes, and commercial cleaning</li>
                <li>👴 Aged Care & Disability Support: Support workers (especially for students in healthcare)</li>
                <li>🎪 Event Staffing: Ushers, ticketing, set-up crew for concerts, conferences, and festivals</li>
              </ul>
            </li>
            <li><strong>Average pay:</strong> USD 10–20/hour</li>
            <li>We'll guide you on Resume and interview preparation and job search strategies after your visa approval!</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Post-Study Work & PR Opportunities</h2>
          <p>The United States is one of the few countries offering clear pathways to Permanent Residency (PR) for international graduates.</p>
          
          <ul className="pr-list">
            <li><strong>Work & PR Options Include:</strong>
              <ul>
                <li>Optional Practical Training (OPT)</li>
                <li>H-1B Visa Program</li>
                <li>Employment-Based Green Cards</li>
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
          <p>You don't have to do it alone—the United States offers numerous scholarships, and we'll help you apply:</p>
          <ul className="scholarship-list">
            <li>Fulbright Program</li>
            <li>University-Specific Merit Scholarships</li>
            <li>Private Foundation Awards (e.g., Gates, Rhodes)</li>
          </ul>
          <p>Scholarships can cover 25%–100% of your tuition based on your academic profile.</p>
        </section>

        <section className="guide-section">
          <h2>Step-by-Step Application & Visa Process</h2>
          <p>We'll walk with you through every step:</p>
          <ul className="process-list">
            <li><strong>Step 1:</strong> Choose the Right Course & University - Based on your goals and PR possibilities</li>
            <li><strong>Step 2:</strong> Prepare Your Documents - Transcripts, TOEFL/IELTS scores, SOP, CV</li>
            <li><strong>Step 3:</strong> Meet Entry Conditions - Academic/English requirements, interviews</li>
            <li><strong>Step 4:</strong> Pay Tuition Fee & Get I-20 - Certificate of Eligibility</li>
            <li><strong>Step 5:</strong> Pay SEVIS Fee - Student and Exchange Visitor Information System</li>
            <li><strong>Step 6:</strong> Apply for F-1 Student Visa - Includes biometrics & financial evidence</li>
          </ul>
          <p><strong>Visa processing time: Typically 2–4 weeks</strong></p>
        </section>

        <section className="guide-section">
          <h2>Life in the United States as an International Student</h2>
          <p>Living in the United States is exciting, safe, and full of new experiences.</p>
          <ul className="life-list">
            <li>Enjoy weekend trips to national parks and cultural attractions</li>
            <li>Explore diverse cuisines and cultural festivals</li>
            <li>Build a global network of friends</li>
            <li>Access 24/7 student support services on-campus</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Is the United States the Right Fit for You?</h2>
          <p>If you're looking for:</p>
          <ul className="fit-list">
            <li>Globally respected education</li>
            <li>Job-ready skills & work experience</li>
            <li>Extensive scholarship opportunities</li>
            <li>Post-study stay & PR opportunities</li>
            <li>A diverse, welcoming environment</li>
          </ul>
          <p>Then the United States might just be your perfect match.</p>
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
          <p>Let's connect today and start planning your future in the United States.</p>
          <p>Your dream is closer than you think—and we're here to guide every step.</p>
        </section>

        {/* Universities Section */}
        <section id="universities" className="guide-section">
          <h2>🏛️ Universities in the United States</h2>
          <p>Explore research-intensive universities offering undergraduate and graduate degrees with world-class facilities.</p>
          
          <div className="universities-grid">
            <div className="university-card">
              <h3>University System Overview</h3>
              <p><strong>Types:</strong> Public universities, private universities, Ivy League institutions</p>
              <p><strong>Degrees Offered:</strong> Bachelor's, Master's, PhD, Graduate Certificates/Diplomas</p>
              <p><strong>Duration:</strong> Bachelor's (4 years), Master's (1-2 years), PhD (4-6 years)</p>
              <p><strong>Academic Year:</strong> August to May (2 semesters)</p>
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
              <p><strong>TOEFL:</strong> 80–100 (depending on program)</p>
              <p><strong>IELTS:</strong> 6.0–7.0 overall (depending on program)</p>
              <p><strong>PTE Academic:</strong> 50–65 (depending on program)</p>
              <p><strong>Cambridge English:</strong> 169–185 (depending on program)</p>
            </div>
            
            <div className="university-card">
              <h3>Intake Periods</h3>
              <p><strong>Fall Semester:</strong> August/September start (main intake)</p>
              <p><strong>Spring Semester:</strong> January start (limited programs)</p>
              <p><strong>Summer Session:</strong> May/June (limited programs)</p>
              <p><strong>Application Deadlines:</strong> 8-12 months before intake</p>
            </div>
            
            <div className="university-card">
              <h3>Tuition Fees</h3>
              <p><strong>Undergraduate:</strong> USD 25,000–55,000/year</p>
              <p><strong>Postgraduate:</strong> USD 30,000–70,000/year</p>
              <p><strong>PhD:</strong> USD 35,000–80,000/year (often funded)</p>
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
          <h2>🎓 Colleges in the United States</h2>
          <p>Discover community colleges and technical institutions offering practical, career-focused education.</p>
          
          <div className="colleges-grid">
            <div className="college-card">
              <h3>Community College System Overview</h3>
              <p><strong>Types:</strong> Community colleges, technical colleges, vocational schools</p>
              <p><strong>Programs Offered:</strong> Associate Degrees, Certificates, Transfer Programs</p>
              <p><strong>Duration:</strong> 1-2 years (depending on program)</p>
              <p><strong>Focus:</strong> Practical skills and transfer preparation</p>
            </div>
            
            <div className="college-card">
              <h3>Academic Requirements</h3>
              <p><strong>Certificate Programs:</strong> High school completion or equivalent</p>
              <p><strong>Associate Degrees:</strong> High school diploma with basic skills</p>
              <p><strong>Transfer Programs:</strong> Previous relevant study or work experience</p>
              <p><strong>Prerequisites:</strong> Basic literacy and numeracy skills</p>
            </div>
            
            <div className="college-card">
              <h3>English Language Requirements</h3>
              <p><strong>TOEFL:</strong> 60–80 (depending on program)</p>
              <p><strong>IELTS:</strong> 5.5–6.0 overall (depending on program)</p>
              <p><strong>PTE Academic:</strong> 42–50 (depending on program)</p>
              <p><strong>Cambridge English:</strong> 154–169 (depending on program)</p>
            </div>
            
            <div className="college-card">
              <h3>Intake Periods</h3>
              <p><strong>Fall Semester:</strong> August start</p>
              <p><strong>Spring Semester:</strong> January start</p>
              <p><strong>Summer Session:</strong> May/June start</p>
              <p><strong>Application Deadlines:</strong> 3-6 months before intake</p>
            </div>
            
            <div className="college-card">
              <h3>Tuition Fees</h3>
              <p><strong>Certificate Programs:</strong> USD 5,000–10,000/year</p>
              <p><strong>Associate Degrees:</strong> USD 8,000–15,000/year</p>
              <p><strong>Transfer Programs:</strong> USD 10,000–20,000/year</p>
              <p><strong>Government Funding:</strong> Available for eligible students</p>
            </div>
            
            <div className="college-card">
              <h3>Popular Study Areas</h3>
              <p><strong>Technology:</strong> IT, Computer Science, Digital Media</p>
              <p><strong>Business:</strong> Business Administration, Accounting, Marketing</p>
              <p><strong>Healthcare:</strong> Nursing, Medical Technology, Health Sciences</p>
              <p><strong>Creative Arts:</strong> Design, Media Production, Animation</p>
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
              <p><strong>TOEFL:</strong> 80–100 (depending on program)</p>
              <p><strong>IELTS:</strong> 6.0–7.0 overall (depending on program)</p>
              <p><strong>PTE Academic:</strong> 50–65 (depending on program)</p>
              <p><strong>Cambridge English:</strong> 169–185 (depending on program)</p>
              <p><strong>Test Validity:</strong> Results must be within 2 years of application</p>
              <p><strong>Conditional Admission:</strong> May require English language preparation</p>
            </div>
            
            <div className="eligibility-card">
              <h4>Visa Requirements</h4>
              <p><strong>F-1 Student Visa:</strong> Required for all international students</p>
              <p><strong>Financial Evidence:</strong> Proof of sufficient funds for tuition and living expenses</p>
              <p><strong>SEVIS Fee:</strong> Student and Exchange Visitor Information System fee</p>
              <p><strong>Health Requirements:</strong> Medical examination may be required</p>
              <p><strong>Character Requirements:</strong> Police clearance certificate</p>
              <p><strong>I-20 Form:</strong> Required from university</p>
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
              <p><strong>University:</strong> I-20 form from university</p>
              <p><strong>Creative:</strong> Portfolio (for creative programs)</p>
              <p><strong>Research:</strong> Research proposal (for research programs)</p>
            </div>
          </div>
        </section>

        {/* Useful Resources Section - Moved to Bottom */}
        <section id="resources" className="guide-section">
          <h2>📚 Useful Resources</h2>
          <ul className="resources-list">
            <li><a href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html" target="_blank" rel="noopener noreferrer">Official Student Visa Information</a></li>
            <li><a href="https://studyinthestates.dhs.gov/" target="_blank" rel="noopener noreferrer">Study in the States Official Website</a></li>
            <li><a href="https://www.ed.gov/" target="_blank" rel="noopener noreferrer">US Department of Education</a></li>
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

export default StudyGuideUSA; 