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
          The Problem{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Always Existed
            <span className="absolute left-0 -bottom-1 w-full h-[6px] bg-violet-200/40 rounded-full" />
          </span>
          .
        </h2>
        <p className="text-lg md:text-xl text-gray-500 mt-4 font-light">
          The Infrastructure to Solve it Did Not.
        </p>
      </motion.div>

      {/* ---------- MAIN CONTENT ---------- */}
      <div className="relative w-full max-w-6xl flex-1 flex items-center">

        <div className="w-full flex gap-12 items-start relative z-10">

          {/* ---------- BEFORE ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -28, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-1/2 pr-6" // balanced padding
          >
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-10 h-6">
              Structural Constraints
            </p>

            <ul className="space-y-12">
              <li>
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-gray-300 shrink-0" />
                    <h3 className="text-xl font-semibold text-gray-500">
                    Unstructured Workflows
                    </h3>
                </div>
                <p className="text-md text-gray-400 mt-2 leading-relaxed pl-6">
                  Fragmented Document Based Workflows
                </p>
              </li>

              <li>
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-gray-300 shrink-0" />
                    <h3 className="text-xl font-semibold text-gray-500">
                    Manual Review Everywhere
                    </h3>
                </div>
                <p className="text-md text-gray-400 mt-2 leading-relaxed pl-6">
                  No Automation Intelligence
                </p>
              </li>

              <li>
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-gray-300 shrink-0" />
                    <h3 className="text-xl font-semibold text-gray-500">
                    Unsafe AI
                    </h3>
                </div>
                <p className="text-md text-gray-400 mt-2 leading-relaxed pl-6">
                  Intelligence Without Reliability.
                </p>
              </li>
            </ul>
          </motion.div>

          {/* ---------- NOW ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 28, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="w-1/2 pl-6 border-l border-gray-100" // balanced padding + separator
          >
            <p className="text-sm uppercase tracking-[0.3em] text-violet-600 mb-10 h-6">
              Structural Breakthrough
            </p>

            <ul className="space-y-12">
              {[
                {
                  title: "Context - Aware Reasoning",
                  desc: "Answers Grounded in Context, not Guesswork",
                },
                {
                  title: "Confidence-Scored Outputs",
                  desc: "Models Know When to Stop and Escalate.",
                },
                {
                  title: "Human-in-the-Loop",
                  desc: "Oversight Becomes a Native Capability.",
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
                  <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-violet-600 shrink-0" />
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                  </div>
                  <p className="text-md text-gray-600 mt-2 max-w-md leading-relaxed pl-6">
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
