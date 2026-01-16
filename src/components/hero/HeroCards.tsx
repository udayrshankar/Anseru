import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion"; // 1. Import Variants
import GlowCard from "../GlowCard";

const CARDS = [
  {
    id: 0,
    title: "Maya here!",
    subtitle: "Security review specialist",
    color: "#FDA4AF",
  },
  {
    id: 1,
    title: "Jane here!",
    subtitle: "Your deal-closing RFP Agent",
    color: "#D8B4FE",
  },
  {
    id: 2,
    title: "Alex here!",
    subtitle: "Trust & compliance expert",
    color: "#93C5FD",
  },
];

export default function HeroCards() {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CARDS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getCardState = (index: number, activeIndex: number) => {
    if (index === activeIndex) return "center";
    if (index === (activeIndex + 1) % CARDS.length) return "right";
    return "left";
  };

  // 2. Explicitly type the variants object
  const variants: Variants = {
    center: {
      x: "0%",
      scale: 1.1,
      zIndex: 10,
      opacity: 1,
      filter: "blur(0px)",
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 25 
      },
    },
    left: {
      x: "-65%",
      scale: 0.85,
      zIndex: 1,
      opacity: 0.7,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 25 
      },
    },
    right: {
      x: "65%",
      scale: 0.85,
      zIndex: 1,
      opacity: 0.7,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 25 
      },
    },
  };

  return (
    <div className="relative mt-32 flex h-[350px] w-full items-center justify-center">
      {CARDS.map((card, index) => {
        const position = getCardState(index, activeIndex);

        return (
          <motion.div
            key={card.id}
            variants={variants}
            initial="center"
            animate={position}
            onClick={() => setActiveIndex(index)}
            className="absolute cursor-pointer"
            style={{ 
              transformOrigin: "bottom center",
            }}
          >
            <div className="w-[300px]">
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