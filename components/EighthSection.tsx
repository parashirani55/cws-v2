'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ashley",
      role: "UGC CREATOR + CREATIVE COORDINATOR",
      image: "/images/1st.png",
      rating: 5,
      quote: "I'm so grateful for Britney and her incredible course! ..."
    },
    {
      id: 2,
      name: "Abel",
      role: "VIDEO EDITOR",
      image: "/images/2nd.png",
      rating: 5,
      quote: "Britney is amazing to work with. ..."
    },
    {
      id: 3,
      name: "Vivian",
      role: "INFLUENCER + UGC CREATOR",
      image: "/images/3rd.png",
      rating: 5,
      quote: "Britney gave me the necessary tools ..."
    },
    {
      id: 4,
      name: "Kenzie",
      role: "INFLUENCER + AFFILIATE CREATOR",
      image: "/images/4th.png",
      rating: 5,
      quote: "Britney and CWS gave me the resources ..."
    },
    {
      id: 5,
      name: "Bernice",
      role: "SOCIAL MEDIA MANAGER",
      image: "/images/5th.png",
      rating: 5,
      quote: "The Creator Hub library is my favorite feature ..."
    },
    {
      id: 6,
      name: "Jessica",
      role: "UGC CREATOR + DIGITAL MARKETER",
      image: "/images/6th.png",
      rating: 5,
      quote: "Britney has been the guiding light I needed ..."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full bg-white py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Header */}
          <div className="w-full lg:pt-6">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold italic leading-[1.15] mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-pink-400">From the</span><br />
              <span className="text-pink-500">Community</span>
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-black italic font-medium mt-4 leading-snug"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Get the inside scoop from creators who've<br className="hidden sm:block" />
              built, scaled, and leveled up...
            </motion.p>
          </div>

          {/* Right Side - Animated Testimonial */}
          <div className="relative w-full">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentTestimonial.id} 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                {/* Profile Image */}
                <div className="relative z-20 flex justify-center lg:justify-start -mb-14 sm:-mb-16 md:-mb-20 lg:-mb-24">
                  <motion.div 
                    className="relative"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 rounded-full overflow-hidden border-4 md:border-6 border-white shadow-2xl bg-gray-200">
                      <img 
                        src={currentTestimonial.image} 
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div 
                  className="relative z-10 pt-16 sm:pt-20 md:pt-24 lg:pt-28"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gradient-to-br from-red-900 to-red-800 text-white rounded-2xl shadow-2xl relative overflow-hidden">
                    <div className="p-6 sm:p-8 md:p-10 lg:p-12 pt-16 sm:pt-20 md:pt-24 lg:pt-28">
                      <div className="mb-6 md:mb-8">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic mb-2" style={{ fontFamily: 'cursive' }}>
                          {currentTestimonial.name}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase opacity-90">
                          {currentTestimonial.role}
                        </p>
                      </div>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed pl-2 sm:pl-4">
                        {currentTestimonial.quote}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center lg:justify-end gap-3 mt-6">
              <button 
                onClick={prevSlide} 
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 sm:border-3 border-red-900 bg-white flex items-center justify-center hover:bg-red-900 transition-all duration-300 group shadow-md active:scale-95"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-red-900 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide} 
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 sm:border-3 border-red-900 bg-white flex items-center justify-center hover:bg-red-900 transition-all duration-300 group shadow-md active:scale-95"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-red-900 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
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

export default TestimonialCarousel;
