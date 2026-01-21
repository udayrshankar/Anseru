
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Globe, Check } from "lucide-react";

export default function TrustCenterHero() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-transparent overflow-hidden">
       {/* --- Ambient Background Glow --- */}
       <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-100/40 rounded-full blur-[80px]" />
      </div>

      <motion.div
         initial={{ opacity: 0, scale: 0.9 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.6 }}
         className="relative z-10 w-[85%] max-w-[400px] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden"
      >
          {/* Header */}
          <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                  <ShieldCheck className="text-green-400 w-5 h-5" />
                  <span className="text-white font-medium text-sm">Trust Center</span>
              </div>
              <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Live</span>
              </div>
          </div>

          {/* Body */}
          <div className="p-6">
              
              {/* Score Indicator */}
              <div className="flex items-end justify-between mb-6 border-b border-gray-100 pb-6">
                  <div>
                      <p className="text-xs text-uppercase text-gray-400 font-semibold tracking-wider mb-1">SECURITY SCORE</p>
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl font-bold text-gray-900"
                      >
                         <motion.span
                            initial={{ opacity: 0 }} 
                            whileInView={{ opacity: 1 }}
                         >98</motion.span>
                         <span className="text-xl text-gray-400 font-normal">/100</span>
                      </motion.div>
                  </div>
                  <div className="flex -space-x-3">
                      {[1,2,3].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] text-gray-500 font-semibold shadow-sm">
                              {i === 1 ? 'S2' : i === 2 ? 'GD' : 'IS'}
                          </div>
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-green-100 flex items-center justify-center text-[10px] text-green-700 font-bold shadow-sm">
                          +5
                      </div>
                  </div>
              </div>

              {/* Checklist Animation */}
              <div className="space-y-3">
                  {[
                      { label: "SOC 2 Type II Certified", icon: ShieldCheck },
                      { label: "GDPR Compliant", icon: Globe },
                      { label: "Data Encryption (AES-256)", icon: Lock },
                  ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + (i * 0.2), duration: 0.4 }}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100 group hover:border-green-200 transition-colors"
                      >
                          <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 group-hover:text-green-500 group-hover:border-green-200 transition-colors">
                                  <item.icon size={14} />
                              </div>
                              <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                          </div>
                          <motion.div 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 1 + (i * 0.2), type: "spring" }}
                            className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center"
                          >
                              <Check className="w-3 h-3 text-white stroke-[3px]" />
                          </motion.div>
                      </motion.div>
                  ))}
              </div>

              <motion.div 
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 1.5, duration: 1 }}
                className="mt-6 h-1.5 bg-gray-100 rounded-full overflow-hidden"
              >
                  <div className="h-full bg-green-500 rounded-full" />
              </motion.div>
          </div>
      </motion.div>

      {/* Floating Shield */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-12 right-6 lg:right-12 z-20"
      >
          <div className="w-16 h-16 bg-gradient-to-tr from-green-400 to-emerald-600 rounded-2xl shadow-xl shadow-green-200/50 flex items-center justify-center border-4 border-white">
              <ShieldCheck className="w-8 h-8 text-white" />
          </div>
      </motion.div>
    </div>
  );
}
