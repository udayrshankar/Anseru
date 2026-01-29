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
    { id: "01", t: "Understand", d: "Auto-structure requirements.", c: "text-purple-500", bg: "hover:shadow-purple-500/20" },
    { id: "02", t: "Know", d: "Map to approved internal knowledge.", c: "text-pink-500", bg: "hover:shadow-pink-500/20" },
    { id: "03", t: "Respond", d: "Draft answers with evidence and confidence scores.", c: "text-fuchsia-500", bg: "hover:shadow-fuchsia-500/20" },
    { id: "04", t: "Learn", d: "Update the knowledge graph with every approval.", c: "text-indigo-500", bg: "hover:shadow-indigo-500/20" }
  ];

  return (
    <div className="w-full max-w-7xl h-full flex items-center justify-between px-16 mx-auto">
        <div className="w-1/3 space-y-10">
            <h2 className="text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                From upload <br/>
                to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">approved.</span>
            </h2>
            <p className="text-gray-500 text-xl font-light max-w-sm">The execution layer where enterprise deals are decided.</p>
        </div>

        <motion.div 
  variants={container}
  initial="hidden"
  animate="show"
  className="w-1/2 flex flex-col gap-3 mt-15" // Using flex-col for consistent spacing
>
  {steps.map((s, i) => (
    <motion.div
      key={i}
      variants={item}
      whileHover={{ x: 10, scale: 1.01 }}
      // This creates the "Step" shift to the right
      style={{ marginLeft: `${i * 48}px` }} 
      className="relative flex gap-8 group cursor-default w-full max-w-md"
    >
      {/* Timeline Visuals */}
      <div className="flex flex-col items-center">
        <div className={`
          z-20 flex items-center justify-center
          w-12 h-12 rounded-2xl text-base font-black
          ${s.c} bg-white border-2 border-gray-50
          shadow-[4px_4px_10px_rgba(0,0,0,0.05),-4px_-4px_10px_rgba(255,255,255,0.9)]
          group-hover:rotate-12 transition-transform duration-300
        `}>
          {s.id}
        </div>
        
        {/* Step Connector: Adjusted to lean towards the next step */}
        {i !== steps.length - 1 && (
          <div className="relative w-px h-12 my-2 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-transparent" />
             {/* Optional: Add a diagonal line if you want a "physical" connection */}
          </div>
        )}
      </div>

      {/* The "Depth" Card */}
      <div className={`
        relative flex-1 rounded-[24px] p-7
        bg-white border border-gray-100/80
        shadow-[0_10px_30px_-10px_rgba(0,0,0,0.07)]
        transition-all duration-500 overflow-hidden
        ${s.bg} hover:shadow-2xl
      `}>
        {/* Subtle Gradient Glow */}
        <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${s.c.replace('text', 'bg')}`} />

        <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
          {s.t}
        </h3>
        <p className="text-gray-500 font-medium leading-relaxed text-sm">
          {s.d}
        </p>
        
        {/* Bottom Accent Line */}
        <div className={`absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-50 group-hover:w-full transition-all duration-700 ${s.c}`} />
      </div>
    </motion.div>
  ))}
</motion.div>
    </div>
  );
}