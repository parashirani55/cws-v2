import React from 'react';
import Image from 'next/image';

export default function IncomeStrategySection() {
  return (
    <section className="bg-[#8B1538] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
         <h2 className="text-5xl md:text-6xl font-serif leading-tight text-center">
              Reveal Your Income Strategy
            </h2>

            <div className="space-y-3 text-center p-5">
              <p className="text-xl font-semibold">
                Confused by all the ways to earn online?
              </p>
              <p className="text-base leading-relaxed opacity-90">
                Take our 7-question quiz to discover the best money-making path<br />
                for you based on your goals, personality and skill level!
              </p>
            </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Circular Image */}
          <div className="flex justify-center md:justify-center">
            <div className="w-100 h-100 rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/girlwithlaptop.png"
                alt="Woman with laptop"
                width={320}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="text-white space-y-8">
            {/* Quiz Card */}
            <div className="relative bg-gray-200 rounded-lg p-8 shadow-xl">
              {/* Main Quiz Box */}


              {/* Desk Setup Image */}
              <div className="relative">
                <Image
                  src="/CreatorQuiz.png"
                  alt="Desk setup with laptop"
                  width={500}
                  height={200}
                  className="w-full rounded-lg"
                />
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}