import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Play } from "lucide-react";
import { tabContent, type TabKey } from "./TabContents";

export default function AITabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("maya");

  return (
    <section className="w-full px-6 xl:px-[120px]">
      <div className="max-w-[1400px] mx-auto relative">
        
       {/* Card Container - Enhanced Glassmorphism & Depth */}
        <div className="relative rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.12),0_10px_40px_rgba(0,0,0,0.04)] p-8 md:p-10 min-h-[500px] border border-white/60 bg-white/40 backdrop-blur-xl">
          
          {/* Decorative Gradient Orbs - Animated & Softer */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none -z-10" />
          
          {/* Subtle Grid Pattern */}
         
          {/* Floating Island Tabs Navigation */}
          <div className="absolute left-0 right-0 top-[-32px] z-30 flex justify-center px-4">
              <div className="bg-white/90 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-white/60 rounded-full py-2 flex gap-1 items-center max-w-full overflow-x-auto no-scrollbar ring-1 ring-black/[0.03]">
                  {(Object.keys(tabContent) as TabKey[]).map((tab) => (
                  <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`relative px-20 py-3 rounded-full text-sm font-semibold transition-all duration-300 z-10 ${
                      activeTab === tab 
                          ? "text-white shadow-[0_4px_12px_rgba(42,22,56,0.3)]" 
                          : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
                      }`}
                  >
                      {activeTab === tab && (
                      <motion.div
                          layoutId="pill"
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                          className="absolute inset-0 bg-[#2A1638] rounded-full" 
                      />
                      )}
                      <span className="relative z-10 whitespace-nowrap tracking-wide">
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
               className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full"
             >
               {/* Left Side: Content */}
               <div className="lg:col-span-4 space-y-6">
                  <div className="space-y-1">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 w-fit">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        <p className="text-purple-700 uppercase tracking-widest text-[10px] font-bold">
                           {tabContent[activeTab].subtitle}
                        </p>
                     </div>
                     
                     <h2 className="text-3xl md:text-[38px] font-bold text-[#2A1638] leading-[1.1] tracking-tight">
                         {tabContent[activeTab].title.split(tabContent[activeTab].highlightWord)[0]}
                         <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                            {tabContent[activeTab].highlightWord}
                            <svg className="absolute w-full h-2.5 -bottom-1 left-0 text-purple-200 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                         </span>
                         {tabContent[activeTab].title.split(tabContent[activeTab].highlightWord)[1]}
                     </h2>
                  </div>

                  {/* Bullets - Modernized */}
                  <div>
                      {tabContent[activeTab].bullets.map((b, i) => (
                         <div key={i} className="flex items-start gap-4 p-2 rounded-xl hover:bg-white/60 transition-colors duration-300 border border-transparent hover:border-purple-100/50">
                            <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#2A1638] to-[#4c2d61] flex items-center justify-center shrink-0 shadow-md">
                               <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                            </div>
                            <span className="text-[15px] font-medium text-[#483953] leading-relaxed">{b}</span>
                         </div>
                      ))}
                  </div>

                  {/* CTA Button - Shimmer Effect */}
                  <button className="relative overflow-hidden bg-[#2A1638] hover:bg-[#3d2151] text-white px-9 h-[52px] rounded-2xl font-bold text-[15px] transition-all shadow-[0_10px_30px_rgba(42,22,56,0.2)] hover:shadow-[0_20px_40px_rgba(42,22,56,0.3)] hover:-translate-y-1 flex items-center gap-3 w-fit group">
                     {tabContent[activeTab].buttonText}
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                  </button>
               </div>

               {/* Right Side: Media - Realistic Player Header/Footer */}
               <div className="lg:col-span-8 relative aspect-[16/10] rounded-[24px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] border-[6px] border-white/50 bg-gray-950 group transition-all duration-500 hover:shadow-[0_40px_90px_rgba(0,0,0,0.18)]">
                  <motion.img
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7 }}
                    src={tabContent[activeTab].image}
                    alt={tabContent[activeTab].title}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Top Bar (Mock UI) */}
                  <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-black/60 to-transparent flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <span className="text-white/80 text-xs font-mono bg-black/30 px-2 py-1 rounded backdrop-blur-md">REC ● Anseru Pilot</span>
                       <div className="flex gap-3">
                           <div className="w-2 h-2 rounded-full bg-red-500/80" />
                           <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                           <div className="w-2 h-2 rounded-full bg-green-500/80" />
                       </div>
                  </div>

                  {/* Video Interface Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  
                  {/* Play Button - Frosted Glass */}
                  <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 cursor-pointer">
                      <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:bg-white/20 transition-all">
                         <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative left-0.5">
                             <Play className="w-7 h-7 text-[#2A1638] fill-[#2A1638]" />
                         </div>
                      </div>
                  </div>

                  {/* Bottom Bar Controls - Detailed Mockup */}
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 pointer-events-none opacity-90">
                      {/* Timeline */}
                      <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                          <div className="h-full w-[35%] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full relative">
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-md" />
                          </div>
                      </div>
                      
                      {/* Controls Row */}
                      <div className="flex items-center justify-between text-white/90">
                          <div className="flex items-center gap-4 text-xs font-mono">
                             <span className="font-bold">01:24</span>
                             <span className="text-white/50">/</span>
                             <span>02:30</span>
                          </div>
                          
                          {/* Fake Icons */}
                          <div className="flex gap-4 opacity-70">
                             <div className="w-4 h-4 border-2 border-current rounded-[2px]" /> {/* CC */}
                             <div className="w-4 h-4 border-2 border-current rounded-full border-t-transparent animate-spin-slow" /> {/* Settings */}
                             <div className="w-4 h-4 border-2 border-current" /> {/* Fullscreen */}
                          </div>
                      </div>
                  </div>
               </div>

             </motion.div>
           </AnimatePresence>
        </div>

      </div>
    </section>
  );
}