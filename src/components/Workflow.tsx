import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import AIHubAnimation from "./animation/AIHubAnimation";
import bgImage from "../assets/bg2.png"; 

// --- COMPONENT: PLACEHOLDER BOX ---
const PlaceholderBox = ({ label }: { label: string }) => (
  <div className="relative w-full aspect-[16/10] rounded-xl border border-gray-200 bg-white/50 backdrop-blur-md shadow-sm overflow-hidden flex flex-col items-center justify-center group ml-auto">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50/40 opacity-80" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
    
    <div className="relative z-10 flex flex-col items-center gap-4 transition-transform duration-500 group-hover:scale-105">
      <div className="w-12 h-12 rounded-lg bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center text-xl">
        ⚡
      </div>
      <div className="text-center">
         <p className="text-sm font-semibold text-gray-900">{label}</p>
         <p className="text-xs text-gray-400 mt-1">Feature visualization</p>
      </div>
    </div>
    
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200/50 rounded-xl transition-colors duration-500 pointer-events-none" />
  </div>
);

// --- COMPONENT: ACTIVE TIMELINE DOT ---
const ActiveTimelineNode = ({ progress, threshold }: { progress: MotionValue<number>, threshold: number }) => {
  const backgroundColor = useTransform(progress, [threshold - 0.05, threshold], ["#ffffff", "#000000"]);
  const borderColor = useTransform(progress, [threshold - 0.05, threshold], ["#e5e7eb", "#000000"]);
  const scale = useTransform(progress, [threshold - 0.05, threshold], [1, 1.2]);
  const boxShadow = useTransform(
    progress, 
    [threshold - 0.05, threshold], 
    ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 12px rgba(147, 51, 234, 0.5)"]
  );

  return (
    <motion.div 
      style={{ backgroundColor, borderColor, scale, boxShadow }}
      className="absolute left-[-20px] lg:left-[-30px] top-2 w-4 h-4 border-[3px] rounded-full z-20 -translate-x-1/2"
    />
  );
};

// --- COMPONENT: PIPE CONNECTOR ---
const PipeConnector = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible z-0">
      <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
        <path
          d={`
            M 50% -400          
            V 40                
            Q 50% 70 48% 70     
            H 60                
            Q 30 70 30 100      
            V 150               
          `}
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="50%" cy="-400" r="3" fill="black" />
      </svg>
    </div>
  );
};

