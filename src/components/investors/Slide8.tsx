

export default function Slide8() {
  return (
    <div className="w-full max-w-5xl h-full flex flex-col justify-center items-center mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-20 text-center">From Automation to Infrastructure.</h2>

        <div className="space-y-6 w-full max-w-4xl">
            <div className="p-10 bg-gray-50 rounded-[2rem] border border-gray-100 text-center animate-[fadeInUp_0.6s_ease-out] hover:bg-gray-100 transition-colors">
                <h3 className="text-2xl font-bold text-gray-400">Today: RFP & Security Automation</h3>
            </div>
            
            <div className="p-12 bg-white rounded-[2rem] border border-purple-100 shadow-[0_20px_50px_rgba(147,51,234,0.08)] text-center relative z-10 scale-105 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
                <h3 className="text-3xl font-bold text-gray-900">Tomorrow: Deal Intelligence System</h3>
                <p className="text-gray-500 mt-2 font-medium">Learning how deals are negotiated and approved.</p>
            </div>

            <div className="p-14 bg-gray-900 rounded-[2rem] text-white text-center shadow-2xl relative z-20 scale-110 animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
                <h3 className="text-4xl font-bold tracking-tight">Future: The Revenue OS</h3>
                <p className="text-gray-400 mt-2 font-medium">The first layer of true deal infrastructure.</p>
            </div>
        </div>
    </div>
  );
}