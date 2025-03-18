import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "We are",
    highlight: "Data-Informed",
    description:
      "High-quality, ethical data is the foundation of progress. We collect, curate, and analyze datasets that empower decision-makers across Africa.",
    image: "/assets/homepage/rafiki.png",
    highlightColor: "text-green-600",
  },
  {
    title: "We are",
    highlight: "Building the Future",
    description:
      "From Infrastructure to AI, we are pioneering the digital backbone of an Africa that leads in data and innovation.",
    image: "/assets/homepage/pana.png",
    highlightColor: "text-orange-500",
  },
  {
    title: "We are",
    highlight: "Community-Led",
    description:
      "Our work is driven by the needs of African communities, ensuring that our research and innovations serve real people in meaningful ways.",
    image: "/assets/homepage/pinkrafiki.png",
    highlightColor: "text-pink-500",
  },
  {
    title: "We are",
    highlight: "AI-Powered",
    description:
      "AI has the potential to reshape Africa’s future. We develop ethical, community-focused AI solutions tailored to local needs.",
    image: "/assets/homepage/bluerafiki.png",
    highlightColor: "text-blue-600",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]); // Re-run when currentIndex changes

  return (
    <div className="relative w-full h-screen mt-14 overflow-hidden hero-slider-container">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full flex justify-center items-center hero-slide">
            <div className="hero-slide-content flex flex-col md:flex-row items-center">
              <div className="text-section max-w-lg text-center md:text-left">
                <h1 className="text-3xl text-gray-900">
                  {slide.title} <span className={`block ${slide.highlightColor}`}>{slide.highlight}</span>
                </h1>
                <p className="mt-4 text-lg text-gray-700">{slide.description}</p>
              </div>
              <div className="image-section mt-6 md:mt-0 md:ml-12">
                <img src={slide.image} alt={slide.highlight} className="max-w-xs md:max-w-md" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 ">
        <FaChevronLeft className="text-gray-600 text-3xl" />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <FaChevronRight className="text-gray-600 text-3xl" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-20 flex space-x-3 custom-dots-container">
  {slides.map((_, index) => (
    <div 
      key={index} 
      className={`custom-dot ${index === currentIndex ? "active" : ""}`} 
    />
  ))}
</div>

    </div>
  );
};

export default Hero;
