import React from "react";
import { cn } from "../../lib/utils"; // Assuming a utility compatible with tailwind-merge exists, if not I'll just use template literals or standard joining

interface GlassGridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

const  GlassGridBackground: React.FC<GlassGridBackgroundProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative w-full h-full min-h-screen overflow-hidden opacity-50",
        className
      )}
      style={{
        background: "var(--image-gradient-ocean-breeze)",
      }}
    >
      {/* Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />

      {/* Glass Effect Overlay for depth */}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassGridBackground;
