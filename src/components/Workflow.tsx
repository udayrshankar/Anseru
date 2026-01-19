import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { type LucideIcon, Bot, User, Shield, Layers } from "lucide-react";
import AIHubAnimation from "./animation/AIHubAnimation";
import SmartDraftingAnimation from "./animation/SmartDraftingAnimation";
import SmartPersonalizationAnimation from "./animation/SmartPersonalizationAnimation";
import BrandVoiceAnimation from "./animation/BrandVoiceAnimation";
import IntegrationsAnimation from "./animation/IntegrationsAnimation";
import bgImage from "../assets/bg2.png";

// --- DATA ---
const STEPS = [
  {
    id: 1,
    title: "AI-Drafted Responses",
    description:
      "Generate clear, context-aware replies instantly using your knowledge base.",
    label: "Smart Drafting Engine",
    icon: Bot,
    component: SmartDraftingAnimation,
  },
  {
    id: 2,
    title: "Smart Personalization",
    description:
      "Tone-aware and intent-driven responses that feel human and engaging.",
    label: "Personalization Core",
    icon: User,
    component: SmartPersonalizationAnimation,
  },
  {
    id: 3,
    title: "Team Consistency",
    description:
      "Maintain a unified brand voice across teams without manual reviews.",
    label: "Brand Voice Guard",
    icon: Shield,
    component: BrandVoiceAnimation,
  },
  {
    id: 4,
    title: "Workflow Integration",
    description:
      "Seamlessly integrate into your CRM and tools without disrupting habits.",
    label: "Integrations",
    icon: Layers,
    component: IntegrationsAnimation,
  },
];

/* ---------------------------------------------
   HOOK: USE DIMENSIONS
--------------------------------------------- */
// FIX: Added ' | null' to the type definition to match useRef initialization
const useDimensions = (ref: React.RefObject<HTMLElement | null>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const target = entry.target as HTMLElement;
      setDimensions({
        width: target.clientWidth,
        height: target.clientHeight,
      });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return dimensions;
};

/* ---------------------------------------------
   COMPONENT: FEATURE CARD
--------------------------------------------- */
const FeatureCard = ({
  label,
  icon: Icon,
  component: AnimationComponent
}: {
  label: string;
  icon: LucideIcon;
  component: React.ComponentType;
}) => (
  <div className="group relative w-full aspect-[16/10] rounded-2xl border border-white/50 bg-white/90 shadow-lg overflow-hidden flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:shadow-xl">
    <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    
    {/* Animation Layer */}
    <div className="absolute inset-0 z-0">
        <AnimationComponent />
    </div>

    {/* Label Overlay - Reduced blur here too */}
    <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1 rounded-full border border-gray-100 shadow-sm z-10 flex items-center gap-2">
        <Icon className="w-4 h-4 text-gray-700" />
        <span className="text-xs font-semibold text-gray-700">
        {label}
        </span>
    </div>
  </div>
);

