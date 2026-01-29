import { motion, type Variants } from "framer-motion";

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


export default function Slide5() {
  const steps = [
      { id: "01", t: "Understand", d: "Auto-structure requirements.", c: "text-purple-500" },
      { id: "02", t: "Know", d: "Map to approved internal knowledge.", c: "text-pink-500" },
      { id: "03", t: "Respond", d: "Draft answers with confidence scores.", c: "text-fuchsia-500" },
      { id: "04", t: "Learn", d: "Update graph with every approval.", c: "text-indigo-500" }
  ];

  return (
    <div className="w-full max-w-7xl h-full flex items-center justify-between px-16 mx-auto">
        <div className="w-1/3 space-y-10 animate-[fadeInLeft_0.8s]">
            <h2 className="text-7xl font-bold text-gray-900 leading-none tracking-tight">
                From upload <br/>
                to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">approved.</span>
            </h2>
            <p className="text-gray-500 text-xl font-light">The execution layer where enterprise deals are decided.</p>
        </div>

        <div className="w-1/2 space-y-2 mt-5">
            {steps.map((s, i) => (
                <motion.div
  key={i}
  variants={item}
  className="relative flex gap-6 group"
>
  {/* Timeline column */}
  <div className="relative flex flex-col items-center">
    {/* Vertical line */}
    <div className="absolute top-6 h-full w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

    {/* Node */}
    <div
      className={`
        relative z-10 flex items-center justify-center
        w-10 h-10 rounded-full text-sm font-bold
        ${s.c}
        bg-gradient-to-br from-white to-gray-100
        border border-white/70
        shadow-md
        group-hover:scale-110
        group-hover:shadow-[0_0_20px_rgba(236,72,153,0.35)]
        transition-all duration-300
      `}
    >
      {s.id}
    </div>
  </div>

  {/* Content Card */}
  <div
    className="
      relative flex-1
      rounded-2xl
      p-6
      bg-gradient-to-br from-white/75 to-white/40
      backdrop-blur-xl
      border border-white/60
      shadow-[0_8px_24px_rgba(0,0,0,0.08)]
      transition-all duration-300
      group-hover:scale-[1.015]
      group-hover:shadow-[0_16px_40px_rgba(236,72,153,0.18)]
    "
  >
    {/* Accent bar */}
    <div
      className={`
        absolute left-0 top-4 bottom-4 w-0.5 rounded-full
        ${s.c}
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
      `}
    />

    <h3 className="text-lg font-semibold text-gray-900 leading-tight">
      {s.t}
    </h3>

    <p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-[95%]">
      {s.d}
    </p>

    {/* Micro-interaction underline */}
    <div className="mt-4 h-px w-0 bg-gradient-to-r from-pink-400 to-transparent group-hover:w-16 transition-all duration-500" />
  </div>
</motion.div>

            ))}
        </div>
    </div>
  );
}