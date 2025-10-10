"use client";
import Link from "next/link";

export default function Fourthsection() {
  return (
    <section className="w-full flex items-center justify-center py-4 md:py-6 lg:py-8 relative">
      
      {/* Left Section: Female Image - Hidden on mobile and tablet */}
      <div className="hidden lg:flex justify-end items-center relative z-20 h-full w-auto lg:mr-[-7rem]">
        <img
          src="/CoursesPage/Female-2.png"
          alt="Creator Image"
          className="h-[65vh] w-[30vw] object-contain"
        />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-stretch justify-between px-4 md:px-6 lg:px-8 h-auto min-h-[400px] md:min-h-[500px] lg:h-[65vh] lg:min-h-[500px] lg:max-h-[700px]">
        
        {/* Right Section with pink background */}
        <div className="relative bg-[#f8e2dd] rounded-lg md:rounded-xl lg:rounded-2xl flex flex-col lg:flex-row-reverse items-center justify-between gap-4 md:gap-6 lg:gap-8 lg:w-full lg:rounded-l-none h-full p-6 md:p-8 lg:p-10 xl:p-12">
          
          {/* Decorative angled bar - flipped to top right */}
          <div className="absolute top-[-8px] md:top-[-12px] lg:top-[-16px] right-[-7px] md:right-[-10px] lg:right-[-14px] w-[52px] md:w-[78px] lg:w-[104px] xl:w-[130px] h-[68px] md:h-[102px] lg:h-[136px] xl:h-[170px] bg-[#7b112a] [clip-path:polygon(26%_0,100%_0,100%_100%,72%_100%,72%_19%,0_19%)]"></div>

          {/* Right Column: Text */}
          <div className="flex-1 flex flex-col justify-center text-center lg:text-left h-full">
<div className="w-full bg-[#7b112a] text-white py-4 md:py-6 lg:py-8 shadow-md mb-5">
  <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold tracking-wide leading-tight text-center ">
    THE COURSE
  </h2>
</div>



            <div className="space-y-2 md:space-y-3 lg:space-y-4 text-gray-800 leading-snug md:leading-relaxed text-xs md:text-sm lg:text-base xl:text-lg overflow-hidden">
              <p>
                The 8-in-1 Creative Mastery program is a complete beginner-friendly training to launch your creator brand, unlock multiple income streams, and scale with strategy. 
              </p>
              <p>
                Learn step-by-step how to register your business, handle taxes, and earn through UGC, affiliate marketing, digital products, freelance setup, content creation, social media strategies more.
              </p>
              <p className="italic font-semibold">
                It also includes crash courses in video editing and Canva plus my Creator Pro Toolkit with 20+ premium templates and systems to help you grow, monetize, and scale with confidence. It’s everything you need to start earning online—no fluff, just clarity and value.
              </p>
            </div>
            <Link href="/Checkout">
            <button className="mt-4 md:mt-6 lg:mt-8 bg-[#7b112a] text-white font-bold uppercase px-6 md:px-8 lg:px-10 xl:px-12 py-2 md:py-3 lg:py-4 rounded-md lg:rounded-lg shadow-md hover:scale-105 transition-transform mx-auto block text-xs md:text-sm lg:text-base xl:text-lg">
  GRAB THE COURSE!
</button>
</Link>

          </div>

          {/* Middle Column: Computer Image */}
          <div className="flex-1 flex justify-center lg:justify-start items-center relative z-10 h-full">
  <img
    src="/CoursesPage/img-2.png"
    alt="Membership Preview"
    className="h-[70%] md:h-[80%] lg:h-[90%] xl:h-[100%] w-auto object-contain translate-x-0 lg:-translate-x-2 xl:-translate-x-4"
  />
</div>

          
        </div>
        
      </div>

    </section>
  );
}