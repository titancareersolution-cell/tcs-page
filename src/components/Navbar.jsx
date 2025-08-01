import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
      <Link to="/" onClick={handleLinkClick}><img src={logo} alt="Titan Career Solutions Logo"  /></Link>
        
      </div>
      <button className={`navbar-hamburger${menuOpen ? ' open' : ''}`} onClick={handleMenuToggle} aria-label="Toggle menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
        <li className="dropdown">
          <span>Destinations</span>
          <ul className="dropdown-menu">
            <li><Link to="/study-guide/australia" onClick={handleLinkClick}>Australia</Link></li>
            <li><Link to="/study-guide/japan" onClick={handleLinkClick}>Japan</Link></li>
            <li><Link to="/study-guide/uk" onClick={handleLinkClick}>UK</Link></li>
            <li><Link to="/study-guide/new-zealand" onClick={handleLinkClick}>New Zealand</Link></li>
            <li><Link to="/study-guide/united-states" onClick={handleLinkClick}>United States</Link></li>
            <li><Link to="/study-guide/canada" onClick={handleLinkClick}>Canada</Link></li>
          </ul>
        </li>
        <li><Link to="/success-stories" onClick={handleLinkClick}>Success Stories</Link></li>
        <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
        <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
        {/* <li><Link to="/blog" onClick={handleLinkClick}>Blog</Link></li> */}
        {/* <li className="dropdown">
          <span>Apply Now</span>
          <ul className="dropdown-menu">
            <li><Link to="/apply" onClick={handleLinkClick}>Apply Now</Link></li>
            <li><Link to="/consultation" onClick={handleLinkClick}>Book a Consultation</Link></li>
          </ul>
        </li> */}
        {/* <li><Link to="/guides" onClick={handleLinkClick}>Application Guides</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar; 