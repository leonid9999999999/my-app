import { useEffect, useState } from "react";
import "./imageSlider2.css";

const ImageSlider2 = ({ images, autoPlayInterval = 4000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    // Auto play
    useEffect(() => {
        const interval = setInterval(nextSlide, autoPlayInterval);
        return () => clearInterval(interval);
    }, [autoPlayInterval, images.length]);

    return (
        <div className="slider-wrapper">
            {/* LEFT BUTTON */}
            <button
                className="slider-btn slider-btn--left"
                onClick={prevSlide}
                aria-label="Previous slide"
            >
                ‹
            </button>

            {/* SLIDER */}
            <div className="slider2">
                <div
                    className="slider-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((img, index) => (
                        <div className="slide" key={index}>
                            <img src={img} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT BUTTON */}
            <button
                className="slider-btn slider-btn--right"
                onClick={nextSlide}
                aria-label="Next slide"
            >
                ›
            </button>
        </div>
    );
};

export default ImageSlider2;
