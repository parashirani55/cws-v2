"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ThirdSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
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
      avatar: "/UserImages/John.png",
      badges: [
        { name: "GRAPHIC DESIGNER", icon: "✏️", bg: "bg-orange-600" },
        { name: "VIDEO EDITOR", icon: "🎮", bg: "bg-green-600" },
      ],
    },
    {
      name: "janetsilver",
      location: "Australia",
      avatar: "/UserImages/Janet.png",
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
      className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background */}
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

      {/* Sparkles */}
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

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12">

        {/* Hero Section: logo left, workspace right on xl+, stacked below xl */}
        <div className="w-full flex flex-col xl:flex-row items-center justify-center xl:justify-between max-w-[1600px] mx-auto gap-10">
          
          {/* Logo */}
          <div className="w-full xl:w-2/2 flex justify-center xl:justify-end">
            <img
              src="/Logo/cws.png"
              alt="Logo"
              className="w-60 sm:w-80 md:w-[500px] xl:w-[580px] 2xl:w-[650px] h-auto object-contain"
            />
          </div>

          {/* Workspace */}
          {inView && (
            <div className="w-full xl:w-1/2 flex justify-center xl:justify-end mt-6 xl:mt-0">
              <div className="relative w-[160px] sm:w-[200px] md:w-[270px] lg:w-[310px] xl:w-[340px] aspect-square rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/workspace-mockup.png"
                  alt="Workspace"
                  fill
                  className="object-cover scale-[1.45]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Join Button */}
        <button className="bg-white text-black font-bold text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-10 sm:mt-12 md:mt-16 mb-12 lg:mb-10">
          JOIN NOW!
        </button>

        {/* Profile Cards */}
        <div className="w-full max-w-[95%] mx-auto grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-8">
          {profiles.map((profile, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-white to-gray-100 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gradient-to-b from-red-900 to-red-800 p-5 sm:p-6 text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white mx-auto mb-3 shadow-lg">
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
                <p className="text-white/80 text-xs flex items-center justify-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {profile.location}
                </p>
              </div>

              <div className="p-4 bg-white">
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {profile.badges.map((badge, badgeIdx) => (
                    <div
                      key={badgeIdx}
                      className={`${badge.bg} rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center shadow-md flex-1 min-w-[80px]`}
                    >
                      <div className="text-lg sm:text-xl mb-1">{badge.icon}</div>
                      <div className="text-white text-[9px] sm:text-[10px] font-bold text-center leading-tight uppercase">
                        {badge.name}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-black text-white font-bold py-2 rounded-full text-sm hover:bg-gray-900 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
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
