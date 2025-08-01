import React from 'react';
import { Link } from 'react-router-dom';
import './StudyDestinations.css';

const StudyDestinations = () => {
  const destinations = [
    {
      id: 'australia',
      title: 'Study in Australia',
      image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'World-class education in a safe, welcoming environment, with diverse cultural experiences and stunning natural landscapes.',
      path: '/study/australia',
      links: [
        { text: 'Study Guide', href: '/study-guide/australia' },
        { text: 'Colleges', href: '/colleges/australia' },
        { text: 'Universities', href: '/universities/australia' },
        { text: 'Eligibility Criteria', href: '/eligibility/australia' }
      ]
    },
    {
      id: 'japan',
      title: 'Study in Japan',
      image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Renowned for its blend of tradition and innovation, offering students a unique educational experience with top universities and advanced technology.',
      path: '/study/japan',
      links: [
        { text: 'Study Guide', href: '/study-guide/japan' },
        { text: 'Colleges', href: '/colleges/japan' },
        { text: 'Universities', href: '/universities/japan' },
        { text: 'Eligibility Criteria', href: '/eligibility/japan' }
      ]
    },
    {
      id: 'uk',
      title: 'Study in UK',
      image: 'https://images.unsplash.com/photo-1562767332-ce0b1e2426bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Home to some of the world\'s oldest universities with prestigious academic traditions and innovative research opportunities.',
      path: '/study/uk',
      links: [
        { text: 'Study Guide', href: '/study-guide/uk' },
        { text: 'Colleges', href: '/colleges/uk' },
        { text: 'Universities', href: '/universities/uk' },
        { text: 'Eligibility Criteria', href: '/eligibility/uk' }
      ]
    },
    {
      id: 'new-zealand',
      title: 'Study in New Zealand',
      image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'High-quality education in a beautiful, safe country with excellent work opportunities and a relaxed lifestyle.',
      path: '/study/new-zealand',
      links: [
        { text: 'Study Guide', href: '/study-guide/new-zealand' },
        { text: 'Colleges', href: '/colleges/new-zealand' },
        { text: 'Universities', href: '/universities/new-zealand' },
        { text: 'Eligibility Criteria', href: '/eligibility/new-zealand' }
      ]
    },
    {
      id: 'united-states',
      title: 'Study in USA',
      image: 'https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Offering diverse study options with cutting-edge research facilities and extensive networking opportunities.',
      path: '/study/united-states',
      links: [
        { text: 'Study Guide', href: '/study-guide/united-states' },
        { text: 'Colleges', href: '/colleges/united-states' },
        { text: 'Universities', href: '/universities/united-states' },
        { text: 'Eligibility Criteria', href: '/eligibility/united-states' }
      ]
    },
    {
      id: 'canada',
      title: 'Study in Canada',
      image: 'https://images.unsplash.com/photo-1519832979-6fa011b87667?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'High-quality education in a multicultural environment with excellent opportunities for personal and professional growth.',
      path: '/study/canada',
      links: [
        { text: 'Study Guide', href: '/study-guide/canada' },
        { text: 'Colleges', href: '/colleges/canada' },
        { text: 'Universities', href: '/universities/canada' },
        { text: 'Eligibility Criteria', href: '/eligibility/canada' }
      ]
    }
  ];

  return (
    <div className="study-destinations-section">
      <div className="study-destinations-header">
        <h2>Explore Global Study Opportunities With Top <span>Education Consultancy in Nepal</span></h2>
        <p>
          We provide comprehensive guidance for students aspiring to study abroad. Our expert consultants help you navigate through the complex process of international education, from course selection to visa applications.
        </p>
        <p className="subtitle">Every country has a unique path. Let's find yours.</p>
      </div>
      
      <div className="study-destinations-grid">
        {destinations.map((destination) => (
          <div key={destination.id} className="destination-card">
            <div className="destination-image-container">
              <img src={destination.image} alt={destination.title} className="destination-image" />
            </div>
            <div className="destination-content">
              <Link to={destination.path} className="destination-title-link">
                <h3 className="destination-title">{destination.title}</h3>
              </Link>
              <p className="destination-description">{destination.description}</p>
              <div className="destination-links">
                {destination.links.map((link, index) => (
                  <Link key={index} to={link.href} className="destination-link">
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyDestinations; 