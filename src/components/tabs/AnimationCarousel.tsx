import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SudResponse, SudUpdates, SudSpeed } from "./animations/NewSudAnimations";
import { KgDrafting, KgFormats, KgReview } from "./animations/NewKgAnimations";
import { type TabKey } from "./TabContents";

interface AnimationCarouselProps {
  activeTab: TabKey;
}

export default function AnimationCarousel({ activeTab }: AnimationCarouselProps) {
  const [index, setIndex] = useState(0);

  const sudAnimations = [
    { component: SudResponse, label: "Source-Backed Responses" },
    { component: SudUpdates, label: "Real-Time Updates" },
    { component: SudSpeed, label: "Faster Reviews" },
  ];

  const kgAnimations = [
    { component: KgDrafting, label: "Instant First Drafts" },
    { component: KgFormats, label: "Complex Format Support" },
    { component: KgReview, label: "Smart Human Review" },
  ];

  const currentAnimations = activeTab === "maya" ? sudAnimations : kgAnimations;

  // Reset index when tab changes
  useEffect(() => {
    setIndex(0);
  }, [activeTab]);

  // Carousel timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % currentAnimations.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, [currentAnimations.length]);

  return (
    <div className="w-full h-full relative group">
      {/* Solid Brand-Aligned Background */}
      <div className="absolute inset-0 bg-[#FBF7FF]" />
      
      {/* Active Animation */}
      <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <ComponentWrapper>
                 {(() => {
                    const Component = currentAnimations[index].component;
                    return <Component />;
                 })()}
              </ComponentWrapper>
            </motion.div>
          </AnimatePresence>
      </div>

       {/* Carousel Indicators / Controls */}
       <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {currentAnimations.map((_, i) => (
             <button
               key={i}
               onClick={() => setIndex(i)}
               className={`h-1.5 rounded-full transition-all duration-300 ${
                 i === index ? "w-8 bg-purple-600" : "w-1.5 bg-purple-200 hover:bg-purple-300"
               }`}
             />
          ))}
       </div>
       
       {/* Label Overlay */}
       <div className="absolute top-4 left-6 z-20">
          <motion.div
             key={`${activeTab}-${index}-label`}
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             className="bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-purple-100 text-purple-900/80 text-xs font-mono font-medium shadow-sm"
          >
              {currentAnimations[index].label}
          </motion.div>
       </div>
    </div>
  );
}

const ComponentWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full h-full"> 
        {children} 
    </div>
);
