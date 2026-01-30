

export default function Slide2() {
  return (
    <div className="w-full max-w-[1400px] h-full flex items-center px-12 mx-auto">
         <div className="grid grid-cols-12 gap-16 items-center w-full">
             {/* Text Side */}
             <div className="col-span-5 space-y-10 animate-[slideRight_0.8s_cubic-bezier(0.2,0.8,0.2,1)]">
                <div className="inline-block px-4 py-1.5 bg-pink-50 text-pink-600 rounded-full text-sm font-bold uppercase tracking-[0.2em] border border-pink-100 shadow-sm">The Reality Gap</div>
                <h2 className="text-8xl font-bold text-gray-900 leading-[1.05]">
              
                    What's <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Broken?</span>
                </h2>
                <p className="text-lg text-gray-600 font-light border-l-4 border-pink-200 pl-8 leading-relaxed">
                    Enterprise Deals don't Fail because Teams are Slow. <br/> They Fail because Answers Drift, Trust Erodes, and Silos Disconnect.
                </p>
                {/* Metric Card */}
                <div className="p-8 bg-white/80 backdrop-blur-md rounded-[2.5rem] border border-white shadow-[0_20px_40px_rgba(236,72,153,0.1)] hover:scale-105 transition-transform duration-500 cursor-default group">
                    <div className="flex items-baseline gap-2 mb-2">
                        <div className="text-6xl font-bold text-gray-900 text-pink-600 transition-colors">40%</div>
                        <div className="text-3xl font-bold text-gray-400">Slower</div>
                    </div>
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Deal Cycles in Regulated Industries</div>
                </div>
             </div>

             {/* Grid Side */}
             <div className="col-span-7 mt-10 grid grid-cols-2 gap-6">
                 {[
                     { t: "Fragmented Knowledge", d: "No Unified Source of Truth", i: "⚡", c: "bg-pink-100 text-pink-600" },
                     { t: "No System of Record", d: "RFPs take Days to understand and no trail on Deal workflows", i: "🛡️", c: "bg-purple-100 text-purple-600" },
                     { t: "SME Burnout", d: "Experts Rewrite the Same Answers Repeatedly.", i: "📝", c: "bg-indigo-100 text-indigo-600" },
                     { t: "No Learning Loop", d: "Every Deal feels like starting from Scratch.", i: "🤖", c: "bg-fuchsia-100 text-fuchsia-600" }
                 ].map((item, idx) => (
                     <div key={idx} className="bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/60 shadow-sm hover:bg-white/80 hover:shadow-[0_20px_50px_rgba(236,72,153,0.15)] transition-all duration-500 group hover:-translate-y-2">
                         <div className={`w-14 h-14 rounded-2xl ${item.c} flex items-center justify-center text-2xl mb-5 shadow-sm group-hover:scale-110 transition-transform`}>{item.i}</div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2">{item.t}</h3>
                         <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.d}</p>
                     </div>
                 ))}
             </div>
         </div>
    </div>
  );
}