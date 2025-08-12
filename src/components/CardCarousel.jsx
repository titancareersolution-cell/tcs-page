import React, { useState, useEffect, useRef } from 'react';
import './CardCarousel.css';

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInstantTransition, setIsInstantTransition] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const [dragEnd, setDragEnd] = useState(null);
  const cardsWrapperRef = useRef(null);

  // Load all images from assets/card-component using Vite's glob import
  const imageUrls = React.useMemo(() => {
    const entries = Object.entries(
      import.meta.glob('../assets/card-component/*.{jpg,jpeg,png}', {
        eager: true,
        as: 'url',
      })
    );
    // Sort alphanumerically so Image1, Image2, ... Image10
    return entries
      .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
      .map(([, url]) => url);
  }, []);

  // Determine slides per view on mount and resize
  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1200) setSlidesPerView(4);
      else if (width >= 900) setSlidesPerView(3);
      else if (width >= 600) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const cardsPerView = slidesPerView;
  const maxIndex = Math.max(0, imageUrls.length - cardsPerView);

  // Build cloned slides for seamless infinite scrolling
  const slides = React.useMemo(() => {
    if (imageUrls.length === 0) return [];
    const k = Math.max(1, cardsPerView);
    const head = imageUrls.slice(0, k);
    const tail = imageUrls.slice(-k);
    return [...tail, ...imageUrls, ...head];
  }, [imageUrls, cardsPerView]);

  // Ensure we start at the first real slide group (after clones)
  useEffect(() => {
    if (imageUrls.length === 0) return;
    setIsInstantTransition(true);
    setCurrentIndex(cardsPerView);
    const id = setTimeout(() => setIsInstantTransition(false), 0);
    return () => clearTimeout(id);
  }, [cardsPerView, imageUrls.length]);

  const nextSlide = () => {
    setIsInstantTransition(false);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setIsInstantTransition(false);
    setCurrentIndex((prevIndex) => prevIndex - 1);
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
    if (slides.length === 0) return undefined;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // After transition ends, snap without animation if we're in a cloned region
  const handleTransitionEnd = () => {
    if (imageUrls.length === 0) return;
    const k = cardsPerView;
    const firstRealIndex = k;
    const lastRealIndex = k + imageUrls.length - 1;

    if (currentIndex > lastRealIndex) {
      // Moved past the end into cloned head
      setIsInstantTransition(true);
      setCurrentIndex(firstRealIndex);
      requestAnimationFrame(() => setIsInstantTransition(false));
    } else if (currentIndex < firstRealIndex) {
      // Moved before the start into cloned tail
      setIsInstantTransition(true);
      setCurrentIndex(lastRealIndex);
      requestAnimationFrame(() => setIsInstantTransition(false));
    }
  };

  return (
    <div className="card-carousel-section">
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
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              transition: isInstantTransition ? 'none' : undefined,
            }}
          >
            {slides.map((src, index) => (
              <div key={`${src}-${index}`} className="carousel-card image-card">
                <img src={src} alt={`Carousel slide ${index + 1}`} className="carousel-image" />
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