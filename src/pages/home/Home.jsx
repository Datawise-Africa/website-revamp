import React from "react";
import HeroSection from "../../components/Homepage/HeroSection";
import AboutUs from "../../components/Homepage/AboutUsSection";
import WhatWeDo from "../../components/Homepage/WhatWeDo";
import Partners from "../../components/Homepage/Partners";
const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden" >
        <HeroSection />
        <AboutUs />
        <WhatWeDo />
        <Partners/>
      </div>
    </>
  );
};

export default Home;
