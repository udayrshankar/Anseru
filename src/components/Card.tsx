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
      whileHover={{ y: -8 }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-[32px] p-8 md:p-10",
        "bg-white border border-white/40 shadow-sm backdrop-blur-sm",
        "hover:shadow-xl hover:border-purple-100 transition-all duration-500",
        minHeight,
        className
      )}
    >
      {/* Mesh Gradient Background - Subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d2c2e4] via-[#FFFFFF] to-[#F8F5FF] opacity-100 group-hover:opacity-90 transition-opacity duration-500 -z-20" />
      
      {/* Background Decorator / Watermark */}
      {watermark && (
        <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 ease-out origin-bottom-right scale-125 group-hover:scale-150 pointer-events-none -z-10">
          {watermark}
        </div>
      )}

      {/* Floating Icon Box - Enlarged */}
      {icon && (
        <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-[#F9FAFB] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ease-out">
          <div className="text-[#2A1638] [&>svg]:w-8 [&>svg]:h-8">
             {icon}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 space-y-3">
        <h3 className="font-onest text-2xl font-medium text-[#2A1638] leading-tight">
          {title}
        </h3>
        <p className="font-onest text-base text-[#2A1638]/80 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
