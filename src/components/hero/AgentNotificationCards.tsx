import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import AIOrb from './AIOrb';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types ---
export type ColorTheme = 'purple' | 'green' | 'blue' | 'orange';

export interface CardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  colorTheme: ColorTheme;
  onClick?: () => void;
  className?: string;
}

// --- Configuration ---
// Refined, more sophisticated color palettes
const THEMES: Record<ColorTheme, {
  gradient: string[];
  iconBg: string;
  iconColor: string;
  borderColor: string;
}> = {
  purple: {
    gradient: ['bg-purple-500/30', 'bg-fuchsia-500/30', 'bg-indigo-500/30'],
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-600',
    borderColor: 'group-hover:border-purple-500/50',
  },
  green: {
    gradient: ['bg-emerald-500/30', 'bg-teal-500/30', 'bg-lime-500/30'],
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-600',
    borderColor: 'group-hover:border-emerald-500/50',
  },
  blue: {
    gradient: ['bg-blue-500/30', 'bg-cyan-500/30', 'bg-sky-500/30'],
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-600',
    borderColor: 'group-hover:border-blue-500/50',
  },
  orange: {
    gradient: ['bg-orange-500/30', 'bg-amber-500/30', 'bg-rose-500/30'],
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-600',
    borderColor: 'group-hover:border-orange-500/50',
  },
};

export const AgentCard: React.FC<CardProps> = React.memo(({ 
  title, 
  description, 
  icon: Icon, 
  colorTheme, 
  onClick, 
  className 
}) => {
  const theme = THEMES[colorTheme];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={onClick}
      className={cn(
        "group relative w-full h-[320px] overflow-hidden cursor-pointer",
        "rounded-t-[24px] border border-white/40",
        "bg-white backdrop-blur-xl shadow-sm",
        "transition-all duration-500 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]", // Permanent shadow
        className
      )}
    >
        
      <div className={cn(
        "absolute inset-0 rounded-[24px] pointer-events-none z-20",
        theme.borderColor.replace('group-hover:', '') // Remove hover prefix
      )} />

      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-100">
        <motion.div
          className={cn("absolute -top-[20%] -right-[20%] w-[80%] h-[80%] rounded-full blur-[100px]", theme.gradient[0])}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className={cn("absolute -bottom-[20%] -left-[20%] w-[80%] h-[80%] rounded-full blur-[100px]", theme.gradient[1])}
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* --- Noise Texture (Adds tactile feel) --- */}
      <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      />

      {/* --- Content Layer --- */}
      <div className="relative h-full flex flex-col p-8 z-10">
        
        {/* Top: Icon & Action */}
        <div className="flex justify-between items-start">
          <div className={cn(
            "p-3.5 rounded-2xl transition-all duration-300",
            "ring-1 ring-black/5 shadow-sm backdrop-blur-md",
            "bg-white/80" 
          )}>
            <Icon size={24} className={theme.iconColor} strokeWidth={2} />
          </div>

          <motion.div 
            className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center opacity-100 translate-x-0 bg-white shadow-md text-gray-900"
          )}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </div>
        {/* Center: AI Orb Visual */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
             <div className="relative w-[180px] h-[180px] -translate-y-8">
                 {/* Signal Animation - Centered on Orb */}
                {/* Modern Radar/Wave Animation */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className={cn(
                      "absolute top-1/2 left-1/2 w-[100px] h-[100px] rounded-full border will-change-transform",
                      colorTheme === 'purple' ? "border-purple-500/40" : 
                      colorTheme === 'blue' ? "border-blue-500/40" :
                      colorTheme === 'green' ? "border-emerald-500/40" : "border-orange-500/40"
                    )}
                    initial={{ x: "-50%", y: "-50%", opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: [0, 0.5, 0],
                      scale: [0.8, 2.2],
                      borderWidth: ["1px", "0px"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: i * 0.8, // Staggered delay for wave effect
                      times: [0, 0.2, 1] // Quick fade in, long fade out
                    }}
                  />
                ))}
                
                {/* Core Glow Pulse */}
                 <motion.div
                    className={cn(
                      "absolute top-1/2 left-1/2 w-[110px] h-[110px] rounded-full opacity-20 blur-xl will-change-transform",
                      colorTheme === 'purple' ? "bg-purple-500" : 
                      colorTheme === 'blue' ? "bg-blue-500" :
                      colorTheme === 'green' ? "bg-emerald-500" : "bg-orange-500"
                    )}
                     animate={{ 
                       x: "-50%", y: "-50%",
                       opacity: [0.1, 0.3, 0.1],
                       scale: [0.9, 1.1, 0.9] 
                     }}
                     transition={{
                       duration: 4,
                       repeat: Infinity,
                       ease: "easeInOut"
                     }}
                 />

                 <AIOrb className="w-full h-full relative z-10" theme={colorTheme === 'purple' ? 'purple' : 'blue'} />
             </div>
        </div>

        {/* Middle: Text Content */}
        <div className="flex-grow flex flex-col justify-end relative z-10 translate-y-5">
          <h3 className="text-2xl font-bold text-left text-black tracking-tight leading-[1.1]">
            {title}
          </h3>
          <p className="text-slate-500 font-medium text-left text-[15px] leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Bottom: Divider & Footer */}
        <div className="mt-6 pt-6 border-t border-slate-200/60 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Agent Workflow
            </span>
            <div className={cn("h-1.5 w-6 rounded-full", theme.gradient[0].replace('/30', ''))} />
        </div>

      </div>
    </motion.div>
  );
});