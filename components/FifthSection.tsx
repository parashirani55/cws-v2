"use client";

import React, { useRef } from "react";
import Image from "next/image";

export default function WhatMakesCWSDifferent() {
  const headingRef = useRef(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12 md:py-16 px-3 sm:px-6 md:px-8">
      {/* ===== Background Glow Circles ===== */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#8B1538] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 sm:w-40 sm:h-40 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ===== Header Section ===== */}
        <div
          ref={headingRef}
          className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 sm:gap-6 w-full mb-8 sm:mb-10"
        >
          {/* Left: Header Image */}
          <div className="w-full text-center md:text-left">
            <Image
              src="/Logo/cws-diff.png"
              alt="What Makes CWS Different!?"
              width={1200}
              height={420}
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 60vw"
              className="w-full max-w-[280px] sm:max-w-[420px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[750px] h-auto mx-auto md:mx-0 object-contain"
            />
          </div>

          {/* Right: Annotation (now responsive + big on mobile) */}
          <div className="flex justify-center md:justify-end w-[70vw] sm:w-[70vw] md:w-[55vw] lg:w-[45vw] xl:w-[20vw] mt-4 md:mt-0 mx-auto">
            <Image
              src="/camera/annonation.png"
              alt="Annotation"
              width={1000}
              height={800}
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, (max-width: 1024px) 55vw, 40vw"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* ===== Content Section (Text + Mac Image) ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start mt-6 md:mt-0">
            <div className="w-full border-2 md:border-4 border-gray-900 bg-white p-5 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-gray-800 text-center md:text-left space-y-4 sm:space-y-5">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  No more cookie-cutter strategies and abandoned discords.{" "}
                  <span className="font-semibold text-gray-900">
                    CWS is different — built by a creator who knows growth takes
                    ongoing guidance, real answers, and hands-on support.
                  </span>
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
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

          {/* Right: Mac Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end w-full mt-6 md:mt-0">
            <div className="relative w-full max-w-[500px] sm:max-w-[600px] md:max-w-full rounded-t-2xl overflow-hidden">
              <Image
                src="/camera/mac.png"
                alt="Creator Hub Interface"
                width={1600}
                height={900}
                priority
                sizes="(max-width: 640px) 95vw, (max-width: 768px) 80vw, (max-width: 1024px) 55vw, 45vw"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
