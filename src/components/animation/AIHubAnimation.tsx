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
  { id: "teams", label: "Teams", icon: BsMicrosoftTeams, color: "#4C5BD6" },
  { id: "jira", label: "Jira", icon: SiJira, color: "#2B6CB0" },
  { id: "dropbox", label: "Dropbox", icon: SiDropbox, color: "#2563EB" },
];

const rightApps = [
  { id: "drive", label: "Drive", icon: SiGoogledrive, color: "#16A34A" },
  { id: "sheets", label: "Sheets", icon: SiGooglesheets, color: "#22C55E" },
  { id: "slack", label: "Slack", icon: SiSlack, color: "#E11D48" },
];

/* --- 2. MAIN COMPONENT --- */
const AIHubAnimation = React.memo(() => {
  const [dimensions, setDimensions] = React.useState({ width: 1200, height: 450 });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      const width = Math.min(window.innerWidth - 32, 1200);
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setDimensions({
        width,
        height: mobile ? 650 : 450,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { width: containerWidth, height: containerHeight } = dimensions;
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;

  const boxWidth = isMobile ? Math.min(240, containerWidth - 40) : 240;
  const boxHeight = 84;

  const [delays, setDelays] = React.useState<number[]>([]);

  React.useEffect(() => {
    setDelays([0, 0.6, 1.2, 0.3, 0.9, 1.5]);
  }, []);

  const getCircuitPath = (side: "left" | "right", index: number, total: number) => {
    if (!isMobile) {
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
        path = `M ${startX} ${startY} L ${endX} ${endY}`;
      } else {
        path = `M ${startX} ${startY} L ${turnX - radius * dirX} ${startY} Q ${turnX} ${startY} ${turnX} ${startY + radius * dirY} L ${turnX} ${endY - radius * dirY} Q ${turnX} ${endY} ${turnX + radius * dirX} ${endY} L ${endX} ${endY}`;
      }

      return {
        path: path.replace(/\s+/g, " ").trim(),
        startX,
        startY,
        endX,
        endY,
      };
    }

    const isTop = side === "left";

    const spacingX = containerWidth < 500 ? containerWidth / (total + 1) : 100;
    const xOffset = (index - (total - 1) / 2) * spacingX;

    const startY = isTop ? 60 : containerHeight - 60;
    const startX = centerX + xOffset;

    const endY = isTop ? centerY - boxHeight / 2 : centerY + boxHeight / 2;
    const endX = centerX + (index - (total - 1) / 2) * 20;

    const turnY = isTop ? startY + 80 : startY - 80;

    const horizontalDist = Math.abs(endX - startX);
    const radius = Math.min(25, horizontalDist / 2);

    const dirY = isTop ? 1 : -1;
    const dirX = startX < endX ? 1 : -1;

    let path = "";

    if (horizontalDist < 2) {
      path = `M ${startX} ${startY} L ${endX} ${endY}`;
    } else {
      path = `M ${startX} ${startY} L ${startX} ${turnY - radius * dirY} Q ${startX} ${turnY} ${startX + radius * dirX} ${turnY} L ${endX - radius * dirX} ${turnY} Q ${endX} ${turnY} ${endX} ${turnY + radius * dirY} L ${endX} ${endY}`;
    }

    return {
      path: path.replace(/\s+/g, " ").trim(),
      startX,
      startY,
      endX,
      endY,
    };
  };

  return (
    <div
      className="relative mx-auto flex items-center justify-center font-sans overflow-hidden transition-all duration-300"
      style={{ width: containerWidth, height: containerHeight }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-100/60 via-purple-100/60 to-rose-100/60 blur-[90px] rounded-full opacity-70 transition-all duration-500
            ${isMobile ? "w-[320px] h-[520px]" : "w-[620px] h-[320px]"}`}
          style={{ willChange: "transform" }}
        />
      </div>

      <svg className="absolute inset-0 pointer-events-none z-10 overflow-visible">
        {[...leftApps, ...rightApps].map((app, i) => {
          const side = i < leftApps.length ? "left" : "right";
          const index = i < leftApps.length ? i : i - leftApps.length;
          const { path } = getCircuitPath(side, index, leftApps.length);

          const gradientId = `grad-${side}-${i}`;

          return (
            <React.Fragment key={`${i}-${isMobile ? "m" : "d"}`}>
              <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={app.color} stopOpacity="0.15" />
                  <stop offset="50%" stopColor={app.color} stopOpacity="0.6" />
                  <stop offset="100%" stopColor={app.color} stopOpacity="0.15" />
                </linearGradient>
              </defs>

              <path d={path} stroke="#E2E8F0" strokeWidth="2" fill="none" />

              <motion.path
                d={path}
                stroke={`url(#${gradientId})`}
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0.3 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.8, delay: 0.2 }}
              />

              <motion.circle
                r="4"
                fill={app.color}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.9, 0.9, 0],
                  offsetDistance: ["0%", "100%"],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delays[i],
                }}
                style={{ offsetPath: `path('${path}')`, willChange: "offset-distance, opacity" }}
              />
            </React.Fragment>
          );
        })}
      </svg>

      {[...leftApps, ...rightApps].map((app, i) => {
        const side = i < leftApps.length ? "left" : "right";
        const index = i < leftApps.length ? i : i - leftApps.length;
        const { startX, startY } = getCircuitPath(side, index, leftApps.length);

        return (
          <motion.div
            key={app.id}
            className="absolute z-20 flex items-center justify-center rounded-2xl border border-white/70 bg-white/80 backdrop-blur-xl shadow-sm -translate-x-2 -translate-y-6"
            style={{
              left: startX,
              top: startY,
              width: 56,
              height: 56,
              transform: "translate(-50%, -50%)",
              willChange: "transform",
            }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          >
            <app.icon size={24} color={app.color} />
          </motion.div>
        );
      })}

      <div className="relative z-30">
        <motion.div
          className="relative flex flex-col items-center justify-center rounded-2xl border border-white/70 bg-white/70 backdrop-blur-2xl shadow-2xl transition-all duration-300"
          style={{ width: boxWidth, height: boxHeight, willChange: "transform, opacity" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="absolute inset-0 rounded-2xl border border-white/40 pointer-events-none" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-slate-500">Anseru Core</span>
          <h1
            className="text-3xl md:text-4xl text-[#2A1638] text-center px-4"
            style={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700 }}
          >
            ANSERU
          </h1>
          <div className="absolute -bottom-3 flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur shadow-sm rounded-full border border-gray-100">
            <motion.div
              className="w-2 h-2 rounded-full bg-emerald-500"
              style={{ boxShadow: "0 0 10px 2px rgba(16, 185, 129, 0.35)" }}
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.15, 0.9] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 font-sans">
              Agents Active
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

export default AIHubAnimation;
