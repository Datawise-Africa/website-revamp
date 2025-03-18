import React from "react";
import image1 from "/assets/amico.png";
import image2 from "/assets/AI.jpeg"; 
import image3 from "/assets/infrastructure.jpg";

const WhatWeDo = () => {
  return (
    <div className="max-w-6xl mx-auto w-full px-4 py-8   text-[#0F2542] "style={{ fontFamily: 'Sora, sans-serif' }}>
      {/* Small Heading */}
      <h3 className="text-lg font-semibold text-[#26A37E] text-center uppercase tracking-wide">
        WHAT WE DO
      </h3>

      {/* Big Heading */}
      <h2 className="text-3xl text-[#0F2542] font-bold text-center mt-1">
        Solving Real Problems With Data and AI
      </h2>

      {/* Description */}
      <p className="text-lg text-[#0F2542] text-center max-w-3xl mx-auto mt-2">
        We conduct research in several thematic areas and emerging technologies.
      </p>

      {/* First Section - Data */}
      <div className="flex flex-col lg:flex-row items-center gap-4 mt-6 bg-[#FDF9ED] p-4">
        <img
          src={image1}
          alt="Data"
          className="flex-1 w-full h-auto object-cover rounded-lg shadow-md"
        />
        <div className="flex-1 text-center lg:text-left">
          <h4 className="text-xl text-[#DD8823] font-semibold">Data</h4>
          <p className="text-base text-[#0F2542] mt-1">
            We’re building Africa’s largest ethical dataset repository. From languages to agriculture and healthcare, our data powers solutions for real-world challenges.
          </p>
        </div>
      </div>

      {/* Second Section - AI */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-4 mt-6 bg-[#EDFCFE] p-4">
        <img
          src={image2}
          alt="Artificial Intelligence"
          className="flex-1 w-full h-auto object-cover rounded-lg shadow-md"
        />
        <div className="flex-1 text-center lg:text-left">
          <h4 className="text-xl text-[#129FC8] font-semibold">Artificial Intelligence</h4>
          <p className="text-base text-[#0F2542] mt-1">
            We create AI models designed for African communities. Think recommender systems, computer vision, and language models that solve specific, local problems.
          </p>
        </div>
      </div>

      {/* Third Section - Infrastructure */}
      <div className="flex flex-col lg:flex-row items-center gap-4 mt-6 bg-[#FDF2F7] p-4">
        <img
          src={image3}
          alt="Infrastructure"
          className="flex-1 w-full h-auto object-cover rounded-lg shadow-md"
        />
        <div className="flex-1 text-center lg:text-left">
          <h4 className="text-xl text-[#EE3481] font-semibold">Infrastructure</h4>
          <p className="text-base text-[#0F2542] mt-1">
            We’re researching sustainable and affordable compute systems. Partnering with hardware vendors, we prototype the infrastructure Africa needs to thrive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
