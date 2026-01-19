import { motion } from "framer-motion";

const SmartDraftingAnimation = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Elements - Simplified */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-50 pointer-events-none" />
      
      <div className="relative w-full max-w-[280px] bg-white rounded-xl shadow-lg border border-gray-100 p-4 space-y-3 z-10">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
           <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
             <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
           </div>
           <div className="h-2 w-20 bg-gray-200 rounded-full" />
        </div>

        {/* Typing Lines - Optimized with scaleX and layout-safe transforms */}
        <div className="space-y-2">
            {[1, 2, 3].map((_, i) => (
                <div key={i} className="h-2 bg-gray-100 rounded-full relative overflow-hidden w-full">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-gray-300 rounded-full origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 1.5,
                            delay: i * 0.8,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: 4
                        }}
                    />
                    <motion.div 
                        className="absolute top-0 h-full w-1 bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                         // We manually calculate left position via keyframes or just simplistic opacity fade to simulate cursor
                         // But to be performant, let's just animate the cursor with the bar or fade it in/out
                        initial={{ left: "0%", opacity: 1 }}
                        animate={{ left: "100%", opacity: [1, 1, 0] }}
                        transition={{
                            duration: 1.5,
                            delay: i * 0.8,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: 4
                        }}
                    />
                </div>
            ))}
        </div>

        {/* Suggestion Bubble Pop - Optimized spring */}
        <motion.div 
             initial={{ scale: 0, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 3, duration: 0.4, type: "spring", stiffness: 200, damping: 15, repeat: Infinity, repeatDelay: 4.8 }}
             className="absolute -right-4 bottom-4 bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full shadow-lg origin-bottom-left"
             style={{ willChange: "transform, opacity" }}
        >
            ✨ Draft Ready
        </motion.div>
      </div>

      {/* Floating Particles - Reduced count and simplified */}
      {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
            initial={{ opacity: 0, y: 0, x: 0 }}
            animate={{ opacity: [0, 1, 0], y: -30, x: (i % 2 === 0 ? 20 : -20) }}
            transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "easeInOut"
            }}
            style={{
                left: `${30 + i * 40}%`,
                top: "40%",
                willChange: "transform, opacity" // Performance Hint
            }}
          />
      ))}
    </div>
  );
};

export default SmartDraftingAnimation;
