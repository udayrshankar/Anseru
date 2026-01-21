
import { motion } from "framer-motion";
import { TrendingUp, Target, Zap, ArrowUpRight } from "lucide-react";

export default function WinIntelligenceGraph() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-transparent overflow-hidden">
      
      {/* --- Ambient Background Glow --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-[80px]" />
      </div>

      {/* --- Main Card --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-[90%] max-w-[440px] bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8"
      >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
              <div>
                  <h4 className="text-gray-900 font-bold text-lg flex items-center gap-2">
                     <Target className="w-5 h-5 text-blue-600" />
                     Win Rate Analysis
                  </h4>
                  <p className="text-gray-400 text-xs mt-1">Last 30 Days vs Competitors</p>
              </div>
              <div className="bg-green-100 px-3 py-1 rounded-full text-green-700 text-xs font-bold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +24%
              </div>
          </div>

          {/* Graph Area */}
          <div className="h-40 relative flex items-end justify-between px-2 gap-4">
               {/* Grid Lines */}
               <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                   <div className="w-full h-px bg-gray-400 border-dashed" />
                   <div className="w-full h-px bg-gray-400 border-dashed" />
                   <div className="w-full h-px bg-gray-400 border-dashed" />
               </div>

               {/* Bars Container */}
               {[
                   { height: "40%", label: "Manual", color: "bg-gray-200" },
                   { height: "45%", label: "Legacy", color: "bg-gray-300" },
                   { height: "65%", label: "Competitor", color: "bg-gray-400" },
                   { height: "92%", label: "Anseru", color: "bg-gradient-to-t from-blue-500 to-indigo-600", active: true },
               ].map((bar, i) => (
                   <div key={i} className="flex flex-col items-center gap-2 relative group w-full">
                       {/* Tooltip on Active */}
                       {bar.active && (
                           <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.2 }}
                              className="absolute -top-10 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg"
                           >
                               Top Perf.
                           </motion.div>
                       )}

                       {/* The Bar */}
                       <motion.div 
                          className={`w-full rounded-t-lg ${bar.color}`}
                          initial={{ height: "0%" }}
                          whileInView={{ height: bar.height }}
                          transition={{ delay: i * 0.15, duration: 0.8, type: "spring", stiffness: 50 }}
                       />
                       
                       {/* Label */}
                       <span className={`text-[10px] font-medium ${bar.active ? 'text-blue-600 font-bold' : 'text-gray-400'}`}>
                           {bar.label}
                       </span>
                   </div>
               ))}
          </div>
      </motion.div>

      {/* --- Floating Insight Cards representing 'Intelligence' --- */}
      
      {/* Card 1: Intent Detected */}
      <motion.div
        className="absolute top-[15%] left-[5%] md:left-[0%] bg-white p-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-purple-100 flex items-center gap-3 z-20"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
          <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
              <Zap className="w-4 h-4 text-purple-600" />
          </div>
          <div>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">INTENT DETECTED</p>
              <p className="text-xs font-semibold text-gray-800">Competitor Comparison Request</p>
          </div>
      </motion.div>

       {/* Card 2: Strategy Match */}
       <motion.div
        className="absolute bottom-[10%] right-[5%] md:right-[0%] bg-white p-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-blue-100 flex items-center gap-3 z-0"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-blue-600" />
          </div>
          <div>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">STRATEGY</p>
              <p className="text-xs font-semibold text-gray-800">Highlight SOC2 Gap</p>
          </div>
      </motion.div>

    </div>
  );
}
