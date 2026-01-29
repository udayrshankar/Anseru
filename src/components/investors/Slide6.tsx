
import { motion } from "framer-motion";

export default function Slide6() {
  return (
    <section className="w-full max-w-7xl h-full mx-auto px-24 pt-10 flex flex-col justify-center relative">
      {/* Heading with staggered animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[56px] font-semibold tracking-tight leading-tight text-center">
          Immediate ROI from{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
              Day One
            </span>
          </span>
        </h2>
      </motion.div>

      {/* Comparison grid */}
      <div className="relative grid grid-cols-2 gap-28 items-start scale-80">
        {/* Animated divider with flowing gradient */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] overflow-hidden">
          <motion.div 
            className="w-full h-full bg-gradient-to-b from-transparent via-pink-300/30 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.div 
            className="absolute inset-0 w-full h-40 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-orange-500/50"
            animate={{ 
              y: ["0%", "300%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.5
            }}
          />
        </div>

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
              <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400">
                Before Anseru
              </h3>
            </div>
          </motion.div>

          {[
            { value: "Weeks", label: "Time per RFP" },
            { value: "Heavy", label: "SME involvement" },
            { value: "Delayed", label: "Deal velocity" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.35, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              whileHover={{ opacity: 0.5, scale: 1.02 }}
            >
              <div className="text-[44px] font-bold text-gray-500 tracking-tight">
                {item.value}
              </div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-semibold">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

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
            <div className="px-5 py-2 border border-pink-300 rounded-full">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-transparent bg-clip-text">
                With Anseru
              </h3>
            </div>
          </motion.div>

          {[
            { value: "Minutes", label: "To first draft", gradient: "from-purple-500 via-pink-500 to-orange-500" },
            { value: "80% Less", label: "SME effort required", gradient: "from-purple-600 via-pink-500 to-orange-500" },
            { value: "Accelerated", label: "Revenue realization", gradient: "from-purple-500 via-pink-600 to-orange-600" }
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
                <div className="text-[11px] uppercase tracking-[0.15em] font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-transparent bg-clip-text">
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