import Background from "../Background";
import SmartCTA from "../SmartCTA";

const FeaturesHero = () => {
  return (
    <section className="relative w-full min-h-[65vh] flex flex-col overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {/* Rounded Background Container matching Home Hero */}
        <div className="absolute inset-0 max-w-[1400px] mx-auto rounded-[40px] overflow-hidden">
          <Background />
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 xl:px-[120px] pt-32 pb-20">
        <h1 className="max-w-5xl text-3xl md:text-5xl lg:text-[64px] leading-tight text-[#2A1638] mb-5">
          Deal Infrastructure<sup>&trade;</sup> for <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F5AF0] to-[#7038BA]">
            Enterprise Sales
          </span>
        </h1>

        <p className="text-base md:text-lg text-[#2A1638]/70 max-w-3xl mb-10">
          Anseru is designed as deal infrastructure, not just RFP automation. Every feature exists to improve speed, accuracy, collaboration, and auditability across enterprise sales workflows.
        </p>

        <div className="mb-12">
          <SmartCTA />
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;
