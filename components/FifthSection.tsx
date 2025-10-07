"use client";

import React, { useRef } from "react";
import Image from "next/image";

export default function WhatMakesCWSDifferent() {
  const headingRef = useRef(null);

  return (
    <section className="relative overflow-visible bg-gradient-to-br from-gray-50 to-gray-100 py-[5vh] sm:py-[7vh] md:py-[10vh] px-[3vw] sm:px-[5vw] md:px-[8vw]">
      {/* Background Glow Circles */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-[5vh] left-[5vw] w-[6vw] h-[6vw] sm:w-[8vw] sm:h-[8vw] bg-[#8B1538] rounded-full blur-3xl"></div>
        <div className="absolute bottom-[5vh] right-[5vw] w-[7vw] h-[7vw] sm:w-[10vw] sm:h-[10vw] bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[100vw] mx-auto">
        {/* Header Section */}
        <div
          ref={headingRef}
          className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-[2vw] sm:gap-[3vw] w-full"
        >
          {/* Left: Header Image */}
          <div className="w-full md:flex-1 lg:flex-[0_0_calc(60vw)]">
            <Image
              src="/camera/cws-diff.png"
              alt="What Makes CWS Different!?"
              width={1920}
              height={600}
              priority
              className="w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] h-auto object-cover"
            />
          </div>

          {/* Right: Spacer for overlay */}
          <div className="hidden md:block lg:w-[20vw]"></div>
        </div>

        {/* Mobile Annotation (<768px) */}
        <div className="block md:hidden mt-[2vh] flex justify-center w-full">
          <div className="w-[70vw] sm:w-[60vw] mx-auto">
            <Image
              src="/camera/annonation.png"
              alt="Annotation"
              width={1000}
              height={800}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Content Section (Text + Mac Image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3vw] sm:gap-[4vw] md:gap-[5vw] items-center mt-[3vh]">
          {/* Left: Text */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <div className="w-full border-2 md:border-4 border-gray-900 bg-white p-[2vw] sm:p-[2.5vw] md:p-[3vw] rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-gray-800 text-center md:text-left space-y-[1vh] sm:space-y-[1.5vh]">
                <p className="text-[2.5vw] sm:text-[2vw] md:text-[1.2vw] leading-relaxed">
                  No more cookie-cutter strategies and abandoned discords.{" "}
                  <span className="font-semibold text-gray-900">
                    CWS is different — built by a creator who knows growth takes
                    ongoing guidance, real answers, and hands-on support.
                  </span>
                </p>
                <p className="text-[2.5vw] sm:text-[2vw] md:text-[1.2vw] leading-relaxed">
                  That's why CWS brings together opportunity, education,
                  mentorship, and community — all in one place. You'll find free
                  monthly resources in the Creator Hub, plus optional
                  step-by-step courses for those who want more.{" "}
                  <span className="italic text-[#8B1538] font-semibold">
                    There's something here for every stage of your creator
                    journey.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Mac + annotation */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end w-full relative mt-[3vh] md:mt-0">
            {/* Mac container */}
            <div className="relative w-[80vw] sm:w-[65vw] md:w-[50vw] lg:w-[40vw] xl:w-[35vw] rounded-t-2xl">
              <Image
                src="/camera/mac.png"
                alt="Creator Hub Interface"
                width={1600}
                height={900}
                priority
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Annotation Overlay: Tablet+ only (>=768px) */}
<div className="hidden md:flex absolute z-30" style={{
  top: '-45vh',           // adjust as needed
  right: '-20vh',       // float slightly outside Mac image
  width: 'auto',      
  maxWidth: '100%',   // don't overflow container
  transform: 'scale(0.5)', // make it bigger visually
}}>
  <Image
    src="/camera/annonation.png"
    alt="Annotation"
    width={700}
    height={460}
    priority
    className="h-auto object-contain select-none pointer-events-none"
  />
</div>

          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-[5vh] sm:h-[5vh] md:h-[5vh] lg:h-[5vh]"></div>
      </div>
    </section>
  );
}
