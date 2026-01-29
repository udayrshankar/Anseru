import { motion } from "framer-motion";

export default function Slide3() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center px-6 pt-[15vh] pb-[15vh] overflow-hidden">

      {/* ---------- ATMOSPHERIC DEPTH ---------- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-56 left-1/3 w-[700px] h-[700px] rounded-full 
          bg-violet-200/25 blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full 
          bg-pink-100/30 blur-[160px]" />
      </div>

      {/* ---------- HEADER ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 22, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-center mb-12 max-w-3xl"
      >
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
          The problem{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            always existed
            <span className="absolute left-0 -bottom-1 w-full h-[6px] bg-violet-200/40 rounded-full" />
          </span>
          .
        </h2>
        <p className="text-lg md:text-xl text-gray-500 mt-4 font-light">
          The infrastructure to solve it did not.
        </p>
      </motion.div>

      {/* ---------- MAIN CONTENT ---------- */}
      <div className="relative w-full max-w-6xl flex-1 flex items-center">

        {/* Vertical evolution spine */}
        <div className="absolute left-1/2 top-6 bottom-6 w-px 
          bg-gradient-to-b from-transparent via-gray-300/70 to-transparent" />

        {/* Nodes */}
        <div className="absolute left-1/2 top-[22%] -translate-x-1/2 w-2 h-2 rounded-full bg-gray-300" />
        <div className="absolute left-1/2 bottom-[22%] -translate-x-1/2 w-2 h-2 rounded-full bg-violet-400" />

        <div className="w-full flex gap-16 items-center relative z-10">

          {/* ---------- BEFORE ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -28, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-[40%] pr-12"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-8">
              Structural constraints
            </p>

            <ul className="space-y-7">
              <li>
                <h3 className="text-base font-semibold text-gray-500">
                  Fragmented execution paths
                </h3>
                <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                  Systems operated in isolation.
                </p>
              </li>

              <li>
                <h3 className="text-base font-semibold text-gray-500">
                  Diffuse accountability
                </h3>
                <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                  Humans and AI deferred responsibility.
                </p>
              </li>

              <li>
                <h3 className="text-base font-semibold text-gray-500">
                  Probabilistic behavior
                </h3>
                <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                  Intelligence without reliability.
                </p>
              </li>
            </ul>
          </motion.div>

          {/* ---------- NOW ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 28, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="w-[60%] pl-12"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-violet-600 mb-8">
              Structural breakthrough
            </p>

            <ul className="space-y-9">
              {[
                {
                  title: "Deterministic reasoning layers",
                  desc: "Systems behave consistently across long contexts.",
                },
                {
                  title: "Confidence-aware intelligence",
                  desc: "Models know when to stop and escalate.",
                },
                {
                  title: "Governed human–AI loops",
                  desc: "Oversight becomes a native capability.",
                },
              ].map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.45 + i * 0.12,
                  }}
                >
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 max-w-md leading-relaxed">
                    {item.desc}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>


    </section>
  );
}
