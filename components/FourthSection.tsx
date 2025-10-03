"use client";
import React, { useState, useEffect } from "react";

export default function IncomeStrategySection() {
  const fullText = "Reveal Your Income Strategy";
  const [displayText, setDisplayText] = useState("");

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#8B1538] py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Typing Heading - Now fully responsive */}
        <h2 className="text-center mb-6 min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] lg:min-h-[7rem] flex items-center justify-center">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight text-white inline-flex items-center">
            <span>{displayText}</span>
            <span className="inline-block w-0.5 sm:w-1 bg-white animate-blink ml-1 sm:ml-2" 
                  style={{ height: '0.8em' }} />
          </span>
        </h2>

        {/* Subtext */}
        <div className="mt-4 sm:mt-6 space-y-3 text-center max-w-2xl">
          <p className="text-base sm:text-lg md:text-xl font-semibold text-white">
            Confused by all the ways to earn online?
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
            Take our 7-question quiz to discover the best money-making path
            <br className="hidden sm:block" />
            for you based on your goals, personality, and skill level!
          </p>
        </div>

        {/* Grid Section */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left Column - Circular Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-36 h-36 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop"
                alt="Woman with laptop"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Column - Quiz Card */}
          <div className="flex flex-col items-center md:items-start text-white w-full">
            <div className="relative w-full bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop"
                alt="Desk setup with laptop"
                className="w-full rounded-lg object-cover"
              />

              {/* CTA */}
              <div className="mt-6 flex justify-center md:justify-start">
                <button className="bg-[#8B1538] text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-full shadow-lg hover:bg-[#a91d47] hover:scale-105 transition-transform duration-300">
                  Start the Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </section>
  );
}