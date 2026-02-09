import { useState } from "react";
import logo from "../../assets/logo.png";
import MobileMenu from "./MobileMenu";
// import { NAVIGATION_ITEMS } from "../../constants/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-2 px-4">
      <nav className="w-full max-w-[1400px] min-h-[72px] rounded-full border border-white/20 bg-gradient-to-r from-[#1C32E6]/90 to-[#7D23F7]/90 backdrop-blur-[50px] shadow-lg flex items-center justify-between px-6 py-4">
  {/* Logo */}
        <a href="/" className="hover:opacity-80 transition-opacity overflow-hidden">
          <img src={logo} alt="Anseru" className="h-[35px] w-auto" />
        </a>

        {/* <div className="hidden lg:flex items-center gap-8">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="text-smalls font-medium text-[#090909] hover:opacity-70 uppercase tracking-wide"
            >
              {item.name}
            </a>
          ))}
        </div> */}

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-smalls font-medium text-white/90 hover:text-white px-4 transition-colors">
            LOGIN
          </button>
          <button className="hidden md:block px-5 py-2.5 bg-gradient-to-r from-[#1C32E6] to-[#7D23F7] text-white rounded-full text-smalls font-medium hover:brightness-110 transition-colors shadow-md">
            Talk to Founders
          </button>
         

          <button
            className="lg:hidden p-2 relative z-[101]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
