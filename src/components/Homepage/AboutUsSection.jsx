import React from "react";

const AboutUs = () => {
    return (
        <div className="w-full bg-[#F7FDFA] flex justify-center items-center py-8">
            <div className="w-full bg-[#F7FDFA] p-8 shadow-md text-center font-sans" style={{ fontFamily: 'Sora, sans-serif' }}>
                <h3 className="text-lg font-medium uppercase tracking-wider text-[#26A37E] mb-2">ABOUT US</h3>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Driving Africa's Data and AI Revolution</h1>
                <p className="text-[#0F2542]  text-lg leading-relaxed max-w-4xl mx-auto">
                    At Datawise Africa, research is at our core. We explore the intersections of data, AI, and 
                    infrastructure, building solutions tailored for Africa’s needs but with a global perspective.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
