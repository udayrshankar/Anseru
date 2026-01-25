import { motion } from "framer-motion";
import { ShieldCheck, Server, RefreshCw, Zap } from "lucide-react";



// --- 1. THE NEURAL SCAN (Source-Backed) ---
export const SudResponse = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative bg-gradient-to-br from-purple-50/50 to-emerald-50/50 overflow-hidden">
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none"
             style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
        />

      {/* Background Pulse */}
      <div className="absolute inset-0 flex items-center justify-center">
         <motion.div 
            className="w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
         />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
         
         {/* The Scanner Node (Top) */}
         <div className="relative">
             <motion.div 
                className="w-16 h-16 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl flex items-center justify-center relative z-20 border border-white/60"
                animate={{ boxShadow: ["0 10px 30px -10px rgba(168, 85, 247, 0.4)", "0 10px 30px -10px rgba(168, 85, 247, 0.1)"] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
             >
                 <Server className="text-purple-600" size={28} />
             </motion.div>
             {/* Scanning Beam */}
             <motion.div 
                className="absolute top-full left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-b from-purple-500/20 to-transparent [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)]"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
             />
         </div>

         {/* The Document (Target) */}
         <div className="relative w-48 h-32 bg-white/90 backdrop-blur-sm rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/50 p-4 space-y-3 overflow-hidden">
             <div className="flex gap-2">
                 <div className="w-8 h-8 rounded-full bg-slate-100" />
                 <div className="space-y-1.5 flex-1">
                     <div className="w-3/4 h-2 bg-slate-100 rounded-full" />
                     <div className="w-1/2 h-2 bg-slate-100 rounded-full" />
                 </div>
             </div>
             <div className="space-y-2 pt-2">
                 <div className="w-full h-1.5 bg-slate-50 rounded-full" />
                 <div className="w-5/6 h-1.5 bg-slate-50 rounded-full" />
                 <div className="w-4/6 h-1.5 bg-slate-50 rounded-full" />
             </div>

             {/* Verified Badge Pop-up */}
             <motion.div 
                className="absolute inset-0 bg-emerald-500/5 backdrop-blur-[1px] flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.5, 0.9, 1] }}
             >
                 <motion.div
                    className="bg-white/95 px-4 py-2 rounded-full shadow-lg border border-emerald-100 flex items-center gap-2"
                    initial={{ scale: 0.5, y: 10 }}
                    animate={{ scale: [0.5, 1, 1, 0.5], y: [10, 0, 0, -10] }}
                    transition={{ duration: 4, repeat: Infinity, times: [0, 0.45, 0.85, 1] }}
                 >
                     <ShieldCheck size={16} className="text-emerald-600" />
                     <span className="text-xs font-bold text-emerald-700">Verified</span>
                 </motion.div>
             </motion.div>
         </div>

      </div>
    </div>
  );
};

// --- 2. LIVE SYNC PULSE (Real-Time Updates) ---
export const SudUpdates = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-50/50 to-purple-50/50 p-6 relative">
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none"
             style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
        />

      <div className="w-full max-w-sm bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] border border-white/60 overflow-hidden relative">
          
          {/* Header */}
          <div className="h-12 bg-white/50 border-b border-purple-100/30 flex items-center justify-between px-5">
              <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">Live Monitor</span>
              <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
              </div>
          </div>

          <div className="p-2 space-y-1">
              {[0, 1, 2].map((i) => (
                  <SyncRow key={i} index={i} />
              ))}
          </div>

          {/* Success Toast */}
          <motion.div 
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
          >
              <RefreshCw size={12} className="animate-spin" />
              <span className="text-[10px] font-medium">System Synchronized</span>
          </motion.div>
      </div>
    </div>
  );
};

