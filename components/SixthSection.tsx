'use client';
import React from 'react';
import Image from 'next/image';

const MembershipBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Creator Dashboard Access",
      description: "Navigate around a social-media-like experience with an active community, brand deals, contests, giveaways and more!",
      bgColor: "bg-pink-100",
      icon: "/membership/1.png"
    },
    {
      id: 2,
      title: "Create Your Profile",
      description: "Add your photo, bio, portfolio links, and job badges and showcase your brand and help you stand out to the right opportunities.",
      bgColor: "bg-pink-100",
      icon: "/membership/2.png"
    },
    {
      id: 3,
      title: "Creator Hub Access",
      description: "Access a custom library of high-value resources, plug-and-play templates, and proven strategies—rotated monthly to fuel your growth.",
      bgColor: "bg-pink-100",
      icon: "/membership/3.png"
    },
    {
      id: 4,
      title: "Creator-Only Social Feed",
      description: "Engage in a feed built just for creators—scroll, post wins, ask questions and connect through DMs in a community designed for growth, support, and real momentum.",
      bgColor: "bg-pink-100",
      icon: "/membership/4.png"
    },
    {
      id: 5,
      title: "Paid Opportunities + Giveaways",
      description: "Connect and apply directly to brand deals, PR drops, and paid campaigns—no middlemen, no commission cuts, just creator-first opportunities.",
      bgColor: "bg-pink-100",
      icon: "/membership/5.png"
    },
    {
      id: 6,
      title: "Personalized Audits",
      description: "Win tailored feedback from Britney and the CWS team to optimize your portfolio, website or socials— multiple creators selected monthly.",
      bgColor: "bg-pink-100",
      icon: "/membership/6.png"
    },
    {
      id: 7,
      title: "Contests + Leaderboard Rewards",
      description: "Earn points, join fun creator challenges, and get featured weekly to showcase your profile for top brand visibility and hiring opportunities.",
      bgColor: "bg-pink-100",
      highlighted: true,
      icon: "/membership/7.png"
    },
    {
      id: 8,
      title: "Monthly Mastermind Sessions",
      description: "Founder-led exclusive video sessions featuring expert insights, industry leader interviews, and Q&As pulled directly from questions posted in the community. Topics you vote on are explored in every session to help you learn, build, and grow your business.",
      bgColor: "bg-pink-100",
      highlighted: true,
      icon: "/membership/8.png"
    },
    {
      id: 9,
      title: "Affiliate Program Access",
      description: "Get immediate cash opportunities by referring friends and fellow creators to join the CWS community!",
      bgColor: "bg-pink-100",
      icon: "/membership/9.png"
    },
    {
      id: 10,
      title: "Direct Mentor Support",
      description: "Private chat and email support from Britney and the CWS team—here to mentor, guide, and cheer you on as you build your business inside the community.",
      bgColor: "bg-pink-100",
      icon: "/membership/10.png"
    },
    {
      id: 11,
      title: "Creator Shop Discounts",
      description: "Access premium tools and flagship programs at exclusive member pricing. While the community offers plenty of free resources to help you grow, these step-by-step trainings are ideal for beginners seeking accelerated learning, deeper guidance, and a fast-track to building their business.",
      bgColor: "bg-pink-100",
      icon: "/membership/11.png"
    },
    {
      id: 12,
      title: "Member Perks + Early Invites",
      description: "Get early access to future live events, mentorship programs, and exclusive member perks—including priority updates when the CWS team is hiring or launching something new.",
      bgColor: "bg-pink-100",
      icon: "/membership/12.png"
    }
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-visible">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-center mb-8 sm:mb-12 px-2">
          <Image 
            src="/MemberShipBNBenefits.png" 
            alt="Membership Benefits" 
            width={1200}
            height={600}
            className="w-full h-auto max-w-full sm:max-w-3xl object-contain"
            priority
          />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className={`group flex flex-col sm:flex-row gap-5 p-5 sm:p-6 rounded-2xl border border-transparent transition-all duration-500 ease-in-out bg-white ${
                benefit.highlighted 
                  ? 'hover:border-red-900 hover:shadow-2xl hover:shadow-red-200' 
                  : 'hover:border-red-900 hover:shadow-2xl hover:shadow-red-100'
              }`}
            >
              {/* Icon */}
              <div className={`flex-shrink-0 mx-auto sm:mx-0 w-20 h-20 sm:w-24 sm:h-24 ${benefit.bgColor} rounded-full flex items-center justify-center shadow-md transition-all duration-500 ease-in-out group-hover:shadow-2xl ${
                benefit.highlighted ? 'group-hover:bg-purple-200' : 'group-hover:bg-pink-200'
              }`}>
                <Image 
                  src={benefit.icon} 
                  alt={benefit.title} 
                  width={96} 
                  height={96} 
                  className="w-14 h-14 sm:w-20 sm:h-20 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-900 group-hover:text-red-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed group-hover:text-gray-900">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white font-bold text-base sm:text-lg md:text-xl px-10 sm:px-16 py-4 sm:py-5 rounded-full shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl uppercase tracking-wide">
            Yes, I Want All of This!
          </button>
        </div>
      </div>
    </section>
  );
};

export default MembershipBenefits;
