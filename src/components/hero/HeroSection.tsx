import image from "../../assets/Group 59 (1).png";
import Background from "../Background";
import HeroCards from "./HeroCards";

export default function HeroSection() {
  return (
    <section className="relative pt-8 px-4">
      <div className="relative mx-auto overflow-hidden">
        <div className="absolute inset-0 max-w-[1373px] mx-auto rounded-[50px] overflow-hidden">
          <Background />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center pt-50">
          <h1 className="max-w-4xl text-[42px] font-semibold text-[#2A1638]">
            Win More Deals – Powered by AI for <br />
            RFPs, Security Reviews & Trust
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-[#2A1638]/70">
            Anseru automates research, drafting, compliance checks, and reviews.
          </p>

          <HeroCards />
        </div>
      </div>
    </section>
  );
}
