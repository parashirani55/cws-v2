'use client';
import React from 'react';

export default function FounderSection() {
  return (
    <section className="bg-gradient-to-br from-pink-100 via-pink-50 to-pink-100 py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_400px_1fr] gap-0 max-w-[1600px] mx-auto px-4 lg:px-6">

        {/* 1st Grid - Left Column - Polaroid Images */}
        <div className="flex flex-col items-end space-y-6 relative z-10">
          {/* Meet the Founder Title */}
          <div className="mb-2">
            <img
              src="/camera/MeetTheFounder.svg"
              alt="Meet the Founder"
              className="w-full max-w-[30.875rem]"
            />
          </div>

          {/* Polaroid Stack */}
          <div className="relative h-[40rem] w-full flex flex-col justify-end items-end gap-10">
            {/* Card 1 */}
            <div className="w-[12.5rem] bg-white p-2 shadow-xl transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300">
              <img
                src="/camera/2.png"
                alt="Camera"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card 2 */}
            <div className="w-[12.5rem] bg-white p-2 shadow-xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300">
              <img
                src="/camera/1.png"
                alt="Professional"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card 3 */}
            <div className="w-[11.25rem] bg-white p-2 shadow-xl transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300">
              <img
                src="/camera/3.png"
                alt="Beach"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* 2nd Grid - Center Column - Main Founder Image */}
        <div className="relative flex items-start justify-center lg:justify-center lg:-ml-16 lg:-mr-8 z-20">
          {/* Founder Image */}
          <div className="relative pt-12">
            <img
              src="/Founder.png"
              alt="Britney - Founder"
              className="w-full max-w-[30rem] sm:max-w-[34rem] lg:max-w-[40rem] h-auto object-contain"
            />
          </div>
        </div>


        {/* 3rd Grid - Right Column - Content Boxes */}
        <div className="relative flex flex-col z-30 lg:-ml-4">

          {/* 1st Container - Title */}
          <div className="bg-gradient-to-r from-[#f8d5dd] to-[#fce4e9] text-[#84092a] px-8 py-6 rounded-tl-[2rem]">
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold leading-tight">
              From Zero to 6-Figures <span className="text-black">→</span>
            </h2>
            <p className="text-[2rem] md:text-[2.5rem] font-bold italic leading-tight mt-1">
              Now It's <span className="italic">Your Turn.</span>
            </p>
          </div>

          {/* 2nd Container - Main Content */}
          <div className="bg-gradient-to-b from-[#84092a] to-[#6d0724] text-white px-8 py-8 pb-20 space-y-5 flex-grow">
            <p className="text-[1.0625rem] leading-relaxed">
              <span className="font-bold">Welcome!</span> My name is Britney and I'm SO glad you're here! So, here's what happened...
            </p>

            <p className="text-[1.0625rem] leading-relaxed">
              After the pandemic shut down the place I worked for pretty much my entire 20s, I started with nothing but an iPhone and the drive to build reliable income and long-term stability—<span className="italic font-semibold">on my own terms.</span>
            </p>

            <p className="text-[1.0625rem] leading-relaxed">
              Fast-forward 150+ UGC brand deals later, I realized content creation was just the beginning. I wanted more—more income, more freedom, and more control over my time. So I built a <span className="font-bold">6-figure online business</span> from home, combining creative strategy, client work, UGC, digital products and more to create multiple income streams.
            </p>

            <p className="text-[1.0625rem] leading-relaxed">
              Inside CWS, I teach exactly how I did it so you can stop undercharging, land high-paying clients, and grow a creative business that supports the life you actually want.
            </p>
          </div>

          {/* 3rd Container - CTA - Positioned absolutely to sit on top */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-br from-pink-200 via-pink-100 to-purple-100 px-10 py-8 rounded-[2rem] lg:-ml-[12rem] lg:mr-8 shadow-2xl z-50">
            <p className="text-[1.0625rem] text-[#84092a] leading-relaxed text-center mx-auto max-w-2xl">
              <span className="font-bold italic">Want the full story?</span>{' '}
              <a
                href="#"
                className="text-blue-600 font-bold underline hover:text-blue-800 transition-colors"
              >
                Click here
              </a>{' '}
              to learn more about how I built my business from scratch, how CWS came into the picture & <span className="italic">how it can help you also...</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}