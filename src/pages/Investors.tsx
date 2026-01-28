import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Slide1 from "../components/investors/Slide1";
import Slide2 from "../components/investors/Slide2";
import Slide3 from "../components/investors/Slide3";
import Slide4 from "../components/investors/Slide4";
import Slide5 from "../components/investors/Slide5";
import Slide6 from "../components/investors/Slide6";

const TOTAL_SLIDES = 6;
const TABS = ["Vision", "Problem", "Solution", "Market", "Technology", "Contact"];

export default function Investors() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isScrolling = useRef(false);

  const scrollToSlide = (index: number) => {
    if (index < 0 || index >= TOTAL_SLIDES) return;
    
    // Update state immediately for UI response
    setCurrentSlide(index);
    
    // Perform smooth scroll
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollTo({
        left: index * window.innerWidth, // Assuming full width slides
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (evt: WheelEvent) => {
      // If currently animating a scroll, ignore
      if (isScrolling.current) return;

      // Check if vertical scroll is dominant
      if (Math.abs(evt.deltaY) > Math.abs(evt.deltaX)) {
        evt.preventDefault();
        
        // Threshold to trigger slide change
        if (Math.abs(evt.deltaY) > 20) {
            isScrolling.current = true;
            
            if (evt.deltaY > 0) {
                // Scroll Down -> Next Slide
                if (currentSlide < TOTAL_SLIDES - 1) {
                    scrollToSlide(currentSlide + 1);
                }
            } else {
                // Scroll Up -> Prev Slide
                if (currentSlide > 0) {
                    scrollToSlide(currentSlide - 1);
                }
            }

            // Reset scrolling lock after animation duration
            setTimeout(() => {
                isScrolling.current = false;
            }, 800);
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [currentSlide]); // Re-bind when currentSlide changes to capture correct value

  // Handle resize to keep alignment
  useEffect(() => {
      const handleResize = () => scrollToSlide(currentSlide);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide]);

  return (
    <div className="w-full h-screen overflow-hidden bg-white relative">
      {/* Custom Logo for Investors Page */}
      <a href="/" className="fixed top-8 left-8 z-50 font-onest text-2xl font-bold text-[#090909] tracking-tight hover:opacity-70 transition-opacity">
        ANSERU
      </a>
      
      {/* Horizontal Scroll Container */}
      <main 
        ref={scrollContainerRef}
        className="w-full h-screen overflow-x-hidden flex scrollbar-hide" // Changed to overflow-x-hidden to prevent manual scroll fighting
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="min-w-full"><Slide1 /></div>
        <div className="min-w-full"><Slide2 /></div>
        <div className="min-w-full"><Slide3 /></div>
        <div className="min-w-full"><Slide4 /></div>
        <div className="min-w-full"><Slide5 /></div>
        <div className="min-w-full"><Slide6 /></div>
      </main>

      {/* Navigation Buttons */}
      <div className="absolute bottom-10 left-0 right-0 z-50 flex items-center justify-center gap-8 pointer-events-none">
          {/* Left Arrow */}
          <button 
            onClick={() => scrollToSlide(currentSlide - 1)}
            disabled={currentSlide === 0}
            className={`pointer-events-auto w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center transition-all duration-300 ${currentSlide === 0 ? 'opacity-0 scale-90' : 'opacity-100 hover:scale-110 hover:border-black'}`}
          >
              <ChevronLeft className="w-6 h-6 text-black" />
          </button>

           {/* Right Arrow */}
          <button 
            onClick={() => scrollToSlide(currentSlide + 1)}
            disabled={currentSlide === TOTAL_SLIDES - 1}
            className={`pointer-events-auto w-12 h-12 rounded-full bg-black text-white shadow-lg flex items-center justify-center transition-all duration-300 ${currentSlide === TOTAL_SLIDES - 1 ? 'opacity-0 scale-90' : 'opacity-100 hover:scale-110 hover:bg-[#333]'}`}
          >
              <ChevronRight className="w-6 h-6" />
          </button>
      </div>

      {/* Top Tabs Navigation */}
      <div className="absolute top-5 left-0 right-0 z-40 flex justify-center pointer-events-none">
          <div className="bg-white/80 backdrop-blur-md px-2 py-1.5 rounded-full border border-gray-200 shadow-sm flex gap-1 pointer-events-auto">
                {TABS.map((tab, i) => (
                    <button 
                        key={i} 
                        onClick={() => scrollToSlide(i)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            i === currentSlide 
                            ? 'bg-black text-white shadow-md' 
                            : 'text-gray-500 hover:bg-gray-100 hover:text-black'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
          </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}</style>
    </div>
  );
}
