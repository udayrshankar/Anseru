import Header from "../components/layout/Header";
import HeroSection from "../components/hero/HeroSection";
import AITabs from "../components/tabs/AITabs";
import LovedByTeams from "../components/sections/LovedByTeams";
import FeaturesGrid from "../components/sections/FeaturesGrid";
import Workflow from "../components/Workflow";
import WhyAnseru from "../components/WhyAnseru";
import Testimonials from "../components/sections/Testimonials";
import CTASection from "../components/sections/CTASection";
import Footer from "../components/layout/Footer";

// Control the vertical spacing between sections here
const SECTION_GAP = "gap-12";

export default function Home() {
  return (
    <div className="bg-white w-full -z-5">
      {/* Header */}
      <Header />

      {/* Hero */}
      <main className={`flex flex-col ${SECTION_GAP}`}>
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
