import Footer from "../layout/Footer";

export default function Slide5() {
  return (
    <section className="h-screen flex flex-col overflow-y-auto bg-white pt-24">
       <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 min-h-[600px]">
         <div className="max-w-4xl text-center space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold font-onest tracking-tight">Join the Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We are raising our Seed Round to accelerate agent development and expand our pilot program.
            </p>
            <div className="pt-8">
                <button className="px-10 py-5 bg-black text-white rounded-full text-xl font-medium hover:scale-105 transition-transform">
                    Contact Sourcing Team
                </button>
            </div>
         </div>
       </div>
       {/* Footer included in the last slide so it's accessible at the end of the scroll */}
       <Footer />
    </section>
  );
}
