import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function GenerateAnimation() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-white to-purple-50 p-6 relative overflow-hidden">
        
       {/* Editor Window */}
       <div className="w-full max-w-[320px] bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden relative">
           
           {/* Header */}
           <div className="h-10 bg-gray-50/80 border-b border-gray-100 flex items-center px-4 gap-2">
               <div className="flex gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                   <div className="w-2.5 h-2.5 rounded-full bg-orange-400/50" />
                   <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
               </div>
               <div className="ml-auto flex items-center gap-1.5 text-[10px] font-medium text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">
                    <Sparkles size={10} />
                    <span>AI Generating</span>
               </div>
           </div>

           {/* Content Area */}
           <div className="p-5 space-y-4">
               {/* Question */}
               <div className="flex gap-3">
                   <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">Q</div>
                   <div className="space-y-1.5 flex-1">
                       <div className="h-2 w-full bg-gray-100 rounded" />
                       <div className="h-2 w-3/4 bg-gray-100 rounded" />
                   </div>
               </div>

               {/* Divider */}
               <div className="h-px w-full bg-gray-50" />

               {/* Answer Generation */}
               <div className="flex gap-3 relative">
                   <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-200 z-10">
                       <Sparkles className="text-white" size={12} />
                   </div>
                   <div className="space-y-2 flex-1 pt-1">
                        {[1, 2, 3].map((i) => (
                            <motion.div 
                                key={i}
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: ["0%", "100%"], opacity: 1 }}
                                transition={{ duration: 1, delay: i * 0.4 }}
                                className="h-2 bg-gradient-to-r from-purple-100 to-blue-50 rounded"
                                style={{ width: i === 2 ? "60%" : "100%" }}
                            />
                        ))}
                   </div>

                   {/* Confidence Badge Pop-up */}
                   <motion.div 
                      className="absolute -right-2 top-0 bg-white/90 backdrop-blur shadow-lg border border-green-100 px-2 py-1 rounded-lg flex items-center gap-1.5"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.5, type: "spring" }}
                   >
                       <CheckCircle2 className="text-green-500" size={12} />
                       <span className="text-[10px] font-bold text-gray-700">98% Match</span>
                   </motion.div>
               </div>
           </div>
       </div>
    </div>
  );
}
