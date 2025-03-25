import React from "react";
import project_hero from "/assets/projects/Projects - Hero.svg"
import vector1 from "/assets/projects/Vector1.png";
import vector2 from "/assets/projects/Vector2.png";
import vector3 from "/assets/projects/Vector3.png";

const Projects = () => {
  return (
    <div className="container mx-auto mt-5 px-6 py-12 space-y-12">
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="mt-10 lg:mt-0 text-center md:text-left">
          <h1 className="mt-5 lg:mt-0 lora-font font-bold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight">
            Driving Change Through
            <span className="text-[#26A37E]"> Data Research</span>
          </h1>
          <p className="sora-font text-gray-800 mt-6 text-lg sm:text-xl leading-relaxed">
            Our research initiatives focus on solving Africa’s most pressing
            challenges, from climate resilience to economic development.
          </p>
          <div className="flex sm:justify-center md:justify-start">
          <button
            type="submit"
            className="mt-6 flex items-center gap-2 bg-[#26A37E] text-white font-medium py-2 px-4 rounded-md hover:bg-[#1e8c68] transition duration-300"
          >
            Collaborate With Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={project_hero}
            alt="Project Hero"
            className="object-cover w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="text-center">
        <h2 className="lora-font font-bold text-3xl sm:text-4xl">Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            { img: vector1, title: "AI for Development", desc: "Leveraging AI to address social and economic challenges" },
            { img: vector2, title: "Data Infrastructure", desc: "Building sustainable and affordable compute solutions" },
            { img: vector3, title: "Ethical Data Practices", desc: "Ensuring data collection and usage are transparent and ethical" },
          ].map((item, index) => (
            <div key={index} className="p-6 border rounded-md shadow-sm bg-white">
              <div className="flex justify-center">
                <img src={item.img} alt={item.title} width={64} height={64} />
              </div>
              <h3 className="sora-font font-bold text-xl mt-4 text-gray-900">{item.title}</h3>
              <p className="sora-font text-gray-700 mt-2 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="text-center">
        <h2 className="lora-font font-bold text-3xl sm:text-4xl">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            { img: vector2, title: "AI for Healthcare Access", desc: "Improved diagnostic accuracy and reduced costs for rural clinics" },
            { img: vector2, title: "AI for Financial Inclusion", desc: "Developing AI models to expand financial access" },
            { img: vector2, title: "Climate Change AI", desc: "Using AI to predict and mitigate climate risks" },
          ].map((item, index) => (
            <div key={index} className="p-6 border rounded-md shadow-sm bg-white">
              <div className="flex justify-center">
                <img src={item.img} alt={item.title} width={64} height={64} />
              </div>
              <h3 className="sora-font font-bold text-xl mt-4 text-gray-900">{item.title}</h3>
              <p className="sora-font text-gray-700 mt-2 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Projects;

