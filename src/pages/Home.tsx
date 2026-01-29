import { useState, useEffect } from "react";
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
import FAQ from "../components/sections/FAQ";
import bgImage from "../assets/bg2.png";

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

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabKeys.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, tabKeys.length]);

  return (
    <div className="bg-white w-full -z-5">
      {/* Header */}
      <Header />

      {/* Hero */}
      <main className={`flex flex-col ${SECTION_GAP}`}>
        <div className="relative">
          <div className="absolute inset-0 max-w-[1400px] mx-auto overflow-hidden pointer-events-none">
            <div className="absolute inset-0 max-w-[1400px] mx-auto rounded-[50px] overflow-hidden">
          <div className="flex flex-col w-full">
             {[...Array(6)].map((_, i) => (
                <img 
                  key={i}
                  src={bgImage} 
                  alt="" 
                  className="w-full h-auto select-none pointer-events-none -mt-[18px]"
                  style={{ transform: i % 2 !== 0 ? 'scaleY(-1)' : 'none' }}
                />
             ))}
          </div>
        </div>
      </div>
          <HeroSection />
          {/* AI Strategy Tabs */}
          <Workflow />
        </div>
        <div 
          className="mt-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AITabs
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        </div>

        {/* Logos */}
        <LovedByTeams />

        {/* Feature Grid */}
        {/* <FeaturesGrid /> */}

        {/* AI-Drafted Responses */}

        {/* Why Anseru */}
        <WhyAnseru />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ - Added per user request */}
        <FAQ />

        {/* Call to Action */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
