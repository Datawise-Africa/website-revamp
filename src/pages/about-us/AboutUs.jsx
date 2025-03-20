import React from "react";
import Team from "../../components/Team";

const AboutUs = () => {
  return (
    <div className="container mx-auto w-full flex flex-col items-center p-6 space-y-4">
      <section className="pt-20  mr-5  grid grid-cols-1 md:grid-cols-2 ">
        <div className=" mt-20 md:pt-20 lg:pt-15 pl-8 max-w-[700px] lg:max-w-[800px]">
          <h1 className="lora-font font-bold text-[56px] leading-[100%] tracking-[-0.02em]">
            Driving Impact Through
            <br />
            <span className="text-[#26A37E]">Data and Innovation</span>
          </h1>
          <p className="sora-font pt-6 pb-6 text-[#0F2542] font-normal text-[22px] leading-[167%] tracking-[-0.02em]">
            At Datawise Africa, we are committed to solving Africa’s most
            pressing challenges by leveraging the power of data, AI, and
            infrastructure.
          </p>
        </div>
        <div className="md:pt-20 lg:pt-0 ml-40 mb-5 ">
          <img
            className="w-full max-w-[540px] lg:h-[520px] top-[150.38px]"
            src="/public/assets/aboutus/aboutus.svg"
            alt="about us image"
          />
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start  md:gap-12 p-8 bg-[#F7FDFA] h-56 pt-2">
          <div className="w-full md:w-1/2 text-center mt-5 border-r md:border-gray-200">
            <h2 className="text-4xl font-bold text-gray-900 lora-font">
              Mission
            </h2>
            <p className="text-gray-600 mt-2 text-[22px] ">
              To empower African communities with data-driven solutions that are
              ethical, inclusive, and transformative.
            </p>
          </div>

          <div className="w-full md:w-1/2 text-center mt-5">
            <h2 className="text-4xl font-bold text-gray-900 lora-font">
              Vision
            </h2>
            <p className="text-gray-600 mt-2 text-[22px]">
              To empower African communities with data-driven solutions that are
              ethical, inclusive, and transformative.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2 className="lora-font text-4xl text-center mt-10 ">
            Our Approach
          </h2>
          <p className=" text-[22px] text-center mt-5 mb-10 text-gray-600">
            Guided by Community,Powered By Data,
            <br />
            and Driven By Innovation
          </p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-18 mb-20 ">
          <div className="flex items-start gap-4 w-full  p-20 border border-[#26A37E] rounded-xl bg-[#F7FDFA] shadow-sm">
            <div>
              <svg
                className="w-8 h-8 text-[#26A37E]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6v12c0 1.1 1.79 2 4 2s4-.9 4-2V6M4 10c0 1.1 1.79 2 4 2s4-.9 4-2M4 14c0 1.1 1.79 2 4 2s4-.9 4-2"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl  lora-font text-[#26A37E]">
                Data-Informed
              </h3>
              <p className="text-gray-600 mt-2 text-[20px]">
                We prioritize high-quality, ethical data collection and analysis
                to drive decision-making.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4  w-fit p-20 mr-10  border border-[#26A37E] rounded-xl bg-[#F7FDFA] shadow-sm">
            <div>
              <svg
                className="w-8 h-8 text-[#26A37E]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 12h.01M15 12h.01M12 15h.01M12 9h.01M19.42 5.42A10 10 0 014.58 19.42a10 10 0 0114.84-14.84z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl lora-font text-[#26A37E]">AI-Powered</h3>
              <p className="text-gray-600 mt-2 text-[20px]">
                We develop AI models that are tailored to Africa’s unique
                challenges and opportunities.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 w-fit border border-[#26A37E] rounded-xl bg-[#F7FDFA] shadow-sm">
            <div>
              <svg
                className="w-8 h-8 text-[#26A37E]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl lora-font text-[#26A37E]">
                Future-Focused
              </h3>
              <p className="text-gray-600 mt-2 text-[20px]">
                We are building the digital backbone for a data-wise Africa,
                from infrastructure to innovation.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-16 w-fit mr-10  border border-[#26A37E] rounded-xl bg-[#F7FDFA] shadow-sm">
            <div>
              <svg
                className="w-8 h-8 text-[#26A37E]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3l14 9-14 9V3z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl lora-font  text-[#26A37E]">
                Community-Led
              </h3>
              <p className="text-gray-600 mt-2 text-[20px]">
                We listen to local communities to ensure our solutions address
                real needs and create meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Team />

      <div className="mt-8 mb-20 bg-[#26A37E] text-white  md:p-6 w-[1100px] h-[450px] mx-auto md:flex md:items-center rounded-2xl">
        <div className="md:w-1/2 ml-14 ">
          <h3 className="text-4xl font-bold lora-font text-left ">
            Want to be part <br /> of our mission ?
          </h3>

          <p className="mt-4 text-base text-[18px] font-extralight leading-relaxed tracking-wide text-left">
            We're always looking for talented <br /> individuals to join our
            team
          </p>
          <p>
            <a
              href=""
              className="mt-4  text-[14px] text-left  leading-relaxed  tracking-wide text-white hover:underline flex items-center"
            >
              View Open Roles <span className="ml-2">→</span>
            </a>
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
          <img
            src="/assets/aboutus/ctajoin.svg"
            alt="Collaboration"
            className="w-full max-w-2xl mt-5 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
