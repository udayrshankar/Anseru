import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Target, TrendingUp, Network } from 'lucide-react';

const ExpansionCard = ({ step, index }: { step: any; index: number }) => {
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
      className="relative w-80 h-[450px] group"
    >
      {/* Background Layer: Deep Glow */}
      <div className="absolute inset-10 bg-pink-400/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Main Card Body */}
      <div className="relative h-full w-full bg-white/40 backdrop-blur-[2000px] border border-pink-100/50 rounded-2xl p-10 flex flex-col items-start text-left shadow-[0_4px_20px_rgba(236,72,153,0.03)] group-hover:shadow-[0_20px_50px_rgba(236,72,153,0.1)] group-hover:bg-white/90 transition-all duration-500 overflow-hidden">
        
        {/* Grain Overlay - Applied only to card for texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] contrast-150 brightness-100 mix-blend-multiply" 
             style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}></div>

        {/* Professional Iconography */}
        <div className="mb-10 p-4 bg-lavender-50 rounded-xl border border-pink-50 group-hover:bg-pink-50 group-hover:border-pink-100 transition-colors duration-500">
          <step.icon size={24} className="text-pink-400 group-hover:text-pink-600 transition-colors duration-500" strokeWidth={1.2} />
        </div>

        <div style={{ translateZ: "40px" }} className="flex-1 z-10">
          <div className="text-[10px] font-bold text-pink-500 uppercase tracking-[0.4em] mb-3">
            Expansion Step 0{index + 1}
          </div>
          <h3 className="text-2xl font-semibold text-slate-800 tracking-tight mb-4">
            {step.title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed font-light">
            {step.desc}
          </p>
        </div>

        {/* Visual Progress/Metric */}
        <div className="w-full pt-6 border-t border-pink-50 flex flex-col gap-3">
            <div className="flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase tracking-widest">
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
      title: "Initial Focus",
      desc: "Deep penetration into regulated B2B SaaS. Solving high-stakes document friction in RFP-heavy procurement cycles."
    },
    {
      icon: TrendingUp,
      title: "Workflow Expansion",
      desc: "Horizontal growth across established accounts by automating adjacent deal negotiation and approval loops."
    },
    {
      icon: Network,
      title: "Core Infrastructure",
      desc: "Transitioning into the definitive enterprise system of record for proprietary deal execution and decision logic."
    }
  ];

  return (
    <section className="relative w-full h-full flex flex-col items-center justify-center px-12 overflow-hidden">
      
      {/* Global Grain Filter */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay" 
           style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />

      {/* Atmospheric Lavender/Pink Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-100/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-100/30 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl w-full">
        <header className="mb-5 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl font-medium text-slate-900 tracking-tighter"
          >
            Clear Expansion <span className="text-pink-400 font-light italic">Path</span>
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

        <div className="flex items-center justify-center gap-8 perspective-1000">
          {steps.map((step, i) => (
            <ExpansionCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 2000px; }
        .bg-lavender-50 { background-color: #f3f0ff; }
      `}</style>
    </section>
  );
}