"use client";

import React from "react";

export default function LearnMasterSection() {
  return (
    <div className="bg-[#f4f0f0] min-h-[50vh] flex flex-col">

  {/* Main Content Section */}
  <div className="w-full flex flex-col lg:flex-row items-stretch h-[50vh] lg:h-[50vh] xl:h-[50vh]">
    {/* Left Image */}
    <div className="lg:w-1/4 relative flex justify-center lg:justify-start pt-4 pb-0 pl-5 lg:pl-0">
  <img
    src="/2.png"
    alt="Platform Instructor"
    className="w-[50%] sm:w-[50%] md:w-[40%] lg:w-full h-auto lg:h-full object-contain absolute bottom-0"
  />
</div>

    {/* Center Text */}
    <div className="lg:flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-10 xl:px-12 space-y-4 text-black">
      <h2 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] leading-snug mb-12">
        For those who know the game <br />
        and those <span className="italic font-light">ready</span> to learn it.<br />
        <span className="font-bold block mt-2">
          This is the platform that grows with you.
        </span>
      </h2>

      <div className="space-y-3 text-center">
        <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] leading-tight max-w-4xl mx-auto">
          Learn how to turn your{" "}
          <span className="text-[#7b112a] font-bold">favourite parts of </span>
        </p>
        <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] leading-tight max-w-4xl mx-auto">
          <span className="text-[#7b112a] font-bold">creating </span>into a profitable, scalable business.
        </p>
        <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] leading-tight font-bold max-w-4xl mx-auto">
          Build around your passion, your strengths,
        </p>
        <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] leading-tight font-bold max-w-4xl mx-auto whitespace-nowrap">
          and your unique path.
        </p>
      </div>
    </div>

    {/* Right Image */}
    <div className="lg:w-1/4 flex justify-end pb-0">
      <img
        src="/camera/right.png"
        alt="Mobile Content Creation"
        className="h-auto lg:h-full w-[50%] sm:w-[40%] md:w-[35%] lg:w-auto object-cover"
      />
    </div>
  </div>

  {/* Learn & Master Skills Section */}
  <div className="relative bg-gradient-to-r from-red-950 via-red-900 to-red-950 overflow-hidden w-full py-12 lg:py-16 xl:py-20">
    {/* Background Image */}
    <img
      src="/Gr-bg.png"
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover opacity-60"
    />

    {/* Content */}
    <div className="relative w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start w-full">

        {/* Learn & Master Image */}
        <div className="flex justify-center mt-4 lg:mt-0">
          <img
            src="/LearnMaster.png"
            alt="Learn and Master"
            className="w-[150px] sm:w-[180px] md:w-[220px] lg:w-[360px] h-auto lg:h-full object-cover"
          />
        </div>

        {/* Skills Grid */}
        <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-4 sm:gap-y-6 lg:gap-y-8 text-center">
          {[
            "UGC",
            "CONTENT CREATION",
            "DIGITAL PRODUCTS",
            "AFFILIATE MARKETING",
            "BRAND DEALS",
            "CREATIVE STRATEGY",
            "VIDEO EDITING",
            "BUSINESS FREELANCING",
          ].map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-white font-semibold uppercase tracking-wide"
              style={{
                fontSize:
                  idx === 0
                    ? "clamp(2.2rem, 4vw + 0.8rem, 3.5rem)"
                    : "clamp(1.4rem, 2vw + 0.4rem, 2.25rem)",
              }}
            >
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center text-center leading-[1]">
                  {skill.split(" ").map((word, i) => (
                    <span key={i}>{word}</span>
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
