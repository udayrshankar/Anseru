import React from "react";
import { motion } from "framer-motion";
import { 
  MdSpeed, 
  MdVerifiedUser, 
  MdRocketLaunch, 
  MdSupportAgent 
} from "react-icons/md";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for cleaner tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types ---
interface Feature {
  title: string;
  description: string;
  icon: React.ElementType; // Icon component reference
  minHeight?: string;
}

interface FeatureCardProps extends Feature {
  index: number;
}

// --- Components ---

function FeatureCard({
  title,
  description,
  icon: Icon,
  minHeight = "min-h-[300px]",
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-[32px] p-6 md:p-8",
        "bg-gradient-to-br from-[#EBEBEB] to-[#FEE6FF]",
        "border border-white/50 shadow-sm hover:shadow-xl transition-all duration-300 ease-out",
        minHeight,
        "md:col-span-6"
      )}
    >
      {/* Background Decorator Icon (The "Watermark") */}
      <div className="absolute -right-6 -top-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
         <Icon className="h-48 w-48 rotate-12 group-hover:rotate-[20deg] group-hover:scale-110 transition-transform duration-700 ease-in-out text-[#2A1638]" />
      </div>

      {/* Floating Animated Icon */}
      <div className="absolute top-6 left-6">
        <div className="relative">
            {/* Glow effect behind icon */}
            <div className="absolute inset-0 bg-white/40 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
            <Icon className="relative z-10 w-12 h-12 text-[#2A1638]/80 group-hover:text-[#2A1638] transition-colors duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-2 max-w-sm">
        <h3 className="font-onest text-2xl font-medium text-[#2A1638] leading-tight group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>
        <p className="font-onest text-lg font-light text-[#2A1638]/90 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
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
      minHeight: "min-h-[280px]", // Even smaller variation
    },
    {
      title: "Smarter Support",
      description: "Delight customers with instant, accurate replies while your agents focus on what matters most.",
      icon: MdSupportAgent,
      minHeight: "min-h-[280px]",
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
            <h2 className="font-onest text-4xl md:text-[52px] font-normal text-[#2A1638] leading-[1.1]">
              Your Edge in <span className="font-medium">RFPs & Reviews.</span>
            </h2>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              index={idx}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}