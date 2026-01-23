import React from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  watermark?: React.ReactNode;
  minHeight?: string;
  className?: string;
  index?: number;
}

export default function Card({
  title,
  description,
  icon,
  watermark,
  minHeight = "min-h-[300px]",
  className,
  index = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-[40px] p-8 md:p-10",
        // Multi-layered shadow for depth + Glass border
        "bg-white border border-white/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05),0_0_0_1px_rgba(255,255,255,0.5)_inset]",
        "hover:shadow-[0_40px_80px_-20px_rgba(42,22,56,0.12),0_0_0_1px_rgba(255,255,255,0.8)_inset] hover:border-purple-200/50 transition-all duration-500 ease-out",
        minHeight,
        className
      )}
    >
      {/* 1. Base Gradient with subtle texture feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] via-[#f8faff] to-[#f0f4ff] opacity-100 -z-30" />
      
      {/* 2. Interactive Sheen Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-20" />

      {/* 3. Decorative Orbs - Deeper Colors for Contrast */}
      <div className="absolute top-[-20%] right-[-20%] w-72 h-72 bg-purple-200/20 rounded-full blur-[90px] pointer-events-none group-hover:bg-purple-300/20 transition-colors duration-700 -z-20 transform group-hover:scale-110" />
      <div className="absolute bottom-[-20%] left-[-20%] w-64 h-64 bg-blue-200/15 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-300/15 transition-colors duration-700 -z-20" />
      
      {/* 4. Glass Reflection Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent opacity-50 pointer-events-none -z-10 rounded-[40px]" />

      {/* Watermark/Background Decorator */}
      {watermark && (
        <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-700 ease-out origin-bottom-right scale-110 group-hover:scale-125 pointer-events-none -z-10 mix-blend-multiply">
          {watermark}
        </div>
      )}

      {/* Floating Icon Box - 3D Effect */}
      {icon && (
        <div className="relative z-10 w-18 h-18 rounded-2xl bg-white shadow-[0_12px_30px_-8px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.02)] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] transition-all duration-500 ease-out preserve-3d">
           {/* Inner light reflection for 3D feel */}
           <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/80 bg-gradient-to-br from-white via-transparent to-black/[0.02]" />
           <div className="relative text-[#2A1638] [&>svg]:w-9 [&>svg]:h-9 group-hover:[&>svg]:rotate-3 transition-transform duration-500">
             {icon}
           </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 space-y-4">
        <h3 className="font-onest text-xl md:text-2xl font-bold text-[#2A1638] leading-tight tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-900 group-hover:to-indigo-900 transition-all duration-300">
          {title}
        </h3>
        <p className="font-onest text-[15px] md:text-base text-[#483953] leading-relaxed group-hover:text-[#2A1638] transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Bottom Shine Line */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}
