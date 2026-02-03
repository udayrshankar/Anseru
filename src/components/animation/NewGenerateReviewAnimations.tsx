import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, FileText, ShieldCheck, Archive } from "lucide-react";

export const NewGenerateAnimation = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-indigo-50/50 to-emerald-50/40">
      <div className="absolute inset-0">
        <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.2em] text-slate-400">Knowledge + Intent</div>
        <div className="absolute bottom-6 right-6 text-[10px] uppercase tracking-[0.2em] text-slate-400">Confidence</div>
      </div>

      <div className="relative w-full max-w-[300px] h-[220px] flex items-center justify-center">
        <motion.div
          className="absolute left-0 w-24 h-2 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
          animate={{ x: [0, 120], opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 w-24 h-2 rounded-full bg-gradient-to-l from-transparent via-emerald-500 to-transparent"
          animate={{ x: [0, -120], opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        <motion.div
          className="relative w-44 h-28 rounded-2xl bg-white/90 backdrop-blur border border-white/70 shadow-[0_12px_30px_rgba(15,23,42,0.08)] p-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>Draft Response</span>
            <Sparkles className="w-3 h-3 text-indigo-500" />
          </div>
          <div className="mt-3 space-y-2">
            {["", "", ""].map((_, index) => (
              <motion.div
                key={index}
                className="h-1.5 rounded-full bg-slate-100"
                animate={{ width: ["40%", "90%", "60%"] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
              />
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="text-[10px] font-semibold text-emerald-600">High confidence</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute -right-6 -top-6 w-16 h-16 rounded-2xl bg-white/90 border border-indigo-100 shadow-lg flex items-center justify-center"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <FileText className="w-6 h-6 text-indigo-500" />
        </motion.div>

        <motion.div
          className="absolute -left-6 bottom-0 w-16 h-16 rounded-2xl bg-white/90 border border-emerald-100 shadow-lg flex items-center justify-center"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <CheckCircle2 className="w-6 h-6 text-emerald-500" />
        </motion.div>
      </div>
    </div>
  );
};

export const NewReviewAnimation = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-purple-50/60 to-indigo-50/50">
      <div className="absolute inset-0" />

      <div className="relative w-full max-w-[300px] h-[220px]">
        <div className="absolute left-6 top-8">
          <div className="w-28 h-16 rounded-2xl bg-white/90 border border-slate-100 shadow-md flex flex-col items-start justify-center p-3 gap-1">
            <span className="text-[10px] uppercase tracking-widest text-slate-400">Review</span>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-semibold text-slate-600">Answer set</span>
            </div>
          </div>
        </div>

        <div className="absolute right-6 bottom-8">
          <div className="w-28 h-16 rounded-2xl bg-white/90 border border-slate-100 shadow-md flex flex-col items-start justify-center p-3 gap-1">
            <span className="text-[10px] uppercase tracking-widest text-slate-400">Reuse</span>
            <div className="flex items-center gap-2">
              <Archive className="w-4 h-4 text-indigo-500" />
              <span className="text-xs font-semibold text-slate-600">Library</span>
            </div>
          </div>
        </div>

        <svg className="absolute inset-0" viewBox="0 0 300 220" fill="none">
          <path
            d="M70 80 C140 30 200 40 230 120"
            stroke="#C7D2FE"
            strokeWidth="2"
            strokeDasharray="6 8"
          />
          <circle cx="70" cy="80" r="3" fill="#A5B4FC" />
          <circle cx="230" cy="120" r="3" fill="#A5B4FC" />
        </svg>

        <motion.div
          className="absolute w-10 h-10 rounded-full bg-white/90 border border-emerald-100 shadow-lg flex items-center justify-center"
          style={{ left: "70px", top: "80px" }}
          animate={{
            x: [0, 90, 160],
            y: [0, -30, 40],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
        </motion.div>

        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-white/90 border border-purple-100 shadow-lg flex items-center justify-center"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ShieldCheck className="w-6 h-6 text-purple-500" />
        </motion.div>
      </div>
    </div>
  );
};
