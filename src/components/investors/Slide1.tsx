import { useState } from "react";

export default function Slide1() {
  const [flipped, setFlipped] = useState({ 1: false, 2: false });

  const founders = {
    goutham:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop",
    sudarshan:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=687&auto=format&fit=crop",
  };

  return (
    <section className="w-full h-full flex flex-col items-center justify-center px-6">
      
      {/* ---------- HEADER ---------- */}
      <div className="text-center mb-6 max-w-4xl">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter text-gray-900 mt-5">
          Founders who’ve &nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
            lived the problem.
          </span>
        </h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed">
          Enterprise deals fail at the intersection of sales velocity and trust.  
          We’ve operated on both sides of the table.
        </p>
      </div>

      {/* ---------- CARDS ---------- */}
      <div className="flex gap-20 perspective-1000">
        {/* ================= GOUTHAM ================= */}
        <FounderCard
          name="Goutham Kumaresan"
          role="Co-Founder · GTM"
          image={founders.goutham}
          flipped={flipped[1]}
          onClick={() => setFlipped(p => ({ ...p, 1: !p[1] }))}
          backTitle="Enterprise GTM Reality"
          bullets={[
            "Founder-led enterprise sales",
            "RFP-heavy procurement cycles",
            "Live pilots before scale",
          ]}
        />

        {/* ================= SUDARSHAN ================= */}
        <FounderCard
          name="Sudarshan Balakrishna"
          role="Co-Founder · Product"
          image={founders.sudarshan}
          flipped={flipped[2]}
          onClick={() => setFlipped(p => ({ ...p, 2: !p[2] }))}
          backTitle="Risk-First Product Reality"
          bullets={[
            "Security-driven architecture",
            "GRC & audit-ready systems",
            "Enterprise risk modeling",
          ]}
        />
      </div>

      {/* ---------- UTILITIES ---------- */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
}

/* ================= CARD ================= */

function FounderCard({
  name,
  role,
  image,
  flipped,
  onClick,
  backTitle,
  bullets,
}: any) {
  return (
    <div
      className="w-[320px] h-[380px] cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(.4,0,.2,1)] preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* ---------- FRONT ---------- */}
        <div className="absolute inset-0 backface-hidden rounded-[28px] overflow-hidden
          border border-black/10
          shadow-[0_30px_80px_rgba(0,0,0,0.25)]
        ">
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover "
          />

          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-end p-6">
            <h3 className="text-lg font-semibold text-white tracking-tight">
              {name}
            </h3>
            <p className="mt-1 text-sm text-white/80">
              {role}
            </p>

            <div className="mt-5 text-xs text-white/50">
              View operating reality →
            </div>
          </div>
        </div>

        {/* ---------- BACK ---------- */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-[28px] overflow-hidden
          border border-black/10
          shadow-[0_30px_80px_rgba(0,0,0,0.25)]
        ">
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 h-full p-6 flex flex-col justify-between text-white">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40">
                Operating Reality
              </p>
              <h4 className="mt-2 text-lg font-semibold">
                {backTitle}
              </h4>
            </div>

            <ul className="space-y-4 text-sm text-white/75 leading-relaxed">
              {bullets.map((b: string) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/10 text-xs text-white/40">
              Click to return
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
