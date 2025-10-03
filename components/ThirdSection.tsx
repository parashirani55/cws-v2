"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ThirdSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Observe when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true); // trigger animation once
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const profiles = [
    {
      name: "sarahsmith",
      location: "United States",
      avatar: "/UserImages/sara.png",
      badges: [
        { name: "CWS CREATOR", icon: "🎬", bg: "bg-red-900" },
        { name: "UGC CREATOR", icon: "👥", bg: "bg-purple-600" },
      ],
    },
    {
      name: "shelbyrose",
      location: "United Kingdom",
      avatar: "/UserImages/shelby.png",
      badges: [
        { name: "BRAND DEALS", icon: "💡", bg: "bg-blue-400" },
        { name: "SOCIAL MEDIA MANAGER", icon: "⚖️", bg: "bg-pink-500" },
      ],
    },
    {
      name: "johnfranklin",
      location: "Canada",
      avatar: "/UserImages/john.png",
      badges: [
        { name: "GRAPHIC DESIGNER", icon: "✏️", bg: "bg-orange-600" },
        { name: "VIDEO EDITOR", icon: "🎮", bg: "bg-green-600" },
      ],
    },
    {
      name: "janetsilver",
      location: "Australia",
      avatar: "/UserImages/janet.png",
      badges: [
        { name: "CREATIVE DIRECTOR", icon: "🎨", bg: "bg-blue-700" },
        { name: "SCRIPT WRITER", icon: "📝", bg: "bg-yellow-500" },
      ],
    },
    {
      name: "lesliemccoy",
      location: "Ireland",
      avatar: "/UserImages/lasy.png",
      badges: [
        { name: "UGC CREATOR", icon: "👥", bg: "bg-purple-600" },
        { name: "SOCIAL MEDIA MANAGER", icon: "📱", bg: "bg-pink-500" },
      ],
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/third-sec-bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      {/* Sparkle Effects */}
      {inView && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `fadeTwinkle ${2 + Math.random() * 2}s ease forwards`,
                animationDelay: `${Math.random() * 1.5}s`,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 0L11.5 8.5L20 10L11.5 11.5L10 20L8.5 11.5L0 10L8.5 8.5L10 0Z"
                  fill="white"
                  opacity="0.6"
                />
              </svg>
            </div>
          ))}
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-24 sm:pt-32 pb-16">
        {/* Hero Section with Circle in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center w-full max-w-6xl mb-12">
          {/* Hero Text */}
          <div className="col-span-1 lg:col-span-2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-4">
              <span className="text-black">CREATIVE </span>
              <span className="text-red-900">WEALTH</span>
            </h1>

            {/* Circular Dots + SOCIETY */}
            <div className="relative inline-block">
              {inView && (
                <div className="absolute -left-20 sm:-left-32 top-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path
                      d="M 100 20 A 80 80 0 0 1 180 100"
                      fill="none"
                      stroke="none"
                    >
                      {[...Array(25)].map((_, i) => (
                        <circle
                          key={i}
                          r="3"
                          fill="#7D1F1F"
                          opacity={0.8 - i * 0.03}
                        >
                          <animateMotion
                            dur="2.5s"
                            repeatCount="1"
                            path="M 100 20 A 80 80 0 0 1 180 100"
                            begin={`${i * 0.08}s`}
                          />
                        </circle>
                      ))}
                    </path>
                  </svg>
                </div>
              )}

              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-wide text-black">
                SOCIETY
              </h2>
            </div>
          </div>

          {/* Workspace Image Circle */}
          {inView && (
            <div className="hidden md:flex items-center justify-center">
              <div className="w-40 h-40 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 lg:border-8 border-white shadow-2xl">
                <div className="relative w-full h-full">
                  <Image
                    src="/workspace-mockup.png"
                    alt="Workspace"
                    fill
                    className="object-cover scale-125 lg:scale-150"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Join Now Button */}
        <button className="bg-white text-black font-bold text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-12 sm:mb-20">
          JOIN NOW!
        </button>

        {/* Profile Cards Section */}
        <div className="flex gap-4 sm:gap-6 items-center justify-center flex-wrap max-w-7xl">
          {profiles.map((profile, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-white to-gray-100 rounded-2xl shadow-xl w-40 sm:w-48 md:w-56 overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {/* Profile Header */}
              <div className="bg-gradient-to-b from-red-900 to-red-800 p-4 sm:p-6 text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white mx-auto mb-3 shadow-lg">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    width={112}
                    height={112}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-sm sm:text-base md:text-lg">
                  @{profile.name}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm flex items-center justify-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {profile.location}
                </p>
              </div>

              {/* Badges */}
              <div className="p-3 sm:p-4 bg-white">
                <div className="flex gap-2 justify-center mb-3 sm:mb-4">
                  {profile.badges.map((badge, badgeIdx) => (
                    <div
                      key={badgeIdx}
                      className={`${badge.bg} rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center shadow-md flex-1`}
                    >
                      <div className="text-lg sm:text-xl mb-1">{badge.icon}</div>
                      <div className="text-white text-[8px] sm:text-[9px] md:text-[10px] font-bold text-center leading-tight uppercase">
                        {badge.name}
                      </div>
                    </div>
                  ))}
                </div>

                {/* View Profile Button */}
                <button className="w-full bg-black text-white font-bold py-1.5 sm:py-2 px-2 sm:px-4 rounded-full text-xs sm:text-sm hover:bg-gray-900 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeTwinkle {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
        }
      `}</style>
    </div>
  );
}
