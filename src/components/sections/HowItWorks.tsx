import { motion } from "framer-motion";
import { Database, Zap, Brain } from "lucide-react";
import Card from "../Card";
import { useSequentialAnimation } from "../../hooks/useSequentialAnimation";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Living Knowledge Graph Ingestion",
      description: "Anseru connects directly to your real sources of truth: Product documentation, past RFPs, security documents, and public content.",
      detail: "Each source is indexed with ownership, freshness, and expiry.",
      icon: Database,
    },
    {
      number: "02",
      title: "Intelligent Drafting with Evidence",
      description: "The agent understands context, not just keywords. Relevant evidence is retrieved and draft answers are generated with citations.",
      detail: "Every response is explainable and reviewable.",
      icon: Zap,
    },
    {
      number: "03",
      title: "Human Review → Machine Memory",
      description: "SME edits are not lost; Anseru learns one-off answers, preferred phrasing, and approved claims.",
      detail: "Over time, the system compounds intelligence instead of decaying.",
      icon: Brain,
    }
  ];

  const { activeIndex, onMouseEnter, onMouseLeave, setActiveIndex } = useSequentialAnimation(steps.length);

  return (
    <section className="py-0 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-[120px]">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-onest text-lg font-medium text-black mb-3 tracking-wide uppercase opacity-70">
              The Process
            </p>
            <h2 className="font-onest text-3xl md:text-5xl font-medium text-[#2A1638] tracking-tight leading-tight">
              How <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F5AF0] to-[#7038BA]">Anseru</span> Works
            </h2>
          </motion.div>
        </div>

        {/* Steps - Horizontal on desktop, vertical on mobile */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
           {/* Connecting Line (Desktop) */}
           <div className="hidden lg:block absolute top-[50px] left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              <Card
                 title={step.title}
                 description={step.description}
                 index={idx}
                 minHeight="h-full"
                 icon={<step.icon />}
                 watermark={
                    <span className="text-[120px] font-bold text-black/[0.02] absolute -bottom-4 -right-4 leading-none select-none">
                        {step.number}
                    </span>
                 }
                 className="pt-12" // Extra padding for the number/icon alignment if needed
                 isActive={activeIndex === idx}
                 duration={4000}
                 withMovingOrbs={true}
                 onMouseEnter={() => setActiveIndex(idx)}
              />
              
              {/* Floating Number Badge */}
              <div className="absolute top-0 left-8 -translate-y-1/2 bg-white border border-purple-100 shadow-lg px-4 py-1.5 rounded-full z-20">
                  <span className="text-sm font-bold text-purple-600 tracking-widest">{step.number}</span>
              </div>
              
               {/* Transfer Particle: Flows between active cards (Moved here to avoid clipping) */}
               {activeIndex === idx && (
                  <motion.div
                    layoutId="active-transfer-particle"
                    className="absolute top-8 right-8 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 shadow-[0_0_20px_rgba(168,85,247,0.6)] z-30 pointer-events-none"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
               )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
