import SmartCTA from "../SmartCTA";
import GlassGridBackground from "../layout/GlassGridBackground"
export default function CTASection() {
  return (
    <section className="py-0 px-6">
      <div className="mx-14 w-full mx-auto px-6 ">
        <div className="relative rounded-[48px] overflow-hidden">
          <GlassGridBackground />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="font-onest text-[45px] font-medium text-[#2A1638] mb-8 max-w-[971px] leading-tight">
              One source of truth. One platform.<br/> AI agents for RFPs and Security Questionnaires.
            </h2>

            <SmartCTA />
          </div>
        </div>
      </div>
    </section>
  );
}
