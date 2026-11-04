import HeroSection from "../components/home/HeroSection";
import IntroSection from "../components/home/IntroSection";
import StatsSection from "../components/home/StatsSection";
import ModelsPreview from "../components/home/ModelsPreview";
import CtaSection from "../components/home/CtaSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <StatsSection />
      <ModelsPreview />
      <CtaSection />
    </div>
  );
}