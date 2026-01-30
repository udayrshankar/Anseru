import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Target, TrendingUp, Network, ChevronRight } from 'lucide-react';

interface ExpansionStep {
  icon: React.ElementType;
  title: string;
  bullets: string[];
}

const ExpansionCard = ({ step, index }: { step: ExpansionStep; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-120 h-[450px] group"
    >
      {/* Background Layer: Deep Glow */}
      <div className="absolute inset-10 bg-pink-400/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Main Card Body */}
      <div className="relative h-full w-full bg-white/40 backdrop-blur-[2000px] border border-pink-100/50 rounded-2xl p-10 flex flex-col items-start text-left shadow-[0_4px_20px_rgba(236,72,153,0.03)] group-hover:shadow-[0_20px_50px_rgba(236,72,153,0.1)] group-hover:bg-white/90 transition-all duration-500 overflow-hidden">
        
        {/* Grain Overlay - Applied only to card for texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] contrast-150 brightness-100 mix-blend-multiply" 
             style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}></div>

        {/* Professional Iconography */}
        <div className="mb-8 p-4 bg-lavender-50 rounded-xl border border-pink-50 group-hover:bg-pink-50 group-hover:border-pink-100 transition-colors duration-500">
          <step.icon size={24} className="text-pink-400 group-hover:text-pink-600 transition-colors duration-500" strokeWidth={1.2} />
        </div>

        <div style={{ transform: "translateZ(40px)" }} className="flex-1 z-10">
          <div className="text-[15px] font-bold text-pink-500 uppercase tracking-[0.4em] mb-3">
            Expansion Step 0{index + 1}
          </div>
          <h3 className="text-2xl font-semibold text-slate-800 tracking-tight mb-4">
            {step.title}
          </h3>
          <ul className="text-[16px] text-slate-500 leading-relaxed space-y-2 list-disc pl-4">
            {step.bullets.map((bullet: string, i: number) => (
                <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>

        {/* Visual Progress/Metric */}
        <div className="w-full pt-6 border-t border-pink-50 flex flex-col gap-3">
            <div className="flex justify-between items-center text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                <span>Infrastructure Readiness</span>
                <span>{(index + 1) * 33}%</span>
            </div>
            <div className="w-full h-1 bg-pink-50 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(index + 1) * 33}%` }}
                    className="h-full bg-pink-400" 
                />
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Slide7() {
  const steps = [
    {
      icon: Target,
      title: "Initial SAM",
      bullets: [
        "B2B SaaS & Services Selling to Enterprises",
        "RFP & Security-Heavy Sales Motions",
        "Multi-Billion $$ Market"
      ]
    },
    {
      icon: TrendingUp,
      title: "Expansion",
      bullets: [
        "More Deal Execution Workflows",
        "More Teams, Same Customers",
        "Land and Expand Strategy"
      ]
    },
    {
      icon: Network,
      title: "Long-Term TAM",
      bullets: [
        "AI - Native Deal Infrastructure for Enterprise Sales",
        "Matured Deal Execution Workflows",
        "Institutional Memory and Compounding Intelligence"
      ]
    }
  ];

  return (
    <section className="relative w-full h-full flex flex-col items-center justify-center px-12 overflow-hidden pt-10">
      
      {/* Global Grain Filter */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay" 
           style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />

      {/* Atmospheric Lavender/Pink Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-100/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-100/30 rounded-full blur-[120px]" />

        <header className="mb-5 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl font-medium text-slate-900 tracking-tighter"
          >
            A Massive Market With a <span className="text-pink-400 font-light italic">Clear Expansion Path.</span>
          </motion.h2>
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="mt-4 text-slate-400 text-sm tracking-[0.2em] uppercase"
          >
            Scalable Enterprise Deal Architecture
          </motion.div>
        </header>

        <div className="flex items-center justify-center gap-2 perspective-1000 max-w-7xl w-full">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
                <ExpansionCard step={step} index={i} />
                {i < steps.length - 1 && (
                    <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 0.8, x: 0 }}
                        transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
                        className="px-2 text-pink-300"
                    >
                        <ChevronRight size={48} strokeWidth={1} />
                    </motion.div>
                )}
            </React.Fragment>
          ))}
        </div>

      <style>{`
        .perspective-1000 { perspective: 2000px; }
        .bg-lavender-50 { background-color: #f3f0ff; }
      `}</style>
    </section>
  );
}