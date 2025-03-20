import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "We are",
    highlight: "Data-Informed",
    description:
      "High-quality, ethical data is  the foundation of progress. We collect, curate, and analyze datasets that empower decision-makers across Africa.",
    image: "/assets/homepage/greenrafiki.svg",
    imageClass: "w-300 h-120 ",
    highlightColor: "text-[#26A37E]",
  },
  {
    title: "We are",
    highlight: "Building the Future",
    description:
      "From Infrastructure to AI, we are pioneering the digital backbone of an Africa that leads in data and innovation.",
    image: "/assets/homepage/pana.svg",
    imageClass: "w-140 h-120  ",
    highlightColor: "text-[#DD8823]",
  },
  {
    title: "We are",
    highlight: "Community-Led",
    description:
      "Our work is driven by the needs of African communities, ensuring that our research and innovations serve real people in meaningful ways.",
    image: "/assets/homepage/pinkrafiki.svg",
    imageClass: "w-320 h-120 ",
    highlightColor: "text-[#EE3481]",
  },
  {
    title: "We are",
    highlight: "AI-Powered",
    description:
      "AI has the potential to reshape Africa’s future. We develop ethical, community-focused AI solutions tailored to local needs.",
    image: "/assets/homepage/bluerafiki.svg",
    imageClass: "w-240 h-120 ",
    highlightColor: "text-[#1FB5DD]",
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="container mx-auto relative w-full h-screen px-16 pt-0 overflow-hidden hero-slider-container">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex justify-center items-center hero-slide"
          >
            <div className="hero-slide-content flex flex-col md:flex-row items-center">
              <div className="text-section max-w-lg text-center md:text-left">
                <h1 className="text-7xl lora-font font-size-64px text-gray-900">
                  {slide.title}{" "}
                  <span className={`block ${slide.highlightColor}`}>
                    {slide.highlight}
                  </span>
                </h1>
                <p className="mt-4 text-3xl text-gray-700">
                  {slide.description}
                </p>
              </div>
              <div className="image-section md:mt-0 md:ml-12">
                <img
                  src={slide.image}
                  alt={slide.highlight}
                  className={slide.imageClass}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute p-8  top-1/2 left-4 transform -translate-y-1/2 "
      >
        <FaChevronLeft className="text-gray-600 text-5xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute p-8  top-1/2 right-4 transform -translate-y-1/2"
      >
        <FaChevronRight className="text-gray-600 text-5xl" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute px-24 flex space-x-3 custom-dots-container">
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
