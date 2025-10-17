'use client';
import Image from 'next/image';

export default function FounderStorySection() {
  return (
    <section className="relative w-full bg-white py-4 sm:py-6 lg:py-10 px-3 sm:px-8 lg:px-20 overflow-visible">
      <div className="relative max-w-7xl mx-auto flex flex-col items-center">

        {/* ===== Text Card (Tablet & Desktop) ===== */}
        <div
          className="relative w-full md:w-[90%] lg:w-[90%] rounded-2xl overflow-hidden hidden md:flex flex-col justify-center]"
          style={{
            backgroundImage: "url('/9/card-bg.webp')",
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#ffffff',
            paddingTop: '15rem',
            paddingBottom: '9rem',
            paddingLeft: '8rem',
            paddingRight: '3rem',
            marginLeft: '-28rem', // pushed more to the left

          }}
        >
          {/* Soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-white/25 to-transparent z-0 rounded-2xl"></div>

          {/* Text Content */}
          <div className="relative z-10 space-y-6 text-gray-900 text-left leading-[1.8] max-w-[95%]">
            <p className="text-[19px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[30px]">
              I built this platform from the challenges I faced over the years as a creator. When I started with UGC, I was on my own — no guidance, no support and unsure if it would even work. Then on top of that, agencies were taking huge cuts of brand deals while I did all the creative work. <strong>so I created one for you.</strong>
            </p>
            <p className="text-[19px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[30px]">
              CWS is an all-in-one space with real training, resources, opportunities and a supportive community, all designed to help you grow. <strong>It’s everything I wish I had when I started and exactly what creators need now.</strong>
            </p>

            {/* Signature */}
            <div className="relative w-full pt-6">
              <Image
                src="/9/sign.webp"
                alt="Britney Signature"
                width={380}
                height={130}
                draggable="false"
                className="object-contain absolute right-0 bottom-0 sm:bottom-4 md:bottom-6 lg:bottom-8"
              />
            </div>
          </div>
        </div>

        {/* ===== Center Image (Dashboard) ===== */}
        <div className="w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[90vw] mt-[-180px] sm:mt-[-200px] md:mt-[-500px] ml-[-5rem] relative z-50! flex justify-center">
          <Image
            src="/9/dashboard-owner.webp"
            alt="Britney - Founder of CWS"
            width={1100}
            height={750}
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>

        {/* ===== Mobile Layout (3 stacked images) ===== */}
        <div className="block md:hidden w-full space-y-3 mt-8">
          <Image
            src="/9/mobile-1.webp"
            alt="CWS Mobile Story 1"
            width={800}
            height={600}
            className="w-full h-auto rounded-2xl object-cover"
          />
          <Image
            src="/9/mobile-2.webp"
            alt="CWS Mobile Story 2"
            width={800}
            height={600}
            className="w-full h-auto rounded-2xl object-cover"
          />
          <Image
            src="/9/mobile-3.webp"
            alt="CWS Mobile Story 3"
            width={800}
            height={600}
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes wavy {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-wavy {
          animation: wavy 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
