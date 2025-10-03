'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Briefcase, Heart, TrendingUp, Award, Users, ArrowRight } from 'lucide-react';

const FounderProfileCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const stats = [
    { icon: Briefcase, label: 'Brand Deals', value: '150+' },
    { icon: TrendingUp, label: 'Revenue', value: '6-Fig' },
    { icon: Users, label: 'Students', value: '1000+' },
    { icon: Award, label: 'Success Rate', value: '95%' }
  ];

  return (
    <div className="min-h-screen bg-pink-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-12 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Main Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-pink-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              
              {/* Left Side - Image Section */}
              <div className="relative p-6 sm:p-8 md:p-10 flex items-center justify-center bg-pink-100 order-1">
                <div className="relative z-10 w-full max-w-sm">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    {/* Profile Image - Responsive sizing */}
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mx-auto">
                      <div className="absolute inset-0 bg-pink-200 rounded-full" />
                      <div className="absolute inset-2 bg-white rounded-full overflow-hidden shadow-md">
                        <img
                          src="/2.png"
                          alt="Britney - Founder"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Floating Polaroid 1 - Responsive positioning */}
                    <motion.div
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      whileHover={{ scale: 1.05, rotate: 0 }}
                      className="absolute -top-4 -left-2 sm:-top-6 sm:-left-4 md:-left-6 bg-white p-1.5 sm:p-2 shadow-md rounded-lg border border-pink-100 rotate-[-8deg]"
                    >
                      <img
                        src="/camera/2.png"
                        alt="Camera moment"
                        className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover rounded"
                      />
                      <Camera className="w-3 h-3 sm:w-4 sm:h-4 mx-auto mt-1 text-pink-500" />
                    </motion.div>

                    {/* Floating Polaroid 2 - Responsive positioning */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      whileHover={{ scale: 1.05, rotate: 0 }}
                      className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 md:-right-6 bg-white p-1.5 sm:p-2 shadow-md rounded-lg border border-pink-100 rotate-[8deg]"
                    >
                      <img
                        src="/camera/3.png"
                        alt="Beach moment"
                        className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover rounded"
                      />
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 mx-auto mt-1 text-red-500 fill-current" />
                    </motion.div>

                    {/* Floating Polaroid 3 - Hidden on small screens */}
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      whileHover={{ scale: 1.05, rotate: 0 }}
                      className="absolute top-1/2 -left-6 sm:-left-8 md:-left-10 bg-white p-1.5 sm:p-2 shadow-md rounded-lg border border-pink-100 rotate-[-12deg] hidden sm:block"
                    >
                      <img
                        src="/camera/1.png"
                        alt="Professional"
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover rounded"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Right Side - Content Section */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between order-2">
                <div>
                  <h2 className="text-xs sm:text-sm font-semibold text-pink-600 uppercase mb-2 tracking-wide">
                    Meet the Founder
                  </h2>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    Britney
                  </h1>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                    From Zero to 6-Figures Creator
                  </p>

                  {/* Stats Grid - Responsive */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                        whileHover={{ y: -2 }}
                        className="bg-pink-50 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-pink-100"
                      >
                        <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 mb-1 sm:mb-2" />
                        <p className="text-lg sm:text-xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-[10px] sm:text-xs text-gray-600">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Description - Responsive text */}
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700">
                    <p className="leading-relaxed">
                      After the pandemic shut down my workplace, I started with nothing but an iPhone and determination. 
                      <span className="font-semibold text-pink-600"> 150+ UGC brand deals later</span>, I built a 
                      <span className="font-bold text-purple-600"> 6-figure online business</span> from home.
                    </p>
                    <p className="leading-relaxed">
                      Now I teach creators how to stop undercharging, land high-paying clients, and build 
                      <span className="italic"> multiple income streams</span> that support the life they want.
                    </p>
                  </div>
                </div>

                {/* CTA Buttons - Responsive */}
                <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.1 }}
                    className="w-full bg-pink-500 text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-sm hover:bg-pink-600 transition-colors flex items-center justify-center gap-2"
                  >
                    Join CWS Now
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.1 }}
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="w-full bg-white border-2 border-pink-300 text-pink-600 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-pink-50 transition-colors"
                  >
                    Read Full Story
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Full Story Modal - Responsive */}
        <AnimatePresence>
          {isFlipped && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setIsFlipped(false)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white text-gray-800 p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl shadow-xl max-w-3xl max-h-[85vh] sm:max-h-[80vh] overflow-y-auto border border-pink-200 w-full mx-4"
              >
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-pink-600">The Full Story</h2>
                  <button
                    onClick={() => setIsFlipped(false)}
                    className="text-gray-500 hover:text-gray-800 text-2xl sm:text-3xl transition-colors leading-none"
                  >
                    ×
                  </button>
                </div>
                
                <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-700">
                  <p className="text-base sm:text-lg leading-relaxed">
                    <span className="font-bold text-lg sm:text-xl">Welcome!</span> My name is Britney and I'm glad you're here. Here's my journey...
                  </p>
                  <p className="leading-relaxed">
                    After the pandemic shut down the place I worked for most of my 20s, I started with nothing but an iPhone and the drive to build reliable income and long-term stability—
                    <span className="italic font-semibold"> on my own terms.</span>
                  </p>
                  <p className="leading-relaxed">
                    Fast-forward 150+ UGC brand deals later, I realized content creation was just the beginning. I built a 
                    <span className="font-bold text-purple-600"> 6-figure online business</span> from home, combining client work, UGC, and digital products to create multiple income streams.
                  </p>
                  <p className="leading-relaxed">
                    Inside CWS, I teach exactly how I did it so you can land high-paying clients and grow a creative business that supports the life you actually want.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.1 }}
                  className="mt-6 sm:mt-8 w-full bg-pink-500 text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-md hover:bg-pink-600 transition-colors"
                >
                  Start Your Journey Today →
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FounderProfileCard;