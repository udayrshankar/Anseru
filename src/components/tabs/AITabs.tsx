import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Play } from "lucide-react";
import { tabContent, type TabKey } from "./TabContents";

export default function AITabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("maya");

  return (
    <section className="w-full px-6 xl:px-[120px]">
      <div className="max-w-[1400px] mx-auto relative">
        
       {/* Card Container */ }
       <div className="relative bg-white rounded-[2rem] shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-gray-100/50 p-6 md:p-12 min-h-[480px]">
        
         {/* Floating Tabs (positioned at top center, overlapping border) */}
         <div className="absolute left-0 right-0 top-[-26px] z-20 flex justify-center px-4">
             <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 rounded-full p-1.5 flex gap-1 overflow-x-auto no-scrollbar w-full max-w-[850px]">
                 {(Object.keys(tabContent) as TabKey[]).map((tab) => (
                 <button
                     key={tab}
                     onClick={() => setActiveTab(tab)}
                     className={`relative flex-1 px-4 md:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                     activeTab === tab 
                         ? "text-white" 
                         : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                     }`}
                 >
                     {activeTab === tab && (
                     <motion.div
                         layoutId="pill"
                         transition={{ type: "spring", stiffness: 300, damping: 30 }}
                         className="absolute inset-0 bg-[#C084FC] rounded-full shadow-md" 
                     />
                     )}
                     <span className="relative z-10 whitespace-nowrap">
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center h-full pt-10"
            >
              {/* Left Side: Content */}
              <div className="lg:col-span-5 space-y-6">
                 <div>
                    <p className="text-[#C084FC] mb-4 uppercase tracking-wider text-[11px] font-bold">
                      {tabContent[activeTab].subtitle}
                    </p>
                    <h2 className="text-3xl md:text-[40px] font-bold text-[#1F2937] leading-[1.1] mb-4 tracking-tight">
                        {tabContent[activeTab].title.split(tabContent[activeTab].highlightWord)[0]}
                        <span className="text-[#C084FC]">{tabContent[activeTab].highlightWord}</span>
                        {tabContent[activeTab].title.split(tabContent[activeTab].highlightWord)[1]}
                    </h2>
                 </div>

                 {/* Bullets */}
                 <div className="space-y-4 mb-8">
                     {tabContent[activeTab].bullets.map((b, i) => (
                        <div key={i} className="flex items-start gap-3">
                           <div className="mt-0.5 w-5 h-5 rounded-full bg-[#C084FC] flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 text-white stroke-[3px]" />
                           </div>
                           <span className="text-[15px] font-medium text-gray-700 leading-snug">{b}</span>
                        </div>
                     ))}
                 </div>

                 {/* CTA Button */}
                 <button className="bg-[#0f172a] hover:bg-black text-white px-8 h-[50px] rounded-full font-semibold text-sm transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group w-fit">
                    {tabContent[activeTab].buttonText}
                 </button>
              </div>

              {/* Right Side: Media */}
              <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 group">
                 <motion.img
                   initial={{ scale: 1.05 }}
                   animate={{ scale: 1 }}
                   transition={{ duration: 0.7 }}
                   src={tabContent[activeTab].image}
                   alt={tabContent[activeTab].title}
                   className="absolute inset-0 w-full h-full object-cover"
                 />
                 
                 {/* Video Play Button Overlay */}
                 <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/5 transition-colors cursor-pointer">
                     <div className="w-20 h-20 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/80 shadow-2xl transition-transform group-hover:scale-110">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
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