// --- MAIN WORKFLOW COMPONENT ---
const Workflow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 90%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const THRESHOLDS = [0.05, 0.30, 0.55, 0.80];

  return (
    <div className="relative pb-32 overflow-hidden">
      
      {/* --- 1. BACKGROUND IMAGE LAYER --- */}
      <div 
        className="absolute inset-0 z-0 max-w-[1373px] mx-auto rounded-[50px]"
        style={{
           backgroundImage: `url(${bgImage})`,
           backgroundSize: '100% auto', // Streches X to 100%, keeps Y proportional (no vertical distortion)
           backgroundPosition: 'bottom center', // Anchors image to top so it flows down naturally
           backgroundRepeat: 'no-repeat'
        }}
      />

      {/* --- 2. WHITE OVERLAY --- */}
      <div className="absolute inset-0 z-0 bg-white/50 backdrop-blur-[1px]" />

      {/* --- 3. MAIN CONTENT --- */}
      <div className="relative z-10">
          
          {/* --- HEADER (Hub Animation) --- */}
          <div className="relative pt-20 pb-0 flex justify-center items-center overflow-visible z-20">
            <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-pink-50/40 via-purple-50/20 to-transparent pointer-events-none z-0" />
            <div className="relative z-10 w-full max-w-4xl px-4 flex justify-center scale-[0.65] md:scale-90 lg:scale-100 origin-center">
              <AIHubAnimation />
            </div>
          </div>

          {/* --- TIMELINE SECTION --- */}
          <div ref={containerRef} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            
            <div className="hidden lg:block relative w-full z-0">
              <PipeConnector />
            </div>

            <div className="grid grid-cols-[40px_1fr] lg:grid-cols-[60px_1fr] gap-0">
              
              <div className="relative w-full h-full">
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 -translate-x-1/2" />
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 origin-top">
                    <motion.div 
                      style={{ scaleY, transformOrigin: "top" }} 
                      className="w-full h-full bg-black origin-top"
                    />
                </div>
              </div>

              <div className="space-y-24 lg:space-y-32 pb-20 pt-10">
                  
                  {/* STEP 1 */}
                  <div className="group relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    <ActiveTimelineNode progress={scrollYProgress} threshold={THRESHOLDS[0]} />
                    
                    <div className="lg:pr-8 pt-1">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }} 
                          whileInView={{ opacity: 1, x: 0 }} 
                          viewport={{ once: true, margin: "-10%" }}
                          transition={{ duration: 0.5 }}
                        >
                          <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3">AI-Drafted Responses</h3>
                          <p className="text-lg text-gray-500 leading-relaxed">
                              Generate clear, context-aware replies instantly. Our engine ingests your knowledge base to keep communication sharp, consistent, and on-brand.
                          </p>
                        </motion.div>
                    </div>
                    <div className="relative">
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }} 
                          whileInView={{ opacity: 1, y: 0 }} 
                          viewport={{ once: true, margin: "-10%" }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <PlaceholderBox label="Smart Drafting Engine" />
                        </motion.div>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div className="group relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    <ActiveTimelineNode progress={scrollYProgress} threshold={THRESHOLDS[1]} />
                    
                    <div className="lg:pr-8 pt-1">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }} 
                          whileInView={{ opacity: 1, x: 0 }} 
                          viewport={{ once: true, margin: "-10%" }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="inline-flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full mb-4 border border-purple-100">
                              <span className="text-xs font-bold text-purple-700 uppercase tracking-wide">Context Aware</span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3">Smart Personalization</h3>
                          <p className="text-lg text-gray-500 leading-relaxed">
                              Tailor every response to the customer's intent. The AI adapts tone and detail level ensuring conversations feel human, not robotic.
                          </p>
                        </motion.div>
                    </div>
                    <div className="relative">
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }} 
                          whileInView={{ opacity: 1, y: 0 }} 
                          viewport={{ once: true, margin: "-10%" }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <PlaceholderBox label="Personalization Core" />
                        </motion.div>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div className="group relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    <ActiveTimelineNode progress={scrollYProgress} threshold={THRESHOLDS[2]} />
                    
                    <div className="lg:pr-8 pt-1">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }} 
                          whileInView={{ opacity: 1, x: 0 }} 
                          viewport={{ once: true, margin: "-10%" }}
                          transition={{ duration: 0.5 }}
                        >
                          <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3">Team Consistency</h3>
                          <p className="text-lg text-gray-500 leading-relaxed">
                              Maintain a unified brand voice across sales, support, and onboarding. Whether it's a seasoned rep or a new hire, the quality remains top-tier.
                          </p>
                        </motion.div>
                    </div>
                    <div className="relative">
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }} 
                          whileInView={{ opacity: 1, y: 0 }} 
                          viewport={{ once: true, margin: "-10%" }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <PlaceholderBox label="Brand Voice Guard" />
                        </motion.div>
                    </div>
                  </div>

                  {/* STEP 4 */}
                  <div className="group relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    <ActiveTimelineNode progress={scrollYProgress} threshold={THRESHOLDS[3]} />
                    
                    <div className="lg:pr-8 pt-1">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }} 
                          whileInView={{ opacity: 1, x: 0 }} 
                          viewport={{ once: true, margin: "-10%" }}
                          transition={{ duration: 0.5 }}
                        >
                          <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3">Workflow Integration</h3>
                          <p className="text-lg text-gray-500 leading-relaxed">
                              Plug seamlessly into CRM and support tools. Teams can draft, edit, and send responses without ever breaking their existing flow.
                          </p>
                        </motion.div>
                    </div>
                    <div className="relative">
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }} 
                          whileInView={{ opacity: 1, y: 0 }} 
                          viewport={{ once: true, margin: "-10%" }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <PlaceholderBox label="Workflow Integrations" />
                        </motion.div>
                    </div>
                  </div>

              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Workflow;