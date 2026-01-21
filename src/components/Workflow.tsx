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
  const centerX = width / 2;
  const leftX = width * 0.23; 
  const rightX = width * 0.77;
  const radius = 40; // Corner radius for rounded 90-degree turns

  // Steps correspond to rows (centers of cards)
  const steps = 4;
  const stepHeight = height / steps; 

  const p0 = { x: rightX, y: stepHeight * 0.5 }; // Row 0: Right
  const p1 = { x: leftX, y: stepHeight * 1.5 };  // Row 1: Left
  const p2 = { x: rightX, y: stepHeight * 2.5 }; // Row 2: Right
  const p3 = { x: leftX, y: stepHeight * 3.5 };  // Row 3: Left (Termination)

  // Midpoints for vertical transitions
  const midY01 = (p0.y + p1.y) / 2;
  const midY12 = (p1.y + p2.y) / 2;
  const midY23 = (p2.y + p3.y) / 2;

  // Path Construction: Orthogonal with Rounded Corners
  // Start: Top Center (above) -> Vertical Down -> Turn Right
  // We start at (centerX, -80) to give it enough vertical drop from the AIHub component
  let path = `M ${centerX} -200`;
  
  // 0. Drop down and turn Right
  //    Line down to (centerX, -radius) relative to turning point 0? 
  //    Actually let's turn at y=0.
  path += ` L ${centerX} -${radius}`;
  path += ` Q ${centerX} 0 ${centerX + radius} 0`;

  // 1. Go Right towards P0 column
  //    Line to (rightX - radius, 0)
  path += ` L ${p0.x - radius} 0`;
  path += ` Q ${p0.x} 0 ${p0.x} ${radius}`;
  path += ` L ${p0.x} ${midY01 - radius}`; // Go through P0 down to next turn

  // 2. Turn Left towards P1
  //    Arc to (rightX - radius, midY01)
  //    Line to (leftX + radius, midY01)
  //    Arc to (leftX, midY01 + radius)
  //    Line to (leftX, midY12 - radius)
  path += ` Q ${p0.x} ${midY01} ${p0.x - radius} ${midY01}`;
  path += ` L ${p1.x + radius} ${midY01}`;
  path += ` Q ${p1.x} ${midY01} ${p1.x} ${midY01 + radius}`;
  path += ` L ${p1.x} ${midY12 - radius}`; // Go through P1 down to next turn

  // 3. Turn Right towards P2
  //    Arc to (leftX + radius, midY12)
  //    Line to (rightX - radius, midY12)
  //    Arc to (rightX, midY12 + radius)
  //    Line to (rightX, midY23 - radius)
  path += ` Q ${p1.x} ${midY12} ${p1.x + radius} ${midY12}`;
  path += ` L ${p2.x - radius} ${midY12}`;
  path += ` Q ${p2.x} ${midY12} ${p2.x} ${midY12 + radius}`;
  path += ` L ${p2.x} ${midY23 - radius}`; // Go through P2 down to next turn

  // 4. Turn Left towards P3 (Termination)
  //    Arc to (rightX - radius, midY23)
  //    Line to (leftX + radius, midY23)
  //    Arc to (leftX, midY23 + radius)
  //    Line to (leftX, p3.y) --> Terminate at P3 center
  path += ` Q ${p2.x} ${midY23} ${p2.x - radius} ${midY23}`;
  path += ` L ${p3.x + radius} ${midY23}`;
  path += ` Q ${p3.x} ${midY23} ${p3.x} ${midY23 + radius}`;
  path += ` L ${p3.x} ${p3.y}`;

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
            stroke="#9ca3af" 
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
                pathLength: [0, 0.4, 0], 
                opacity: [0, 1, 0]
            }}
            transition={{ 
                duration: 4, 
                delay: 1,
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
        <div className="hidden lg:block pb-0 flex justify-center relative z-20">
          <AIHubAnimation />
        </div>

        <div className="relative mt-8">
          <div
            ref={containerRef}
            className="max-w-[1400px] mx-auto px-6 xl:px-[120px] relative z-10"
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
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative"
    >
      {/* LEFT COLUMN */}
      <div className={`lg:col-span-6 space-y-4 ${isEven ? "lg:text-left lg:pl-12 order-1 lg:order-1" : "relative order-2 lg:order-1"}`}>
        {isEven ? (
            // EVEN (0): Text on Left
            <div className="relative">
                <h3 className={`text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-500 ${isInView ? "text-black" : "text-gray-400"}`}>
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
      <div className={`lg:col-span-6 space-y-4 ${isEven ? "relative order-2 lg:order-2" : "lg:text-right lg:pr-12 order-1 lg:order-2"}`}>
        {isEven ? (
            // EVEN (0): Card on Right
            <div className="relative">
                 <FeatureCard label={step.label} icon={step.icon} component={step.component} />
            </div>
        ) : (
             // ODD (1): Text on Right
             <div className="relative">
                <h3 className={`text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-500 ${isInView ? "text-black" : "text-gray-400"}`}>
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
