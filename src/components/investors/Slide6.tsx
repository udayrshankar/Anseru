
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Slide6() {
  return (
    <section className="w-full h-full mx-auto px-24 pt-20 flex flex-col justify-center relative">
      {/* Heading with staggered animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[56px] mt-15 font-semibold tracking-tight leading-tight text-center">
          Immediate ROI from{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
              Day One
            </span>
          </span>
        </h2>
      </motion.div>

      {/* Comparison grid */}
      <div className="relative grid grid-cols-[1fr_auto_1fr] -translate-y-10 gap-8 items-start scale-80">
        
        {/* BEFORE - Muted state */}
        <motion.div 
          className="text-right space-y-14"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-5 py-2 border border-gray-200 rounded-full">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/50">
                Before Anseru
              </h3>
            </div>
          </motion.div>

          {[
            { value: "Weeks", label: "Time per RFP" },
            { value: "Heavy", label: "SME Involvement" },
            { value: "Last Stage", label: "Deal Delays/Lost" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.4, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              whileHover={{ opacity: 0.5, scale: 1.02 }}
            >
              <div className="text-[56px] font-bold text-black tracking-tight">
                {item.value}
              </div>
              <div className="text-[20px] uppercase tracking-[0.15em] text-black font-semibold">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* MIDDLE - Chevron Arrows */}
        <div className="flex flex-col items-center space-y-14 pt-2">
           {/* Invisible Header Spacer to align arrows with content */}
           <div className="text-[34px] invisible border border-transparent py-2">Spacer</div> 

           {[0, 1, 2].map((i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                 className="flex flex-col justify-center h-[100px]" // approximate height of content block
               >
                   <ChevronRight className="w-12 h-12 text-gray-300" strokeWidth={1.5} />
               </motion.div>
           ))}
        </div>

        {/* AFTER - Premium state */}
        <motion.div 
          className="space-y-14"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-5 py-2 border border-pink-300 bg-white/50 backdrop-blur-4xl rounded-full">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-transparent bg-clip-text">
                With Anseru
              </h3>
            </div>
          </motion.div>

          {[
            { value: "Minutes", label: "To First Draft (10X Faster)", gradient: "from-purple-500 via-pink-500 to-orange-500" },
            { value: "70-80% Less", label: "SME Effort Reduction", gradient: "from-purple-600 via-pink-500 to-orange-500" },
            { value: "Faster", label: "Deal Cycles", gradient: "from-purple-500 via-pink-600 to-orange-600" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className="space-y-2 group"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <motion.div 
                className={`text-[56px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {item.value}
              </motion.div>
              <div className="flex items-center gap-2">
                <div className="text-[20px] uppercase tracking-[0.15em] font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-transparent bg-clip-text">
                  {item.label}
                </div>
                <motion.div 
                  className="h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: 24 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}