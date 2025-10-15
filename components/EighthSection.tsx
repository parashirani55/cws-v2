'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const cards = [
    { id: 1, image: '/testi-img/1.png' },
    { id: 2, image: '/testi-img/2.png' },
    { id: 3, image: '/testi-img/3.png' },
    { id: 4, image: '/testi-img/4.png' },
    { id: 5, image: '/testi-img/5.png' },
    { id: 6, image: '/testi-img/6.png' },
    { id: 7, image: '/testi-img/7.png' },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isVisible, cards.length]);

  const currentCard = cards[currentIndex];

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen bg-white flex items-center justify-center overflow-hidden 
      px-2 sm:px-6 md:px-10 lg:px-[50px]" // ✅ Reduced padding for mobile/tablet
    >
      <div
        className="w-full h-full flex flex-col lg:flex-row items-center justify-center 
        gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-[calc(100vw-1rem)] sm:max-w-[calc(100vw-50px)] lg:max-w-[calc(100vw-100px)] mx-auto"
      >
        {/* Left Side Title */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center text-center lg:text-left space-y-2 sm:space-y-3 md:space-y-4">
<h2 className="font-Larken-Black-Italic text-[2.8rem] sm:text-[3rem] md:text-[4rem] lg:text-[5.5rem] xl:text-[6.5rem] leading-[1.1] mb-2 sm:mb-4 text-[#c67287]">
  From the
  <br />
  Community
</h2>

          
          <p className="font-sans text-sm sm:text-base md:text-lg lg:text-2xl text-gray-900 italic font-medium mt-2 sm:mt-3 md:mt-4 leading-relaxed">
            Get the inside scoop from creators who’ve built, scaled, and leveled up...
          </p>
        </div>

        {/* Right Side Image Carousel */}
        <div className="relative w-full lg:w-3/5 h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[80vh] overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentCard.id}
              initial={{ filter: 'blur(10px)', opacity: 0, x: direction === 1 ? 100 : -100 }}
              animate={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
              exit={{ filter: 'blur(10px)', opacity: 0, x: direction === 1 ? -100 : 100 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="w-full h-full"
            >
              <div className="relative z-10 h-full flex items-center">
                <div className="rounded-2xl overflow-hidden bg-transparent w-full h-full">
                  <img
                    src={currentCard.image}
                    alt={`card-${currentCard.id}`}
                    className="w-full h-full object-contain rounded-2xl pointer-events-none select-none"
                    draggable={false}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center lg:justify-end gap-2 sm:gap-3 mt-2 sm:mt-4 absolute bottom-3 sm:bottom-4 right-2 sm:right-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 sm:border-3 border-red-900 bg-white flex items-center justify-center hover:bg-red-900 transition-all duration-300 group active:scale-95"
              aria-label="Previous card"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-red-900 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 sm:border-3 border-red-900 bg-white flex items-center justify-center hover:bg-red-900 transition-all duration-300 group active:scale-95"
              aria-label="Next card"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-red-900 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCardCarousel;
