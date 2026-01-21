
import { motion } from "framer-motion";
import { Bot, FileText, Sparkles, User, CheckCircle2 } from "lucide-react";

export default function SmartDraftingDetail() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-transparent overflow-hidden">
      {/* --- Ambient Background Glow --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200/40 rounded-full blur-[80px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-200/40 rounded-full blur-[80px] animate-pulse-slow delay-1000" />
      </div>

      {/* --- Main Interface Container --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-[90%] max-w-[420px] bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gray-50/80 border-b border-gray-100 p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                <Bot className="w-5 h-5 text-purple-600" />
            </div>
            <div>
                <h4 className="text-sm font-semibold text-gray-800">Drafting Assistant</h4>
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">Context Active</p>
            </div>
        </div>

        {/* Content Area */}
        <div className="p-6 space-y-6">
            
            {/* Input / Query Simulation */}
            <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-gray-600" />
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 text-sm text-gray-700 shadow-sm">
                    <p>How does Anseru handle data privacy for enterprise clients?</p>
                </div>
            </div>

            {/* AI Processing Indicator */}
            <motion.div 
                className="flex items-center gap-2 px-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <Sparkles className="w-4 h-4 text-purple-500 animate-spin-slow" />
                <span className="text-xs text-purple-600 font-medium">Analyzing Security Policy...</span>
            </motion.div>

            {/* AI Response */}
            <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0 shadow-lg">
                    <Bot className="w-4 h-4 text-white" />
                </div>
                <motion.div 
                    className="relative bg-purple-50 border border-purple-100 rounded-2xl rounded-tl-none p-4 text-sm text-gray-800 shadow-sm w-full"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.4 }}
                >
                     {/* Simulated Typing Effect */}
                     <p className="leading-relaxed">
                        Anseru is <span className="font-semibold text-purple-700">SOC 2 Type II certified</span> and encrypts all data at rest and in transit. We ensure strict role-based access control...
                     </p>

                     {/* Sources Tag */}
                     <motion.div 
                        className="mt-3 flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 3.5 }}
                     >
                        <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-md border border-purple-200 shadow-sm">
                            <FileText className="w-3 h-3 text-purple-500" />
                            <span className="text-[10px] text-gray-600 font-medium">Security_Whitepaper.pdf</span>
                        </div>
                        <div className="flex items-center gap-1 text-green-600">
                             <CheckCircle2 className="w-3 h-3" />
                             <span className="text-[10px] font-bold">Verified</span>
                        </div>
                     </motion.div>
                </motion.div>
            </div>

        </div>

        {/* Footer Polish */}
        <div className="h-1 w-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient-x" />
      </motion.div>
      
      {/* Decorative Floating Elements */}
      <motion.div 
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-16 h-16 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-lg flex items-center justify-center z-0 rotate-12"
      >
         <FileText className="w-8 h-8 text-purple-600/50" />
      </motion.div>

    </div>
  );
}
