export default function CTASection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-[1380px] mx-auto">
        <div className="relative rounded-[48px] overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/27d25b53052a0bd356dd65cfb056aec879fdbca2?width=2758"
            alt="CTA Background"
            className="w-full h-[400px] object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="font-onest text-[45px] font-medium text-[#483953] mb-8 max-w-[971px] leading-tight">
              Fully automate any customer trust workflow with AI
            </h2>

            <div className="flex items-center gap-3 bg-white/80 rounded-[20px] p-[11px] h-[60px]">
              <div className="flex items-center gap-2 bg-white border border-[#EE00FF] rounded-[15px] px-6 h-[42px] shadow-[0_0_24px_4px_rgba(238,0,255,0.25)]">
                ✨
              </div>

              <button className="px-6 h-[42px] rounded-[15px] border border-[#989898] bg-transparent font-inter text-[15px] text-[#393939] hover:bg-white/50">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
