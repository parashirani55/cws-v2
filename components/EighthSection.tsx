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
      className="w-full bg-white py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-21 items-center">
          {/* Left Side Title (40%) */}
          <div className="w-full lg:w-2/5 lg:pr-6">
            <h2
              className="font-Larken-Black-Italic text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] leading-[1.1] mb-6 text-left text-[#c67287]"
            >
              From the
              <br />
              Community
            </h2>

            <p className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 italic font-medium mt-4 leading-relaxed text-left">
              Meet our exclusive members and their journey.
            </p>
          </div>

          {/* Right Side Image Carousel (60%) */}
          <div className="relative w-full lg:w-3/5 overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentCard.id}
                initial={{ filter: 'blur(10px)', opacity: 0, x: direction === 1 ? 100 : -100 }}
                animate={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
                exit={{ filter: 'blur(10px)', opacity: 0, x: direction === 1 ? -100 : 100 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full"
              >
                <div className="relative z-10 pt-10 sm:pt-14 md:pt-20 lg:pt-24">
                  <div className="rounded-2xl overflow-hidden bg-transparent">
                    <div className="p-0">
                      <img
                        src={currentCard.image}
                        alt={`card-${currentCard.id}`}
                        className="w-full h-auto object-contain rounded-2xl pointer-events-none select-none"
                        draggable={false}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center lg:justify-end gap-3 mt-6">
              <button
                onClick={prevSlide}
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 sm:border-3 border-red-900 bg-white flex items-center justify-center hover:bg-red-900 transition-all duration-300 group active:scale-95"
                aria-label="Previous card"
              >
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-red-900 group-hover:text-white transition-colors"
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
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 sm:border-3 border-red-900 bg-white flex items-center justify-center hover:bg-red-900 transition-all duration-300 group active:scale-95"
                aria-label="Next card"
              >
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-red-900 group-hover:text-white transition-colors"
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
    </div>
  );
};

export default ImageCardCarousel;
