// 'use client'
// export default function FounderStorySection() {
//   return (
//     <section className="bg-white py-8 px-4 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* Top Section - Quote and Founder Image */}
//         <div className="relative mb-12 md:mb-16 lg:mb-0">

//           <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
//             {/* Quote Box */}
//             <div className="w-full lg:w-[60%] xl:w-[55%] relative z-10">
//               <div className="bg-[#F5EDE4] border-[3px] border-[#E8D7C3] rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 md:p-10 lg:p-12 relative">
//                 {/* Large Quote Marks */}
//                 <div className="absolute -top-6 sm:-top-8 md:-top-10 -left-3 sm:-left-4 md:-left-6 text-[70px] sm:text-[90px] md:text-[110px] lg:text-[130px] text-[#E8D7C3] font-serif leading-none select-none">
//                   "
//                 </div>
//                 <div className="relative z-10 space-y-4 sm:space-y-6">
//                   <p className="text-gray-900 text-[clamp(14px,2vw,18px)] leading-relaxed">
//                     I built this platform from the challenges I faced over the years as a creator. When I started with UGC, I was on my own – no guidance, no support <span className="italic">and unsure if it would even work</span>. Then on top of that, agencies were taking huge cuts of brand deals while I did all the creative work. I knew there had to be an easier way, <span className="font-bold italic">so I created one for you.</span>
//                   </p>
//                   <p className="text-gray-900 text-[clamp(14px,2vw,18px)] leading-relaxed">
//                     CWS is an all-in-one space with real training, resources, opportunities and a supportive community, all designed to help you grow. <span className="font-bold italic">It's everything I wish I had when I started and exactly what creators need now.</span>
//                   </p>
//                   <div className="flex items-center gap-2 pt-2">
//                     <span
//                       className="text-[clamp(24px,3vw,40px)] text-gray-900 font-script"
//                       style={{ fontFamily: 'Brush Script MT, cursive' }}
//                     >
//                       -Britney
//                     </span>
//                     <span className="text-[22px] sm:text-[28px]">💗</span>
//                     <span className="text-[11px] sm:text-[12px] md:text-[13px] font-bold text-gray-900 uppercase tracking-wider">
//                       Founder of CWS
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Founder Image */}
//             <div className="w-full lg:w-[40%] xl:w-[45%] flex justify-center lg:justify-end">
//               <div className="w-[240px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[480px]">
//                 <img
//                   src="/owner/image.png"
//                   alt="Britney - Founder of CWS"
//                   className="w-full h-auto object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Dashboard Preview with Sneak Peek */}
//         <div className="relative mt-1 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

//           {/* Sneak Peek Text + Arrow */}
//           <div className="flex flex-col items-start lg:items-end text-left lg:text-right relative z-20">
            
// <img
//               src="SneakPeak.png"
//               alt="CWS Dashboard Preview"
//               className="w-full h-auto object-contain rounded-xl"
//             />
//           </div>

//           {/* Dashboard Image */}
//           <div className="relative flex justify-center w-full lg:w-[85%] xl:w-[90%] z-10">
//   <img
//     src="/owner/Dashboard-preview.png"
//     alt="CWS Dashboard Preview"
//     className="w-full h-auto object-contain rounded-2xl scale-110"
//   />
// </div>

//         </div>

//         {/* Tailwind Wavy Animation */}
//         <style jsx>{`
//           @keyframes wavy {
//             0%, 100% { transform: translateY(0px); }
//             50% { transform: translateY(-6px); }
//           }
//           .animate-wavy {
//             animation: wavy 1.5s ease-in-out infinite;
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// }


'use client';
import React from 'react';

