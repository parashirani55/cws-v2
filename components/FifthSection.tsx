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
      className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#8B1538] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Heading */}
        <div className="text-center mb-16 relative">
          <div className="relative inline-block">
            <h2
              className={`text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-wide inline-block ${
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

        {/* Content with a fade-in animation */}
        <div
          className={`${
            hasAnimated ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Box */}
            <div className="order-2 md:order-1">
              <div className="border-4 border-gray-900 bg-white p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-shadow duration-300 rounded-lg">
                <div className="space-y-6 text-center md:text-left">
                  <p className="text-base md:text-lg leading-relaxed text-gray-800">
                    No more cookie-cutter strategies and abandoned discords.{" "}
                    <span className="font-bold text-gray-900">
                      CWS is different— built by a creator who knows growth
                      takes ongoing guidance, real answers, and hands-on
                      support.
                    </span>
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-gray-800">
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
              {/* Text Annotation */}
              <div className="absolute -top-16 right-0 md:right-12 text-right max-w-xs z-10 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <p className="text-sm md:text-base leading-tight font-medium mb-2 text-gray-800">
                  <span className="font-bold text-gray-900">
                    The Creator Hub is a custom-built library inside CWS
                  </span>{" "}
                  with fresh, rotating resources designed to fuel your growth
                  and strategy!
                </p>

                {/* Refined Curved Arrow */}
                {/* <div className="flex justify-end">
                  <svg
                    width="100"
                    height="80"
                    viewBox="0 0 100 80"
                    className="mr-4 animate-bounce-subtle"
                  >
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="3"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3, 0 6" fill="#8B1538" />
                      </marker>
                    </defs>
                    <path
                      d="M 10 10 Q 40 5, 60 40 T 85 70"
                      stroke="#8B1538"
                      strokeWidth="3"
                      fill="none"
                      markerEnd="url(#arrowhead)"
                    />
                  </svg>
                </div> */}
              </div>

              {/* Creator Hub Image */}
              <div className="relative mx-auto max-w-2xl shadow-2xl rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <Image
                  src="/mac2.png"
                  alt="Creator Hub Interface"
                  width={1000}
                  height={700}
                  className="w-full h-auto"
                />
              </div>

              {/* Decorative Plant */}
              
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
          white-space: nowrap;
          border-right: 4px solid #8B1538;
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

        @media (max-width: 768px) {
          .animate-typing-container {
            animation: typing 3s steps(35) forwards,
              blink 0.75s step-end infinite;
          }

          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out 3.2s forwards;
          }
        }
      `}</style>
    </section>
  );
}