import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/layout/Header";
import Slide1 from "../components/investors/Slide1";
import Slide2 from "../components/investors/Slide2";
import Slide3 from "../components/investors/Slide3";
import Slide4 from "../components/investors/Slide4";
import Slide5 from "../components/investors/Slide5";

const TOTAL_SLIDES = 5;

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
      <Header />
      
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

           {/* Dots */}
           <div className="flex bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-gray-100 shadow-sm gap-3 pointer-events-auto">
                {[...Array(TOTAL_SLIDES)].map((_, i) => (
                    <button 
                        key={i} 
                        onClick={() => scrollToSlide(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-black scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                    />
                ))}
           </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scrollToSlide(currentSlide + 1)}
            disabled={currentSlide === TOTAL_SLIDES - 1}
            className={`pointer-events-auto w-12 h-12 rounded-full bg-black text-white shadow-lg flex items-center justify-center transition-all duration-300 ${currentSlide === TOTAL_SLIDES - 1 ? 'opacity-0 scale-90' : 'opacity-100 hover:scale-110 hover:bg-[#333]'}`}
          >
              <ChevronRight className="w-6 h-6" />
          </button>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}</style>
    </div>
  );
}
