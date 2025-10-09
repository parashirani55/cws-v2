"use client";

import Image from "next/image";

export default function ThisIsForYouFriend() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        
        {/* ===== Image Column (First on mobile, right on desktop) ===== */}
        <div className="relative order-1 md:order-2 w-full max-w-5xl mx-auto">
          <Image
            src="/AboutUs/Section-1/img-5.png"
            alt="Mother and child by the dock"
            width={1920}
            height={1200}
            className="w-full h-auto rounded-lg object-cover"
            draggable="false"
          />
        </div>

        {/* ===== Text Column (Second on mobile, left on desktop) ===== */}
        <div className="flex flex-col space-y-6 order-2 md:order-1">
          {/* Heading Image */}
          <Image
            src="/AboutUs/Section-1/Text-5.png"
            alt="How it started"
            width={500}
            height={120}
            className="w-auto h-20 md:h-40 object-contain select-none pointer-events-none"
            draggable="false"
          />

          {/* Paragraphs */}
          <div className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose max-w-3xl mx-auto px-4 sm:px-6">
            <p className="mb-6">
              After scaling into advanced roles, I started working closely with marketing and agency owners on a daily basis. Sitting in countless brand meetings, strategy sessions, sales calls, and budget discussions— I started to truly understand what brands are actually looking for in creators. Some things I had already figured out myself through trial and error, but others made me go, “Oof… no wonder that brand never emailed me back. I used to do that.”
            </p>

            <p>
              I also realized how much money brands pay agencies. For the longest time, I thought some brands just didn’t have a big creative budget—that’s why creators were getting offered $25–$50 for a UGC video. Turns out, most agencies are just taking a huge cut of it. (Sorry, but it’s true.)
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
