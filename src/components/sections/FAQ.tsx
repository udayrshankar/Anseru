import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const TimerBorder = ({ duration = 4000 }: { duration?: number }) => {
  const gradientId = useId();
  
  return (
    <div className="absolute inset-0 z-50 pointer-events-none rounded-2xl">
      <svg className="absolute inset-0 w-full h-full overflow-visible">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9F5AF0" />
            <stop offset="100%" stopColor="#7038BA" />
          </linearGradient>
        </defs>
        <motion.rect
          x="1.5"
          y="1.5"
          width="calc(100% - 3px)"
          height="calc(100% - 3px)"
          rx="14" 
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
};

const FAQS = [
  {
    question: "How does Anseru ensure data security?",
    answer: "Anseru is built with security-first architecture. We use enterprise-grade encryption for all data in transit and at rest. Your data is isolated and never used to train public models. We are SOC 2 Type II compliant.",
  },
  {
    question: "Can I integrate Anseru with my existing tools?",
    answer: "Yes! Anseru integrates seamlessly with popular CRMs like Salesforce and HubSpot, as well as communication tools like Slack and Microsoft Teams, ensuring smooth workflows for your team.",
  },
  {
    question: "What makes Anseru different from other AI tools?",
    answer: "Unlike generic AI wrappers, Anseru provides specialized agents (like Sud and KG) that are purpose-built for specific workflows—RFP automation and security questionnaires—delivering higher accuracy and simpler adoption.",
  },
  {
    question: "How long does it take to get started?",
    answer: "You can get started in minutes. Simply connect your knowledge base, and our agents will immediately start learning from your existing documentation to provide accurate responses.",
  },
  {
    question: "Do you offer custom enterprise plans?",
    answer: "Absolutely. We offer tailored enterprise plans with dedicated support, custom integrations, and volume-based pricing. Contact our sales team to discuss your specific needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 bg-white">
      <div className="max-w-[1000px] w-full mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-onest text-4xl md:text-5xl font-bold text-[#090909] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Everything you need to know about Anseru and our agents.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (

              <motion.div
                key={index}
                initial={false}
                className={cn(
                  "relative rounded-2xl overflow-hidden transition-all duration-300",
                  "bg-white/90 backdrop-blur-md", // Base
                  "border border-white/60",       // Subtle white border
                  "shadow-[0_10px_30px_-5px_rgba(42,22,56,0.05),0_0_0_1px_rgba(255,255,255,0.8)_inset]", // Soft premium shadow
                  isOpen ? "scale-[1.02] shadow-[0_20px_50px_-10px_rgba(42,22,56,0.12),0_0_0_1px_rgba(255,255,255,0.8)_inset]" : "hover:scale-[1.01]"
                )}
              >
                 {isOpen && <TimerBorder duration={3000} />}

                 {/* Gradient Background - Animated & Textured */}
                 <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div 
                      className="absolute top-[-50%] right-[-20%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]" 
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="absolute bottom-[-50%] left-[-20%] w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[100px]"
                      animate={{ scale: [1.2, 1, 1.2], rotate: [0, -15, 0] }}
                      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    />
                 </div>
                 
                 {/* Noise Texture */}
                 <div className="absolute inset-0 opacity-[0.3] mix-blend-overlay pointer-events-none"
                    style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
                 />

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="relative w-full flex items-center justify-between p-6 text-left z-20"
                >
                  <span className={cn(
                    "font-onest text-lg font-bold transition-all duration-300",
                    isOpen 
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700"
                      : "text-[#090909]"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "p-2 rounded-full transition-colors duration-300",
                    isOpen ? "bg-purple-100/50 text-purple-700" : "bg-transparent text-slate-400"
                  )}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="relative z-20"
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
