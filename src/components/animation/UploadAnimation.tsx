import { motion } from "framer-motion";
import { UploadCloud, FileText, Check } from "lucide-react";

export default function UploadAnimation() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white relative overflow-hidden p-8">
       {/* Drop Zone */}
       <div className="w-full max-w-[280px] h-[180px] bg-white/40 backdrop-blur-md rounded-[32px] border-2 border-dashed border-purple-200 flex flex-col items-center justify-center relative overflow-hidden">
           
           {/* Upload Icon */}
           <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
           >
               <UploadCloud className="text-purple-300 mb-2" size={40} />
           </motion.div>
           <p className="text-purple-400 font-medium text-sm">Drop PDF, Word, or Excel</p>

           {/* Dropping File */}
           <motion.div
              className="absolute top-[-60px] w-16 h-20 bg-white shadow-xl rounded-xl flex items-center justify-center border border-gray-100 z-20"
              animate={{ 
                  y: [0, 100], 
                  scale: [1, 0.8],
                  opacity: [1, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
           >
               <FileText className="text-blue-500" size={32} />
               <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                   <Check size={10} className="text-white" />
               </div>
           </motion.div>

           {/* Scan Beam */}
           <motion.div 
             className="absolute left-0 right-0 h-1 bg-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10"
             style={{ top: "50%" }}
             animate={{ scaleX: [0, 1.5, 0], opacity: [0, 1, 0] }}
             transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
           />
       </div>

       {/* Processing Badges */}
       <div className="mt-6 flex gap-3">
           <Badge text="Parsing..." color="bg-blue-100 text-blue-600" delay={0.5} />
           <Badge text="Structuring" color="bg-purple-100 text-purple-600" delay={1.0} />
           <Badge text="Ready" color="bg-green-100 text-green-600" delay={1.5} />
       </div>
    </div>
  );
}

const Badge = ({ text, color, delay }: { text: string, color: string, delay: number }) => (
    <motion.div 
        className={`px-3 py-1.5 rounded-full text-xs font-bold ${color} shadow-sm backdrop-blur-sm bg-opacity-80`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
    >
        {text}
    </motion.div>
)
