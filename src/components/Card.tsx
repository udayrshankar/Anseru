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
        "group relative flex flex-col justify-between overflow-hidden rounded-[32px] p-6 md:p-8",
        "bg-[#F6F6F8]",
        "border border-black/[0.03] hover:shadow-lg transition-all duration-300",
        minHeight,
        className
      )}
    >
      {/* Background Decorator / Watermark */}
      {watermark && (
        <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 origin-bottom-right scale-125 pointer-events-none">
          {watermark}
        </div>
      )}

      {/* Floating Icon Box */}
      {icon && (
        <div className="relative z-10 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
          <div className="text-[#2A1638] [&>svg]:w-6 [&>svg]:h-6">
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
