import { AgentCard } from '../hero/AgentNotificationCards';
import { FileText, Shield, CheckCircle2, UserCheck, TrendingUp } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="w-full max-w-7xl h-full flex flex-col items-center justify-center mx-auto pt-16">
        {/* Header Section */}
        <div className="text-center mb-5 animate-[fadeInDown_0.8s]">
             <h2 className="text-5xl md:text-6xl font-bold text-gray-900">Anseru executes enterprise deals.</h2>
             <div className="inline-block bg-white/60 backdrop-blur-md border border-purple-100 px-8 py-3 rounded-full shadow-sm">
                <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  An AI + human system for RFPs and security questionnaires that learns from every deal.
                </span>
             </div>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 scale-90 md:grid-cols-2 gap-12 w-full px-12 mb-5">
            <AgentCard
              title="KG"
              description="Automates high-stakes RFPs. Learns from every approved proposal."
              icon={FileText}
              colorTheme="purple"
              className='h-[380px]'
            />

            <AgentCard
              title="SUD"
              description="Manages questionnaires & audits. Ensures zero compliance drift."
              icon={Shield}
              colorTheme="blue"
              className='h-[380px]'
            />
        </div>

        {/* Key Points Section */}
        <div className="flex flex-row gap-20 w-full px-12 items-center justify-center">
            <div className="flex items-center gap-4">
                <div className="p-2 bg-purple-50 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-gray-700 font-medium">Automates execution, <span className="text-purple-600">not judgment</span></p>
            </div>
            
            <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                    <UserCheck className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-700 font-medium">Keeps humans <span className="text-blue-600">accountable</span></p>
            </div>

            <div className="flex items-center gap-4">
                <div className="p-2 bg-pink-50 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-pink-600" />
                </div>
                <p className="text-gray-700 font-medium">Improves with <span className="text-pink-600">every approved answer</span></p>
            </div>
        </div>
    </div>
  );
}