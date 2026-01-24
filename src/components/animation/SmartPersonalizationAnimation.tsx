import { motion } from "framer-motion";
import { User } from "lucide-react";

const SmartPersonalizationAnimation = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-white">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-50/50 to-orange-50/50 opacity-50   " />

            <div className="relative z-10">
                {/* Central Profile */}
                <motion.div
                    className="w-20 h-20 bg-white rounded-full shadow-xl border-4 border-white flex items-center justify-center relative z-20"
                    animate={{ 
                        borderColor: ["#fff", "#f43f5e", "#fff"],
                        boxShadow: ["0 4px 6px -1px rgba(0, 0, 0, 0.1)", "0 0 25px rgba(244, 63, 94, 0.4)", "0 4px 6px -1px rgba(0, 0, 0, 0.1)"]
                     }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <User className="w-8 h-8 text-gray-400" />
                </motion.div>

                {/* Orbiting Nodes */}
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-32 h-32 border border-dashed border-gray-300 rounded-full -translate-x-1/2 -translate-y-1/2 -z-10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                    >
                         <motion.div 
                            className="absolute -top-3 left-1/2 w-8 h-8 -translate-x-1/2 bg-white rounded-full shadow-sm border border-gray-200 flex items-center justify-center text-[10px]"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                         >
                            {["❤️", "⚡", "👍"][i]}
                         </motion.div>
                    </motion.div>
                ))}
                
                {/* Connection Beams */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 -z-20 pointer-events-none">
                     <motion.circle 
                        cx="96" cy="96" r="40" 
                        stroke="#f43f5e" 
                        strokeWidth="1" 
                        fill="none" 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity }}
                     />
                </svg>
            </div>
        </div>
    );
};

export default SmartPersonalizationAnimation;