export default function FounderSection() {
  return (
    <section className="relative bg-gradient-to-br from-pink-100 via-pink-50 to-pink-100 py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="relative flex flex-col lg:flex-row items-start justify-between max-w-[1600px] mx-auto">

        {/* LEFT COLUMN */}
        <div className="flex-shrink-0 w-[300px] pl-6 lg:pl-12 mb-10 lg:mb-0">
          {/* Meet the Founder Title */}
          <div className="mb-10">
            <img 
              src="/camera/MeetTheFounder.svg" 
              alt="Meet the Founder"
              className="w-full max-w-[320px]" 
            />
          </div>

          {/* Polaroid Stack */}
          <div className="relative h-[650px]">
            <div className="absolute top-0 left-0 w-[200px] bg-white p-3 shadow-xl transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300">
              <img src="/camera/2.png" alt="Camera" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-[210px] left-[-10px] w-[200px] bg-white p-3 shadow-xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 z-10">
              <img src="/camera/1.png" alt="Professional" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-[20px] w-[180px] bg-white p-3 shadow-xl transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300">
              <div className="w-full aspect-[3/4] bg-gray-200 mb-2">
                <img src="/camera/3.png" alt="Beach" className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-center mt-1">
                <svg width="60" height="30" viewBox="0 0 60 30">
                  <path d="M5,15 Q15,8 25,15 Q35,22 45,15 Q48,13 50,15" stroke="#ff6b9d" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* FOUNDER IMAGE */}
        <div className="relative flex justify-center lg:justify-start z-20 lg:ml-[-60px] lg:mr-[-80px] mt-8 lg:mt-0 self-stretch">
          <div className="relative flex flex-col justify-end h-full">
            <img 
              src="/Founder.png" 
              alt="Britney - Founder"
              className="object-contain w-auto max-h-[780px]"
              style={{ objectPosition: 'bottom' }}
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 flex flex-col justify-between min-w-0 z-10 mt-10 lg:mt-0 relative h-full">

          {/* Box 1 */}
          <div className="bg-[#f8d5dd] text-[#84092a] px-8 py-8 rounded-tl-[2rem]">
            <h2 className="text-[2.5rem] font-bold leading-tight mb-2">
              From Zero to 6-Figures →
            </h2>
            <p className="text-[2.5rem] font-bold italic leading-tight">
              Now It's <span className="font-bold italic">Your Turn.</span>
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-[#84092a] text-white px-8 py-12 lg:py-16 space-y-5 flex-grow">
            <p className="text-[1.1rem] leading-relaxed">
              <span className="font-bold">Welcome!</span> My name is Britney and I'm SO glad you're here! So, here's what happened...
            </p>
            <p className="text-[1.1rem] leading-relaxed">
              After the pandemic shut down the place I worked for pretty much my entire 20s, I started with nothing but an iPhone and the drive to build reliable income and long-term stability—<span className="italic font-semibold">on my own terms.</span>
            </p>
            <p className="text-[1.1rem] leading-relaxed">
              Fast-forward 150+ UGC brand deals later, I realized content creation was just the beginning. I wanted more—more income, more freedom, and more control over my time. So I built a <span className="font-bold">6-figure online business</span> from home, combining creative strategy, client work, UGC, digital products and more to create multiple income streams.
            </p>
            <p className="text-[1.1rem] leading-relaxed">
              Inside CWS, I teach exactly how I did it so you can stop undercharging, land high-paying clients, and grow a creative business that supports the life you actually want.
            </p>
          </div>

          {/* Box 3 (CTA) */}
          <div className="absolute right-0 left-auto bottom-0 bg-[#f8d5dd] px-10 py-8 rounded-bl-[2rem] flex items-center justify-center lg:-ml-[100px] relative z-30 shadow-md w-full lg:w-[calc(100%+100px)] lg:translate-x-[0]">
            <p className="text-[1.2rem] text-[#84092a] leading-relaxed text-center max-w-2xl font-medium">
              <span className="font-bold italic">Want the full story?</span>{' '}
              <a 
                href="#" 
                className="text-blue-600 font-bold underline hover:text-blue-800 transition-colors"
              >
                Click here
              </a>{' '}
              to learn more about how I built my business from scratch, how CWS came into the picture & <span className="italic font-semibold">how it can help you also...</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
