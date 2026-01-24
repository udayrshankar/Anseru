import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function GenerateAnimation() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50/50 p-6 relative overflow-hidden">
        
       {/* Editor Window */}
       <div className="w-full max-w-[280px] bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100/80 overflow-hidden relative">
           
           {/* Minimal Header */}
           <div className="h-8 border-b border-gray-100 flex items-center px-3 gap-2 bg-white/50 backdrop-blur-sm">
               <div className="flex gap-1.5 opacity-40">
                   <div className="w-2 h-2 rounded-full bg-black" />
                   <div className="w-2 h-2 rounded-full bg-black" />
                   <div className="w-2 h-2 rounded-full bg-black" />
               </div>
               <div className="ml-auto text-[9px] font-bold text-gray-400 uppercase tracking-wider">AI Draft</div>
           </div>

           {/* Content Area */}
           <div className="p-5 space-y-4 min-h-[140px] relative">
               
               {/* Question Bubble */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="bg-gray-100/80 rounded-lg p-2.5 max-w-[85%] self-start"
               >
                   <div className="space-y-1.5">
                       <div className="h-1.5 w-full bg-gray-300 rounded-full opacity-50" />
                       <div className="h-1.5 w-3/4 bg-gray-300 rounded-full opacity-50" />
                   </div>
               </motion.div>


               {/* Answer Bubble (AI) */}
               <motion.div 
                 className="space-y-2 pt-1"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
               >
                   <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="text-purple-500" size={12} />
                        <span className="text-[9px] font-bold text-purple-500">Generating...</span>
                   </div>
                   
                   <div className="space-y-1.5 rounded-lg border border-purple-50 p-3 bg-white shadow-sm">
                        {[1, 2, 3, 4].map((i) => (
                            <motion.div 
                                key={i}
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: ["0%", "100%"], opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 + (i * 0.3) }}
                                className="h-1.5 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full"
                                style={{ width: i === 4 ? "60%" : "100%" }}
                            />
                        ))}
                   </div>
               </motion.div>

               {/* Confidence Match - Floats clearly to the side */}
               <motion.div 
                  className="absolute bottom-4 right-4 bg-green-500 text-white shadow-lg shadow-green-200 px-2.5 py-1 rounded-full flex items-center gap-1.5 z-20"
                  initial={{ scale: 0, y: 10 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ delay: 2.2, type: "spring", stiffness: 300 }}
               >
                   <CheckCircle2 size={10} strokeWidth={3} />
                   <span className="text-[9px] font-bold">98% Match</span>
               </motion.div>
           </div>
       </div>
    </div>
  );
}
