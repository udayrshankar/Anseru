import { motion } from "framer-motion";
import { Sparkles, FileText, Check, Layers, Combine } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- 1. CONSTRUCT MODE (Instant Drafts) ---
export const KgDrafting = () => {
    // 3 Blocks flying in to form a doc
    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50/50 to-purple-50/50 perspective-1000 relative">
             {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
            />

            <div className="relative w-[200px] h-[280px] bg-white/80 backdrop-blur-xl rounded-xl shadow-2xl border border-white/60 flex flex-col p-4 gap-3 overflow-hidden z-10">
                
                {/* Header Block */}
                <motion.div 
                    className="h-12 w-full bg-purple-50 rounded-lg flex items-center gap-3 px-3 border border-purple-100"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                >
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Sparkles size={14} className="text-purple-500" />
                    </div>
                    <div className="h-2 w-20 bg-white rounded-full" />
                </motion.div>

                {/* Body Block 1 */}
                <motion.div 
                    className="flex-1 w-full bg-slate-50 rounded-lg border border-slate-100 relative overflow-hidden"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 250, damping: 25, delay: 0.4 }}
                >
                    {/* Fake Text Lines */}
                    <div className="absolute inset-0 p-3 space-y-2 opacity-30">
                        <div className="h-1.5 w-full bg-slate-400 rounded-full" />
                        <div className="h-1.5 w-5/6 bg-slate-400 rounded-full" />
                        <div className="h-1.5 w-full bg-slate-400 rounded-full" />
                        <div className="h-1.5 w-4/5 bg-slate-400 rounded-full" />
                    </div>
                </motion.div>

                {/* Body Block 2 */}
                <motion.div 
                    className="h-20 w-full bg-blue-50 rounded-lg border border-blue-100 flex items-center justify-center"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 250, damping: 25, delay: 0.6 }}
                >
                     <div className="text-[10px] font-mono text-blue-600 font-bold">RFP_Answer_v1.pdf</div>
                </motion.div>

                {/* Success Flash */}
                <motion.div 
                    className="absolute inset-0 bg-white/50 backdrop-blur-[2px] flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                     <div className="bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg transform rotate-[-5deg]">
                         Done!
                     </div>
                </motion.div>
            </div>
        </div>
    )
}

// --- 2. THE FUSION CORE (Complex Formats) ---
export const KgFormats = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative">
            
            {/* The Core */}
            <div className="relative z-10">
                <motion.div 
                    className="w-20 h-20 bg-white rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.2)] border border-blue-100 flex items-center justify-center relative z-20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                >
                    <Layers className="text-blue-600" size={32} />
                </motion.div>
                {/* Spinning Rings */}
                <motion.div 
                    className="absolute inset-[-10px] rounded-2xl border border-blue-300/30"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                />
            </div>

            {/* Orbiting Formats */}
            {[{ icon: FileText, c: "bg-orange-100 text-orange-600", x: 80, y: -40 }, 
              { icon: Combine, c: "bg-green-100 text-green-600", x: -70, y: 50 }, 
              { icon: Layers, c: "bg-purple-100 text-purple-600", x: 60, y: 70 },
              { icon: FileText, c: "bg-pink-100 text-pink-600", x: -60, y: -60 }]
              .map((item, i) => (
                <motion.div
                    key={i}
                    className={cn("absolute w-10 h-10 rounded-lg flex items-center justify-center shadow-lg", item.c)}
                    initial={{ x: item.x * 2, y: item.y * 2, opacity: 0 }}
                    animate={{ 
                        x: [item.x * 2, 0], 
                        y: [item.y * 2, 0], 
                        opacity: [0, 1, 0],
                        scale: [1, 0.5]
                    }}
                    transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: i * 0.5,
                        ease: "easeInOut" 
                    }}
                >
                    <item.icon size={18} />
                </motion.div>
            ))}

            <div className="absolute bottom-8 font-mono text-xs text-blue-900/60 font-bold bg-blue-50 px-3 py-1 rounded-full">
                Unified Output
            </div>
        </div>
    )
}

// --- 3. HIGH-SPEED RAIL (Smart Review) ---
export const KgReview = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden bg-slate-50/30">
             
             <div className="relative w-full h-40 flex items-center">
                 {/* Track */}
                 <div className="absolute inset-x-0 h-2 bg-slate-200" />

                 {/* Passing Blocks */}
                 {[0, 1, 2, 3].map(i => (
                     <motion.div
                        key={i}
                        className={cn(
                            "absolute w-16 h-12 rounded-lg shadow-md border-2 bg-white flex items-center justify-center z-10",
                            i === 2 ? "border-orange-200" : "border-green-200"
                        )}
                        initial={{ x: -100 }}
                        animate={{ x: "120%" }} // Fly off screen
                        transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            delay: i * 0.8,
                            ease: "linear"
                        }}
                     >
                         {i === 2 ? (
                             <span className="text-[10px] font-bold text-orange-500">Review</span>
                         ) : (
                             <Check className="text-green-500" size={16} />
                         )}
                     </motion.div>
                 ))}

                 {/* The Gate */}
                 <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-slate-300 h-24 top-1/2 -translate-y-1/2 rounded-full z-0 opacity-50" />
                 
                 {/* Scanner Effect at Gate */}
                 <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-20 bg-blue-500/5 border-x border-blue-500/10 flex flex-col items-center justify-center">
                      <div className="text-[9px] font-bold text-blue-500 tracking-wider mb-14">AI SCAN</div>
                      <motion.div 
                        className="w-full h-0.5 bg-blue-400 blur-sm absolute"
                        animate={{ top: ["0%", "100%"] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                 </div>
             </div>

             <div className="flex gap-6 mt-4 opacity-70">
                 <div className="flex items-center gap-2">
                     <div className="w-3 h-3 bg-green-500 rounded-sm" />
                     <span className="text-[10px] uppercase font-bold text-slate-500">Auto-Pass</span>
                 </div>
                 <div className="flex items-center gap-2">
                     <div className="w-3 h-3 bg-orange-400 rounded-sm" />
                     <span className="text-[10px] uppercase font-bold text-slate-500">Flagged</span>
                 </div>
             </div>
        </div>
    )
}
