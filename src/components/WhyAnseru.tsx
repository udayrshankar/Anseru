import React from 'react';

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
    <div>
      {/* Inject custom keyframe for scrolling */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        `}
      </style>

      <section className="py-16 relative overflow-hidden group">
        {/* Fade gradients on sides */}
        <div className="absolute left-0 top-0 w-[100px] md:w-[180px] h-full bg-gradient-to-r from-[#F6F6F8] to-transparent pointer-events-none z-20"></div>
        <div className="absolute right-0 top-0 w-[100px] md:w-[180px] h-full bg-gradient-to-l from-[#F6F6F8] to-transparent pointer-events-none z-20"></div>

        <div className="max-w-[1440px] mx-auto px-4 relative z-10">
          <div className="mb-12 ml-4 md:ml-8">
            <p className="font-onest text-lg text-black mb-2">
              Fast and Accurate
            </p>
            <h2 className="font-onest text-[42px] font-normal text-[#483953]">
              Why Anseru
            </h2>
          </div>

          {/* Infinite Scroll Container */}
          <div className="flex overflow-hidden">
            <div className="flex gap-6 w-max animate-scroll group-hover:[animation-play-state:paused]">
              {/* Render cards twice to create seamless loop */}
              {[...cards, ...cards].map((card, index) => (
                <div
                  key={index}
                  className="relative rounded-[22px] bg-gradient-to-br from-[#EBEBEB] to-[#FEE6FF] p-11 overflow-hidden min-w-[350px] md:min-w-[590px] min-h-[529px] flex flex-col justify-end flex-shrink-0"
                >
                  <svg
                    className="absolute top-12 left-48 w-52 h-52"
                    viewBox="0 0 211 211"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={card.path}
                      stroke="black"
                    />
                  </svg>
                  <div className="space-y-4 relative z-10">
                    <h3 className="font-onest text-3xl md:text-4xl font-medium text-[#483953]">
                      {card.title}
                    </h3>
                    <p className="font-onest text-xl md:text-2xl font-light text-[#483953]">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyAnseru;