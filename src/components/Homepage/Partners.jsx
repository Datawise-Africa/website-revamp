import React from "react";

const partners = [
  { name: "Lacuna Fund", logo: "/assets/homepage/lacuna-fund-logo.png" },
  { name: "e", logo: "/assets/homepage/eduonix-logo.png" },
  { name: "Kaggle", logo: "/assets/homepage/Kaggle-logo.png" },
  { name: "Kodak", logo: "/assets/homepage/kodak-logo.png" },
];

const Partners = () => {
  return (
    <div className="container bg-white py-12 text-center">
        <div className="bg-[#F7FDFA] w-screen py-12 text-center">
    <h3 className="text-[#26A37E] text-sm font- tracking-widest uppercase" style={{ letterSpacing: "0.20em" }}>
        Our Partners
      </h3>
      <h1 className="text-3xl lora-font text-gray-900 mt-2">
        Collaborating for a Smarter Africa
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-34 mt-8">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner.logo}
            alt={partner.name}
            className="h-40 md:h-20 max-w-[150px] object-contain"
          />
        ))}
      </div>
      </div>

      
      <div className="mt-8 ml-54 bg-[#26A37E] text-white  md:p-6 w-[1510px] h-[500px] mx-auto md:flex md:items-center rounded-2xl items-center justify-center ">

        <div className="md:w-1/2 ml-14 ">
          <h3 className="text-[40px] font-bold lora-font text-left ">Partner With Us</h3>

          <p className="mt-2 font-extralight leading-relaxed tracking-wide text-left text-[20px]">
            Are you looking to drive impact with data and AI in Africa?
          </p>
          <p className="mt-2 font-extralight leading-relaxed tracking-wide text-left text-[20px]">
          We are open to collaborations with
          researchers, policymakers,
          </p>
          <p className="mt-2 font-extralight leading-relaxed tracking-wide text-left text-[20px]">
          businesses, and institutions ready to shape the future together.
          </p>

          <a href="/partners" className="mt-4 text-left text-[18px] font-semibold leading-relaxed text-md tracking-wide text-white hover:underline flex items-center">
            Learn More <span className="ml-2">→</span>
          </a>

        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
          <img
            src="/assets/aboutus/ctapartner.svg"
            alt="Collaboration"
            className="w-full max-w-sm mt-5 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
