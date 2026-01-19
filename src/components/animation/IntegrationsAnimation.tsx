import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const IntegrationsAnimation = () => {
    // PRE-CALCULATE POSITIONS to avoid expensive math per frame (though JS overhead is low, it's safer)
    // 0, 90, 180, 270 degrees
    const positions = [
        { x: 60, y: 0 },
        { x: 0, y: 60 },
        { x: -60, y: 0 },
        { x: 0, y: -60 }
    ];

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-white" />

        {/* Central Hub */}
        <div className="relative z-10 flex items-center justify-center">
            <motion.div 
               className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center shadow-xl relative z-20"
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ duration: 3, repeat: Infinity }}
               style={{ willChange: "transform" }}
            >
                <Layers className="w-8 h-8 text-white" />
            </motion.div>

            {/* Connecting Nodes */}
            {positions.map((pos, i) => (
                <motion.div
                    key={i}
                    className="absolute w-8 h-8 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-center z-10"
                    // Removed dynamic style calc from render loop
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ 
                        x: [0, pos.x], 
                        y: [0, pos.y],
                        opacity: [0, 1, 1] 
                    }}
                    transition={{ 
                        duration: 1.5, 
                        delay: i * 0.2, 
                        type: "spring", 
                        stiffness: 120,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 1
                    }}
                    style={{ willChange: "transform, opacity" }}
                >
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: ["#3B82F6", "#10B981", "#F59E0B", "#8B5CF6"][i] }} />
                </motion.div>
            ))}

            {/* Expanding Ring - Optimized with Scale instead of width/height */}
            <motion.div 
                className="absolute rounded-full border border-gray-200"
                style={{ width: 60, height: 60, willChange: "transform, opacity" }}
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2.3, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
        </div>
    </div>
  );
};

export default IntegrationsAnimation;
