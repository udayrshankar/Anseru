import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { Shield, FileText } from "lucide-react";
import { AgentCard, type ColorTheme } from "./AgentNotificationCards";

const CARDS = [

  {
  id: 0,
  title: "Sud",
  description: "Your security agent for safe, compliant data.",
  icon: Shield,
  colorTheme: "blue" as ColorTheme,
},
  {
    id: 1,
    title: "KG",
    description: "Your deal-closing RFP Agent, accelerating your sales cycles.",
    icon: FileText,
    colorTheme: "purple" as ColorTheme,
  }

];

interface HeroCardsProps {
  activeIndex: number;
  onIndexChange: (index: number) => void;
  isPaused: boolean;
}



export default function HeroCards({ activeIndex, onIndexChange, isPaused }: HeroCardsProps) {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      onIndexChange((activeIndex + 1) % CARDS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, onIndexChange]);

  const getCardState = (index: number, activeIndex: number) => {
    return index === activeIndex ? "front" : "back";
  };

  const variants: Variants = {
    front: {
      zIndex: 10,
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 100, // Reduced from 180 for softer feel
        damping: 20,
        mass: 1.2 // Added mass for momentum
      },
    },
    back: {
      zIndex: 1,
      opacity: 0.4, // Reduced from 0.5 for more focus on front
      scale: 0.92, // Slight increase from 0.9
      y: 30, // Reduced slip distance (was 40)
      rotateX: 0, 
      filter: "blur(2px)", // Reduced blur for cleaner look
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        mass: 1.2
      },
    },
  };

  return (
    <div className="relative mt-24 flex h-[350px] w-full items-center justify-center perspective-1000">
      {CARDS.map((card, index) => {
        const position = getCardState(index, activeIndex);
        
        return (
          <motion.div
            key={card.id}
            variants={variants}
            initial="back"
            animate={position}
            onClick={() => {
              navigate('/product');
            }}
            className="absolute cursor-pointer w-[320px] md:w-[500px] h-[400px] will-change-transform"
            style={{ 
              transformOrigin: "bottom center",
              perspective: "2000px" // Adds depth to the rotation
            }}
          >
            <AgentCard
              title={card.title}
              description={card.description}
              icon={card.icon}
              colorTheme={card.colorTheme}
              className="h-full shadow-lg" // Ensure full height of container
            />
          </motion.div>
        );
      })}
    </div>
  );
}