'use client';
import { useState, useEffect, useRef } from 'react';

type TabKey = 'monthly' | 'course' | 'courseOnly';

export default function PricingTabsSection() {
  const [activeTab, setActiveTab] = useState<TabKey>('monthly');
  const [hasAnimated, setHasAnimated] = useState(false);
  const [typedText, setTypedText] = useState('');
  const sectionRef = useRef(null);
  const fullText = "Let's Make It Official";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let index = 0;
            const typingInterval = setInterval(() => {
              if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
              } else {
                clearInterval(typingInterval);
              }
            }, 80);
            return () => clearInterval(typingInterval);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const tabContent = {
    monthly: {
      price: '$99',
      period: '/month',
      billing: 'Membership billed monthly, cancel anytime.',
      features: [
        'Full Dashboard Access + Custom Profile Setup',
        'Paid Opportunities, Brand Deals + Giveaways',
        'Creator Hub Library + Rotating Templates & Resources',
        'Win Personalized Audits + Contest Prizes',
        'Creator Spotlight + Leaderboard',
        'Monthly Mastermind Sessions + Expert Q&As',
        'Exclusive Community Feed + Live Chat Support',
        'Creator Shop Discounts + Affiliate Program'
      ],
      showImages: true
    },
    course: {
      totalValue: '$7,581',
      price: '$997',
      billing: 'Membership billed annually, cancel anytime.',
      description: 'Get Access to everything that comes with a Monthly Membership, plus:',
      features: [
        {
          title: 'Lifetime access to the 8-in-1 Creative Mastery Course,',
          subtitle: 'a step-by-step beginner friendly program from my Creator Shop that includes',
          highlight: '8 full courses',
          value: '($3,997 value)'
        },
        {
          title: 'Lifetime access',
          subtitle: 'to all future course updates at no additional cost',
          value: '($1,497 value)'
        },
        {
          title: '1-year membership access',
          subtitle: 'to the Creative Wealth Society',
          value: '($1,188 value)'
        },
        {
          icon: '🎁',
          title: 'BONUS GIFT!',
          subtitle: 'Creator Pro Toolkit with 20+ premium templates, databases and systems built to help you launch, grow and monetize your creative business, faster',
          value: '($899 value)'
        }
      ],
      showBottomImages: true
    },
    courseOnly: {
      price: '$897',
      billing: 'one-time charge, course access only',
      header: '8 FULL COURSES + PREMIUM TOOLS',
      courses: [
        {
          title: 'Course #1 | A-Z UGC Masterclass',
          description: 'Build your portfolio, land paid brand deals, master negotiation, ad strategy and confidently work with clients.'
        },
        {
          title: 'Course #2 | Affiliate Marketing Made Simple',
          description: 'Earn on autopilot with TikTok Shop, Amazon Affiliates, LTK, and more.'
        },
        {
          title: 'Course #3 | Digital Marketing Roadmap',
          description: 'Automate your business with email funnels, chat flows, and lead systems that attract clients and generate income.'
        },
        {
          title: 'Course #4 | Create & Sell Digital Products',
          description: 'Launch templates, guides, and mini courses that sell for you and generate passive income.'
        },
        {
          title: 'Course #5 | Freelance Success',
          description: 'Legally set up your business — LLC, bank accounts, taxes, contracts, and systems to protect and grow your income.'
        },
        {
          title: 'Course #6 | Personal Branding & Social Media Accelerator',
          description: 'Grow your presence, create viral content, and attract clients, brand deals, and high-value opportunities.'
        },
        {
          title: 'Course #7 | CapCut Crash Course',
          description: 'Edit short-form videos that grab attention for UGC ads, personal content, and brand growth.'
        },
        {
          title: 'Course #8 | Canva Crash Course',
          description: 'Design social media grids, stories, carousels, and digital products that stand out and attract clients.'
        }
      ],
      bonus: {
        icon: '🎁',
        title: 'PLUS, YOU GET:',
        description: '20+ plug-and-play premium templates and systems — UGC contract, outreach emails, rate card, and more to run your creative business like a pro.'
      },
      showCourseImage: true
    }
  };

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-gray-50 to-white py-6 px-4 sm:py-8 md:py-10 lg:py-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-start mb-8 sm:mb-12 md:mb-16 relative">
          <h2 className="text-[28px] xs:text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] font-bold italic text-[#8B1538] leading-tight sm:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>
          <a
  href="#"
  className="absolute top-0 right-0 hidden lg:block text-blue-700 text-xs sm:text-base md:text-lg font-semibold underline hover:text-blue-900 transition-colors"
