export default function Slide3() {
  return (
    <section className="h-screen flex items-center justify-center bg-white px-4 pt-24">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
         <div className="h-[400px] bg-black text-white rounded-3xl shadow-xl flex items-center justify-center p-8 order-2 md:order-1">
           {/* Placeholder for visual/solution */}
           <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-white/10 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold">Autonomous Agents</h3>
                <p className="text-gray-400">Instant, accurate, and 24/7.</p>
           </div>
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <h2 className="text-4xl md:text-6xl font-bold font-onest tracking-tight">The Solution</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Anseru deploys specialized AI agents that autonomously handle deal sourcing, materials processing, and investment memo generation.
          </p>
           <p className="text-lg text-gray-500">
            It's not just a tool; it's a digital workforce that scales infinitely.
          </p>
        </div>
      </div>
    </section>
  );
}
