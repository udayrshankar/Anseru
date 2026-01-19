import image from "../../assets/bg2.png"
import SmartCTA from "../SmartCTA";

export default function CTASection() {
  return (
    <section className="py-0 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative rounded-[48px] overflow-hidden">
          <img
            src={image}
            alt="CTA Background"
            className="w-full h-[400px] object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="font-onest text-[45px] font-medium text-[#2A1638] mb-8 max-w-[971px] leading-tight">
              Fully automate any customer trust workflow with AI
            </h2>

            <SmartCTA />
          </div>
        </div>
      </div>
    </section>
  );
}
