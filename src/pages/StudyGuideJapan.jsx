import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StudyGuide.css';

const StudyGuideJapan = () => {
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
        <h1>Study Guide - <span>Japan</span></h1>
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
          <h2>Welcome to Japan</h2>
          <p>At Titan Career Solutions, we believe studying in Japan is more than just earning a degree - it's a life-changing experience. Imagine learning in some of the world's most innovative universities, living in a country that perfectly balances tradition and technology, gaining international work experience, and even having the chance to settle down permanently.</p>
          <p>Japan isn't just about anime and sushi. It's one of the top choices for Nepalese and international students who want a future filled with opportunities, recognition, and success.</p>
        </section>

        <section className="guide-section">
          <h2>Why Choose Japan for Your Studies?</h2>
          <p>Here's why thousands of our students have chosen Japan—and why it might be the right choice for you too:</p>
          <ul className="benefits-list">
            <li><strong>🏆 Top-Ranked Universities:</strong> 5 of Asia's top 20 universities are in Japan</li>
            <li><strong>🛡️ Safe & Welcoming Environment:</strong> One of the world's safest countries</li>
            <li><strong>📋 Student-Friendly Policies:</strong> Policies supporting international students' interests</li>
            <li><strong>💼 Part-Time Work While You Study:</strong> Gain experience and support your living expenses</li>
            <li><strong>⏰ Post-Study Stay Options (1–5 years):</strong> A valuable head start to your international career</li>
            <li><strong>🏠 PR Pathways & Skilled Migration:</strong> A real chance to call Japan your permanent home</li>
            <li><strong>💰 Affordable Education & Scholarships:</strong> Lower tuition fees and generous funding</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Understanding Japan's Education System</h2>
          <p>Japan's education system is flexible, modern, and career-oriented. Whether you're finishing high school, completing your bachelor's, or switching careers, there's a pathway for you.</p>
          <ul className="education-list">
            <li><strong>🎓 Universities:</strong> Undergraduate, postgraduate, and research degrees under the Japanese Qualifications Framework</li>
            <li><strong>🔧 Vocational Schools:</strong> Short, skill-based programs in trades and technical fields with strong job demand</li>
            <li><strong>📚 Language Schools:</strong> Great for students needing Japanese language preparation</li>
          </ul>
          <p><strong>Most courses include internships and industry placements—so you get real-world experience before graduating.</strong></p>
        </section>

        <section className="guide-section">
          <h2>Top Cities for International Students</h2>
          <p>Each city has something special for students:</p>
          
          <ul className="cities-list">
            <li><strong>🏙️ Tokyo – Japan's Financial Powerhouse:</strong>
              <ul>
                <li>Largest and most iconic city in Japan</li>
                <li>Financial and business hub with excellent job opportunities</li>
                <li>Famous landmarks like Tokyo Tower and Shibuya Crossing</li>
                <li>World-class universities like University of Tokyo and Waseda University</li>
                <li>Fast-paced, global, and full of energy</li>
              </ul>
            </li>
            
            <li><strong>🎨 Osaka – Cultural Capital & Student Paradise:</strong>
              <ul>
                <li>Often ranked as one of Japan's most livable cities</li>
                <li>Creative arts scene, food culture, and diverse population</li>
                <li>Top universities like Osaka University and Kansai University</li>
                <li>Rich cultural and academic experience with festivals and sports events</li>
              </ul>
            </li>
            
            <li><strong>🏛️ Kyoto – Historic Capital & Learning Hub:</strong>
              <ul>
                <li>Former imperial capital with traditional charm and modern opportunities</li>
                <li>Lower living costs compared to Tokyo</li>
                <li>Growing sectors in tourism, technology, and culture</li>
                <li>Institutions like Kyoto University and Ritsumeikan University</li>
                <li>Famous temples, shrines, and cultural heritage</li>
              </ul>
            </li>
            
            <li><strong>🌊 Fukuoka – Gateway to Kyushu:</strong>
              <ul>
                <li>Budget-friendly, modern, and ideal for tech enthusiasts</li>
                <li>Growing startup ecosystem and technology sector</li>
                <li>Longer post-study work rights and cheaper accommodation</li>
                <li>Known for food, culture, and innovation</li>
                <li>Respected universities like Kyushu University</li>
              </ul>
            </li>
            
            <li><strong>🏔️ Sapporo – Northern Gateway:</strong>
              <ul>
                <li>Relaxed lifestyle with beautiful mountains and snow</li>
                <li>Growing economy driven by tourism, agriculture, and technology</li>
                <li>Regional area with unique cultural experiences</li>
                <li>Smaller class sizes and strong academic support</li>
                <li>Close-knit student communities</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Cost of Studying in Japan</h2>
          <p>We'll help you plan your budget wisely.</p>
          
          <ul className="cost-list">
            <li><strong>Tuition Fees (Annual Averages):</strong>
              <ul>
                <li>Undergraduate: ¥535,800–1,200,000</li>
                <li>Postgraduate: ¥535,800–1,500,000</li>
                <li>Vocational Schools: ¥400,000–800,000</li>
              </ul>
            </li>
            
            <li><strong>Living Expenses (Monthly Averages):</strong>
              <ul>
                <li>Accommodation: ¥50,000–150,000</li>
                <li>Food: ¥30,000–60,000</li>
                <li>Other (transport, utilities): ¥20,000–40,000</li>
              </ul>
            </li>
            
            <li><strong>Visa Requirement:</strong>
              <ul>
                <li>You must show proof of ¥1,000,000/year in living expenses for your visa</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Work While You Study</h2>
          <p>Japan allows international students to work up to 28 hours per week during academic sessions and unlimited hours during official breaks. This helps students support their living expenses, gain work experience, and improve soft skills.</p>
          
          <ul className="work-list">
            <li><strong>Common Part-Time Job Areas for Students:</strong>
              <ul>
                <li>🍽️ Cafés & Restaurants: Waitstaff, kitchen assistants, dishwashers</li>
                <li>🛍️ Retail Stores: Cashiers, sales assistants, stockroom helpers</li>
                <li>🚚 Delivery Services: Food or parcel delivery via platforms like Uber Eats</li>
                <li>📚 Tutoring & Academic Support: English tutoring, online tutoring, assignment help</li>
                <li>🛒 Convenience Stores: Cashiers, shelf stacking, customer service</li>
                <li>📞 Call Centers & Customer Service: Phone support, data entry, technical assistance</li>
                <li>📦 Warehouse & Packaging Jobs: Order picking, labeling, packing</li>
                <li>🧹 Cleaning & Housekeeping: Offices, hotels, homes, and commercial cleaning</li>
                <li>👴 Aged Care & Disability Support: Support workers (especially for students in healthcare)</li>
                <li>🎪 Event Staffing: Ushers, ticketing, set-up crew for concerts, conferences, and festivals</li>
              </ul>
            </li>
            <li><strong>Average pay:</strong> ¥1,000–1,500/hour</li>
            <li>We'll guide you on Resume and interview preparation and job search strategies after your visa approval!</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Post-Study Work & PR Opportunities</h2>
          <p>Japan is one of the few countries offering clear pathways to Permanent Residency (PR) for international graduates.</p>
          
          <ul className="pr-list">
            <li><strong>Work & PR Options Include:</strong>
              <ul>
                <li>Designated Activities Visa</li>
                <li>Skilled Labor Visa</li>
                <li>High-Skilled Professional Visa</li>
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
          <p>You don't have to do it alone—Japan offers numerous scholarships, and we'll help you apply:</p>
          <ul className="scholarship-list">
            <li>MEXT Scholarship</li>
            <li>JASSO Scholarship</li>
            <li>University-Specific Awards (e.g., University of Tokyo, Waseda)</li>
          </ul>
          <p>Scholarships can cover 25%–100% of your tuition based on your academic profile.</p>
        </section>

        <section className="guide-section">
          <h2>Step-by-Step Application & Visa Process</h2>
          <p>We'll walk with you through every step:</p>
          <ul className="process-list">
            <li><strong>Step 1:</strong> Choose the Right Course & University - Based on your goals and PR possibilities</li>
            <li><strong>Step 2:</strong> Prepare Your Documents - Transcripts, JLPT scores, SOP, CV</li>
            <li><strong>Step 3:</strong> Meet Entry Conditions - Academic/Japanese requirements, interviews</li>
            <li><strong>Step 4:</strong> Pay Tuition Fee & Get CoE - Certificate of Eligibility</li>
            <li><strong>Step 5:</strong> Buy Health Insurance - National Health Insurance</li>
            <li><strong>Step 6:</strong> Apply for Student Visa - Includes biometrics & financial evidence</li>
          </ul>
          <p><strong>Visa processing time: Typically 4–8 weeks</strong></p>
        </section>

        <section className="guide-section">
          <h2>Life in Japan as an International Student</h2>
          <p>Living in Japan is exciting, safe, and full of new experiences.</p>
          <ul className="life-list">
            <li>Enjoy weekend trips to temples, shrines, and natural hot springs</li>
            <li>Explore diverse cuisines and cultural festivals</li>
            <li>Build a global network of friends</li>
            <li>Access 24/7 student support services on-campus</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Is Japan the Right Fit for You?</h2>
          <p>If you're looking for:</p>
          <ul className="fit-list">
            <li>Globally respected education</li>
            <li>Job-ready skills & work experience</li>
            <li>Affordable and scholarship-friendly options</li>
            <li>Post-study stay & PR opportunities</li>
            <li>A safe, welcoming environment</li>
          </ul>
          <p>Then Japan might just be your perfect match.</p>
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
          <p>Let's connect today and start planning your future in Japan.</p>
          <p>Your dream is closer than you think—and we're here to guide every step.</p>
        </section>

        {/* Universities Section */}
        <section id="universities" className="guide-section">
          <h2>🏛️ Universities in Japan</h2>
          <p>Explore research-intensive universities offering undergraduate and graduate degrees with world-class facilities.</p>
          
          <div className="universities-grid">
            <div className="university-card">
              <h3>University System Overview</h3>
              <p><strong>Types:</strong> National universities, public universities, private universities</p>
              <p><strong>Degrees Offered:</strong> Bachelor's, Master's, PhD, Graduate Certificates/Diplomas</p>
              <p><strong>Duration:</strong> Bachelor's (4 years), Master's (2 years), PhD (3-5 years)</p>
              <p><strong>Academic Year:</strong> April to March (2 semesters)</p>
            </div>
            
            <div className="university-card">
              <h3>Academic Requirements</h3>
              <p><strong>Undergraduate:</strong> High school diploma with minimum GPA (varies by university)</p>
              <p><strong>Postgraduate:</strong> Bachelor's degree with minimum GPA (usually 3.0/4.0)</p>
              <p><strong>Research Programs:</strong> Strong academic background and research proposal</p>
              <p><strong>Prerequisites:</strong> Subject-specific requirements for certain programs</p>
            </div>
            
            <div className="university-card">
              <h3>Language Requirements</h3>
              <p><strong>Japanese Programs:</strong> JLPT N1 or N2 (depending on program)</p>
              <p><strong>English Programs:</strong> IELTS 6.0–7.0 or TOEFL 80–100</p>
              <p><strong>PTE Academic:</strong> 50–65 (for English programs)</p>
              <p><strong>Cambridge English:</strong> 169–185 (for English programs)</p>
            </div>
            
            <div className="university-card">
              <h3>Intake Periods</h3>
              <p><strong>Spring Semester:</strong> April start (main intake)</p>
              <p><strong>Fall Semester:</strong> September/October start (limited programs)</p>
              <p><strong>Summer Session:</strong> July/August (limited programs)</p>
              <p><strong>Application Deadlines:</strong> 6-12 months before intake</p>
            </div>
            
            <div className="university-card">
              <h3>Tuition Fees</h3>
              <p><strong>National Universities:</strong> ¥535,800/year (standardized)</p>
              <p><strong>Private Universities:</strong> ¥800,000–1,500,000/year</p>
              <p><strong>Postgraduate:</strong> ¥535,800–1,200,000/year</p>
              <p><strong>Scholarships:</strong> Available for high-achieving students</p>
            </div>
            
            <div className="university-card">
              <h3>Popular Study Areas</h3>
              <p><strong>Engineering:</strong> Mechanical, Electrical, Civil, Software</p>
              <p><strong>Business:</strong> MBA, Finance, Marketing, International Business</p>
              <p><strong>Technology:</strong> Information Technology, Robotics, AI</p>
              <p><strong>Arts:</strong> Design, Media, Film, Creative Arts</p>
            </div>
          </div>
        </section>

        {/* Colleges Section */}
        <section id="colleges" className="guide-section">
          <h2>🎓 Colleges in Japan</h2>
          <p>Discover vocational schools and specialized colleges offering practical, career-focused education.</p>
          
          <div className="colleges-grid">
            <div className="college-card">
              <h3>Vocational School System Overview</h3>
              <p><strong>Types:</strong> Vocational schools (senmon gakko), technical colleges</p>
              <p><strong>Programs Offered:</strong> Diplomas, Certificates, Specialized Training</p>
              <p><strong>Duration:</strong> 1-3 years (depending on program)</p>
              <p><strong>Focus:</strong> Practical skills and industry training</p>
            </div>
            
            <div className="college-card">
              <h3>Academic Requirements</h3>
              <p><strong>Certificate Programs:</strong> High school completion or equivalent</p>
              <p><strong>Diploma Programs:</strong> High school diploma with basic skills</p>
              <p><strong>Specialized Programs:</strong> Previous relevant study or work experience</p>
              <p><strong>Prerequisites:</strong> Basic literacy and numeracy skills</p>
            </div>
            
            <div className="college-card">
              <h3>Language Requirements</h3>
              <p><strong>Japanese Programs:</strong> JLPT N3 or N4 (depending on program)</p>
              <p><strong>English Programs:</strong> IELTS 5.5–6.0 or TOEFL 60–80</p>
              <p><strong>PTE Academic:</strong> 42–50 (for English programs)</p>
              <p><strong>Cambridge English:</strong> 154–169 (for English programs)</p>
            </div>
            
            <div className="college-card">
              <h3>Intake Periods</h3>
              <p><strong>Spring Semester:</strong> April start</p>
              <p><strong>Fall Semester:</strong> September/October start</p>
              <p><strong>Rolling Intakes:</strong> Some programs offer multiple start dates</p>
              <p><strong>Application Deadlines:</strong> 3-6 months before intake</p>
            </div>
            
            <div className="college-card">
              <h3>Tuition Fees</h3>
              <p><strong>Certificate Programs:</strong> ¥400,000–600,000/year</p>
              <p><strong>Diploma Programs:</strong> ¥500,000–800,000/year</p>
              <p><strong>Specialized Programs:</strong> ¥600,000–1,000,000/year</p>
              <p><strong>Government Support:</strong> Available for eligible students</p>
            </div>
            
            <div className="college-card">
              <h3>Popular Study Areas</h3>
              <p><strong>Technology:</strong> IT, Web Development, Digital Media</p>
              <p><strong>Business:</strong> Business Administration, Accounting, Marketing</p>
              <p><strong>Creative Arts:</strong> Design, Animation, Game Development</p>
              <p><strong>Healthcare:</strong> Nursing, Medical Technology, Health Sciences</p>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section id="eligibility" className="guide-section">
          <h2>📋 Eligibility Criteria</h2>
          <p>Learn about academic requirements, Japanese/English language tests, and visa application processes.</p>
          
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
              <h4>Language Requirements</h4>
              <p><strong>Japanese Programs:</strong> JLPT N1 or N2 (depending on program)</p>
              <p><strong>English Programs:</strong> IELTS 6.0–7.0 or TOEFL 80–100</p>
              <p><strong>PTE Academic:</strong> 50–65 (for English programs)</p>
              <p><strong>Cambridge English:</strong> 169–185 (for English programs)</p>
              <p><strong>Test Validity:</strong> Results must be within 2 years of application</p>
              <p><strong>Language Schools:</strong> May require basic Japanese proficiency</p>
            </div>
            
            <div className="eligibility-card">
              <h4>Visa Requirements</h4>
              <p><strong>Student Visa:</strong> Required for all international students</p>
              <p><strong>Financial Evidence:</strong> Proof of sufficient funds for tuition and living expenses</p>
              <p><strong>Health Insurance:</strong> National Health Insurance or private coverage</p>
              <p><strong>Health Requirements:</strong> Medical examination may be required</p>
              <p><strong>Character Requirements:</strong> Police clearance certificate</p>
              <p><strong>Certificate of Eligibility:</strong> Required from university</p>
            </div>
            
            <div className="eligibility-card">
              <h4>Required Documents</h4>
              <p><strong>Academic:</strong> Transcripts and certificates (translated and certified)</p>
              <p><strong>Language:</strong> Language test results (Japanese/English)</p>
              <p><strong>Personal:</strong> Statement of Purpose (SOP)</p>
              <p><strong>References:</strong> Letters of Recommendation (2-3)</p>
              <p><strong>Professional:</strong> CV/Resume</p>
              <p><strong>Financial:</strong> Bank statements, sponsorship letters</p>
              <p><strong>Travel:</strong> Passport copy (valid for 6+ months)</p>
              <p><strong>University:</strong> Certificate of Eligibility from university</p>
              <p><strong>Creative:</strong> Portfolio (for creative programs)</p>
              <p><strong>Research:</strong> Research proposal (for research programs)</p>
            </div>
          </div>
        </section>

        {/* Useful Resources Section - Moved to Bottom */}
        <section id="resources" className="guide-section">
          <h2>📚 Useful Resources</h2>
          <ul className="resources-list">
            <li><a href="https://www.mofa.go.jp/j_info/visit/visa/" target="_blank" rel="noopener noreferrer">Official Student Visa Information</a></li>
            <li><a href="https://www.studyinjapan.go.jp/" target="_blank" rel="noopener noreferrer">Study in Japan Official Website</a></li>
            <li><a href="https://www.jasso.go.jp/" target="_blank" rel="noopener noreferrer">Japan Student Services Organization</a></li>
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

export default StudyGuideJapan; 