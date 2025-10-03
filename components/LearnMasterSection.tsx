import React from "react";

export default function LearnMasterSection() {
  return (
    <div className="bg-[#f4f0f0]">
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center py-12 sm:py-16 lg:py-24 w-full">
        {/* Left Image */}
        <div className="w-full lg:w-1/5 flex justify-center lg:justify-start">
          <img
            src="/2.png"
            alt="Platform Instructor"
            className="w-full h-auto max-h-[400px] object-contain"
          />
        </div>

        {/* Center Content */}
        <div className="flex-1 px-4 sm:px-8 lg:px-16 text-center lg:text-left space-y-6 text-black mt-8 lg:mt-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            For those who know the game <br />
            and those{" "}
            <span className="italic font-light">ready</span> to learn it.
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            This is the platform that grows with you.
          </p>

          <div className="pt-6 sm:pt-8 space-y-4">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
              Learn how to turn your{" "}
              <span className="text-red-900 font-bold">
                favorite parts of creating
              </span>{" "}
              into a profitable, scalable business.
            </p>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed">
              Build around your passion, your strengths <br />
              and your unique path.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/5 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src="/3.png"
            alt="Mobile Content Creation"
            className="w-full h-auto max-h-[400px] object-contain"
          />
        </div>
      </div>

      {/* Learn & Master Skills Section */}
      <div className="relative py-12 bg-gradient-to-r from-red-950 via-red-900 to-red-950 overflow-hidden">
        {/* Background Image */}
        <img
          src="/Gr-bg.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 items-center">
            {/* Logo Box */}
            <div className="rounded-lg w-full flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src="/LearnMaster.png"
                alt="Learn and Master"
                className="w-full h-auto max-h-[300px] object-contain"
              />
            </div>

            {/* Skills Grid */}
            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                "UGC",
                "CONTENT CREATION",
                "DIGITAL PRODUCTS",
                "AFFILIATE MARKETING",
                "BRAND DEALS",
                "CREATIVE STRATEGY",
                "VIDEO EDITING",
                "BUSINESS FREELANCING",
              ].map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 sm:gap-3 flex-wrap"
                >
                  <span className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-bold">
                    {skill}
                  </span>
                  <svg
                    className="w-5 sm:w-6 md:w-7 lg:w-8 h-5 sm:h-6 md:h-7 lg:h-8 text-green-500 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 
                      01-1.414 0l-4-4a1 1 0 
                      011.414-1.414L8 12.586l7.293-7.293a1 1 0 
                      011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
