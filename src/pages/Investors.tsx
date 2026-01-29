import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";

import Slide1 from "../components/investors/Slide1";
import Slide2 from "../components/investors/Slide2";
import Slide3 from "../components/investors/Slide3";
import Slide4 from "../components/investors/Slide4";
import Slide5 from "../components/investors/Slide5";
import Slide6 from "../components/investors/Slide6";
import Slide7 from "../components/investors/Slide7";
import Slide8 from "../components/investors/Slide8";
import Slide9 from "../components/investors/Slide9";
const TOTAL_SLIDES = 9;
const TABS = ["Founders", "Problem", "Why Now", "Product", "How It Works", "ROI", "Market", "Vision", "Ask"];

export default function Investors() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isScrolling = useRef(false);

  const scrollToSlide = (index: number) => {
    if (index < 0 || index >= TOTAL_SLIDES) return;
    setCurrentSlide(index);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: index * window.innerWidth,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const handleWheel = (evt: WheelEvent) => {
      if (isScrolling.current) return;
      if (Math.abs(evt.deltaY) > Math.abs(evt.deltaX)) {
        evt.preventDefault();
        if (Math.abs(evt.deltaY) > 30) {
            isScrolling.current = true;
            if (evt.deltaY > 0) { if (currentSlide < TOTAL_SLIDES - 1) scrollToSlide(currentSlide + 1); } 
            else { if (currentSlide > 0) scrollToSlide(currentSlide - 1); }
            setTimeout(() => { isScrolling.current = false; }, 1000);
        }
      }
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [currentSlide]);

  return (
    <div className="w-full h-screen overflow-hidden bg-[#FDFCFE] relative font-sans selection:bg-pink-200">
      
      {/* --- SCROLLYTELLING DASHED LINE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <motion.path
            d="M-50 400 C 300 100, 700 700, 1100 200 S 1500 400, 1900 100"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeDasharray="12 12"
            animate={{ 
                strokeDashoffset: [0, -100],
                x: -currentSlide * 200 // Moves line as you scroll
            }}
            transition={{ 
                strokeDashoffset: { duration: 10, repeat: Infinity, ease: "linear" },
                x: { duration: 1, ease: [0.22, 1, 0.36, 1] }
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* --- DYNAMIC BLOBS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            animate={{ 
                backgroundColor: currentSlide % 2 === 0 ? '#F3E8FF' : '#FCE7F3',
                scale: [1, 1.1, 1],
                x: currentSlide * 50
            }}
            className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full blur-[140px] opacity-40 transition-colors duration-1000"
          />
      </div>

      <a href="/" className="fixed top-8 left-8 z-50 font-bold text-2xl tracking-tighter text-gray-900">ANSERU</a>

      <main ref={scrollContainerRef} className="w-full h-screen overflow-x-hidden flex scrollbar-hide relative z-10">
        {[Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9].map((SlideComponent, idx) => (
          <div key={idx} className="min-w-full h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {currentSlide === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, scale: 0.98, filter: "blur(10px)" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full w-full flex items-center justify-center"
                >
                  <SlideComponent />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </main>

      {/* --- FLOATING TABS --- */}
      <div className="absolute top-8 left-0 right-0 z-40 flex justify-center">
          <div className="bg-white/40 backdrop-blur-2xl px-2 py-2 rounded-full border border-white/60 shadow-xl flex gap-1">
                {TABS.map((tab, i) => (
                    <button 
                        key={i} 
                        onClick={() => scrollToSlide(i)} 
                        className="relative px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors duration-300"
                    >
                        {i === currentSlide && (
                            <motion.div 
                                layoutId="activeTab"
                                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full -z-10 shadow-lg"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className={i === currentSlide ? 'text-white' : 'text-gray-500'}>{tab}</span>
                    </button>
                ))}
          </div>
      </div>
    </div>
  );
}