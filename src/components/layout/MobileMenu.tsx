// import { NAVIGATION_ITEMS } from "../../constants/navigation";
import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open }: Props) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex flex-col pt-24 px-6 animate-in fade-in duration-200">
      {/* <nav className="flex flex-col gap-6">
        {NAVIGATION_ITEMS.map((item) => (
          <a 
            key={item.name} 
            href={item.path} 
            className="text-2xl font-bold text-[#090909] tracking-tight hover:text-black/70 transition-colors"
            onClick={onClose}
          >
            {item.name}
          </a>
        ))}
      </nav> */}

      <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-black/5">
        <button className="w-full py-4 text-lg font-medium hover:opacity-70 text-left">
          Login
        </button>
        <button className="w-full px-6 py-4 bg-black text-white rounded-full font-medium text-lg">
          Start a free trial
        </button>
        <button className="w-full px-6 py-4 bg-white text-black border border-black/10 rounded-full font-medium text-lg">
          Talk to Founders
        </button>
      </div>
    </div>
  );
}
