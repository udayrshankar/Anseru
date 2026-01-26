import React from "react";
import { motion } from "framer-motion";
import { Database,  FileText, CheckCircle2, Link2, Globe, MessageSquare } from "lucide-react";

// --- 1. THE NEURAL HUB (Connect) ---
export const NewConnectAnimation = React.memo(() => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-50/50 to-emerald-50/50 relative overflow-hidden">
            {/* Noise Texture */}
            <div className="absolute inset-0 mix-blend-overlay pointer-events-none"
                 style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
            />
            
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03]" 
                 style={{ backgroundImage: 'radial-gradient(circle, #a855f7 1px, transparent 1px)', backgroundSize: '30px 30px' }}
            />

            {/* Central Connectivity System */}
            <div className="relative w-[280px] h-[280px] flex items-center justify-center">
                
                {/* Central Hub (Anseru Core) */}
                <div className="relative z-20">
                    <motion.div 
                        className="w-20 h-20 bg-white rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.3)] flex items-center justify-center border border-purple-100 relative z-20 will-change-transform"
                        animate={{ 
                            boxShadow: ["0 0 40px rgba(168,85,247,0.3)", "0 0 60px rgba(168,85,247,0.5)", "0 0 40px rgba(168,85,247,0.3)"],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                         <Link2 className="text-purple-600" size={32} />
                         
                         {/* Spinning Rings */}
                         <motion.div 
                            className="absolute inset-[-6px] rounded-[22px] border border-purple-200/60 border-dashed will-change-transform"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                         />
                    </motion.div>
                </div>

                {/* Satellite Integrations */}
                <IntegrationNode icon={MessageSquare} angle={45} color="text-indigo-500" bg="bg-indigo-500" delay={0} />
                <IntegrationNode icon={Database} angle={135} color="text-emerald-500" bg="bg-emerald-500" delay={1.5} />
                <IntegrationNode icon={FileText} angle={225} color="text-orange-500" bg="bg-orange-500" delay={3} />
                <IntegrationNode icon={Globe} angle={315} color="text-blue-500" bg="bg-blue-500" delay={4.5} />

            </div>
        </div>
    )
});

const IntegrationNode = ({ icon: Icon, angle, color, bg, delay }: { icon: any, angle: number, color: string, bg: string, delay: number }) => {
    const distance = 100; // Distance from center
    // Convert angle to rads for positioning
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * distance;
    const y = Math.sin(rad) * distance;

    return (
        <React.Fragment>
            {/* Connection Line */}
            <div 
                className="absolute top-1/2 left-1/2 h-[1px] bg-slate-200 origin-left z-0"
                style={{ 
                    width: distance, 
                    transform: `translate(0, -50%) rotate(${angle}deg)`, // Anchor at center (top/left 50%), rotate, then line draws outwards
                }}
            > 
                {/* Data Packet traveling TO center (Right to Left in this rotated frame) */}
                <motion.div 
                    className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full ${bg} shadow-sm`}
                    animate={{ left: ["100%", "0%"], opacity: [0, 1, 0] }} 
                    transition={{ duration: 2, repeat: Infinity, delay: delay, ease: "easeInOut" }}
                />
            </div>

            {/* Icon Node */}
            <motion.div 
                className="absolute top-1/2 left-1/2 z-10 will-change-transform"
                initial={{ x, y }} 
                animate={{ 
                    x: x, 
                    y: [y - 4, y + 4, y - 4] // Slight bobbing
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay }}
            >
                <div className={`w-10 h-10 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 group hover:scale-110 transition-transform`}>
                    <Icon size={18} className={color} />
                </div>
            </motion.div>
        </React.Fragment>
    )
}




// --- 2. THE DIGITAL SCANNER (Upload) ---
export const NewUploadAnimation = React.memo(() => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-purple-50/20 relative overflow-hidden">
             {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none"
                 style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
            />

             <div className="relative w-48 h-64 perspective-1000 z-10">
                 
                 {/* The Document - 3D Tilt */}
                 <motion.div 
                    className="w-full h-full bg-white rounded-xl shadow-xl border border-slate-200 p-6 flex flex-col gap-3 relative overflow-hidden will-change-transform"
                    animate={{ rotateX: [10, 0, 10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 >
                     {/* Raw Content (Blurry/Loading look) */}
                     <div className="space-y-3 opacity-30">
                         <div className="w-full h-2 bg-slate-300 rounded-full" />
                         <div className="w-3/4 h-2 bg-slate-300 rounded-full" />
                         <div className="w-full h-2 bg-slate-300 rounded-full" />
                         <div className="w-1/2 h-2 bg-slate-300 rounded-full" />
                         <div className="w-full h-32 bg-slate-100 rounded-md mt-4" />
                     </div>

                     {/* Clean Content (Revealed by Scan) */}
                     <motion.div 
                        className="absolute inset-0 bg-white p-6 flex flex-col gap-3"
                        initial={{ clipPath: "bg-slate-50 inset(0 0 100% 0)" }}
                        animate={{ clipPath: "inset(0 0 0% 0)" }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: "linear" }}
                     >
                         <div className="flex gap-2 mb-2">
                             <div className="px-2 py-0.5 bg-purple-100 rounded text-[8px] font-bold text-purple-600">REQ-2024</div>
                             <div className="px-2 py-0.5 bg-blue-100 rounded text-[8px] font-bold text-blue-600">HIGH PRIORITY</div>
                         </div>
                         <div className="w-full h-2 bg-slate-800 rounded-full" />
                         <div className="w-3/4 h-2 bg-slate-600 rounded-full" />
                         <div className="mt-4 grid grid-cols-2 gap-2">
                             <div className="h-10 bg-slate-50 border border-slate-100 rounded" />
                             <div className="h-10 bg-slate-50 border border-slate-100 rounded" />
                         </div>
                     </motion.div>
                 </motion.div>
                 
                 {/* The Laser Scanner */}
                 <motion.div
                    className="absolute left-[-20%] right-[-20%] h-1 bg-purple-500 shadow-[0_0_20px_#a855f7] z-20 will-change-transform"
                    initial={{ top: 0, opacity: 0 }}
                    animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: "linear" }}
                 >
                     <div className="absolute inset-0 bg-white/50 blur-[2px]" />
                 </motion.div>

                 {/* Success Badge */}
                 <motion.div
                    className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 z-30"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.1, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 0, times: [0.6, 0.7, 0.9, 1] }}
                 >
                     <CheckCircle2 size={12} className="stroke-[3px]" />
                     <span className="text-[10px] font-bold">Parsed</span>
                 </motion.div>

             </div>

        </div>
    )
});
