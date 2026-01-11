import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CourseBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      image: "/cdm-banner.svg",
      link: "/courses/advanced-cdm",
      alt: "Advanced Clinical Data Management",
    },
    {
      image: "/cr-banner.svg",
      link: "/courses/clinical-research-basics",
      alt: "Clinical Research Basics",
    },
    {
      image: "/sas-banner.svg",
      link: "/courses/sas-programming",
      alt: "SAS Programming for Clinical Trials",
    },
      {
      image: "/mc-banner.svg",
      link: "/courses/medical-coding",
      alt: "Medical Coding for Clinical Trials",
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const goToPrevious = () =>
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  const goToNext = () =>
    setCurrentSlide((prev) => (prev + 1) % banners.length);

  return (
    <section className="relative w-full overflow-hidden bg-transparent p-0 m-0">
      {/* Banner Wrapper */}
      <div className="relative w-full h-[180px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[420px]">
        <AnimatePresence initial={false} custom={currentSlide}>
          <motion.div
            key={`banner-${currentSlide}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: { 
                type: "tween", 
                ease: [0.25, 0.1, 0.25, 1],
                duration: 0.6 
              } 
            }}
            exit={{ 
              opacity: 0, 
              x: -100,
              transition: { 
                type: "tween", 
                ease: [0.25, 0.1, 0.25, 1],
                duration: 0.6 
              } 
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Link
              href={banners[currentSlide].link}
              className="block w-full h-full"
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={banners[currentSlide].image}
                alt={banners[currentSlide].alt}
                className="w-full h-full object-contain"
              />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 z-10"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 z-10"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "w-8 h-3 bg-white"
                : "w-3 h-3 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
