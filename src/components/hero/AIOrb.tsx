import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Configuration ---
export type OrbTheme = 'purple' | 'blue';

const ORB_THEMES: Record<OrbTheme, {
  glow: string;
  blob1: string;
  blob2: string;
  blob3: string;
}> = {
  purple: {
    glow: 'bg-purple-500/20',
    blob1: 'bg-indigo-600',
    blob2: 'bg-fuchsia-400',
    blob3: 'bg-purple-500',
  },
  blue: {
    glow: 'bg-blue-500/20',
    blob1: 'bg-blue-600',
    blob2: 'bg-cyan-400',
    blob3: 'bg-sky-500',
  },
};

export const AIOrb = ({ className, theme = 'purple' }: { className?: string; theme?: OrbTheme }) => {
  const colors = ORB_THEMES[theme];

  return (
    <div className={cn("relative flex items-center justify-center w-full h-full min-h-[100px]", className)}>
      
      {/* Container for the Orb - Centered */}
      <div className="relative w-full h-full">
        
        {/* --- 1. Outer Glow (The Aura) --- */}
        <div className={cn("absolute inset-0 blur-[60px] rounded-full transform scale-110", colors.glow)} />

        {/* --- 2. The Main Sphere Container --- */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10 isolate">
          
          {/* --- 3. Internal "Fluid" Layers (The Soul) --- */}
          {/* We rotate this entire wrapper to create the swirling effect */}
          <motion.div 
            className="absolute inset-[-50%] w-[200%] h-[200%] opacity-90"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {/* Blob 1: Deep Base */}
            <motion.div
              className={cn("absolute top-1/2 left-1/2 w-[60%] h-[60%] rounded-full mix-blend-multiply blur-[50px]", colors.blob1)}
              animate={{ 
                x: ["-20%", "20%", "-20%"],
                y: ["-20%", "20%", "-20%"],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Blob 2: Bright Energy */}
            <motion.div
              className={cn("absolute top-1/3 left-1/3 w-[50%] h-[50%] rounded-full mix-blend-multiply blur-[40px]", colors.blob2)}
              animate={{ 
                x: ["20%", "-20%", "20%"],
                y: ["20%", "-20%", "20%"],
                scale: [1.2, 0.8, 1.2]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Blob 3: Depth Accent */}
            <motion.div
              className={cn("absolute bottom-1/3 right-1/3 w-[50%] h-[50%] rounded-full mix-blend-multiply blur-[45px]", colors.blob3)}
              animate={{ 
                x: ["-10%", "10%", "-10%"],
                y: ["10%", "-10%", "10%"],
                scale: [0.9, 1.1, 0.9]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* --- 4. Texture Overlay (Noise) --- */}
          {/* Adds that physical "frosted" realism */}
          <div 
            className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
          />

          {/* --- 5. The Glass Shell (Reflections & Shadows) --- */}
          
          {/* Inner Shadow (Bottom Right) - Gives volume */}
          <div className="absolute inset-0 rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1)] pointer-events-none" />
          
          {/* Inner Highlight (Top Left) - The "Lens" effect */}
          <div className="absolute inset-0 rounded-full shadow-[inset_10px_10px_20px_rgba(255,255,255,0.2)] pointer-events-none" />

          {/* The Sharp Specular Highlight (The "Wet" look) */}
          <div className="absolute top-[15%] left-[15%] w-[25%] h-[15%] bg-gradient-to-br from-white to-transparent opacity-60 rounded-[100%] blur-[2px] transform -rotate-45" />
          
          {/* Secondary smaller highlight */}
          <div className="absolute bottom-[20%] right-[20%] w-[10%] h-[5%] bg-white/20 rounded-[100%] blur-[4px] transform -rotate-45" />
        </div>

        {/* --- 6. Ring Border (Optional, for containment) --- */}
        <div className="absolute inset-0 rounded-full border border-black/5 z-20 pointer-events-none" />
        
      </div>
    </div>
  );
};

export default AIOrb;