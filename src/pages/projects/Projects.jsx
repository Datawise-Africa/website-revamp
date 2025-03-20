import React from "react";
import vector1 from "/assets/projects/Vector1.png";
import vector2 from "/assets/projects/Vector2.png";
import vector3 from "/assets/projects/Vector3.png";

const Projects = () => {
  return (
    <div className="container mx-auto pt-20 px-5 lg:px-15 xl:px-20 max-lg:py-4">
      <section className="pt-5 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-15 md:pt-20 lg:pt-15 pl-8 max-w-[700px] lg:max-w-[800px]">
          <h1 className="lora-font font-bold text-[56px] leading-[100%] tracking-[-0.02em]">
            Driving Change <br /> Through
            <span className="text-[#26A37E]"> Data Research</span>
          </h1>
          <p className="sora-font pt-6 pb-6 text-[#0F2542] font-normal text-[22px] leading-[167%] tracking-[-0.02em]">
            Our research initiatives focus on solving Africa’s most pressing
            challenges, from climate resilience to economic development
          </p>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#26A37E] text-white font-medium py-2 px-3 rounded-md hover:bg-[#1e8c68] transition duration-300"
          >
            Collaborate With Us
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </section>
      <section className="pt-4 pb-15">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center justify-center">
            <h2 className="lora-font font-bold text-[40px] leading-[100%] tracking-[-0.02em] text-center">
              Focus Areas
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 pt-5 gap-6">
            <div className="p-3 border border-[#AAE9F7] bg-[#AAE9F7] rounded-md">
              <div className="">
                <img
                  src={vector1}
                  alt="Group 1"
                  width={64}
                  height={64}
                  className=""
                />
              </div>
              <h3 className="sora-font font-bold text-[20px] leading-[150%] tracking-[-0.03em] text-left text-[#0F2542] pt-2">
                AI for Development
              </h3>
              <p className="sora-font text-[#0F2542] pt-2 text-left">
                Leveraging AI to address social and economic challenges
              </p>
            </div>
            <div className="p-3 border border-[#FCCEE4] bg-[#FCCEE4] rounded-md">
              <div className="">
                <img
                  src={vector2}
                  alt="Group 2"
                  width={64}
                  height={64}
                  className=""
                />
              </div>
              <h3 className="sora-font font-bold text-[20px] leading-[150%] tracking-[-0.03em] text-left text-[#0F2542] pt-2">
                Data Infrastructure
              </h3>
              <p className="sora-font text-[#0F2542] pt-2 text-left">
                Building sustainable and affordable compute solutions
              </p>
            </div>
            <div className="p-3 border border-[#B1E9D1] bg-[#B1E9D1] rounded-md">
              <div className="">
                <img
                  src={vector3}
                  alt="Group 3"
                  width={40}
                  height={40}
                  className=""
                />
              </div>
              <h3 className="sora-font font-bold text-[20px] leading-[150%] tracking-[-0.03em] text-left text-[#0F2542] pt-2">
                Ethical Data Practices
              </h3>
              <p className="sora-font text-[#0F2542] pt-2 text-left">
                Ensuring data collection and usage are transparent and ethical
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-4 pb-15">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center justify-center">
            <h2 className="lora-font font-bold text-[40px] leading-[100%] tracking-[-0.02em] text-center">
              Featured Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 pt-5 gap-6">
            <div className="p-3 border border-[#AAE9F7] rounded-md">
              <div className="">
                <img
                  src={vector2}
                  alt="Group 1"
                  width={64}
                  height={64}
                  className=""
                />
              </div>
              <h3 className="sora-font font-bold text-[20px] leading-[150%] tracking-[-0.03em] text-left text-[#0F2542] pt-2">
                AI for Healthcare Access
              </h3>
              <p className="sora-font text-[#0F2542] pt-2 text-left">
                Improved diagnostic accuracy and reduced costs for rural clinics
              </p>
            </div>
            <div className="p-3 border border-[#AAE9F7] rounded-md">
              <div className="">
                <img
                  src={vector2}
                  alt="Group 2"
                  width={64}
                  height={64}
                  className=""
                />
              </div>
              <h3 className="sora-font font-bold text-[20px] leading-[150%] tracking-[-0.03em] text-left text-[#0F2542] pt-2">
                AI for Healthcare Access
              </h3>
              <p className="sora-font text-[#0F2542] pt-2 text-left">
                Improved diagnostic accuracy and reduced costs for rural clinics
              </p>
            </div>
            <div className="p-3 border border-[#B1E9D1] rounded-md">
              <div className="">
                <img
                  src={vector2}
                  alt="Group 3"
                  width={40}
                  height={40}
                  className=""
                />
              </div>
              <h3 className="sora-font font-bold text-[20px] leading-[150%] tracking-[-0.03em] text-left text-[#0F2542] pt-2">
                AI for Healthcare Access
              </h3>
              <p className="sora-font text-[#0F2542] pt-2 text-left">
                Improved diagnostic accuracy and reduced costs for rural clinics
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
