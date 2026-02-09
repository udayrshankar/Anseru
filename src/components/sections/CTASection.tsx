import SmartCTA from "../SmartCTA";

export default function CTASection() {
  return (
    <section className="py-0 px-6">
      <div className="max-w-[1400px] w-full mx-auto px-6">
        <div className="relative rounded-[48px] overflow-hidden bg-gradient-to-br from-[#7D23F7] via-[#E54763] to-[#FF3F49]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,194,255,0.35),_transparent_55%)]" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 min-h-[400px]">
            <h2 className="font-onest text-[45px] font-medium text-white mb-8 max-w-[971px] leading-tight drop-shadow-sm">
              One source of truth. One platform.<br/> AI agents for RFPs and Security Questionnaires.
            </h2>

            <SmartCTA />
          </div>
        </div>
      </div>
    </section>
  );
}
