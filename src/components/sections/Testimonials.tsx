import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Anseru has completely transformed how we handle security questionnaires. What used to take our engineering team days now happens in minutes with higher accuracy.",
    author: "Sarah Chen",
    role: "CISO",
    company: "TechFlow",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop"
  },
  {
    quote: "The ROI was immediate. We've cut our RFP response time by 75% while maintaining our brand voice perfectly. It's like having an extra team of proposal writers.",
    author: "Michael Ross",
    role: "VP of Sales",
    company: "CloudScale",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    quote: "Finally, a compliance tool that actually understands context. The automated audit trails have made our SOC2 renewals a breeze instead of a nightmare.",
    author: "Elena Rodriguez",
    role: "Head of Compliance",
    company: "DataGuard",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-0 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-16 max-w-2xl mx-auto">
                <p className="text-sm font-semibold text-[#2A1638]/60 mb-3 uppercase tracking-widest">
                    Trusted by Leaders
                </p>
                <h2 className="text-4xl md:text-5xl font-medium text-[#2A1638] tracking-tight mb-6">
                    Loved by teams who move fast
                </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((item, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-[#F6F6F8] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between border border-transparent hover:border-black/5 transition-colors duration-300"
                    >
                        {/* Quote */}
                        <div className="mb-8">
                            {/* Decorative Quote Icon */}
                            <svg className="w-8 h-8 text-[#2A1638]/10 mb-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21L14.017 18C14.017 16.896 14.353 15.925 15.025 15.087C15.697 14.249 16.58 13.653 17.674 13.3L16.295 8.199C15.009 8.653 13.987 9.4 13.23 10.44C12.473 11.48 12.095 12.787 12.095 14.36V21H2.00299V16.62C2.00299 13.16 2.896 10.04 4.682 7.26C6.468 4.48 9.01 2.507 12.308 1.34L13.804 5.28C11.516 6.133 9.873 7.32 8.875 8.84C7.877 10.36 7.378 12.46 7.378 15.14H9.842C10.998 15.14 11.956 15.54 12.716 16.34C13.476 17.14 13.856 18.093 13.856 19.2V21H14.017ZM23.997 21L23.997 18C23.997 16.896 24.333 15.925 25.005 15.087C25.677 14.249 26.56 13.653 27.654 13.3L26.275 8.199C24.989 8.653 23.967 9.4 23.21 10.44C22.453 11.48 22.075 12.787 22.075 14.36V21H11.983V16.62C11.983 13.16 12.876 10.04 14.662 7.26C16.448 4.48 18.99 2.507 22.288 1.34L23.784 5.28C21.496 6.133 19.853 7.32 18.855 8.84C17.857 10.36 17.358 12.46 17.358 15.14H19.822C20.978 15.14 21.936 15.54 22.696 16.34C23.456 17.14 23.836 18.093 23.836 19.2V21H23.997Z" transform="translate(-2 -1)"/>
                            </svg>
                            <p className="text-xl text-[#2A1638] leading-relaxed font-normal">
                                "{item.quote}"
                            </p>
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <img 
                                src={item.image} 
                                alt={item.author} 
                                className="w-12 h-12 rounded-full object-cover border border-black/5"
                            />
                            <div>
                                <h4 className="text-base font-semibold text-[#2A1638]">
                                    {item.author}
                                </h4>
                                <p className="text-sm text-[#2A1638]/60">
                                    {item.role}, {item.company}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
