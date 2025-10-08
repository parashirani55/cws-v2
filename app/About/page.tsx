import AboutUsHero from "./Components/Hero";
import WelcomeSection from "./Components/Welcome";
import HowItStartedSection from "./Components/howitstarted";

export default function AboutUs() {
  return (
    <main>
        <AboutUsHero />
        <WelcomeSection />
        <HowItStartedSection /> 
    </main>
  );
}