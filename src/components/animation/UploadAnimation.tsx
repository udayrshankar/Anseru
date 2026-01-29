import { motion } from "framer-motion";
import { UploadCloud, FileText, FileSpreadsheet, File } from "lucide-react";

export default function UploadAnimation() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50/50 relative overflow-hidden p-6">
       
       {/* Scanner Base */}
       <div className="w-[200px] h-[140px] bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center relative z-10 border border-gray-100">
           
           {/* Drop Target */}
           <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-purple-100" />
           
           <UploadCloud className="text-purple-200 mb-2" size={32} />
           <p className="text-[10px] font-bold text-purple-300 uppercase tracking-widest">Drop Zone</p>

           {/* Scanning Light */}
           <motion.div 
             className="absolute left-1 right-1 h-0.5 bg-purple-400 shadow-[0_0_10px_#a855f7]"
             animate={{ top: ["10%", "90%", "10%"] }}
             transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
           />
       </div>

       {/* Files Falling In */}
       <FloatingFile delay={0} icon={FileText} color="text-blue-500" xOffset={-60} />
       <FloatingFile delay={1.2} icon={FileSpreadsheet} color="text-green-500" xOffset={0} />
       <FloatingFile delay={2.5} icon={File} color="text-red-500" xOffset={60} />

       {/* Success Toast */}
       <motion.div 
         className="absolute bottom-6 bg-white pl-1 pr-3 py-1 rounded-full shadow-lg border border-green-100 flex items-center gap-2 z-20"
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.5, duration: 0.5 }}
       >
           <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
               <motion.div 
                 initial={{ scale: 0 }} 
                 animate={{ scale: 1 }} 
                 transition={{ delay: 0.8 }} 
                 className="text-white text-[8px] font-bold"
               >✓</motion.div>
           </div>
           <span className="text-xs font-semibold text-gray-700">Analysis Complete</span>
       </motion.div>
    </div>
  );
}

const FloatingFile = ({ delay, icon: Icon, color, xOffset }: { delay: number, icon: React.ElementType, color: string, xOffset: number }) => (
    <motion.div
        className="absolute w-12 h-14 bg-white rounded-lg shadow-md border border-gray-100 flex items-center justify-center z-20"
        style={{ x: xOffset }}
        initial={{ y: -150, opacity: 0, scale: 0.8 }}
        animate={{ 
            y: [ -150, -20, 0 ], 
            opacity: [0, 1, 0],
            scale: [0.8, 1, 0.5]
        }}
        transition={{ duration: 2.5, delay, repeat: Infinity, repeatDelay: 1 }}
    >
        <Icon className={color} size={24} />
    </motion.div>
)
