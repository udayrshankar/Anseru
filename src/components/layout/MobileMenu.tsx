interface Props {
  open: boolean;
}

export default function MobileMenu({ open }: Props) {
  if (!open) return null;

  return (
    <div className="lg:hidden absolute top-24 left-4 right-4 bg-white/95 rounded-3xl shadow-2xl p-6 space-y-4">
      {["HOME", "PRODUCT", "FEATURES", "PRICING", "CASE STUDIES", "INVESTORS PITCH"].map((item) => (
        <a key={item} href="#" className="block font-semibold py-2">
          {item}
        </a>
      ))}
      <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
        <button className="w-full py-2 font-medium hover:opacity-70">
          Login
        </button>
        <button className="w-full px-6 py-3.5 bg-black text-white rounded-full">
          Start a free trial
        </button>
        <button className="w-full px-6 py-3.5 bg-white text-black border border-black/10 rounded-full">
          Talk to Founders
        </button>
      </div>
    </div>
  );
}
