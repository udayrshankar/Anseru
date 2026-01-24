import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FEATURES = [
  "Workflows",
  "Responses"
];

const SmartCTA = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFeature = FEATURES[currentFeatureIndex];
    
    // Typing speed configuration
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseEnd = 2000; // Time to wait after finishing typing

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentFeature.length) {
          setDisplayedText(currentFeature.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, wait then delete
          setTimeout(() => setIsDeleting(true), pauseEnd);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentFeature.slice(0, displayedText.length - 1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentFeatureIndex((prev) => (prev + 1) % FEATURES.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentFeatureIndex]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col sm:flex-row items-center gap-3 bg-white/80 backdrop-blur-md rounded-[20px] p-[11px] h-auto sm:h-[60px] shadow-sm border border-white/50 w-fit mx-auto"
    >
      {/* Typewriter Container */}
      <div className="flex items-center gap-2 bg-white border border-[#EE00FF]/30 rounded-[15px] px-6 h-[42px] shadow-[0_0_15px_rgba(238,0,255,0.15)] min-w-[180px] w-full sm:w-auto overflow-hidden relative">
         <span className="text-xl">✨</span>
         <div className="flex items-center text-[#393939] font-medium text-[15px] font-onest">
            <span className="mr-1">Automate</span>
            <span className="text-[#EE00FF] font-semibold relative">
                {displayedText}
                {/* Cursor */}
                <span className="absolute -right-[2px] top-0 h-full w-[2px] bg-[#EE00FF] animate-blink" />
            </span>
         </div>
      </div>

      {/* Book Demo Button */}
      <motion.button 
        className="px-6 h-[42px] rounded-[15px] bg-gradient-to-b from-[#222] to-[#000] text-white font-onest text-[15px] font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2 group relative overflow-hidden w-full sm:w-auto justify-center"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10">Talk to Founders</span>
        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      </motion.button>
    </motion.div>
  );
};

export default SmartCTA;
