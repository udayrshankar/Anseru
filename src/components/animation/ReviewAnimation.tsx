import { motion } from "framer-motion";
import { Book, RotateCw, Database } from "lucide-react";

export default function ReviewAnimation() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50/50 relative overflow-hidden p-6">
        
       {/* Central Vault Container */}
       <div className="relative z-10 p-4 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col gap-3 items-center">
            
            <div className="flex items-center gap-2 mb-1 opacity-50">
                <Database size={12} className="text-gray-400" />
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Knowledge Vault</span>
            </div>

            {/* Grid of Knowledge */}
            <div className="grid grid-cols-3 gap-2">
                 {[...Array(6)].map((_, i) => (
                     <div key={i} className="w-12 h-8 rounded bg-gray-50 border border-gray-100" />
                 ))}
                 
                 {/* Empty Slot */}
                 <div className="w-12 h-8 rounded border-2 border-dashed border-gray-100 flex items-center justify-center relative overflow-hidden bg-gray-50/50">
                    <motion.div 
                        className="absolute inset-0 bg-green-500/10" 
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                 </div>
                 
                 <div className="w-12 h-8 rounded bg-gray-50 border border-gray-100" />
            </div>

            {/* Ingesting Item */}
            <motion.div
               className="absolute w-12 h-8 bg-purple-600 rounded shadow-lg flex items-center justify-center text-white z-20"
               style={{ top: "60%", left: "50%", marginLeft: "-24px" }}
               initial={{ y: 60, opacity: 0, scale: 0.8 }}
               animate={{ y: 0, opacity: 1, scale: 1 }}
               transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.5 }}
            >
                <Book size={14} />
            </motion.div>
       </div>

       {/* Floating Success Indicator */}
       <motion.div 
          className="absolute top-8 right-8 flex flex-col items-center gap-1"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
       >
           <div className="w-8 h-8 rounded-full bg-white shadow-lg border border-purple-50 flex items-center justify-center text-purple-500">
               <RotateCw size={14} />
           </div>
           <span className="text-[9px] font-bold text-purple-400">Syncing</span>
       </motion.div>

    </div>
  );
}
