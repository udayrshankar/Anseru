import { motion } from "framer-motion";
import { FileText, FileSpreadsheet, File, Check, User, Sparkles, Zap, LayoutTemplate } from "lucide-react";

// --- 1. THE INTELLIGENT EDITOR (Instant Drafts) ---
// Concept: A minimalist document editor. Text appears smoothly line by line (skeleton).
export const KgDrafting = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 bg-gray-50/30" aria-hidden="true">
       
       <div className="w-[260px] h-[340px] bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col overflow-hidden">
          {/* Editor Header */}
          <div className="h-10 border-b border-gray-50 flex items-center px-4 justify-between">
              <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-100" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-100" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-100" />
              </div>
              <div className="text-[9px] text-gray-300 font-mono">DRAFT.DOCX</div>
          </div>

          {/* Typing Content */}
          <div className="p-6 space-y-4 relative flex-1">
              {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="space-y-2">
                       {/* Line 1 */}
                      <motion.div 
                          className="h-2 bg-gray-100 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.8, delay: i * 1, ease: "easeOut" }}
                      />
                      {/* Line 2 (Partial) */}
                      <div className="flex items-center">
                          <motion.div 
                            className="h-2 bg-gray-100 rounded-full"
                            style={{ width: `${Math.max(40, Math.random() * 80)}%` }}
                             initial={{ width: 0 }}
                             animate={{ width: "70%" }}
                             transition={{ duration: 0.8, delay: i * 1 + 0.4, ease: "easeOut" }}
                          />
                          {/* Cursor */}
                          <motion.div 
                             className="w-0.5 h-3 bg-purple-500 ml-1"
                             animate={{ opacity: [1, 0] }}
                             transition={{ duration: 0.8, repeat: Infinity }}
                             style={{ display: i === 4 ? 'block' : 'none' }} // Only show on last active line
                          />
                      </div>
                  </div>
              ))}
          </div>

          <motion.div 
             className="h-8 bg-purple-50 flex items-center justify-center gap-2 text-[10px] font-bold text-purple-600 border-t border-purple-100"
             initial={{ y: 32 }}
             animate={{ y: 0 }}
             transition={{ delay: 5, duration: 0.5 }}
          >
              <Sparkles size={10} />
              <span>Draft Generated</span>
          </motion.div>
       </div>
    </div>
  );
};

// --- 2. THE FORMAT STACK (Complex Formats) ---
// Concept: Iconic representation of formats merging into a unified document.
export const KgFormats = () => {
    return (
      <div className="w-full h-full flex items-center justify-center" aria-hidden="true">
         
         <div className="relative w-full max-w-[200px] aspect-square flex items-center justify-center">
             
             {/* Input Formats (Orbiting / Floating) */}
             {[
                 { icon: FileSpreadsheet, color: "text-emerald-600", bg: "bg-emerald-50", x: -80, y: 0 },
                 { icon: FileText, color: "text-blue-600", bg: "bg-blue-50", x: 80, y: 0 },
                 { icon: File, color: "text-red-600", bg: "bg-red-50", x: 0, y: -80 },
             ].map((item, i) => (
                 <motion.div
                    key={i}
                    className="absolute z-10"
                    initial={{ x: item.x, y: item.y, scale: 0.8, opacity: 0 }}
                    animate={{ 
                        x: [item.x, 0], 
                        y: [item.y, 0], 
                        scale: [1, 0.5], 
                        opacity: [1, 0] 
                    }}
                    transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatDelay: 2,
                        ease: "easeInOut"
                    }}
                 >
                     <div className={`w-12 h-12 rounded-xl ${item.bg} shadow-md border border-white flex items-center justify-center`}>
                        <item.icon className={item.color} size={20} />
                     </div>
                 </motion.div>
             ))}

             {/* The Processing Ring */}
             <motion.div 
                className="absolute inset-0 border-2 border-dashed border-purple-200 rounded-full"
                animate={{ rotate: 360, scale: [0.8, 1, 0.8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             />

             {/* Output Document (Center) */}
             <motion.div 
                 className="w-24 h-32 bg-white rounded-xl shadow-xl border border-purple-100 flex flex-col items-center justify-center gap-2 relative z-0"
                 animate={{ scale: [0.9, 1.1, 0.9], y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             >
                 <LayoutTemplate size={32} className="text-purple-600" />
                 <div className="text-[10px] font-bold text-gray-800">Unified</div>
                 
                 {/* Success Badge */}
                 <motion.div 
                    className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1 border-2 border-white"
                    animate={{ scale: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, times: [0.4, 0.5, 0.9, 1] }}
                 >
                     <Check size={8} className="text-white" />
                 </motion.div>
             </motion.div>
         </div>
      </div>
    );
 };

// --- 3. THE CONFIDENCE MESH (Review) ---
// Concept: A node passing through a scanner. Visualizing confidence-based routing.
export const KgReview = () => {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50/30" aria-hidden="true">
         
         <div className="relative w-full max-w-md h-32 flex items-center justify-between px-8">
             
             {/* Track Line */}
             <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-10" />

             {/* The Card Moving */}
             <motion.div 
                className="w-16 h-12 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center z-10"
                animate={{ x: [0, 240] }} // Adjust distance based on container
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             >
                 <div className="h-1.5 w-8 bg-gray-200 rounded-full" />
             </motion.div>

             {/* The Scanner Gate (Middle) */}
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                 <div className="text-[9px] text-gray-400 font-bold tracking-widest uppercase">Analysis</div>
                 <div className="w-1 h-16 bg-gradient-to-b from-transparent via-purple-400 to-transparent blur-[1px]" />
                 <motion.div 
                    className="absolute inset-0 bg-purple-500/10 blur-xl rounded-full"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 3, times: [0.4, 0.5, 0.6], repeat: Infinity }}
                 />
             </div>

             {/* Destinations (Right) */}
             <div className="flex flex-col gap-4 absolute right-8 top-1/2 -translate-y-1/2">
                 {/* Auto-Approve */}
                 <motion.div 
                    className="flex items-center gap-2 opacity-30"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 3, times: [0.5, 0.6, 1], repeat: Infinity }}
                 >
                     <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                         <Zap size={12} className="text-green-600" />
                     </div>
                     <span className="text-[10px] font-bold text-gray-500">Auto</span>
                 </motion.div>

                 {/* Human Review (Faded out for this loop to simplify) */}
                 <div className="flex items-center gap-2 opacity-30 grayscale">
                     <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                         <User size={12} className="text-orange-600" />
                     </div>
                      <span className="text-[10px] font-bold text-gray-500">Human</span>
                 </div>
             </div>

         </div>

      </div>
    );
};
