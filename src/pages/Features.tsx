import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FeaturesHero from '../components/features/FeaturesHero';
import FeatureRow from '../components/features/FeatureRow';
import ComparisonTable from '../components/features/ComparisonTable';
import EngineSection from '../components/features/EngineSection';

// Animations
import SmartDraftingDetail from '../components/animation/SmartDraftingDetail';
import TrustCenterHero from '../components/animation/TrustCenterHero';
import WinIntelligenceGraph from '../components/animation/WinIntelligenceGraph';

const Features = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main>
          <FeaturesHero />

          {/* Feature 1: AI-Drafted Responses */}
          <FeatureRow
             title="AI-Drafted Responses"
             subtitle="Global Game-Changer"
             description="Generate human-context aware replies instantly. Keeps communication sharp, consistent, and on-brand without manual drafting."
             points={[
                 "Context-aware drafting",
                 "Auto-completion",
                 "Tone matching"
             ]}
             image={<SmartDraftingDetail />}
          />

          {/* Feature 2: Build Instant Trust */}
          <FeatureRow
             title="Build Instant Trust"
             subtitle="Customer Love"
             description="Deliver accurate, compliance-ready answers that boost buyer confidence. Shine your securing posture in a single link."
             points={[
                 "Auto-updating trust center",
                 "Security review report",
                 "SOC2 transparent"
             ]}
             image={<TrustCenterHero />}
             reversed
          />

          {/* Feature 3: Win-Ready Answer Intelligence */}
          <FeatureRow
             title="Win-Ready Answer Intelligence"
             subtitle="Strategic Advantage"
             description="Go beyond drafting. Anseru understands why questions were asked and tailors responses to maximize deal success."
             points={[
                 "Intent-aware questions analysis",
                 "Competitor battlecards auto-reference",
                 "Deal-level adaptive responses"
             ]}
             image={<WinIntelligenceGraph />}
          />

          <ComparisonTable />
          
          <EngineSection />

      </main>

      <Footer />
    </div>
  );
};

export default Features;
