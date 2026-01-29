

export default function Slide9() {
  return (
    <div className="w-full max-w-6xl h-full flex flex-col justify-center items-center animate-[fadeIn_0.8s] mx-auto">
        
        <h2 className="text-8xl font-bold text-gray-900 mb-6 tracking-tighter">$3-4M Seed</h2>
        <p className="text-2xl text-gray-500 mb-24 font-light">To scale what's already working.</p>

        <div className="grid grid-cols-3 gap-16 w-full">
            {[{t:"Convert Pilots",d:"Turn live pilots into recurring revenue."},{t:"Repeatable GTM",d:"Build the sales playbook."},{t:"Product Scale",d:"Enterprise-grade reliability."}].map((item, i) => (
                <div key={i} className="text-center space-y-6 group">
                    <div className="w-20 h-1.5 bg-gray-200 mx-auto group-hover:bg-gray-900 transition-colors duration-500"></div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.t}</h3>
                    <p className="text-base text-gray-500">{item.d}</p>
                </div>
            ))}
        </div>

        <div className="mt-32 w-full border-t border-gray-100 pt-12 flex flex-col items-center">
             <div className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.4em] mb-8">Trusted by revenue teams at</div>
             <div className="flex gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 cursor-default">
                 <span className="text-4xl font-black text-gray-900 tracking-tighter">stripe</span>
                 <span className="text-4xl font-bold text-gray-900 italic">Adobe</span>
                 <span className="text-4xl font-semibold text-gray-900">Microsoft</span>
             </div>
        </div>
    </div>
  );
}