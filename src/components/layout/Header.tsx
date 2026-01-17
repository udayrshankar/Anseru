import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-2 px-4">
      <nav className="w-full max-w-[1200px] min-h-[72px] rounded-full border border-black/10 bg-white/10 backdrop-blur-[50px] shadow-lg flex items-center justify-between px-6 py-4">
        {/* Logo - Using H3 style for weight but overriding size if needed, or keeping explicit class */}
        <div className="text-2xl font-bold text-[#090909] tracking-tight">
          ANSERU
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {["HOME", "FEATURES", "PRODUCT", "COMPANY", "PRICING"].map((item) => (
            <a
              key={item}
              href="#"
              // Using text-smalls (18px) per your system
              className="text-smalls text-[#090909] hover:opacity-70 uppercase"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block px-6 py-3.5 bg-black text-white rounded-full text-smalls">
            Book a Demo
          </button>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      <MobileMenu open={mobileMenuOpen} />
    </header>
  );
}