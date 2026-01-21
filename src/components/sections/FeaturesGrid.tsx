import React from "react";
import { motion } from "framer-motion";
import { 
  MdSpeed, 
  MdVerifiedUser, 
  MdRocketLaunch, 
  MdSupportAgent 
} from "react-icons/md";
import Card from "../Card";

// --- Types ---
interface Feature {
  title: string;
  description: string;
  icon: React.ElementType; 
  minHeight?: string;
}

export default function FeaturesGrid() {
  const features: Feature[] = [
    {
      title: "Close Deals Faster",
      description: "Automate RFPs and security questionnaires to cut response times and accelerate your sales cycle.",
      icon: MdSpeed,
    },
    {
      title: "Build Instant Trust",
      description: "Deliver accurate, compliance-ready answers that boost buyer confidence and help you win more approvals.",
      icon: MdVerifiedUser,
    },
    {
      title: "Accelerated Onboarding",
      description: "Cut training time in half by giving new team members ready-made, brand-aligned responses.",
      icon: MdRocketLaunch,
      minHeight: "min-h-[300px]", 
    },
    {
      title: "Smarter Support",
      description: "Delight customers with instant, accurate replies while your agents focus on what matters most.",
      icon: MdSupportAgent,
      minHeight: "min-h-[300px]",
    },
  ];

  return (
    <section className="py-0 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-[120px]">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-onest text-lg font-medium text-black mb-3 tracking-wide uppercase opacity-70">
              Fast and Accurate
            </p>
            <h2 className="font-onest text-3xl md:text-5xl font-medium text-[#2A1638] tracking-tight leading-tight">
              Your Edge in <span className="text-[#2A1638]">RFPs & Reviews.</span>
            </h2>
          </motion.div>
        </div>

        {/* Grid - Uniform 2x2 on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              title={feature.title}
              description={feature.description}
              index={idx}
              minHeight={feature.minHeight || "min-h-[300px]"}
              icon={<feature.icon />} 
              watermark={
                <feature.icon className="h-48 w-48 -rotate-12 text-[#2A1638]" />
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}