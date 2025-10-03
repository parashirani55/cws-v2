export default function FoundersCircleSection() {
  return (
    <section className="relative min-h-screen py-12 px-4 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/11/bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Pink Header Bar */}
        <div className="bg-[#E8B4D1] py-4 sm:py-5 md:py-6 mb-6 sm:mb-8 rounded-t-xl sm:rounded-t-2xl">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold italic px-4" style={{fontFamily: 'Georgia, serif'}}>
            <span className="text-black">Founder's Circle </span>
            <span className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full border-4 sm:border-[5px] md:border-[6px] border-red-600 mx-1 sm:mx-2 align-middle"></span>
            <span className="text-black"> Now Open!</span>
          </h1>
        </div>

        {/* Main Content Box */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-b-xl sm:rounded-b-2xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              {/* Limited Enrollment Header */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-blue-700 mb-4 sm:mb-6">
                  Limited Enrollment!
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed">
                  Join the first <span className="font-black">100 creators</span> in the <span className="italic">CWS Founder's Circle</span> and unlock exclusive perks designed to amplify your presence, visibility, and experience—available only to our earliest members, <span className="font-black">including:</span>
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-3 sm:space-y-4">
                {[
                  { emoji: '💫', title: 'VIP Badge', desc: 'Stand out in the community as a Founding Member.' },
                  { emoji: '🚀', title: 'Early Access', desc: 'Be first to hear about brand deals, new opportunities + feature', highlight: 'drops.' },
                  { emoji: '🎫', title: 'Large Discounts', desc: 'Save on future courses, events, and premium resources.' },
                  { emoji: '🧠', title: 'Voting Power', desc: 'Help shape monthly mastermind topics and platform features.' },
                  { emoji: '📌', title: 'Priority Support', desc: 'Get first-response access from Britney & the CWS team.' },
                  { emoji: '🤝', title: 'Brand Connections', desc: 'Build relationships for exclusive intros and potential partnerships.' },
                  { emoji: '💰', title: 'Higher Commissions', desc: 'Earn more when you share CWS with your audience.' },
                  { emoji: '🔒', title: 'Lifetime Status', desc: 'Your FM title never expires—even if you pause your membership.' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <span className="text-2xl sm:text-3xl flex-shrink-0 mt-1">{item.emoji}</span>
                    <p className="text-base sm:text-lg md:text-xl text-gray-900">
                      <span className="font-black">{item.title}</span>
                      <span className="text-gray-800"> — {item.desc}</span>
                      {item.highlight && <span className="font-black"> {item.highlight}</span>}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              
            </div>

            {/* Right Column - Badge */}
            <div className="lg:col-span-1 flex flex-col items-center justify-start">
              <div className="relative mb-4 sm:mb-6">
                {/* Arrow and Text */}

                {/* Badge Image */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto mt-16 sm:mt-20">
                  <img
                    src="/11/badge.png"
                    alt="VIP Founder Badge"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
         <div className="flex justify-center lg:justify-center pt-4 sm:pt-6">
                <button className="bg-[#8B1538] hover:bg-[#6B1028] text-white font-black text-lg sm:text-xl md:text-2xl py-4 sm:py-5 md:py-6 px-8 sm:px-12 md:px-16 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl uppercase tracking-wide">
                  Claim My Spot!
                </button>
              </div>
        </div>

        
      </div>
    </section>
  );
}