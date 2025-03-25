import React from "react";
import Team from "../../components/Team";
import ourvalues1 from "/assets/jobs/Integrity.png";
import ourvalues2 from "/assets/jobs/Collaboration.png";
import ourvalues3 from "/assets/jobs/Innovation.png";

const AboutUs = () => {
  return (
    <div className="container mx-auto w-full flex flex-col items-center p-6 space-y-8">
      
      {/* Hero Section */}
      <section className="pt-16 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="px-6 md:px-0 text-center md:text-left">
          <h1 className="lora-font font-bold mt-10 lg:mt-0 text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight">
            Driving Impact Through
            <br />
            <span className="text-[#26A37E]">Data and Innovation</span>
          </h1>
          <p className="sora-font pt-6 text-gray-800 text-lg sm:text-xl leading-relaxed">
            At Datawise Africa, we are committed to solving Africa’s most
            pressing challenges by leveraging the power of data, AI, and
            infrastructure.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"

            src="/assets/aboutus/aboutus.svg"
            alt="About Us"
          />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full bg-[#F7FDFA] px-6 py-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="border-b md:border-b-0 md:border-r border-gray-300 pb-6 md:pb-0">
            <h2 className="text-3xl font-bold text-gray-900">Mission</h2>
            <p className="text-gray-700 mt-3 text-lg leading-relaxed">
              To create data and AI systems that people trust and use to build
              their world.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
            <p className="text-gray-700 mt-3 text-lg leading-relaxed">
              To build the tools and systems that help us shape the future we
              believe in.
            </p>

          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full text-center">
        <h2 className="lora-font font-bold text-3xl sm:text-4xl">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {[ourvalues1, ourvalues2, ourvalues3].map((value, index) => (
            <div key={index} className="p-4">
              <div className="flex justify-center">
                <img src={value} alt="Value Icon" width={64} height={64} />
              </div>
              <h3 className="sora-font font-bold text-lg sm:text-xl mt-3 text-gray-900">
                {index === 0 ? "Integrity" : index === 1 ? "Collaboration" : "Innovation"}
              </h3>
              <p className="sora-font text-gray-700 mt-2 text-base">
                {index === 0
                  ? "We prioritize ethical data practices and transparency."
                  : index === 1
                  ? "We believe in the power of teamwork and diverse perspectives."
                  : "We constantly push boundaries to find creative solutions."}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* CTA Section */}
      <div className="bg-[#26A37E] text-white p-8 rounded-2xl w-full mx-auto text-center md:text-left md:flex md:items-center">
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold">Want to be part of our mission?</h3>
          <p className="mt-4 text-lg font-light">
            We're always looking for talented individuals to join our team.
          </p>
          <a
            href="/jobs"
            className="mt-4 inline-flex items-center text-lg hover:underline"
          >
            View Open Roles <span className="ml-2">→</span>
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="/assets/aboutus/ctajoin.svg"
            alt="Collaboration"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
