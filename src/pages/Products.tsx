import Background from "../components/Background";
import SmartCTA from "../components/SmartCTA";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { FileText, Lock, Search, BarChart, Zap, Users, Shield, CheckCircle, Clock, Database } from "lucide-react";

// Matches Home.tsx spacing
const SECTION_GAP = "gap-20";

const Products = () => {
  return (
    <div className="bg-white w-full -z-5">
      <Header />
      
      <main className={`flex flex-col ${SECTION_GAP}`}>
        <ProductsHero />
        <AgentCardsSection />
        <RFPAgentSection />
        <SecurityAgentSection />
      </main>

      <Footer />
    </div>
  );
};

// Identical structure to FeaturesHero
const ProductsHero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 max-w-[1400px] mx-auto rounded-[40px] overflow-hidden">
          <Background />
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 xl:px-[120px] pt-20">
        <h1 className="max-w-6xl text-3xl md:text-5xl lg:text-[64px] leading-tight text-[#2A1638] mb-5">
          Two agents. One shared <br className="hidden md:block"/>
          intelligence layer.
        </h1>

        <p className="text-base md:text-body text-[#2A1638]/70 max-w-3xl mb-10">
          Anseru ships two products, both built on the same deal infrastructure. 
          Each agent does less but does it extremely well.
        </p>

        <div className="mb-12">
          <SmartCTA />
        </div>
      </div>
    </section>
  );
};

// Modern split-panel agent showcase - distinct from Card-based sections
const AgentCardsSection = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[32px] overflow-hidden border border-black/[0.05] shadow-2xl">
          {/* RFP Agent Panel */}
          <div className="relative bg-gradient-to-br from-[#F8F5FF] to-white p-10 lg:p-14 flex flex-col justify-between min-h-[450px] group">
            {/* Decorative gradient orb */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-widest bg-purple-100 px-3 py-1 rounded-full">
                  For Proposals
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-[#2A1638] mb-4">
                RFP Agent
              </h3>
              
              <p className="text-lg text-[#2A1638]/70 leading-relaxed mb-8 max-w-md">
                Built for sales, pre-sales, and proposal teams responding to complex enterprise RFPs. Removes chaos by breaking it into a clear, repeatable flow.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-wrap gap-3">
              {["Ingestion", "Mapping", "Drafting", "Review"].map((tag) => (
                <span key={tag} className="text-sm font-medium text-[#2A1638]/80 bg-white px-4 py-2 rounded-full border border-purple-100 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Divider line on desktop */}
            <div className="hidden lg:block absolute right-0 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-purple-200 to-transparent" />
          </div>

          {/* Security Agent Panel */}
          <div className="relative bg-gradient-to-br from-[#F0F7FF] to-white p-10 lg:p-14 flex flex-col justify-between min-h-[450px] group">
            {/* Decorative gradient orb */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200/30 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                  <Lock className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
                  For Security
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-[#2A1638] mb-4">
                Security Agent
              </h3>
              
              <p className="text-lg text-[#2A1638]/70 leading-relaxed mb-8 max-w-md">
                Built for accuracy, consistency, and auditability. Answer security questions perfectly, using approved evidence from your compliance documentation.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-wrap gap-3">
              {["Evidence", "Freshness", "Consistency", "Audit"].map((tag) => (
                <span key={tag} className="text-sm font-medium text-[#2A1638]/80 bg-white px-4 py-2 rounded-full border border-blue-100 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// RFP Agent Section - Professional card-based layout matching home page
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

  return (
    <section className="py-0 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-[120px]">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-onest text-lg font-medium text-black mb-3 tracking-wide uppercase opacity-70">
              Complexity Tamer
            </p>
            <h2 className="font-onest text-3xl md:text-5xl font-medium text-[#2A1638] tracking-tight leading-tight">
              RFP Agent <span className="text-[#2A1638]">Workflow.</span>
            </h2>
          </motion.div>
        </div>

        {/* Grid - 2x2 layout like FeaturesGrid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <Card
              key={idx}
              title={step.title}
              description={step.desc}
              index={idx}
              minHeight="min-h-[280px]"
              icon={<step.icon />}
              watermark={
                <step.icon className="h-48 w-48 -rotate-12 text-[#2A1638]" />
              }
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

  return (
    <div className="bg-white">
      <section className="py-0 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-[120px] relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-sm text-[#2A1638]/60 mb-3 uppercase tracking-widest font-medium">
              Precision First
            </p>
            <h2 className="text-[#2A1638] text-3xl md:text-5xl font-medium tracking-tight mb-4">
              Security Questionnaire Agent
            </h2>
            <p className="text-lg text-[#483953]/70">
              Answer security questions perfectly, using approved evidence. Built for accuracy, consistency, and auditability.
            </p>
          </div>

          {/* Bento Grid Layout - Uses Shared Card Component */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto md:auto-rows-[350px]">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                title={feature.title}
                description={feature.desc}
                index={idx}
                minHeight="min-h-[280px] md:min-h-[350px]"
                className={idx === 0 || idx === 3 ? "md:col-span-8" : "md:col-span-4"}
                icon={<feature.icon />}
                watermark={
                  <feature.icon className="h-48 w-48 -rotate-12 text-[#2A1638]" />
                }
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
