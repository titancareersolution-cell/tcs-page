import React, { useState, useEffect } from 'react';
import './Carousel.css';
import Image from '../assets/Image.png';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-image-wrapper">
        <img src={Image} alt='Study in Different Countries' className="carousel-image1" />
      </div>
    </div>
  );
};

export default Carousel; 