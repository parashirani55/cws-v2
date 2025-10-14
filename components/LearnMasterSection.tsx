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
        <div className="flex-1 px-4 sm:px-6 lg:px-10 xl:px-12 text-start space-y-8 text-black flex flex-col justify-center py-10 sm:py-14 md:py-20 lg:py-24 xl:py-28">
<h2 className="text-[20px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-snug mb-0">
  For those who know the game <br />
  and those <span className="italic font-light">ready</span> to learn it.<br />
  <span className="font-bold block mt-2">
    This is the platform that grows with you.
  </span>
</h2>


<div className="pt-6 sm:pt-8 space-y-3 text-center">
  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight text-black max-w-4xl mx-auto">
    Learn how to turn your{" "}
    <span className="text-[#7b112a] font-bold">favourite parts of </span>
  </p>
  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight text-black max-w-4xl mx-auto">
    <span className="text-[#7b112a] font-bold">creating </span>into a profitable, scalable business.
  </p>
  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight font-bold text-black max-w-4xl mx-auto">
    Build around your passion, your strengths,
  </p>
  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight font-bold text-black max-w-4xl mx-auto whitespace-nowrap">
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

  {/* 1 */}
<div
  className="flex flex-col items-center justify-center text-white font-semibold uppercase tracking-wide"
  style={{ fontSize: "clamp(2.2rem, 4vw + 0.8rem, 3.5rem)" }}
>
  <div className="flex items-center justify-center">
    <div className="flex flex-col items-center leading-tight text-center">
      <span>UGC</span>
    </div>
    <img
      src={"/camera/Tick.png"}
      className="w-12 sm:w-14 md:w-16 lg:w-15 ml-4 flex-shrink-0 self-center"
    />
  </div>
</div>


  {/* 2 */}
<div
  className="flex flex-col items-center justify-center text-white font-semibold uppercase tracking-wide"
  style={{ fontSize: "clamp(1.4rem, 2vw + 0.4rem, 2.25rem)" }}
>
  <div className="flex items-center justify-center">
    <div className="flex flex-col items-center text-center leading-[1]">
      <span>CONTENT</span>
      <span>CREATION</span>
    </div>
    <img
      src={"/camera/Tick.png"}
      className="w-6 sm:w-7 md:w-8 lg:w-15 ml-2 flex-shrink-0 self-center"
    />
  </div>
</div>


  {/* 3 */}
  {/* 3 */}
<div className="flex flex-col items-center justify-center text-white font-semibold uppercase tracking-wide" style={{ fontSize: "clamp(1.4rem, 2vw + 0.4rem, 2.25rem)" }}>
  <div className="flex items-center justify-center">
    <div className="flex flex-col items-center text-center leading-[1]">
      <span>DIGITAL</span>
      <span>PRODUCTS</span>
    </div>
    <img src={"/camera/Tick.png"} className="w-6 sm:w-7 md:w-8 lg:w-10 ml-2 flex-shrink-0 self-center" />
  </div>
</div>

{/* 4 */}
<div className="flex flex-col items-center justify-center text-white font-semibold uppercase tracking-wide" style={{ fontSize: "clamp(1.4rem, 2vw + 0.4rem, 2.25rem)" }}>
  <div className="flex items-center justify-center">
    <div className="flex flex-col items-center text-center leading-[1]">
      <span>AFFILIATE</span>
      <span>MARKETING</span>
    </div>
    <img src={"/camera/Tick.png"} className="w-6 sm:w-7 md:w-8 lg:w-10 ml-2 flex-shrink-0 self-center" />
  </div>
</div>

{/* 5 */}
<div className="flex flex-col items-center justify-center text-white font-semibold uppercase tracking-wide" style={{ fontSize: "clamp(1.4rem, 2vw + 0.4rem, 2.25rem)" }}>
  <div className="flex items-center justify-center">
    <div className="flex flex-col items-center text-center leading-[1]">
      <span>BRAND</span>
      <span>DEALS</span>
    </div>
    <img src={"/camera/Tick.png"} className="w-6 sm:w-7 md:w-8 lg:w-10 ml-2 flex-shrink-0 self-center" />
  </div>
</div>

{/* 6 */}
<div className="flex flex-col items-center justify-center text-white font-semibold uppercase tracking-wide" style={{ fontSize: "clamp(1.4rem, 2vw + 0.4rem, 2.25rem)" }}>
  <div className="flex items-center justify-center">
    <div className="flex flex-col items-center text-center leading-[1]">
      <span>CREATIVE</span>
      <span>STRATEGY</span>
    </div>
    <img src={"/camera/Tick.png"} className="w-6 sm:w-7 md:w-8 lg:w-10 ml-2 flex-shrink-0 self-center" />
  </div>
</div>

{/* 7 */}
<div className="flex flex-col items-center justify-center text-white font-semibold uppercase tracking-wide" style={{ fontSize: "clamp(1.4rem, 2vw + 0.4rem, 2.25rem)" }}>
  <div className="flex items-center justify-center">
    <div className="flex flex-col items-center text-center leading-[1]">
      <span>VIDEO</span>
      <span>EDITING</span>
    </div>
    <img src={"/camera/Tick.png"} className="w-6 sm:w-7 md:w-8 lg:w-10 ml-2 flex-shrink-0 self-center" />
  </div>
</div>

{/* 8 */}
<div className="flex flex-col items-center justify-center text-white font-semibold uppercase tracking-wide" style={{ fontSize: "clamp(1.4rem, 2vw + 0.4rem, 2.25rem)" }}>
  <div className="flex items-center justify-center">
    <div className="flex flex-col items-center text-center leading-[1]">
      <span>BUSINESS</span>
      <span>FREELANCING</span>
    </div>
    <img src={"/camera/Tick.png"} className="w-6 sm:w-7 md:w-8 lg:w-10 ml-2 flex-shrink-0 self-center" />
  </div>
</div>

</div>

          </div>
        </div>
      </div>
    </div>
  );
}
