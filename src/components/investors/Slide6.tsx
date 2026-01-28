
export default function Slide6() {
  return (
    <section className="h-screen w-full bg-white relative flex flex-col justify-center font-sans snap-center overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-gray-50 via-white to-transparent" />

      {/* SAFE ZONE: 70% Height */}
      <div className="relative z-10 h-[70%] flex flex-col justify-between items-center w-full px-6">
         
         {/* Headline */}
         <div className="text-center space-y-8 mt-4 animate-[fadeInUp_1s_ease-out]">
             <h2 className="text-7xl md:text-[7rem] font-bold tracking-tighter text-gray-900 leading-[0.85]">
                 System of <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">Record.</span>
             </h2>
             <p className="text-2xl text-gray-500 font-light max-w-3xl mx-auto pt-4">
                 Raising Seed Round to capture the <span className="text-gray-900 font-semibold border-b border-gray-300">$26B infrastructure gap</span>.
             </p>
         </div>

         {/* The Big Numbers */}
         <div className="grid grid-cols-3 gap-8 w-full max-w-7xl">
            {[
                { label: "TAM", val: "$26B", sub: "Global B2B Regulated Sales" },
                { label: "Growth", val: "18%", sub: "CAGR through 2029" },
                { label: "Penetration", val: "<5%", sub: "End-to-End Automation" }
            ].map((stat, i) => (
                <div key={i} className="group relative bg-white/60 backdrop-blur-2xl rounded-[3rem] border border-gray-200 p-12 hover:border-purple-200 hover:bg-white hover:shadow-[0_30px_60px_rgba(168,85,247,0.1)] transition-all duration-500 cursor-default">
                    <div className="text-8xl font-bold text-gray-900 mb-4 tracking-tighter group-hover:scale-105 group-hover:translate-x-4 transition-transform duration-500 origin-left">
                        {stat.val}
                    </div>
                    <div className="flex items-center gap-4">
                         <div className="h-1 w-12 bg-purple-500 rounded-full"></div>
                         <div className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-purple-600 transition-colors">{stat.label}</div>
                    </div>
                    <div className="text-lg text-gray-500 mt-6 font-medium pl-16">{stat.sub}</div>
                </div>
            ))}
         </div>

         {/* Footer Logos */}
         <div className="w-full flex flex-col items-center gap-6">
             <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">Trusted by revenue teams at</div>
             <div className="flex gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                 <span className="text-4xl font-black text-gray-900 tracking-tighter">stripe</span>
                 <span className="text-4xl font-bold text-gray-900 italic">Adobe</span>
                 <span className="text-4xl font-semibold text-gray-900">Microsoft</span>
             </div>
         </div>

      </div>
    </section>
  );
}