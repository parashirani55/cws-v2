"use client";

import Image from "next/image";

export default function TwoTable() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16">
      {/* Grid with two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

        {/* ===== Column 1 ===== */}
        <div className="flex flex-col border border-black rounded-lg overflow-hidden w-full max-w-lg mx-auto">
          {/* Image div */}
          <div className="w-full bg-[#f6f1ee] overflow-hidden border-b border-black h-[180px] p-4">
            <Image
              src="/AboutUs/Section-1/TwoTable-1.png"
              alt="Course Bundle"
              width={500}
              height={180}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text div */}
          <div className="mt-6 text-center px-6 space-y-6 flex-1">
            <p className="text-gray-800 text-[18px] sm:text-[20px] leading-relaxed">
              If you’re just getting started, let’s get you caught up and accelerated, friend! <strong>The Course + Community Bundle </strong>includes my full step-by-step program—8 full courses, 20+ advanced resources, and proven systems to help you earn online through UGC, digital products, affiliate marketing and how to set up your freelance business from scratch.
            </p>

            <p className="text-gray-800 text-[18px] sm:text-[20px] leading-relaxed">
              You’ll also get a <strong>1-year membership to the CWS community and full dashboard access (normally $1,188)</strong> which will be your support system before, during, and after the course. Ask questions, connect with like-minded creators, and get un-stuck in real time.
            </p>
          </div>

          {/* Button div */}
          <div className="flex justify-center py-6 mt-auto">
            <button className="bg-[#c67287] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#b65f76] transition-colors whitespace-nowrap text-[18px] sm:text-[20px]">
              YES, I WANT THE BUNDLE!
            </button>
          </div>
        </div>

        {/* ===== Column 2 ===== */}
        <div className="flex flex-col border border-black rounded-lg overflow-hidden w-full max-w-lg mx-auto">
          {/* Image div */}
          <div className="w-full bg-[#f6f1ee] overflow-hidden border-b border-black h-[180px] p-4">
            <Image
              src="/AboutUs/Section-1/TwoTable-2.png"
              alt="CWS Monthly Membership"
              width={500}
              height={180}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text div */}
          <div className="mt-6 text-center px-6 space-y-6 flex-1">
            <p className="text-gray-800 text-[18px] sm:text-[20px] leading-relaxed">
              If you already know your way around UGC and digital products, <strong>the CWS Monthly Membership is your next move.</strong> You’ll get full dashboard access, including the Creator Hub—a rotating library of free resources, growth strategies and community-voted masterclasses. Plus, you can add a <strong>Pro Badge</strong> to your profile to stand out to brands and signal premium experience.
            </p>

            <p className="text-gray-800 text-[18px] sm:text-[20px] leading-relaxed">
              New trainings are also dropping soon on creative strategy, brand direction, and advanced services—perfect for scaling beyond UGC and charging more for your time!
            </p>
          </div>

          {/* Button div */}
          <div className="flex justify-center py-6 mt-auto">
            <button className="bg-[#7b112a] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#5e0e23] transition-colors whitespace-nowrap text-[18px] sm:text-[20px]">
              YES, I WANT TO JOIN!
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
