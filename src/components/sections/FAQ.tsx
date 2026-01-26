import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Professional Color Themes ---
type FAQTheme = 'purple' | 'blue' | 'emerald' | 'orange' | 'pink';

interface FAQItem {
  question: string;
  answer: string;
  theme: FAQTheme;
}

const FAQS: FAQItem[] = [
  {
    question: "How does Anseru ensure data security?",
    answer: "Anseru is built with security-first architecture. We use enterprise-grade encryption for all data in transit and at rest. Your data is isolated and never used to train public models. We are SOC 2 Type II compliant.",
    theme: 'blue',
  },
  {
    question: "Can I integrate Anseru with my existing tools?",
    answer: "Yes! Anseru integrates seamlessly with popular CRMs like Salesforce and HubSpot, as well as communication tools like Slack and Microsoft Teams, ensuring smooth workflows for your team.",
    theme: 'purple',
  },
  {
    question: "What makes Anseru different from other AI tools?",
    answer: "Unlike generic AI wrappers, Anseru provides specialized agents (like Sud and KG) that are purpose-built for specific workflows—RFP automation and security questionnaires—delivering higher accuracy and simpler adoption.",
    theme: 'emerald',
  },
  {
    question: "How long does it take to get started?",
    answer: "You can get started in minutes. Simply connect your knowledge base, and our agents will immediately start learning from your existing documentation to provide accurate responses.",
    theme: 'orange',
  },
  {
    question: "Do you offer custom enterprise plans?",
    answer: "Absolutely. We offer tailored enterprise plans with dedicated support, custom integrations, and volume-based pricing. Contact our sales team to discuss your specific needs.",
    theme: 'pink',
  },
];

const THEME_STYLES: Record<FAQTheme, {
    border: string;
    bgHover: string;
    iconBg: string;
    iconColor: string;
    gradient: string;
}> = {
    blue: {
        border: "hover:border-blue-200",
        bgHover: "hover:bg-blue-50/50",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        gradient: "from-blue-500/10 to-cyan-500/10"
    },
    purple: {
        border: "hover:border-purple-200",
        bgHover: "hover:bg-purple-50/50",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        gradient: "from-purple-500/10 to-indigo-500/10"
    },
    emerald: {
        border: "hover:border-emerald-200",
        bgHover: "hover:bg-emerald-50/50",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        gradient: "from-emerald-500/10 to-teal-500/10"
    },
    orange: {
        border: "hover:border-orange-200",
        bgHover: "hover:bg-orange-50/50",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
        gradient: "from-orange-500/10 to-amber-500/10"
    },
    pink: {
        border: "hover:border-pink-200",
        bgHover: "hover:bg-pink-50/50",
        iconBg: "bg-pink-100",
        iconColor: "text-pink-600",
        gradient: "from-pink-500/10 to-rose-500/10"
    }
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-24 bg-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-purple-50/50 to-transparent pointer-events-none" />

      <div className="max-w-[900px] w-full mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium mb-6"
          >
             <HelpCircle size={16} />
             <span>Support Center</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-onest text-4xl md:text-5xl font-bold text-[#090909] tracking-tight mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            Everything you need to know about Anseru's capabilities, security, and pricing.
          </motion.p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const theme = THEME_STYLES[faq.theme];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative rounded-2xl overflow-hidden transition-all duration-500",
                  "bg-white border border-slate-100",
                  "shadow-sm hover:shadow-md",
                  theme.border,
                  isOpen ? "ring-1 ring-offset-2 " + theme.border.replace('hover:', '') : ""
                )}
              >
                 {/* Animated Background Gradient on Hover/Active */}
                 <div className={cn(
                     "absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none bg-gradient-to-r",
                     theme.gradient,
                     isOpen ? "opacity-100" : "group-hover:opacity-30"
                 )} />

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="relative w-full flex items-start justify-between p-6 text-left z-20"
                >
                  <div className="flex items-center gap-4">
                      {/* Decorative Dot */}
                      <div className={cn(
                          "w-2 h-2 rounded-full shrink-0 transition-colors duration-300",
                          isOpen ? theme.iconColor.replace('text-', 'bg-') : "bg-slate-300"
                      )} />
                      
                      <span className={cn(
                        "font-onest text-lg font-bold transition-colors duration-300",
                        isOpen ? "text-[#090909]" : "text-slate-700"
                      )}>
                        {faq.question}
                      </span>
                  </div>

                  <div className={cn(
                    "p-2 rounded-full transition-all duration-300 shrink-0 ml-4",
                    isOpen ? `${theme.iconBg} ${theme.iconColor} rotate-180` : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"
                  )}>
                     <Plus size={20} className={cn("transition-transform duration-300", isOpen && "rotate-45")} />
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
                      <div className="px-6 pb-6 pt-0 pl-[3.25rem] text-slate-600 leading-relaxed max-w-[90%]">
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
