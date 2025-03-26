import { useState, useEffect } from "react"
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "We are",
    highlight: "Data-Informed",
    description:
      "High-quality, ethical data is the foundation of progress. We collect, curate, and analyze datasets that empower decision-makers across Africa.",
    image: "/assets/homepage/greenrafiki.svg",
    highlightColor: "text-[#26A37E]",
  },
  {
    title: "We are",
    highlight: "Building the Future",
    description:
      "From Infrastructure to AI, we are pioneering the digital backbone of an Africa that leads in data and innovation.",
    image: "/assets/homepage/pana.svg",
    highlightColor: "text-[#DD8823]",
  },
  {
    title: "We are",
    highlight: "Community-Centric",
    description:
      "Our work is driven by the needs of African communities, ensuring that our research and innovations serve real people in meaningful ways.",
    image: "/assets/homepage/pinkrafiki.svg",
    highlightColor: "text-[#EE3481]",
  },
  {
    title: "We are",
    highlight: "AI-Powered",
    description:
      "AI has the potential to reshape Africa's future. We develop ethical, community-focused AI solutions tailored to local needs.",
    image: "/assets/homepage/bluerafiki.svg",
    highlightColor: "text-[#1FB5DD]",
  },
]

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Move to the previous slide
  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // Move to the next slide
  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  // Go to a specific slide
  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 10000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[600px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="container mx-auto h-full px-4 sm:px-6 md:px-8 lg:px-16 py-10">
            <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-8 lg:gap-12">
              {/* Text Section */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="text-5xl lora-font text-gray-900">
                  {slides[currentIndex].title}
                </h1>
                <span
                  className={`block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 lora-font ${slides[currentIndex].highlightColor}`}

                >
                  {slides[currentIndex].highlight}
                </span>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-xl mx-auto lg:mx-0">
                  {slides[currentIndex].description}
                </p>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <motion.img
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].highlight}
                  className="w-[70%] sm:w-[60%] md:w-[50%] lg:w-[80%] h-auto object-contain"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 md:left-6 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 sm:p-3 md:p-4 shadow-md z-10 transition-all duration-200"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 md:right-6 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 sm:p-3 md:p-4 shadow-md z-10 transition-all duration-200"
        aria-label="Next slide"
      >
        <FaChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-700" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="focus:outline-none"
            aria-label={`Go to slide ${index + 1}`}
          >
            <motion.div
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400 hover:bg-gray-600"
              }`}
              initial={false}
              animate={index === currentIndex ? { scale: 1.2, opacity: 1 } : { scale: 1, opacity: 0.7 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Hero

