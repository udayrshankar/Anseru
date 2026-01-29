

export default function Slide7() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[400px] h-[400px] rounded-full border border-purple-100/50 animate-[ping_4s_linear_infinite]" />
            <div className="w-[800px] h-[800px] rounded-full border border-gray-100 absolute" />
            <div className="w-[1200px] h-[1200px] rounded-full border border-gray-50 absolute" />
        </div>

        <div className="relative z-10 text-center space-y-20">
            <h2 className="text-5xl font-bold text-gray-900">Clear Expansion Path</h2>
            <div className="flex items-center gap-12 justify-center">
                <div className="w-72 h-72 bg-white rounded-full shadow-2xl shadow-purple-100 flex flex-col items-center justify-center p-8 text-center border-4 border-purple-500 z-30 animate-[zoomIn_0.5s]">
                    <span className="text-4xl mb-4">🎯</span>
                    <h3 className="text-xl font-bold text-gray-900">Initial Focus</h3>
                    <p className="text-xs text-gray-500 mt-2 font-medium uppercase tracking-wide">Regulated B2B SaaS.<br/>RFP-heavy motions.</p>
                </div>
                <span className="text-5xl text-gray-200">→</span>
                <div className="w-72 h-72 bg-white/80 backdrop-blur-md rounded-full shadow-xl flex flex-col items-center justify-center p-8 text-center border border-gray-200 z-20 animate-[zoomIn_0.5s_0.2s_both]">
                     <span className="text-4xl mb-4">📈</span>
                    <h3 className="text-xl font-bold text-gray-900">Expansion</h3>
                    <p className="text-xs text-gray-500 mt-2 font-medium uppercase tracking-wide">More workflows.<br/>Same customers.</p>
                </div>
                <span className="text-5xl text-gray-200">→</span>
                <div className="w-72 h-72 bg-white/40 backdrop-blur-sm rounded-full shadow-lg flex flex-col items-center justify-center p-8 text-center border border-gray-100 z-10 animate-[zoomIn_0.5s_0.4s_both]">
                     <span className="text-4xl mb-4">🌐</span>
                    <h3 className="text-xl font-bold text-gray-900">Infrastructure</h3>
                    <p className="text-xs text-gray-500 mt-2 font-medium uppercase tracking-wide">System of record for <br/>deal execution.</p>
                </div>
            </div>
        </div>
        <style>{`@keyframes zoomIn { from { opacity:0; transform:scale(0.8); } to { opacity:1; transform:scale(1); } }`}</style>
    </div>
  );
}