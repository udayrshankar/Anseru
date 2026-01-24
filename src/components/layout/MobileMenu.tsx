interface Props {
  open: boolean;
}

export default function MobileMenu({ open }: Props) {
  if (!open) return null;

  return (
    <div className="lg:hidden absolute top-24 left-4 right-4 bg-white/95 rounded-3xl shadow-2xl p-6 space-y-4">
      {["HOME", "FEATURES", "PRODUCT", "COMPANY", "PRICING"].map((item) => (
        <a key={item} href="#" className="block font-semibold py-2">
          {item}
        </a>
      ))}
      <button className="w-full mt-4 px-6 py-3.5 bg-black text-white rounded-full">
        Talk to Founders
      </button>
    </div>
  );
}
