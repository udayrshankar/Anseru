import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface MetricItem {
  t: string;
  d: string;
}

const MetricCard = ({ item, index }: { item: MetricItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex-1 group"
    >
      <div className="h-full w-full relative p-8 rounded-[2rem] border border-black/20 bg-white/50 backdrop-blur-sm flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(236,72,153,0.08)] hover:bg-white hover:border-pink-100/50">
        {/* Grain Texture Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply contrast-125" 
             style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />

        <div className="relative z-10 space-y-4">
             <div className="w-12 h-1 bg-slate-900 rounded-full group-hover:bg-pink-500 transition-colors duration-500" />
             <h3 className="text-xl font-bold text-slate-900 tracking-tight">{item.t}</h3>
             <p className="text-[20px] font-light text-black leading-relaxed group-hover:text-slate-600 transition-colors">{item.d}</p>
        </div>

        {/* Localized Hover Glow */}
        <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full blur-[60px] bg-pink-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </motion.div>
  );
};

export default function Slide9() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-12 overflow-hidden relative">
        {/* Global Grain Matte Filter */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay" 
             style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />

        {/* Atmospheric Branding Layers */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-purple-50/40 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[20%] w-[40%] h-[40%] bg-pink-50/30 rounded-full blur-[120px]" />
        </div>

        <div className="w-full z-10 flex flex-col items-center">
            
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16 relative"
            >
                <div className="absolute -inset-10 bg-gradient-to-r from-purple-100/20 to-pink-100/20 blur-3xl -z-10 rounded-full" />
                <span className="text-sm font-bold text-slate-400 uppercase tracking-[0.6em] block">The Ask</span>
                <h2 className="text-[100px] font-black text-slate-900 leading-none tracking-tighter">
                    $3–4M <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Seed</span>
                </h2>
                <p className="text-2xl text-slate-500 font-light tracking-tight max-w-2xl mx-auto">
                    We’re raising to scale what’s already working.
                </p>
            </motion.div>

            {/* "Why" Cards */}
            <div className="grid grid-cols-3 gap-6 w-full mb-16">
                {[
                    {t:"Convert Pilots", d:"Turn live enterprise pilots into revenue."},
                    {t:"Repeatedable GTM", d:"Build a repeatable sales motion."},
                    {t:"Scale Product", d:"Enterprise-grade security & reliability."}
                ].map((item, i) => (
                    <MetricCard key={i} item={item} index={i} />
                ))}
            </div>

            {/* Milestones Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="w-full flex flex-col items-center"
            >
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-8">Target Milestones</div>
                 <div className="flex gap-16 items-center">
                     {[
                         "Paying customers",
                         "Clear ARR signal",
                         "Expansion inside accounts"
                     ].map((milestone, i) => (
                         <div key={i} className="flex items-center gap-3">
                             <div className="p-1 rounded-full bg-green-100 text-green-600">
                                <CheckCircle2 size={16} strokeWidth={3} />
                             </div>
                             <span className="text-lg font-medium text-slate-700">{milestone}</span>
                         </div>
                     ))}
                 </div>
            </motion.div>

        </div>
    </div>
  );
}