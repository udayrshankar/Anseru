import Background from "../Background";
import HeroCards from "./HeroCards";
import SmartCTA from "../SmartCTA";

export default function HeroSection() {
  return (
    <section className="relative pt-4">
      <div className="relative mx-auto overflow-hidden">
        <div className="absolute inset-0 max-w-[1373px] mx-auto rounded-[50px] overflow-hidden">
          <Background />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center pt-50">
          {/* Main Title -> H1 */}
          <h1 className="max-w-6xl text-[#2A1638] mb-5">
            Win More Deals – Powered by Agentic AI for <br/>
            RFPs & Security Questionnaires
          </h1>

          {/* Subtitle -> Text Body */}
          <p className="text-body text-[#2A1638]/70 max-w-3xl mb-10">
            Agents autonomously research your approved knowledge base, provide contextually accurate, auditable responses governed by human-in-the loop workflows with evidence traceability for security, sales, and compliance teams.
          </p>

          <div className="mb-12">
            <SmartCTA />
          </div>

          <HeroCards />
        </div>
      </div>
    </section>
  );
}