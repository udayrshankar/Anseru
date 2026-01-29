import { useRef, useEffect, useState } from "react";

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
        if (Math.abs(evt.deltaY) > 20) {
            isScrolling.current = true;
            if (evt.deltaY > 0) { if (currentSlide < TOTAL_SLIDES - 1) scrollToSlide(currentSlide + 1); } 
            else { if (currentSlide > 0) scrollToSlide(currentSlide - 1); }
            setTimeout(() => { isScrolling.current = false; }, 800);
        }
      }
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [currentSlide]);

  return (
    <div className="w-full h-screen overflow-hidden bg-[#FDFCFE] relative font-sans selection:bg-pink-200">
      
      {/* --- GLOBAL LAVENDER ATMOSPHERE --- */}
      <div className="absolute inset-0 pointer-events-none transition-all duration-[1500ms] ease-in-out z-0">
          {/* Top Left Blob */}
          <div className={`absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] mix-blend-multiply opacity-60 animate-[pulse_8s_infinite] transition-colors duration-1000
            ${currentSlide % 2 === 0 ? 'bg-purple-200' : 'bg-pink-200'}`} 
          />
          {/* Bottom Right Blob */}
          <div className={`absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] mix-blend-multiply opacity-60 animate-[pulse_10s_infinite_reverse] transition-colors duration-1000
            ${currentSlide % 2 === 0 ? 'bg-pink-200' : 'bg-indigo-200'}`} 
          />
          {/* Texture Overlay */}
          <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(230,200,250,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(230,200,250,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Navigation & Logo */}
      <a href="/" className="fixed top-8 left-8 z-50 font-onest text-2xl font-bold text-gray-900 tracking-tight hover:opacity-70 transition-opacity">ANSERU</a>

      {/* --- MAIN SCROLL CONTAINER --- */}
      <main 
        ref={scrollContainerRef}
        className="w-full h-screen overflow-x-hidden flex scrollbar-hide relative z-10"
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* SAFE ZONE ENFORCEMENT: 15% Top / 70% Content / 15% Bottom */}
        <div className="min-w-full h-full flex flex-col justify-center"><div className="h-[70vh] flex items-center justify-center"><Slide1 /></div></div>
        <div className="min-w-full h-full flex flex-col justify-center"><div className="h-[70vh] flex items-center justify-center"><Slide2 /></div></div>
        <div className="min-w-full h-full flex flex-col justify-center"><div className="h-[70vh] flex items-center justify-center"><Slide3 /></div></div>
        <div className="min-w-full h-full flex flex-col justify-center"><div className="h-[70vh] flex items-center justify-center"><Slide4 /></div></div>
        <div className="min-w-full h-full flex flex-col justify-center"><div className="h-[70vh] flex items-center justify-center"><Slide5 /></div></div>
        <div className="min-w-full h-full flex flex-col justify-center"><div className="h-[70vh] flex items-center justify-center"><Slide6 /></div></div>
        <div className="min-w-full h-full flex flex-col justify-center"><div className="h-[70vh] flex items-center justify-center"><Slide7 /></div></div>
        <div className="min-w-full h-full flex flex-col justify-center"><div className="h-[70vh] flex items-center justify-center"><Slide8 /></div></div>
        <div className="min-w-full h-full flex flex-col justify-center"><div className="h-[70vh] flex items-center justify-center"><Slide9 /></div></div>
      </main>



      {/* Tabs */}
      <div className="absolute top-8 left-0 right-0 z-40 flex justify-center pointer-events-none">
          <div className="bg-white/40 backdrop-blur-xl px-2 py-2 rounded-full border border-white/60 shadow-sm flex gap-1 pointer-events-auto overflow-x-auto max-w-[80vw] scrollbar-hide">
                {TABS.map((tab, i) => (
                    <button key={i} onClick={() => scrollToSlide(i)} className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-500 whitespace-nowrap ${i === currentSlide ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-pink-200' : 'text-gray-500 hover:bg-white/50 hover:text-purple-600'}`}>
                        {tab}
                    </button>
                ))}
          </div>
      </div>
      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
}