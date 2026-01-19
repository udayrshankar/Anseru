import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { type LucideIcon, Bot, User, Shield, Layers } from "lucide-react";
import AIHubAnimation from "./animation/AIHubAnimation";
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
  },
  {
    id: 2,
    title: "Smart Personalization",
    description:
      "Tone-aware and intent-driven responses that feel human and engaging.",
    label: "Personalization Core",
    icon: User,
  },
  {
    id: 3,
    title: "Team Consistency",
    description:
      "Maintain a unified brand voice across teams without manual reviews.",
    label: "Brand Voice Guard",
    icon: Shield,
  },
  {
    id: 4,
    title: "Workflow Integration",
    description:
      "Seamlessly integrate into your CRM and tools without disrupting habits.",
    label: "Integrations",
    icon: Layers,
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
      setDimensions({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
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
}: {
  label: string;
  icon: LucideIcon;
}) => (
  <div className="group relative w-full aspect-[16/10] rounded-2xl border border-white/20 bg-white/40 backdrop-blur-md shadow-lg overflow-hidden flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:shadow-xl hover:bg-white/60">
    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <Icon className="w-8 h-8 text-gray-700 mb-3 relative z-10" />
    <span className="text-sm font-semibold text-gray-700 relative z-10">
      {label}
    </span>
  </div>
);

/* ---------------------------------------------
   COMPONENT: RESPONSIVE PIPE (The Background Line)
--------------------------------------------- */
const ResponsivePipe = ({
  containerRef,
  progress,
}: {
  // FIX: Added ' | null' to allow the RefObject to be nullable
  containerRef: React.RefObject<HTMLDivElement | null>;
  progress: any;
}) => {
  const { width, height } = useDimensions(containerRef);

  // ALIGNMENT MATH:
  // We align the pipe to 108px from the left to match the grid column center
  // (Padding 48px + Half Column 60px = 108px)
  const startX = width / 2 + 50;
  const endX = 48 + 60;
  const radius = 40;

  if (width === 0) return null;

  const path = `
    M ${startX} -150 
    L ${startX} 80 
    Q ${startX} 120 ${startX - radius} 120 
    L ${endX + radius} 120 
    Q ${endX} 120 ${endX} 160 
    L ${endX} ${height - 150}
  `;

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block">
      <svg className="w-full h-full overflow-visible">
        {/* Inactive Gray Trace */}
        <path
          d={path}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Active Dark Fill */}
        <motion.path
          d={path}
          fill="none"
          stroke="url(#gradient-dark)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength: progress }}
        />
        <defs>
          <linearGradient id="gradient-dark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

/* ---------------------------------------------
   COMPONENT: TIMELINE NODE (The Dot)
--------------------------------------------- */
const TimelineNode = ({ isActive }: { isActive: boolean }) => (
  // POSITIONING MATH:
  // -translate-x-1/2: Centers the dot itself horizontally
  // -left-[92px]: Moves the center of the dot to the exact center of the left column
  // (Gap 32px + Half Column 60px = 92px away from this container's left edge)
  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 -left-[92px] hidden lg:flex items-center justify-center">
    {/* Outer Ring */}
    <div
      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
        isActive
          ? "border-black bg-white scale-125 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
          : "border-gray-300 bg-gray-50 scale-100"
      }`}
    >
      {/* Inner Dot */}
      <div
        className={`w-2 h-2 rounded-full transition-all duration-500 ${
          isActive ? "bg-black" : "bg-transparent"
        }`}
      />
    </div>

    {/* Pulse Effect when Active (Optional subtle glow) */}
    {isActive && (
      <div className="absolute inset-0 rounded-full border border-black animate-ping opacity-20 w-5 h-5" />
    )}
  </div>
);

/* ---------------------------------------------
   MAIN COMPONENT
--------------------------------------------- */
export default function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Controls the "Liquid" fill of the main pipe
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end 100%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative pb-32 overflow-hidden bg-gray-50/50">
      {/* BACKGROUND */}
      <div className="absolute inset-0 max-w-[1440px] mx-auto overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 max-w-[1373px] mx-auto rounded-[50px]"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "100% auto", // Width fills container, Height scales proportionally
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
            backgroundPosition: "center bottom", // Positions the image at the bottom center
            transform: "rotate(180deg)"
          }}
        />
         <div className="absolute inset-0 bg-linear-to-b from-white/0 via-[#f6f6f8] to-[#f6f6f8]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className=" pb-0 flex justify-center relative z-20">
          <AIHubAnimation />
        </div>

        <div className="relative mt-0">
          <div
            ref={containerRef}
            className="max-w-6xl mx-auto px-6 md:px-12 relative z-10"
          >
            {/* PIPE BACKGROUND */}
            <ResponsivePipe
              containerRef={containerRef}
              progress={smoothProgress}
            />

            <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8">
              <div className="hidden lg:block"></div>

              <div className="space-y-32 pt-48 pb-24">
                {STEPS.map((step, index) => (
                  <FeatureRow key={step.id} step={step} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------
   SUB-COMPONENT: ROW
--------------------------------------------- */
const FeatureRow = ({
  step,
  index,
}: {
  step: (typeof STEPS)[0];
  index: number;
}) => {
  const ref = useRef(null);

  // Triggers when the row is in the middle of the screen
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px", once: false });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="grid lg:grid-cols-2 gap-12 items-center relative"
    >
      {/* Pass Active State to the Dot */}
      <TimelineNode isActive={isInView} />

      <div className="text-left space-y-4">
        <h3
          className={`text-3xl font-semibold tracking-tight transition-colors duration-500 ${
            isInView ? "text-black" : "text-gray-400"
          }`}
        >
          {step.title}
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed max-w-md">
          {step.description}
        </p>
      </div>

      <div className="relative">
        <FeatureCard label={step.label} icon={step.icon} />
        {/* Soft back-glow behind card */}
        <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-full -z-10" />
      </div>
    </motion.section>
  );
};