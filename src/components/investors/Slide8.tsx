import { motion } from "framer-motion";

interface Level {
  title: string;
  desc: string;
  status: string;
  style: string;
  titleColor: string;
  textColor: string;
  accentText: string;
  badgeStyle: string;
  glow: string;
}

const Stage = ({ level, index }: { level: Level; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex-1 group h-full"
    >
      <div className={`h-full relative p-8 rounded-[2rem] border ${level.style} flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(236,72,153,0.08)]`}>
        {/* Grain Texture Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply contrast-125" 
             style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />

        <div className="relative z-10">
          {/* Phase Header */}
          <div className="flex justify-between items-center mb-12">
            <span className={`text-3xl font-light italic ${level.accentText}`}>0{index + 1}</span>
            <div className={`px-3 py-1 rounded-full border ${level.badgeStyle} text-[8px] font-black uppercase tracking-[0.2em] backdrop-blur-md`}>
              {level.status}
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h3 className={`text-xl font-bold tracking-tight mb-3 leading-tight ${level.titleColor}`}>
              {level.title}
            </h3>
            <p className={`text-lg font-light leading-relaxed ${level.textColor}`}>
              {level.desc}
            </p>
          </div>
        </div>

        {/* Localized Hover Glow */}
        <div className={`absolute -right-16 -top-16 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-1000 ${level.glow}`} />
      </div>
    </motion.div>
  );
};

import { ChevronRight } from "lucide-react";

export default function Slide8() {
  const levels = [
    { 
        title: "Today", 
        desc: "RFPs and security questionnaires", 
        status: "Operational",
        style: "bg-white border-pink-100/40",
        titleColor: "text-slate-900",
        textColor: "text-black",
        accentText: "text-pink-300",
        badgeStyle: "border-pink-100 text-pink-500",
        glow: "bg-pink-400"
    },
    { 
        title: "What this unlocks", 
        desc: "A system that learns how enterprise deals are executed and approved.", 
        status: "Roadmap",
        style: "bg-white border-purple-100/40",
        titleColor: "text-slate-900",
        textColor: "text-black",
        accentText: "text-purple-300",
        badgeStyle: "border-purple-100 text-purple-500",
        glow: "bg-purple-400"
    },
    { 
        title: "FInal Step", 
        desc: "This becomes the first layer of deal infrastructure.", 
        status: "Vision",
        // Dark Box Theme with Light Text
        style: "bg-slate-900 border-slate-800 shadow-2xl",
        titleColor: "text-white",
        textColor: "text-white",
        accentText: "text-pink-400/50",
        badgeStyle: "border-slate-700 text-pink-400",
        glow: "bg-pink-500"
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-12 overflow-hidden relative">
      {/* Global Grain Matte Filter */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay" 
           style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />

      {/* Atmospheric Branding Layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-pink-50/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-purple-50/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl w-full z-10 flex flex-col h-[70vh]">
        {/* Compact Header */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 border-l-2 border-pink-200 pl-8"
        >
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.6em] mb-2 block">Strategic Vision</span>
          <h2 className="text-5xl font-semibold text-slate-900 tracking-tighter leading-none">
            From RFP automation to <span className="text-purple-600 font-light italic">deal infrastructure.</span>
          </h2>
        </motion.header>

        {/* Horizontal Stages Section */}
        <div className="flex-1 flex gap-2 items-center">
          {levels.map((level, i) => (
            <div key={i} className="flex-1 h-full flex items-center">
                <Stage level={level} index={i} />
                {i < levels.length - 1 && (
                    <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate = {{ opacity: 0.8, x: 0 }}
                        transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
                        className="px-4 text-black"
                    >
                        <ChevronRight size={32} strokeWidth={1} />
                    </motion.div>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}