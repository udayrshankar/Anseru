
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HowItWorks from "../components/sections/HowItWorks";
import FeaturesHero from "../components/features/FeaturesHero";
import CoreFeatures from "../components/features/CoreFeatures";
import SmartCTA from "../components/SmartCTA";


const Features = () => {
  return (
    <div className="bg-gradient-to-b from-white via-[#F7F8FF] to-white w-full -z-5">
      <Header />
      
      <main className="flex flex-col gap-20">
        <FeaturesHero />
        <HowItWorks />
        <CoreFeatures />
        <ClosingSection />
      </main>

      <Footer />
    </div>
  );
};



const ClosingSection = () => {




  return (
    <section className="py-0 px-6">
      <div className="max-w-[1400px] w-full mx-auto px-6">
        <div className="relative rounded-[48px] overflow-hidden bg-gradient-to-br from-[#7D23F7] via-[#E54763] to-[#FF3F49]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,194,255,0.35),_transparent_55%)]" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 min-h-[400px]">
            <h2 className="font-onest text-3xl md:text-[45px] font-medium text-white mb-8 max-w-[971px] leading-tight drop-shadow-sm">
              Outcome-Driven Automation
            </h2>
            <p className="font-onest text-[20px] font-medium text-white/85 mb-8 max-w-[971px] leading-tight">
              Anseru doesn't just automate responses—it builds deal intelligence that compounds.
            </p>

            <SmartCTA />
          </div>
        </div>
      </div>
    </section>
  );
}


export default Features;
