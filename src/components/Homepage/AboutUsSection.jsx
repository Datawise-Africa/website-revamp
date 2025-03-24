import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full bg-[#F7FDFA] py-12">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h3 className="text-lg font-semibold text-[#26A37E] uppercase tracking-wide mb-2">
          ABOUT US
        </h3>
        <h1 className="text-3xl font-bold lora-font text-[#0F2542] mb-4">
          Driving Africa's Data and AI Revolution
        </h1>
        <p className="text-[#0F2542] text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
          At Datawise Africa, research is at our core. We explore the
          intersections of data, AI, and infrastructure, building solutions
          tailored for Africa’s needs but with a global perspective.
        </p>
        <a
          href="/about-us"
          className="text-md font-semibold text-[#26A37E] tracking-normal hover:underline"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