const SyncRow = ({ index }: { index: number }) => {
    // Animation sequence: 
    // 1. Idle (Green)
    // 2. Error (Red flash) -> starts at distinctive times per row
    // 3. Syncing (Pulse)
    // 4. Fixed (Green)

    return (
        <motion.div 
            className="flex items-center justify-between p-3 rounded-lg relative overflow-hidden group"
            animate={{ 
                backgroundColor: ["rgba(255,255,255,0.01)", "#fef2f2", "#faf5ff", "rgba(255,255,255,0.01)"],
            }}
            transition={{ 
                duration: 4, 
                repeat: Infinity,
                times: [0, 0.1, 0.3, 1],
                delay: index * 1.5 // Staggered start
            }}
        >
            <div className="flex items-center gap-3 relative z-10">
                <motion.div 
                    className="w-2.5 h-2.5 rounded-full"
                    animate={{ backgroundColor: ["#10b981", "#ef4444", "#a855f7", "#10b981"] }} // Emerald -> Red -> Purple -> Emerald
                    transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.3, 1], delay: index * 1.5 }}
                />
                <div className="space-y-1.5">
                    <div className="text-[11px] font-semibold text-slate-700 leading-none">Policy Node {index + 101}</div>
                    <div className="w-16 h-1 bg-slate-200/50 rounded-full" />
                </div>
            </div>

            {/* Ripple Effect on Sync */}
            <motion.div 
                className="absolute inset-0 bg-purple-500/10"
                initial={{ x: "-100%" }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 0.8, delay: index * 1.5 + 0.5, repeat: Infinity, repeatDelay: 3.2 }}
            />

            <motion.div 
                className="text-[10px] font-bold"
                animate={{ color: ["#64748b", "#ef4444", "#a855f7", "#10b981"], opacity: [0.5, 1, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.3, 1], delay: index * 1.5 }}
            >
               {["Idle", "Outdated", "Syncing...", "Live"][0]} 
               {/* Note: Text switching usually requires separate state or keyframes, simulating via color/opacity here to simplify */}
            </motion.div>
        </motion.div>
    )
}

// --- 3. THE ACCELERATOR (Faster Reviews) ---
export const SudSpeed = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-purple-50/50 relative">
             {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
            />

            <div className="relative w-full max-w-md h-32 flex items-center px-8 z-10">
                
                {/* Track */}
                <div className="absolute left-0 right-0 h-1 bg-slate-200/50 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/50 to-transparent w-1/2 animate-shimmer" />
                </div>

                {/* The Gate (Accelerator) */}
                <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.25)] border border-purple-100 flex items-center justify-center z-20 relative">
                     <Zap className="text-purple-600 fill-purple-100" size={24} />
                     
                     {/* Energy Ring */}
                     <motion.div 
                        className="absolute inset-0 rounded-2xl border-2 border-purple-500/20"
                        animate={{ scale: [1, 1.2], opacity: [1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                     />
                </div>

                {/* Particles: Slow In, Fast Out */}
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-slate-300 rounded-full z-10"
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ 
                            x: [0, "50%", "100%"],
                            backgroundColor: ["#cbd5e1", "#a855f7", "#10b981"], // Grey -> Purple -> Emerald
                            scale: [1, 1.2, 0.8]
                        }}
                        transition={{ 
                            duration: 2, 
                            times: [0, 0.6, 1], // Spend 60% time in first half, 40% in second (acceleration)
                            ease: ["easeIn", "circOut"], // Acceleration curve
                            repeat: Infinity,
                            delay: i * 0.7
                        }}
                        style={{ left: 0 }}
                    />
                ))}

                {/* Speed Lines on Right */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-full overflow-hidden opacity-50 pointer-events-none">
                     <motion.div 
                        className="w-full h-0.5 bg-emerald-400/50 my-2"
                        animate={{ x: [-100, 100] }}
                        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                     />
                     <motion.div 
                        className="w-full h-0.5 bg-emerald-400/50 my-6"
                        animate={{ x: [-100, 100] }}
                        transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                     />
                </div>

            </div>
            
            <div className="mt-8 flex items-center gap-3 bg-purple-50/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-100 z-10">
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Velocity</span>
                <div className="text-lg font-black text-purple-700 font-mono">10x</div>
            </div>
        </div>
    )
}
