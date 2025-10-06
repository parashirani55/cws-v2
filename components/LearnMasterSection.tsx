import React from "react";

export default function LearnMasterSection() {
  return (
    <div className="bg-[#f4f0f0]">
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-stretch w-full min-h-[500px] ">
        {/* Left Image */}
        <div className="w-full mt-15 lg:w-1/5 flex pl-5">
          <img
            src="/2.png"
            alt="Platform Instructor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Content */}
        <div className="flex-1 px-4 sm:px-8 lg:px-12 xl:px-16 text-center lg:text-left space-y-6 text-black flex flex-col justify-center py-10 lg:py-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-0">
            For those who know the game <br />
            and those <span className="italic font-light">ready</span> to learn it.
          </h2>

          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            This is the platform that grows with you.
          </p>

          <div className="pt-4 sm:pt-8 text-center">
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
        <div className="w-full mt-15 lg:w-1/5 flex">
          <img
            src="/3.png"
            alt="Mobile Content Creation"
            className="w-full h-full object-cover"
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
            <div className="flex justify-center lg:justify-start">
              <img
                src="/LearnMaster.png"
                alt="Learn and Master"
                className="w-[280px] sm:w-[320px] md:w-[360px] h-auto object-contain"
              />
            </div>

            {/* Skills Grid */}
{/* Skills Grid */}
<div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 text-center">
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
      className="flex flex-col items-center justify-center text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
    >
      <div className="flex items-center justify-center">
        {/* Centered text lines */}
        <div className="flex flex-col items-center leading-tight text-center">
          {lines.map((line, j) => (
            <span key={j}>{line}</span>
          ))}
        </div>

        {/* Tick icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 sm:w-7 md:w-8 lg:w-9 text-green-400 ml-2 flex-shrink-0 self-center"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
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
