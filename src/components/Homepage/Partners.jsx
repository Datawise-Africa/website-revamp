import React from "react";

const partners = [
  { name: "Lacuna Fund", logo: "/assets/homepage/lacuna-fund-logo.png" },
  { name: "e", logo: "/assets/homepage/eduonix-logo.png" },
  { name: "Kaggle", logo: "/assets/homepage/Kaggle-logo.png" },
  { name: "Kodak", logo: "/assets/homepage/kodak-logo.png" },
];

const Partners = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Partners section */}
      <div className="bg-[#F7FDFA] w-full py-8 sm:py-12 text-center px-4">
        <h3
          className="text-[#26A37E] text-sm font-medium tracking-widest uppercase"
          style={{ letterSpacing: "0.20em" }}
        >
          Our Partners
        </h3>
        <h1 className="text-2xl sm:text-3xl font-serif text-gray-900 mt-2">Collaborating for a Smarter Africa</h1>
        <div className="flex justify-center items-center flex-wrap gap-8 sm:gap-12 md:gap-16 lg:gap-20 mt-8">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              className="h-16 sm:h-20 max-w-[120px] sm:max-w-[150px] object-contain mx-2"
            />
          ))}
        </div>
      </div>

      {/* Partner with us section */}
      <div className="px-4 sm:px-6 md:px-8 py-8">
        <div className="bg-[#26A37E] text-white rounded-2xl w-full mx-auto overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-[40px] font-bold font-serif">Partner With Us</h3>
              <div className="mt-4 space-y-2 text-base sm:text-lg md:text-xl font-extralight">
                <p className="leading-relaxed tracking-wide">
                  Are you looking to drive impact with data and AI in Africa?
                </p>
                <p className="leading-relaxed tracking-wide">
                  We are open to collaborations with researchers, policymakers,
                </p>
                <p className="leading-relaxed tracking-wide">
                  businesses, and institutions ready to shape the future together.
                </p>
              </div>
              <div className="mt-6 flex justify-center md:justify-start">
                <a
                  href="/partners"
                  className="text-lg font-semibold leading-relaxed tracking-wide text-white hover:underline flex items-center"
                >
                  Learn More <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <img
                src="/assets/aboutus/ctapartner.svg"
                alt="Collaboration"
                className="w-full max-w-xs sm:max-w-sm object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
