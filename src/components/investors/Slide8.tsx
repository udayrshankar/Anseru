import React from "react";
import { motion } from "framer-motion";

interface Level {
  title: string;
  desc: React.ReactNode;
  status: string;
  style: string;
  titleColor: string;
  textColor: string;
  accentText: string;
  badgeStyle: string;
  glow: string;
  tractionContent?: {
      title: string;
      items: string[];
  };
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

        <div className="relative z-10 flex flex-col h-full">
          {/* Phase Header */}
          <div className="flex justify-between items-center mb-8">
            <span className={`text-3xl font-bold italic ${level.accentText}`}>0{index + 1}</span>
            <div className={`px-3 py-1 rounded-full border ${level.badgeStyle} text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md`}>
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

            {/* Traction Content (if present) */}
            {level.tractionContent && (
                <div className="mt-6 pt-6 border-t border-pink-100/50">
                    <p className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-3">
                        {level.tractionContent.title}
                    </p>
                    <ul className="space-y-2">
                        {level.tractionContent.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-slate-600 font-light">
                                <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
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
        desc: "RFPs and Security Questionnaires", 
        status: "Operational",
        style: "bg-white border-pink-100/40",
        titleColor: "text-slate-900",
        textColor: "text-black",
        accentText: "text-pink-300",
        badgeStyle: "border-pink-100 text-pink-500",
        glow: "bg-pink-400",
        tractionContent: {
            title: "TRACTION GAINED TODAY - 2 ONGOING PILOTS:",
            items: [
                "APAC - based HRMS B2B SaaS (Mid-Market)",
                "US - based Healthcare AI B2B SaaS (Mid-Market)"
            ]
        }
    },
    { 
        title: "What This Unlocks", 
        desc: "A System That Learns How Enterprise Deals are Executed And Approved.", 
        status: "Roadmap",
        style: "bg-white border-purple-100/40",
        titleColor: "text-slate-900",
        textColor: "text-black",
        accentText: "text-purple-300",
        badgeStyle: "border-purple-100 text-purple-500",
        glow: "bg-purple-400"
    },
    { 
        title: "Final Step", 
        desc: <>This Becomes the First Layer of <span className="font-bold">Vertically Integrated</span> Deal Infrastructure.</>, 
        status: "Vision",
        style: "bg-white border-pink-100/40",
        titleColor: "text-slate-900",
        textColor: "text-black",
        accentText: "text-pink-300",
        badgeStyle: "border-pink-100 text-pink-500",
        glow: "bg-pink-400"
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
            From RFP Automation to <span className="text-purple-600 font-light italic">Deal Infrastructure.</span>
          </h2>
        </motion.header>

        {/* Horizontal Stages Section */}
        <div className="flex-1 flex gap-4 items-center">
          {levels.map((level, i) => (
            <React.Fragment key={i}>
                <div className="flex-1 h-full flex items-center">
                    <Stage level={level} index={i} />
                </div>
                {i < levels.length - 1 && (
                    <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate = {{ opacity: 0.8, x: 0 }}
                        transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
                        className="flex-none px-2 text-black"
                    >
                        <ChevronRight size={32} strokeWidth={1} />
                    </motion.div>
                )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}