import React from "react";
import { motion } from "framer-motion";
import {
  Slack,
  FileSpreadsheet,
  Mail,
  Trello,
  Github,
  Database,
  Cloud,
  MessageSquare,
  Calendar,
  FileText,
  PieChart,
  Server,
} from "lucide-react";

// Configuration for the 12 surrounding apps
const apps = [
  { icon: Slack, color: "#0f0f0f", label: "Slack" },
  { icon: FileSpreadsheet, color: "#0f0f0f", label: "Sheets" },
  { icon: Mail, color: "#0f0f0f", label: "Email" },
  { icon: Database, color: "#0f0f0f", label: "CRM" },
  { icon: Trello, color: "#0f0f0f", label: "Tasks" },
  { icon: Github, color: "#0f0f0f", label: "Code" },
  { icon: Cloud, color: "#0f0f0f", label: "Drive" },
  { icon: MessageSquare, color: "#0f0f0f", label: "Chat" },
  { icon: Calendar, color: "#0f0f0f", label: "Calendar" },
  { icon: FileText, color: "#0f0f0f", label: "Docs" },
  { icon: PieChart, color: "#0f0f0f", label: "Analytics" },
  { icon: Server, color: "#0f0f0f", label: "ERP" },
];

const AIHubAnimation = () => {
  // Increased container width slightly to accommodate the oval shape
  const containerWidth = 700; 
  const containerHeight = 500;
  
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;

  // ELLIPSE CONFIGURATION
  // Radius X is larger to clear the wide box
  // Radius Y is smaller to prevent "going too far up or down"
  const radiusX = 300; 
  const radiusY = 190; 

  return (
    <div
      className="relative mx-auto"
      style={{ width: containerWidth, height: containerHeight }}
    >
      {/* --- 1. The Central AI Box --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        {/* Glowing backdrop for the hub */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-2xl rounded-full" />
        
        {/* Box Container - widened to w-[420px] to match "w-100" intent securely */}
        <div className="relative bg-white bg-opacity-80 backdrop-blur-xl border border-white/50 rounded-[30px] p-8 shadow-[0_0_40px_rgba(192,132,252,0.25)] flex flex-col items-center justify-center text-center w-[420px] h-48">
           {/* Subtle inner gradient border effect */}
           <div className="absolute inset-0 rounded-[30px] border-[2px] border-transparent bg-linear-to-br from-purple-200 to-pink-200 [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] -z-10"></div>
           
           <h3 className="leading-tight text-2xl font-medium text-gray-900">
             Win deals with Anseru
           </h3>
        </div>
      </div>

      {/* --- 2. Surrounding Apps & Connections Loop --- */}
      {apps.map((app, index) => {
        // ELLIPSE LOGIC
        // 1. Full circle is 2 * PI
        // 2. We divide by number of apps
        // 3. We offset by -PI/2 to start at top
        // 4. CRITICAL: We add (Math.PI / 12) which is 15 degrees. 
        //    Since items are 30 deg apart, this half-step shift ensures 
        //    the "Bottom" (90 deg) is exactly between two items.
        const step = (2 * Math.PI) / apps.length;
        const angle = index * step - Math.PI / 2 + (Math.PI / 12);
        
        const x = centerX + radiusX * Math.cos(angle);
        const y = centerY + radiusY * Math.sin(angle);

        return (
          <React.Fragment key={index}>
            {/* A. The Connecting Line (SVG) */}
            <svg className="absolute inset-0 pointer-events-none z-0" width={containerWidth} height={containerHeight}>
              <line
                x1={x}
                y1={y}
                x2={centerX}
                y2={centerY}
                stroke="#E5E7EB"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>

            {/* B. The Flowing Data Dot Animation */}
            <motion.div
              className="absolute w-3 h-3 rounded-full z-10"
              style={{ 
                backgroundColor: app.color,
                boxShadow: `0 0 10px ${app.color}80`,
              }}
              initial={{ left: x - 6, top: y - 6, opacity: 0, scale: 0.5 }}
              animate={{
                left: [x - 6, centerX - 6],
                top: [y - 6, centerY - 6],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 0.8, 0]
              }}
              transition={{
                duration: 3 + Math.random(),
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />

            {/* C. The App Icon Bubble */}
            <div
              className="absolute z-20 flex flex-col items-center justify-center p-3 bg-white rounded-2xl shadow-md border border-gray-100 transition-transform hover:scale-110"
              style={{
                left: x,
                top: y,
                transform: "translate(-50%, -50%)",
                width: '60px',
                height: '60px'
              }}
            >
              <app.icon size={30} color={app.color} />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AIHubAnimation;