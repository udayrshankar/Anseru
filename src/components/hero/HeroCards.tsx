import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import GlowCard from "../GlowCard";

const CARDS = [
  {
    id: 0,
    title: "Sud here!",
    subtitle: "Security review specialist",
    color: "#FDA4AF",
  },
  {
    id: 1,
    title: "KG here!",
    subtitle: "Your deal-closing RFP Agent",
    color: "#D8B4FE",
  },
];

export default function HeroCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CARDS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // NEW LOGIC: Only two states needed: "front" and "back"
  const getCardState = (index: number, activeIndex: number) => {
    return index === activeIndex ? "front" : "back";
  };

  const variants: Variants = {
    front: {
      zIndex: 10,
      opacity: 1,
      scale: 1.1,
      y: 0,          // Centered vertically
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 25 
      },
    },
    back: {
      zIndex: 1,
      opacity: 0.5,
      scale: 0.95,   // Slightly smaller
      y: -15,        // Peeks out from the top slightly (Stack effect)
      filter: "blur(2px)",
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 25 
      },
    },
  };

  return (
    <div className="relative mt-32 flex h-[350px] w-full items-center justify-center -translate-x-15">
      {CARDS.map((card, index) => {
        const position = getCardState(index, activeIndex);

        return (
          <motion.div
            key={card.id}
            variants={variants}
            initial="back" // Start from back state
            animate={position}
            onClick={() => setActiveIndex(index)}
            className="absolute cursor-pointer"
            style={{ 
              transformOrigin: "center center", // Changed to center for better stacking
            }}
          >
            <div className="w-[300px] md:w-[400px]">
              <GlowCard 
                title={card.title} 
                subtitle={card.subtitle} 
                color={card.color} 
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}