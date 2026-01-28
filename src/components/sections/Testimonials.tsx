import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Play, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Anseru cut our RFP response time by 60%. The AI understands our security posture better than some of our own team members.",
    author: "Sarah Jenkins",
    role: "VP of Sales Engineering",
    company: "CloudScale",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    video: "https://www.youtube.com/watch?v=J98pT19u84Y" // Example tech/office stock video on YouTube
  },
  {
    id: 2,
    quote: "Finally, a tool that doesn't just hallucinate answers. The reference linking to our actual policy docs is a game changer for compliance.",
    author: "David Chen",
    role: "Chief Information Security Officer",
    company: "FinTech Global",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-308-large.mp4"
  },
  {
    id: 3,
    quote: "We use it for every security questionnaire. It's like having an extra dedicated security engineer who works 24/7.",
    author: "Elena Rodriguez",
    role: "Director of Compliance",
    company: "HealthVault",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    video: "https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-laptop-at-home-office-268-large.mp4"
  },
  {
    id: 4,
    quote: "The brand voice customization is spot on. It sounds exactly like our best sales reps wrote it, but in seconds.",
    author: "Mark Thompson",
    role: "Head of Revenue Operations",
    company: "SaaSify",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
    video: "https://assets.mixkit.co/videos/preview/mixkit-group-of-people-working-together-in-an-office-4896-large.mp4"
  },
  {
    id: 5,
    quote: "Onboarding was seamless. We uploaded our knowledge base and were getting accurate drafts within the first hour.",
    author: "Jessica Lee",
    role: "Sales Enablement Lead",
    company: "TechFlow",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702f",
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-typing-on-laptop-keyboard-4893-large.mp4"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Helper to extract YouTube ID
  const getYouTubeId = (url: string) => {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;
  };

  const isYouTube = (url: string) => !!getYouTubeId(url);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="bg-white scale-80 overflow-hidden mt-0 mb-20 px-6 xl:px-[120px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#2A1638]">
            Trusted by fast-growing teams
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            See how companies are automating their trust and sales workflows.
          </p>
        </div>

        <div 
            className="relative bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden min-h-[500px]"
        >
            <div className="grid lg:grid-cols-2 h-full">
                {/* Left Side: Content */}
                <div className="p-10 md:p-16 flex flex-col justify-center relative bg-white z-10">
                   <AnimatePresence mode="wait">
                       <motion.div
                           key={activeIndex}
                           initial={{ opacity: 0, x: -20 }}
                           animate={{ opacity: 1, x: 0 }}
                           exit={{ opacity: 0, x: 20 }}
                           transition={{ duration: 0.5 }}
                           className="space-y-8"
                       >
                           <Quote className="w-12 h-12 text-[#C084FC] opacity-50" fill="currentColor" />
                           <p className="text-xl md:text-3xl font-medium text-[#2A1638] leading-relaxed">
                               "{TESTIMONIALS[activeIndex].quote}"
                           </p>
                           
                           <div className="flex items-center gap-4 pt-4">
                               <img 
                                   src={TESTIMONIALS[activeIndex].avatar} 
                                   alt={TESTIMONIALS[activeIndex].author} 
                                   className="w-14 h-14 rounded-full object-cover border-2 border-gray-100" 
                               />
                               <div>
                                   <h4 className="font-bold text-lg text-gray-900">{TESTIMONIALS[activeIndex].author}</h4>
                                   <p className="text-gray-500">{TESTIMONIALS[activeIndex].role}, {TESTIMONIALS[activeIndex].company}</p>
                               </div>
                           </div>
                       </motion.div>
                   </AnimatePresence>
                   
                   {/* Navigation Controls */}
                   <div className="flex items-center gap-6 mt-12">
                       {/* Prev Button */}
                       <button 
                         onClick={prevSlide}
                         className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                       >
                         <ChevronLeft className="w-5 h-5 text-gray-600" />
                       </button>

                       {/* Dots */}
                       <div className="flex gap-3">
                           {TESTIMONIALS.map((_, i) => (
                               <button 
                                   key={i}
                                   onClick={() => setActiveIndex(i)}
                                   className={`h-2.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-[#C084FC]" : "w-2.5 bg-gray-200 hover:bg-gray-300"}`}
                               />
                           ))}
                       </div>

                       {/* Next Button */}
                       <button 
                         onClick={nextSlide}
                         className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                       >
                         <ChevronRight className="w-5 h-5 text-gray-600" />
                       </button>
                   </div>
                </div>

                {/* Right Side: Video */}
                <div className="relative h-[400px] lg:h-auto bg-black overflow-hidden group">
                   <AnimatePresence mode="wait">
                       <motion.div
                           key={activeIndex}
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.5 }}
                           className="absolute inset-0 w-full h-full"
                       >
                           <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
                           
                           {isYouTube(TESTIMONIALS[activeIndex].video) ? (
                               <iframe
                                   src={`https://www.youtube.com/embed/${getYouTubeId(TESTIMONIALS[activeIndex].video)}?autoplay=1&mute=1&loop=1&playlist=${getYouTubeId(TESTIMONIALS[activeIndex].video)}&controls=0&showinfo=0&rel=0`}
                                   className="w-full h-full object-cover pointer-events-auto"
                                   title="Testimonial Video"
                                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                   allowFullScreen
                               />
                           ) : (
                               <video 
                                   src={TESTIMONIALS[activeIndex].video}
                                   className="w-full h-full object-cover"
                                   autoPlay
                                   muted
                                   loop
                                   playsInline
                               />
                           )}
                           
                           {/* Play Button Overlay (Optional - YouTube usually has its own, but we can keep for consistency or visual flair if needed. 
                               For YouTube, clicking the overlay might not play the iframe unless we use JS API. 
                               For now, we rely on iframe's own click/autoplay.
                               I will hide this overlay for YouTube to avoid blocking the iframe interaction) 
                           */}
                           {!isYouTube(TESTIMONIALS[activeIndex].video) && (
                               <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                                   <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/50">
                                       <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
                                   </div>
                               </div>
                           )}
                       </motion.div>
                   </AnimatePresence>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
