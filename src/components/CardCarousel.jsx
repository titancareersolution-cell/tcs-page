import React, { useState, useEffect, useRef } from 'react';
import './CardCarousel.css';

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const [dragEnd, setDragEnd] = useState(null);
  const cardsWrapperRef = useRef(null);

  const cards = [
    { id: 1, title: "98% Visa Success Rate", description: "Trusted by students across Nepal for consistently delivering positive visa outcomes.", icon: "🎯" },
    { id: 2, title: "95% Students Secured Scholarships", description: "We help students gain admission into their preferred institutions with scholarships.", icon: "🎓" },
    { id: 3, title: "5-Star Student Satisfaction", description: "Verified reviews and a high referral rate reflect our commitment to quality service.", icon: "⭐" },
    { id: 4, title: "Over a Decade of Industry Experience", description: "Proven expertise in abroad education consulting with deep institutional connections.", icon: "🏆" },
    { id: 5, title: "High Success in Language Tests", description: "Our students consistently excel in IELTS, PTE, and TOEFL with tailored prep and support.", icon: "📚" },
    { id: 6, title: "Direct Liaison with Key Stakeholders", description: "Smooth coordination with banks, engineers, notaries, and other third parties ensures faster, error-free processing.", icon: "🤝" },
    { id: 7, title: "Official Partnerships with Top Colleges & Universities", description: "We work directly with trusted institutions worldwide.", icon: "🎓" },
    { id: 8, title: "Comprehensive Online & Physical Support", description: "From initial counselling to final application, we assist students both in-office and remotely.", icon: "💻" },
    { id: 9, title: "Strategic Visa & SOP Guidance", description: "Our experts craft compelling Statements of Purpose and prepare students for visa interviews.", icon: "📝" },
    { id: 10, title: "Strong Post-Departure Support", description: "Orientation, housing guidance, and ongoing help even after students reach their destination.", icon: "✈️" }
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardsPerView = isMobile ? 1 : 2;
  const maxIndex = cards.length - cardsPerView;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mouse handlers for drag functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setDragEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging || !dragStart || !dragEnd) {
      setIsDragging(false);
      return;
    }
    
    const distance = dragStart - dragEnd;
    const isLeftDrag = distance > 50;
    const isRightDrag = distance < -50;

    if (isLeftDrag) {
      nextSlide();
    }
    if (isRightDrag) {
      prevSlide();
    }

    setIsDragging(false);
    setDragStart(null);
    setDragEnd(null);
  };

  // Prevent text selection during drag
  useEffect(() => {
    if (isDragging) {
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.userSelect = 'auto';
    }

    return () => {
      document.body.style.userSelect = 'auto';
    };
  }, [isDragging]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, maxIndex]);

  return (
    <div className="card-carousel-section">
      <div className="card-carousel-header">
        <h2>Why Choose <span>Titan Career Solutions?</span></h2>
        <p>Discover what makes us the trusted choice for students across Nepal</p>
      </div>
      <div className="card-carousel-container">
        <button className="carousel-arrow left" onClick={prevSlide}>‹</button>
        <div 
          className="cards-wrapper"
          ref={cardsWrapperRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div
            className="cards-track"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
          >
            {cards.map((card) => (
              <div key={card.id} className="carousel-card">
                <div className="card-icon">{card.icon}</div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-arrow right" onClick={nextSlide}>›</button>
      </div>
    </div>
  );
};

export default CardCarousel; 