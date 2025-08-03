import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StudyGuide.css';

const StudyGuideCanada = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
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
        <h1>Study Guide - <span>Canada</span></h1>
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
          <h2>Welcome to Canada</h2>
          <p>At Titan Career Solutions, we believe studying in Canada is more than just earning a degree - it's a life-changing experience. Imagine learning in some of the world's best universities, living in one of the safest and most welcoming countries, gaining international work experience, and even having the chance to settle down permanently.</p>
          <p>Canada isn't just about maple syrup and hockey. It's one of the top choices for Nepalese and international students who want a future filled with opportunities, recognition, and success.</p>
        </section>

        <section className="guide-section">
          <h2>Why Choose Canada for Your Studies?</h2>
          <p>Here's why thousands of our students have chosen Canada—and why it might be the right choice for you too:</p>
          <ul className="benefits-list">
            <li><strong>🏆 Top-Ranked Universities:</strong> 3 of the world's top 50 universities call Canada home</li>
            <li><strong>🛡️ Safe & Welcoming Environment:</strong> Over 500,000 international students feel at home here</li>
            <li><strong>📋 Student-Friendly Policies:</strong> Policies supporting international students' interests</li>
            <li><strong>💼 Part-Time Work While You Study:</strong> Gain experience and support your living expenses</li>
            <li><strong>⏰ Post-Study Stay Options (1–3 years):</strong> A valuable head start to your international career</li>
            <li><strong>🏠 PR Pathways & Skilled Migration:</strong> A real chance to call Canada your permanent home</li>
            <li><strong>💰 Cost-Effective & Scholarship-Friendly:</strong> Affordable education with generous scholarships</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Understanding Canada's Education System</h2>
          <p>Canada's education system is flexible, modern, and career-oriented. Whether you're finishing high school, completing your bachelor's, or switching careers, there's a pathway for you.</p>
          <ul className="education-list">
            <li><strong>🎓 Universities:</strong> Undergraduate, postgraduate, and research degrees under the Canadian Qualifications Framework</li>
            <li><strong>🔧 Colleges & Polytechnics:</strong> Short, skill-based programs in trades and technical fields with strong job demand</li>
            <li><strong>📚 Pathway & English Programs:</strong> Great for students needing academic or language preparation</li>
          </ul>
          <p><strong>Most courses include co-op programs and industry placements—so you get real-world experience before graduating.</strong></p>
        </section>

        <section className="guide-section">
          <h2>Top Cities for International Students</h2>
          <p>Each city has something special for students:</p>
          
          <ul className="cities-list">
            <li><strong>🏙️ Toronto – Canada's Financial Powerhouse:</strong>
              <ul>
                <li>Largest and most diverse city in Canada</li>
                <li>Financial and business hub with excellent job opportunities</li>
                <li>Famous CN Tower and multicultural neighborhoods</li>
                <li>World-class universities like University of Toronto and York University</li>
                <li>Fast-paced, global, and full of energy</li>
              </ul>
            </li>
            
            <li><strong>🎨 Vancouver – West Coast Paradise:</strong>
              <ul>
                <li>Often ranked as one of the world's most livable cities</li>
                <li>Beautiful mountains, ocean, and mild climate</li>
                <li>Top universities like University of British Columbia and SFU</li>
                <li>Rich cultural and outdoor experience with festivals and sports</li>
              </ul>
            </li>
            
            <li><strong>🏛️ Montreal – Cultural Capital & Student Paradise:</strong>
              <ul>
                <li>Bilingual city with European charm and North American opportunities</li>
                <li>Lower living costs compared to Toronto or Vancouver</li>
                <li>Growing sectors in tech, aerospace, and gaming</li>
                <li>Institutions like McGill University and Concordia University</li>
                <li>Rich cultural scene and festivals</li>
              </ul>
            </li>
            
            <li><strong>🌿 Calgary – Energy Hub & Outdoor Adventure:</strong>
              <ul>
                <li>Budget-friendly, clean, and ideal for outdoor enthusiasts</li>
                <li>Strong economy driven by energy, technology, and finance</li>
                <li>Close to Banff National Park and Rocky Mountains</li>
                <li>Known for friendly people and high quality of life</li>
                <li>Respected universities like University of Calgary</li>
              </ul>
            </li>
            
            <li><strong>🏖️ Ottawa – Government & Technology Hub:</strong>
              <ul>
                <li>Capital city with government and tech opportunities</li>
                <li>Growing economy in cybersecurity, AI, and clean tech</li>
                <li>Bilingual environment with French and English</li>
                <li>Smaller class sizes and strong academic support</li>
                <li>Close-knit student communities</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Cost of Studying in Canada</h2>
          <p>We'll help you plan your budget wisely.</p>
          
          <ul className="cost-list">
            <li><strong>Tuition Fees (Annual Averages):</strong>
              <ul>
                <li>Undergraduate: CAD 20,000–35,000</li>
                <li>Postgraduate: CAD 25,000–45,000</li>
                <li>College Programs: CAD 15,000–25,000</li>
              </ul>
            </li>
            
            <li><strong>Living Expenses (Monthly Averages):</strong>
              <ul>
                <li>Accommodation: CAD 800–1,800</li>
                <li>Food: CAD 400–800</li>
                <li>Other (transport, utilities): CAD 200–400</li>
              </ul>
            </li>
            
            <li><strong>Visa Requirement:</strong>
              <ul>
                <li>You must show proof of CAD 20,000/year in living expenses for your visa</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Work While You Study</h2>
          <p>Canada allows international students to work up to 20 hours per week during academic sessions and unlimited hours during official breaks. This helps students support their living expenses, gain work experience, and improve soft skills.</p>
          
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
            <li><strong>Average pay:</strong> CAD 15–25/hour</li>
            <li>We'll guide you on Resume and interview preparation and job search strategies after your visa approval!</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Post-Study Work & PR Opportunities</h2>
          <p>Canada is one of the few countries offering clear pathways to Permanent Residency (PR) for international graduates.</p>
          
          <ul className="pr-list">
            <li><strong>Work & PR Options Include:</strong>
              <ul>
                <li>Post-Graduation Work Permit (PGWP)</li>
                <li>Express Entry System</li>
                <li>Provincial Nominee Program (PNP)</li>
              </ul>
            </li>
            <li>Extra PR points if you study in high-demand areas or regional cities</li>
            
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
          <p>You don't have to do it alone—Canada offers numerous scholarships, and we'll help you apply:</p>
          <ul className="scholarship-list">
            <li>Vanier Canada Graduate Scholarships</li>
            <li>Banting Postdoctoral Fellowships</li>
            <li>University-Specific Awards (e.g., U of T, UBC, McGill)</li>
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
            <li><strong>Step 4:</strong> Pay Tuition Fee & Get Letter of Acceptance</li>
            <li><strong>Step 5:</strong> Buy Health Insurance - Provincial or private coverage</li>
            <li><strong>Step 6:</strong> Apply for Study Permit - Includes biometrics & financial evidence</li>
          </ul>
          <p><strong>Visa processing time: Typically 4–8 weeks</strong></p>
        </section>

        <section className="guide-section">
          <h2>Life in Canada as an International Student</h2>
          <p>Living in Canada is exciting, safe, and full of new experiences.</p>
          <ul className="life-list">
            <li>Enjoy weekend getaways to national parks and mountains</li>
            <li>Explore diverse cuisines and cultural festivals</li>
            <li>Build a global network of friends</li>
            <li>Access 24/7 student support services on-campus</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Is Canada the Right Fit for You?</h2>
          <p>If you're looking for:</p>
          <ul className="fit-list">
            <li>Globally respected education</li>
            <li>Job-ready skills & work experience</li>
            <li>Affordable and scholarship-friendly options</li>
            <li>Post-study stay & PR opportunities</li>
            <li>A multicultural, welcoming environment</li>
          </ul>
          <p>Then Canada might just be your perfect match.</p>
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
          <p>Let's connect today and start planning your future in Canada.</p>
          <p>Your dream is closer than you think—and we're here to guide every step.</p>
        </section>

        {/* Universities Section */}
        <section id="universities" className="guide-section">
          <h2>🏛️ Universities in Canada</h2>
          <p>Explore research-intensive universities offering undergraduate and graduate degrees with world-class facilities.</p>
          
          <div className="universities-grid">
            <div className="university-card">
              <h3>University System Overview</h3>
              <p><strong>Types:</strong> Public universities, private universities, research institutions</p>
              <p><strong>Degrees Offered:</strong> Bachelor's, Master's, PhD, Graduate Certificates/Diplomas</p>
              <p><strong>Duration:</strong> Bachelor's (3-4 years), Master's (1-2 years), PhD (4-6 years)</p>
              <p><strong>Academic Year:</strong> September to April (2 semesters)</p>
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
              <p><strong>Fall Semester:</strong> September start (main intake)</p>
              <p><strong>Winter Semester:</strong> January start (limited programs)</p>
              <p><strong>Summer Session:</strong> May/June (limited programs)</p>
              <p><strong>Application Deadlines:</strong> 8-12 months before intake</p>
            </div>
            
            <div className="university-card">
              <h3>Tuition Fees</h3>
              <p><strong>Undergraduate:</strong> CAD 20,000–35,000/year</p>
              <p><strong>Postgraduate:</strong> CAD 25,000–45,000/year</p>
              <p><strong>PhD:</strong> CAD 15,000–25,000/year (often funded)</p>
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
          <h2>🎓 Colleges in Canada</h2>
          <p>Discover applied learning institutions offering diplomas, certificates, and career-focused education.</p>
          
          <div className="colleges-grid">
            <div className="college-card">
              <h3>College System Overview</h3>
              <p><strong>Types:</strong> Community colleges, polytechnics, applied arts colleges</p>
              <p><strong>Programs Offered:</strong> Certificates, Diplomas, Advanced Diplomas, Degrees</p>
              <p><strong>Duration:</strong> 1-4 years (depending on program)</p>
              <p><strong>Focus:</strong> Applied learning and industry connections</p>
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
              <p><strong>Fall Semester:</strong> September start</p>
              <p><strong>Winter Semester:</strong> January start</p>
              <p><strong>Spring/Summer:</strong> May start (limited programs)</p>
              <p><strong>Application Deadlines:</strong> 6-12 months before intake</p>
            </div>
            
            <div className="college-card">
              <h3>Tuition Fees</h3>
              <p><strong>Certificate Programs:</strong> CAD 12,000–20,000/year</p>
              <p><strong>Diploma Programs:</strong> CAD 15,000–25,000/year</p>
              <p><strong>Advanced Diplomas:</strong> CAD 18,000–30,000/year</p>
              <p><strong>Government Funding:</strong> Available for eligible students</p>
            </div>
            
            <div className="college-card">
              <h3>Popular Study Areas</h3>
              <p><strong>Technology:</strong> IT, Software Development, Cybersecurity</p>
              <p><strong>Business:</strong> Business Administration, Accounting, Marketing</p>
              <p><strong>Healthcare:</strong> Nursing, Medical Technology, Health Sciences</p>
              <p><strong>Creative Arts:</strong> Design, Media Production, Animation</p>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section id="eligibility" className="guide-section">
          <h2>📋 Eligibility Criteria</h2>
          <p>Learn about academic requirements, English/French language tests, and Study Permit application processes.</p>
          
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
              <p><strong>English Programs:</strong> IELTS 6.0–7.0 or TOEFL 80–100</p>
              <p><strong>French Programs:</strong> TEF, TCF, or DELF/DALF</p>
              <p><strong>PTE Academic:</strong> 50–65 (for English programs)</p>
              <p><strong>Cambridge English:</strong> 169–185 (for English programs)</p>
              <p><strong>Test Validity:</strong> Results must be within 2 years of application</p>
              <p><strong>Bilingual Programs:</strong> May require both English and French</p>
            </div>
            
            <div className="eligibility-card">
              <h4>Visa Requirements</h4>
              <p><strong>Study Permit:</strong> Required for all international students</p>
              <p><strong>Financial Evidence:</strong> Proof of sufficient funds for tuition and living expenses</p>
              <p><strong>Health Insurance:</strong> Provincial health coverage or private insurance</p>
              <p><strong>Health Requirements:</strong> Medical examination may be required</p>
              <p><strong>Character Requirements:</strong> Police clearance certificate</p>
              <p><strong>Letter of Acceptance:</strong> Required from designated learning institution</p>
            </div>
            
            <div className="eligibility-card">
              <h4>Required Documents</h4>
              <p><strong>Academic:</strong> Transcripts and certificates (translated and certified)</p>
              <p><strong>Language:</strong> Language test results (English/French)</p>
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
            <li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html" target="_blank" rel="noopener noreferrer">Official Study Permit Information</a></li>
            <li><a href="https://www.educanada.ca/" target="_blank" rel="noopener noreferrer">Study in Canada Official Website</a></li>
            <li><a href="https://www.cicic.ca/" target="_blank" rel="noopener noreferrer">Canadian Information Centre for International Credentials</a></li>
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

export default StudyGuideCanada; 