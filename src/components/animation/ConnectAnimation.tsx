import { motion } from "framer-motion";
import { Database, FolderKanban, FileText, Lock } from "lucide-react";

export default function ConnectAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      
       {/* Background Ripple */}
       <div className="absolute inset-0 flex items-center justify-center">
            {[1, 2, 3].map((i) => (
                <motion.div 
                    key={i}
                    className="absolute border border-purple-100 rounded-full"
                    style={{ width: `${i * 150}px`, height: `${i * 150}px` }}
                    animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                />
            ))}
       </div>

      {/* Central Hub */}
      <div className="relative z-20 w-20 h-20 bg-white shadow-[0_10px_40px_rgba(124,58,237,0.15)] rounded-2xl flex items-center justify-center border border-purple-100">
          <Lock className="text-purple-600" size={28} />
          {/* Inner Pulse */}
          <motion.div 
            className="absolute inset-0 bg-purple-500/5 rounded-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
      </div>

      {/* Sources feeding in */}
      <SourceItem icon={Database} angle={0} color="text-blue-500" bg="bg-blue-50" />
      <SourceItem icon={FolderKanban} angle={72} color="text-orange-500" bg="bg-orange-50" />
      <SourceItem icon={FileText} angle={144} color="text-green-500" bg="bg-green-50" />
      <SourceItem icon={Lock} angle={216} color="text-red-500" bg="bg-red-50" />
      <SourceItem icon={FileText} angle={288} color="text-purple-500" bg="bg-purple-50" />

    </div>
  );
}

const SourceItem = ({ icon: Icon, angle, color, bg }: { icon: any, angle: number, color: string, bg: string }) => {
    const radius = 120;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;

    return (
        <>
            {/* The Icon */}
            <motion.div 
                className={`absolute w-10 h-10 ${bg} rounded-xl shadow-sm flex items-center justify-center border border-white/50 z-10`}
                style={{ x, y }}
                animate={{ y: [y, y - 5, y] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() }}
            >
                <Icon className={color} size={18} />
            </motion.div>

            {/* Connecting Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <motion.line 
                    x1="50%" y1="50%"
                    x2={`calc(50% + ${x}px)`} y2={`calc(50% + ${y}px)`}
                    stroke="#E9D5FF"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                />
            </svg>

            {/* Data Packet */}
            <motion.div 
                className="absolute w-2 h-2 bg-purple-500 rounded-full z-10"
                initial={{ x, y, opacity: 0 }}
                animate={{ 
                    x: [x, 0], 
                    y: [y, 0],
                    opacity: [1, 1, 0],
                    scale: [1, 0.5]
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", repeatDelay: Math.random() * 2 }}
            />
        </>
    )
}
