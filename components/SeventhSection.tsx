'use client';
import React from 'react';

export default function FounderSection() {
    return (
        <section className="bg-gradient-to-br from-pink-100 via-pink-50 to-pink-100 py-8 md:py-12 lg:py-16 overflow-hidden">

            {/* =======================
                💻 DESKTOP VERSION (>1024px)
            ======================== */}
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-[300px_400px_1fr] gap-0 w-full px-4 lg:px-10">

                {/* 1st Grid - Left Column - Polaroid Images */}
                <div className="flex flex-col items-end space-y-6 relative z-10">
                    <div className="mb-2">
                        <img
                            src="/camera/MeetTheFounder.svg"
                            alt="Meet the Founder"
                            className="w-full max-w-[30.875rem]"
                        />
                    </div>

                    <div className="relative h-[40rem] w-full flex flex-col justify-end items-end gap-10">
                        <div className="w-[12.5rem] bg-white p-2 shadow-xl transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300">
                            <img src="/camera/2.png" alt="Camera" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[12.5rem] bg-white p-2 shadow-xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300">
                            <img src="/camera/1.png" alt="Professional" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[11.25rem] bg-white p-2 shadow-xl transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300">
                            <img src="/camera/3.png" alt="Beach" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* 2nd Grid - Center Column - Main Founder Image */}
                <div className="relative flex items-start justify-center lg:justify-center lg:-ml-16 lg:-mr-20 z-31">
                    <div className="relative pt-12">
                        <img
                            src="/Founder.png"
                            alt="Britney - Founder"
                            className="w-full max-w-[40rem] sm:max-w-[44rem] lg:max-w-[50rem] xl:max-w-[52rem] h-auto object-contain"
                        />
                    </div>
                </div>

                {/* 3rd Grid - Right Column */}
                <div className="relative flex flex-col lg:-ml-4">
                    <div className="bg-gradient-to-r from-[#f8d5dd] to-[#fce4e9] text-[#84092a] px-8 py-6 rounded-tl-[2rem]">
                        <h2 className="text-[1.8em] sm:text-[2em] md:text-[2.3em] lg:text-[2.8em] font-bold leading-tight">
                            From Zero to 6-Figures <span className="text-black">→</span>
                        </h2>
                        <p className="text-[1.6em] sm:text-[1.8em] md:text-[2em] lg:text-[2.4em] font-bold italic leading-tight mt-1">
                            Now It's <span className="italic">Your Turn.</span>
                        </p>
                    </div>

                    <div className="bg-gradient-to-b from-[#84092a] to-[#6d0724] text-white pl-16 sm:pl-20 md:pl-24 lg:pl-32 pr-8 py-8 pb-20 space-y-6 flex-grow max-w-full lg:w-[60vw] z-3">
                        <p className="text-[1.1em] sm:text-[1.2em] md:text-[1.3em] lg:text-[1.4em] leading-relaxed">
                            <span className="font-bold">Welcome!</span> My name is Britney and I'm SO glad you're here! So, here's what happened...
                        </p>
                        <p className="text-[1.1em] sm:text-[1.2em] md:text-[1.3em] lg:text-[1.4em] leading-relaxed">
                            After the pandemic shut down the place I worked for pretty much my entire 20s, I started with nothing but an iPhone and the drive to build reliable income and long-term stability—<span className="italic font-semibold">on my own terms.</span>
                        </p>
                        <p className="text-[1.1em] sm:text-[1.2em] md:text-[1.3em] lg:text-[1.4em] leading-relaxed">
                            Fast-forward 150+ UGC brand deals later, I realized content creation was just the beginning. I wanted more—more income, more freedom, and more control over my time. So I built a <span className="font-bold">6-figure online business</span> from home, combining creative strategy, client work, UGC, digital products and more to create multiple income streams.
                        </p>
                        <p className="text-[1.1em] sm:text-[1.2em] md:text-[1.3em] lg:text-[1.4em] leading-relaxed">
                            Inside CWS, I teach exactly how I did it so you can stop undercharging, land high-paying clients, and grow a creative business that supports the life you actually want.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-pink-200 via-pink-100 to-purple-100 px-14 py-10 rounded-[2rem] shadow-2xl -mt-24 lg:-mt-15 -ml-8 lg:-ml-50 lg:mr-8 z-30 w-full max-w-[90%] mx-auto text-center z-32">
                        <p className="text-[1.2em] sm:text-[1.3em] md:text-[1.4em] lg:text-[1.5em] text-[#84092a] leading-relaxed">
                            <span className="font-bold italic">Want the full story?</span>{' '}
                            <a
                                href="#"
                                className="text-blue-600 font-bold underline hover:text-blue-800 transition-colors"
                            >
                                Click here
                            </a>{' '}
                            to learn more about how I built my business from scratch, how CWS came into the picture & <span className="italic">how it can help you also...</span>
                        </p>
                    </div>
                </div>
            </div>


            {/* =======================
                📱 MOBILE VERSION (<640px)
            ======================== */}
            <div className="block sm:hidden text-center px-6 space-y-8">
                <img src="/Founder.png" alt="Founder" className="w-64 mx-auto rounded-3xl shadow-lg" />
                <div>
                    <h2 className="text-3xl font-bold text-[#84092a]">From Zero to 6-Figures →</h2>
                    <p className="text-2xl italic font-bold text-[#84092a]">Now It’s <span className="italic">Your Turn.</span></p>
                </div>
                <p className="text-base text-[#6d0724]">
                    <span className="font-bold">Welcome!</span> I’m Britney — I built a 6-figure business from scratch using just an iPhone and strategy.
                </p>
                <a href="#" className="inline-block bg-pink-200 text-[#84092a] px-6 py-3 rounded-full font-bold shadow-md">
                    Read My Story
                </a>
            </div>


            {/* =======================
                💻 TABLET VERSION (≥640px and <1024px)
            ======================== */}
            <div className="hidden sm:block lg:hidden px-10 text-center space-y-10">
                <img src="/Founder.png" alt="Founder" className="w-80 mx-auto rounded-3xl shadow-lg" />
                <div>
                    <h2 className="text-4xl font-bold text-[#84092a]">From Zero to 6-Figures →</h2>
                    <p className="text-3xl italic font-bold text-[#84092a]">Now It’s <span className="italic">Your Turn.</span></p>
                </div>
                <p className="text-lg text-[#6d0724] max-w-2xl mx-auto">
                    After the pandemic, I started from zero — with just an iPhone and determination. Now I run a 6-figure online business and help others do the same inside CWS.
                </p>
                <a href="#" className="inline-block bg-gradient-to-r from-pink-200 to-purple-100 text-[#84092a] px-8 py-3 rounded-full font-bold shadow-lg">
                    Discover How →
                </a>
            </div>

        </section>
    );
}
