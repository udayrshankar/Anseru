import { motion } from "framer-motion";
import { Sparkles,  FileText, Check, Database, Star } from "lucide-react";

// --- 3. CONTEXT SYNTHESIS (Generate) ---
export const NewGenerateAnimation = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50/50 to-emerald-50/50">
            
            {/* Noise Texture */}
            <div className="absolute inset-0 mix-blend-overlay pointer-events-none"
                 style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
            />
            
            <div className="relative w-full max-w-[300px] h-[200px] flex items-center justify-center">
                
                {/* Left Stream: Knowledge (Purple) */}
                <motion.div 
                    className="absolute left-0 w-24 h-1 bg-gradient-to-r from-transparent to-purple-500"
                    animate={{ x: [0, 100], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Right Stream: Context (Emerald) */}
                <motion.div 
                    className="absolute right-0 w-24 h-1 bg-gradient-to-l from-transparent to-emerald-500"
                    animate={{ x: [0, -100], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />

                {/* The Fusion Reactor (Center) */}
                <div className="relative z-10">
                     <motion.div 
                        className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-xl flex items-center justify-center shadow-[0_4px_20px_rgba(168,85,247,0.15)] border border-white/60 relative z-20"
                        animate={{ 
                            scale: [1, 1.1, 1],
                            boxShadow: ["0 4px 20px rgba(168,85,247,0.15)", "0 8px 30px rgba(16,185,129,0.25)", "0 4px 20px rgba(168,85,247,0.15)"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                     >
                         <Sparkles className="text-purple-600" size={24} />
                     </motion.div>
                     
                     {/* Shockwave */}
                     <motion.div 
                        className="absolute inset-0 rounded-2xl border border-purple-500/30"
                        animate={{ scale: [1, 2], opacity: [1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                     />
                </div>

                {/* Output Document Rising */}
                <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-32 bg-white/90 backdrop-blur-sm rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/50 flex flex-col p-3 gap-2 z-30 origin-center"
                    initial={{ scale: 0, opacity: 0, y: 0 }}
                    animate={{ 
                        scale: [0, 1, 1, 0], 
                        opacity: [0, 1, 1, 0],
                        y: [0, -60, -60, -80]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.3, 0.8, 1], ease: "easeOut" }}
                >
                    <div className="w-1/3 h-1.5 bg-emerald-400 rounded-full" />
                    <div className="flex-1 w-full flex flex-col gap-1.5">
                        <div className="w-full h-1 bg-slate-100 rounded-full" />
                        <div className="w-full h-1 bg-slate-100 rounded-full" />
                        <div className="w-3/4 h-1 bg-slate-100 rounded-full" />
                    </div>
                    {/* Magic Decoration */}
                    <div className="absolute -right-1 -top-1">
                        <Sparkles size={12} className="text-yellow-400 fill-yellow-100" />
                    </div>
                </motion.div>

            </div>
        </div>
    )
}


// --- 4. THE FEEDBACK LOOP (Review) ---
export const NewReviewAnimation = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-50/50 to-purple-50/50">
             
             {/* Noise Texture */}
            <div className="absolute inset-0 mix-blend-overlay pointer-events-none"
                 style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
            />

             {/* Central Vault */}
             <div className="absolute z-10">
                 <div className="w-16 h-16 bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex items-center justify-center border border-white/60">
                     <Database className="text-slate-600" size={24} />
                 </div>
             </div>

             {/* Orbit Path */}
             <div className="absolute w-48 h-48 rounded-full border border-purple-200/50 border-dashed" />

             {/* Moving Document: User Review -> Approval -> Gold Asset */}
             <motion.div
                className="absolute w-48 h-48"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
             >
                 {/* The Object orbiting */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <motion.div 
                         className="w-12 h-14 bg-white rounded-lg shadow-lg border border-white/50 flex items-center justify-center relative overflow-hidden"
                         animate={{ rotate: -360 }} // Counter-rotate to keep upright
                         transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                         <OrbitContent />
                      </motion.div>
                 </div>
             </motion.div>

             {/* Labels at key points */}
             <div className="absolute top-10 font-bold text-[10px] text-purple-600 bg-white/90 px-3 py-1 rounded-full border border-purple-100 shadow-sm backdrop-blur-sm">REVIEW</div>
             <div className="absolute bottom-10 font-bold text-[10px] text-emerald-600 bg-white/90 px-3 py-1 rounded-full border border-emerald-100 shadow-sm backdrop-blur-sm">REUSE</div>

        </div>
    )
}

const OrbitContent = () => {
    return (
        <motion.div
           className="w-full h-full flex items-center justify-center"
           animate={{ 
               backgroundColor: ["#ffffff", "#f0fdf4", "#fffbeb", "#ffffff"],
           }}
           transition={{ duration: 8, repeat: Infinity, times: [0, 0.33, 0.66, 1], ease: "linear" }}
        >
             <ContentIcon />
        </motion.div>
    )
}

const ContentIcon = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Phase 1: Review */}
            <motion.div className="absolute" animate={{ opacity: [1, 0, 0, 1] }} transition={{ duration: 8, repeat: Infinity, times: [0.2, 0.3, 0.9, 1] }}>
                <FileText size={16} className="text-purple-400" />
            </motion.div>
            
            {/* Phase 2: Approved */}
            <motion.div className="absolute" animate={{ opacity: [0, 1, 0, 0] }} transition={{ duration: 8, repeat: Infinity, times: [0.2, 0.3, 0.6, 0.7] }}>
                <Check size={20} className="text-emerald-500" />
            </motion.div>

            {/* Phase 3: Gold Asset */}
            <motion.div className="absolute" animate={{ opacity: [0, 0, 1, 0] }} transition={{ duration: 8, repeat: Infinity, times: [0.5, 0.6, 0.9, 1] }}>
                <Star size={18} fill="#fbbf24" className="text-amber-400" />
            </motion.div>
        </div>
    )
}
