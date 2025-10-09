"use client";

import Image from "next/image";

export default function ThenSomethingClicked() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* ===== Left Column (Text + Title Image) ===== */}
        


        <div className="flex flex-col space-y-6">
          {/* Heading Image */}
          <Image
            src="/AboutUs/Section-1/Text-3.png" // replace with your PNG path
            alt="How it started"
            width={500}
            height={120}
            className="w-auto h-20 md:h-40 object-contain select-none pointer-events-none"
            draggable="false"
          />

          {/* Paragraphs */}
          <div className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose max-w-3xl mx-auto px-4 sm:px-6">
  <p className="mb-6">
After working with 150+ DTC brands, I landed my first advanced role as a Creative Director—a $12K contract over 12 weeks, part-time. It felt like a huge win (even though I definitely undercharged—but that’s a story for another day). More importantly, that role opened my eyes: I could take the creative work I loved and evolve it into premium services that actually paid well. That’s when things really started to take off.{""}
  </p>

  <p>
I got hired for full-time social media management positions, landed multiple creative strategist roles, and eventually stepped into a full-time Creative Director position—managing campaigns for an entire marketing agency. I remember thinking… is this real life?{" "}
  </p>
        </div>

        </div>

        <div className="relative">
          <Image
            src="/AboutUs/Section-1/img-3.png" // replace with your photo path
            alt="Mother and child by the dock"
            width={650}
            height={500}
            className="w-25vw h-20vh rounded-lg object-cover"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}

