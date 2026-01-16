import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { tabContent, type TabKey } from "./TabContents";

// Mapping internal keys to the Visual Labels in your screenshot
const TAB_LABELS: Record<TabKey, string> = {
  jane: "Jane",
  maya: "Maya",
  alex: "Alex",
};

export default function AITabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("jane");

  return (
    <section className="w-full px-4 pt-12 pb-20">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Floating Tab Navigation */}
        <div className="absolute left-0 right-0 -top-6 flex justify-center z-20">
          <div className="bg-white/80 backdrop-blur-sm shadow-sm border border-white/50 rounded-full p-1.5 flex gap-1">
            {(Object.keys(tabContent) as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeTab === tab ? "text-white" : "text-gray-600 hover:text-black"
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

        {/* Main Content Card */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2.5rem] shadow-xl border border-white/50 p-8 md:p-12 lg:p-16 pt-20 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Column: Dynamic Text */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-semibold text-[#2d2d2d] leading-tight mb-6">
                    {tabContent[activeTab].title}
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-6">
                    {tabContent[activeTab].description}
                  </p>
                  
                  {/* Dynamic Bullets */}
                  <div className="space-y-4 mb-8">
                     {tabContent[activeTab].bullets.map((b, i) => (
                        <div key={i} className="flex items-start gap-3">
                           <div className="mt-1 min-w-5 min-h-5 rounded-full bg-black/5 flex items-center justify-center">
                              <Check className="w-3 h-3 text-black" />
                           </div>
                           <span className="text-gray-600 font-medium">{b}</span>
                        </div>
                     ))}
                  </div>
                </div>

                <button className="group flex items-center gap-2 text-gray-400 hover:text-black transition-colors font-medium">
                  {tabContent[activeTab].buttonText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right Column: Dynamic Image */}
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg group">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7 }}
                  src={tabContent[activeTab].image}
                  alt={tabContent[activeTab].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}