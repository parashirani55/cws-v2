import React from 'react';

export default function LearnMasterSection() {
  return (
    <div className="bg-[#f4f0f0]">
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center py-16 lg:py-24 w-full">
  {/* Left Image */}
  <div className="flex-shrink-0 w-full lg:w-1/5">
    <img
      src="/2.png"
      alt="Platform Instructor"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Center Content */}
  <div className="flex-1 px-8 lg:px-16 text-center lg:text-left space-y-6 text-black">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
      For those who know the game<br />
      and those <span className="italic font-light">ready</span> to learn it.
    </h2>

    <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
      This is the platform that grows with you.
    </p>

    <div className="pt-8 space-y-4">
      <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed">
        Learn how to turn your <span className="text-red-900 font-bold">favorite parts of creating</span> into a profitable, scalable business.
      </p>

      <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed">
        Build around your passion, your strengths<br />
        and your unique path.
      </p>
    </div>
  </div>

  {/* Right Image */}
  <div className="flex-shrink-0 w-full lg:w-1/5">
    <img
      src="/3.png"
      alt="Mobile Content Creation"
      className="w-full h-full object-cover"
    />
  </div>
</div>


      {/* Learn & Master Skills Section */}
      <div className="relative py-12 bg-gradient-to-r from-red-950 via-red-900 to-red-950">
  {/* Background Image */}
  <img 
    src="/Gr-bg.png" 
    alt="Background" 
    className="absolute inset-0 w-full h-full object-cover opacity-70"
  />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-8">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
      
      {/* Logo Box */}
      <div className="rounded-lg w-full h-full flex items-center justify-center shadow-lg overflow-hidden">
        <img src="/LearnMaster.png" alt="Learn and Master" className="w-full h-full object-cover" />
      </div>

      {/* Skills Grid */}
      <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-max">
  {/* Skill Item 1 */}
  <div className="flex items-center gap-3">
    <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">UGC</span>
    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  </div>

  {/* Skill Item 2 */}
  <div className="flex items-center gap-3">
    <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">CONTENT CREATION</span>
    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  </div>

  {/* Skill Item 3 */}
  <div className="flex items-center gap-3">
    <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">DIGITAL PRODUCTS</span>
    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  </div>

  {/* Skill Item 4 */}
  <div className="flex items-center gap-3">
    <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">AFFILIATE MARKETING</span>
    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  </div>

  {/* Skill Item 5 */}
  <div className="flex items-center gap-3">
    <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">BRAND DEALS</span>
    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  </div>

  {/* Skill Item 6 */}
  <div className="flex items-center gap-3">
    <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">CREATIVE STRATEGY</span>
    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  </div>

  {/* Skill Item 7 */}
  <div className="flex items-center gap-3">
    <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">VIDEO EDITING</span>
    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  </div>

  {/* Skill Item 8 */}
  <div className="flex items-center gap-3">
    <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">BUSINESS FREELANCING</span>
    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  </div>
</div>

    </div>
  </div>
</div>

    </div>
  );
}