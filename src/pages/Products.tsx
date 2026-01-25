import { useRef } from "react";
import Background from "../components/Background";
import SmartCTA from "../components/SmartCTA";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Card from "../components/Card";
import { useSequentialAnimation } from "../hooks/useSequentialAnimation";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Lock, Search, BarChart, Zap, Users, Shield, CheckCircle, Clock, Database } from "lucide-react";

// Matches Home.tsx spacing
const SECTION_GAP = "gap-20";

const Products = () => {
  // Use sequential animation hook for auto-cycling
  // 0 -> 'rfp', 1 -> 'security'
  const { activeIndex, setActiveIndex, onMouseEnter, onMouseLeave } = useSequentialAnimation(2, 8000); // 8000ms duration
  
  const activeProduct = activeIndex === 0 ? 'rfp' : 'security';
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleProductSelect = (product: 'rfp' | 'security') => {
    setActiveIndex(product === 'rfp' ? 0 : 1);
    // Smooth scroll to the details section with a small offset for the header
    setTimeout(() => {
        const yOffset = -100; // Header offset
        const element = detailsRef.current;
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, 50);
  };

  return (
    <div className=" w-full -z-5 bg-white">
      <Header />
      
      
        <main className={`flex flex-col ${SECTION_GAP} `}>
          <ProductsHero />
          <AgentCardsSection 
            activeProduct={activeProduct} 
            onHover={(p) => setActiveIndex(p === 'rfp' ? 0 : 1)} 
            onSelect={handleProductSelect}
            onPause={onMouseEnter}
            onResume={onMouseLeave}
          />
        
          
          {/* Main "Window" Container */}
          <div className="relative max-w-[1300px] mx-auto px-4 md:px-8 pb-24">
            
            {/* Floating Toggle - Positioned closely on top of the window border */}
            <div ref={detailsRef} className="absolute left-1/2 -translate-x-1/2 -top-6 z-30 ">
              <div className="bg-white backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-black/80 rounded-full py-1.5 px-1.5 flex gap-1 items-center ring-1 ring-black/[0.03]">
                <button
                  onClick={() => setActiveIndex(0)}
                  className={`relative px-8 md:px-16 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeProduct === 'rfp'
                      ? "text-white shadow-[0_4px_12px_rgba(42,22,56,0.2)]"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/50"
                  }`}
                >
                  {activeProduct === 'rfp' && (
                    <motion.div
                      layoutId="active-product-pill"
                      className="absolute inset-0 bg-[#2A1638] rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10 whitespace-nowrap tracking-wide">RFP Agent</span>
                </button>
          
                <button
                  onClick={() => setActiveIndex(1)}
                  className={`relative px-8 md:px-16 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeProduct === 'security'
                      ? "text-white shadow-[0_4px_12px_rgba(42,22,56,0.2)]"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/50"
                  }`}
                >
                  {activeProduct === 'security' && (
                    <motion.div
                      layoutId="active-product-pill"
                      className="absolute inset-0 bg-[#2A1638] rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10 whitespace-nowrap tracking-wide">Security Agent</span>
                </button>
              </div>
            </div>

            {/* The Window Frame */}
            <div className="bg-white rounded-2xl shadow-[0_50px_100px_-20px_rgba(50,50,93,0.3)] border border-black/10 overflow-hidden relative z-10 ring-1 ring-slate-900/5">
                
                {/* Window Header */}
                <div className="h-14 bg-slate-50/80 backdrop-blur-md border-b border-slate-100 flex items-center px-6 justify-between select-none">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]/50 shadow-inner" />
                        <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]/50 shadow-inner" />
                        <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]/50 shadow-inner" />
                    </div>
                    
                 

                    <div className="w-16" /> {/* Spacer */}
                </div>

                {/* Content Area */}
                <div className="p-8 lg:p-12 pt-16 bg-gradient-to-b from-white to-slate-50/50 min-h-[600px] relative">
                   {/* Background Decor */}
                   <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
                        style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(120, 119, 198, 0.1), transparent 40%)' }} 
                   />

                  <AnimatePresence mode="wait">
                    {activeProduct === 'rfp' ? (
                      <motion.div
                        key="rfp"
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <RFPAgentSection />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="security"
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <SecurityAgentSection />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
            </div>
          </div>
        </main>

      <Footer />
    </div>
  );
};

// Identical structure to FeaturesHero
const ProductsHero = () => {
  return (
    <section className="relative w-full min-h-[65vh] flex flex-col overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {/* Rounded Background Container matching Home Hero */}
        <div className="absolute inset-0 max-w-[1400px] mx-auto rounded-[40px] overflow-hidden">
          <Background />
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 xl:px-[120px] pt-32 pb-20">
        <h1 className="max-w-5xl text-3xl md:text-5xl lg:text-[64px] leading-tight text-[#2A1638] mb-5">
         Two agents. One shared
 <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F5AF0] to-[#7038BA]">
            Intelligence Layer.
          </span>
        </h1>

        <p className="text-base md:text-lg text-[#2A1638]/70 max-w-3xl mb-10">
          Anseru is designed as deal infrastructure, not just RFP automation. Every feature exists to improve speed, accuracy, collaboration, and auditability across enterprise sales workflows.
        </p>

        <div className="mb-12">
          <SmartCTA />
        </div>
      </div>
    </section>
  );
};

// Modern split-panel agent showcase - distinct from Card-based sections
const AgentCardsSection = ({ 
  activeProduct,
  onHover, 
  onSelect,
  onPause,
  onResume
}: { 
  activeProduct: 'rfp' | 'security';
  onHover: (product: 'rfp' | 'security') => void;
  onSelect: (product: 'rfp' | 'security') => void;
  onPause: () => void;
  onResume: () => void;
}) => {
  return (
    <section 
      className="py-0 px-6 bg-white"
      onMouseEnter={onPause}
      onMouseLeave={onResume}
    >
      <div className="max-w-[1400px] mx-auto px-6 xl:px-[120px]">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="font-onest text-lg font-medium text-black mb-3 tracking-wide uppercase opacity-70">
            Our Products
          </p>
          <h2 className="font-onest text-3xl md:text-5xl font-medium text-[#2A1638] tracking-tight leading-tight">
            Two Agents. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F5AF0] to-[#7038BA]">One Mission.</span>
          </h2>
        </div>

        {/* Split Panel Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* RFP Agent Panel - Using Card Component */}
          <Card
            title="RFP Agent"
            description="Built for sales, pre-sales, and proposal teams responding to complex enterprise RFPs. Removes chaos by breaking it into a clear, repeatable flow."
            icon={<FileText />}
            minHeight="min-h-[500px]"
            withMovingOrbs={true}
            isActive={activeProduct === 'rfp'}
            duration={8000}
            onMouseEnter={() => onHover('rfp')}
            onClick={() => onSelect('rfp')} 
            className="group cursor-pointer relative"
          >
            {/* Custom Children: Badge & Tags */}
            <div className="mt-auto pt-6">
               <div className="inline-flex items-center gap-2 mb-6 bg-purple-100 px-3 py-1 rounded-full">
                  <span className="text-md font-bold text-purple-600 uppercase tracking-widest">
                    For GTM and Sales Teams
                  </span>
               </div>
               
               <div className="flex flex-wrap gap-3">
                  {["Ingestion", "Mapping", "Drafting", "Review"].map((tag) => (
                    <span key={tag} className="text-sm font-medium text-[#2A1638]/80 bg-white px-4 py-2 rounded-full border border-purple-100 shadow-sm">
                      {tag}
                    </span>
                  ))}
               </div>
            </div>
            
            {/* Divider line on desktop - Positioned absolutely to the RIGHT edge of this card */}
            <div className="hidden lg:block absolute -right-4 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-purple-200 to-transparent z-10" />
          </Card>

          {/* Security Agent Panel - Using Card Component */}
          <Card
            title="Security Agent"
            description="Built for accuracy, consistency, and auditability. Answer security questions perfectly, using approved evidence from your compliance documentation."
            icon={<Lock />}
            minHeight="min-h-[500px]"
            withMovingOrbs={true}
            isActive={activeProduct === 'security'}
            duration={8000}
            onMouseEnter={() => onHover('security')}
            onClick={() => onSelect('security')} 
            className="group cursor-pointer relative"
          >
            {/* Custom Children: Badge & Tags */}
            <div className="mt-auto pt-6">
               <div className="inline-flex items-center gap-2 mb-6 bg-purple-100 px-3 py-1 rounded-full">
                  <span className="text-md font-bold text-purple-600 uppercase tracking-widest">
                    For Compliance and Security Teams
                  </span>
               </div>
               
               <div className="flex flex-wrap gap-3">
                  {["Evidence", "Freshness", "Accuracy", "Audit"].map((tag) => (
                    <span key={tag} className="text-sm font-medium text-[#2A1638]/80 bg-white px-4 py-2 rounded-full border border-purple-100 shadow-sm">
                      {tag}
                    </span>
                  ))}
               </div>
            </div>
            
            {/* Divider line on desktop - Positioned absolutely to the RIGHT edge of this card */}
            <div className="hidden lg:block absolute -right-4 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-purple-200 to-transparent z-10" />
          </Card>
        </div>
      </div>
    </section>
  );
};

// -- VISUAL COMPONENT: Grid Lines --
const GridLines = () => (
  <div className="absolute inset-0 pointer-events-none hidden md:block select-none">
    {/* Vertical Line */}
    <div className="absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[#2A1638]/10 to-transparent -translate-x-1/2" />
    {/* Horizontal Line */}
    <div className="absolute top-1/2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#2A1638]/10 to-transparent -translate-y-1/2" />
    
    {/* Center Intersection Node */}
    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white border border-purple-100 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-sm flex items-center justify-center z-10">
       <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
    </div>
  </div>
);

// RFP Agent Section
const RFPAgentSection = () => {
  const steps = [
    {
      icon: Search,
      title: "RFP Ingestion & Structuring",
      desc: "Automatically extract questions from PDF/Word/Excel into a clean requirement tree.",
      result: "Teams understand the RFP in minutes."
    },
    {
      icon: BarChart,
      title: "Knowledge Mapping & Coverage",
      desc: "Map requirements to the knowledge graph. Identify confident answers vs. SME input needed.",
      result: "No last-minute surprises."
    },
    {
      icon: Zap,
      title: "Intelligent Answer Drafting",
      desc: "Generate context-aware answers with source citations and confidence signals.",
      result: "Drafts that feel reviewable, not rewrite-heavy."
    },
    {
      icon: Users,
      title: "Review, Collaboration & Submission",
      desc: "Role-based reviews and version control. Edits are learned by the system.",
      result: "Review effort drops to seconds."
    }
  ];

  const { activeIndex, onMouseEnter, onMouseLeave, setActiveIndex } = useSequentialAnimation(steps.length);

  return (
    <div className="relative">
        {/* Grid - 2x2 layout like FeaturesGrid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 relative"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <GridLines />
          {steps.map((step, idx) => (
            <Card
              key={idx}
              title={step.title}
              description={step.desc}
              index={idx}
              minHeight="min-h-[150px]"
              icon={<step.icon />}
              watermark={
                <step.icon className="h-48 w-48 -rotate-12 text-[#2A1638] opacity-[0.05]" />
              }
              isActive={activeIndex === idx}
              duration={4000}
              onMouseEnter={() => setActiveIndex(idx)}
              className="z-10 shadow-sm border-slate-100 bg-white/80 hover:bg-white transition-colors"
            />
          ))}
        </div>
    </div>
  );
};

// Security Agent Section - Professional theme matching WhyAnseru
const SecurityAgentSection = () => {
  const features = [
    {
      icon: Database,
      title: "Evidence First",
      desc: "Connects to SOC 2, ISO, and policies. Every answer is backed by verified documentation."
    },
    {
      icon: Clock,
      title: "Freshness Monitoring",
      desc: "Tracks source owner and expiry. Automatically flags stale evidence before it becomes a liability."
    },
    {
      icon: CheckCircle,
      title: "Consistency Guarantee",
      desc: "Consistent answers across customers. No hallucinations, no contradictions."
    },
    {
      icon: Shield,
      title: "Audit Ready",
      desc: "Every response is linked to a verified policy document or compliance certification."
    }
  ];

  const { activeIndex, onMouseEnter, onMouseLeave, setActiveIndex } = useSequentialAnimation(features.length);

  return (
    <div className="relative">
        {/* Grid - 2x2 layout matching RFPAgentSection */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <GridLines />
          {features.map((feature, idx) => (
            <Card
              key={idx}
              title={feature.title}
              description={feature.desc}
              index={idx}
              minHeight="min-h-[150px]"
              icon={<feature.icon />}
              watermark={
                <feature.icon className="h-48 w-48 -rotate-12 text-[#2A1638] opacity-[0.05]" />
              }
              isActive={activeIndex === idx}
              duration={4000}
              onMouseEnter={() => setActiveIndex(idx)}
              className="z-10 shadow-sm border-slate-100 bg-white/80 hover:bg-white transition-colors"
            />
          ))}
        </div>
    </div>
  );
};

export default Products;
