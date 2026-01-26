import React from "react";
import { motion } from "framer-motion";
import { FileText, Check, Layers, Database, AlertCircle, ArrowRight, Download, MousePointer2, Sparkles } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- 1. UPLOAD & UNDERSTAND (Card 1) ---
export const KgUpload = () => {
    // Sequence: Upload Files -> Merge -> Split into Sections -> Highlight
    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
             {/* Background Grid */}
             <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)', backgroundSize: '24px 24px' }}
            />

            <div className="relative w-full h-full max-w-[320px] max-h-[320px] flex items-center justify-center">
                <AnimationSequence /> 
            </div>
        </div>
    )
}

const AnimationSequence = () => {
    return (
        <motion.div 
            className="relative w-full h-full flex items-center justify-center"
            initial="upload"
            animate="process"
        >
             <FileUploadPhase />
             <ProcessingPhase />
        </motion.div>
    )
}

const FileUploadPhase = () => {
    // 3 Files: PDF, Word, Excel converging
    const files = [
        { label: "PDF", color: "bg-red-500", x: -80, y: -40, delay: 0 },
        { label: "DOCX", color: "bg-blue-500", x: 80, y: -40, delay: 0.1 },
        { label: "XLSX", color: "bg-green-500", x: 0, y: 60, delay: 0.2 },
    ];

    return (
        <React.Fragment>
            {files.map((f, i) => (
                <motion.div
                    key={i}
                    className="absolute z-20 flex flex-col items-center gap-1"
                    initial={{ x: f.x * 2.5, y: f.y * 2.5, opacity: 0, scale: 0.8 }}
                    animate={{ 
                        x: [f.x * 2.5, 0], 
                        y: [f.y * 2.5, 0],
                        opacity: [0, 1, 0],
                        scale: [0.8, 1, 0]
                    }}
                    transition={{ 
                        duration: 1.2, 
                        times: [0, 0.6, 1],
                        ease: "easeInOut",
                        delay: f.delay
                    }}
                >
                    <div className={cn("w-10 h-12 rounded-lg shadow-lg flex items-center justify-center text-[8px] font-bold text-white", f.color)}>
                        {f.label}
                    </div>
                </motion.div>
            ))}
        </React.Fragment>
    )
}

const ProcessingPhase = () => {
    // Appears after files merge
    return (
        <motion.div
            className="absolute z-10 w-[240px] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
            initial={{ opacity: 0, scale: 0.8, height: 40 }}
            animate={{ 
                opacity: 1, 
                scale: 1,
                height: [40, 260] 
            }}
            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
        >
            {/* Header */}
            <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-3 gap-2 shrink-0">
                 <div className="flex gap-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-400/20" />
                     <div className="w-2.5 h-2.5 rounded-full bg-amber-400/20" />
                     <div className="w-2.5 h-2.5 rounded-full bg-green-400/20" />
                 </div>
                 <div className="ml-2 h-2 w-20 bg-slate-200 rounded-full" />
            </div>

            {/* Structured Content */}
            <div className="p-4 flex-1 flex flex-col gap-3">
                 {[0, 1, 2].map((_section, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6 + (i * 0.2) }}
                        className="space-y-2"
                     >
                         {/* Section Header */}
                         <div className="flex items-center gap-2">
                             <div className="w-4 h-4 rounded bg-purple-100 flex items-center justify-center">
                                 <Layers size={10} className="text-purple-600" />
                             </div>
                             <div className="h-2 w-16 bg-slate-200 rounded-full" />
                         </div>

                         {/* Questions */}
                         <div className="pl-6 space-y-1.5">
                             {[0, 1].map((_q, j) => (
                                 <div key={j} className="relative h-6 w-full bg-slate-50 rounded border border-slate-100 flex items-center px-2 overflow-hidden">
                                     <div className="h-1.5 w-3/4 bg-slate-200 rounded-full" />
                                     
                                     {/* Scan Effect */}
                                     <motion.div 
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "200%" }}
                                        transition={{ 
                                            duration: 1.5, 
                                            delay: 2.2 + (i * 0.5) + (j * 0.2), 
                                            repeat: Infinity, 
                                            repeatDelay: 2 
                                        }}
                                     />
                                 </div>
                             ))}
                         </div>
                     </motion.div>
                 ))}
            </div>

            {/* Floating Success Indicator */}
            <motion.div 
                className="absolute bottom-4 right-4 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1"
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 3.5, type: "spring" }}
            >
                <Check size={10} strokeWidth={4} />
                <span>Ready</span>
            </motion.div>
        </motion.div>
    )
}

// --- 2. DRAFT ANSWERS WITH CONFIDENCE (Card 2) ---
export const KgDrafting = () => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-slate-50 relative overflow-hidden">
             
             {/* Central Knowledge Base Node (Abstract) */}
             <div className="absolute top-8 flex flex-col items-center z-10">
                 <div className="w-10 h-10 bg-white rounded-lg border border-purple-200 shadow-sm flex items-center justify-center">
                     <Database size={18} className="text-purple-600" />
                 </div>
                 <div className="h-8 w-0.5 bg-purple-200" />
             </div>

             {/* Document being drafted */}
             <div className="w-[280px] bg-white rounded-xl shadow-xl border border-slate-200 mt-12 overflow-hidden flex flex-col relative z-20">
                  <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-2">
                       <div className="h-1.5 w-20 bg-slate-300 rounded-full" />
                  </div>
                  
                  <div className="p-4 space-y-4">
                       {/* Q1: High Confidence */}
                       <DraftItem delay={0} confidence="high" />
                       
                       {/* Q2: High Confidence */}
                       <DraftItem delay={1.5} confidence="high" />

                       {/* Q3: Low Confidence (Review) */}
                       <DraftItem delay={3} confidence="low" />
                  </div>
             </div>
        </div>
    )
}

