"use client";

import Image from "next/image";

export default function HowItStartedSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* ===== Left Column (Text + Title Image) ===== */}
        <div className="flex flex-col space-y-6">
          {/* Heading Image */}
          <Image
            src="/AboutUs/Section-1/Text.png" // replace with your PNG path
            alt="How it started"
            width={500}
            height={120}
            className="w-auto h-25 md:h-40 object-contain select-none pointer-events-none"
            draggable="false"
          />

          {/* Paragraphs */}
          <div className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose max-w-3xl mx-auto px-4 sm:px-6">
  <p className="mb-6">
    When my job shut down during the pandemic, I was a struggling single mom
    trying to figure out how to make ends meet. I’d never worked online
    before—my social media use was mostly scrolling, laughing at videos, and
    keeping up with old friends.{" "}
    <strong className="font-semibold text-gray-900">
      I was a complete beginner.
    </strong>
  </p>

  <p>
    I knew I wanted something that allowed me to stay home with my baby at the
    time, so I started exploring ways to make money online. I spent countless
    hours teaching myself different income streams, but everything shifted{" "}
    <strong className="font-semibold text-gray-900">
      when I discovered UGC.
    </strong>{" "}
    <em className="italic text-gray-700">
      (And at the time, I had no idea that was just the beginning…)
    </em>
  </p>
</div>

        </div>

        {/* ===== Right Column (Main Image) ===== */}
        <div className="relative">
          <Image
            src="/AboutUs/Section-1/img-1.png" // replace with your photo path
            alt="Mother and child by the dock"
            width={700}
            height={500}
            className="w-full h-auto rounded-lg object-cover"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}
