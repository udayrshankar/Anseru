import { motion } from "framer-motion";
import { Link, ShieldCheck } from "lucide-react";

const sources = [
  { id: "policies", label: "Policies", x: -120, y: -70, color: "#6366F1" },
  { id: "controls", label: "Controls", x: 130, y: -40, color: "#8B5CF6" },
  { id: "evidence", label: "Evidence", x: -110, y: 100, color: "#22C55E" },
  { id: "rfps", label: "Past RFPs", x: 120, y: 90, color: "#0EA5E9" },
];

const NewConnectAnimation = () => {
  return (
    <div className="relative w-full h-[300px] bg-gradient-to-br from-white via-slate-50 to-indigo-50/70 rounded-xl overflow-hidden flex items-center justify-center border border-indigo-100 shadow-xl shadow-indigo-100/50">
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
          {sources.map((source) => (
            <line
              key={source.id}
              x1={200}
              y1={150}
              x2={200 + source.x}
              y2={150 + source.y}
              stroke="rgba(148, 163, 184, 0.4)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
          ))}
          <circle cx="200" cy="150" r="56" fill="url(#hubGradient)" />
          <defs>
            <radialGradient id="hubGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 150) scale(56)">
              <stop stopColor="#F8FAFF" />
              <stop offset="1" stopColor="#EDE9FE" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-20 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl"
        />
        <div className="w-20 h-20 bg-white/90 rounded-2xl border border-indigo-100 shadow-lg flex flex-col items-center justify-center gap-1">
          <ShieldCheck className="w-6 h-6 text-indigo-600" />
          <span className="text-[10px] font-semibold text-slate-500">Secure Hub</span>
        </div>
      </div>

      {sources.map((source, index) => (
        <motion.div
          key={source.id}
          className="absolute top-1/2 left-1/2"
          initial={{ x: source.x, y: source.y, opacity: 0, scale: 0.85 }}
          animate={{
            x: [source.x, source.x * 0.92, source.x],
            y: [source.y, source.y * 0.92, source.y],
            opacity: [0, 1, 1],
            scale: [0.85, 1, 0.95],
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
        >
          <div className="relative flex items-center gap-2 px-3 py-1.5 bg-white/90 border border-slate-100 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: source.color }} />
            <span className="text-xs font-semibold text-slate-600">{source.label}</span>
            <Link className="w-3 h-3 text-slate-400" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export const NewUploadAnimation = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-50 via-white to-indigo-50/60 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)", backgroundSize: "22px 22px" }}
      />

      <div className="relative z-10 flex items-center gap-6">
        <div className="space-y-3">
          {[
            { label: "RFP_Q3.pdf", color: "#6366F1" },
            { label: "Security_Review.docx", color: "#7C3AED" },
            { label: "Vendor_Assessment.xlsx", color: "#0EA5E9" },
          ].map((file, index) => (
            <motion.div
              key={file.label}
              className="flex items-center gap-3 px-3 py-2 bg-white/90 border border-slate-100 rounded-lg shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: [0, 1, 1, 0], x: [-20, 0, 0, 20] }}
              transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.6, ease: "easeInOut" }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: file.color }} />
              <span className="text-xs font-semibold text-slate-600">{file.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <div className="relative w-52 h-36 rounded-2xl border-2 border-dashed border-indigo-200 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 shadow-md">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Upload Queue
            </div>
            <div className="w-24 h-24 rounded-full border border-indigo-200 flex items-center justify-center">
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </motion.div>
            </div>
            <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                animate={{ width: ["10%", "100%", "10%"] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span className="text-[10px] text-slate-400">Parsing in progress</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewConnectAnimation;
