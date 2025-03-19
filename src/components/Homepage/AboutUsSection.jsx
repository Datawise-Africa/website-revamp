import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full bg-[#F7FDFA] flex justify-center items-center py-6">
      <div
        className="w-full bg-[#F7FDFA] p-6  text-left lg:text-center font-sans px-4 lg:px-12"
        style={{ fontFamily: "Sora, sans-serif" }}
      >
        <h3 className="text-lg font-semibold text-[#26A37E] text-center uppercase tracking-wide mb-2 ">
          ABOUT US
        </h3>
        <h1 className="text-3xl font-bold lora-font text-[#0F2542] mb-4">
          Driving Africa's Data and AI Revolution
        </h1>
        <p className="text-[#0F2542] text-lg leading-relaxed mb-4">
          At Datawise Africa, research is at our core. We explore the
          intersections of data, AI, and infrastructure, building solutions
          tailored for Africa’s needs but with a global perspective.
        </p>

        <a
          href="#"
          className="text-md font-semibold text-[#26A37E] text-center tracking-normal mb-2 "
        >
          Learn More →
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
