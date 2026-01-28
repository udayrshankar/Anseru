export default function Slide1() {
  return (
    <section className="h-screen flex items-center justify-center bg-white px-4 pt-24">
      <div className="max-w-5xl text-center space-y-8 animate-fade-in-up">
        <div className="inline-block px-5 py-2 bg-gray-100 rounded-full text-sm font-bold tracking-wider mb-4 text-gray-800 border border-gray-200">
          INVESTMENT MEMO 2026
        </div>
        <h1 className="text-6xl md:text-[7rem] font-bold font-onest tracking-tighter text-[#090909] leading-[0.9]">
          Reimagining <br />
          <span className="text-gray-300">Private Capital</span>
        </h1>
        <p className="text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
          We are replacing manual deal workflows with autonomous AI agents.
        </p>
        <div className="pt-8">
            <span className="text-sm font-mono text-gray-400">SCROLL TO EXPLORE →</span>
        </div>
      </div>
    </section>
  );
}
