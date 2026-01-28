
export default function Slide5() {
  const steps = [
    { num: "01", title: "Understand", desc: "Auto-structure requirements.", color: "from-purple-500 to-indigo-500" },
    { num: "02", title: "Know", desc: "Map to approved knowledge.", color: "from-pink-500 to-rose-500" },
    { num: "03", title: "Respond", desc: "Draft with evidence citations.", color: "from-orange-500 to-amber-500" },
    { num: "04", title: "Learn", desc: "Update graph with every edit.", color: "from-green-500 to-emerald-500" }
  ];

  return (
    <section className="h-screen w-full bg-white relative flex items-center justify-center font-sans snap-center overflow-hidden">
       
       {/* Background Path */}
       <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
           <path d="M 0,200 Q 500,200 800,500 T 1600,900" fill="none" stroke="url(#pathGrad)" strokeWidth="6" strokeDasharray="20 20" className="animate-[dash_20s_linear_infinite]" />
           <defs>
               <linearGradient id="pathGrad" x1="0" y1="0" x2="1" y2="1">
                   <stop offset="0%" stopColor="#A855F7" />
                   <stop offset="100%" stopColor="#EC4899" />
               </linearGradient>
           </defs>
       </svg>

       {/* SAFE ZONE: 70% Height */}
       <div className="relative z-10 h-[70%] flex items-center w-full px-12">
          
          <div className="grid grid-cols-2 w-full gap-24 items-center h-full">
              
              {/* Text Anchor (Left) */}
              <div className="space-y-10 pl-12 animate-[fadeInLeft_1s_ease-out]">
                  <h2 className="text-7xl lg:text-8xl font-bold text-gray-900 tracking-tighter leading-none">
                      From Upload <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">to Approved.</span>
                  </h2>
                  <p className="text-2xl text-gray-500 max-w-md leading-relaxed font-light">
                      We don't just automate tasks. We standardize the entire decision-making layer.
                  </p>
                  <button className="group px-10 py-5 rounded-full bg-black text-white text-lg font-bold hover:scale-105 transition-transform shadow-2xl flex items-center gap-3">
                      <span>See the demo</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
              </div>

              {/* Diagonal Card Stack (Right) */}
              <div className="relative w-full h-full">
                  {steps.map((step, i) => (
                      <div 
                        key={i} 
                        className="absolute w-[400px] bg-white rounded-[2rem] p-6 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex items-center gap-6 group hover:scale-110 hover:z-50 hover:shadow-2xl transition-all duration-300"
                        style={{ 
                            top: `${i * 18}%`, 
                            left: `${i * 10}%`,
                            zIndex: 4-i,
                            animation: `float 6s ease-in-out infinite ${i * 0.5}s`
                        }}
                      >
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:rotate-12 transition-transform`}>
                              {step.num}
                          </div>
                          <div>
                              <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                              <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>

          </div>

       </div>
       <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes dash { to { stroke-dashoffset: -1000; } }
       `}</style>
    </section>
  );
}