>
  Are you a brand or business?<br />Access Here
</a>

        </div>

        {/* Main Content Box */}
        <div className="border-4 border-black bg-white p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg overflow-x-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12">
            {/* Left Column - Plan Selection */}
            <div className="space-y-4 xs:space-y-6 sm:space-y-8">
              <div className="flex items-center gap-2 xs:gap-4">
                <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-black">Choose Your Plan</h3>
              </div>

              {/* Tab Selector */}
              <div className="relative">
                <div className="flex items-center rounded-full border-2 xs:border-3 border-black overflow-hidden bg-white text-[10px] xs:text-xs sm:text-sm md:text-base">
                  <button
                    onClick={() => setActiveTab('monthly')}
                    className={`flex-1 py-2 xs:py-3 sm:py-4 px-2 xs:px-4 sm:px-6 font-bold transition-all duration-300 ${activeTab === 'monthly' ? 'bg-[#8B1538] text-white' : 'bg-white text-black hover:bg-gray-100'}`}
                  >
                    MONTHLY<br />MEMBERSHIP
                  </button>
                  <button
                    onClick={() => setActiveTab('course')}
                    className={`flex-1 py-2 xs:py-3 sm:py-4 px-2 xs:px-4 sm:px-6 font-bold transition-all duration-300 border-x-2 xs:border-x-3 border-black ${activeTab === 'course' ? 'bg-[#8B1538] text-white' : 'bg-white text-black hover:bg-gray-100'}`}
                  >
                    COURSE +<br />COMMUNITY
                  </button>
                  <button
                    onClick={() => setActiveTab('courseOnly')}
                    className={`flex-1 py-2 xs:py-3 sm:py-4 px-2 xs:px-4 sm:px-6 font-bold transition-all duration-300 ${activeTab === 'courseOnly' ? 'bg-[#8B1538] text-white' : 'bg-white text-black hover:bg-gray-100'}`}
                  >
                    COURSE<br />ONLY
                  </button>
                </div>
              </div>

              {/* Pricing Display */}
              <div className="text-center space-y-2 xs:space-y-4">
                {activeTab === 'course' && (
                  <div className="space-y-1 xs:space-y-2">
                    <p className="text-base xs:text-lg sm:text-xl font-bold text-red-600">TOTAL VALUE: <span className="line-through">{tabContent.course.totalValue}</span></p>
                    <p className="text-lg xs:text-xl sm:text-2xl font-bold text-black">LIMITED TIME PRICE:</p>
                  </div>
                )}

                <div className="flex items-start justify-center flex-wrap xs:flex-nowrap">
                  <span className="text-[40px] xs:text-[60px] sm:text-[80px] md:text-[120px] lg:text-[140px] font-black leading-none text-black">
                    {tabContent[activeTab].price}
                  </span>
                  {activeTab === 'monthly' && (
                    <span className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-normal text-black mt-2 xs:mt-4 sm:mt-6 md:mt-8 ml-2 xs:ml-3">
                      {tabContent[activeTab].period}
                    </span>
                  )}
                </div>

                <p className="text-xs xs:text-sm sm:text-base md:text-lg italic text-gray-700">
                  {tabContent[activeTab].billing}
                </p>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-[#8B1538] hover:bg-[#6B1028] text-white font-bold text-sm xs:text-lg sm:text-xl md:text-2xl py-3 xs:py-4 sm:py-5 md:py-6 px-4 xs:px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                GET INSTANT ACCESS!
              </button>
            </div>

            {/* Right Column - Features */}
            <div className="border-l-0 lg:border-l-4 border-black lg:pl-4 xs:pl-6 xl:pl-12 space-y-4 xs:space-y-6">
              <div className="flex items-center gap-2 xs:gap-4">
                <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-black">Here's What You Get</h3>
              </div>

              {/* Tab-specific content */}
              <div className="space-y-3 xs:space-y-4">
                {activeTab === 'monthly' && (
                  <div className="space-y-2 xs:space-y-3">
                    {tabContent.monthly.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 xs:gap-3">
                        <span className="text-green-600 text-xl xs:text-2xl mt-1 flex-shrink-0">✓</span>
                        <p className="text-xs xs:text-sm sm:text-base md:text-lg text-black font-medium leading-tight">{feature}</p>
                      </div>
                    ))}
                    {/* Laptop and Phone Image */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
  {/* Laptop Image */}
  <div className="w-full sm:w-2/3">
    <img
      src="/owner/Dashboard-preview.png"
      alt="Dashboard on laptop"
      className="w-full h-auto object-contain"
    />
  </div>

  {/* Mobile Image */}
  <div className="w-1/2 sm:w-1/4">
    <img
      src="/owner/iphone.png"
      alt="Mobile view"
      className="w-full h-auto object-contain"
    />
  </div>
</div>

                  </div>
                )}

                {activeTab === 'course' && (
                  <div className="space-y-2 xs:space-y-4">
                    <p className="text-xs xs:text-sm sm:text-base text-black">
                      <span className="italic">Get Access to </span>
                      <span className="font-bold italic text-red-600">everything</span>
                      <span className="italic"> that comes with a Monthly Membership, plus:</span>
                    </p>
                    {tabContent.course.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 xs:gap-3">
                        <span className="text-green-600 text-xl xs:text-2xl mt-1 flex-shrink-0">✓</span>
                        <div className="flex-1 text-xs xs:text-sm sm:text-base md:text-lg">
                          {feature.icon && <span className="text-xl xs:text-2xl mr-1">{feature.icon}</span>}
                          {feature.title && <span className={feature.highlight ? 'font-bold' : ''}>{feature.title} </span>}
                          {feature.subtitle && <span>{feature.subtitle} </span>}
                          {feature.highlight && <span className="text-blue-600 font-bold">{feature.highlight} </span>}
                          {feature.value && <span className="italic text-gray-600">{feature.value}</span>}
                        </div>
                      </div>
                    ))}
                    {/* Bottom Images */}
                    <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
  {/* First MacBook Image */}
  <div className="w-full sm:w-1/2">
    <img
      src="/owner/macbook.png"
      alt="Dashboard on laptop"
      className="w-full h-auto object-contain"
    />
  </div>

  {/* Second MacBook Image */}
  <div className="w-full sm:w-1/2">
    <img
      src="/owner/macbook2.png"
      alt="Mobile view"
      className="w-full h-auto object-contain"
    />
  </div>
