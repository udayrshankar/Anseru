
export default function Slide4() {
  return (
    <section className="h-screen w-full bg-[#F5F5F7] relative flex flex-col justify-center font-sans snap-center overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 w-full h-[60%] bg-gradient-to-b from-white to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-[40rem] h-[40rem] bg-purple-300/20 rounded-full blur-[120px] animate-[pulse_8s_infinite]" />
      <div className="absolute top-1/2 right-1/4 w-[40rem] h-[40rem] bg-blue-300/20 rounded-full blur-[120px] animate-[pulse_8s_infinite_reverse]" />

      {/* SAFE ZONE: 70% Height */}
      <div className="relative z-10 h-[70%] flex items-center justify-center w-full px-8">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-24">
            
            {/* WINDOW 1: KG (RFP) */}
            <div className="group relative perspective-1000">
                <div className="relative transform transition-all duration-700 hover:rotate-y-2 hover:rotate-x-2">
                    {/* Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-50 transition duration-500" />
                    
                    {/* UI Container */}
                    <div className="relative bg-white/95 backdrop-blur-xl rounded-[2.5rem] border border-white/50 shadow-[0_30px_60px_rgba(0,0,0,0.12)] overflow-hidden">
                        {/* Header */}
                        <div className="px-8 py-5 border-b border-gray-100 flex items-center justify-between bg-white/50">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-100 to-white border border-purple-100 flex items-center justify-center text-xl shadow-sm">👩‍💼</div>
                                <div>
                                    <div className="font-bold text-gray-900 text-base">KG</div>
                                    <div className="text-[10px] text-purple-600 font-extrabold uppercase tracking-widest">RFP Agent</div>
                                </div>
                            </div>
                            <div className="flex gap-2 opacity-50">
                                <div className="w-3 h-3 rounded-full bg-black"></div>
                                <div className="w-3 h-3 rounded-full bg-black"></div>
                            </div>
                        </div>
                        {/* Content */}
                        <div className="p-8 space-y-6">
                             <div className="bg-gray-50 p-6 rounded-3xl rounded-tl-none border border-gray-100 text-sm text-gray-600 leading-loose shadow-inner">
                                 <p>I've analyzed the <strong className="text-gray-900">Enterprise Security</strong> section.</p>
                                 <div className="mt-4 flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-200 shadow-sm cursor-pointer hover:border-purple-300 transition-colors">
                                     <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 font-bold text-xs">PDF</div>
                                     <div className="text-xs font-bold text-gray-700">ISO_27001_Cert.pdf <br/><span className="text-gray-400 font-normal">Page 14 referenced</span></div>
                                 </div>
                             </div>
                             <div className="flex justify-end">
                                 <div className="bg-purple-600 text-white px-6 py-3 rounded-2xl rounded-tr-none text-sm font-bold shadow-lg shadow-purple-200 hover:bg-purple-700 transition-colors cursor-pointer">
                                     Add to proposal
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* WINDOW 2: SUD (Security) */}
            <div className="group relative perspective-1000 mt-20 md:mt-0">
                 <div className="relative transform transition-all duration-700 hover:rotate-y-[-2deg] hover:rotate-x-2">
                    {/* Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-50 transition duration-500" />
                    
                    {/* UI Container */}
                    <div className="relative bg-white/95 backdrop-blur-xl rounded-[2.5rem] border border-white/50 shadow-[0_30px_60px_rgba(0,0,0,0.12)] overflow-hidden">
                        {/* Header */}
                        <div className="px-8 py-5 border-b border-gray-100 flex items-center justify-between bg-white/50">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-100 to-white border border-blue-100 flex items-center justify-center text-xl shadow-sm">🛡️</div>
                                <div>
                                    <div className="font-bold text-gray-900 text-base">Sud</div>
                                    <div className="text-[10px] text-blue-600 font-extrabold uppercase tracking-widest">Security Agent</div>
                                </div>
                            </div>
                            <div className="flex gap-2 opacity-50">
                                <div className="w-3 h-3 rounded-full bg-black"></div>
                                <div className="w-3 h-3 rounded-full bg-black"></div>
                            </div>
                        </div>
                        {/* Content */}
                        <div className="p-8 space-y-6">
                             <div className="bg-gray-50 p-6 rounded-3xl rounded-tl-none border border-gray-100 text-sm text-gray-600 leading-loose shadow-inner">
                                 <p>Flagged: Question 4 regarding <strong className="text-gray-900">Data Residency</strong> conflicts with our EU policy.</p>
                                 <div className="mt-4 flex gap-3">
                                     <span className="px-4 py-2 bg-amber-50 text-amber-600 border border-amber-100 rounded-full text-[11px] font-bold uppercase tracking-wide">⚠️ Risk Detected</span>
                                     <span className="px-4 py-2 bg-white text-gray-600 border border-gray-200 rounded-full text-[11px] font-bold uppercase tracking-wide">Escalating to Legal</span>
                                 </div>
                             </div>
                        </div>
                    </div>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
}