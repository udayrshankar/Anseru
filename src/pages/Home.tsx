import { useState } from "react";
import Header from "../components/layout/Header";
import HeroSection from "../components/hero/HeroSection";
import AITabs from "../components/tabs/AITabs";
import { type TabKey } from "../components/tabs/TabContents";
import LovedByTeams from "../components/sections/LovedByTeams";
import Workflow from "../components/Workflow";
import WhyAnseru from "../components/WhyAnseru";
import Testimonials from "../components/sections/Testimonials";
import CTASection from "../components/sections/CTASection";
import Footer from "../components/layout/Footer";

// Control the vertical spacing between sections here
const SECTION_GAP = "gap-5";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Mapping: 0 -> maya, 1 -> jane
  const tabKeys: TabKey[] = ["maya", "jane"];
  const activeTab = tabKeys[activeIndex];

  const handleTabChange = (tab: TabKey) => {
    const index = tabKeys.indexOf(tab);
    if (index !== -1) setActiveIndex(index);
  };

  return (
    <div className="bg-white w-full -z-5">
      {/* Header */}
      <Header />

      {/* Hero */}
      <main className={`flex flex-col ${SECTION_GAP}`}>
        <HeroSection 
          activeIndex={activeIndex} 
          onIndexChange={setActiveIndex} 
          isPaused={isPaused} 
        />

        {/* AI Strategy Tabs */}
        <AITabs 
          activeTab={activeTab} 
          onTabChange={handleTabChange} 
          setPaused={setIsPaused} 
        />

        {/* Logos */}
        <LovedByTeams />

        {/* Feature Grid */}
        {/* <FeaturesGrid /> */}

        {/* AI-Drafted Responses */}
        <Workflow />

        {/* Why Anseru */}
        <WhyAnseru />

        {/* Testimonials */}
        <Testimonials />

        {/* Call to Action */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
