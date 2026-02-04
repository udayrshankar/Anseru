import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Bot, Archive, UserCheck, ShieldCheck } from "lucide-react";

// ==========================================
// 1. GENERATE ANIMATION (The Magic Writer)
// ==========================================

export const NewGenerateAnimation = () => {
  const [step, setStep] = useState(0);

  // Cycle through the "Generation" phases
  useEffect(() => {
    const loop = setInterval(() => {
      setStep((prev) => (prev + 1) % 5); // 5 steps: Start, Line 1, Line 2, Line 3, Done
    }, 800);
    return () => clearInterval(loop);
  }, []);

  return (
    <div className="w-full h-[320px] flex flex-col items-center justify-center relative overflow-hidden bg-[#FDFCFE] font-sans border border-slate-100 rounded-xl shadow-sm">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[300px] h-[300px] bg-indigo-100/40 rounded-full blur-3xl" />
        <div className="absolute top-[20%] -right-[10%] w-[250px] h-[250px] bg-emerald-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-[260px]">
        {/* The AI Avatar (Top Center) */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
            <motion.div 
                className="w-12 h-12 bg-white rounded-2xl shadow-lg border border-indigo-50 flex items-center justify-center"
                animate={step < 4 ? { y: [0, -4, 0] } : { y: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <Bot className={`w-6 h-6 ${step < 4 ? "text-indigo-500" : "text-emerald-500"}`} />
                {/* Thinking Dots */}
                {step < 4 && (
                    <motion.div 
                        className="absolute -right-1 -top-1 w-3 h-3 bg-indigo-500 rounded-full border-2 border-white"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                    />
                )}
            </motion.div>
        </div>

        {/* The Response Card */}
        <motion.div 
            className="w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/60 p-6 pt-8 flex flex-col gap-3"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
        >
            {/* Generating Lines (Simulating Typing) */}
            <div className="space-y-2.5">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-3 w-full rounded-full bg-slate-100 overflow-hidden relative">
                         {step >= i && (
                             <motion.div 
                                className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-indigo-100"
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                             />
                         )}
                    </div>
                ))}
                {/* Shorter last line */}
                <div className="h-3 w-2/3 rounded-full bg-slate-100 overflow-hidden relative">
                     {step >= 4 && (
                         <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-indigo-100"
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                         />
                     )}
                </div>
            </div>

            {/* Success Badge (Pops in at the end) */}
            <AnimatePresence>
                {step >= 4 && (
                    <motion.div
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="absolute -bottom-4 -right-4 bg-emerald-500 text-white px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 z-20"
                    >
                        <Sparkles size={12} fill="currentColor" />
                        <span className="text-[10px] font-bold uppercase tracking-wide">Perfect</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
      </div>

    </div>
  );
};

// ==========================================
// 2. REVIEW ANIMATION (The Stamp of Approval)
// ==========================================

export const NewReviewAnimation = () => {
  const [phase, setPhase] = useState("enter"); // enter -> review -> stamp -> exit

  useEffect(() => {
    const cycle = async () => {
      while (true) {
        setPhase("enter");
        await wait(800);
        setPhase("review");
        await wait(1000);
        setPhase("stamp"); // BAM!
        await wait(1200);
        setPhase("exit"); // Fly away
        await wait(800);
      }
    };
    cycle();
  }, []);

  return (
    <div className="w-full h-[320px] flex items-center justify-center relative overflow-hidden bg-slate-50 font-sans border border-slate-200 rounded-xl shadow-inner">
      
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ backgroundImage: "radial-gradient(#64748b 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      />

      {/* --- The Conveyor Belt Zone --- */}
      <div className="relative w-full max-w-xs h-40 flex items-center justify-center">
        
        {/* 1. The Document Card */}
        <AnimatePresence mode="wait">
            {phase !== "exit" && (
                <motion.div
                    key="doc"
                    className={`relative w-48 h-56 bg-white rounded-xl shadow-lg border ${phase === "stamp" ? "border-emerald-200 bg-emerald-50/30" : "border-slate-200"} flex flex-col items-center justify-center gap-2 p-4`}
                    initial={{ x: -200, rotate: -10, opacity: 0 }} // Fly in from left
                    animate={{ 
                        x: 0, 
                        rotate: 0, 
                        opacity: 1,
                        scale: phase === "stamp" ? [1, 0.95, 1.05, 1] : 1 // Squish on stamp impact
                    }}
                    exit={{ x: 200, rotate: 10, opacity: 0, scale: 0.8 }} // Fly out to right
                    transition={{ 
                        type: "spring", 
                        stiffness: phase === "enter" ? 100 : 300, 
                        damping: 20 
                    }}
                >
                    {/* Document Content Skeleton */}
                    <div className="w-full h-2 bg-slate-100 rounded mb-2" />
                    <div className="w-3/4 h-2 bg-slate-100 rounded mb-1" />
                    <div className="w-full h-2 bg-slate-100 rounded mb-1" />
                    <div className="w-5/6 h-2 bg-slate-100 rounded" />

                    {/* The "Approved" Stamp Mark */}
                    <AnimatePresence>
                        {phase === "stamp" && (
                            <motion.div
                                initial={{ scale: 2, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="border-4 border-emerald-500/50 text-emerald-600 px-4 py-1 rounded-lg -rotate-12 text-xl font-black uppercase tracking-widest bg-white/50 backdrop-blur-sm shadow-xl">
                                    Approved
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>

        {/* 2. The "Reviewer" Cursor/Stamp Tool (Floating above) */}
        <motion.div
            className="absolute z-20 pointer-events-none"
            animate={{
                x: phase === "review" ? [20, -20, 0] : 80,
                y: phase === "review" ? [10, -10, 0] : (phase === "stamp" ? 20 : -50), // Move down to stamp
                scale: phase === "stamp" ? 0.8 : 1,
                opacity: phase === "exit" ? 0 : 1
            }}
            transition={{ duration: 0.5 }}
        >
             <div className="bg-indigo-600 text-white p-2 rounded-full shadow-xl shadow-indigo-600/30">
                 {phase === "review" ? <UserCheck size={20} /> : <ShieldCheck size={20} />}
             </div>
        </motion.div>

        {/* 3. The Library (Destination) */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 opacity-40">
            <Archive size={24} className="text-slate-400" />
            <span className="text-[9px] font-bold uppercase text-slate-400">Library</span>
        </div>

      </div>
    </div>
  );
};

// Helper for the async loop
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));