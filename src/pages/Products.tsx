import { useState, useRef } from "react";
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
  const [activeProduct, setActiveProduct] = useState<'rfp' | 'security'>('rfp');
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleProductSelect = (product: 'rfp' | 'security') => {
    setActiveProduct(product);
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
          <AgentCardsSection onHover={setActiveProduct} onSelect={handleProductSelect} />
        
          <div className="flex flex-col gap-12">
          {/* Toggle Control / Details Start Anchor */}
          <div ref={detailsRef} className="flex justify-center relative z-20 bg-white">
            <div className="bg-white/90 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-white/60 rounded-full py-2 px-2 flex gap-1 items-center ring-1 ring-black/[0.03]">
              <button
                onClick={() => setActiveProduct('rfp')}
                className={`relative px-12 md:px-20 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeProduct === 'rfp'
                    ? "text-white shadow-[0_4px_12px_rgba(42,22,56,0.3)]"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
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
                onClick={() => setActiveProduct('security')}
                className={`relative px-12 md:px-20 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeProduct === 'security'
                    ? "text-white shadow-[0_4px_12px_rgba(42,22,56,0.3)]"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
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
          <AnimatePresence mode="wait">
            {activeProduct === 'rfp' ? (
              <motion.div
                key="rfp"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <RFPAgentSection />
              </motion.div>
            ) : (
              <motion.div
                key="security"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <SecurityAgentSection />
              </motion.div>
            )}
          </AnimatePresence>
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
            intelligence layer.
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
  onHover, 
  onSelect 
}: { 
  onHover: (product: 'rfp' | 'security') => void;
  onSelect: (product: 'rfp' | 'security') => void;
}) => {
  return (
    <section className="py-0 px-6 bg-white">
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
            minHeight="min-h-[450px]"
            withMovingOrbs={true}
            onMouseEnter={() => onHover('rfp')}
            onClick={() => onSelect('rfp')} 
            className="group cursor-pointer"
          >
            {/* Custom Children: Badge & Tags */}
            <div className="mt-6">
               <div className="inline-flex items-center gap-2 mb-6 bg-purple-100 px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-purple-600 uppercase tracking-widest">
                    For Proposals
                  </span>
               </div>
               
               <div className="flex flex-wrap gap-3 mt-4">
                  {["Ingestion", "Mapping", "Drafting", "Review"].map((tag) => (
                    <span key={tag} className="text-sm font-medium text-[#2A1638]/80 bg-white px-4 py-2 rounded-full border border-purple-100 shadow-sm">
                      {tag}
                    </span>
                  ))}
               </div>
            </div>
            
            {/* Divider line on desktop (preserved from original) */}
            <div className="hidden lg:block absolute right-0 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-purple-200 to-transparent" />
          </Card>

          {/* Security Agent Panel - Using Card Component */}
          <Card
            title="Security Agent"
            description="Built for accuracy, consistency, and auditability. Answer security questions perfectly, using approved evidence from your compliance documentation."
            icon={<Lock />}
            minHeight="min-h-[450px]"
            withMovingOrbs={true}
            onMouseEnter={() => onHover('security')}
            onClick={() => onSelect('security')}
            className="group cursor-pointer"
          >
             {/* Custom Children: Badge & Tags */}
             <div className="mt-6">
               <div className="inline-flex items-center gap-2 mb-6 bg-blue-100 px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                    For Security
                  </span>
               </div>
               
               <div className="flex flex-wrap gap-3 mt-4">
                  {["Evidence", "Freshness", "Consistency", "Audit"].map((tag) => (
                    <span key={tag} className="text-sm font-medium text-[#2A1638]/80 bg-white px-4 py-2 rounded-full border border-blue-100 shadow-sm">
                      {tag}
                    </span>
                  ))}
               </div>
            </div>
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
    <section className="py-0 relative">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-[120px]">
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
                <step.icon className="h-48 w-48 -rotate-12 text-[#2A1638]" />
              }
              isActive={activeIndex === idx}
              duration={4000}
              onMouseEnter={() => setActiveIndex(idx)}
              className="z-10"
            />
          ))}
        </div>
      </div>
    </section>
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
    <section className="py-0 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-[120px]">

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
                <feature.icon className="h-48 w-48 -rotate-12 text-[#2A1638]" />
              }
              isActive={activeIndex === idx}
              duration={4000}
              onMouseEnter={() => setActiveIndex(idx)}
              className="z-10"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
