import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Albert Kahira",
      role: "Director",
      image: "/assets/teamMembers/albert-kahira.jpeg", // Replace with actual image paths
    },
    {
      name: "Brian Odhiambo",
      role: "Data Scientist",
      image: "/assets/teamMembers/brian.jpg",
    },
    {
      name: "Dorothy Chepkonga",
      role: "Operations Lead",
      image: "/assets/teamMembers/dorothy.jpg",
    },
    {
      name: "Virginia Wanjiru",
      role: "Software Engineer",
      image: "/assets/teamMembers/virginia.jpg",
    },
    {
      name: "Winny Chelangat",
      role: "Software Engineer",
      image: "/assets/teamMembers/winny.jpg",
    },
  ];

  return (
    <div className="bg-white py-2 px-6">
      <div className="text-center mb-12 ">
        <p className="text-sm text-[#26A37E] text-[14px] uppercase tracking-widest font-extralight" style={{ letterSpacing: "0.20em" }}>
          Our Team
        </p>
        <h2 className="text-5xl lora-font text-gray-800 mt-6">
          Meet the Minds Behind <br/> Datawise Africa
        </h2>
        <p className="text-lg text-gray-600 mt-4 text-[22px]">
          A diverse team of researchers, engineers,<br/> and innovators united by a shared vision.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-screen-lg mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-80 h-80  object-cover mb-4 shadow-md"
            />
            <h3 className="text-xl font-medium text-gray-800">{member.name}</h3>
            <p className="text-[#26A37E] font-extralight">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
