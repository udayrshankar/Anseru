import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, FileText, Lock, FileSpreadsheet, File } from "lucide-react";

// ==========================================
// 1. NEURAL CONNECT ANIMATION (The Brain)
// ==========================================

const sources = [
  { id: "policies", label: "Policies", angle: 210, color: "text-indigo-600", bg: "bg-indigo-50" },
  { id: "controls", label: "Controls", angle: 330, color: "text-violet-600", bg: "bg-violet-50" },
  { id: "evidence", label: "Evidence", angle: 150, color: "text-emerald-600", bg: "bg-emerald-50" },
  { id: "rfps", label: "Past RFPs", angle: 30, color: "text-sky-600", bg: "bg-sky-50" },
];

export const NewConnectAnimation = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // Cycle through nodes sending data
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNode = sources[Math.floor(Math.random() * sources.length)];
      setActiveNode(randomNode.id);
      setTimeout(() => setActiveNode(null), 1500); // Reset after animation
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] bg-[#FDFCFE] rounded-xl overflow-hidden flex items-center justify-center border border-slate-100 shadow-sm font-sans">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.4]"
        style={{ backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      />

      {/* --- Central Hub --- */}
      <div className="relative z-20">
        {/* The "Shield" that reacts to data */}
        <motion.div
          animate={activeNode ? { scale: [1, 1.1, 1] } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="w-24 h-24 bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(79,70,229,0.3)] flex flex-col items-center justify-center border border-indigo-50 z-10 relative"
        >
          <ShieldCheck className="w-8 h-8 text-indigo-600 mb-1" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Secure</span>
          
          {/* Inner Glow Pulse */}
          <motion.div 
            className="absolute inset-0 bg-indigo-500/5 rounded-3xl"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Reaction Rings */}
        <AnimatePresence>
          {activeNode && (
            <motion.div
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 2.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-indigo-500/10 rounded-3xl -z-10"
            />
          )}
        </AnimatePresence>
      </div>

      {/* --- Orbiting Nodes --- */}
      {sources.map((source) => (
        <NeuralNode 
          key={source.id} 
          source={source} 
          isActive={activeNode === source.id} 
        />
      ))}
    </div>
  );
};

const NeuralNode = ({ source, isActive }: { source: any, isActive: boolean }) => {
  const radius = 140;
  const x = Math.cos((source.angle * Math.PI) / 180) * radius;
  const y = Math.sin((source.angle * Math.PI) / 180) * radius;

  return (
    <div className="absolute top-1/2 left-1/2 w-0 h-0">
      {/* Connection Line */}
      <svg className="absolute top-0 left-0 overflow-visible w-0 h-0 -z-10">
         <motion.line
           x1={0} y1={0} x2={x} y2={y}
           stroke={isActive ? "#6366F1" : "#E2E8F0"}
           strokeWidth={isActive ? 3 : 2}
           strokeDasharray="4 4"
           initial={{ pathLength: 0 }}
           animate={{ pathLength: 1, strokeOpacity: isActive ? 1 : 0.4 }}
           transition={{ duration: 1 }}
         />
         {/* Data Packet */}
         {isActive && (
           <motion.circle
             cx={0} cy={0} r={4} fill="#6366F1"
             initial={{ cx: x, cy: y }}
             animate={{ cx: 0, cy: 0 }}
             transition={{ duration: 0.6, ease: "easeInOut" }}
           />
         )}
      </svg>

      {/* The Node Card */}
      <motion.div
        className={`absolute flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-slate-100 cursor-default`}
        style={{ x: x - 50, y: y - 20, width: 100 }} // Center the node
        animate={{ 
          scale: isActive ? 1.1 : 1,
          y: isActive ? y - 20 : [y - 20, y - 25, y - 20], // Float when idle
        }}
        transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
      >
        <div className={`w-2 h-2 rounded-full ${source.color.replace("text", "bg")}`} />
        <span className="text-xs font-bold text-slate-700">{source.label}</span>
      </motion.div>
    </div>
  );
};


// ==========================================
// 2. PIPELINE UPLOAD ANIMATION (The Factory)
// ==========================================

const files = [
  { id: 1, label: "Q3_Report.pdf", icon: FileText, color: "text-rose-500", bg: "bg-rose-50" },
  { id: 2, label: "Data_Set.xlsx", icon: FileSpreadsheet, color: "text-emerald-500", bg: "bg-emerald-50" },
  { id: 3, label: "Secure_Key.pem", icon: Lock, color: "text-amber-500", bg: "bg-amber-50" },
  { id: 4, label: "RFP_Draft.docx", icon: File, color: "text-blue-500", bg: "bg-blue-50" },
];

export const NewUploadAnimation = () => {
  const [queue, setQueue] = useState(files);
  const [processing, setProcessing] = useState<any>(null);
  const [completedCount, setCompletedCount] = useState(0);

  // The "Game Loop" for the upload queue
  useEffect(() => {
    if (queue.length === 0 && !processing) {
      // Reset loop for demo purposes
      setTimeout(() => {
        setQueue(files);
        setCompletedCount(0);
      }, 2000);
      return;
    }

    if (!processing && queue.length > 0) {
      const nextFile = queue[0];
      
      // 1. Pop from queue
      setQueue((prev) => prev.slice(1));
      
      // 2. Start Processing
      setProcessing(nextFile);

      // 3. Finish Processing
      setTimeout(() => {
        setProcessing(null);
        setCompletedCount((prev) => prev + 1);
      }, 1500); // Time spent inside the "machine"
    }
  }, [queue, processing]);

  return (
    <div className="relative w-full h-[300px] bg-slate-50 flex items-center justify-center gap-12 overflow-hidden rounded-xl border border-slate-200 shadow-inner">
      
      {/* --- LEFT: The Queue Stack --- */}
      <div className="relative w-48 h-40">
         <div className="absolute -top-8 left-0 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pending Uploads</div>
         <AnimatePresence>
            {queue.map((file, index) => (
              <motion.div
                key={file.id}
                layoutId={`file-${file.id}`}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ 
                  opacity: 1 - index * 0.2, 
                  y: index * 12, 
                  scale: 1 - index * 0.05,
                  zIndex: 10 - index 
                }}
                exit={{ 
                  x: 150, // Fly to the right into the processor
                  y: 35,  // Align with processor center
                  scale: 0.4, 
                  opacity: 0,
                  transition: { duration: 0.6, ease: "backIn" } 
                }}
                className={`absolute inset-x-0 h-14 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center px-3 gap-3`}
              >
                <div className={`p-1.5 rounded-lg ${file.bg}`}>
                  <file.icon className={`w-4 h-4 ${file.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-slate-700 truncate">{file.label}</div>
                  <div className="text-[10px] text-slate-400">Waiting...</div>
                </div>
              </motion.div>
            ))}
         </AnimatePresence>
         
         {/* Empty State */}
         {queue.length === 0 && (
           <motion.div 
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
             className="absolute inset-0 flex items-center justify-center text-xs text-slate-400 italic"
           >
             All files processed
           </motion.div>
         )}
      </div>

      {/* --- CENTER: The "Processor" Machine --- */}
      <div className="relative z-20">
         {/* The Machine Body */}
         <motion.div 
           animate={processing ? { scale: [1, 1.05, 1] } : { scale: 1 }}
           transition={{ repeat: processing ? Infinity : 0, duration: 0.5 }}
           className="w-40 h-40 bg-white rounded-2xl shadow-xl border border-indigo-100 flex flex-col items-center justify-center relative overflow-hidden"
         >
            {/* Success Flash */}
            {processing && (
              <motion.div 
                className="absolute inset-0 bg-indigo-500/5"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}

            {/* Icon State */}
            <div className="relative w-16 h-16 mb-2 flex items-center justify-center">
               <AnimatePresence mode="wait">
                 {!processing ? (
                   <motion.div key="idle" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                     <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
                       <span className="text-2xl font-bold text-slate-400">{completedCount}</span>
                     </div>
                   </motion.div>
                 ) : (
                   <motion.div key="processing" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                     {/* Spinner */}
                     <svg className="animate-spin w-16 h-16 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                     </svg>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
            
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              {processing ? "Analyzing..." : "Ready"}
            </span>

            {/* Progress Bar (at bottom of card) */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100">
               {processing && (
                  <motion.div 
                    className="h-full bg-indigo-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "linear" }}
                  />
               )}
            </div>
         </motion.div>

        
      </div>

    </div>
  );
};