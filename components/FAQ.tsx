'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who leads the Creative Wealth Society (CWS)?",
      answer: "CWS was founded by Britney, a successful creator who scaled her business to over $15k+/month from scratch through UGC, creative strategy, retailer claims and paid brand deals. She leads all trainings, content and education inside the platform—including monthly masterclasses, resources for the Creator Hub and all courses in the Creator Shop. To ensure members get the help they need, Britney is also joined by her team of experienced creator-admins who assist with questions and community support!"
    },
    {
      question: "Can beginners join the Creative Wealth Society?",
      answer: "Absolutely! CWS supports creators at every level! From total beginners just starting out to seasoned strategists— you'll find value, opportunity, and community to support you and your business for the long haul."
    },
    {
      question: "What if I can't afford a course right now but want to learn how to make money as a creator?",
      answer: "No worries—our suggestion is to start with the monthly membership. It gives you full access to the Creator Dashboard, including free trainings, rotating resources, platform features, and community support to help you grow. You don't need to purchase a course to start learning—there's already a ton of value built in.\n\nIf you ever want to go deeper, you can explore optional advanced courses in the Creator Shop. Payment plans may be available for bundles or flagship offers, and if you don't see one that works for you, feel free to contact us—we're happy to help. CWS is designed to meet you where you are and grow with you, at your pace and within your budget!"
    },
    {
      question: "Will I get direct access to brands inside the platform?",
      answer: "Yes! CWS connects creators directly with brands—no more cold pitching or losing a cut to agency middlemen. Britney's team reaches out to hundreds of brands every week to find paid opportunities for creators and are posted inside the platform, so you can apply. via collaborations with brands directly (while keeping 100% of your earnings)."
    },
    {
      question: "What kind of training and education does CWS offer?",
      answer: "Your CWS membership unlocks a full suite of education designed to help creators grow, monetize, and lead. There is a custom-built space inside the platform, the Creator Hub, where you'll find a rotating library of free trainings, strategy guides, business templates, creator news and more! On top of that, get access to monthly mastermind videos covering everything from content creation and UGC to digital marketing, affiliate income, and product development (topics voted by the community each month)."
    },
    {
      question: "What's included in my monthly membership?",
      answer: "Your CWS membership gives you full access to everything you need to grow, monetize, and connect as a creator. That includes networking and community access, paid brand deals and job opportunities, founder-led masterclasses, and a custom profile to showcase your skills and portfolio to brands. You'll also get access to giveaways, creator spotlight features, portfolio audits, exclusive badges and new resources to help you build your business. Members can vote on new platform features and enter contests to win creator gear, gift cards, and cash prizes—all inside the platform."
    },
    {
      question: "What makes CWS different than other learning courses or community groups?",
      answer: "This isn't just another course—and it's definitely not a one-and-done program or an abandoned discord. CWS is a full-scale creator space built by someone who scaled from zero to six figures and who teaches you exactly how to do it too. Inside, you'll get ongoing strategy, monthly trainings, and real-time support—plus optional, step-by-step courses if you're starting from scratch or want to accelerate faster."
    },
    {
      question: "What if I don't know what path I want to take or haven't made any money yet online?",
      answer: "That's exactly what CWS is here for. Whether you're brand new or still figuring things out, the platform helps you explore different paths, discover your strengths, and learn how creators actually earn online. You don't need a niche, a following, or a business plan to start—just curiosity and a willingness to grow."
    },
    {
      question: "Will CWS take a cut if I land a brand deal or job?",
      answer: "Nope! CWS connects you with real opportunities, but you keep 100% of what you earn. Brands pay you directly; we're not involved in the payment or negotiation process. You apply to opportunities, set your own rates, and manage the collaboration yourself. This is your business. We're just here to connect you to with the right people and help you grow in it!"
    },
    {
      question: "Is there support if I get stuck?",
      answer: "Yes! You'll have access to a private support chat where you can ask questions directly to Britney or the CWS team. You can also connect, post questions and chat with creators in the live community to get un-stuck in real time."
    },
    {
      question: "I'm brand new to the online space—will I be lost?",
      answer: "Not at all. CWS is designed to meet you where you are. Whether you're just starting out or already building, CWS will help you build momentum with no fluff strategies and show you how to turn your creative skills into a real business."
    },
    {
      question: "How often is new education added?",
      answer: "New trainings, resources, and mastermind sessions are added each month based on what members vote to learn next. This means that strategies evolve with you—and always reflects what's working right now in the online space."
    },
    {
      question: "How do I get brand deals through CWS?",
      answer: "Inside your dashboard, the Opportunity Zone features paid brand deals, PR giveaways, and job listings posted directly by companies. Your custom profile and poll badges (exp you stand out and you can engage by commenting directly on brand posts. If a brand initiates contact, you'll be able to continue the conversation through direct messaging inside the platform—no gatekeeping, just real access."
    },
    {
      question: "Do you offer any discounts or bundle deals?",
      answer: "Yes! Our course + community bundle include built-in savings for the best overall value. Discounts and prices are subject to change based on current promotion."
    },
    {
      question: "Will I keep access to purchased courses if my membership ends?",
      answer: "Yes—anything you purchase separately is yours to keep for life. That includes any advanced courses, bundles, or digital products from the Creator Shop or homepage. Even if your monthly membership ends, you'll still have full access to those purchases using your same login.\n\nYour monthly membership gives you access to the Creator Dashboard, which includes all platform features—like community access, brand deal opportunities, exclusive trainings, and a rotating library of free resources. These free tools are designed to support your growth while you're an active member.\n\nInside the dashboard, you'll also find the Creator Shop: a digital storefront with optional, paid products for creators who want to go deeper. These are more advanced, step-by-step courses and tools built to accelerate your growth and anything you choose to purchase on top of your membership is yours to keep, forever."
    },
    {
      question: "Are refunds available?",
      answer: "Because all courses and digital products are instantly accessible, refunds aren't available. However, your monthly membership is cancel-anytime with no long-term commitment, so you can explore everything inside the platform with full flexibility."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-rose-600 to-amber-600 mb-4 italic">
            FAQ's
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl">Everything you need to know about Creative Wealth Society</p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-start justify-between gap-4 text-left hover:bg-rose-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-800 text-base sm:text-lg pr-4 leading-relaxed">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 w-6 h-6 text-rose-600 transition-transform duration-300 mt-1 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-[2000px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                  <div className="h-px bg-gradient-to-r from-rose-200 via-rose-300 to-amber-200 mb-4"></div>
                  <div className="text-gray-700 leading-relaxed space-y-3 text-sm sm:text-base">
                    {faq.answer.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            Still have questions? Feel free to reach out to our support team!
          </p>
        </div>
      </div>
    </div>
  );
}