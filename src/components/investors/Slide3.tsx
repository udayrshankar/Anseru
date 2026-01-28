
export default function Slide3() {
  return (
    <section className="h-screen w-full bg-white relative overflow-hidden flex flex-col justify-center font-sans snap-center">
      
      {/* Circuit Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* SAFE ZONE: 70% Height */}
      <div className="relative z-10 h-[70%] flex flex-col items-center justify-center w-full px-6">
        
        <div className="text-center space-y-6 mb-16 animate-[fadeIn_1s_ease-out]">
           <h2 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
             Not an automation gap. <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 animate-pulse">An infrastructure gap.</span>
           </h2>
        </div>

        {/* CORE VISUALIZATION */}
        <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
            
            {/* 1. CENTRAL BRAIN (Anseru) */}
            <div className="relative z-20 w-72 h-72 flex items-center justify-center animate-[float_5s_ease-in-out_infinite]">
                 {/* Glass Shells */}
                 <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-md border border-purple-200/50 shadow-[0_0_80px_rgba(168,85,247,0.3)]" />
                 
                 {/* Inner Orb */}
                 <div className="w-56 h-56 rounded-full bg-gradient-to-br from-purple-100 via-white to-pink-50 flex items-center justify-center relative overflow-hidden shadow-inner border border-white">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.2),transparent)] animate-[pulse_3s_infinite]" />
                      <div className="text-center z-10">
                          <span className="text-5xl block mb-2 filter drop-shadow-md">🧠</span>
                          <span className="text-sm font-black tracking-[0.2em] text-purple-900 uppercase">Shared<br/>Memory</span>
                      </div>
                 </div>

                 {/* Rings */}
                 <div className="absolute inset-[-30px] rounded-full border border-purple-300/30 border-dashed animate-[spin_20s_linear_infinite]" />
                 <div className="absolute inset-[-60px] rounded-full border border-blue-300/30 border-dashed animate-[spin_25s_linear_infinite_reverse]" />
            </div>

            {/* 2. CONNECTING LINES (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                 <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D8B4FE" stopOpacity="0" />
                        <stop offset="50%" stopColor="#A855F7" />
                        <stop offset="100%" stopColor="#D8B4FE" stopOpacity="0" />
                    </linearGradient>
                 </defs>
                 <path d="M 50% 50% L 15% 20%" stroke="url(#lineGradient)" strokeWidth="3" strokeDasharray="12 12" className="animate-[dash_3s_linear_infinite]" />
                 <path d="M 50% 50% L 85% 20%" stroke="url(#lineGradient)" strokeWidth="3" strokeDasharray="12 12" className="animate-[dash_3s_linear_infinite_reverse]" />
                 <path d="M 50% 50% L 15% 80%" stroke="url(#lineGradient)" strokeWidth="3" strokeDasharray="12 12" className="animate-[dash_3s_linear_infinite_1s]" />
                 <path d="M 50% 50% L 85% 80%" stroke="url(#lineGradient)" strokeWidth="3" strokeDasharray="12 12" className="animate-[dash_3s_linear_infinite_0.5s]" />
            </svg>

            {/* 3. NODES */}
            {[
                { label: "RFPs & Bids", icon: "📄", pos: "top-[10%] left-[5%]" },
                { label: "Security & GRC", icon: "🛡️", pos: "top-[10%] right-[5%]" },
                { label: "Sales Comms", icon: "💬", pos: "bottom-[10%] left-[5%]" },
                { label: "CRM & Data", icon: "📂", pos: "bottom-[10%] right-[5%]" }
            ].map((node, i) => (
                <div key={i} className={`absolute ${node.pos} bg-white/90 backdrop-blur-xl p-5 pr-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-white flex items-center gap-4 animate-[zoomIn_0.6s_ease-out_both] hover:scale-110 hover:shadow-2xl transition-all duration-300`} style={{ animationDelay: `${0.5 + (i * 0.1)}s` }}>
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner">{node.icon}</div>
                    <div>
                        <div className="text-lg font-bold text-gray-900">{node.label}</div>
                        <div className="flex items-center gap-2 mt-1">
                             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                             <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">Synced</span>
                        </div>
                    </div>
                </div>
            ))}

        </div>
      </div>
      
      <style>{`
        @keyframes dash { to { stroke-dashoffset: -100; } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </section>
  );
}