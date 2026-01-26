import bgImage from "../../assets/bg2.png";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#483953]/10 overflow-hidden mt-32">
      {/* Background Image - Preserved */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-60"
        style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-[120px] pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Brand Column - Wider */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
                <h3 className="font-onest text-3xl font-bold text-[#090909] tracking-tight">
                ANSERU
                </h3>
                <p className="text-lg text-[#483953]/70 leading-relaxed font-medium max-w-xs">
                    Accelerating trust in every deal with agentic AI for RFPs and security reviews.
                </p>
            </div>
            
            {/* Socials */}
            <div className="flex gap-4">
                {[Twitter, Linkedin, Github].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-[#483953]/10 flex items-center justify-center text-[#483953] hover:bg-[#2A1638] hover:text-white hover:border-[#2A1638] transition-all duration-300 shadow-sm">
                        <Icon size={18} />
                    </a>
                ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 lg:pl-12">
              {[
                ["Product", ["Features", "Security", "Integrations", "Pricing", "Changelog"]],
                ["Company", ["About Us", "Careers", "Blog", "Contact", "Partners"]],
                ["Resources", ["Documentation", "API Reference", "Community", "Help Center", "Status"]],
              ].map(([title, items]) => (
                <div key={title as string}>
                  <h4 className="font-onest text-sm font-bold text-[#090909] mb-6 uppercase tracking-wider">
                    {title}
                  </h4>
                  <ul className="space-y-4">
                    {(items as string[]).map((item) => (
                      <li key={item}>
                        <a 
                          href="#" 
                          className="text-[#483953]/70 hover:text-[#7038BA] font-medium text-[15px] transition-colors duration-200 block w-fit"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#483953]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium text-[#483953]/50">
            © 2026 Anseru Inc. All rights reserved.
          </p>

          <div className="flex gap-8 text-sm font-medium text-[#483953]/60">
            <a href="#" className="hover:text-[#7038BA] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#7038BA] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#7038BA] transition-colors">Security</a>
            <a href="#" className="hover:text-[#7038BA] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
