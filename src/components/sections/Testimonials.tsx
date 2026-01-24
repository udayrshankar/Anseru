import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Anseru cut our RFP response time by 60%. The AI understands our security posture better than some of our own team members.",
    author: "Sarah Jenkins",
    role: "VP of Sales Engineering",
    company: "CloudScale",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  },
  {
    id: 2,
    quote: "Finally, a tool that doesn't just hallucinate answers. The reference linking to our actual policy docs is a game changer for compliance.",
    author: "David Chen",
    role: "Chief Information Security Officer",
    company: "FinTech Global",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
  {
    id: 3,
    quote: "We use it for every security questionnaire. It's like having an extra dedicated security engineer who works 24/7.",
    author: "Elena Rodriguez",
    role: "Director of Compliance",
    company: "HealthVault",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d"
  },
  {
    id: 4,
    quote: "The brand voice customization is spot on. It sounds exactly like our best sales reps wrote it, but in seconds.",
    author: "Mark Thompson",
    role: "Head of Revenue Operations",
    company: "SaaSify",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c"
  },
  {
    id: 5,
    quote: "Onboarding was seamless. We uploaded our knowledge base and were getting accurate drafts within the first hour.",
    author: "Jessica Lee",
    role: "Sales Enablement Lead",
    company: "TechFlow",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702f"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const duration = 5000; // 5 seconds per slide

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, duration);
    return () => clearInterval(timer);
  }, []);

  // Calculate the position for *every* card to ensure smooth animating
  // We want to render all of them, but hidden ones should be positioned logically
  // so they can slide in from the correct side.
  
  const getCardStyle = (index: number) => {
      // Calculate circular distance from active index
      // e.g. active=0. index=4 (length 5). Distance should be -1 (Left), not +4.
      const len = TESTIMONIALS.length;
      
      // We want a result between -floor(len/2) and +floor(len/2)
      let diff = (index - activeIndex) % len;
      if (diff > len / 2) diff -= len;
      if (diff < -len / 2) diff += len;

      // Determine visual state based on diff
      // 0 = Center
      // -1 = Left
      // 1 = Right
      // Others = Hidden (but positioned behind for smooth entry)
      
      let x = "0%";
      let scale = 1;
      let opacity = 1;
      let zIndex = 10;
      let filter = "blur(0px)";

      if (diff === 0) {
          x = "0%";
          scale = 1;
          opacity = 1;
          zIndex = 20;
          filter = "blur(0px)";
      } else if (diff === -1) {
          x = "-65%"; // Slightly more spacing
          scale = 0.8;
          opacity = 0.4;
          zIndex = 10;
          filter = "blur(0px)";
      } else if (diff === 1) {
          x = "65%";
          scale = 0.8;
          opacity = 0.4;
          zIndex = 10;
          filter = "blur(0px)";
      } else {
          // Cards further away.
          // Position them behind the center/side cards so they can "flow" through
          // If diff is -2, it should be way left. If +2, way right.
          x = diff < 0 ? "-120%" : "120%";
          scale = 0.6;
          opacity = 0;
          zIndex = 0;
      }

      return { x, scale, opacity, zIndex, filter };
  };

  return (
    <section className="bg-white overflow-hidden mt-12 mb-12">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-[120px] text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#2A1638]">
          Trusted by fast-growing enterprise teams
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          See how companies are automating their trust and sales workflows.
        </p>
      </div>

      <div className="relative h-[400px] flex items-center justify-center mt-5">
        <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
             <AnimatePresence initial={false} mode="popLayout">
                 {TESTIMONIALS.map((t, i) => {
                     const style = getCardStyle(i);
                     
                     // Optimization: Only render items relevant to the transition (visible + immediate neighbors)
                     // But for perfect smoothness on wraps, rendering all with computed positions is safer usually.
                     // Let's render all and let Framer handle the shared layout animations.
                     
                     return (
                         <motion.div
                            key={t.id}
                            initial={false} // Let it interpolate from previous state
                            animate={style}
                            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }} // Custom bezier for premium feel
                            className="absolute w-[90%] md:w-[600px] bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col justify-between h-[320px]"
                         >
                             {/* Timer Border for Active Card (only render if Active) */}
                             {i === activeIndex && (
                                 <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl overflow-visible">
                                     <rect 
                                        x="0" y="0" width="100%" height="100%" 
                                        rx="24" ry="24" 
                                        fill="none" 
                                        stroke="#E8D4F5" 
                                        strokeWidth="4" 
                                        className="opacity-30"
                                     />
                                     <motion.rect 
                                        x="0" y="0" width="100%" height="100%" 
                                        rx="24" ry="24" 
                                        fill="none" 
                                        stroke="#C084FC" 
                                        strokeWidth="4"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: duration / 1000, ease: "linear" }}
                                        key={activeIndex} 
                                     />
                                 </svg>
                             )}

                             <div className="relative">
                                 <Quote className="w-10 h-10 text-purple-100 absolute -top-2 -left-2 -z-10" fill="currentColor" />
                                 <p className="text-xl md:text-2xl font-medium text-[#2A1638] leading-relaxed relative z-10">
                                     "{t.quote}"
                                 </p>
                             </div>

                             <div className="flex items-center gap-4 mt-6">
                                 <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full object-cover border border-gray-100" />
                                 <div>
                                     <h4 className="font-bold text-gray-900">{t.author}</h4>
                                     <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
                                 </div>
                             </div>
                         </motion.div>
                     );
                 })}
             </AnimatePresence>
        </div>
      </div>

      {/* Manual Indicators */}
      <div className="flex justify-center gap-3">
          {TESTIMONIALS.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-[#C084FC]" : "w-2 bg-gray-200"}`}
              />
          ))}
      </div>
    </section>
  );
};

export default Testimonials;