/* ---------------------------------------------
   COMPONENT: RESPONSIVE PIPE (Orthogonal Snake Path)
--------------------------------------------- */
const ResponsivePipe = ({
  containerRef,
  progress,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  progress: any;
}) => {
  const { width, height } = useDimensions(containerRef);

  if (width === 0) return null;

  // LAYOUT CONSTANTS
  const leftX = 40; // Fixed pixels from left
  const rightX = width - 40; // Fixed pixels from right
  const centerX = width / 2;
  const radius = 30; // Corner radius

  // We have 4 rows.
  // We need to distribute vertical segments.
  // Row 0 is at Top. Row 3 at Bottom.
  // The path needs to wrap around.
  // Start: Top Center (above Row 0) -> Left
  // Row 0 Side: Left
  // Cross: Left -> Right (between Row 0 & 1)
  // Row 1 Side: Right
  // Cross: Right -> Left (between Row 1 & 2)
  // Row 2 Side: Left
  // Cross: Left -> Right (between Row 2 & 3)
  // Row 3 Side: Right
  // End: Right Bottom or back to Center? 
  // Let's end at Bottom Right for now.

  const steps = 4;
  const stepHeight = height / steps; // Rough height per step

  // Key Y-coordinates (centers of gaps between rows)
  const yStart = 0;
  const yGap1 = stepHeight * 1;
  const yGap2 = stepHeight * 2;
  const yGap3 = stepHeight * 3;
  const yEnd = height;

  // Path Construction
  // 1. M Center Top -> Vertical down
  // 2. Curve to Horizontal Left
  // 3. Line to Left Top (with corner) -> Left Vertical
  // ...

  const path = `
    M ${centerX} ${yStart - 200}
    L ${centerX} ${yStart - radius}
    Q ${centerX} ${yStart} ${centerX - radius} ${yStart}
    L ${leftX + radius} ${yStart}
    Q ${leftX} ${yStart} ${leftX} ${yStart + radius}
    L ${leftX} ${yGap1 - radius}
    Q ${leftX} ${yGap1} ${leftX + radius} ${yGap1}
    L ${rightX - radius} ${yGap1}
    Q ${rightX} ${yGap1} ${rightX} ${yGap1 + radius}
    L ${rightX} ${yGap2 - radius}
    Q ${rightX} ${yGap2} ${rightX - radius} ${yGap2}
    L ${leftX + radius} ${yGap2}
    Q ${leftX} ${yGap2} ${leftX} ${yGap2 + radius}
    L ${leftX} ${yGap3 - radius}
    Q ${leftX} ${yGap3} ${leftX + radius} ${yGap3}
    L ${rightX - radius} ${yGap3}
    Q ${rightX} ${yGap3} ${rightX} ${yGap3 + radius}
    L ${rightX} ${yEnd}
  `;

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block">
      <svg className="w-full h-full overflow-visible">
        {/* Inactive Gray Trace */}
        <path
          d={path}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Scroll Hint Animation */}
        <motion.path
            d={path}
            fill="none"
            stroke="#9ca3af" // Intermediate gray (darker than base)
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
                pathLength: [0, 0.15, 0],
                opacity: [0, 1, 0]
            }}
            transition={{ 
                duration: 2.5,
                delay: 3, // Start after 3 seconds
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
            }}
        />

        {/* Active Dark Fill */}
        <motion.path
          d={path}
          fill="none"
          stroke="url(#gradient-dark)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength: progress }}
        />
        <defs>
          <linearGradient id="gradient-dark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
           <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
            markerWidth="6" markerHeight="6"
            orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

/* ---------------------------------------------
   MAIN COMPONENT
--------------------------------------------- */
export default function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 90%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative pb-32 overflow-hidden bg-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 max-w-[1400px] mx-auto overflow-hidden pointer-events-none">
        <div className="absolute inset-0 max-w-[1400px] mx-auto rounded-[50px] overflow-hidden">
          <div className="flex flex-col w-full">
             {[...Array(6)].map((_, i) => (
                <img 
                  key={i}
                  src={bgImage} 
                  alt="" 
                  className="w-full h-auto select-none pointer-events-none -mt-[18px]"
                  style={{ transform: i % 2 !== 0 ? 'scaleY(-1)' : 'none' }}
                />
             ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className=" pb-0 flex justify-center relative z-20">
          <AIHubAnimation />
        </div>

        <div className="relative mt-8">
          <div
            ref={containerRef}
            className="max-w-[1400px] mx-auto px-6 relative z-10"
          >
            {/* PIPE BACKGROUND (Snake Path) */}
            <ResponsivePipe
              containerRef={containerRef}
              progress={smoothProgress}
            />

            <div className="space-y-32 pt-24 pb-24 relative">
              {STEPS.map((step, index) => (
                <FeatureRow key={step.id} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------
   SUB-COMPONENT: ROW (ZigZag Layout)
--------------------------------------------- */
const FeatureRow = ({
  step,
  index,
}: {
  step: (typeof STEPS)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isEven = index % 2 === 0;
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px", once: false });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="grid lg:grid-cols-2 gap-16 items-center relative"
    >
      {/* LEFT COLUMN */}
      <div className={`space-y-4 ${isEven ? "lg:text-left lg:pl-12" : "relative"}`}>
        {isEven ? (
            // EVEN (0): Text on Left
            <div className="relative">
                <h3 className={`text-3xl font-semibold tracking-tight transition-colors duration-500 ${isInView ? "text-black" : "text-gray-400"}`}>
                    {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                </p>
            </div>
        ) : (
            // ODD (1): Card on Left
            <div className="relative">
                <FeatureCard label={step.label} icon={step.icon} component={step.component} />
            </div>
        )}
      </div>

      {/* RIGHT COLUMN */}
      <div className={`space-y-4 ${isEven ? "relative" : "lg:text-right lg:pr-12"}`}>
        {isEven ? (
            // EVEN (0): Card on Right
            <div className="relative">
                 <FeatureCard label={step.label} icon={step.icon} component={step.component} />
            </div>
        ) : (
             // ODD (1): Text on Right
             <div className="relative">
                <h3 className={`text-3xl font-semibold tracking-tight transition-colors duration-500 ${isInView ? "text-black" : "text-gray-400"}`}>
                    {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                     {step.description}
                </p>
             </div>
        )}
      </div>
    </motion.section>
  );
};