</div>

                  </div>
                )}

                {activeTab === 'courseOnly' && (
                  <div className="space-y-2 xs:space-y-4">
                    <h4 className="text-lg xs:text-2xl sm:text-3xl font-black text-center bg-yellow-300 py-1 xs:py-2 px-2 xs:px-4 inline-block">
                      {tabContent.courseOnly.header}
                    </h4>
                    <div className="space-y-2 xs:space-y-4 max-h-[400px] xs:max-h-[500px] overflow-y-auto pr-2">
                      {tabContent.courseOnly.courses.map((course, index) => (
                        <div key={index} className="space-y-1 xs:space-y-2">
                          <h5 className="text-xs xs:text-sm sm:text-base font-bold text-[#8B1538]">{course.title}</h5>
                          <p className="text-xs xs:text-sm sm:text-base text-gray-800">{course.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-2 xs:p-4 rounded-lg mt-4 xs:mt-6">
                      <div className="flex items-start gap-2 xs:gap-3">
                        <span className="text-2xl xs:text-3xl">{tabContent.courseOnly.bonus.icon}</span>
                        <div>
                          <h5 className="text-sm xs:text-xl sm:text-2xl font-black text-black mb-1 xs:mb-2">{tabContent.courseOnly.bonus.title}</h5>
                          <p className="text-xs xs:text-sm sm:text-base text-gray-800">{tabContent.courseOnly.bonus.description}</p>
                        </div>
                      </div>
                      <div className="mt-2 xs:mt-4 flex justify-end">
                        <div className="w-40 xs:w-64">
                          <img src="/owner/courses.png" alt="Course Bundle" className="w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
