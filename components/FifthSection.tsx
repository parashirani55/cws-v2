"use client";

import React, { useRef } from "react";
import Image from "next/image";

export default function WhatMakesCWSDifferent() {
  const headingRef = useRef(null);

  return (
    <section className="relative overflow-visible bg-gradient-to-br from-gray-50 to-gray-100 py-[5vh] px-[2vw]">
      {/* Background Glow Circles */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-[5vh] left-[5vw] w-[6vw] h-[6vw] sm:w-[8vw] sm:h-[8vw] bg-[#8B1538] rounded-full blur-3xl"></div>
        <div className="absolute bottom-[5vh] right-[5vw] w-[7vw] h-[7vw] sm:w-[10vw] sm:h-[10vw] bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[100vw] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-[10px] w-full">
          {/* Left: Header Image */}
          <div className="w-full md:flex-1 lg:flex-[0_0_calc(66vw)]">
            <Image
              src="/testi-img/annonation.svg"
              alt="What Makes CWS Different!?"
              width={1800}
              height={600}
              priority
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right: Spacer for overlay */}
          <div className="hidden md:block lg:w-[10vw]"></div>
        </div>

        {/* Mobile Annotation (<768px) */}
        <div className="block md:hidden mt-[2vh] flex justify-center w-full">
          <div className="w-full mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] items-center mt-[3vh]">
          {/* Left: Text */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <div className="w-full border-2 md:border-4 border-gray-900 bg-white p-[2vw] rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-gray-800 text-center md:text-left space-y-[1vh] sm:space-y-[1.5vh]">
                <p className="text-[2.5vw] sm:text-[2vw] md:text-[1.3vw] leading-relaxed">
                  No more cookie-cutter strategies and abandoned discords.{" "}
                  <span className="font-semibold text-gray-900">
                    CWS is different — built by a creator who knows growth takes
                    ongoing guidance, real answers, and hands-on support.
                  </span>
                </p>
                <p className="text-[2.5vw] sm:text-[2vw] md:text-[1.3vw] leading-relaxed">
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
            <div className="relative w-[90vw] sm:w-[75vw] md:w-[65vw] lg:w-[60vw] xl:w-[55vw] rounded-t-2xl">
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
            {/* Annotation Overlay: Tablet+ only (>=768px) */}
            <div
              className="hidden md:flex absolute z-30"
              style={{
                top: '-39vh',       // moved higher
                right: '-14vh',
                width: 'auto',
                maxWidth: '100%',
                transform: 'scale(0.6)',  // made slightly smaller
              }}
            >
              <Image
                src="/testi-img/annonation-arrow.svg"
                alt="Annotation"
                width={650}
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
