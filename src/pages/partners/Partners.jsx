import React from "react";
import heroImage from "/assets/cuate.png";
import icon2 from "/assets/partner2.png";
import icon3 from "/assets/partners3.png";
import arrowIcon from "/assets/datalab7.png";
import icon1 from "/assets/partner1.png";
import PartnerForm from "./partnersform";

const partners = [
  { name: "Lacuna Fund", logo: "/assets/homepage/lacuna-fund-logo.png" },
  { name: "Eduonix", logo: "/assets/homepage/eduonix-logo.png" },
  { name: "Kaggle", logo: "/assets/homepage/Kaggle-logo.png" },
  { name: "Kodak", logo: "/assets/homepage/kodak-logo.png" },
];

const PartnersPage = () => {
  return (
    <div className="w-full flex flex-col items-center p-6 mt-4 space-y-16">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between bg-[#FFFFFF] px-6 md:px-16 py-10 rounded-2xl gap-6 md:gap-12 lg:gap-16">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Partner With Us to <span className="text-[#26A37E]">Drive Impact</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Together, we can harness the power of data and AI to shape Africa’s future.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="w-64px h-[41px] px-4 py-3 flex items-center gap-2 bg-[#26A37E] text-white font-medium rounded-lg">
              Become a Partner
              <img src={arrowIcon} alt="Arrow Icon" className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Partner With Us Hero"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="w-full max-w-[90%] text-center space-y-8 px-8">
        <h2 className="lora-font font-bold text-[40px] leading-[100%] tracking-[-0.02em] text-center text-[#0F2542]">
          Why Partner With Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full min-h-[200px] p-6 rounded-lg flex flex-col items-center text-center">
            <img src={icon1} alt="Access Exclusive Data" className="w-12 h-12" />
            <h4 className="text-lg font-semibold mt-4">Access Exclusive Data</h4>
            <p className="mt-4">
              Gain insights from high-quality datasets to drive innovation and decision-making.
            </p>
          </div>
          <div className="w-full min-h-[200px] p-6 rounded-lg flex flex-col items-center text-center">
            <img src={icon2} alt="Collaborate on AI Solutions" className="w-12 h-12" />
            <h4 className="text-lg font-semibold mt-4">Collaborate on AI Solutions</h4>
            <p className="mt-4">
              Work with leading experts to develop AI-driven solutions for real-world challenges.
            </p>
          </div>
          <div className="w-full min-h-[200px] p-6 rounded-lg flex flex-col items-center text-center">
            <img src={icon3} alt="Expand Your Reach" className="w-12 h-12" />
            <h4 className="text-lg font-semibold mt-4">Expand Your Reach</h4>
            <p className="mt-4">
              Connect with a growing network of innovators, researchers, and organizations.
            </p>
          </div>
        </div>
      </section>

       {/* Partners Section */}
       <section className="w-full max-w-7xl bg-[#F7FDFA] px-6 py-12 text-center">
        <h3 className="text-[#26A37E] text-sm font-bold tracking-widest uppercase" style={{ letterSpacing: "0.20em" }}>
          Our Partners
        </h3>
        <h1 className="text-3xl lora-font text-[#0F2542] mt-2">
          Collaborating for a Smarter Africa
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 justify-items-center">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={partner.name}
              className="h-20 max-w-[180px] object-contain"
            />
          ))}
        </div>
      </section>

      {/* Form Section */}
      <PartnerForm />
    </div>
  );
};

export default PartnersPage;
