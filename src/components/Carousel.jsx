import React, { useState, useEffect } from 'react';
import './Carousel.css';
import Image from '../assets/Image.png';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Sydney, Australia
    country: 'Australia',
  },
  {
    url: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Tokyo, Japan
    country: 'Japan',
  },
  {
    url: 'https://images.unsplash.com/photo-1562767332-ce0b1e2426bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // London, UK
    country: 'UK',
  },
  {
    url: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Auckland, New Zealand
    country: 'New Zealand',
  },
  {
    url: 'https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // New York, USA
    country: 'United States',
  },
  {
    url: 'https://images.unsplash.com/photo-1490623970972-ae8bb3da443e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Sydney, Australia
    country: 'Canada',
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-image-wrapper">
        <img src={Image} alt={`Study in ${slides[current].country}`} className="carousel-image1" />
        
      </div>
    </div>
  );
};

export default Carousel; 