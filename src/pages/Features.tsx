
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HowItWorks from "../components/sections/HowItWorks";
import FeaturesHero from "../components/features/FeaturesHero";
import CoreFeatures from "../components/features/CoreFeatures";
import image from "../assets/bg2.png"
import SmartCTA from "../components/SmartCTA";


const Features = () => {
  return (
    <div className="bg-white w-full -z-5">
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
        <div className="relative rounded-[48px] overflow-hidden">
          <img
            src={image}
            alt="CTA Background"
            className="w-full h-[400px] object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="font-onest text-3xl md:text-[45px] font-medium text-[#2A1638] mb-8 max-w-[971px] leading-tight">
              Outcome-Driven Automation
            </h2>
            <p className="font-onest text-[20px] font-medium text-[#2A1638] mb-8 max-w-[971px] leading-tight">
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
