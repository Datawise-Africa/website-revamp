import React from "react";
import jobs from "/assets/jobs/cuate.png";
import whyus1 from "/assets/jobs/lucide_goal.png";
import whyus2 from "/assets/jobs/hugeicons_ai-magic.png";
import whyus3 from "/assets/jobs/fluent_people-community-24-regular.png";
import ourvalues1 from "/assets/jobs/Integrity.png";
import ourvalues2 from "/assets/jobs/Collaboration.png";
import ourvalues3 from "/assets/jobs/Innovation.png";

const Jobs = () => {
  return (
    <div className="pt-20 px-5 lg:px-15 xl:px-20 max-lg:py-4">
      <section className="pt-5 grid grid-cols-1 md:grid-cols-2 ">
        <div className="pt-15 md:pt-20 lg:pt-15 pl-8 max-w-[700px] lg:max-w-[800px]">
          <h1 className="lora-font font-bold text-[56px] leading-[100%] tracking-[-0.02em]">
            Shape Africa’s Future <br />
            <span className="text-[#26A37E]">Through Data</span>
          </h1>
          <p className="sora-font pt-6 pb-6 text-[#0F2542] font-normal text-[22px] leading-[167%] tracking-[-0.02em]">
            Join a passionate team leveraging data to drive impactful <br />
            decisions in health, education, and governance.
          </p>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#26A37E] text-white font-medium py-2 px-3 rounded-md hover:bg-[#1e8c68] transition duration-300"
          >
            View Open Positions
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
        <div className="md:pt-20 lg:pt-0 ">
          <img
            className="w-full max-w-[845px] lg:h-[400.69px] top-[135.38px]"
            src={jobs}
            alt="jobs"
          />
        </div>
      </section>
      <section className="w-screen bg-[#F7FDFA] pt-4 pb-15 relative left-1/2 -translate-x-1/2">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center justify-center">
            <h2 className="lora-font font-bold text-[40px] leading-[100%] tracking-[-0.02em] text-center">
              Why work with us?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 pt-5 gap-5">
            <div className="border border-[#B1E9D1] rounded-md bg-[#FFFFFF] p-3">
              <div className="">
                <img
                  src={whyus1}
                  alt="Group 1"
                  width={40}
                  height={40}
                  className=""
                />
              </div>
              <h3 className="lora-font font-bold text-[22px] leading-[100%] tracking-[-0.02em] pt-2 text-[#26A37E]">
                Impact-Driven Projects
              </h3>
              <p className="sora-font text-[#0F2542] pt-2 text-left">
                We focus on transformative data solutions tailored for Africa,
                allowing you to contribute meaningfully to the continent's
                growth and innovation.
              </p>
            </div>
            <div className="border border-[#B1E9D1] rounded-md bg-[#FFFFFF] p-3">
              <div className="">
                <img
                  src={whyus2}
                  alt="Group 2"
                  width={40}
                  height={40}
                  className=""
                />
              </div>
              <h3 className="lora-font font-bold text-[22px] leading-[100%] tracking-[-0.02em] pt-2 text-[#26A37E]">
                Commitment to Innovation
              </h3>
              <p className="sora-font text-[#0F2542] pt-2 text-left">
                We value creativity and innovation, providing you with a
                platform to tackle complex challenges and lead groundbreaking
                initiatives.
              </p>
            </div>
            <div className="border border-[#B1E9D1] rounded-md bg-[#FFFFFF] p-3">
              <div className="">
                <img
                  src={whyus3}
                  alt="Group 3"
                  width={40}
                  height={40}
                  className=""
                />
              </div>
              <h3 className="lora-font font-bold text-[22px] leading-[100%] tracking-[-0.02em] pt-2 text-[#26A37E]">
                Collaborative Growth
              </h3>
              <p className="sora-font text-[#0F2542] pt-2 text-left">
                We foster a collaborative environment, offering opportunities to
                work with experts across diverse fields and impactful projects.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-4 pb-15">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center justify-center">
            <h2 className="lora-font font-bold text-[40px] leading-[100%] tracking-[-0.02em] text-center">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 pt-5 gap-5">
            <div className="p-3">
              <div className="flex items-center justify-center">
                <img
                  src={ourvalues1}
                  alt="Group 1"
                  width={64}
                  height={64}
                  className=""
                />
              </div>
              <h3 className="sora-font font-bold text-[20px] leading-[150%] tracking-[-0.03em] text-center text-[#0F2542] pt-2">
                Integrity
              </h3>
              <p className="sora-font text-[#0F2542] pt-2 text-center">
                We prioritize ethical data practices and transparency
              </p>
            </div>
            <div className="p-3">
              <div className="flex items-center justify-center">
                <img
                  src={ourvalues2}
                  alt="Group 2"
                  width={64}
                  height={64}
                  className=""
                />
              </div>
              <h3 className="sora-font font-bold text-[20px] leading-[150%] tracking-[-0.03em] text-center text-[#0F2542] pt-2">
                Collaboration
              </h3>
              <p className="sora-font text-[#0F2542] pt-2 text-center">
                We believe in the power of teamwork and diverse perspectives
              </p>
            </div>
            <div className="p-3">
              <div className="flex items-center justify-center">
                <img
                  src={ourvalues3}
                  alt="Group 3"
                  width={40}
                  height={40}
                  className=""
                />
              </div>
              <h3 className="sora-font font-bold text-[20px] leading-[150%] tracking-[-0.03em] text-center text-[#0F2542] pt-2">
                Innovation
              </h3>
              <p className="sora-font text-[#0F2542] pt-2 text-center">
                We constantly push boundaries to find creative solutions
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen bg-[#F7FDFA] pt-4 pb-15 relative left-1/2 -translate-x-1/2">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center justify-center">
            <h2 className="lora-font font-bold text-[40px] leading-[100%] tracking-[-0.02em] text-center">
              Steps to Join Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 pt-5 gap-5">
            {["Apply Online", "Interviews", "Onboarding"].map((step, index) => (
              <div className="p-3" key={index}>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#26A37E] text-white flex items-center justify-center rounded-full text-[24px] font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="sora-font font-bold text-[20px] leading-[150%] tracking-[-0.03em] text-center text-[#0F2542] pt-2">
                  {step}
                </h3>
                <p className="sora-font text-[#0F2542] pt-2 text-center">
                  {index === 0
                    ? "Submit your resume and cover letter for the desired role."
                    : index === 1
                    ? "Showcase your expertise through discussions with our team."
                    : "Start your journey with a comprehensive onboarding program."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pt-4 pb-15">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center justify-center">
            <h2 className="lora-font font-bold text-[40px] leading-[100%] tracking-[-0.02em] text-center">
              Open Positions
            </h2>
          </div>
          <div className="">
            <p className="pt-4 text-center">No open positions yet</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
