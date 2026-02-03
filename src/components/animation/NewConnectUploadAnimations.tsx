import { motion } from 'framer-motion';

// --- 1. The Assets (Recolored for Pink/Lavender theme) ---

const ShieldIcon = ({ className }: { className?: string }) => (
  // Kept white for contrast against the darker pink/purple shield center
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const PdfIcon = () => (
  // Vibrant Pink
  <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.5" className="w-6 h-6 relative z-10">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <text x="5" y="18" className="text-[8px] font-bold" fill="#ec4899">PDF</text>
  </svg>
);

const WordIcon = () => (
  // Lavender / Purple
  <svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.5" className="w-6 h-6 relative z-10">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <text x="5" y="18" className="text-[8px] font-bold" fill="#a855f7">DOC</text>
  </svg>
);

const ExcelIcon = () => (
  // Rose Pink
  <svg viewBox="0 0 24 24" fill="none" stroke="#fb7185" strokeWidth="1.5" className="w-6 h-6 relative z-10">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <text x="5" y="18" className="text-[8px] font-bold" fill="#fb7185">XLS</text>
  </svg>
);

const GenericDocIcon = () => (
  // Fuchsia
  <svg viewBox="0 0 24 24" fill="none" stroke="#d946ef" strokeWidth="1.5" className="w-6 h-6 relative z-10">
     <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
     <line x1="8" y1="13" x2="16" y2="13"/>
     <line x1="8" y1="17" x2="16" y2="17"/>
  </svg>
);


// --- 2. Configuration Data (Updated timing for fast pacing) ---
// We tighten the delays significantly for a faster flow.
const documentsData = [
  { id: 1, icon: <PdfIcon />, startX: -120, startY: -80, delay: 0 },
  { id: 2, icon: <WordIcon />, startX: 130, startY: -60, delay: 0.6 },
  { id: 3, icon: <ExcelIcon />, startX: -100, startY: 100, delay: 1.2 },
  { id: 4, icon: <GenericDocIcon />, startX: 110, startY: 90, delay: 1.8 },
];


const NewConnectAnimation = () => {
  return (
    // Main container: Light theme background with subtle pink tint
    <div className="relative w-full h-[300px] bg-gradient-to-br from-slate-50 to-pink-50/50 rounded-xl overflow-hidden flex items-center justify-center border border-purple-100 shadow-xl shadow-purple-100/50">

      {/* --- The Central Secure Hub (Lavender/Pink Core) --- */}
      <div className="relative z-20 flex items-center justify-center">
        {/* The pulsing outer security ring - Pink/Purple blur */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
          // Faster pulse (1.5s instead of 3s)
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-24 h-24 bg-fuchsia-400/30 rounded-full blur-xl"
        />
        {/* The solid center shield - Pink to Purple gradient */}
        <div className="w-16 h-16 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/40 relative overflow-hidden">
           {/* Subtle inner light sweep */}
           <motion.div
             animate={{ x: [-60, 60] }}
             // Faster sweep
             transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.2, ease: "easeInOut"}}
             className="absolute w-8 h-full bg-white/30 skew-x-12 blur-md"
           />
           <ShieldIcon className="w-8 h-8 text-white relative z-10" />
        </div>
      </div>

      {/* --- The Flying Documents --- */}
      {documentsData.map((doc) => (
        <motion.div
          key={doc.id}
          className="absolute top-1/2 left-1/2"
          initial={{ x: doc.startX, y: doc.startY, opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{
            x: 0,
            y: 0,
            // Adjusted keyframes for faster entry and quicker absorption
            opacity: [0, 1, 1, 0],
            scale: [0.6, 1, 1, 0.1],
            rotate: 0,
          }}
          transition={{
            // Much faster duration (2.2s instead of 4s)
            duration: 2.2,
            repeat: Infinity,
            delay: doc.delay,
            ease: "easeInOut",
            times: [0, 0.15, 0.85, 1] // Tighter timings
          }}
        >
          {/* The "Security Bubble" - Light Pink/Lavender theme */}
          <div className="relative flex items-center justify-center p-3">
             {/* The glowing force field effect - Pink/Purple glow */}
            <motion.div
               animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.6, 0.9, 0.6] }}
               // Faster pulse on the bubble itself
               transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
               // Changed to pink backgrounds, purple borders, and pink glow shadow
               className="absolute inset-0 bg-pink-100/60 border border-purple-200/50 rounded-xl shadow-[0_0_15px_rgba(236,72,153,0.3)] backdrop-blur-[2px]"
            />
            {doc.icon}
          </div>
        </motion.div>
      ))}
    </div>
  );
};


// --- 3. NewUploadAnimation ---
export const NewUploadAnimation = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-slate-100 flex items-center justify-center overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />

        {/* Central Upload Zone */}
        <div className="relative z-10 w-48 h-32 rounded-xl border-2 border-dashed border-slate-300 bg-white/50 backdrop-blur-sm flex flex-col items-center justify-center gap-2 shadow-sm">
             <div className="p-3 bg-purple-50 rounded-full mb-1">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                     <polyline points="17 8 12 3 7 8" />
                     <line x1="12" y1="3" x2="12" y2="15" />
                 </svg>
             </div>
             <div className="h-1 w-24 bg-slate-100 rounded-full overflow-hidden">
                 <motion.div 
                    className="h-full bg-purple-500"
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                 />
             </div>
        </div>

        {/* Floating Files being uploaded */}
        <FloatingDoc delay={0} x={-80} y={40} Icon={PdfIcon} />
        <FloatingDoc delay={0.8} x={80} y={-30} Icon={WordIcon} />
        <FloatingDoc delay={1.6} x={-60} y={-50} Icon={ExcelIcon} />
        <FloatingDoc delay={2.4} x={90} y={50} Icon={GenericDocIcon} />

    </div>
  );
};

const FloatingDoc = ({ delay, x, y, Icon }: { delay: number; x: number; y: number; Icon: any }) => (
    <motion.div
        className="absolute z-20 p-2 bg-white rounded-lg shadow-md border border-slate-100"
        initial={{ x, y, opacity: 0, scale: 0.8 }}
        animate={{ 
            y: [y, 0], // Move towards center (roughly) - actually let's just float up
            opacity: [0, 1, 0],
            scale: [0.8, 1, 0.5],
            x: [x, 0] // Move to center
        }}
        transition={{ 
            duration: 2, 
            delay, 
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut"
        }}
    >
        <Icon />
    </motion.div>
);

export default NewConnectAnimation;