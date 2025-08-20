import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleBookAppointment = () => {
    setMenuOpen(false);

    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/");

      // Wait for navigation to complete, then scroll to contact form
      setTimeout(() => {
        scrollToContactForm();
      }, 200);
    } else {
      // If already on home page, just scroll to contact form
      scrollToContactForm();
    }
  };

  const scrollToContactForm = () => {
    // Try multiple possible IDs for the contact form
    const contactForm =
      document.getElementById("contact-form") ||
      document.getElementById("contact") ||
      document.querySelector(".contact-form") ||
      document.querySelector('[id*="contact"]');

    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Fallback: scroll to top if contact form not found
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Top Contact Bar */}
      <div className="navbar-contact-top">
        <div className="contact-info">
          <span>
            <strong>Phone:</strong> (+977) 015919707, 9851334607
          </span>
          <span>
            <strong> Email:</strong>
            <a href="mailto:info@tcs.edu.np">info@tcs.edu.np</a>
          </span>
        </div>
      </div>
      {/* Main Navigation Bar */}
      <div className="navbar-main">
        <div className="navbar-logo">
          <Link to="/" onClick={handleScrollToTop}>
            <img src={logo} alt="Titan Career Solutions Logo" />
          </Link>
        </div>
        <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
          <li>
            <Link to="/" onClick={handleScrollToTop}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={handleScrollToTop}>
              Services
            </Link>
          </li>
          <li className="dropdown">
            <span onClick={handleScrollToTop}>Destinations</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/study-guide/australia" onClick={handleScrollToTop}>
                  Australia
                </Link>
              </li>
              <li>
                <Link to="/study-guide/japan" onClick={handleScrollToTop}>
                  Japan
                </Link>
              </li>
              <li>
                <Link to="/study-guide/uk" onClick={handleScrollToTop}>
                  UK
                </Link>
              </li>
              <li>
                <Link to="/study-guide/new-zealand" onClick={handleScrollToTop}>
                  New Zealand
                </Link>
              </li>
              <li>
                <Link
                  to="/study-guide/united-states"
                  onClick={handleScrollToTop}
                >
                  United States
                </Link>
              </li>
              <li>
                <Link to="/study-guide/canada" onClick={handleScrollToTop}>
                  Canada
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/success-stories" onClick={handleScrollToTop}>
              Success Stories
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={handleScrollToTop}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleScrollToTop}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleScrollToTop}>
              Contact Us
            </Link>
          </li>
          {isMobile && (
            <li className="navbar-appointment-mobile">
              <button
                className="book-appointment-btn"
                onClick={handleBookAppointment}
              >
                Book Appointment
              </button>
            </li>
          )}
        </ul>
        {!isMobile && (
          <div className="navbar-appointment">
            <button
              className="book-appointment-btn"
              onClick={handleBookAppointment}
            >
              Book Appointment
            </button>
          </div>
        )}
        <button
          className={`navbar-hamburger${menuOpen ? " open" : ""}`}
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