const DraftItem = ({ delay, confidence }: { delay: number, confidence: 'high' | 'low' }) => {
    return (
        <div className="space-y-2">
            {/* Question */}
            <div className="h-2 w-3/4 bg-slate-200 rounded-full" />
            
            {/* Answer Area */}
            <div className="relative">
                {/* Typing Effect */}
                <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: delay + 0.2, ease: "linear" }}
                    className="h-16 w-full bg-slate-50 rounded border border-slate-100 overflow-hidden"
                >
                    <div className="p-2 space-y-1.5">
                        <div className="h-1.5 w-full bg-slate-300 rounded-full opacity-50" />
                        <div className="h-1.5 w-5/6 bg-slate-300 rounded-full opacity-50" />
                        <div className="h-1.5 w-full bg-slate-300 rounded-full opacity-50" />
                    </div>
                </motion.div>

                {/* Connection Line from KB */}
                <motion.div 
                   className="absolute -top-6 left-1/2 w-0.5 bg-purple-300 origin-top"
                   style={{ height: 24 }}
                   initial={{ scaleY: 0, opacity: 0 }}
                   animate={{ scaleY: 1, opacity: 1 }}
                   transition={{ duration: 0.3, delay: delay }}
                />

                {/* Confidence Badge */}
                <motion.div 
                    className={cn(
                        "absolute -right-2 -top-2 px-1.5 py-0.5 rounded-md text-[9px] font-bold shadow-sm flex items-center gap-1",
                        confidence === 'high' ? "bg-green-100 text-green-700 border border-green-200" : "bg-orange-100 text-orange-700 border border-orange-200"
                    )}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: delay + 1.2, type: "spring" }}
                >
                    {confidence === 'high' ? (
                        <>
                           <Sparkles size={8} /> Auto
                        </>
                    ) : (
                        <>
                           <AlertCircle size={8} /> Review
                        </>
                    )}
                </motion.div>
            </div>
        </div>
    )
}

// --- 3. REVIEW, EXPORT & REUSE (Card 3) ---
export const KgReview = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50/50 relative overflow-hidden">
             
             {/* Document Container */}
             <div className="relative w-[260px] bg-white rounded-xl shadow-xl border border-slate-200 p-4 space-y-4 z-20">
                  
                  {/* Item being reviewed */}
                  <div className="space-y-2">
                       <div className="h-2 w-1/2 bg-slate-200 rounded-full" />
                       <div className="relative p-2 bg-orange-50 rounded border border-orange-100 text-left">
                            <div className="h-1.5 w-full bg-slate-300 rounded-full mb-1" />
                            <div className="h-1.5 w-4/5 bg-slate-300 rounded-full" />
                            
                            {/* Flag Badge */}
                            <motion.div 
                                className="absolute -top-2 -right-2 bg-orange-500 text-white p-1 rounded-full shadow-sm z-10"
                                initial={{ scale: 1 }}
                                animate={{ scale: 0, opacity: 0 }}
                                transition={{ delay: 1.5, duration: 0.3 }}
                            >
                                <AlertCircle size={10} />
                            </motion.div>

                            {/* Success Badge (appears later) */}
                            <motion.div 
                                className="absolute -top-2 -right-2 bg-green-500 text-white p-1 rounded-full shadow-sm z-10"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1.6, type: "spring" }}
                            >
                                <Check size={10} />
                            </motion.div>
                       </div>
                  </div>

                  {/* Cursor Animation */}
                  <motion.div
                       className="absolute z-50 pointer-events-none"
                       initial={{ x: 100, y: 100, opacity: 0 }}
                       animate={{ 
                           x: [80, 200, 200], // Move to approve button (simulated)
                           y: [80, 80, 80],
                           opacity: [0, 1, 0]
                       }}
                       transition={{ duration: 2, times: [0, 0.4, 1] }}
                  >
                       <MousePointer2 className="text-black fill-black" size={20} />
                  </motion.div>

                  {/* Export Action */}
                  <motion.div 
                      className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-sm p-3 border-t border-slate-100 flex items-center justify-between"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 2.5, type: "spring" }}
                  >
                       <div className="flex items-center gap-2">
                             <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                                 <FileText size={12} className="text-blue-600" />
                             </div>
                             <span className="text-[10px] font-bold text-slate-600">Final_RFP.pdf</span>
                       </div>
                       <div className="text-blue-600">
                           <Download size={14} />
                       </div>
                  </motion.div>
             </div>

             {/* Knowledge Loop Particle */}
             <motion.div
                  className="absolute z-10 flex items-center gap-1 bg-purple-600 text-white px-2 py-1 rounded-full text-[9px] font-bold shadow-lg"
                  initial={{ x: 0, y: 40, opacity: 0, scale: 0.5 }}
                  animate={{ 
                      y: -150, 
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5] 
                  }}
                  transition={{ delay: 3, duration: 1.5, ease: "easeInOut" }}
             >
                 <ArrowRight size={8} /> +1 Knowledge
             </motion.div>

             {/* Metric Badge */}
             <motion.div 
                  className="absolute top-4 right-4 bg-black/80 backdrop-blur text-white px-3 py-1.5 rounded-lg border border-white/10 shadow-xl z-30 flex flex-col items-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4 }}
             >
                  <span className="text-[9px] text-gray-400 uppercase tracking-wider">Speedup</span>
                  <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
                      11x Faster
                  </span>
             </motion.div>
        </div>
    )
}
