import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, x: -20, filter: "blur(4px)" },
  show: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function Slide5() {
  const steps = [
    { id: "01", t: "Connect Knowledge", d: "Policies, Security Docs, Past Responses", c: "text-purple-500", bg: "hover:shadow-purple-500/20", gradient: "bg-gradient-to-br from-purple-50 via-white to-purple-200" },
    { id: "02", t: "Ingest Deal Docs", d: "RFPs, Security Questionnaires", c: "text-pink-500", bg: "hover:shadow-pink-500/20", gradient: "bg-gradient-to-br from-pink-50 via-white to-pink-200" },
    { id: "03", t: "Generate Answers", d: "AI Drafts With Confidence Scoring", c: "text-fuchsia-500", bg: "hover:shadow-fuchsia-500/20", gradient: "bg-gradient-to-br from-fuchsia-50 via-white to-fuchsia-200" },
    { id: "04", t: "Review, Export & Reuse", d: "SMEs Approve, Answers Compound", c: "text-indigo-500", bg: "hover:shadow-indigo-500/20", gradient: "bg-gradient-to-br from-indigo-50 via-white to-indigo-200" }
  ];

  return (
    <div className="relative w-full h-full overflow-hidden">
        {/* Header Text - Top Left */}
        <div className="absolute top-40 left-32 z-20 max-w-xl space-y-4">
            <h2 className="text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                From Upload <br/>
                to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Approved.</span>
            </h2>
            <p className="text-gray-500 text-2xl font-light max-w-sm">The <span className="font-bold">Execution Layer</span> Where <br/> Enterprise Deals are Decided.</p>
        </div>

        {/* Diagonal Cards - Bottom-Left to Top-Right */}
        <motion.div 
          className="absolute inset-0 z-10 translate-x-15"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              style={{
                  position: 'absolute',
                  left: `${10 + (i * 18)}%`,  // Start at 10%, move right 18% each step
                  bottom: `${10 + (i * 15)}%`, // Start at 10%, move up 15% each step
                  zIndex: 10 + i
              }}
              whileHover={{ scale: 1.05, zIndex: 50 }}
              className="w-[320px]" // Fixed width for cards to stack nicely
            >
              {/* Timeline Visuals - Step Number */}
              <div className="absolute -left-6 -top-6 z-30">
                 <div className={`
                  flex items-center justify-center
                  w-12 h-12 rounded-2xl text-base font-black
                  ${s.c} bg-white border-2 border-gray-50
                  shadow-lg transform -rotate-12
                `}>
                  {s.id}
                </div>
              </div>

              {/* The "Depth" Card */}
              <div className={`
                relative rounded-[24px] p-8
                ${s.gradient} border border-gray-100/80
                shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]
                overflow-hidden
                ${s.bg} hover:shadow-2xl transition-all duration-300
              `}>
                {/* Subtle Gradient Glow */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${s.c.replace('text', 'bg')}`} />

                <h3 className="text-sm font-bold text-gray-900 mb-2 tracking-tight">
                  {s.t}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed text-sm">
                  {s.d}
                </p>
                
                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-current to-transparent opacity-30 ${s.c}`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
    </div>
  );
}