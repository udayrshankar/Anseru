import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import AnimationCarousel from "./AnimationCarousel";
import { tabContent, type TabKey } from "./TabContents";

interface AITabsProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
  // setPaused removed as it will be handled by parent
}

export default function AITabs({ activeTab, onTabChange }: AITabsProps) {
  return (
    <section 
      id="ai-tabs"
      className="w-full px-6 xl:px-[120px]"
    >
      <div className="mb-15 text-center max-w-2xl mx-auto">
              <p className="text-sm text-[#2A1638]/60 mb-3 uppercase tracking-widest font-medium">
                Proven Results
              </p>
              <h2 className="text-[#2A1638] text-3xl md:text-5xl font-medium tracking-tight mb-4">
                Two Agents. One Mission
              </h2>
              <p className="text-lg text-[#483953]/70">
                Transform your RFP and security workflows with agentic AI that delivers speed, accuracy, and trust at scale.
              </p>
            </div>
      <div className="max-w-[1400px] mx-auto relative">
        
       {/* Card Container - Enhanced Glassmorphism & Depth */}
        <div className="relative rounded-[30px] md:rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.12),0_10px_40px_rgba(0,0,0,0.04)] p-6 md:p-10 min-h-auto md:min-h-[650px] border border-black/10 bg-white/40 backdrop-blur-xl">
          
          {/* Decorative Gradient Orbs - Animated & Softer */}
          <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#7D23F7]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-100/40 rounded-full blur-[60px] md:blur-[100px] pointer-events-none -z-10" />
          
          {/* Subtle Grid Pattern */}
         
          {/* Floating Island Tabs Navigation */}
          <div className="absolute left-0 right-0 top-[-24px] md:top-[-32px] z-30 flex justify-center px-4">
              <div className="bg-white backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-black/80 rounded-full py-1.5 md:py-2 flex gap-1 items-center max-w-full overflow-x-auto no-scrollbar ring-1 ring-black/[0.03]">
                  {(Object.keys(tabContent) as TabKey[]).map((tab) => (
                  <button
                      key={tab}
                      onClick={() => onTabChange(tab)}
                      className={`relative px-8 md:px-24 xl:px-32 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 z-10 whitespace-nowrap ${
                      activeTab === tab 
                          ? "text-white " 
                          : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
                      }`}
                  >
                      {activeTab === tab && (
                      <motion.div
                          layoutId="pill"
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                          className="absolute inset-0 bg-[#1C32E6] rounded-full mx-1 md:mx-2" 
                      />
                      )}
                      <span className="relative z-10 tracking-wide">
                          {tabContent[tab].label}
                      </span>
                  </button>
                  ))}
              </div>
          </div>

          {/* Content Area */}
           <AnimatePresence mode="wait">
             <motion.div
               key={activeTab}
               initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
               animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
               exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
               transition={{ duration: 0.4, ease: "easeOut" }}
               className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full pt-8 md:pt-0"
             >
               {/* Left Side: Content */}
               <div className="lg:col-span-6 space-y-3">
                  <div className="space-y-1">
                     <div className="inline-flex items-center gap-2 py-1 rounded-full bg-[#1C32E6]/10 border border-[#1C32E6]/20 w-fit">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1C32E6]/70 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1C32E6]"></span>
                        </span>
                        <p className="text-[#2A1638] uppercase tracking-widest text-xs md:text-[15px] font-bold">
                           {tabContent[activeTab].subtitle}
                        </p>
                     </div>
                     
                     <h2 className="text-2xl md:text-3xl lg:text-[38px] font-bold text-[#2A1638] leading-[1.1] tracking-tight">
                         {tabContent[activeTab].title.split(tabContent[activeTab].highlightWord)[0]}
                         <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#1C32E6] to-[#7D23F7]">
                            {tabContent[activeTab].highlightWord}
                            <svg className="absolute w-full h-2.5 -bottom-1 left-0 text-[#1C32E6]/20 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                         </span>
                         {tabContent[activeTab].title.split(tabContent[activeTab].highlightWord)[1]}
                     </h2>
                  </div>

                  {/* Bullets - Modernized */}
                  <div>
                      {tabContent[activeTab].bullets.map((b, i) => (
                         <div key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/60 transition-colors duration-300 border border-transparent hover:border-[#1C32E6]/20 group/item">
                            <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#2A1638] to-[#4c2d61] flex items-center justify-center shrink-0 shadow-md group-hover/item:scale-110 transition-transform">
                               <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm md:text-[15px] font-medium text-[#2A1638] leading-tight">
                                    {b.title}
                                </p>
                                <p className="text-xs md:text-sm text-[#483953]/80 leading-relaxed">
                                    {b.description}
                                </p>
                                <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-gray-100/50 text-[#2A1638] text-[10px] md:text-xs font-semibold rounded-md mt-1 border border-gray-200">
                                    <b.icon className="w-3.5 h-3.5 text-[#1C32E6]" />
                                    {b.metric}
                                </div>
                            </div>
                         </div>
                      ))}
                  </div>

                  {/* CTA Button - Shimmer Effect */}
                  <button className="relative mx-0 md:mx-12 overflow-hidden bg-black hover:bg-gray-800 text-white px-9 h-[52px] rounded-2xl font-bold text-sm md:text-[15px] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 flex items-center justify-center gap-3 w-full md:w-fit group">
                     {tabContent[activeTab].buttonText}
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                  </button>
               </div>

               {/* Right Side: Media - Animation Carousel */}
               <div className="lg:col-span-6 relative mt-5 aspect-[13/10] border-5 border-white rounded-[24px] overflow-hidden ">
                  <div className="scale-90 md:scale-100 -translate-y-6 md:-translate-y-8">
                    <AnimationCarousel />
                  </div>
               </div>

             </motion.div>
           </AnimatePresence>
        </div>

      </div>
    </section>
  );
}