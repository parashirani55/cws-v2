"use client";

import React from "react";

export default function OnlineIncomeLanding() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row relative bg-[#fdfcfc]">

      {/* Left Section */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 p-6 sm:p-8 md:p-12 lg:p-16 z-10">
        {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-red-900 mb-6 sm:mb-8 lg:mb-12">
          This is <span className="underline decoration-4 underline-offset-8">for you if</span>...
        </h1> */}
        <div className="mb-6 sm:mb-8 lg:mb-12 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-full mx-auto">
  <img
    src="/12/Text.svg"
    alt="This is for you if..."
    className="w-full h-auto object-contain"
    draggable="false"
  />
</div>


        {/* Benefits */}
<div className="space-y-5 sm:space-y-6 mb-8 md:mb-10">
  {[
    <>
      You want to understand the different ways to make money online and combine multiple income streams to hit{" "}
      <span className="font-bold">$10K+ months.</span>
    </>,
    <>
      You want to wake up to <span className="font-bold">brand deal offers</span>—not chase cold pitches.
    </>,
    "You're tired of guessing what to post, charge, or say in negotiations.",
    "You're done feeling isolated working alone or over a toxic online group.",
    <>
      You want to connect with <span className="font-bold">strong, successful likeminded people</span> (and maybe meet your new online bestie!)
    </>,
    "You're ready to charge 3–5x more for your work and know exactly how to ask for it.",
    "You're ready to stand out in a crowded space with proven growth strategies."
  ].map((text, idx) => (
    <div key={idx} className="flex items-start gap-3 sm:gap-4">
      <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-700 rounded-full flex items-center justify-center">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
        </svg>
      </div>
      <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed pt-0.5 sm:pt-1">
        {text}
      </p>
    </div>
  ))}
</div>


        {/* CTA Button */}
        <button className="bg-red-900 hover:bg-red-800 text-white font-bold text-base sm:text-lg md:text-xl py-3 sm:py-4 px-8 sm:px-10 md:px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 self-center lg:self-start">
          YES, I'M READY!
        </button>

        {/* Bottom spacing */}
        <div className="h-16 lg:hidden"></div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto">
        <img
          src="/12/image.svg"
          alt="Online income success"
          className="absolute top-0 right-0 w-full h-full object-cover"
        />
      </div>

    </div>
  );
}
