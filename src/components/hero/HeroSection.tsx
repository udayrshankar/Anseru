import Background from "../Background";
import HeroCards from "./HeroCards";
import SmartCTA from "../SmartCTA";

interface HeroSectionProps {
  activeIndex: number;
  onIndexChange: (index: number) => void;
  isPaused: boolean;
}

export default function HeroSection({ activeIndex, onIndexChange, isPaused }: HeroSectionProps) {
  return (
    <section className="relative pt-4 pb-12 w-full overflow-hidden">
      <div className="relative mx-auto w-full">
        <div className="absolute inset-0 max-w-[1400px] mx-auto rounded-[40px] overflow-hidden">
          <Background />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center pt-32 md:pt-50 overflow-hidden px-6 xl:px-[120px]">
          {/* Main Title -> H1 */}
          <h1 className="max-w-6xl text-3xl md:text-5xl lg:text-[64px] leading-tight text-[#2A1638] mb-5">
            Win deals faster with AI agents for <br/>
            RFPs and security questionnaires
          </h1>

          {/* Subtitle -> Text Body */}
          <p className="text-base md:text-body text-[#2A1638]/70 max-w-3xl mb-10">
            AI agents that draft accurate, context-aware responses grounded in your knowledge base. <br/>
            Automate the grunt work, keep humans in loop, and close deals faster without compromising trust.
          </p>

          <div className="mb-8  ">
            <SmartCTA />
          </div>

          <div className="-translate-y-5">
            <HeroCards activeIndex={activeIndex} onIndexChange={onIndexChange} isPaused={isPaused} />
          </div>
        </div>
      </div>
    </section>
  );
}