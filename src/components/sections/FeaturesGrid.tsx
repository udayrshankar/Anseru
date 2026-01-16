import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  svg: React.ReactNode;
  minHeight?: string;
}

function FeatureCard({
  title,
  description,
  svg,
  minHeight = "min-h-[529px]",
}: FeatureCardProps) {
  return (
    <div
      className={`relative rounded-[22px] bg-gradient-to-br from-[#EBEBEB] to-[#FEE6FF] p-11 overflow-hidden ${minHeight} flex flex-col justify-end`}
    >
      {svg}

      <div className="space-y-4 relative z-10">
        <h3 className="font-onest text-4xl font-medium text-[#483953]">
          {title}
        </h3>
        <p className="font-onest text-2xl font-light text-[#483953]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function FeaturesGrid() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-[1205px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="font-onest text-lg text-black mb-2">
            Fast and Accurate
          </p>
          <h2 className="font-onest text-[42px] font-normal text-[#483953]">
            Your Edge in RFPs & Reviews.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Close Deals Faster */}
          <FeatureCard
            title="Close Deals Faster"
            description="Automate RFPs and security questionnaires to cut response times and accelerate your sales cycle."
            svg={
              <svg
                className="absolute top-12 left-48 w-52 h-52"
                viewBox="0 0 211 211"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M109.62 99.2827L109.548 99.8462H150.368L84.271 178.989L92.8071 120.518L92.8911 119.946H57.8823L117.936 33.3892L109.62 99.2827Z"
                  stroke="black"
                />
              </svg>
            }
          />

          {/* Build Instant Trust */}
          <FeatureCard
            title="Build Instant Trust"
            description="Deliver accurate, compliance-ready answers that boost buyer confidence and help you win more approvals."
            svg={
              <svg
                className="absolute top-12 left-48 w-52 h-52"
                viewBox="0 0 211 211"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M163.904 52.2169V97.588C163.904 117.12 158.331 134.601 147.185 150.045C136.066 165.451 122.172 175.768 105.499 181.023Z"
                  stroke="black"
                />
              </svg>
            }
          />

          {/* Accelerated Onboarding */}
          <FeatureCard
            title="Accelerated Onboarding"
            description="Cut training time in half by giving new team members ready-made, brand-aligned responses."
            minHeight="min-h-[497px]"
            svg={
              <svg
                className="absolute top-12 left-48 w-52 h-52"
                viewBox="0 0 211 211"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M109.62 99.2827L109.548 99.8462H150.368L84.271 178.989Z"
                  stroke="black"
                />
              </svg>
            }
          />

          {/* Smarter Support */}
          <FeatureCard
            title="Smarter Support"
            description="Delight customers with instant, accurate replies while your agents focus on what matters most."
            minHeight="min-h-[497px]"
            svg={
              <svg
                className="absolute top-12 left-48 w-52 h-52"
                viewBox="0 0 211 211"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M163.904 52.2168V97.5879C163.904 117.12 158.331 134.601 147.185 150.045Z"
                  stroke="black"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
