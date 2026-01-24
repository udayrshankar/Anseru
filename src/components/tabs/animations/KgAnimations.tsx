import { motion } from "framer-motion";
import { FileText, Wand2, FileSpreadsheet, File } from "lucide-react";

export const KgDrafting = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 bg-slate-900/50 rounded-2xl">
       <div className="w-64 h-80 bg-white rounded-xl shadow-2xl p-8 relative overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
             <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <FileText className="text-purple-600" size={16} />
             </div>
             <div className="h-2 w-24 bg-gray-100 rounded" />
          </div>

          {/* Typing Content */}
          <div className="space-y-3">
             {[1, 2, 3, 4, 5, 6].map((i) => (
                 <motion.div 
                    key={i}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: ["0%", "100%"], opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.3 }}
                    className="h-2 bg-gray-200 rounded"
                    style={{ width: i % 2 === 0 ? "80%" : "100%" }}
                 />
             ))}
          </div>

          {/* Cursor */}
          <motion.div 
             animate={{ opacity: [0, 1, 0], x: [0, 10, 0], y: [0, 100] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="absolute left-8 top-24 w-0.5 h-4 bg-purple-600"
          />

          {/* Speed Badge */}
          <motion.div 
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ delay: 2, type: "spring" }}
             className="absolute bottom-6 right-6 flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm"
          >
             <span>Done in 2s</span>
          </motion.div>
       </div>
    </div>
  );
};

export const KgFormats = () => {
    return (
      <div className="w-full h-full flex items-center justify-center p-8 bg-slate-900/50 rounded-2xl relative overflow-hidden">
         
         {/* Center Processing Unit */}
         <div className="relative z-10 w-24 h-24 bg-white rounded-xl flex items-center justify-center shadow-xl border-2 border-purple-100">
             <Wand2 className="text-purple-600" size={40} />
             <div className="absolute inset-0 bg-purple-500 rounded-xl blur-2xl opacity-20 -z-10" />
         </div>
 
         {/* Floating Formats */}
         {[
             { icon: FileSpreadsheet, color: "text-green-600", bg: "bg-green-100", label: "XLS" },
             { icon: FileText, color: "text-blue-600", bg: "bg-blue-100", label: "DOCX" },
             { icon: File, color: "text-red-600", bg: "bg-red-100", label: "PDF" },
         ].map((item, i) => (
             <motion.div
                key={i}
                className="absolute"
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{ 
                    x: [0, (i === 0 ? -100 : i === 1 ? 100 : 0)], 
                    y: [0, (i === 2 ? 100 : -50)],
                    opacity: [0, 1, 1],
                    scale: [0.5, 1, 1] 
                }}
                transition={{ duration: 0.8, delay: i * 0.3 }}
             >
                 <div className={`p-3 rounded-lg shadow-lg bg-white flex flex-col items-center gap-1 w-16`}>
                     <item.icon className={item.color} size={20} />
                     <span className="text-[10px] font-bold text-gray-500">{item.label}</span>
                 </div>
             </motion.div>
         ))}

          {/* Bottom Text */}
          <div className="absolute bottom-8 text-white/80 text-sm font-medium flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg border border-white/10">
              Any Format Supported
          </div>
      </div>
    );
 };

export const KgReview = () => {
    return (
      <div className="w-full h-full flex items-center justify-center p-8 bg-slate-900/50 rounded-2xl">
         <div className="flex items-center gap-4 relative">
             
             {/* Incoming Answers */}
             <div className="flex flex-col gap-2">
                 {[1, 2, 3].map(i => (
                     <motion.div 
                        key={i}
                        className="w-32 h-10 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center px-3 gap-2"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.3 }}
                     >
                         <div className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-orange-500' : 'bg-green-500'}`} />
                         <div className="h-1.5 w-16 bg-gray-100 rounded" />
                     </motion.div>
                 ))}
             </div>

             {/* Router */}
             <div className="w-12 h-32 bg-gray-800 rounded-lg flex items-center justify-center relative">
                 <div className="w-1 h-full bg-gray-700 absolute left-1/2 -translate-x-1/2" />
             </div>

             {/* Outputs */}
             <div className="flex flex-col gap-8">
                 {/* Auto-Approved */}
                 <motion.div 
                    className="flex items-center gap-2 text-green-400 text-xs font-bold bg-green-900/30 px-3 py-1.5 rounded-full border border-green-500/30"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                 >
                     <span>Auto-Approved</span>
                 </motion.div>

                 {/* Human Review */}
                 <motion.div 
                    className="flex items-center gap-2 text-orange-400 text-xs font-bold bg-orange-900/30 px-3 py-1.5 rounded-full border border-orange-500/30"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                 >
                     <span>Expert Review</span>
                 </motion.div>
             </div>

         </div>
      </div>
    );
};
