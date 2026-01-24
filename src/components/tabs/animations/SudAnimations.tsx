import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileText, CheckCircle2, RefreshCw, Zap, Server } from "lucide-react";

// --- 1. THE DIGITAL VAULT (Source-Backed) ---
// Concept: Clean, secure scanning. A question enters, connects to a secure node, and yields a verified result.
export const SudResponse = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gray-50/50">
      
      {/* Background Subtle Grid */}
      <div className="absolute inset-0" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.3 }} 
      />

      <div className="relative flex items-center gap-8">
          
          {/* 1. The Query (Left) */}
          <motion.div 
             className="bg-white px-4 py-3 rounded-xl shadow-lg border border-purple-100 flex items-center gap-3 z-10"
             initial={{ x: -20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 0.5 }}
          >
              <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center">
                  <span className="text-xs font-bold text-purple-600">Q</span>
              </div>
              <div className="space-y-1.5">
                  <div className="h-2 w-24 bg-gray-100 rounded-full" />
                  <div className="h-2 w-16 bg-gray-100 rounded-full" />
              </div>
          </motion.div>

          {/* Connection Beam */}
          <div className="w-16 h-px bg-purple-200 relative overflow-hidden">
             <motion.div 
                className="absolute inset-0 bg-purple-500"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
             />
          </div>

          {/* 2. The Vault Core (Center) */}
          <div className="relative">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-xl border border-purple-100 flex items-center justify-center relative z-10">
                  <Server size={24} className="text-purple-600" />
              </div>
              {/* Pulse Ring */}
              <motion.div 
                  className="absolute inset-0 bg-purple-500/20 rounded-2xl -z-10"
                  animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
              />
          </div>

           {/* Connection Beam 2 */}
           <div className="w-16 h-px bg-purple-200 relative overflow-hidden">
             <motion.div 
                className="absolute inset-0 bg-purple-500"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, delay: 0.75, repeat: Infinity, ease: "linear" }}
             />
          </div>

          {/* 3. Verified Answer (Right) */}
          <motion.div 
             className="bg-white px-4 py-3 rounded-xl shadow-lg border border-green-100 flex items-center gap-3 z-10"
             initial={{ x: 20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.4 }}
          >
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                  <ShieldCheck size={16} className="text-green-600" />
              </div>
              <div className="space-y-1.5">
                  <div className="h-2 w-28 bg-gray-100 rounded-full" />
                  <div className="h-2 w-20 bg-gray-100 rounded-full" />
              </div>
          </motion.div>
      </div>
    </div>
  );
};

// --- 2. THE STATUS BOARD (Real-Time Updates) ---
// Concept: A clean UI list where a row updates smoothly. No tilting or 3D angles.
export const SudUpdates = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
        <div className="w-full max-w-sm bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
            {/* Header */}
            <div className="h-10 border-b border-gray-50 flex items-center justify-between px-4 bg-gray-50/30">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Policy Monitor</span>
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-200" />
                    <div className="w-2 h-2 rounded-full bg-gray-200" />
                </div>
            </div>

            {/* List */}
            <div className="p-4 space-y-3">
                {[1, 2, 3].map((i) => (
                    <motion.div 
                        key={i}
                        className="flex items-center justify-between p-3 rounded-lg border border-transparent"
                        animate={i === 1 ? { backgroundColor: "#faf5ff", borderColor: "#f3e8ff" } : { backgroundColor: "#ffffff" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-purple-500' : 'bg-green-500'}`} />
                            <div className="space-y-1">
                                <div className="h-1.5 w-24 bg-gray-100 rounded-full" />
                                <div className="h-1.5 w-16 bg-gray-50 rounded-full" />
                            </div>
                        </div>
                        
                        {i === 1 && (
                            <motion.div 
                                className="flex items-center gap-1.5 text-[10px] font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-md"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                            >
                                <RefreshCw size={10} className="animate-spin" />
                                Syncing
                            </motion.div>
                        )}
                         {i !== 1 && (
                            <div className="text-[10px] font-medium text-gray-400">Fixed</div>
                        )}
                    </motion.div>
                ))}
            </div>
            
            {/* Notification Toast */}
            <motion.div 
                className="mx-4 mb-4 bg-gray-900 text-white p-3 rounded-lg flex items-center gap-3 shadow-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [20, 0, 0, 20], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
            >
                <CheckCircle2 size={16} className="text-green-400" />
                <div>
                   <div className="text-[10px] font-bold">Update Complete</div>
                   <div className="text-[9px] text-gray-400">Knowledge base synced</div>
                </div>
            </motion.div>
        </div>
    </div>
  );
};

// --- 3. THE PROGRESS FLOW (Speed) ---
// Concept: A horizontal timeline. Clean, linear, professional progress.
export const SudSpeed = () => {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8">
          
          <div className="w-full max-w-xs space-y-6">
              {[1, 2, 3].map((step, i) => (
                  <div key={i} className="relative">
                      {/* Connector Line */}
                      {i !== 2 && (
                          <div className="absolute left-[15px] top-8 bottom-[-24px] w-0.5 bg-gray-100">
                              <motion.div 
                                  className="w-full bg-purple-500"
                                  initial={{ height: "0%" }}
                                  animate={{ height: "100%" }}
                                  transition={{ duration: 0.5, delay: i * 0.8 + 0.5, ease: "linear" }}
                              />
                          </div>
                      )}

                      <div className="flex items-center gap-4">
                          <motion.div 
                             className="w-8 h-8 rounded-full border-2 flex items-center justify-center bg-white z-10"
                             animate={{ 
                                 borderColor: ["#e5e7eb", "#a855f7", "#22c55e"],
                                 color: ["#9ca3af", "#a855f7", "#22c55e"],
                                 scale: [1, 1.1, 1]
                             }}
                             transition={{ duration: 0.5, delay: i * 0.8 }}
                          >
                              {i === 0 ? <FileText size={14} /> : i === 1 ? <Zap size={14} /> : <CheckCircle2 size={14} />}
                          </motion.div>
                          
                          <div className="flex-1 space-y-1.5">
                              <div className="flex justify-between">
                                  <motion.div 
                                      className="h-2 w-20 bg-gray-100 rounded-full"
                                      animate={{ backgroundColor: ["#f3f4f6", "#2A1638"] }}
                                      transition={{ duration: 0.5, delay: i * 0.8 }}
                                  />
                                  <motion.div 
                                      className="text-[10px] font-mono text-gray-400"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ delay: i * 0.8 }}
                                  >
                                      {0.2 * (i+1)}s
                                  </motion.div>
                              </div>
                              <div className="h-1.5 w-12 bg-gray-50 rounded-full" />
                          </div>
                      </div>
                  </div>
              ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full mt-4">
              <Zap size={12} className="text-purple-500" />
              <span>Total Time: <span className="text-gray-900 font-bold">0.6s</span></span>
          </div>

      </div>
    );
};
