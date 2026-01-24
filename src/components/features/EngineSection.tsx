
import { motion } from 'framer-motion';

const EngineCard = ({ title, description, badge, index }: { title: string, description: string, badge: string, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-[32px] p-2 border border-purple-200/50 shadow-[0_20px_40px_-15px_rgba(42,22,56,0.08)] bg-white overflow-hidden"
        >
             {/* Base Gradient - Matching Card.tsx */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] via-[#f8faff] to-[#f0f4ff] opacity-100 -z-20" />
             
             {/* Decorative Orb */}
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-200/20 rounded-full blur-[80px] pointer-events-none -z-10" />

             <div className="flex flex-col lg:flex-row gap-8 bg-white/50 backdrop-blur-sm rounded-[28px] p-8 min-h-[300px] border border-white/60">
                {/* Visual Placeholder */}
                <div className="flex-1 w-full min-h-[200px] bg-gradient-to-br from-white to-[#F0E6F5] rounded-2xl border border-white/50 shadow-inner flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(192,132,252,0.1),transparent)]" />
                     {/* Abstract Visual Shape */}
                     <div className="w-32 h-32 rounded-full border-4 border-[#C084FC]/20 flex items-center justify-center scale-110">
                        <div className="w-20 h-20 rounded-full bg-[#C084FC]/20 shadow-[0_0_30px_rgba(192,132,252,0.3)]" />
                     </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-center">
                    <div className="mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-white border border-purple-100 text-xs font-bold text-[#C084FC] uppercase tracking-wider shadow-sm">
                            {badge}
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-indigo-900">
                        {title}
                    </h3>
                    <p className="text-[#2A1638] text-lg leading-relaxed">
                        {description}
                    </p>
                </div>
             </div>
        </motion.div>
    );
};


const EngineSection = () => {
    const items = [
        {
            badge: "01",
            title: "Multiple layers of business context",
            description: "Anseru connects the wording and effectiveness of past responses to context, priorities, and internal experts. Connects into a single source of information (The LLM) and then fine-tunes outputs based on your generated content and machine learning."
        },
        {
             badge: "02",
             title: "Continuously updated knowledge graph",
             description: "Our engine recognizes documents and data sources that need to be specific to particular SKUs, verticals, or regions. We create vector databases containing specific tags and modifiers, maintaining up-to-date accurate information across segments regarding pricing, strategy."
        },
        {
             badge: "03",
             title: "Business-driven sourced answers",
             description: "We reference your previous work, internal documents, wiki, code and large language specific answering models to create nuanced answers. References to be checked, strategy, generation includes source citation and link. Confidence levels always present to be verified by a human in the loop."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 xl:px-[120px]">
                <div className="mb-16 max-w-2xl">
                    <p className="text-sm text-[#2A1638]/60 mb-3 uppercase tracking-widest font-medium">
                        What makes us the best
                    </p>
                    <h2 className="text-[#2A1638] text-3xl md:text-5xl font-medium tracking-tight">
                         Inside the Anseru Engine
                    </h2>
                </div>

                <div className="space-y-6">
                    {items.map((item, idx) => (
                        <EngineCard key={idx} {...item} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EngineSection;
