import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import HeroSection from "../components/hero/HeroSection";
import AITabs from "../components/tabs/AITabs";
import { type TabKey } from "../components/tabs/TabContents";
import LovedByTeams from "../components/sections/LovedByTeams";
import Workflow from "../components/Workflow";
// import WhyAnseru from "../components/WhyAnseru";
import Testimonials from "../components/sections/Testimonials";
import CTASection from "../components/sections/CTASection";
import Footer from "../components/layout/Footer";
import FAQ from "../components/sections/FAQ";
import HowItWorks from "../components/sections/HowItWorks";
import CoreFeatures from "../components/features/CoreFeatures";

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
              <div className="h-full w-full bg-gradient-to-br from-[#1C32E6] via-[#2C39F0] to-[#7D23F7] opacity-95" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,194,255,0.35),_transparent_55%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(125,35,247,0.35),_transparent_60%)]" />
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
        {/* <WhyAnseru /> */}
        <HowItWorks />
        <CoreFeatures />

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
