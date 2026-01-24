import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Background from "../components/Background";
import { Check, X } from "lucide-react";
import SmartCTA from "../components/SmartCTA";
import image from "../assets/bg2.png"


const Pricing = () => {
  return (
    <div className="bg-white w-full -z-5">
      <Header />
      
      <main className="flex flex-col gap-20">
        <PricingHero />
        <BenchmarkTable />
        <PricingTiers />
        <ClosingCTA />
      </main>

      <Footer />
    </div>
  );
};

const PricingHero = () => {
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
          Pricing That Scales With
 <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F5AF0] to-[#7038BA]">
            Deal Value, Not Seat Count
          </span>
        </h1>

        <p className="text-base md:text-lg text-[#2A1638]/70 max-w-3xl mb-10">
          Choose a plan based on deal volume and complexity. All plans include core intelligence, governance, and evidence-first workflows.
        </p>

        <div className="mb-12">
          <SmartCTA />
        </div>
      </div>
    </section>

  );
};

const BenchmarkTable = () => {
  const rows = [
    { feature: "RFP Support", anseru: "Full", security: false, traditional: "Full" },
    { feature: "Security Questionnaires", anseru: "Full", security: "Full", traditional: "Limited" },
    { feature: "Single System for Both", anseru: true, security: false, traditional: false },
    { feature: "Contextual Understanding", anseru: true, security: "Poor", traditional: "Poor" },
    { feature: "Living Knowledge Graph", anseru: true, security: false, traditional: false },
    { feature: "Learns from SME Edits", anseru: true, security: false, traditional: false },
    { feature: "Evidence-Linked Answers", anseru:true, security: false, traditional: false },
    { feature: "Evidence Freshness Tracking", anseru: true, security: false, traditional: false },
    { feature: "Answer Traceability", anseru: true, security: false, traditional: false },
    { feature: "Unlimited Users", anseru: true, security: false, traditional: false },
    { feature: "Usage-Based Pricing", anseru: true, security: false, traditional: false },
    { feature: "Compounding Intelligence", anseru: true, security: false, traditional: false },
  ];

  const renderCell = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val ? <Check className="w-5 h-5 text-green-600" /> : <X className="w-5 h-5 text-[#2A1638]/20" />;
    }
    if (val === 'Poor' || val === 'Limited') {
      return <span className="text-sm text-[#2A1638]/50">{val}</span>;
    }
    return <span className="font-medium text-sm text-[#2A1638]">{val}</span>;
  };

  return (
    <section className="py-0 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-[60px]">
        {/* Section Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-onest text-center text-lg font-medium text-black mb-3 tracking-wide uppercase opacity-70">
              Pricing & Value Comparison
            </p>
            <h2 className="font-onest text-center text-3xl md:text-4xl font-medium text-[#2A1638] tracking-tight leading-tight mb-4">
              Why Teams Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F5AF0] to-[#7038BA]">Anseru</span>
            </h2>
            <p className="text-center text-[#2A1638]/60 max-w-2xl">
              The table below highlights how Anseru compares across the capabilities that matter in enterprise RFP and security workflows.
            </p>
          </motion.div>
        </div>

        {/* macOS Window Style Table */}
        <div className="rounded-[24px] border border-black/[0.08] shadow-2xl shadow-purple-500/10 bg-white overflow-hidden">
          {/* macOS Title Bar */}
          <div className="bg-[#F6F6F8] px-5 py-4 border-b border-black/[0.03] flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]/30"></div>
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]/30"></div>
            <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]/30"></div>
          </div>

          <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <table className="w-full min-w-[700px] border-collapse bg-white">
              <thead>
                <tr className="border-b border-black/[0.05]">
                  <th className="p-5 text-left w-2/5 text-sm font-semibold text-[#2A1638]/60 uppercase tracking-wider pl-8">Capability</th>
                  <th className="p-5 text-center w-1/5 bg-gradient-to-b from-purple-50 to-transparent border-x border-purple-100/50">
                    <span className="font-onest font-black text-lg text-[#2A1638] tracking-tight">ANSERU</span>
                  </th>
                  <th className="p-5 text-center text-sm font-medium text-[#483953]/50 w-1/5">Security-only Tools</th>
                  <th className="p-5 text-center text-sm font-medium text-[#483953]/50 w-1/5">Traditional RFP Tools</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className="group transition-all duration-300 ease-out hover:scale-[1.01] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:bg-purple-50/30 hover:z-10 relative"
                  >
                    <td className="p-4 pl-8 text-sm font-medium text-[#2A1638] border-b border-black/[0.03]">
                      {row.feature}
                    </td>
                    <td className="p-4 text-center bg-purple-50/20 border-x border-purple-100/30 border-b border-purple-100/20">
                      <div className="flex justify-center items-center h-full">
                        {renderCell(row.anseru)}
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-black/[0.03]">
                      <div className="flex justify-center items-center h-full">
                        {renderCell(row.security)}
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-black/[0.03]">
                      <div className="flex justify-center items-center h-full">
                        {renderCell(row.traditional)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingTiers = () => {
  return (
    <section className="py-12 bg-[#FAFAFA] relative">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Starter Card */}
          <div className="rounded-[32px] p-8 bg-white border border-black/[0.05] shadow-lg hover:shadow-xl transition-shadow relative flex flex-col">
            <div className="mb-6">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-widest bg-purple-100 px-3 py-1 rounded-full">
                Starter
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#2A1638] mb-2">Early Revenue Teams</h3>
            <p className="text-sm text-[#2A1638]/60 mb-6">
              Best for early-stage or lean sales teams handling occasional RFPs.
            </p>
            <p className="text-3xl font-light text-[#2A1638] mb-8">
              Usage-based <span className="text-base text-[#2A1638]/40">/pay per use</span>
            </p>
            
            <button className="w-full py-3.5 rounded-full border-2 border-[#2A1638] text-[#2A1638] font-semibold hover:bg-[#2A1638] hover:text-white transition-colors mb-8">
              Get Started
            </button>

            <ul className="space-y-4 flex-1">
              {[
                "RFP Agent or Security Agent",
                "Living knowledge graph (single workspace)",
                "Intelligent drafting with citations",
                "Human-in-the-loop review",
                "Standard integrations"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#2A1638]/80 text-sm">
                  <Check className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Growth Card (Highlighted) */}
          <div className="rounded-[32px] p-10 bg-[#2A1638] text-white shadow-2xl relative flex flex-col lg:-mt-4 lg:mb-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#9F5AF0] to-[#7038BA] text-white text-[10px] uppercase font-bold tracking-widest py-1.5 px-4 rounded-full shadow-lg">
              Most Popular
            </div>
            <div className="mb-6">
              <span className="text-xs font-bold text-purple-300 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
                Growth
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Scaling Sales Teams</h3>
            <p className="text-sm text-white/60 mb-6">
              Best for scaling sales teams with regular enterprise deals.
            </p>
            <p className="text-3xl font-light text-white mb-8">
              Volume-based <span className="text-base text-white/40">/fixed pricing</span>
            </p>
            
            <button className="w-full py-3.5 rounded-full bg-white text-[#2A1638] font-semibold hover:bg-gray-100 transition-colors mb-8">
              Talk to Sales
            </button>

            <ul className="space-y-4 flex-1">
              {[
                "RFP Agent AND Security Agent",
                "Shared knowledge graph across teams",
                "Evidence freshness & risk monitoring",
                "Advanced collaboration & approvals",
                "CRM + cloud storage integrations",
                "Analytics & coverage insights"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                  <Check className="w-4 h-4 text-purple-300 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Card */}
          <div className="rounded-[32px] p-8 bg-white border border-black/[0.05] shadow-lg hover:shadow-xl transition-shadow relative flex flex-col">
            <div className="mb-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
                Enterprise
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#2A1638] mb-2">High-Volume Teams</h3>
            <p className="text-sm text-[#2A1638]/60 mb-6">
              Best for high-volume enterprise sales, security-heavy buying environments.
            </p>
            <p className="text-3xl font-light text-[#2A1638] mb-8">
              Custom <span className="text-base text-[#2A1638]/40">/enterprise pricing</span>
            </p>
            
            <button className="w-full py-3.5 rounded-full border-2 border-[#2A1638] text-[#2A1638] font-semibold hover:bg-[#2A1638] hover:text-white transition-colors mb-8">
              Request a Demo
            </button>

            <ul className="space-y-4 flex-1">
              {[
                "Unlimited RFPs & questionnaires",
                "Multiple workspaces / business units",
                "Advanced governance & audit controls",
                "Custom integrations & data residency",
                "Dedicated onboarding & support",
                "SLA & security reviews"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#2A1638]/80 text-sm">
                  <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClosingCTA = () => {
  return (

    <section className="py-0 px-6">
      <div className="max-w-[1400px] w-full mx-auto px-6">
        <div className="relative rounded-[48px] overflow-hidden">
          <img
            src={image}
            alt="CTA Background"
            className="w-full h-[400px] object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="font-onest text-3xl md:text-[45px] font-medium text-[#2A1638] mb-8 max-w-[971px] leading-tight">
              Anseru is not just helping teams respond faster.
We're building intelligence that compounds deal after deal.
            </h2>

            <SmartCTA />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
