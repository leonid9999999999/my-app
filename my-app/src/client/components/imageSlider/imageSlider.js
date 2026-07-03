import React, { useState, useEffect, useCallback } from 'react';
import './imageSlider.css';

const ImageSlider = ({ images, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  // Automatic sliding logic
  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, interval);

    // Cleanup the interval when component unmounts
    return () => clearInterval(autoPlay);
  }, [nextSlide, interval]);

  return (
    <div className="slider-container">
      {/* The wrapper that holds all images side-by-side */}
      <div 
        className="slider-wrapper"
        style={{ transform: `translateX(-${activeIndex * 102}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      {/* Optional: Dots to show current position
      <div className="slider-dots">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default ImageSlider;