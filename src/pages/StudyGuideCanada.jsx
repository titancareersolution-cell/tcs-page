import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./StudyGuide.css";

const StudyGuideCanada = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle anchor links when page loads
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const scrollToSection = () => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
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
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { href: "#why-choose", label: "Why Choose Canada" },
    { href: "#what-makes-special", label: "What Makes Canada Special" },
    { href: "#best-cities", label: "Best Student Cities" },
    { href: "#costs", label: "Costs of Studying" },
    { href: "#part-time-jobs", label: "Part-Time Jobs" },
    { href: "#post-graduation", label: "Post-Graduation & PR" },
    { href: "#in-demand-fields", label: "In-Demand Fields" },
    { href: "#scholarships", label: "Scholarships" },
    { href: "#step-by-step", label: "Step-by-Step Support" },
    { href: "#resources", label: "Resources" },
  ];

  return (
    <div className="study-guide-page canada-flag">
      <div className="study-guide-header">
        <h1>
          Study in Canada – <span>The Smartest Choice for Your Future</span>
        </h1>
        <p className="subtitle">
          Top-Tier Education | Work While You Learn | A Clear Path to your
          future
        </p>

        {/* Horizontal Navigation Bar */}
        <div className="guide-navigation">
          <div className="nav-container">
            <button
              className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span>Quick Navigation</span>
              <span className="hamburger-line"></span>
            </button>

            <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
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

      {/* Canada Image Section */}
      <div className="australia-image-section">
        <div className="australia-image-container">
          <img
            src="https://images.unsplash.com/photo-1519832979-6fa011b87667?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Canada Study Destination"
            className="australia-image"
          />
        </div>
      </div>

      <div className="study-guide-content">
        <section id="why-choose" className="guide-section">
          <h2>Why Study in Canada?</h2>
          <p>
            With a reputation for safety, high-quality education, post-study
            work rights, and some of the world's easiest PR pathways, Canada is
            the ideal destination for ambitious students who want more than just
            a degree. It is a place to study and a country that welcomes you to
            study, work, and settle with open arms. Canada is well-known to
            offer quality education at a very affordable cost compared to other
            developed nations.
          </p>
          <p>
            At TCS, we guide you at every step—from shortlisting the right
            courses to securing your visa, applying for scholarships, and
            helping you settle with confidence. With thousands of Nepalese
            students choosing Canada every year, the path is clear—and we help
            make it simple, affordable, and successful.
          </p>

          <ul className="benefits-list">
            <li>
              <p>
                <strong>Globally Respected Degrees:</strong> Recognised
                worldwide
              </p>
            </li>
            <li>
              <p>
                <strong>Post-Study Work (PGWP):</strong> Work up to 3 years
              </p>
            </li>
            <li>
              <p>
                <strong>Clear PR Pathways:</strong> Express Entry, PNPs, Rural
                Pilot
              </p>
            </li>
            <li>
              <p>
                <strong>Affordable Costs:</strong> Lower tuition and living
              </p>
            </li>
            <li>
              <p>
                <strong>Safe & Diverse:</strong> High safety, strong student
                support
              </p>
            </li>
          </ul>
        </section>

        <section id="what-makes-special" className="guide-section">
          <h2>What Makes Canada Special for Nepalese Students?</h2>
          <ul className="benefits-list">
            <li>
              <strong>Large Community:</strong> 600,000+ international students
            </li>
            <li>
              <strong>Flexible Work:</strong> 20 hrs/week during study,
              full-time in breaks
            </li>
            <li>
              <strong>High Demand:</strong> IT, Healthcare, Engineering,
              Business, Trades
            </li>
            <li>
              <strong>Family Options:</strong> Spouse open work permits,
              dependents
            </li>
            <li>
              <strong>Co-op Internships:</strong> Paid work experience while
              studying
            </li>
          </ul>
        </section>

        <section id="best-cities" className="guide-section">
          <h2>Best Student Cities in Canada</h2>
          <ul className="cities-list">
            <li>
              <strong>Toronto</strong> – Home to UofT, York & Ryerson. Best for
              business, finance, tech, and arts.
            </li>
            <li>
              <strong>Vancouver</strong> – UBC & SFU. Ideal for IT, film,
              environment, and outdoor lifestyle.
            </li>
            <li>
              <strong>Montreal</strong> – McGill & Concordia. Affordable living,
              vibrant culture, and academic excellence.
            </li>
            <li>
              <strong>Calgary & Edmonton</strong> – Low cost of living, booming
              industries, and high PR success.
            </li>
            <li>
              <strong>Ottawa</strong> – Canada's capital. Great for public
              policy, research, and quality of life.
            </li>
            <li>
              <strong>Winnipeg, Halifax, and Regina</strong> – Regional cities
              with strong job markets and easier PR options.
            </li>
          </ul>
        </section>

        <section id="costs" className="guide-section">
          <h2>Costs of Studying in Canada</h2>

          <h3>Tuition Fees (Annual):</h3>
          <ul className="cost-list">
            <li>Undergraduate: CAD 15,000 – 30,000</li>
            <li>Postgraduate: CAD 18,000 – 35,000</li>
            <li>Diplomas & Advanced Diplomas: CAD 8,000 – 20,000</li>
          </ul>

          <h3>Living Expenses (Monthly):</h3>
          <ul className="cost-list">
            <li>Housing: CAD 600 – 1,200</li>
            <li>Food & Utilities: CAD 300 – 500</li>
            <li>Transport & Misc: CAD 100 – 200</li>
          </ul>
        </section>

        <section id="part-time-jobs" className="guide-section">
          <h2>Part-Time Jobs While Studying</h2>
          <p>
            Students can legally work 20 hours/week during semesters and
            full-time during breaks.
          </p>
          <ul className="work-list">
            <li>
              <strong>Hospitality & Food Service:</strong> Retail, cafes,
              restaurants, delivery
            </li>
            <li>
              <strong>Administrative & Academic:</strong> Admin roles, research,
              tutoring
            </li>
            <li>
              <strong>Logistics & Customer Service:</strong> Warehouses, call
              centres, support
            </li>
            <li>
              <strong>Flexible Opportunities:</strong> Freelancing, on-campus,
              remote
            </li>
          </ul>
          <p>
            <strong>Average pay:</strong> CAD 15–25/hour
          </p>
        </section>

        <section id="post-graduation" className="guide-section">
          <h2>Post-Graduation & PR Pathways</h2>
          <ul className="pr-list">
            <li>
              <strong>PGWP:</strong> Work up to 3 years after study
            </li>
            <li>
              <strong>Express Entry (CEC):</strong> Fast PR after Canadian work
            </li>
            <li>
              <strong>PNP Programs:</strong> Provincial nomination for PR
            </li>
            <li>
              <strong>Rural & Atlantic Pilots:</strong> Easier PR in smaller
              cities
            </li>
          </ul>
        </section>

        <section id="in-demand-fields" className="guide-section">
          <h2>In-Demand PR-Oriented Fields</h2>
          <ul className="fields-list">
            <li>
              <strong>Healthcare & Nursing:</strong> High demand roles
            </li>
            <li>
              <strong>Data Science & IT:</strong> Strong tech growth
            </li>
            <li>
              <strong>Engineering:</strong> Civil, Mechanical, Electrical
            </li>
            <li>
              <strong>Cybersecurity & AI:</strong> Future-proof careers
            </li>
            <li>
              <strong>Finance & Analytics:</strong> Banking and fintech
            </li>
            <li>
              <strong>Social Work & ECE:</strong> Community services
            </li>
            <li>
              <strong>Environmental Science:</strong> Sustainability & marine
            </li>
            <li>
              <strong>Skilled Trades:</strong> Welding, HVAC, Electricians
            </li>
          </ul>
        </section>

        <section id="scholarships" className="guide-section">
          <h2>Scholarships for International Students</h2>
          <p>Canada offers both merit-based and needs-based scholarships:</p>
          <ul className="scholarship-list">
            <li>
              <strong>Vanier Canada Graduate Scholarships:</strong> Doctoral
              awards
            </li>
            <li>
              <strong>Canada-ASEAN Scholarships:</strong> Regional programs
            </li>
            <li>
              <strong>Ontario Graduate Scholarship:</strong> Provincial funding
            </li>
            <li>
              <strong>University-Specific Awards:</strong> UBC, McGill, UofT,
              etc.
            </li>
          </ul>
          <p>
            We help you find and apply for scholarships to reduce your financial
            burden.
          </p>
        </section>

        <section id="step-by-step" className="guide-section">
          <h2>Step-by-Step Support from Titan Career Solutions</h2>
          <ul className="services-list">
            <li>
              <strong>Career Counseling & Course Selection</strong> –
              Personalized guidance for your academic path.
            </li>
            <li>
              <strong>University/College Application</strong> – Complete
              application support and documentation.
            </li>
            <li>
              <strong>Financial Planning</strong> – Budget planning and funding
              assistance.
            </li>
            <li>
              <strong>Study Permit Application</strong> – Visa application
              support and guidance.
            </li>
            <li>
              <strong>Pre-Departure Orientation</strong> – Essential information
              before you leave.
            </li>
            <li>
              <strong>Accommodation Support</strong> – Housing assistance in
              Canada.
            </li>
            <li>
              <strong>Career Planning</strong> – Long-term career guidance from
              day one.
            </li>
          </ul>
        </section>

        <section id="get-started" className="guide-section">
          <h2>Let's Start Your Journey</h2>
          <p>Canada offers you more than a degree—it offers a future.</p>
          <p>
            With Titan Career Solutions by your side, you don't just study
            abroad…
          </p>
          <p>You build a life abroad.</p>
          <p>
            <strong>
              Book your free consultation today and take the first step toward
              your Canadian dream!
            </strong>
          </p>
        </section>

        {/* Useful Resources Section */}
        <section id="resources" className="guide-section">
          <h2>📚 Useful Resources</h2>
          <ul className="resources-list">
            <li>
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Study Permit Information
              </a>
            </li>
            <li>
              <a
                href="https://www.educanada.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Study in Canada Official Website
              </a>
            </li>
            <li>
              <a
                href="https://www.cicic.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Canadian Information Centre for International Credentials
              </a>
            </li>
            <li>
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Working While Studying in Canada
              </a>
            </li>
            <li>
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Express Entry System
              </a>
            </li>
          </ul>
        </section>
      </div>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
};

export default StudyGuideCanada;
