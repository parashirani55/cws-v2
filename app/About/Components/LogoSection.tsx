"use client";

import Image from "next/image";

export default function LogoSection() {
  return (
    <section className="w-full bg-white">
      {/* ===== Centered Image ===== */}
      <div className="flex justify-center py-16 sm:py-20 lg:py-24 px-4 sm:px-8">
        <Image
          src="/AboutUs/Section-1/Logo.png"
          alt="Mother and child by the dock"
          width={1920}
          height={1200}
          className="w-full sm:w-3/4 md:w-2/3 lg:w-[40vw] h-auto lg:h-[70vh] rounded-lg object-cover"
          draggable="false"
        />
      </div>

      {/* ===== Full-Width Text Div ===== */}
      <div className="w-full bg-[#f0dcd2] py-8 sm:py-12 flex justify-center">
        <p className="text-center text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight sm:leading-snug md:leading-snug font-bobby">
          A platform designed to meet you where you are.
        </p>
      </div>
    </section>
  );
}
