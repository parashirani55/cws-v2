export default function OnlineIncomeLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 md:p-12 lg:p-16">
          
          {/* Left Section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-red-900 mb-6 sm:mb-8 lg:mb-12">
              This is <span className="underline decoration-4 underline-offset-8">for you if</span>...
            </h1>

            {/* Benefits */}
            <div className="space-y-5 sm:space-y-6 mb-8 md:mb-10">
              
              {[
                `You want to understand the different ways to make money online and combine multiple income streams to hit $10K+ months.`,
                `You want to wake up to brand deal offers—not chase cold pitches.`,
                `You're tired of guessing what to post, charge, or say in negotiations.`,
                `You're done feeling isolated working alone or over a toxic online group.`,
                `You want to connect with strong, successful likeminded people (and maybe meet your new online bestie!)`,
                `You're ready to charge 3–5x more for your work and know exactly how to ask for it.`,
                `You're ready to stand out in a crowded space with proven growth strategies.`
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-700 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed pt-0.5 sm:pt-1">
                    {text}
                  </p>
                </div>
              ))}

            </div>

            {/* CTA Button */}
            <button className="bg-red-900 hover:bg-red-800 text-white font-bold text-base sm:text-lg md:text-xl py-3 sm:py-4 px-8 sm:px-10 md:px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 self-center lg:self-start">
              YES, I'M READY!
            </button>
          </div>

          {/* Right Section - Image */}
          <div className="flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden w-full h-full min-h-[280px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[550px] xl:min-h-[600px]">
              <img 
                src="/12/photo.png" 
                alt="Online income success"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
