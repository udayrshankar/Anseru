import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Background from "../components/Background";
import SmartCTA from "../components/SmartCTA";
import { 
  Database, Zap, Brain, Users, FileCheck, AlertTriangle, 
  Plug, Shield, ArrowRight, CheckCircle, Layers 
} from "lucide-react";

const Features = () => {
  return (
    <div className="bg-white w-full -z-5">
      <Header />
      
      <main className="flex flex-col gap-20">
        <FeaturesHero />
        <HowItWorks />
        <CoreFeatures />
        <ClosingSection />
      </main>

      <Footer />
    </div>
  );
};

const FeaturesHero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 max-w-[1400px] mx-auto rounded-[40px] overflow-hidden">
          <Background />
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 xl:px-[120px] pt-20">
        <h1 className="max-w-5xl text-3xl md:text-5xl lg:text-[64px] leading-tight text-[#2A1638] mb-5">
          Deal Infrastructure for <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F5AF0] to-[#7038BA]">
            Enterprise Sales
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

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Living Knowledge Graph Ingestion",
      description: "Anseru connects directly to your real sources of truth: Product documentation, past RFPs, security documents, and public content.",
      detail: "Each source is indexed with ownership, freshness, and expiry.",
      icon: Database,
      color: "purple"
    },
    {
      number: "02",
      title: "Intelligent Drafting with Evidence",
      description: "The agent understands context, not just keywords. Relevant evidence is retrieved and draft answers are generated with citations.",
      detail: "Every response is explainable and reviewable.",
      icon: Zap,
      color: "blue"
    },
    {
      number: "03",
      title: "Human Review → Machine Memory",
      description: "SME edits are not lost; Anseru learns one-off answers, preferred phrasing, and approved claims.",
      detail: "Over time, the system compounds intelligence instead of decaying.",
      icon: Brain,
      color: "green"
    }
  ];

  return (
    <section className="py-0 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-[120px]">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-onest text-lg font-medium text-black mb-3 tracking-wide uppercase opacity-70">
              The Process
            </p>
            <h2 className="font-onest text-3xl md:text-5xl font-medium text-[#2A1638] tracking-tight leading-tight">
              How <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F5AF0] to-[#7038BA]">Anseru</span> Works
            </h2>
          </motion.div>
        </div>

        {/* Steps - Horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Connector line on desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px bg-gradient-to-r from-purple-200 to-blue-200 -translate-x-1/2" />
              )}
              
              <div className="relative p-8 rounded-[28px] bg-gradient-to-br from-[#F8F5FF] to-white border border-purple-100/50 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
                    step.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-purple-700' :
                    step.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-700' :
                    'bg-gradient-to-br from-green-500 to-green-700'
                  }`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-[#2A1638]/10">{step.number}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#2A1638] mb-3">{step.title}</h3>
                <p className="text-[#2A1638]/70 mb-4 leading-relaxed">{step.description}</p>
                <p className="text-sm font-medium text-purple-600">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CoreFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "Intelligent RFP Automation",
      goal: "Accelerate RFP response times by up to 10x using intelligent AI-generated drafts grounded in your approved knowledge.",
      capabilities: [
        "Generate context-aware responses using real product, policy, and historical data",
        "Reduce manual drafting while maintaining accuracy and consistency",
        "Human-in-the-loop workflows ensure every response is reviewable"
      ]
    },
    {
      icon: Layers,
      title: "Centralized Proposal Knowledge Hub",
      goal: "Centralize all proposal knowledge in one secure system of record.",
      capabilities: [
        "Unifies content libraries, past RFP responses, product documentation, and policies",
        "All knowledge is connected through a living knowledge graph",
        "Teams always work from the most accurate, up-to-date source of truth"
      ]
    },
    {
      icon: Brain,
      title: "Living Knowledge Graph",
      goal: "Replace static answer libraries with a continuously learning semantic knowledge graph.",
      capabilities: [
        "Connects documents, answers, approvals, and deal outcomes",
        "Learns from every approved SME edit",
        "Improves accuracy with usage instead of decaying over time"
      ]
    },
    {
      icon: Users,
      title: "Cross-Team Collaboration & Workflow",
      goal: "Collaborate seamlessly across sales, pre-sales, product, legal, and security teams.",
      capabilities: [
        "Real-time editing and commenting",
        "Role-based access and approvals",
        "Task tracking to assign ownership and reduce bottlenecks"
      ]
    },
    {
      icon: FileCheck,
      title: "Evidence & Citation Engine",
      goal: "Every answer generated by Anseru is backed by real evidence.",
      capabilities: [
        "Automatic source citations",
        "Secure document links instead of attachments",
        "Full traceability from answer to underlying document"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Knowledge Health & Risk Monitoring",
      goal: "Expose risk before submission, not after.",
      capabilities: [
        "Monitors expiring certifications, outdated policies, and missing ownership",
        "Shifts the problem from 'Did AI hallucinate?' to 'Which document needs updating?'"
      ]
    },
    {
      icon: Plug,
      title: "Enterprise Integrations",
      goal: "Integrate effortlessly with your existing revenue and security stack.",
      capabilities: [
        "Connects with CRM systems, cloud storage providers, and communication tools",
        "Fits into existing workflows instead of forcing teams to change"
      ]
    },
    {
      icon: Shield,
      title: "Governance, Analytics & Audit Readiness",
      goal: "Stay in control at every stage of the response lifecycle.",
      capabilities: [
        "Detailed activity logs with user actions and approval tracking",
        "Analytics on response quality, coverage gaps, and cycle times",
        "Audit-ready operations by default"
      ]
    }
  ];

  return (
    <section className="py-0 bg-[#FAFAFA] relative">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-[120px] py-20">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="font-onest text-lg font-medium text-black mb-3 tracking-wide uppercase opacity-70">
            Platform Capabilities
          </p>
          <h2 className="font-onest text-3xl md:text-5xl font-medium text-[#2A1638] tracking-tight leading-tight">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F5AF0] to-[#7038BA]">Features</span>
          </h2>
        </div>

        {/* Features Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative flex flex-col overflow-hidden rounded-[28px] p-8 bg-white border border-black/[0.05] shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-7 h-7 text-purple-600" />
              </div>

              {/* Title */}
              <h3 className="font-onest text-xl font-bold text-[#2A1638] mb-3">{feature.title}</h3>
              
              {/* Goal */}
              <p className="text-[#2A1638]/70 mb-5 leading-relaxed">{feature.goal}</p>
              
              {/* Capabilities */}
              <ul className="space-y-3 mt-auto">
                {feature.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#2A1638]/80">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                    {cap}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClosingSection = () => {
  const benefits = [
    "Boosts team efficiency",
    "Reduces manual errors",
    "Improves consistency across deals",
    "Scales with enterprise complexity"
  ];

  return (
    <section className="py-24 bg-white text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium text-[#2A1638] mb-6 leading-tight">
          Outcome-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F5AF0] to-[#7038BA]">Automation</span>
        </h2>
        <p className="text-lg text-[#2A1638]/70 mb-12 max-w-2xl mx-auto">
          Anseru doesn't just automate responses—it builds deal intelligence that compounds.
        </p>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-gradient-to-br from-[#F8F5FF] to-white border border-purple-100/50">
              <p className="text-sm font-medium text-[#2A1638]">{benefit}</p>
            </div>
          ))}
        </div>

        <button className="px-8 py-4 bg-[#2A1638] text-white rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 mx-auto shadow-xl hover:shadow-2xl hover:-translate-y-1">
          Get Started Today
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default Features;
