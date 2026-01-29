import { AgentCard } from '../hero/AgentNotificationCards';
import { FileText, Shield } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="w-full max-w-7xl h-full flex flex-col items-center justify-center mx-auto">
        <div className="text-center mb-10 animate-[fadeInDown_0.8s]">
             <h2 className="text-5xl md:text-6xl font-bold text-gray-900">Anseru executes enterprise deals.</h2>
             <div className="inline-block bg-white/60 backdrop-blur-md border border-purple-100 px-8 py-3 rounded-full shadow-sm">
                <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Humans stay accountable. Agents stay consistent.</span>
             </div>
        </div>

        <div className="grid grid-cols-2 gap-20 w-full px-12">
            {/* KG (Lavender) */}
            <AgentCard
              title="KG"
              description="Automates high-stakes RFPs. Learns from every approved proposal."
              icon={FileText}
              colorTheme="purple"
              className='h-[380px]'
            />
         

            {/* SUD (Blue-Purple) */}
            
                <AgentCard
                  title="SUD"
                  description="Manages questionnaires & audits. Ensures zero compliance drift."
                  icon={Shield}
                  colorTheme="blue"
                  className='h-[380px]'
                />

           
        </div>
    </div>
  );
}