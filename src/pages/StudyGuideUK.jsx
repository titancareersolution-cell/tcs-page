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

  const toggleMenu = () => setIsMenuOpen(open => !open);
  const closeMenu = () => setIsMenuOpen(false);

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
        <h1>Study in the UK – The Complete Guide for Nepalese Students</h1>
        <p className="subtitle">Your Pathway to World-Class Education, Career Growth & a Bright Future Abroad</p>

        {/* Quick Navigation (Hamburger style like Australia) */}
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

      {/* UK Image Section (reusing Australia image classes for styling consistency) */}
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
        {/* 1. Why Nepalese Students Choose the UK */}
        <section id="why-choose" className="guide-section">
          <h2>Why Nepalese Students Choose the UK</h2>
          <ul className="benefits-list">
            <li><strong>Top-Ranked Universities</strong> – Four of the world’s top 10 universities are in the UK (<a href="https://www.topuniversities.com/university-rankings/world-university-rankings/2025" target="_blank" rel="noopener noreferrer">QS 2025</a>).</li>
            <li><strong>Globally Recognised Degrees</strong> – UK qualifications are respected by employers worldwide.</li>
            <li><strong>Shorter Duration</strong> – 3-year bachelor’s and 1-year master’s save time and living costs.</li>
            <li><strong>Post-Study Work Visa</strong> – Graduate Route allows 2–3 years stay after graduation (<a href="https://www.gov.uk/graduate-visa" target="_blank" rel="noopener noreferrer">Official site</a>).</li>
            <li><strong>Clear PR Pathways</strong> – Skilled Worker Visa options leading to permanent residency (<a href="https://www.gov.uk/skilled-worker-visa" target="_blank" rel="noopener noreferrer">Official site</a>).</li>
            <li><strong>Multicultural & Safe Society</strong> – Over 600,000 international students call the UK home.</li>
            <li><strong>English Language Immersion</strong> – Improve language and communication skills in an English-speaking environment.</li>
          </ul>
        </section>

        {/* 2. Understanding the UK Education System */}
        <section id="education-system" className="guide-section">
          <h2>Understanding the UK Education System</h2>
          <p>The UK offers flexible, research-driven, and industry-focused education across multiple levels:</p>
          <ul className="education-list">
            <li><strong>Undergraduate (Bachelor’s)</strong> – 3 years (4 in Scotland)</li>
            <li><strong>Postgraduate (Master’s, MBA)</strong> – Usually 1 year</li>
            <li><strong>Doctorate (PhD)</strong> – 3–4 years</li>
            <li><strong>Foundation & Pathway Programs</strong> – 6–12 months of academic/English preparation</li>
            <li><strong>Vocational Qualifications (HNC/HND)</strong> – 1–2 years of industry-specific training</li>
          </ul>
          <h3>Applications</h3>
          <ul>
            <li><a href="https://www.ucas.com" target="_blank" rel="noopener noreferrer">UCAS</a> for most bachelor’s applications.</li>
            <li>Direct university applications for master’s and PhD.</li>
          </ul>
        </section>

        {/* 3. Top Student Cities & Their Advantages */}
        <section id="cities" className="guide-section">
          <h2>Top Student Cities & Their Advantages</h2>
          <ul className="cities-list">
            <li><strong>London</strong> – Networking, internships, cultural life, career opportunities. Cons: Highest living costs.</li>
            <li><strong>Manchester</strong> – Affordable, large student community, strong in media & tech.</li>
            <li><strong>Birmingham</strong> – Central, diverse industries, strong transport links.</li>
            <li><strong>Scotland (Edinburgh & Glasgow)</strong> – Academic excellence, scenic, lower living costs in Glasgow.</li>
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
          <h3>Tuition Fees (per year)</h3>
          <ul className="cost-list">
            <li><strong>Bachelor’s:</strong> £10,000–£25,000</li>
            <li><strong>Master’s:</strong> £12,000–£35,000</li>
            <li><strong>MBA/Medical:</strong> £25,000–£50,000</li>
              </ul>
          <h3>Living Costs (per month) – UKVI minimum requirements</h3>
              <ul>
            <li><strong>London:</strong> £1,334 (<a href="https://www.gov.uk/student-visa/money" target="_blank" rel="noopener noreferrer">Official source</a>)</li>
            <li><strong>Outside London:</strong> £1,023</li>
              </ul>
          <h3>Other Expenses</h3>
              <ul>
            <li><strong>Visa fee:</strong> £490 (<a href="https://www.gov.uk/student-visa" target="_blank" rel="noopener noreferrer">Official site</a>)</li>
            <li><strong>Immigration Health Surcharge (IHS):</strong> £776/year</li>
          </ul>
        </section>

        {/* 5. Working While Studying */}
        <section id="work" className="guide-section">
          <h2>Working While Studying</h2>
          <ul className="work-list">
            <li><strong>Work Limit:</strong> 20 hrs/week during term, full-time in vacations.</li>
            <li><strong>Popular Jobs:</strong> Retail, cafes, delivery, events, campus assistant roles.</li>
            <li><strong>Average Pay:</strong> £8–£12/hour (<a href="https://www.gov.uk/national-minimum-wage-rates" target="_blank" rel="noopener noreferrer">Gov.uk</a>)</li>
            <li><strong>Restrictions:</strong> No self-employment, professional sports, or public funds.</li>
          </ul>
        </section>

        {/* 6. Scholarships */}
        <section id="scholarships" className="guide-section">
          <h2>Scholarships for Nepalese Students</h2>
          <p>We guide you through applications for:</p>
          <ul className="scholarship-list">
            <li><a href="https://www.chevening.org" target="_blank" rel="noopener noreferrer">Chevening Scholarship</a></li>
            <li><a href="https://cscuk.fcdo.gov.uk" target="_blank" rel="noopener noreferrer">Commonwealth Scholarship</a></li>
            <li><a href="https://study-uk.britishcouncil.org/scholarships/great-scholarships" target="_blank" rel="noopener noreferrer">GREAT Scholarships</a></li>
            <li>University-specific merit scholarships (up to 50% tuition)</li>
          </ul>
        </section>

        {/* 7. Step-by-Step Journey */}
        <section id="application" className="guide-section">
          <h2>Step-by-Step Journey from Nepal to the UK</h2>
          <ol className="process-list">
            <li><strong>Research & Shortlist</strong> – Use UCAS or university websites.</li>
            <li><strong>Prepare Academic Proof</strong> – SEE/NEB transcripts, bachelor’s certificates, IELTS/PTE.</li>
            <li><strong>Apply & Get Offer</strong> – Conditional or unconditional.</li>
            <li><strong>Pay Deposit & Get CAS</strong> – Confirmation of Acceptance for Studies.</li>
            <li><strong>Prepare Finances</strong> – Bank statement/loan letter showing funds for 28 days.</li>
            <li><strong>Apply for Student Visa</strong> – Online form, biometrics, TB test (<a href="https://visa.vfsglobal.com/npl/en/gbr" target="_blank" rel="noopener noreferrer">VFS Nepal</a>).</li>
            <li><strong>Book Flights & Pre-Departure Prep</strong> – NOC from Nepal Government, packing, accommodation booking.</li>
            <li><strong>Arrive & Register</strong> – Collect BRP, attend induction, open bank account.</li>
          </ol>
        </section>

        {/* 8. Post-Study Work & PR Pathways */}
        <section id="pr" className="guide-section">
          <h2>Post-Study Work & PR Pathways</h2>
          <h3>Graduate Route Visa</h3>
          <ul className="pr-list">
            <li>2 years for Bachelor’s/Master’s graduates</li>
            <li>3 years for PhD graduates</li>
          </ul>
          <h3>Skilled Worker Visa</h3>
          <ul>
            <li>Switch from Graduate Route once you get a qualifying job.</li>
            <li>Apply for ILR (Permanent Residency) after 5 years (<a href="https://www.gov.uk/settle-in-the-uk" target="_blank" rel="noopener noreferrer">Gov.uk</a>).</li>
          </ul>
          <p><strong>PR-Friendly Fields:</strong> Healthcare, engineering, IT, data science, teaching.</p>
        </section>

        {/* 9. Life in the UK */}
        <section id="life" className="guide-section">
          <h2>Life in the UK for Nepalese Students</h2>
          <ul className="life-list">
            <li><strong>Healthcare:</strong> Access to NHS after IHS payment (<a href="https://www.nhs.uk/using-the-nhs/nhs-services/visiting-or-moving-to-england/" target="_blank" rel="noopener noreferrer">NHS</a>).</li>
            <li><strong>Culture & Food:</strong> Nepalese communities in London, Manchester, Reading.</li>
            <li><strong>Travel:</strong> Student discounts on rail/bus via 16–25 Railcard (<a href="https://www.16-25railcard.co.uk" target="_blank" rel="noopener noreferrer">Official site</a>).</li>
          </ul>
        </section>

        {/* 10. How Titan Career Solutions Helps */}
        <section id="get-started" className="guide-section">
          <h2>How Titan Career Solutions Helps You</h2>
          <ul className="services-list">
            <li>University & course selection based on budget, career, and PR prospects.</li>
            <li>Visa documentation & SOP guidance.</li>
            <li>Scholarship application support.</li>
            <li>Pre-departure briefing & NOC guidance.</li>
            <li>Post-arrival settlement assistance.</li>
          </ul>
        </section>

        <section id="eligibility" className="guide-section">
          <h2>📋 Eligibility Criteria</h2>
          <ul className="eligibility-list">
            <li><strong>Academic:</strong> SEE/NEB or Bachelor’s transcripts as applicable</li>
            <li><strong>English:</strong> IELTS/PTE as required by course</li>
            <li><strong>Financial:</strong> Funds for tuition + living costs (per UKVI)</li>
            <li><strong>Visa:</strong> CAS, TB test, biometrics</li>
          </ul>
        </section>

        <section id="resources" className="guide-section">
          <h2>📚 Useful Resources</h2>
          <ul className="resources-list">
            <li><a href="https://www.gov.uk/student-visa" target="_blank" rel="noopener noreferrer">Official Student Visa Information</a></li>
            <li><a href="https://www.ucas.com" target="_blank" rel="noopener noreferrer">UCAS – Undergraduate Applications</a></li>
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