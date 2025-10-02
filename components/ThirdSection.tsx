import React from 'react';
import Image from 'next/image';

export default function ThirdSection() {
  const profiles = [
    {
      name: 'sarahsmith',
      location: 'United States',
      avatar: '/UserImages/sara.png',
      badges: [
        { name: 'CWS CREATOR', icon: '🎬', bg: 'bg-red-900' },
        { name: 'UGC CREATOR', icon: '👥', bg: 'bg-purple-600' }
      ]
    },
    {
      name: 'shelbyrose',
      location: 'United Kingdom',
      avatar: '/UserImages/shelby.png',
      badges: [
        { name: 'BRAND DEALS', icon: '💡', bg: 'bg-blue-400' },
        { name: 'SOCIAL MEDIA MANAGER', icon: '⚖️', bg: 'bg-pink-500' }
      ]
    },
    {
      name: 'johnfranklin',
      location: 'Canada',
      avatar: '/UserImages/john.png',
      badges: [
        { name: 'GRAPHIC DESIGNER', icon: '✏️', bg: 'bg-orange-600' },
        { name: 'VIDEO EDITOR', icon: '🎮', bg: 'bg-green-600' }
      ]
    },
    {
      name: 'janetsilver',
      location: 'Australia',
      avatar: '/UserImages/janet.png',
      badges: [
        { name: 'CREATIVE DIRECTOR', icon: '🎨', bg: 'bg-blue-700' },
        { name: 'SCRIPT WRITER', icon: '📝', bg: 'bg-yellow-500' }
      ]
    },
    {
      name: 'lesliemccoy',
      location: 'Ireland',
      avatar: '/UserImages/lasy.png',
      badges: [
        { name: 'UGC CREATOR', icon: '👥', bg: 'bg-purple-600' },
        { name: 'SOCIAL MEDIA MANAGER', icon: '📱', bg: 'bg-pink-500' }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
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
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 0L11.5 8.5L20 10L11.5 11.5L10 20L8.5 11.5L0 10L8.5 8.5L10 0Z" fill="white" opacity="0.6"/>
            </svg>
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-32 pb-20">
        
        {/* Hero Text */}
        <div className="text-center mb-12">
          <h1 className="text-7xl font-bold tracking-wider mb-4">
            <span className="text-black">CREATIVE </span>
            <span className="text-red-900">WEALTH</span>
          </h1>
          
          {/* Circular Dots Design with SOCIETY Text */}
          <div className="relative inline-block">
            <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-48 h-48">
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
                      opacity={0.8 - (i * 0.03)}
                    >
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        path="M 100 20 A 80 80 0 0 1 180 100"
                        begin={`${i * 0.12}s`}
                      />
                    </circle>
                  ))}
                </path>
              </svg>
            </div>
            
            <h2 className="text-8xl font-serif tracking-wide text-black">
              SOCIETY
            </h2>
          </div>
        </div>

        {/* Workspace Image Circle */}
<div className="absolute right-32 top-1/4 w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl">
  <div className="relative w-full h-full">
    <Image
      src="/workspace-mockup.png"
      alt="Workspace"
      fill
      className="object-cover scale-150"
    />
  </div>
</div>


        {/* Join Now Button */}
        <button className="bg-white text-black font-bold text-xl px-16 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-20">
          JOIN NOW!
        </button>

        {/* Profile Cards Section */}
        <div className="flex gap-6 items-center justify-center flex-wrap max-w-7xl">
          {profiles.map((profile, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-white to-gray-100 rounded-2xl shadow-xl w-56 overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {/* Profile Header */}
              <div className="bg-gradient-to-b from-red-900 to-red-800 p-6 text-center">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white mx-auto mb-3 shadow-lg">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    width={112}
                    height={112}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-lg">@{profile.name}</h3>
                <p className="text-white/80 text-sm flex items-center justify-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {profile.location}
                </p>
              </div>

              {/* Badges */}
              <div className="p-4 bg-white">
                <div className="flex gap-2 justify-center mb-4">
                  {profile.badges.map((badge, badgeIdx) => (
                    <div
                      key={badgeIdx}
                      className={`${badge.bg} rounded-lg p-3 flex flex-col items-center justify-center shadow-md flex-1`}
                    >
                      <div className="text-2xl mb-1">{badge.icon}</div>
                      <div className="text-white text-[9px] font-bold text-center leading-tight uppercase">
                        {badge.name}
                      </div>
                    </div>
                  ))}
                </div>

                {/* View Profile Button */}
                <button className="w-full bg-black text-white font-bold py-2 px-4 rounded-full text-sm hover:bg-gray-900 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
          
          {/* Plus Icon between cards */}
          {/* {profiles.length > 0 && (
            <div className="absolute left-1/2 bottom-48 -translate-x-1/2">
              <svg width="40" height="40" viewBox="0 0 40 40" className="animate-pulse">
                <circle cx="20" cy="20" r="18" fill="white" opacity="0.9"/>
                <path d="M20 8 L20 32 M8 20 L32 20" stroke="#7D1F1F" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}