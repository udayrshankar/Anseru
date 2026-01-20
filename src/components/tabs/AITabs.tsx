import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { tabContent, type TabKey } from "./TabContents";

const TAB_LABELS: Record<TabKey, string> = {
  jane: "Jane",
  maya: "Maya",
  alex: "Alex",
};

export default function AITabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("jane");

  return (
    <section className="w-full px-6 xl:px-[120px] pt-0 pb-0">
      <div className="max-w-[1400px] mx-auto relative mt-0">
        
       {/* Card Container */ }
       <div className="relative bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-6 md:p-12 min-h-[500px]">
        
         {/* Floating Tabs (positioned at top center, overlapping border) */}
         <div className="absolute left-0 right-0 top-[-3rem] md:-top-6 z-20 flex justify-center px-4">
             <div className="bg-white/80 backdrop-blur-md shadow-sm border border-black/5 rounded-full p-1.5 flex gap-1 overflow-x-auto no-scrollbar max-w-full">
                 {(Object.keys(tabContent) as TabKey[]).map((tab) => (
                 <button
                     key={tab}
                     onClick={() => setActiveTab(tab)}
                     className={`relative flex-1 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                     activeTab === tab 
                         ? "text-white shadow-md" 
                         : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                     }`}
                 >
                     {activeTab === tab && (
                     <motion.div
                         layoutId="pill"
                         transition={{ type: "spring", stiffness: 300, damping: 30 }}
                         className="absolute inset-0 bg-black rounded-full"
                     />
                     )}
                     <span className="relative z-10 whitespace-nowrap">
                     {TAB_LABELS[tab]}
                     </span>
                 </button>
                 ))}
             </div>
         </div>

         {/* Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full pt-8 md:pt-0"
            >
              {/* Left Side: Content */}
              <div className="lg:col-span-6 space-y-6 pt-4">
                 <div>
                    <p className="text-[#2A1638]/60 mb-2 uppercase tracking-wide text-xs font-semibold">
                      {tabContent[activeTab].role}
                    </p>
                    <h2 className="text-3xl md:text-5xl font-medium text-[#2d2d2d] leading-tight mb-4">
                        <span className="text-[#2A1638]">{tabContent[activeTab].title.split(':')[0]}</span>
                        <span className="block text-2xl md:text-3xl mt-1 text-gray-500 font-normal">
                             {tabContent[activeTab].title.split(':')[1]}
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        {tabContent[activeTab].description}
                    </p>
                 </div>

                 {/* Bullets */}
                 <div className="space-y-3 mb-8">
                     {tabContent[activeTab].bullets.map((b, i) => (
                        <div key={i} className="flex items-start gap-3">
                           <div className="mt-1 w-5 h-5 rounded-full bg-[#C4B5FD] flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 text-white" />
                           </div>
                           <span className="text-base text-gray-700">{b}</span>
                        </div>
                     ))}
                 </div>

                 {/* CTA Button */}
                 <button className="bg-[#0f172a] hover:bg-black text-white px-8 py-3.5 rounded-full font-medium transition-colors flex items-center gap-2 group">
                    {tabContent[activeTab].buttonText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>

              {/* Right Side: Media (Image + Video Look) */}
              <div className="lg:col-span-6 relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 group">
                 <motion.img
                   initial={{ scale: 1.05 }}
                   animate={{ scale: 1 }}
                   transition={{ duration: 0.7 }}
                   src={tabContent[activeTab].image}
                   alt={tabContent[activeTab].title}
                   className="absolute inset-0 w-full h-full object-cover"
                 />
                 
                 {/* Video Play Button Overlay Simulation */}
                 <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/5 transition-colors">
                     <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-xl transition-transform group-hover:scale-110">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
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