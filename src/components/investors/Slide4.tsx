import { useState } from 'react';
import { AgentCard } from '../hero/AgentNotificationCards';
import { FileText, Shield, CheckCircle2, UserCheck, TrendingUp } from 'lucide-react';

export default function Slide4() {
  const [flipped, setFlipped] = useState<{ [key: string]: boolean }>({ kg: false, sud: false });

  const toggleFlip = (id: string) => {
    setFlipped(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const sudContent = [
    { label: "Answers Grounded in your Real Security Posture", value: "95% Response Accuracy" },
    { label: "Always Current, Always Defensible", value: "Zero Stale Responses" },
    { label: "Removes Security Reviews as a Sales Bottleneck", value: "70–90% Faster Security Reviews" }
  ];

  const kgContent = [
    { label: "Instant, Deal-Ready First Drafts", value: "80% Reduction in Drafting Time" },
    { label: "Built for Real RFP Complexity", value: "Any Format Supported" },
    { label: "Human Review Only Where it Matters", value: "75% Fewer SME Touchpoints" }
  ];

  return (
    <div className="w-full max-w-7xl h-full flex flex-col items-center justify-center mx-auto pt-16">
        {/* Header Section */}
        <div className="text-center mb-5 animate-[fadeInDown_0.8s]">
             <h2 className="text-5xl md:text-6xl font-bold text-gray-900">Anseru Executes Enterprise Deals.</h2>
             <div className="inline-block bg-white/60 backdrop-blur-md border border-purple-100 px-8 py-3 rounded-full shadow-sm">
                <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  AI + Human System for RFPs and Security Questionnaires that Learns From Every Deal.
                </span>
             </div>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 scale-90 md:grid-cols-2 gap-12 w-full px-12 mb-5 perspective-1000">
            <FlippableCard
              id="kg"
              flipped={flipped.kg}
              onToggle={() => toggleFlip('kg')}
              frontComponent={
                <AgentCard
                  title="Agent KG"
                  description="AI agents that turn RFPs into fast, confident responses."
                  icon={FileText}
                  colorTheme="purple"
                  className='h-[380px]'
                />
              }
              backContent={kgContent}
              colorTheme="purple"
            />

            <FlippableCard
              id="sud"
              flipped={flipped.sud}
              onToggle={() => toggleFlip('sud')}
              frontComponent={
                <AgentCard
                  title="Agent SUD"
                  description="AI agents that accelerate Security Reviews without compromising trust."
                  icon={Shield}
                  colorTheme="blue"
                  className='h-[380px]'
                />
              }
              backContent={sudContent}
              colorTheme="blue"
            />
        </div>

        {/* Key Points Section */}
        <div className="flex flex-row gap-20 w-full px-12 items-center justify-center">
            <div className="flex items-center gap-4">
                <div className="p-2 bg-purple-50 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-gray-700 font-medium">Automates <span className="text-purple-600">RFPs & Security Questionnaires</span></p>
            </div>
            
            <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                    <UserCheck className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-700 font-medium">Keeps Humans <span className="text-blue-600">in Control</span></p>
            </div>

            <div className="flex items-center gap-4">
                <div className="p-2 bg-pink-50 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-pink-600" />
                </div>
                <p className="text-gray-700 font-medium">Smarter with <span className="text-pink-600">Every Interaction</span></p>
            </div>
        </div>

        {/* CSS for 3D Effects */}
        <style>{`
          .perspective-1000 { perspective: 1000px; }
          .preserve-3d { transform-style: preserve-3d; }
          .backface-hidden { backface-visibility: hidden; }
          .rotate-y-180 { transform: rotateY(180deg); }
        `}</style>
    </div>
  );
}

interface FlippableCardProps {
  id: string;
  flipped: boolean;
  onToggle: () => void;
  frontComponent: React.ReactNode;
  backContent: { label: string; value: string }[];
  colorTheme: 'purple' | 'blue';
}

function FlippableCard({ flipped, onToggle, frontComponent, backContent, colorTheme }: FlippableCardProps) {
  return (
    <div className="w-full h-[380px] cursor-pointer" onClick={onToggle}>
      <div 
        className={`relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(.4,0,.2,1)] preserve-3d ${flipped ? "rotate-y-180" : ""}`}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-[24px]">
          {/* We need to disable pointer events on the card contents to ensure the click propagates if necessary, or just rely on the wrapper click */}
          {frontComponent}
        </div>

        {/* Back */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-[24px] overflow-hidden border shadow-xl bg-white border-pink-200`}>
           {/* Background Gradient/Effects */}
            <div className={`absolute inset-0 opacity-5 ${
                colorTheme === 'purple' ? 'bg-purple-50' : 'bg-blue-50'
            }`} />
            
            <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply pointer-events-none"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
            />

            <div className="relative z-10 h-full p-8 flex flex-col justify-between text-slate-900">
                <div>
                  <h4 className={`text-sm font-bold uppercase tracking-widest mb-6 ${
                      colorTheme === 'purple' ? 'text-purple-600' : 'text-blue-600'
                  }`}>
                    Impact Metrics
                  </h4>
                  
                  <div className="space-y-6">
                    {backContent.map((item, idx) => (
                        <div key={idx}>
                            <p className="text-xl font-bold text-slate-900 leading-tight">
                                {item.label}
                            </p>
                            <p className="text-sm text-slate-500 font-medium mt-1">
                                {item.value}
                            </p>
                        </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 flex justify-between items-center">
                    <span>Performance Data</span>
                    <span>Click to return</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}