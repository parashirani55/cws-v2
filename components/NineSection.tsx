'use client'
export default function FounderStorySection() {
  return (
    <section className="bg-white py-8 px-4 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Quote and Founder Image */}
        <div className="relative mb-12 md:mb-16 lg:mb-0">

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            {/* Quote Box */}
            <div className="w-full lg:w-[60%] xl:w-[55%] relative z-10">
              <div className="bg-[#F5EDE4] border-[3px] border-[#E8D7C3] rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 md:p-10 lg:p-12 relative">
                {/* Large Quote Marks */}
                <div className="absolute -top-6 sm:-top-8 md:-top-10 -left-3 sm:-left-4 md:-left-6 text-[70px] sm:text-[90px] md:text-[110px] lg:text-[130px] text-[#E8D7C3] font-serif leading-none select-none">
                  "
                </div>
                <div className="relative z-10 space-y-4 sm:space-y-6">
                  <p className="text-gray-900 text-[clamp(14px,2vw,18px)] leading-relaxed">
                    I built this platform from the challenges I faced over the years as a creator. When I started with UGC, I was on my own – no guidance, no support <span className="italic">and unsure if it would even work</span>. Then on top of that, agencies were taking huge cuts of brand deals while I did all the creative work. I knew there had to be an easier way, <span className="font-bold italic">so I created one for you.</span>
                  </p>
                  <p className="text-gray-900 text-[clamp(14px,2vw,18px)] leading-relaxed">
                    CWS is an all-in-one space with real training, resources, opportunities and a supportive community, all designed to help you grow. <span className="font-bold italic">It's everything I wish I had when I started and exactly what creators need now.</span>
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <span
                      className="text-[clamp(24px,3vw,40px)] text-gray-900 font-script"
                      style={{ fontFamily: 'Brush Script MT, cursive' }}
                    >
                      -Britney
                    </span>
                    <span className="text-[22px] sm:text-[28px]">💗</span>
                    <span className="text-[11px] sm:text-[12px] md:text-[13px] font-bold text-gray-900 uppercase tracking-wider">
                      Founder of CWS
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Founder Image */}
            <div className="w-full lg:w-[40%] xl:w-[45%] flex justify-center lg:justify-end">
              <div className="w-[240px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[480px]">
                <img
                  src="/owner/image.png"
                  alt="Britney - Founder of CWS"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview with Sneak Peek */}
        <div className="relative mt-1 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Sneak Peek Text + Arrow */}
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right relative z-20">
            
<img
              src="SneakPeak.png"
              alt="CWS Dashboard Preview"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>

          {/* Dashboard Image */}
          <div className="relative flex justify-center w-full lg:w-[85%] xl:w-[90%] z-10">
  <img
    src="/owner/Dashboard-preview.png"
    alt="CWS Dashboard Preview"
    className="w-full h-auto object-contain rounded-2xl scale-110"
  />
</div>

        </div>

        {/* Tailwind Wavy Animation */}
        <style jsx>{`
          @keyframes wavy {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
          .animate-wavy {
            animation: wavy 1.5s ease-in-out infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
