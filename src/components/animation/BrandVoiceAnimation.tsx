import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const BrandVoiceAnimation = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-white/50">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-cyan-50 opacity-60" />

            {/* Shield Filter */}
            <motion.div 
               className="relative z-20 bg-white p-3 rounded-xl shadow-lg border border-indigo-100"
               animate={{ y: [0, -4, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               style={{ willChange: "transform" }}
            >
                <Shield className="w-10 h-10 text-indigo-600" />
                
                {/* Scanner Line - Optimized to use transform instead of top/left if possible, but standard translateY is best here */}
                <motion.div 
                   className="absolute top-0 left-0 w-full h-1 bg-indigo-400 opacity-50 blur-[1px]"
                   initial={{ translateY: "0%" }}
                   animate={{ translateY: ["0%", "44px", "0%"] }} // 44px is roughly height of container
                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>

            {/* Chaotic Particles (Input) */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-20 h-24 flex flex-wrap gap-2 items-center justify-center opacity-70">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`chaos-${i}`}
                        className="w-3 h-3 rounded-sm"
                        style={{ 
                            backgroundColor: ["#EF4444", "#F59E0B", "#10B981"][i % 3],
                            willChange: "transform, opacity"
                        }}
                        initial={{ x: -20, opacity: 0, scale: 0.5 }}
                        animate={{ x: 60, opacity: [0, 1, 0], scale: 1, rotate: 180 }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.4, ease: "linear" }}
                    />
                ))}
            </div>

            {/* Aligned Particles (Output) - Optimized with scaleX */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-20 h-24 flex flex-col gap-2 items-center justify-center">
                 {[...Array(4)].map((_, i) => (
                    <div key={`order-${i}`} className="w-16 h-2 rounded-full bg-gray-100 overflow-hidden relative">
                         <motion.div
                            className="absolute inset-0 bg-indigo-500 origin-left"
                            initial={{ scaleX: 0.2, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1.5 + (i * 0.3), ease: "easeOut" }}
                            style={{ willChange: "transform, opacity" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandVoiceAnimation;
