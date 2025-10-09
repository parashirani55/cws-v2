import AboutUsHero from "./Components/Hero";
import WelcomeSection from "./Components/Welcome";
import HowItStartedSection from "./Components/howitstarted";
import Buildingfromzero from "./Components/buildingfromzero";
import ThenSomethingClicked from "./Components/ThenSomethingClicked";
import WhenTheTruthHit from "./Components/WhenTheTruthHit";
import ThisIsForYouFriend from "./Components/ThisIsForYouFriend";
import LogoSection from "./Components/LogoSection";
import TwoTable from "./Components/TwoTable";
import Authorsign from "./Components/authorsign";

export default function AboutUs() {
  return (
    <main>
        <AboutUsHero />
        <WelcomeSection />
        <HowItStartedSection /> 
        <Buildingfromzero />
        <ThenSomethingClicked />
        <WhenTheTruthHit /> 
        <ThisIsForYouFriend />
        <LogoSection />
        <TwoTable />
        <Authorsign />
    </main>
  );
}