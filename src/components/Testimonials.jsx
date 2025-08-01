import React from 'react';
import './Testimonials.css';
import myImage1 from '../assets/Testemonial1.png';
import myImage2 from '../assets/Testemonial2.png';
import myImage3 from '../assets/Testemonial3.png';
import myImage4 from '../assets/Testemonial4.png';

const Testimonials = () => (
  <div className="testimonials-section-wrapper">
    <div className="testimonials-section">
      <img src={myImage1} alt="Student Testimonial 1" className="testimonial-img" />
      <img src={myImage2} alt="Student Testimonial 2" className="testimonial-img" />
      <img src={myImage3} alt="Student Testimonial 3" className="testimonial-img" />
      <img src={myImage4} alt="Student Testimonial 4" className="testimonial-img" />
    </div>
  </div>
);

export default Testimonials; 