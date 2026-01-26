import { useState } from "react";
import HeroCards from "../hero/HeroCards";
import { type TabKey } from "./TabContents";

interface AnimationCarouselProps {
  activeTab: TabKey;
}

export default function AnimationCarousel({ activeTab: _activeTab }: AnimationCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-full relative group flex items-center justify-center overflow-hidden">
      {/* Solid Brand-Aligned Background */}
      <div className="absolute inset-0 bg-[#FBF7FF]" />
      
      {/* Hero Cards Component - Oscillates between KG and SUD independently */}
      <div className="w-full h-full flex items-center justify-center scale-90 md:scale-100">
         <HeroCards 
           activeIndex={activeIndex} 
           onIndexChange={setActiveIndex} 
           isPaused={false} 
         />
      </div>
    </div>
  );
}
