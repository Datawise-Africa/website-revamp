import React from "react";

const PartnerForm = () => {
  return (
    <section className="w-full max-w-4xl mx-auto bg-white p-6 md:p-8 shadow-lg mt-14  rounded-lg">
      <h2 className="text-2xl md:text-3xl lora-font font-bold text-center text-[#0F2542] mb-8">
        Join Our Partners Network
      </h2>

      <form className="space-y-6 mt-4">
        {/* Row 1 - First Name & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#0F2542] font-medium mt-4 mb-1">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="bg-[#F6F6F6] border-0 border-b-2 border-[#115443] p-3 w-full rounded-md focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-[#0F2542] font-medium mt-4 mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="bg-[#F6F6F6] border-0 border-b-2 border-[#115443] p-3 w-full rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Row 2 - Email Address & Phone Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#0F2542] font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#F6F6F6] border-0 border-b-2 border-[#115443] p-3 w-full rounded-md focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-[#0F2542] font-medium mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-[#F6F6F6] border-0 border-b-2 border-[#115443] p-3 w-full rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Row 3 - Job Title & Organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#0F2542] font-medium mb-1">Job Title</label>
            <input
              type="text"
              placeholder="Job Title"
              className="bg-[#F6F6F6] border-0 border-b-2 border-[#115443] p-3 w-full rounded-md focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-[#0F2542] font-medium mb-1">Organization</label>
            <input
              type="text"
              placeholder="Organization"
              className="bg-[#F6F6F6] border-0 border-b-2 border-[#115443] p-3 w-full rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Row 4 - Partnership Type (Full Width) */}
        <div>
          <label className="block text-[#0F2542] font-medium mb-1">
            How would you like to partner with us?
          </label>
          <input
            type="text"
            placeholder="Partnership Type"
            className="bg-[#F6F6F6] border-0 border-b-2 border-[#115443] p-3 w-full rounded-md focus:outline-none"
          />
        </div>

        {/* Row 5 - Message (Full Width) */}
        <div>
          <label className="block text-[#0F2542] font-medium mb-1">
            Message
          </label>
          <textarea
            placeholder="Write your message here..."
            className="bg-[#F6F6F6] border-0 border-b-2 border-[#115443] p-3 w-full min-h-[120px] rounded-md focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button className="w-full md:w-[250px] h-[50px] px-6 py-3 flex items-center justify-center gap-2 bg-[#26A37E] text-white font-semibold text-lg rounded-md shadow-md hover:bg-[#1e8b66] transition">
            Submit Application
          </button>
        </div>
      </form>
    </section>
  );
};

export default PartnerForm;
