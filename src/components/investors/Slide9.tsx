import { motion } from "framer-motion";

export default function Slide9() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-24 relative bg-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-purple-50/50 to-transparent blur-3xl pointer-events-none" />

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center mb-24"
        >
            <h2 className="text-[120px] font-black text-gray-900 leading-none tracking-tighter">
                $3-4M <span className="text-purple-600">Seed</span>
            </h2>
            <p className="text-3xl text-gray-400 mt-4 font-light">To scale what's already working.</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-12 w-full max-w-5xl">
            {[
                {t:"Convert Pilots", d:"Turn live enterprise pilots into recurring revenue."},
                {t:"Repeatable GTM", d:"Formalize the sales playbook for regulated industries."},
                {t:"Product Scale", d:"Infrastructure-grade security & reliability."}
            ].map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="space-y-4"
                >
                    <div className="w-12 h-1 bg-gray-900" />
                    <h3 className="text-2xl font-bold text-gray-900">{item.t}</h3>
                    <p className="text-lg text-gray-500 leading-relaxed">{item.d}</p>
                </motion.div>
            ))}
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-32 w-full pt-12 flex flex-col items-center"
        >
             <div className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.5em] mb-12">Trusted by revenue teams at</div>
             <div className="flex gap-24 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                 <Logo name="stripe" className="text-5xl font-black" />
                 <Logo name="Adobe" className="text-4xl font-bold italic" />
                 <Logo name="Microsoft" className="text-4xl font-semibold" />
             </div>
        </motion.div>
    </div>
  );
}

function Logo({ name, className }: { name: string, className: string }) {
    return (
        <motion.span 
            whileHover={{ y: -5, opacity: 1 }}
            className={`${className} text-gray-900 cursor-default tracking-tighter`}
        >
            {name}
        </motion.span>
    );
}