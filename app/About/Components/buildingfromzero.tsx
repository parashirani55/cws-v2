"use client";

import Image from "next/image";

export default function Buildingfromzero() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* ===== Image Column (Comes first on mobile) ===== */}
        <div className="relative order-1 md:order-1">
          <Image
            src="/AboutUs/Section-1/img-2.png"
            alt="Mother and child by the dock"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg object-cover"
            draggable="false"
          />
        </div>

        {/* ===== Text Column (Comes second on mobile) ===== */}
        <div className="flex flex-col space-y-6 order-2 md:order-2">
          {/* Heading Image */}
          <Image
            src="/AboutUs/Section-1/Text-2.png"
            alt="How it started"
            width={500}
            height={120}
            className="w-auto h-20 md:h-40 object-contain select-none pointer-events-none"
            draggable="false"
          />

          {/* Paragraphs */}
          <div className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose max-w-3xl mx-auto px-4 sm:px-6">
            <p className="mb-6">
              Learning how to create content that actually sells opened doors I didn’t even know existed. I dove into digital marketing, affiliate income, and advanced service roles—where I could charge 10x what I did as a UGC creator. I started stacking income streams to hit consistent, 5-figure months.
            </p>

            <p>
              It felt like I stumbled into my dream scenario: using my creativity to make more money (without working more), and finally having financial stability that didn’t just rely on brand deals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
