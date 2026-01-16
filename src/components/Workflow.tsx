import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { CheckCircle2, Lock, Users, HardDrive, FileText, Slack } from "lucide-react";
import hubImage from "../assets/Group 54.png"; 

// --- UI CARD COMPONENTS (Kept consistent) ---

const ResponseCard = () => (
  <div className="relative w-full max-w-[480px]">
    <div className="absolute inset-0 bg-blue-100/50 blur-2xl rounded-full scale-90 translate-y-4" />
    <div className="relative bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6 border-b border-gray-50 pb-4">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-[#FFE4E6] flex items-center justify-center text-[#E11D48] font-bold text-sm">JD</div>
             <div>
               <h4 className="text-sm font-bold text-gray-900">Jane Doe</h4>
               <p className="text-xs text-gray-500">Procurement Manager</p>
             </div>
          </div>
          <div className="text-xs text-gray-400">Just now</div>
        </div>
        <div className="flex gap-4">
           <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center text-purple-600 shrink-0 mt-1">
             <span className="text-xs font-bold">AI</span>
           </div>
           <div className="bg-gray-50 rounded-2xl rounded-tl-sm p-4 text-[13px] leading-relaxed text-gray-700 w-full">
             <p className="mb-2"><span className="font-semibold text-gray-900">Hi Jane,</span></p>
             <p>We've thoroughly reviewed the security questionnaire you sent over. I'm pleased to report that we fully meet the requirements outlined in Section 4.</p>
           </div>
        </div>
        <div className="flex items-center justify-between mt-6 pl-12">
           <div className="flex items-center gap-2 bg-[#DCFCE7] text-[#15803D] px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide">
             <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-pulse" />
             AI Drafted Reply
           </div>
           <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
             <CheckCircle2 size={14} className="text-blue-500" />
             On brand
           </div>
        </div>
      </div>
    </div>
  </div>
);

const PersonalizationCard = () => (
  <div className="relative w-full max-w-[420px]">
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: -20, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="absolute -top-6 -right-6 z-20 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.1)] border border-gray-100 px-4 py-2 rounded-full flex items-center gap-2"
    >
      <span className="text-xs font-semibold text-gray-700">Good morning, Sarah</span>
      <span className="text-lg">🌻</span>
    </motion.div>
    <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400" />
      <div className="flex items-center gap-4 mb-6 mt-2">
        <div className="w-12 h-12 rounded-2xl bg-[#F3E8FF] flex items-center justify-center text-[#9333EA]"><Lock size={20} /></div>
        <div>
           <h4 className="text-base font-bold text-gray-900">Top Security Practices</h4>
           <p className="text-xs text-gray-500 font-medium">Customized for <span className="text-gray-900">Sarah, Security Director</span></p>
        </div>
      </div>
      <div className="space-y-3 mb-6">
        <div className="h-2 bg-gray-100 rounded-full w-3/4" />
        <div className="h-2 bg-gray-100 rounded-full w-full" />
        <div className="h-2 bg-gray-100 rounded-full w-5/6" />
      </div>
      <div className="flex items-center justify-between">
        <div className="bg-[#F3E8FF] text-[#7E22CE] px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">AI-Personalized Content</div>
      </div>
    </div>
    <div className="absolute inset-0 bg-white border border-gray-200 rounded-[24px] -z-10 translate-y-3 scale-[0.95] opacity-60" />
  </div>
);

const ConsistencyCard = () => {
  const team = [
    { role: "Sales Rep", label: "The solution we offer..." },
    { role: "Support Agent", label: "Our platform provides..." },
    { role: "New Hire", label: "This feature allows..." },
  ];
  return (
    <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-8 w-full max-w-[500px]">
      <div className="grid grid-cols-3 gap-4">
        {team.map((member, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full border-2 border-white shadow-md overflow-hidden mb-3 relative">
               <div className={`w-full h-full flex items-center justify-center text-xl ${i===0 ? 'bg-blue-100' : i===1 ? 'bg-orange-100' : 'bg-green-100'}`}>
                 {i===0 ? '👨‍💼' : i===1 ? '👩‍💻' : '🧑‍🎓'}
               </div>
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-2">{member.role}</span>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-2 text-[9px] text-gray-600 text-center w-full mb-2 h-12 flex items-center justify-center relative">
               <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-50 border-t border-l border-gray-100 rotate-45" />
               "{member.label}"
            </div>
            <div className="flex items-center gap-1 text-[9px] font-bold text-gray-400"><CheckCircle2 size={10} className="text-green-500" /> On brand</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const IntegrationCard = () => (
  <div className="w-full max-w-[450px] bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-2">
    <div className="flex h-40">
      <div className="w-14 bg-gray-50/50 rounded-l-[20px] flex flex-col items-center py-4 gap-3 border-r border-gray-100">
         <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-[10px]">Hub</div>
         <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-[10px]">SF</div>
         <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-[10px]">ZD</div>
      </div>
      <div className="flex-1 p-5 relative">
         <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Draft Review</span>
            <button className="bg-[#2563EB] hover:bg-blue-700 text-white text-[10px] px-3 py-1.5 rounded-md font-medium transition-colors">Approve & Send</button>
         </div>
         <div className="space-y-2.5">
           <div className="h-2 bg-gray-100 rounded-full w-full" />
           <div className="h-2 bg-gray-100 rounded-full w-5/6" />
           <div className="h-2 bg-gray-100 rounded-full w-4/6" />
         </div>
         <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 }} className="absolute bottom-4 right-4 bg-white shadow-lg border border-green-100 text-green-700 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <CheckCircle2 size={12} className="fill-green-500 text-white" /> Workflow Integrated
         </motion.div>
      </div>
    </div>
  </div>
);

// --- MAIN WORKFLOW COMPONENT ---

const Workflow = () => {
  const containerRef = useRef(null);
  
  // Track scroll to animate the line drawing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 90,
    restDelta: 0.001
  });

  // EXACT PATH DATA MATCHING "Vector 7.png"
  // Logic: Start Center -> Curve Left -> Down Left -> Curve Center -> Down Center -> Curve Right -> Down Right -> End Arrow
  // ViewBox Reference: 0 0 1280 1650 (approx width of max-w-7xl)
  const pathData = `
    M 640 0 
    L 640 80 
    Q 640 130 590 130 
    L 100 130 
    Q 50 130 50 180 
    L 50 600 
    Q 50 650 100 650 
    L 590 650 
    Q 640 650 640 700 
    L 640 1100 
    Q 640 1150 690 1150 
    L 1180 1150 
    Q 1230 1150 1230 1200 
    L 1230 1630
  `;

  return (
    <div className="bg-[#FCFCFC] relative overflow-hidden pb-32">
      
      {/* --- HEADER IMAGE --- */}
      <div className="relative pt-20 pb-10 flex justify-center items-center">
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-pink-50/50 via-purple-50/30 to-transparent pointer-events-none z-0" />
        <div className="relative z-10 w-full max-w-4xl px-4 flex justify-center">
          <img src={hubImage} alt="Anseru Workflow Hub" className="w-full h-auto object-contain max-h-[500px]" />
        </div>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 relative">
        
        {/* --- ANIMATED TIMELINE (Desktop Only) --- */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none top-0 h-[1700px]">
           <svg className="w-full h-full" viewBox="0 0 1280 1700" fill="none">
             <defs>
               {/* Arrowhead Marker */}
               <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                 <path d="M 0 0 L 10 5 L 0 10 z" fill="#4B5563" />
               </marker>
               
               {/* Faint Background Marker */}
               <marker id="arrow-bg" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                 <path d="M 0 0 L 10 5 L 0 10 z" fill="#E5E7EB" />
               </marker>
             </defs>

             {/* 1. Background Path (Faint Gray) */}
             <path 
               d={pathData}
               stroke="#E5E7EB" 
               strokeWidth="2" 
               fill="none"
               markerEnd="url(#arrow-bg)"
             />
             
             {/* 2. Foreground Animated Path (Darker) */}
             <motion.path 
               d={pathData}
               stroke="#4B5563" 
               strokeWidth="3" 
               fill="none"
               style={{ pathLength }}
               strokeLinecap="round"
               markerEnd="url(#arrow)"
             />
           </svg>
        </div>

        {/* --- 1. AI DRAFTED RESPONSES (Left Side Line) --- */}
        {/* Line is at x=50. Content needs to be indented to the right of x=50. */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32 lg:mb-48 relative pl-16 lg:pl-0">
           <div className="lg:pl-32 lg:text-left order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">AI-Drafted Responses</h3>
                <p className="text-lg text-gray-500 leading-relaxed font-light">Generate clear, context-aware replies instantly—keeping communication sharp, consistent, and on-brand.</p>
              </motion.div>
           </div>
           <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                <ResponseCard />
              </motion.div>
           </div>
        </div>

        {/* --- 2. SMART PERSONALIZATION (Center Line) --- */}
        {/* Line is at x=640 (Center). Content is separated left/right. */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32 lg:mb-48 relative">
           <div className="order-1 flex justify-center lg:justify-end lg:pr-16">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                <PersonalizationCard />
              </motion.div>
           </div>
           <div className="lg:pl-16 order-2">
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-full mb-4 border border-yellow-100">
                   <span className="text-xs font-semibold text-yellow-800 uppercase tracking-wide">Context Aware</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Smart Personalization</h3>
                <p className="text-lg text-gray-500 leading-relaxed font-light">Tailor every response to the customer's intent and tone, ensuring conversations feel human and relevant.</p>
              </motion.div>
           </div>
        </div>

        {/* --- 3. TEAM CONSISTENCY (Right Side Line? No, Image shows Center to Right transition) --- */}
        {/* Vector 7: Line goes from Center to Far Right. 
            So this content sits between Center and Right? 
            Actually, Vector 7 goes Center -> Right. So this content should align with that horizontal transition.
        */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32 lg:mb-48 relative">
           <div className="lg:pr-16 lg:text-right order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Team Consistency</h3>
                <p className="text-lg text-gray-500 leading-relaxed font-light">Maintain a unified brand voice across sales, support, and onboarding—whether it's a seasoned rep or a new hire.</p>
              </motion.div>
           </div>
           <div className="order-1 lg:order-2 flex justify-center lg:justify-start lg:pl-16">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                <ConsistencyCard />
              </motion.div>
           </div>
        </div>

        {/* --- 4. WORKFLOW INTEGRATION (Right Side Line) --- */}
        {/* Line is at x=1230 (Far Right). Content should be to the LEFT of the line. */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           <div className="order-1 flex justify-center lg:justify-end">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                <IntegrationCard />
              </motion.div>
           </div>
           <div className="lg:pl-16 order-2 lg:pr-32">
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Workflow Integration</h3>
                <p className="text-lg text-gray-500 leading-relaxed font-light">Plug seamlessly into CRM and support tools, so teams can draft, edit, and send without breaking their flow.</p>
              </motion.div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;