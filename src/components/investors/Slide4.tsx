export default function Slide4() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-50 px-4 pt-24">
      <div className="max-w-6xl w-full text-center space-y-12">
        <h2 className="text-4xl md:text-6xl font-bold font-onest tracking-tight">Market & Traction</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-2">
                <div className="text-5xl font-bold text-black">$12T</div>
                <div className="text-gray-500 font-medium">Private Capital AUM</div>
            </div>
             <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-2">
                <div className="text-5xl font-bold text-black">10+</div>
                <div className="text-gray-500 font-medium">Pilot Partners</div>
            </div>
             <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-2">
                <div className="text-5xl font-bold text-black">500%</div>
                <div className="text-gray-500 font-medium">Efficiency Gain</div>
            </div>
        </div>

        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We are targeting the mid-market PE and VC firms that are underserved by legacy providers and priced out of custom enterprise builds.
        </p>
      </div>
    </section>
  );
}
