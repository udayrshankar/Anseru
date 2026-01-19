const cards = [
  {
    title: "Close Deals Faster",
    desc: "We answer most RFP and security questions automatically",
    path: "M109.62 99.2827L109.548 99.8462H150.368L84.271 178.989L92.8071 120.518L92.8911 119.946H57.8823L117.936 33.3892L109.62 99.2827ZM109.045 55.3228L68.3843 114.007L67.8403 114.792H98.769L92.2573 159.937L92.0054 161.683L93.1362 160.329L138.633 105.821L139.318 105H103.651L109.953 55.6704L109.045 55.3228Z"
  },
  {
    title: "Build Instant Trust",
    desc: "We accelerate deal velocity by 3×",
    path: "M163.904 52.2168V97.5879C163.904 117.12 158.331 134.601 147.185 150.045C136.066 165.451 122.172 175.768 105.499 181.022C88.8272 175.768 74.9338 165.451 63.8154 150.045C52.6692 134.601 47.0958 117.12 47.0957 97.5879V52.2168L105.5 30.4248L163.904 52.2168ZM137.321 87.0371L96.2686 128.091L73.6777 105.5L77.3662 101.811L96.2686 120.713L96.6221 120.359L133.633 83.3477L137.321 87.0371ZM158.75 55.6992L158.424 55.5781L105.674 36.0166L105.5 35.9521L105.326 36.0166L52.5762 55.5781L52.25 55.6992V97.5879C52.2501 115.418 57.2618 131.635 67.2832 146.225C77.3034 160.813 89.9929 170.558 105.349 175.431L105.5 175.479L105.651 175.431C121.007 170.558 133.696 160.813 143.716 146.225C153.737 131.635 158.75 115.418 158.75 97.5879V55.6992Z"
  },
  {
    title: "Accelerated Onboarding",
    desc: "We reclaim hours of manual work every day",
    path: "M109.62 99.2827L109.548 99.8462H150.368L84.271 178.989L92.8071 120.518L92.8911 119.946H57.8823L117.936 33.3892L109.62 99.2827ZM109.045 55.3228L68.3843 114.007L67.8403 114.792H98.769L92.2573 159.937L92.0054 161.683L93.1362 160.329L138.633 105.821L139.318 105H103.651L109.953 55.6704L109.045 55.3228Z"
  },
  {
    title: "Smarter Support",
    desc: "We ensure every response is accurate, consistent, and compliant",
    path: "M163.904 52.2168V97.5879C163.904 117.12 158.331 134.601 147.185 150.045C136.066 165.451 122.172 175.768 105.499 181.022C88.8272 175.768 74.9338 165.451 63.8154 150.045C52.6692 134.601 47.0958 117.12 47.0957 97.5879V52.2168L105.5 30.4248L163.904 52.2168ZM137.321 87.0371L96.2686 128.091L73.6777 105.5L77.3662 101.811L96.2686 120.713L96.6221 120.359L133.633 83.3477L137.321 87.0371ZM158.75 55.6992L158.424 55.5781L105.674 36.0166L105.5 35.9521L105.326 36.0166L52.5762 55.5781L52.25 55.6992V97.5879C52.2501 115.418 57.2618 131.635 67.2832 146.225C77.3034 160.813 89.9929 170.558 105.349 175.431L105.5 175.479L105.651 175.431C121.007 170.558 133.696 160.813 143.716 146.225C153.737 131.635 158.75 115.418 158.75 97.5879V55.6992Z"
  }
];

