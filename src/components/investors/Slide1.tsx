import React, { useState } from "react";

export default function Slide1() {
  const [flipped, setFlipped] = useState({ 1: false, 2: false, 3: false });

  const founders = {
    goutham:
      "bg-gradient-to-br from-white via-pink-50 to-pink-200",
    sudarshan:
      "bg-gradient-to-br from-white via-pink-50 to-pink-200",
    tamil:
      "bg-gradient-to-br from-white via-pink-50 to-pink-200",
  };

  return (
    <section className="w-full h-full flex flex-col items-center justify-center px-6">
      
      {/* ---------- HEADER ---------- */}
      <div className="text-center mb-8 max-w-5xl">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter text-gray-900 mt-5">
          Founders Who’ve{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
            Lived the Problem.
          </span>
        </h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed">
          Enterprise Deals Fail at the Intersection of Sales Velocity and Trust.  
          We’ve Operated on Both Sides of the Table.
        </p>
      </div>

      {/* ---------- CARDS ---------- */}
      <div className="flex gap-20 perspective-1000">
        {/* ================= SUDARSHAN ================= */}
        <FounderCard
          name="Sudarshan Balakrishna R"
          role="Co-founder & Product"
          image={founders.sudarshan}
          flipped={flipped[1]}
          onClick={() => setFlipped(p => ({ ...p, 1: !p[1] }))}
          backTitle="Product, Compliance & Operations"
          bullets={[
            "Cybersecurity & Compliance Expert",
            "Deep Exposure to Security Questionnaires & Audits",
            "Owns Product Direction, Customer Feedback & Ops",
            "Ex - Big 4; Finance Professional (CA)",
          ]}
        />

        {/* ================= GOUTHAM ================= */}
        <FounderCard
          name="Goutham Kumaresan"
          role="Co-founder, Head of GTM & Sales"
          image={founders.goutham}
          flipped={flipped[2]}
          onClick={() => setFlipped(p => ({ ...p, 2: !p[2] }))}
          backTitle={
            <>
              GTM, Sales & Customer <br /> Success
            </>
          }
          bullets={[
            "Revenue Growth Hacking",
            "PPP - Strategy and Transaction Advisor (RFP and Proposals)",
            "Customer Relationships and Partnerships",
            "IIT Madras, Ex - Big 4, Flipkart, Meesho, Unacademy (CoS)",
          ]}
        />

         <FounderCard
          name="Tamilarasan Ramasamy"
          role="CTO & Chief AI Officer"
          image={founders.tamil}
          flipped={flipped[3]}
          onClick={() => setFlipped(p => ({ ...p, 3: !p[3] }))}
          backTitle="Infrastructure, AI Systems & Architecture"
          bullets={[
            "Product Architecture, Building AI Agents and Testing Models",
            "Owns Development & Infrastructure",
            "Mentoring and Growing the Core Engineering Team",
            "Tech and AI/ML Leader (Healthcare)"
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

interface FounderCardProps {
  name: string;
  role: string;
  image: string;
  flipped: boolean;
  onClick: () => void;
  backTitle: React.ReactNode;
  bullets: string[];
}

function FounderCard({
  name,
  role,
  image,
  flipped,
  onClick,
  backTitle,
  bullets,
}: FounderCardProps) {
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
          <div className={`absolute inset-0 w-full h-full ${image}`} />

          {/* Vignette removed for light theme */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" /> */}

          <div className="relative z-10 h-full flex flex-col justify-end p-6">
            <h3 className="text-lg font-semibold text-slate-900 tracking-tight">
              {name}
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              {role}
            </p>

            <div className="mt-5 text-xs text-slate-400">
              View operating reality →
            </div>
          </div>
        </div>

        {/* ---------- BACK ---------- */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-[28px] overflow-hidden
          border border-pink-200
          bg-white
          shadow-[0_30px_80px_rgba(0,0,0,0.1)]
        ">
          <div className={`absolute inset-0 w-full h-full ${image} opacity-30`} />

          <div className="relative z-10 h-full p-6 flex flex-col justify-start text-slate-800">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">
                Operating Reality
              </p>
              <h4 className="mt-2 text-lg font-semibold text-slate-900">
                {backTitle}
              </h4>
            </div>

            <ul className="space-y-4 mt-8 text-sm text-slate-600 leading-relaxed font-medium">
              {bullets.map((b: string) => (
                <li key={b} className="flex gap-2">
                  <span className="text-pink-500">•</span>
                  {b}
                </li>
              ))}
            </ul>

          
          </div>
        </div>
      </div>
    </div>
  );
}
