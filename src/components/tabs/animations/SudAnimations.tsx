import { motion } from "framer-motion";
import { Shield, FileText, Database, Lock, RefreshCw, Clock } from "lucide-react";

export const SudResponse = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 bg-slate-900/50 rounded-2xl relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-10">
             {Array.from({ length: 5 }).map((_, i) => (
                 <motion.div 
                    key={i}
                    className="absolute h-px bg-white w-full"
                    style={{ top: `${20 * i}%` }}
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: "linear" }}
                 />
             ))}
        </div>

      <div className="relative w-full max-w-md flex items-center justify-between gap-4 z-10">
         
         {/* Question Card */}
         <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-48 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
         >
             <div className="flex items-center gap-2 mb-3">
                 <div className="w-6 h-6 rounded bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-bold">Q</div>
                 <div className="h-2 w-20 bg-white/20 rounded" />
             </div>
             <div className="space-y-2">
                 <div className="h-1.5 w-full bg-white/10 rounded" />
                 <div className="h-1.5 w-3/4 bg-white/10 rounded" />
             </div>
         </motion.div>

         {/* Connection */}
         <div className="flex-1 h-px bg-blue-500/50 relative">
             <motion.div 
                className="absolute inset-0 bg-blue-400 blur-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
             />
         </div>

         {/* Source/Answer Card */}
         <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-48 bg-white rounded-xl p-4 shadow-xl border-l-4 border-green-500 relative overflow-hidden"
         >
             <div className="flex items-center gap-2 mb-3">
                 <Shield className="text-green-600" size={16} />
                 <span className="text-xs font-bold text-gray-800">Verified Answer</span>
             </div>
             <div className="space-y-2">
                 <div className="h-1.5 w-full bg-gray-100 rounded" />
                 <div className="h-1.5 w-full bg-gray-100 rounded" />
                 <div className="h-1.5 w-5/6 bg-gray-100 rounded" />
             </div>

             {/* Source Badge */}
             <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-3 flex items-center gap-1.5 text-[10px] text-gray-500 bg-gray-50 px-2 py-1 rounded w-fit"
             >
                 <Database size={10} />
                 <span>Source: ISO_27001_Policy.pdf</span>
             </motion.div>
         </motion.div>
      </div>
    </div>
  );
};

export const SudUpdates = () => {
    return (
      <div className="w-full h-full flex items-center justify-center p-8 bg-slate-900/50 rounded-2xl relative">
          <div className="relative w-full max-w-sm bg-white rounded-xl shadow-2xl p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                      <Lock className="text-gray-700" size={20} />
                      <div className="font-bold text-gray-800">Security Policy</div>
                  </div>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="text-blue-500"
                  >
                      <RefreshCw size={18} />
                  </motion.div>
              </div>

              <div className="space-y-4">
                  {[1, 2].map((i) => (
                      <div key={i} className="flex flex-col gap-1">
                          <div className="flex justify-between text-xs text-gray-400">
                             <span>Control 1.{i}</span>
                             <span className="text-green-600 font-bold">Updated</span>
                          </div>
                          <div className="h-2 w-full bg-gray-100 rounded overflow-hidden">
                              <motion.div 
                                className="h-full bg-green-500"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, delay: i * 0.5, repeat: Infinity, repeatDelay: 2 }}
                              />
                          </div>
                      </div>
                  ))}
              </div>
              
              <motion.div 
                 initial={{ y: 50, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="absolute bottom-0 left-0 right-0 bg-blue-50 p-2 text-center text-xs font-medium text-blue-700 border-t border-blue-100"
              >
                  Auto-flagging 3 stale responses...
              </motion.div>
          </div>
      </div>
    );
};

export const SudSpeed = () => {
    return (
      <div className="w-full h-full flex items-center justify-center p-8 bg-slate-900/50 rounded-2xl relative overflow-hidden">
          {/* Fast Moving Pipeline */}
          <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div 
                    key={i}
                    className="w-16 h-20 bg-white/10 backdrop-blur rounded-lg border border-white/10 flex items-center justify-center"
                    animate={{ x: ["100%", "-200%"], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: "linear" }}
                  >
                      <FileText className="text-white/50" />
                  </motion.div>
              ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-32 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-xl" />
          </div>

          <div className="absolute bottom-8 flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg">
              <Clock className="text-blue-600" size={16} />
              <div className="text-sm font-bold text-gray-800">
                  <span className="text-blue-600">90%</span> Faster
              </div>
          </div>
      </div>
    );
};
