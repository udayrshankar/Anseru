import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FeatureRowProps {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  image: React.ReactNode;
  reversed?: boolean;
}

const FeatureRow = ({ title, subtitle, description, points, image, reversed = false }: FeatureRowProps) => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-[120px]">
        <div className={cn(
            "flex flex-col lg:flex-row items-center gap-12 lg:gap-24",
            reversed && "lg:flex-row-reverse"
        )}>
          {/* Image/Visual Side */}
          <motion.div 
             initial={{ opacity: 0, x: reversed ? 50 : -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6 }}
             className="flex-1 w-full"
          >
             <div className="relative rounded-[32px] overflow-hidden border border-black/[0.03] shadow-lg bg-white p-2">
                 {/* Inner Glow Container */}
                <div className="rounded-[28px] overflow-hidden bg-[#F6F6F8] relative min-h-[400px] flex items-center justify-center">
                    {image}
                </div>
             </div>
          </motion.div>

          {/* Text Content Side */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="flex-1 w-full"
          >
             <p className="text-sm text-[#C084FC] font-medium tracking-widest uppercase mb-4">
                 {subtitle}
             </p>
             <h2 className="text-[#2A1638] text-3xl md:text-5xl font-medium mb-6 leading-tight">
                 {title}
             </h2>
             <p className="text-[#483953]/80 text-lg leading-relaxed mb-8">
                 {description}
             </p>

             <ul className="space-y-4">
                 {points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1.5 w-4 h-4 rounded-full bg-[#E8D4F5] flex items-center justify-center shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
                        </div>
                        <span className="text-[#2A1638]/90 font-onest text-base">{point}</span>
                    </li>
                 ))}
             </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureRow;
