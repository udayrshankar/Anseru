import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Shield, FileText, Search, BarChart, Zap, Users, Database, Clock, CheckCircle } from "lucide-react";
import { AgentCard, type ColorTheme } from "./AgentNotificationCards";

const CARDS = [
  {
    id: 1,
    title: "KG",
    description: "Your deal-closing RFP Agent, accelerating your sales cycles.",
    icon: FileText,
    colorTheme: "purple" as ColorTheme,
    features: [
      { icon: Search, label: "RFP Ingestion & Structuring", desc: "Automatically extract questions from PDF/Word/Excel into a clean requirement tree." },
      { icon: BarChart, label: "Knowledge Mapping & Coverage", desc: "Map requirements to the knowledge graph. Identify confident answers vs. SME input needed." },
      { icon: Zap, label: "Intelligent Answer Drafting", desc: "Generate context-aware answers with source citations and confidence signals." },
      { icon: Users, label: "Review, Collaboration & Submission", desc: "Role-based reviews and version control. Edits are learned by the system." }
    ]
  },
  {
    id: 0,
    title: "Sud",
    description: "Your security agent for safe, compliant data.",
    icon: Shield,
    colorTheme: "blue" as ColorTheme,
    features: [
      { icon: Database, label: "Evidence First", desc: "Connects to SOC 2, ISO, and policies. Every answer is backed by verified documentation." },
      { icon: Clock, label: "Freshness Monitoring", desc: "Tracks source owner and expiry. Automatically flags stale evidence before it becomes a liability." },
      { icon: CheckCircle, label: "Consistency Guarantee", desc: "Consistent answers across customers. No hallucinations, no contradictions." },
      { icon: Shield, label: "Audit Ready", desc: "Every response is linked to a verified policy document or compliance certification." }
    ]
  },
];

interface HeroCardsProps {
  activeIndex: number;
  onIndexChange: (index: number) => void;
  isPaused: boolean;
}

export default function HeroCards({ activeIndex, onIndexChange, isPaused }: HeroCardsProps) {

  const [isFlipped, setIsFlipped] = useState(false);
  
  const activeCard = CARDS[activeIndex];
  const ActiveIcon = activeCard.icon;
  
  // Sequence Logic
  useEffect(() => {
    if (isPaused) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    // We rely on the parent (or self) to handle the initial mount.
    // When activeIndex changes, we start the sequence for *that* card.
    
    // Reset flip state immediately when index changes
    setIsFlipped(false);

    const runSequence = () => {
      // 1. Wait 3 seconds, then Flip to Back
      timeoutId = setTimeout(() => {
        setIsFlipped(true);

        // 2. Wait 5 seconds (showing features), then Flip Back
        timeoutId = setTimeout(() => {
          setIsFlipped(false);

          // 3. Wait for flip animation (0.6s) then switch card
          timeoutId = setTimeout(() => {
            onIndexChange((activeIndex + 1) % CARDS.length);
          }, 600); 

        }, 5600); // 5s showing back + 0.6s animation (wait time effectively 5s)
      }, 3000); // 3s showing front
    };

    runSequence();

    return () => clearTimeout(timeoutId);
  }, [activeIndex, isPaused, onIndexChange]);


  return (
    <div className="relative mt-24 flex h-[350px] w-full items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
            key={activeIndex} 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="relative w-[320px] md:w-[500px] h-[400px]"
            style={{ perspective: "1000px" }}
        >
          <motion.div
            className="w-full h-full relative"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* FRONT FACE */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{ backfaceVisibility: "hidden" }}
            >
               <AgentCard
                  title={activeCard.title}
                  description={activeCard.description}
                  icon={activeCard.icon}
                  colorTheme={activeCard.colorTheme}
                  className="h-full shadow-lg"
                />
            </div>

            {/* BACK FACE */}
            <div 
              className="absolute inset-0 w-full h-full bg-white rounded-[24px] shadow-lg border border-[#7D23F7]/20 overflow-hidden"
              style={{ 
                  backfaceVisibility: "hidden", 
                  transform: "rotateY(180deg)" 
              }}
            >
               {/* Background Effects matching AgentCard style */}
               <div className="absolute inset-0 bg-white/80 backdrop-blur-xl z-0" />
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#7D23F7]/20 rounded-full blur-[40px] z-0" />
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#60C2FF]/30 rounded-full blur-[40px] z-0" />
               
               <div className="relative z-10 flex flex-col h-full p-8 justify-center">
                  <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${activeCard.colorTheme === 'purple' ? 'bg-[#7D23F7]/10 text-[#7D23F7]' : 'bg-[#60C2FF]/10 text-[#60C2FF]'}`}>
                          <ActiveIcon size={20} />
                      </div>
                  </div>

                  <div className="space-y-3">
                      {activeCard.features.map((feature, i) => (
                          <motion.div 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -10 }}
                              transition={{ delay: 0.2 + (i * 0.1) }}
                              className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#7D23F7]/20 hover:shadow-sm transition-all"
                          >
                              <feature.icon className={`w-5 h-5 shrink-0 mt-0.5 ${activeCard.colorTheme === 'purple' ? 'text-[#7D23F7]' : 'text-[#60C2FF]'}`} />
                              <div>
                                  <div className="text-sm font-semibold text-slate-800">{feature.label}</div>
                                  <div className="text-xs text-slate-500 leading-snug mt-0.5">{feature.desc}</div>
                              </div>
                          </motion.div>
                      ))}
                  </div>
               </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}