import { motion } from "framer-motion";
import { Book, RotateCw } from "lucide-react";

export default function ReviewAnimation() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
        
       {/* Knowledge Vault */}
       <div className="flex flex-col gap-3 relative z-10 perspective-1000">
             {/* Rows of Knowledge */}
             {[0, 1, 2].map((i) => (
                 <div key={i} className="flex gap-3">
                     {[0, 1, 2].map((j) => (
                         <div 
                           key={j} 
                           className={`w-20 h-10 rounded-lg border ${
                               i === 1 && j === 1 ? 'border-transparent' : 'bg-white/40 border-white/60'
                           } shadow-sm backdrop-blur-sm`} 
                         />
                     ))}
                 </div>
             ))}

             {/* The New Knowledge Card Inserting */}
             <motion.div
                className="absolute top-[52px] left-[92px] w-20 h-10 bg-white rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-200 flex items-center justify-center gap-1.5 z-20"
                initial={{ x: -100, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
             >
                 <Book className="text-purple-600" size={14} />
                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
             </motion.div>
       </div>

       {/* Reuse Cycle Indicator */}
       <div className="absolute bottom-6 flex items-center gap-3">
            <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                <RotateCw className="text-purple-300" size={32} />
            </motion.div>
            <div className="px-3 py-1.5 bg-white/80 backdrop-blur border border-purple-100 rounded-full shadow-sm text-xs font-medium text-purple-700">
                Knowledge Reused
            </div>
       </div>
    </div>
  );
}
