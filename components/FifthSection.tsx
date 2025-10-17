"use client";

import React from "react";
import Image from "next/image";

export default function CustomLayout() {
  return (
    <section className="relative w-screen min-h-[90vh] overflow-hidden px-4 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12">
      {/* --- DESKTOP / LARGE SCREEN --- */}
      <div className="hidden lg:block">
        {/* MAC IMAGE RIGHT SIDE */}
        <div className="absolute top-[20%] right-[5%] h-[80%] w-[50vw] z-0">
          <Image
            src="/5/mac.webp"
            alt="Mac image"
            fill
            className="object-contain"
          />
        </div>

        {/* CURVE-TEXT IMAGE */}
        <div className="absolute top-[5%] left-[10%] w-[60vw] z-10">
          <Image
            src="/5/curve-text.webp"
            alt="Curve Text"
            width={1200}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* TEXT BOX */}
        <div className="absolute top-[calc(50%-50px)] left-[12%] w-[30vw] aspect-square z-20">
          <div className="bg-[#e4e1e1] border border-black p-6 md:p-8 flex flex-col justify-center items-center text-center">
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-4">
              No more cookie-cutter strategies and abandoned discords.{" "}
              <strong>
                CWS is different—built by a creator who knows growth takes
                ongoing guidance, real answers, and hands-on support.
              </strong>
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic">
              That’s why CWS brings together opportunity, education, mentorship,
              and community—all in one place. You’ll find free monthly resources
              in the Creator Hub, plus optional step-by-step courses for those
              who want more. There’s something here for every stage of your
              creator journey.
            </p>
          </div>
        </div>
      </div>

      {/* --- TABLET LAYOUT --- */}
      <div className="hidden md:flex lg:hidden flex-col gap-6">
        {/* Curve text at top */}
        <div className="w-full">
          <Image
            src="/5/curve-text.webp"
            alt="Curve Text"
            width={1200}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* 50/50 Text box and Mac image */}
        <div className="flex flex-row w-full gap-4">
          {/* Text box */}
          <div className="w-1/2 aspect-square">
            <div className="bg-[#e4e1e1] border border-black p-4 md:p-6 flex flex-col justify-center items-center text-center h-full">
              <p className="text-gray-800 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed mb-2">
                No more cookie-cutter strategies and abandoned discords.{" "}
                <strong>
                  CWS is different—built by a creator who knows growth takes
                  ongoing guidance, real answers, and hands-on support.
                </strong>
              </p>
              <p className="text-gray-700 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed italic">
                That’s why CWS brings together opportunity, education, mentorship,
                and community—all in one place. You’ll find free monthly resources
                in the Creator Hub, plus optional step-by-step courses for those
                who want more. There’s something here for every stage of your
                creator journey.
              </p>
            </div>
          </div>

          {/* Mac image */}
          <div className="w-1/2 aspect-square relative">
            <Image
              src="/5/mac.webp"
              alt="Mac image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* --- MOBILE LAYOUT --- */}
      <div className="flex flex-col md:hidden gap-4">
        {/* Curve text */}
        <div className="w-full">
          <Image
            src="/5/curve-text.webp"
            alt="Curve Text"
            width={1200}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text box */}
        <div className="w-full bg-[#e4e1e1] border border-black p-4 flex flex-col justify-center items-center text-center">
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-2">
            No more cookie-cutter strategies and abandoned discords.{" "}
            <strong>
              CWS is different—built by a creator who knows growth takes
              ongoing guidance, real answers, and hands-on support.
            </strong>
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
            That’s why CWS brings together opportunity, education, mentorship,
            and community—all in one place. You’ll find free monthly resources
            in the Creator Hub, plus optional step-by-step courses for those
            who want more. There’s something here for every stage of your
            creator journey.
          </p>
        </div>

        {/* Mac image */}
        <div className="w-full h-[300px] sm:h-[400px] relative">
          <Image
            src="/5/mac.webp"
            alt="Mac image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
