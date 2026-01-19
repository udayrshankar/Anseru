import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Close Deals Faster",
    desc: "We answer most RFP and security questions automatically",
    path: "M109.62 99.2827L109.548 99.8462H150.368L84.271 178.989L92.8071 120.518L92.8911 119.946H57.8823L117.936 33.3892L109.62 99.2827ZM109.045 55.3228L68.3843 114.007L67.8403 114.792H98.769L92.2573 159.937L92.0054 161.683L93.1362 160.329L138.633 105.821L139.318 105H103.651L109.953 55.6704L109.045 55.3228Z"
  },
  {
    title: "Build Instant Trust",
    desc: "We accelerate deal velocity by 3×",
    path: "M163.904 52.2168V97.5879C163.904 117.12 158.331 134.601 147.185 150.045C136.066 165.451 122.172 175.768 105.499 181.022C88.8272 175.768 74.9338 165.451 63.8154 150.045C52.6692 134.601 47.0958 117.12 47.0957 97.5879V52.2168L105.5 30.4248L163.904 52.2168ZM137.321 87.0371L96.2686 128.091L73.6777 105.5L77.3662 101.811L96.2686 120.713L96.6221 120.359L133.633 83.3477L137.321 87.0371ZM158.75 55.6992L158.424 55.5781L105.674 36.0166L105.5 35.9521L105.326 36.0166L52.5762 55.5781L52.25 55.6992V97.5879C52.2501 115.418 57.2618 131.635 67.2832 146.225C77.3034 160.813 89.9929 170.558 105.349 175.431L105.5 175.479L105.651 175.431C121.007 170.558 133.696 160.813 143.716 146.225C153.737 131.635 158.75 115.418 158.75 97.5879V55.6992Z"
  },
  {
    title: "Accelerated Onboarding",
    desc: "We reclaim hours of manual work every day",
    path: "M109.62 99.2827L109.548 99.8462H150.368L84.271 178.989L92.8071 120.518L92.8911 119.946H57.8823L117.936 33.3892L109.62 99.2827ZM109.045 55.3228L68.3843 114.007L67.8403 114.792H98.769L92.2573 159.937L92.0054 161.683L93.1362 160.329L138.633 105.821L139.318 105H103.651L109.953 55.6704L109.045 55.3228Z"
  },
  {
    title: "Smarter Support",
    desc: "We ensure every response is accurate, consistent, and compliant",
    path: "M163.904 52.2168V97.5879C163.904 117.12 158.331 134.601 147.185 150.045C136.066 165.451 122.172 175.768 105.499 181.022C88.8272 175.768 74.9338 165.451 63.8154 150.045C52.6692 134.601 47.0958 117.12 47.0957 97.5879V52.2168L105.5 30.4248L163.904 52.2168ZM137.321 87.0371L96.2686 128.091L73.6777 105.5L77.3662 101.811L96.2686 120.713L96.6221 120.359L133.633 83.3477L137.321 87.0371ZM158.75 55.6992L158.424 55.5781L105.674 36.0166L105.5 35.9521L105.326 36.0166L52.5762 55.5781L52.25 55.6992V97.5879C52.2501 115.418 57.2618 131.635 67.2832 146.225C77.3034 160.813 89.9929 170.558 105.349 175.431L105.5 175.479L105.651 175.431C121.007 170.558 133.696 160.813 143.716 146.225C153.737 131.635 158.75 115.418 158.75 97.5879V55.6992Z"
  }
];

const WhyAnseru = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
  
    useEffect(() => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    }, []);
  
    return (
      <div className="bg-[#f6f6f8]">
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 relative z-10">
            <div className="mb-12 md:pl-2">
              <p className="text-smalls text-black mb-2 opacity-60 uppercase tracking-widest font-medium">
                Proven Results
              </p>
              <h2 className="text-[#483953] text-5xl md:text-6xl font-medium tracking-tight">
                Why Anseru?
              </h2>
            </div>
  
            {/* Draggable Carousel */}
            <motion.div 
                ref={carouselRef} 
                className="overflow-hidden cursor-grab active:cursor-grabbing"
            >
              <motion.div 
                drag="x" 
                dragConstraints={{ right: 0, left: -width }} 
                className="flex gap-8"
              >
                {cards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="relative rounded-[32px] bg-white p-10 overflow-hidden min-w-[320px] md:min-w-[400px] min-h-[420px] flex flex-col justify-between flex-shrink-0 shadow-sm border border-black/[0.04] group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                     {/* Subtle Background Pattern/Icon */}
                    <svg
                      className="absolute -bottom-10 -right-10 w-64 h-64 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500 rotate-12"
                      viewBox="0 0 211 211"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={card.path} stroke="currentColor" className="text-[#483953]" strokeWidth="2" />
                    </svg>
  
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-[#F6F6F8] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                             <svg className="w-8 h-8 text-[#483953]" viewBox="0 0 211 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d={card.path} fill="currentColor" />
                             </svg>
                        </div>
                        
                        <h3 className="text-[#483953] text-3xl font-medium mb-4 leading-tight">
                        {card.title}
                        </h3>
                    </div>
  
                    <p className="text-body text-[#483953]/80 relative z-10 font-normal leading-relaxed">
                        {card.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  };

export default WhyAnseru;