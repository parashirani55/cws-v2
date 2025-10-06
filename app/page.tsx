import HeroSection from '@/components/HeroSection';
import LearnMasterSection from '@/components/LearnMasterSection';
import ThirdSection from '@/components/ThirdSection';
// import IncomeStrategySection from '@/components/FourthSection';
import WhatMakesCWSDifferent from '@/components/FifthSection';
import MembershipBenefits from '@/components/SixthSection';
import MeetTheFounder from '@/components/SeventhSection';
import TestimonialCarousel from '@/components/EighthSection';
import FounderStorySection from '@/components/NineSection';
import PricingTabsSection from '@/components/tenthSection';
import FoundersCircleSection from '@/components/ElevenSection';
import OnlineIncomeLanding from '@/components/TwelveSection';
import AskMeAnything from '@/components/ThirteenSection';
import FAQAccordion from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LearnMasterSection />
      <ThirdSection />
      <WhatMakesCWSDifferent/>
      <MembershipBenefits />
      <MeetTheFounder />
      <TestimonialCarousel />
      <FounderStorySection />
      <PricingTabsSection />
      <FoundersCircleSection />
      <OnlineIncomeLanding />
      <AskMeAnything />
      <FAQAccordion />  
      <Footer />
    </main>
  );
}