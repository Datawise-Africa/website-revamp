import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section className="pt-40 ml-40 mr-40   grid grid-cols-1 md:grid-cols-2 ">
        <div className=" mt-20 md:pt-20 lg:pt-15 pl-8 max-w-[700px] lg:max-w-[800px]">
          <h1 className="lora-font font-bold text-[56px] leading-[100%] tracking-[-0.02em]">
            Driving Impact Through
            <br />
            <span className="text-[#26A37E]">Data and Innovation</span>
          </h1>
          <p className="sora-font pt-6 pb-6 text-[#0F2542] font-normal text-[22px] leading-[167%] tracking-[-0.02em]">
            At Datawise Africa, we are committed to solving Africa’s most <br />{" "}
            pressing challenges by leveraging the power of data, AI, and
            infrastructure.
          </p>
        </div>
        <div className="md:pt-20 lg:pt-0 ml-40 mb-5 ">
          <img
            className="w-full max-w-[550px] lg:h-[490.69px] top-[135.38px]"
            src="/public/assets/aboutus/cuate.png"
            alt="about us image"
          />
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start  md:gap-12 p-8 bg-[#F7FDFA] h-56">
          <div className="w-full md:w-1/2 text-center mt-5 border-r md:border-gray-200">
            <h2 className="text-4xl font-bold text-gray-900 lora-font">
              Mission
            </h2>
            <p className="text-gray-600 mt-2 text-[22px] ">
              To empower African communities with data-driven solutions that are{" "}
              <br />
              ethical, inclusive, and transformative.
            </p>
          </div>

          <div className="w-full md:w-1/2 text-center mt-5">
            <h2 className="text-4xl font-bold text-gray-900 lora-font">
              Vision
            </h2>
            <p className="text-gray-600 mt-2 text-[22px]">
              To empower African communities with data-driven solutions that are{" "}
              <br />
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

          <div className="flex items-start gap-4 p-6 w-fit p-20 border border-[#26A37E] rounded-xl bg-[#F7FDFA] shadow-sm">
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
    </div>
  );
};

export default AboutUs;
