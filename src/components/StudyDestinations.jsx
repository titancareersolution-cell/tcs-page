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
      path: '/study-guide/australia',
      links: [
        { text: 'Why Choose Australia', href: '/study-guide/australia#why-choose' },
        { text: 'Education System', href: '/study-guide/australia#education-system' },
        { text: 'Financial Requirements', href: '/study-guide/australia#financial' },
        { text: 'Student Visa', href: '/study-guide/australia#visa' },
        { text: 'Assessment', href: '/study-guide/australia#assessment' },
        { text: 'Application Process', href: '/study-guide/australia#application' },
        { text: 'Top Cities', href: '/study-guide/australia#cities' },
        { text: 'Cost of Study', href: '/study-guide/australia#cost' },
        { text: 'Work Opportunities', href: '/study-guide/australia#work' },
        { text: 'PR Pathways', href: '/study-guide/australia#pr' },
        { text: 'Life in Australia', href: '/study-guide/australia#life' },
        { text: 'Right Fit', href: '/study-guide/australia#fit' },
        { text: 'Get Started', href: '/study-guide/australia#get-started' },
        { text: 'Universities', href: '/study-guide/australia#universities' },
        { text: 'Colleges', href: '/study-guide/australia#colleges' },
        { text: 'Eligibility', href: '/study-guide/australia#eligibility' },
        { text: 'Resources', href: '/study-guide/australia#resources' }
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
        { text: 'Universities', href: '/study-guide/japan#universities' },
        { text: 'Colleges', href: '/study-guide/japan#colleges' },
        { text: 'Eligibility', href: '/study-guide/japan#eligibility' },
        { text: 'Resources', href: '/study-guide/japan#resources' }
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
        { text: 'Universities', href: '/study-guide/uk#universities' },
        { text: 'Colleges', href: '/study-guide/uk#colleges' },
        { text: 'Eligibility', href: '/study-guide/uk#eligibility' },
        { text: 'Resources', href: '/study-guide/uk#resources' }
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
        { text: 'Universities', href: '/study-guide/new-zealand#universities' },
        { text: 'Colleges', href: '/study-guide/new-zealand#colleges' },
        { text: 'Eligibility', href: '/study-guide/new-zealand#eligibility' },
        { text: 'Resources', href: '/study-guide/new-zealand#resources' }
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
        { text: 'Universities', href: '/study-guide/united-states#universities' },
        { text: 'Colleges', href: '/study-guide/united-states#colleges' },
        { text: 'Eligibility', href: '/study-guide/united-states#eligibility' },
        { text: 'Resources', href: '/study-guide/united-states#resources' }
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
        { text: 'Universities', href: '/study-guide/canada#universities' },
        { text: 'Colleges', href: '/study-guide/canada#colleges' },
        { text: 'Eligibility', href: '/study-guide/canada#eligibility' },
        { text: 'Resources', href: '/study-guide/canada#resources' }
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