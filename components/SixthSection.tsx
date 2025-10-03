'use client';
import React from 'react';

const MembershipBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Creator Dashboard Access",
      description: "Navigate around a social-media-like experience with an active community, brand deals, contests, giveaways and more!",
      bgColor: "bg-pink-100",
      icon: (
        <svg className="w-14 h-14 transition-all duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Create Your Profile",
      description: "Add your photo, bio, portfolio links, and job badges and showcase your brand and help you stand out to the right opportunities.",
      bgColor: "bg-pink-100",
      icon: (
        <svg className="w-14 h-14 transition-all duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Creator Hub Access",
      description: "Access a custom library of high-value resources, plug-and-play templates, and proven strategies—rotated monthly to fuel your growth.",
      bgColor: "bg-pink-100",
      icon: (
        <svg className="w-14 h-14 transition-all duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Creator-Only Social Feed",
      description: "Engage in a feed built just for creators—scroll, post wins, ask questions and connect through DMs in a community designed for growth, support, and real momentum.",
      bgColor: "bg-pink-100",
      icon: (
        <svg className="w-14 h-14 transition-all duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Paid Opportunities + Giveaways",
      description: "Connect and apply directly to brand deals, PR drops, and paid campaigns—no middlemen, no commission cuts, just creator-first opportunities.",
      bgColor: "bg-pink-100",
      icon: (
        <svg className="w-14 h-14 transition-all duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Personalized Audits",
      description: "Win tailored feedback from Britney and the CWS team to optimize your portfolio, website or socials— multiple creators selected monthly.",
      bgColor: "bg-pink-100",
      icon: (
        <svg className="w-14 h-14 transition-all duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      id: 7,
      title: "Contests + Leaderboard Rewards",
      description: "Earn points, join fun creator challenges, and get featured weekly to showcase your profile for top brand visibility and hiring opportunities.",
      bgColor: "bg-purple-100",
      highlighted: true,
      icon: (
        <svg className="w-14 h-14 transition-all duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: 8,
      title: "Monthly Mastermind Sessions",
      description: "Founder-led exclusive video sessions featuring expert insights, industry leader interviews, and Q&As pulled directly from questions posted in the community. Topics you vote on are explored in every session to help you learn, build, and grow your business.",
      bgColor: "bg-purple-100",
      highlighted: true,
      icon: (
        <svg className="w-14 h-14 transition-all duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 9,
      title: "Affiliate Program Access",
      description: "Get immediate cash opportunities by referring friends and fellow creators to join the CWS community!",
      bgColor: "bg-pink-100",
      icon: (
        <svg className="w-14 h-14 transition-all duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 10,
      title: "Direct Mentor Support",
      description: "Private chat and email support from Britney and the CWS team—here to mentor, guide, and cheer you on as you build your business inside the community.",
      bgColor: "bg-pink-100",
      icon: (
        <svg className="w-14 h-14 transition-all duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 11,
      title: "Creator Shop Discounts",
      description: "Access premium tools and flagship programs at exclusive member pricing. While the community offers plenty of free resources to help you grow, these step-by-step trainings are ideal for beginners seeking accelerated learning, deeper guidance, and a fast-track to building their business.",
      bgColor: "bg-pink-100",
      icon: (
        <svg className="w-14 h-14 transition-all duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      )
    },
    {
      id: 12,
      title: "Member Perks + Early Invites",
      description: "Get early access to future live events, mentorship programs, and exclusive member perks—including priority updates when the CWS team is hiring or launching something new.",
      bgColor: "bg-pink-100",
      icon: (
        <svg className="w-14 h-14 transition-all duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-center mb-12">
          <img 
            src="/MemberShipBNBenefits.png" 
            alt="Membership Benefits" 
            className="max-w-2xl w-full h-auto"
          />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className={`group flex gap-5 p-6 rounded-2xl transition-all duration-500 ease-in-out ${
                benefit.highlighted 
                  ? 'hover:border-4 hover:border-purple-600 hover:shadow-2xl hover:shadow-purple-200' 
                  : 'hover:border-4 hover:border-red-900 hover:shadow-2xl hover:shadow-red-100'
              }`}
            >
              {/* Icon Circle */}
              <div className={`flex-shrink-0 w-24 h-24 ${benefit.bgColor} rounded-full flex items-center justify-center shadow-lg text-gray-700 transition-all duration-500 ease-in-out group-hover:shadow-2xl ${
                benefit.highlighted ? 'group-hover:bg-purple-200' : 'group-hover:bg-pink-200'
              }`}>
                {benefit.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-red-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-900">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white font-bold text-lg md:text-xl px-16 py-5 rounded-full shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl uppercase tracking-wide">
            Yes, I Want All of This!
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipBenefits;