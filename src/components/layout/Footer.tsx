import bgImage from "../../assets/bg2.png";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/50 overflow-hidden mt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-3xl font-medium text-[#2A1638] tracking-tight">
              Anseru
            </h3>
            <p className="text-lg text-[#483953]/70 max-w-sm leading-relaxed">
              Your edge in RFPs & Reviews. Powered by agentic AI to build trust and accelerate deals.
            </p>
          </div>

          {[
            ["Product", ["Features", "Security", "Integrations", "Pricing"]],
            ["Company", ["About", "Careers", "Blog", "Contact"]],
            ["Resources", ["Help Center", "API Docs", "ROI Calculator", "Status"]],
          ].map(([title, items]) => (
            <div key={title as string} className="lg:col-span-1">
              <h4 className="text-base font-semibold text-[#2A1638] mb-6 uppercase tracking-wider opacity-80">
                {title}
              </h4>
              <ul className="space-y-4">
                {(items as string[]).map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-[#483953]/70 hover:text-[#483953] text-[15px] transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[#483953]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-[#483953]/60">
            © 2024 Anseru Inc. All rights reserved.
          </p>

          <div className="flex gap-8 text-sm text-[#483953]/60">
            <a href="#" className="hover:text-[#483953] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#483953] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#483953] transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}