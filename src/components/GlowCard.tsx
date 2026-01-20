import React from "react";

type GlowCardProps = {
  title: string;
  subtitle: string;
  color?: string;
};

const GlowCard: React.FC<GlowCardProps> = ({
  title,
  subtitle,
  color = "#C084FC",
}) => {
  return (
    <div className="relative w-[280px] h-[420px] rounded-[32px] bg-white p-[6px]">
      <div className="absolute inset-0 rounded-[32px] blur-2xl bg-black/30 -z-10" />

      <div className="relative w-full h-full rounded-[26px] overflow-hidden bg-gradient-to-b from-[#F6E9F9] via-white to-white">
        <div className="mt-4 flex justify-center z-20 relative">
          <div className="h-6 w-28 bg-black rounded-full flex items-center justify-start px-2">
            <div className="h-2 w-2 rounded-full bg-green-400" />
          </div>
        </div>

        <div className="absolute top-[32%] left-1/2 -translate-x-1/2 pointer-events-none">
          <div
            className="w-56 h-56 rounded-full blur-[90px] opacity-40 absolute -translate-x-1/2"
            style={{ backgroundColor: color }}
          />
          <div
            className="w-44 h-44 rounded-full blur-[70px] opacity-50 absolute -translate-x-1/2"
            style={{ backgroundColor: color }}
          />
        </div>

        <div className="relative mt-16 flex justify-center z-10">
          <div
            className="w-36 h-36 rounded-full"
            style={{
              background: `linear-gradient(180deg, ${color} 0%, #FFE6F3 100%)`,
              boxShadow: `
                inset 0 8px 16px rgba(255,255,255,0.6),
                0 30px 60px ${color}66
              `,
            }}
          />
        </div>

        <div className="absolute bottom-0 w-full px-6 pb-10 text-left z-20">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {title}
          </h3>
          <p className="text-smalls text-gray-600 leading-snug">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlowCard;