
export default function Slide2() {
  return (
    <section className="h-screen w-full bg-[#FAFAFA] relative overflow-hidden flex flex-col justify-center font-sans snap-center">
       
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,1),transparent_70%),radial-gradient(circle_at_100%_100%,rgba(240,240,255,1),transparent_70%)]" />

       {/* SAFE ZONE: 70% Height */}
       <div className="relative z-10 h-[70%] flex items-center justify-center w-full px-8 md:px-16">
          <div className="max-w-[1600px] w-full grid grid-cols-12 gap-10 h-full items-center">
             
             {/* Left Text */}
             <div className="col-span-5 space-y-8 pr-8 animate-[slideRight_0.8s_cubic-bezier(0.16,1,0.3,1)]">
                <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-[0.2em]">The Problem</div>
                
                <h2 className="text-6xl font-bold text-gray-900 leading-none tracking-tight">
                  Knowledge <br/>
                  breaks under <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">pressure.</span>
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed font-light border-l-4 border-red-200 pl-6">
                   Deals don't fail because teams are slow. They fail because answers drift, trust erodes, and silos disconnect.
                </p>

                {/* Live Stat Widget */}
                <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:scale-105 transition-transform duration-300 cursor-default">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                        <div className="text-xs font-bold text-gray-400 uppercase">Live Impact</div>
                    </div>
                    <div className="text-4xl font-bold text-gray-900">40% Slower</div>
                    <div className="text-sm text-gray-500">Deal cycles in regulated industries.</div>
                </div>
             </div>

             {/* Right Grid */}
             <div className="col-span-7 grid grid-cols-2 gap-6 h-full">
                 {[
                   { icon: "⚡", title: "Fragmented Speed", desc: "RFPs take days just to understand.", color: "bg-amber-100 text-amber-600" },
                   { icon: "🛡️", title: "Security Drift", desc: "Answers vary across customers, creating risk.", color: "bg-red-100 text-red-600" },
                   { icon: "📝", title: "SME Burnout", desc: "Experts rewrite the same answers repeatedly.", color: "bg-blue-100 text-blue-600" },
                   { icon: "🤖", title: "AI Hallucinations", desc: "Tools generate text but can't guarantee truth.", color: "bg-purple-100 text-purple-600" }
                 ].map((card, i) => (
                   <div 
                      key={i} 
                      className="group relative bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 border border-white shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:bg-white transition-all duration-500 flex flex-col justify-between"
                      style={{ animation: `fadeInUp 0.6s ease-out ${i * 0.15}s backwards` }}
                   >
                      <div className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        {card.icon}
                      </div>
                      <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.title}</h3>
                          <p className="text-sm text-gray-500 font-medium leading-relaxed">{card.desc}</p>
                      </div>
                      <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-gray-400 text-lg">→</span>
                      </div>
                   </div>
                 ))}
             </div>

          </div>
       </div>
       
       <style>{`
          @keyframes slideRight { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
       `}</style>
    </section>
  );
}