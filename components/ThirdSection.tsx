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

  // ✅ Profile data
  const profiles = [
    {
      name: "sarahsmith",
      location: "United States",
      avatar: "/UserImages/sara.png",
      badges: [
        { name: "/member-cards/1.png", icon: "🎬" },
        { name: "/member-cards/2.png", icon: "👥" },
      ],
    },
    {
      name: "shelbyrose",
      location: "United Kingdom",
      avatar: "/UserImages/shelby.png",
      badges: [
        { name: "/member-cards/3.png", icon: "💡" },
        { name: "/member-cards/4.png", icon: "⚖️" },
      ],
    },
    {
      name: "johnfranklin",
      location: "Canada",
      avatar: "/UserImages/John.png",
      badges: [
        { name: "/member-cards/5.png", icon: "🎮" },
        { name: "/member-cards/6.png", icon: "✏️" },
      ],
    },
    {
      name: "janetsilver",
      location: "Australia",
      avatar: "/UserImages/Janet.png",
      badges: [
        { name: "/member-cards/7.png", icon: "🎨" },
        { name: "/member-cards/8.png", icon: "📝" },
      ],
    },
    {
      name: "lesliemccoy",
      location: "Ireland",
      avatar: "/UserImages/lasy.png",
      badges: [
        { name: "/member-cards/9.png", icon: "👥" },
        { name: "/member-cards/10.png", icon: "📱" },
      ],
    },
  ];

  // ✅ Reusable BadgeGrid component
  const BadgeGrid = ({ badges }: { badges: any[] }) => (
    <div
      className="flex flex-wrap justify-center"
      style={{
        gap: "clamp(8px, 1.2vw, 12px)",
        marginBottom: "clamp(16px, 2vh, 20px)",
      }}
    >
      {badges.map((badge, i) => (
        <div
          key={i}
          className="relative rounded-lg overflow-hidden flex-1 hover:scale-105 hover:shadow-xl hover:shadow-white/30 transition-all duration-300"
          style={{
            minWidth: "clamp(90px, 18vw, 110px)",
            height: "clamp(70px, 10vh, 85px)",
          }}
        >
          <Image
            src={badge.name} // ✅ Correct path
            alt={badge.icon || `badge-${i}`}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center"
    >
      {/* 🌈 Background */}
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

      {/* ✨ Sparkles */}
      {inView && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `fadeTwinkle ${
                  2 + Math.random() * 2
                }s ease forwards`,
                animationDelay: `${Math.random() * 1.5}s`,
              }}
            >
              <svg
                style={{
                  width: "clamp(12px, 1.5vw, 20px)",
                  height: "clamp(12px, 1.5vw, 20px)",
                }}
                viewBox="0 0 20 20"
                fill="none"
              >
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

      {/* 🌟 Main Content */}
      <div
        className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen py-[4vh]"
        style={{
          paddingLeft: "clamp(12px, 2vw, 64px)",
          paddingRight: "clamp(12px, 2vw, 64px)",
        }}
      >
        {/* 🖼️ Hero Section */}
        <div
          className="w-full grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] items-center"
          style={{ gap: "clamp(20px, 3vw, 40px)" }}
        >
          {/* Column 1: Empty on desktop, workspace on mobile */}
          <div className="flex justify-center lg:justify-start">
            {inView && (
              <div
                className="relative rounded-full overflow-hidden border-white shadow-2xl lg:hidden"
                style={{
                  width: "clamp(200px, 35vw, 450px)",
                  height: "clamp(200px, 35vw, 450px)",
                  borderWidth: "clamp(3px, 0.4vw, 5px)",
                }}
              >
                <Image
                  src="/workspace-mockup.png"
                  alt="Workspace"
                  fill
                  className="object-cover scale-[1.5]"
                />
              </div>
            )}
          </div>

          {/* Column 2: Logo Center */}
          <div className="flex justify-center">
            <div style={{ width: "clamp(280px, 50vw, 1200px)", height: "auto" }}>
              <Image
                src="/Logo/logo-2.png"
                alt="Logo"
                width={1000}
                height={500}
                priority
                className="w-full h-auto object-contain transition-all duration-300"
              />
            </div>
          </div>

          {/* Column 3: Workspace on desktop */}
          {inView && (
            <div className="hidden lg:flex justify-start">
  <div
    className="relative rounded-full overflow-hidden border-white shadow-2xl"
    style={{
      width: "clamp(160px, 25vw, 360px)",   // reduced
      height: "clamp(160px, 25vw, 360px)",  // reduced
      borderWidth: "clamp(2px, 0.3vw, 4px)", // slightly thinner
    }}
  >
    <Image
      src="/workspace-mockup.png"
      alt="Workspace"
      fill
      className="object-cover scale-[1.3]" // slightly smaller scale
    />
  </div>
</div>

          )}
        </div>

        {/* 🚀 Join Button */}
        <button
  className="bg-white text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
  style={{
    fontSize: "clamp(16px, 1.8vw, 24px)",
    paddingLeft: "clamp(32px, 5vw, 80px)",
    paddingRight: "clamp(32px, 5vw, 80px)",
    paddingTop: "clamp(12px, 1.5vh, 18px)",
    paddingBottom: "clamp(12px, 1.5vh, 18px)",
    marginTop: "clamp(-20px, -9vw, -90px)", // responsive negative top margin
    marginBottom: "clamp(60px, 8vw, 120px)",   // responsive bottom margin
  }}
>
  JOIN NOW!
</button>


        {/* 👥 Profile Cards */}
        <div className="w-full">
          {/* Mobile: Scrollable */}
          <div
            className="lg:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{
              gap: "clamp(16px, 3vw, 24px)",
              paddingBottom: "clamp(16px, 2vh, 24px)",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {profiles.map((profile, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 snap-center bg-gradient-to-b from-white to-gray-100 rounded-2xl shadow-xl overflow-hidden"
                style={{ width: "clamp(260px, 70vw, 320px)" }}
              >
                {/* Header */}
                <div
                  className="bg-gradient-to-b from-red-900 to-red-800 text-center"
                  style={{ padding: "clamp(20px, 3vh, 28px)" }}
                >
                  <div
                    className="rounded-full overflow-hidden border-white mx-auto shadow-lg"
                    style={{
                      width: "clamp(80px, 15vw, 110px)",
                      height: "clamp(80px, 15vw, 110px)",
                      borderWidth: "clamp(3px, 0.5vw, 5px)",
                      marginBottom: "clamp(12px, 1.5vh, 16px)",
                    }}
                  >
                    <Image
                      src={profile.avatar}
                      alt={profile.name}
                      width={112}
                      height={112}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3
                    className="text-white font-bold"
                    style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
                  >
                    @{profile.name}
                  </h3>
                  <p
                    className="text-white/80 flex items-center justify-center"
                    style={{
                      fontSize: "clamp(12px, 1.5vw, 14px)",
                      gap: "clamp(4px, 0.5vw, 6px)",
                    }}
                  >
                    <svg
                      style={{
                        width: "clamp(12px, 1.5vw, 14px)",
                        height: "clamp(12px, 1.5vw, 14px)",
                      }}
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
                <div className="bg-white" style={{ padding: "clamp(16px, 2vw, 20px)" }}>
                  <BadgeGrid badges={profile.badges} />
                  <button
                    className="w-full bg-black text-white font-bold rounded-full hover:bg-gray-900 transition-colors"
                    style={{
                      fontSize: "clamp(13px, 1.8vw, 16px)",
                      paddingTop: "clamp(10px, 1.2vh, 12px)",
                      paddingBottom: "clamp(10px, 1.2vh, 12px)",
                    }}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Grid */}
          <div
            className="hidden lg:grid lg:grid-cols-5 w-full max-w-[98%] mx-auto"
            style={{
              gap: "clamp(20px, 2vw, 48px)",
              marginBottom: "clamp(24px, 3vh, 32px)",
            }}
          >
            {profiles.map((profile, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-white to-gray-100 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div
                  className="bg-gradient-to-b from-red-900 to-red-800 text-center"
                  style={{ padding: "clamp(16px, 2vh, 24px)" }}
                >
                  <div
                    className="rounded-full overflow-hidden border-white mx-auto shadow-lg"
                    style={{
                      width: "clamp(70px, 6vw, 96px)",
                      height: "clamp(70px, 6vw, 96px)",
                      borderWidth: "clamp(2px, 0.3vw, 4px)",
                      marginBottom: "clamp(8px, 1vh, 12px)",
                    }}
                  >
                    <Image
                      src={profile.avatar}
                      alt={profile.name}
                      width={112}
                      height={112}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3
                    className="text-white font-bold"
                    style={{ fontSize: "clamp(14px, 1.1vw, 18px)" }}
                  >
                    @{profile.name}
                  </h3>
                  <p
                    className="text-white/80 flex items-center justify-center gap-1"
                    style={{ fontSize: "clamp(11px, 0.9vw, 12px)" }}
                  >
                    <svg
                      style={{
                        width: "clamp(10px, 1vw, 12px)",
                        height: "clamp(10px, 1vw, 12px)",
                      }}
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

                <div
                  className="bg-white"
                  style={{ padding: "clamp(12px, 1.2vw, 16px)" }}
                >
                  <BadgeGrid badges={profile.badges} />
                  <button
                    className="w-full bg-black text-white font-bold rounded-full hover:bg-gray-900 transition-colors"
                    style={{
                      fontSize: "clamp(11px, 1vw, 14px)",
                      paddingTop: "clamp(6px, 0.8vh, 8px)",
                      paddingBottom: "clamp(6px, 0.8vh, 8px)",
                    }}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✨ Keyframes */}
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
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
