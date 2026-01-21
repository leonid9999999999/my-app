import { useEffect, useRef, useState } from "react";
import "./ProjectSlider.css";

function ProjectSlider({ slides, onClose }) {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleWheel = (e) => {
      e.preventDefault();

      if (isScrolling.current) return;

      if (e.deltaY > 0 && index < slides.length - 1) {
        setIndex((prev) => prev + 1);
      }

      if (e.deltaY < 0 && index > 0) {
        setIndex((prev) => prev - 1);
      }

      isScrolling.current = true;
      setTimeout(() => (isScrolling.current = false), 600);
    };

    slider.addEventListener("wheel", handleWheel, { passive: false });
    return () => slider.removeEventListener("wheel", handleWheel);
  }, [index, slides.length]);

  return (
    <div className="slider-overlay" onClick={onClose}>
      <div
        className="slider"
        ref={sliderRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) =>
            slide.type === "image" ? (
              <div className="slide" key={i}>
                <img src={slide.src} alt="" />
              </div>
            ) : (
              <div className="slide slide-info" key={i}>
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
              </div>
            )
          )}
        </div>

        <div className="slider-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
            />
          ))}
        </div>

        <button className="slider-close" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
}

export default ProjectSlider;
