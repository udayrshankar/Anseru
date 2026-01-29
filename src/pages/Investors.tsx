import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import Slide1 from "../components/investors/Slide1";
import Slide2 from "../components/investors/Slide2";
import Slide3 from "../components/investors/Slide3";
import Slide4 from "../components/investors/Slide4";
import Slide5 from "../components/investors/Slide5";
import Slide6 from "../components/investors/Slide6";
import Slide7 from "../components/investors/Slide7";
import Slide8 from "../components/investors/Slide8";
import Slide9 from "../components/investors/Slide9";

const SLIDES = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9];
const TOTAL_SLIDES = SLIDES.length;
const TABS = ["Founders", "Problem", "Why Now", "Product", "How It Works", "ROI", "Market", "Vision", "Ask"];

export default function Investors() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isScrolling = useRef(false);

  // --- MOTION MAGIC ---
  const { scrollXProgress } = useScroll({ container: scrollContainerRef });
  
  // Smoothing the scroll progress for the dashed line
  const smoothProgress = useSpring(scrollXProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  // Dynamic Background Colors based on scroll
  const background = useTransform(
    scrollXProgress,
    [0, 0.5, 1],
    ["#FDFCFE", "#F5F3FF", "#FFF1F2"]
  );

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
          if (evt.deltaY > 0) {
            if (currentSlide < TOTAL_SLIDES - 1) scrollToSlide(currentSlide + 1);
          } else {
            if (currentSlide > 0) scrollToSlide(currentSlide - 1);
          }
          setTimeout(() => { isScrolling.current = false; }, 1000);
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [currentSlide]);

  return (
    <motion.div 
      style={{ backgroundColor: background }}
      className="w-full h-screen overflow-hidden relative font-sans selection:bg-pink-200"
    >
      
      {/* --- ANIMATED DASHED SCROLL-PATH --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          {/* Background Track */}
          <path
            d="M -100 500 C 200 100, 400 900, 1100 500"
            fill="transparent"
            stroke="#E9D5FF"
            strokeWidth="4"
            strokeDasharray="12 12"
          />
          {/* Animated "Drawing" Line */}
          <motion.path
            d="M -100 500 C 200 100, 400 900, 1100 500"
            fill="transparent"
            stroke="url(#deck-gradient)"
            strokeWidth="6"
            strokeDasharray="12 12"
            style={{ pathLength: smoothProgress }}
          />
          <defs>
            <linearGradient id="deck-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* --- FLOATING AMBIENCE BLOBS --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[140px] bg-purple-200/50 mix-blend-multiply" 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, -60, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[140px] bg-pink-200/50 mix-blend-multiply" 
        />
      </div>

      {/* --- LOGO --- */}
      <motion.a 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        href="/" 
        className="fixed top-8 left-8 z-50 font-onest text-2xl font-bold text-gray-900 tracking-tight hover:opacity-70 transition-opacity"
      >
        ANSERU
      </motion.a>

      {/* --- MAIN SCROLL CONTAINER --- */}
      <main 
        ref={scrollContainerRef}
        className="w-full h-screen overflow-x-hidden flex scrollbar-hide relative z-10"
        style={{ scrollBehavior: 'smooth' }}
      >
        {SLIDES.map((Slide, index) => (
          <div key={index} className="min-w-full h-full flex flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-6xl h-[70vh] flex items-center justify-center p-8"
            >
              <Slide />
            </motion.div>
          </div>
        ))}
      </main>

      {/* --- INTERACTIVE TABS --- */}
      <nav className="absolute top-8 left-0 right-0 z-40 flex justify-center pointer-events-none">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/40 backdrop-blur-2xl px-3 py-2 rounded-full border border-white/60 shadow-2xl flex gap-1 pointer-events-auto overflow-x-auto max-w-[90vw] scrollbar-hide"
        >
          {TABS.map((tab, i) => {
            const isActive = i === currentSlide;
            return (
              <button 
                key={i} 
                onClick={() => scrollToSlide(i)} 
                className="relative px-5 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors duration-300 whitespace-nowrap outline-none"
              >
                <span className={`relative z-10 ${isActive ? 'text-white' : 'text-gray-500 hover:text-purple-600'}`}>
                  {tab}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-lg shadow-purple-200"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>
      </nav>


      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </motion.div>
  );
}