'use client';
import React from 'react';
import Image from 'next/image';

export default function AskMeAnythingSimple() {
  return (
    <section className="w-full bg-[#d6c4c1] flex items-center justify-center py-12 px-4 md:px-8">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-10">

        {/* Right Side: Heading + Form */}
        <div className="flex-1 flex flex-col justify-start items-start">
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold italic text-start text-[#7b112a] mb-6 leading-tight ">
            Ask Me Anything
          </h2>

          {/* Form */}
          <form className="w-full max-w-md flex flex-col gap-4">
            <input
              type="text"
              placeholder="Write down your question here"
              className="w-full px-6 py-4 rounded-lg border-2 border-gray-800 bg-white text-black placeholder-black focus:outline-none focus:border-[#7b112a] text-lg"
            />

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-6 py-4 rounded-lg border-2 border-gray-800 bg-white text-black placeholder-black focus:outline-none focus:border-[#7b112a] text-lg"
            />

            <button
              type="submit"
              className="w-full bg-[#7b112a] hover:bg-[#9b1f3a] text-white font-bold py-4 rounded-lg text-lg transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Left Side: Image with Question Mark */}
        <div className="flex-1 max-w-md w-full relative flex items-center justify-center">
          {/* Image container */}
          <div className="relative w-full h-auto rounded-3xl overflow-hidden">
            <Image
              src="/Fake-User/image-ask.svg"
              alt="Professional consultant"
              width={500}
              height={600}
              className="w-full h-auto object-cover rounded-3xl"
              draggable={false}
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
