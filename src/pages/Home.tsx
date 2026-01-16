import Header from "../components/layout/Header";
import HeroSection from "../components/hero/HeroSection";
import AITabs from "../components/tabs/AITabs";
import LovedByTeams from "../components/sections/LovedByTeams";
import FeaturesGrid from "../components/sections/FeaturesGrid";
import Workflow from "../components/Workflow";
import WhyAnseru from "../components/WhyAnseru";
import CTASection from "../components/sections/CTASection";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-[#F6F6F8] w-full">
      {/* Header */}
      <Header />

      {/* Hero */}
      <main>
        <HeroSection />

        {/* AI Strategy Tabs */}
        <AITabs />

        {/* Logos */}
        <LovedByTeams />

        {/* Feature Grid */}
        <FeaturesGrid />

        {/* AI-Drafted Responses */}
        <Workflow />

        {/* Why Anseru */}
        <WhyAnseru />

        {/* Call to Action */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
