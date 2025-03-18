import React from "react";

const partners = [
  { name: "Lacuna Fund", logo: "/assets/homepage/lacuna-fund-logo.png" },
  { name: "e", logo: "/assets/homepage/eduonix-logo.png" },
  { name: "Kaggle", logo: "/assets/homepage/Kaggle-logo.png" },
  { name: "Kodak", logo: "/assets/homepage/kodak-logo.png" },
];

const Partners = () => {
  return (
    <div className="bg-white py-12 px-6 text-center">
        <div className="bg-[#F7FDFA] px-6 py-12 text-center">
    <h3 className="text-[#26A37E] text-sm font-semibold tracking-widest uppercase">
        Our Partners
      </h3>
      <h1 className="text-3xl text-gray-900 mt-2">
        Collaborating for a Smarter Africa
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-8 mt-8">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner.logo}
            alt={partner.name}
            className="h-20 md:h-20 max-w-[150px] object-contain"
          />
        ))}
      </div>
      </div>

      {/* Partner With Us Section */}
      <div className="mt-8 bg-[#26A37E] text-white p-6 md:p-6 w-[800px] h-[400px] mx-auto md:flex md:items-center rounded-2xl">

        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold font-serif text-left ">Partner With Us</h3>

          <p className="mt-2 text-sm font-extralight font-sans text-left">
            Are you looking to drive impact with data and AI in Africa? We are open to collaborations with
            researchers, policymakers, businesses, and institutions ready to shape the future together.
          </p>

          <a href="#" className="mt-4 text-left text-white font-lora font-weight-400 hover:underline flex items-center">
            Learn More <span className="ml-2">→</span>
          </a>

        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
          <img
            src="/assets/homepage/cuate.png"
            alt="Collaboration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
