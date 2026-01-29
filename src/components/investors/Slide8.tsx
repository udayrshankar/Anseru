import { motion } from "framer-motion";

export default function Slide8() {
  const levels = [
    { 
        title: "Today: RFP & Security Automation", 
        desc: "Point solution for high-friction documents.", 
        style: "bg-gray-50 border-gray-200 text-gray-500",
        z: "z-10", scale: 0.9, opacity: 0.6 
    },
    { 
        title: "Tomorrow: Deal Intelligence System", 
        desc: "Learning how deals are negotiated and approved.", 
        style: "bg-white border-purple-200 shadow-xl text-gray-900",
        z: "z-20", scale: 1, opacity: 1 
    },
    { 
        title: "Future: The Revenue OS", 
        desc: "The first layer of true deal infrastructure.", 
        style: "bg-gray-900 border-gray-800 text-white shadow-2xl",
        z: "z-30", scale: 1.1, opacity: 1 
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative bg-white px-6">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold text-gray-900 mb-24 text-center tracking-tight"
      >
        From Automation to <span className="text-purple-600">Infrastructure.</span>
      </motion.h2>

      <div className="relative w-full max-w-3xl flex flex-col items-center">
        {levels.map((level, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: level.opacity, y: 0, rotateX: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
            className={`w-full p-10 rounded-[2.5rem] border ${level.style} ${level.z} -mt-10 transition-transform hover:-translate-y-4 cursor-default text-center`}
            style={{ scale: level.scale }}
          >
            <h3 className="text-3xl font-bold tracking-tight">{level.title}</h3>
            <p className="mt-2 text-lg opacity-70 font-medium">{level.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}