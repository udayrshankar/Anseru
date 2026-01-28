
export default function Slide1() {
  return (
    <section className="h-screen w-full bg-white relative overflow-hidden flex flex-col justify-center font-sans snap-center selection:bg-purple-200">
      
      {/* 1. ALIVE ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-purple-300/20 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-300/20 rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite_reverse]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* 2. SAFE ZONE (70% Height, Centered) */}
      <div className="relative z-10 h-[70%] flex flex-col items-center justify-center w-full px-6">
        
        {/* Hero Content */}
        <div className="text-center space-y-10 relative z-20">
           <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/50 border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-xl animate-[fadeInDown_1s_ease-out]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-600"></span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">Series A • 2026</span>
           </div>

           <h1 className="text-8xl md:text-[8rem] font-bold tracking-tighter text-gray-900 leading-[0.85] drop-shadow-sm">
              Win More <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 animate-[gradientFlow_4s_ease_infinite] bg-[length:200%_auto]">
                Deals.
              </span>
           </h1>
           
           <p className="text-2xl text-gray-500 max-w-2xl mx-auto font-light animate-[fadeInUp_1s_ease-out_0.2s_both]">
              Two agents. One shared brain. <br/>
              The infrastructure for <span className="text-gray-900 font-medium border-b-2 border-purple-200">enterprise revenue</span>.
           </p>
        </div>

        {/* 3. ORBITING AGENTS (KG & Sud) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            {/* KG: RFP Agent (Left Orbit) */}
            <div className="absolute left-[5%] lg:left-[10%] animate-[float_6s_ease-in-out_infinite]">
                 <div className="relative group perspective-1000">
                     <div className="absolute inset-0 bg-purple-500/30 blur-[60px] rounded-full group-hover:bg-purple-500/40 transition-colors duration-500" />
                     <div className="relative w-64 h-80 bg-white/70 backdrop-blur-2xl rounded-[2.5rem] border border-white/60 shadow-[0_20px_50px_rgba(147,51,234,0.15)] p-6 flex flex-col items-center justify-center transform rotate-[-6deg] group-hover:rotate-0 transition-all duration-700">
                        <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-400 shadow-inner mb-6 flex items-center justify-center overflow-hidden">
                             <div className="absolute inset-0 animate-[spin_10s_linear_infinite] opacity-30 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.8)_50%,transparent_60%)]" />
                             <span className="text-4xl">👩‍💼</span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">KG</h3>
                        <p className="text-sm font-bold text-purple-600 uppercase tracking-widest mt-2">RFP Agent</p>
                    </div>
                 </div>
            </div>

            {/* Sud: Security Agent (Right Orbit) */}
            <div className="absolute right-[5%] lg:right-[10%] animate-[float_7s_ease-in-out_infinite_reverse]">
                 <div className="relative group perspective-1000">
                     <div className="absolute inset-0 bg-blue-500/30 blur-[60px] rounded-full group-hover:bg-blue-500/40 transition-colors duration-500" />
                     <div className="relative w-64 h-80 bg-white/70 backdrop-blur-2xl rounded-[2.5rem] border border-white/60 shadow-[0_20px_50px_rgba(59,130,246,0.15)] p-6 flex flex-col items-center justify-center transform rotate-[6deg] group-hover:rotate-0 transition-all duration-700">
                        <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-inner mb-6 flex items-center justify-center overflow-hidden">
                             <div className="absolute inset-0 animate-[spin_8s_linear_infinite_reverse] opacity-30 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.8)_50%,transparent_60%)]" />
                             <span className="text-4xl">🛡️</span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">Sud</h3>
                        <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mt-2">Security Agent</p>
                    </div>
                 </div>
            </div>
        </div>

      </div>

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes gradientFlow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `}</style>
    </section>
  );
}