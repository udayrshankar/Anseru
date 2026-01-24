import React, { useId } from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for class merging
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// -- Types --
export interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  watermark?: React.ReactNode;
  minHeight?: string;
  className?: string;
  index?: number;
  isActive?: boolean; // Controls the "Timer" border
  duration?: number;  // Duration of the timer loop
  onMouseEnter?: () => void; // To snap focus
}

// -- Sub-Components --

const TimerBorder = ({ duration }: { duration: number }) => {
  const gradientId = useId();
  
  return (
    <div className="absolute inset-0 z-50 pointer-events-none rounded-[40px]">
      <svg className="absolute inset-0 w-full h-full overflow-visible">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9F5AF0" />
            <stop offset="100%" stopColor="#7038BA" />
          </linearGradient>
        </defs>
        <motion.rect
          x="1.5"
          y="1.5"
          width="calc(100% - 3px)"
          height="calc(100% - 3px)"
          rx="38.5"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
        />
      </svg>
    </div>
  );
};

// -- Main Component --


// -- Lively Background Orbs --
const MovingOrbs = () => {
    // Generate random positions/movements for a "lively" feel
    // Use useMemo to keep values stable across re-renders within the same mount
    const orbs = React.useMemo(() => {
      return Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        // Size: 30px to 70px for visibility
        size: Math.random() * 40 + 5, 
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
        duration: Math.random() * 20 + 10, // 10s to 30s for slow, smooth drift
        delay: Math.random() * 5,
        // Pre-calculate paths for stability
        moveX: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0], // Larger movement range
        moveY: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
      }));
    }, []);
  
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {orbs.map((orb) => (
          <motion.div
            key={orb.id}
            // Use purple/black mix or just dark purple for shadow effect. 
            // Restoring blur for "orb" look.
            className="absolute rounded-full bg-white"
            style={{
              width: orb.size,
              height: orb.size,
              left: `${orb.initialX}%`,
              top: `${orb.initialY}%`,
            }}
            animate={{
              x: orb.moveX,
              y: orb.moveY,
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        ))}
      </div>
    );
};

export default function Card({
  title,
  description,
  icon,
  watermark,
  minHeight = "min-h-[300px]",
  className,
  index = 0,
  isActive = false,
  withMovingOrbs = false,
  duration = 4000,
  onMouseEnter,
}: CardProps & { withMovingOrbs?: boolean }) {
  return (
    <motion.div
      // Animation Logic
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" }
      }}
      viewport={{ once: true }}
      onMouseEnter={onMouseEnter}
      
      // Interaction States: Lift on hover or active
      animate={{
        y: isActive ? -20 : 0,
        scale: isActive ? 1.05 : 1,
        transition: { duration: 0.3, ease: "easeOut" } // Instant transition for interactions
      }}
      whileHover={{ 
        y: -20, 
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" }
      }}

      className={cn(
        // Layout & Base
        "group relative flex flex-col justify-between overflow-hidden rounded-[40px] p-8 md:p-10",
        
        // Appearance: Glassy White + Borders
        "bg-white/90 backdrop-blur-md", // Translucent base
        "border border-white/60",       // Subtle border
        
        // Shadows: Deep and layered for "Pop"
        "shadow-[0_40px_80px_-20px_rgba(42,22,56,0.12),0_0_0_1px_rgba(255,255,255,0.8)_inset]",
        
        minHeight,
        className
      )}
    >
      {/* 1. Timer Animation (Active State) */}
      {isActive && <TimerBorder duration={duration} />}

      {/* 2. Visual Layer: Background Gradients & Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle interior sheen */}
        <div className="absolute inset-0 opacity-100" />
        
        {/* Top-Right Purple Orb */}
        <div className="absolute top-[-20%] right-[-20%] w-80 h-80 bg-[#d0b2ec] rounded-full blur-[100px] transition-transform duration-700 hover:scale-110" />
        
        {/* Bottom-Left Blue Orb */}
        <div className="absolute bottom-[-20%] left-[-20%] w-72 h-72 bg-[#f4dfec] rounded-full blur-[90px]" />

        {/* Dynamic Moving Orbs */}
        {withMovingOrbs && <MovingOrbs />}
      </div>



      {/* 3. Visual Layer: Watermark */}
      {watermark && (
        <div className="absolute -right-6 -bottom-6 opacity-[0.07] scale-110 transition-transform duration-700 group-hover:scale-125 pointer-events-none -z-10 mix-blend-multiply origin-bottom-right">
          {watermark}
        </div>
      )}

      {/* 4. Content: Icon */}
      {icon && (
        <div className="relative z-10 w-18 h-18 mb-8 flex items-center justify-center rounded-2xl bg-white shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-110">
           {/* Icon internal gloss */}
           <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/80 bg-gradient-to-br from-white via-transparent to-black/[0.02]" />
           <div className="relative text-[#4a238a] [&>svg]:w-9 [&>svg]:h-9 transition-transform duration-500 [&>svg]:rotate-3">
             {icon}
           </div>
        </div>
      )}

      {/* 5. Content: Text */}
      <div className="relative z-10 space-y-4">
        <h3 className="font-onest text-xl md:text-2xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-indigo-900 transition-all duration-300 group-hover:scale-[1.01] origin-left">
          {title}
        </h3>
        <p className="font-onest text-[15px] md:text-base text-[#2A1638] leading-relaxed opacity-90">
          {description}
        </p>
      </div>

      {/* 6. Decorative Bottom Line */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-300/60 to-transparent opacity-100" />
    </motion.div>
  );
}
