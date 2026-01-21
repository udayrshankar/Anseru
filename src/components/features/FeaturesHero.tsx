import Background from "../Background";
import SmartCTA from "../SmartCTA";

const FeaturesHero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {/* Rounded Background Container matching Home Hero */}
        <div className="absolute inset-0 max-w-[1400px] mx-auto rounded-[40px] overflow-hidden">
          <Background />
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 xl:px-[120px] pt-20">
        {/* Main Title - Styled like HeroSection */}
        <h1 className="max-w-6xl text-3xl md:text-5xl lg:text-[64px] leading-tight text-[#2A1638] mb-5">
          Fully automate any customer <br className="hidden md:block"/>
          trust workflow with AI
        </h1>

        {/* Subtitle - Styled like HeroSection */}
        <p className="text-base md:text-body text-[#2A1638]/70 max-w-3xl mb-10">
          Seamlessly compliance-check outgoing communications, answer security questionnaires, and accelerate deal cycles.
        </p>

        {/* Smart CTA */}
        <div className="mb-12">
          <SmartCTA />
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;
