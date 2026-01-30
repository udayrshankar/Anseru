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
// --- Types ---
export type ColorTheme = 'purple' | 'green' | 'blue' | 'orange';
export type CardVariant = 'vertical' | 'horizontal'; // Added variant type

export interface CardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  colorTheme: ColorTheme;
  variant?: CardVariant; // Added variant prop
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
  variant = 'vertical', // Default to vertical
  onClick, 
  className 
}) => {
  const theme = THEMES[colorTheme];
  const isHorizontal = variant === 'horizontal';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={onClick}
      className={cn(
        "group relative w-full overflow-hidden cursor-pointer",
        "rounded-[24px] border border-white/40", // Changed rounded-t to rounded
        "bg-white backdrop-blur-xl shadow-sm",
        "transition-all duration-500 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]",
        isHorizontal ? "h-auto" : "h-[320px]", // Auto height for horizontal
        className
      )}
    >
        
      <div className={cn(
        "absolute inset-0 rounded-[24px] pointer-events-none z-20",
        theme.borderColor.replace('group-hover:', '') 
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

      <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      />

      {/* --- Content Layer --- */}
      <div className={cn(
          "relative h-full flex p-6 z-10",
          isHorizontal ? "flex-row items-center gap-6" : "flex-col p-8"
      )}>
        
        {/* Icon */}
        <div className={cn(
            "rounded-2xl",
            isHorizontal ? "p-3" : "p-3.5"
        )}>
            <Icon size={isHorizontal ? 20 : 24} className={theme.iconColor} strokeWidth={2} />
        </div>

        {/* Text Content */}
        <div className={cn(
            "flex-grow min-w-0 flex",
            isHorizontal ? "flex-row items-center gap-6 justify-between" : "flex-col justify-end translate-y-5"
        )}>
             <div className="min-w-0">
                <h3 className={cn(
                    "font-bold text-black tracking-tight",
                    isHorizontal ? "text-lg truncate" : "text-2xl leading-[1.1] text-left"
                )}>
                    {title}
                </h3>
                <p className={cn(
                    "text-slate-500 font-medium",
                    isHorizontal ? "text-sm truncate" : "text-left text-[15px] leading-relaxed line-clamp-3 mt-1"
                )}>
                    {description}
                </p>
             </div>
             
             {/* Horizontal Right Side: Action Arrow */}
             {isHorizontal && (
                <div className="flex items-center gap-4 shrink-0">
                     {/* Divider equivalent */}
                     <div className={cn("h-1.5 w-6 rounded-full", theme.gradient[0].replace('/30', ''))} />
                     
                     <motion.div 
                        className={cn("w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-md text-gray-900")}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowUpRight size={16} />
                    </motion.div>
                </div>
             )}
        </div>

        {/* Vertical Layout Elements */}
        {!isHorizontal && (
            <>
                {/* Visual Orb - Only in Vertical */}
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                     <div className="relative w-[180px] h-[180px] -translate-y-8">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className={cn(
                              "absolute top-1/2 left-1/2 w-[100px] h-[100px] rounded-full border will-change-transform",
                              colorTheme === 'purple' ? "border-purple-500/80" : 
                              colorTheme === 'blue' ? "border-blue-500/80" :
                              colorTheme === 'green' ? "border-emerald-500/80" : "border-orange-500/80"
                            )}
                            initial={{ x: "-50%", y: "-50%", opacity: 0, scale: 0.8 }}
                            animate={{ 
                              opacity: [0, 0.8, 0],
                              scale: [0.8, 2.2],
                              borderWidth: ["1px", "0px"]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeOut",
                              delay: i * 0.8,
                              times: [0, 0.2, 1]
                            }}
                          />
                        ))}
                         <AIOrb className="w-full h-full relative z-10" theme={colorTheme === 'purple' ? 'purple' : 'blue'} />
                     </div>
                </div>

                 <div className="flex justify-between items-start absolute top-8 right-8">
                      <motion.div 
                        className="w-10 h-10 rounded-full flex items-center justify-center opacity-100 bg-white shadow-md text-gray-900"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowUpRight size={18} />
                      </motion.div>
                 </div>

                <div className="mt-6 pt-6 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Agentic Workflow
                    </span>
                    <div className={cn("h-1.5 w-6 rounded-full", theme.gradient[0].replace('/30', ''))} />
                </div>
            </>
        )}

      </div>
    </motion.div>
  );
});