import React, { useState } from 'react';
import './SuccessStories.css';
import Testimonials from '../components/Testimonials';

const SuccessStories = () => {  

  return (
    <div className="success-stories-page">
      <div className="success-stories-header">
        <h1>Success <span>Stories</span></h1>
        <p className="subtitle">Real Stories from Students Who Achieved Their Dreams</p>
      </div>
      
      <div className="success-stories-content">
        <section className="success-stories-section">
          <h2>Lively Students, Vibrant Stories</h2>
          <p>
            Discover inspiring journeys of students who transformed their dreams into reality with <strong>Titan Career Solutions</strong>. These success stories showcase the dedication, hard work, and determination that led to academic and career achievements abroad.
          </p>
          <p>
            <strong>760,000+ students</strong> have trusted us in their journey, and we're proud to share their stories with you. Each testimonial represents a unique path to success, from initial planning to graduation and beyond.
          </p>
        </section>

        <section className="success-stories-section">
          <h2>Student Testimonials</h2>
          <p>Find your fun academic adventure here and get inspired by real experiences from our successful students.</p>
          <Testimonials />
        </section>

        <section className="success-stories-section">
          <h2>Ready to Write Your Success Story?</h2>
          <p>Join thousands of students who have achieved their study abroad dreams with our guidance. Let <strong>Titan Career Solutions</strong> help you create your own success story.</p>
          <div className="cta-section">
            <a href="/contact" className="cta-button">Contact Us</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SuccessStories; 