import React from "react";
import { motion } from "framer-motion";
import {
  SiSlack,
  SiGooglesheets,
  SiJira,
  SiDropbox,
  SiGoogledrive,
} from "react-icons/si";
import { BsMicrosoftTeams } from "react-icons/bs";

/* --- 1. CONFIGURATION --- */
const leftApps = [
  { id: "teams", label: "Teams", icon: BsMicrosoftTeams, color: "#464EB8" },
  { id: "jira", label: "Jira", icon: SiJira, color: "#0052CC" },
  { id: "dropbox", label: "Dropbox", icon: SiDropbox, color: "#0061FF" },
];

const rightApps = [
  { id: "drive", label: "Drive", icon: SiGoogledrive, color: "#1EA362" },
  { id: "sheets", label: "Sheets", icon: SiGooglesheets, color: "#0F9D58" },
  { id: "slack", label: "Slack", icon: SiSlack, color: "#E01E5A" },
];

/* --- 2. MAIN COMPONENT --- */
const AIHubAnimation = React.memo(() => {
  const containerWidth = 1200;
  const containerHeight = 450;
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;

  const boxWidth = 240;
  const boxHeight = 80;

  // --- PATH GENERATOR ---
  const getCircuitPath = (side: "left" | "right", index: number, total: number) => {
    const spacing = 90;
    const yOffset = (index - (total - 1) / 2) * spacing;

    const startX = side === "left" ? 80 : containerWidth - 80;
    const startY = centerY + yOffset;
    
    const endX = side === "left" ? centerX - boxWidth / 2 : centerX + boxWidth / 2;
    const endY = centerY + (index - (total - 1) / 2) * 10; 

    const turnX = side === "left" ? startX + 140 : startX - 140;

    const verticalDist = Math.abs(endY - startY);
    const radius = Math.min(25, verticalDist / 2);

    const dirX = side === "left" ? 1 : -1;
    const dirY = startY < endY ? 1 : -1;

    let path = "";

    if (verticalDist < 2) {
       // Straight Line
       path = `M ${startX} ${startY} L ${endX} ${endY}`;
    } else {
       // Curved Line 
       path = `M ${startX} ${startY} L ${turnX - (radius * dirX)} ${startY} Q ${turnX} ${startY} ${turnX} ${startY + (radius * dirY)} L ${turnX} ${endY - (radius * dirY)} Q ${turnX} ${endY} ${turnX + (radius * dirX)} ${endY} L ${endX} ${endY}`;
    }

    return { 
      path: path.replace(/\s+/g, ' ').trim(), 
      startX, startY, endX, endY 
    };
  };

  return (
    <div
      className="relative mx-auto flex items-center justify-center font-sans overflow-hidden"
      style={{ width: containerWidth, height: containerHeight }}
    >
        {/* Background Blob - Optimized with simple opacity/translate instead of complex blur/filter chains if possible, sticking to opacity here */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-pink-100/50 blur-[80px] rounded-full opacity-60" 
         style={{ willChange: "transform" }} />
      </div>

      {/* SVG Layer */}
      <svg className="absolute inset-0 pointer-events-none z-10 overflow-visible">
          {/* REMOVED EXPENSIVE FILTER 'glow' */}

        {[...leftApps, ...rightApps].map((app, i) => {
          const side = i < leftApps.length ? "left" : "right";
          const index = i < leftApps.length ? i : i - leftApps.length;
          const { path, endX, endY } = getCircuitPath(side, index, leftApps.length);
          
          const gradientId = `grad-${side}-${i}`;
          
          return (
            <React.Fragment key={i}>
              <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={side === 'left' ? app.color : '#cbd5e1'} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={side === 'right' ? app.color : '#cbd5e1'} stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Static Wire */}
              <path d={path} stroke="#e2e8f0" strokeWidth="2" fill="none" />

              {/* Animated Gradient Wire - Optimized to just run opacities or simpler drawing */}
              <motion.path 
                 d={path}
                 stroke={`url(#${gradientId})`}
                 strokeWidth="2"
                 fill="none"
                 initial={{ pathLength: 0, opacity: 0.2 }}
                 animate={{ pathLength: 1, opacity: 1 }}
                 transition={{ duration: 1.5, delay: 0.2 }}
              />
              
              {/* Terminal Dot */}
              <circle cx={endX} cy={endY} r="3" fill="white" stroke={app.color} strokeWidth="2" />

              {/* FLOWING PARTICLE - Removed direct offset-path animation if it causes issues, but standard framer-motion path animation is usually ok on GPU. 
                  Removed 'filter' prop to speed up rendering.
              */}
              <motion.circle
                r="4" 
                fill={app.color} 
                // filter="url(#glow)" <--- REMOVED
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity: [0, 1, 1, 0], 
                    offsetDistance: ["0%", "100%"] 
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 1.5 
                }}
                style={{ offsetPath: `path('${path}')`, willChange: "offset-distance, opacity" }} 
              />
            </React.Fragment>
          );
        })}
      </svg>

      {/* Icons */}
      {[...leftApps, ...rightApps].map((app, i) => {
          const side = i < leftApps.length ? "left" : "right";
          const index = i < leftApps.length ? i : i - leftApps.length;
          const { startX, startY } = getCircuitPath(side, index, leftApps.length);
          
          return (
            <motion.div
              key={i}
              className="absolute z-20 flex items-center justify-center rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-sm"
              style={{
                left: startX,
                top: startY,
                width: 56, 
                height: 56,
                transform: "translate(-50%, -50%)",
                willChange: "transform"
              }}
            >
              <app.icon size={24} color={app.color} />
            </motion.div>
          );
      })}

      {/* Center Hub */}
      <div className="relative z-30">
        <motion.div
          className="relative flex flex-col items-center justify-center rounded-2xl border border-white/40 bg-white/10 backdrop-blur-2xl shadow-2xl"
          style={{ width: boxWidth, height: boxHeight, willChange: "transform, opacity" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
          <h1 className="text-4xl text-gray-900"
          style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
            ANSERU
          </h1>
          <div className="absolute -bottom-3 flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur shadow-sm rounded-full border border-gray-100">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 font-sans">System Active</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

export default AIHubAnimation;
