import Card from "./Card";
import { useSequentialAnimation } from "../hooks/useSequentialAnimation";
import { ShieldCheck, Database, Plug, TrendingUp } from "lucide-react";

const cards = [
  {
    title: "Smart automation you can trust",
    desc: "Automatically drafts answers where confidence is high and flags anything unclear or sensitive for review. Nothing is auto-submitted blindly.",
    icon: ShieldCheck,
  },
  {
    title: "One source of truth for sales and security",
    desc: "RFPs and security questionnaires use the same connected knowledge base so teams stay aligned and responses stay consistent.",
    icon: Database,
  },
  {
    title: "Seamless integrations into your existing stack",
    desc: "Integrate with favorite business tools across document repositories, ticketing systems and collaboration tools.",
    icon: Plug,
  },
  {
    title: "Gets better with every response",
    desc: "Every approved answer improves future drafts, reducing manual effort over time and increasing automation where it’s safe.",
    icon: TrendingUp,
  }
];

const WhyAnseru = () => {
    const { activeIndex, onMouseEnter, onMouseLeave, setActiveIndex } = useSequentialAnimation(cards.length);
    return (
      <div className="bg-white mt-8">
        <section className="py-0 relative">
          <div className="max-w-[1400px] mx-auto px-6 xl:px-[120px] relative z-10">
            <div className="mb-15 text-center max-w-2xl mx-auto">
              <p className="text-sm text-[#2A1638]/60 mb-3 uppercase tracking-widest font-medium">
                Proven Results
              </p>
              <h2 className="text-[#2A1638] text-3xl md:text-5xl font-medium tracking-tight mb-4">
                Why Anseru?
              </h2>
              <p className="text-lg text-[#483953]/70">
                Transform your RFP and security workflows with agentic AI that delivers speed, accuracy, and trust at scale.
              </p>
            </div>
  
            {/* Standard Grid Layout */}
            <div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {cards.map((card, idx) => (
                <Card
                  key={idx}
                  title={card.title}
                  description={card.desc}
                  index={idx}
                  minHeight="min-h-[220px] md:min-h-[260px]"
                  icon={<card.icon className="w-12 h-12" />}
                  watermark={
                     <card.icon className="w-56 h-56 -rotate-12 text-[#2A1638] opacity-[0.03]" />
                  }
                  isActive={activeIndex === idx}
                  duration={4000}
                  onMouseEnter={() => setActiveIndex(idx)}
                />
              ))}
            </div>

          </div>
        </section>
      </div>
    );
  };

export default WhyAnseru;