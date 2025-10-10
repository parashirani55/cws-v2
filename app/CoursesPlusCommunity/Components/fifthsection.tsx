"use client";
import Link from "next/link";
export default function FifthSection() {
  return (
    <section className="w-full flex items-center justify-center py-4 md:py-6 lg:py-8 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-stretch justify-between px-4 md:px-6 lg:px-8 h-auto min-h-[400px] md:min-h-[500px] lg:h-[65vh] lg:min-h-[500px] lg:max-h-[700px]">
        
        {/* Left Section with pink background */}
        <div className="relative bg-[#f8e2dd] rounded-lg md:rounded-xl lg:rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-8 lg:w-full lg:rounded-r-none h-full p-6 md:p-8 lg:p-10 xl:p-12">
          
          {/* Decorative angled bar */}
          <div className="absolute top-[-8px] md:top-[-12px] lg:top-[-16px] left-[-7px] md:left-[-10px] lg:left-[-14px] w-[52px] md:w-[78px] lg:w-[104px] xl:w-[130px] h-[68px] md:h-[102px] lg:h-[136px] xl:h-[170px] bg-[#7b112a] [clip-path:polygon(0_0,74%_0,100%_19%,28%_19%,28%_100%,0_100%)]"></div>

          {/* Left Column: Text */}
          <div className="flex-1 flex flex-col justify-center text-center lg:text-left h-full">
            <div className="bg-[#7b112a] text-white px-4 md:px-6 lg:px-8 xl:px-10 py-2 md:py-3 lg:py-4 xl:py-5 inline-block mb-3 md:mb-4 lg:mb-6 shadow-md mx-auto lg:mx-0 rounded-md lg:rounded-lg">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold tracking-wide leading-tight">
                THE BUNDLE
              </h2>
            </div>

            <div className="space-y-2 md:space-y-3 lg:space-y-4 text-gray-800 leading-snug md:leading-relaxed text-xs md:text-sm lg:text-base xl:text-lg overflow-hidden">
              <p>
                The Full Creator Package. Get everything in one: the full 8-in-1 Creative Mastery program plus 1-year access to Creative Wealth Society. Perfect for creators who want strategy, systems, and support from day one.

              </p>
              <p>
                This beginner-friendly bundle is your full setup to start earning online, connect with real brands, and grow inside a platform built to scale with you. 

              </p>
              <p className="italic font-semibold">
                Enjoy fresh resources added monthly, full support from a thriving creator community, and real-time answers to your course questions. If you're new or haven’t started monetizing yet, this is my 100% recommendation to accelerate your growth with clarity, confidence, and strategy--fully supported.
              </p>
            </div>
            
            <Link href="/Checkout">
            <button className="mt-4 md:mt-6 lg:mt-8 bg-[#7b112a] text-white font-bold uppercase px-6 md:px-8 lg:px-10 xl:px-12 py-2 md:py-3 lg:py-4 rounded-md lg:rounded-lg shadow-md hover:scale-105 transition-transform mx-auto lg:mx-0 text-xs md:text-sm lg:text-base xl:text-lg">
              YES, GIVE ME THE BUNDLE!
            </button>
            </Link>
          </div>

          {/* Middle Column: Computer Image */}
          <div className="flex-1 flex justify-center lg:justify-end items-center relative z-10 h-full">
  <img
    src="/CoursesPage/img-3.png"
    alt="Membership Preview"
    className="h-[70%] md:h-[80%] lg:h-[90%] xl:h-[100%] w-auto object-contain translate-x-0 lg:translate-x-2 xl:translate-x-4"
  />
</div>

          
        </div>
        
      </div>

      {/* Right Section: Female Image - Hidden on mobile and tablet */}
      <div className="hidden lg:flex justify-start items-center relative z-20 h-full w-auto lg:ml-[-7rem]">
        <img
          src="/CoursesPage/phone.png"
          alt="Creator Image"
          className="h-[65vh] w-[30vw] object-contain"
        />
      </div>

    </section>
  );
}