const WhyAnseru = () => {
    return (
      <div className="bg-white">
        <section className="py-0 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="mb-16 text-center max-w-2xl mx-auto">
              <p className="text-sm text-[#2A1638]/60 mb-3 uppercase tracking-widest font-medium">
                Proven Results
              </p>
              <h2 className="text-[#2A1638] text-4xl md:text-5xl font-medium tracking-tight mb-4">
                Why Anseru?
              </h2>
              <p className="text-lg text-[#483953]/70">
                Transform your RPF and security workflows with agentic AI that delivers speed, accuracy, and trust at scale.
              </p>
            </div>
  
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[400px]">
              {/* Card 1: Large (Span 2) */}
              <div className="relative group md:col-span-2 min-h-[400px] rounded-[32px] bg-[#F6F6F8] p-10 overflow-hidden flex flex-col justify-between border border-black/[0.03] hover:shadow-lg transition-shadow duration-300">
                 <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 scale-150 origin-top-right">
                    <svg className="w-64 h-64 rotate-12" viewBox="0 0 211 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={cards[0].path} stroke="currentColor" className="text-[#2A1638]" strokeWidth="2" />
                    </svg>
                 </div>
                 <div className="relative z-10 w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-[#2A1638]" viewBox="0 0 211 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={cards[0].path} fill="currentColor" />
                    </svg>
                 </div>
                 <div className="max-w-md">
                    <h3 className="text-[#2A1638] text-3xl font-medium mb-3 leading-tight">{cards[0].title}</h3>
                    <p className="text-[#2A1638]/80 text-lg leading-relaxed">{cards[0].desc}</p>
                 </div>
              </div>

              {/* Card 2: Regular (Span 1) */}
              <div className="relative group md:col-span-1 min-h-[400px] rounded-[32px] bg-[#F6F6F8] p-8 overflow-hidden flex flex-col justify-between border border-black/[0.03] hover:shadow-lg transition-shadow duration-300">
                 <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 scale-125">
                    <svg className="w-48 h-48 -rotate-12" viewBox="0 0 211 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={cards[1].path} stroke="currentColor" className="text-[#2A1638]" strokeWidth="2" />
                    </svg>
                 </div>
                 <div className="relative z-10 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-[#2A1638]" viewBox="0 0 211 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={cards[1].path} fill="currentColor" />
                    </svg>
                 </div>
                  <div>
                    <h3 className="text-[#2A1638] text-2xl font-medium mb-3 leading-tight">{cards[1].title}</h3>
                    <p className="text-[#2A1638]/80 text-base leading-relaxed">{cards[1].desc}</p>
                 </div>
              </div>

               {/* Card 3: Regular (Span 1) */}
               <div className="relative group md:col-span-1 min-h-[400px] rounded-[32px] bg-[#F6F6F8] p-8 overflow-hidden flex flex-col justify-between border border-black/[0.03] hover:shadow-lg transition-shadow duration-300">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 scale-150">
                    <svg className="w-56 h-56" viewBox="0 0 211 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={cards[2].path} stroke="currentColor" className="text-[#2A1638]" strokeWidth="2" />
                    </svg>
                 </div>
                 <div className="relative z-10 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-[#2A1638]" viewBox="0 0 211 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={cards[2].path} fill="currentColor" />
                    </svg>
                 </div>
                  <div>
                    <h3 className="text-[#2A1638] text-2xl font-medium mb-3 leading-tight">{cards[2].title}</h3>
                    <p className="text-[#2A1638]/80 text-base leading-relaxed">{cards[2].desc}</p>
                 </div>
              </div>

              {/* Card 4: Large (Span 2) */}
              <div className="relative group md:col-span-2 min-h-[400px] rounded-[32px] bg-[#F6F6F8] p-10 overflow-hidden flex flex-col justify-between border border-black/[0.03] hover:shadow-lg transition-shadow duration-300">
                 <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 scale-150 origin-top-right">
                    <svg className="w-64 h-64 rotate-12" viewBox="0 0 211 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={cards[3].path} stroke="currentColor" className="text-[#2A1638]" strokeWidth="2" />
                    </svg>
                 </div>
                 <div className="relative z-10 w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-[#2A1638]" viewBox="0 0 211 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={cards[3].path} fill="currentColor" />
                    </svg>
                 </div>
                 <div className="max-w-md">
                    <h3 className="text-[#2A1638] text-3xl font-medium mb-3 leading-tight">{cards[3].title}</h3>
                    <p className="text-[#2A1638]/80 text-lg leading-relaxed">{cards[3].desc}</p>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

export default WhyAnseru;