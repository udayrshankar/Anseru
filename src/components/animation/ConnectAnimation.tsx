import { motion } from "framer-motion";
import { Database, FolderKanban, FileText, Lock } from "lucide-react";

export default function ConnectAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-purple-200/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-blue-200/30 rounded-full blur-[100px]" />

      {/* Central Hub */}
      <div className="relative z-10 w-24 h-24 bg-white/60 backdrop-blur-xl rounded-[24px] shadow-[0_8px_32px_rgba(31,38,135,0.15)] border border-white/50 flex items-center justify-center">
        <Lock className="text-purple-600" size={32} />
        {/* Hub Glow */}
        <motion.div 
            className="absolute inset-0 bg-purple-500/10 rounded-[24px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Orbiting Satellites */}
      <OrbitingIcon angle={0} delay={0} icon={Database} color="text-blue-500" />
      <OrbitingIcon angle={90} delay={1} icon={FolderKanban} color="text-orange-500" />
      <OrbitingIcon angle={180} delay={2} icon={FileText} color="text-green-500" />
      <OrbitingIcon angle={270} delay={3} icon={Lock} color="text-purple-500" />

      {/* Particles Flowing In */}
      {[0, 90, 180, 270].map((angle, i) => (
         <Particle key={i} angle={angle} delay={i * 0.5} />
      ))}
    </div>
  );
}

const OrbitingIcon = ({ angle, icon: Icon, color }: { angle: number, delay: number, icon: any, color: string }) => {
    return (
        <motion.div
            className="absolute z-10"
            initial={{ rotate: angle }}
            animate={{ rotate: angle + 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ width: "200px", height: "200px" }} // Orbit diameter
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div 
                    animate={{ rotate: -(angle + 360) }} // Counter-rotate to keep icon upright
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 flex items-center justify-center"
                >
                    <Icon className={color} size={20} />
                </motion.div>
            </div>
        </motion.div>
    )
}

const Particle = ({ angle, delay }: { angle: number, delay: number }) => {
    return (
        <motion.div
            className="absolute w-1.5 h-1.5 bg-purple-500 rounded-full z-0"
            style={{ 
                top: "50%", 
                left: "50%",
                transform: `rotate(${angle}deg) translate(80px) rotate(-${angle}deg)` // Start at orbit
            }}
            animate={{ 
                transform: `rotate(${angle}deg) translate(0px) rotate(-${angle}deg)`, // Move to center
                opacity: [0, 1, 0] 
            }}
            transition={{ duration: 2, delay, repeat: Infinity, ease: "easeInOut" }}
        />
    )
}
