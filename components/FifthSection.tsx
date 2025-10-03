"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function WhatMakesCWSDifferent() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-[#8B1538] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 sm:w-40 h-24 sm:h-40 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Heading - Fully Responsive */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 relative px-2">
          <div className="relative inline-block max-w-full">
            <h2
              className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight sm:tracking-wide ${
                hasAnimated ? "animate-typing-container" : "opacity-0"
              }`}
            >
              <span className="text-gray-900">WHAT MAKES </span>
              <span className="text-[#8B1538]">CWS </span>
              <span className="text-gray-900">DIFFERENT</span>
              <span className="text-orange-500">!?</span>
            </h2>
          </div>
        </div>

        {/* Content with fade-in animation */}
        <div
          className={`${
            hasAnimated ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Left Column - Text Box */}
            <div className="order-2 md:order-1">
              <div className="border-2 sm:border-4 border-gray-900 bg-white p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg">
                <div className="space-y-4 sm:space-y-6 text-center md:text-left">
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800">
                    No more cookie-cutter strategies and abandoned discords.{" "}
                    <span className="font-bold text-gray-900">
                      CWS is different— built by a creator who knows growth
                      takes ongoing guidance, real answers, and hands-on
                      support.
                    </span>
                  </p>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800">
                    That's why CWS brings together opportunity, education,
                    mentorship, and community—all in one place. You'll find
                    free monthly resources in the Creator Hub, plus optional
                    step-by-step courses for those who want more.{" "}
                    <span className="italic text-[#8B1538] font-semibold">
                      There's something here for every stage of your creator
                      journey.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 md:order-2 relative">
              {/* Text Annotation - Responsive positioning */}
              <div className="absolute -top-8 sm:-top-12 md:-top-16 left-0 right-0 md:left-auto md:right-8 lg:right-12 mx-4 md:mx-0 max-w-xs md:max-w-sm z-10 bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg">
                <p className="text-xs sm:text-sm md:text-base leading-tight font-medium text-gray-800">
                  <span className="font-bold text-gray-900 block mb-1">
                    The Creator Hub is a custom-built library inside CWS
                  </span>{" "}
                  <span className="block">
                    with fresh, rotating resources designed to fuel your growth
                    and strategy!
                  </span>
                </p>
              </div>

              {/* Creator Hub Image */}
              <div className="relative mx-auto max-w-2xl shadow-xl sm:shadow-2xl rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 mt-20 sm:mt-24 md:mt-0">
                <Image
                  src="/mac2.png"
                  alt="Creator Hub Interface"
                  width={1000}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Local Animation Styles --- */}
      <style jsx>{`
        @keyframes typing {
          from {
            max-width: 0;
          }
          to {
            max-width: 100%;
          }
        }

        @keyframes blink {
          0%,
          100% {
            border-right-color: #8B1538;
          }
          50% {
            border-right-color: transparent;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceSub {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        .animate-typing-container {
          display: inline-block;
          overflow: hidden;
          white-space: normal;
          word-wrap: break-word;
          border-right: 3px solid #8B1538;
          max-width: 0;
          animation: typing 4s steps(40) forwards,
            blink 0.75s step-end infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out 4.2s forwards;
          opacity: 0;
        }

        .animate-bounce-subtle {
          animation: bounceSub 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .animate-typing-container {
            white-space: normal;
            border-right: 2px solid #8B1538;
            animation: typing 3s steps(30) forwards,
              blink 0.75s step-end infinite;
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out 3.2s forwards;
          }
        }

        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 1024px) {
          .animate-typing-container {
            border-right: 3px solid #8B1538;
            animation: typing 3.5s steps(35) forwards,
              blink 0.75s step-end infinite;
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.9s ease-out 3.7s forwards;
          }
        }

        /* Ensure text wraps properly on small screens */
        @media (max-width: 640px) {
          h2 {
            word-break: break-word;
            hyphens: auto;
          }
        }
      `}</style>
    </section>
  );
}