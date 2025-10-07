"use client";

import React from "react";

export default function LearnMasterSection() {
  return (
    <div className="bg-[#f4f0f0]">
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-stretch w-full min-h-[500px]">
        {/* Left Image */}
        <div className="lg:w-1/4 flex pl-5 pt-8 lg:pt-12 justify-center lg:justify-start">
          <img
            src="/2.png"
            alt="Platform Instructor"
            className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-full h-auto object-cover"
          />
        </div>

        {/* Center Content */}
        <div className="flex-1 px-4 sm:px-8 lg:px-12 xl:px-16 text-start space-y-6 text-black flex flex-col justify-center py-10 lg:py-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-0">
            For those who know the game <br />
            and those <span className="italic font-light">ready</span> to learn it.
          </h2>

          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            This is the platform that grows with you.
          </p>

          <div className="pt-4 sm:pt-8 space-y-2 text-center">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-[var(--font-gotham)] text-black max-w-4xl mx-auto">
              Learn how to turn your{" "}
              <span className="text-[#7b112a] font-bold">favourite parts of </span>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-[var(--font-gotham)] text-black max-w-4xl mx-auto">
              <span className="text-[#7b112a] font-bold">creating </span>into a profitable, scalable business.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-[var(--font-gotham)] font-bold text-black max-w-4xl mx-auto">
              Build around your passion, your strengths,
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-[var(--font-gotham)] font-bold text-black max-w-4xl mx-auto whitespace-nowrap">
              and your unique path.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/5 flex justify-center lg:justify-end mt-4 lg:mt-0">
          <img
            src="/camera/right.png"
            alt="Mobile Content Creation"
            className="w-[50%] sm:w-[40%] md:w-[35%] lg:w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Learn & Master Skills Section */}
      <div className="relative py-14 bg-gradient-to-r from-red-950 via-red-900 to-red-950 overflow-hidden w-full">
        {/* Background Image */}
        <img
          src="/Gr-bg.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        {/* Content */}
        <div className="relative w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
            {/* Learn & Master Image */}
            <div className="flex justify-center mt-4 lg:mt-0">
              <img
                src="/LearnMaster.png"
                alt="Learn and Master"
                className="w-[150px] sm:w-[180px] md:w-[220px] lg:w-[360px] h-auto object-contain"
              />
            </div>

            {/* Skills Grid */}
            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-6 sm:gap-y-8 text-center">
              {[
                ["UGC"],
                ["CONTENT", "CREATION"],
                ["DIGITAL", "PRODUCTS"],
                ["AFFILIATE", "MARKETING"],
                ["BRAND", "DEALS"],
                ["CREATIVE", "STRATEGY"],
                ["VIDEO", "EDITING"],
                ["BUSINESS", "FREELANCING"],
              ].map((lines, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center text-white font-semibold uppercase tracking-wide"
                  style={{ fontSize: "clamp(1.4rem, 2vw + 0.4rem, 2.25rem)" }}
                >
                  <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center leading-tight text-center">
                      {lines.map((line, j) => (
                        <span key={j}>{line}</span>
                      ))}
                    </div>

                    <img
                      src={"/camera/Tick.png"}
                      className="w-6 sm:w-7 md:w-8 lg:w-10 ml-2 flex-shrink-0 self-center"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
