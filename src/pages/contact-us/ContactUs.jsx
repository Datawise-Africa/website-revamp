import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactCard from "../../components/ContactUs/ContactCard";
import ContactForm from "../../components/ContactUs/ContactCard";

const ContactUs = () => {
  return (
    <div className="container mx-auto w-full flex flex-col items-center p-6">
      <section className="pt-40 ml-10 mr-10   grid grid-cols-1 md:grid-cols-2 ">
        <div className=" mt-20 md:pt-20 lg:pt-15 pl-8 max-w-[700px] lg:max-w-[800px]">
          <h1 className="lora-font font-bold text-[56px] leading-[100%] tracking-[-0.02em]">
            We're Here to
            
            <span className="text-[#26A37E]"> Help !</span>
          </h1>
          <p className="sora-font ml-2 pt-6 pb-6 text-gray-600 font-normal text-[22px] leading-[167%] tracking-[-0.02em]">
            Have any questions, need support, or just want to learn more about
            Datawise Africa ?
            Reach out we'd love to hear from you.
          </p>
        </div>
        <div className="md:pt-20 lg:pt-0 ml-34 mb-5 ">
          <img
            className="w-full max-w-[580px] lg:h-[490.69px] top-[135.38px]"
            src="/public/assets/contactUs/contactUs.svg"
            alt="contact us image"
          />
        </div>
      </section>

      {/* Left Section - Contact Information */}
      <div className=" flex flex-col md:flex-row justify-center items-center min-h-[800px] bg-[#F7FDFA] px-6 md:px-12">
      <div className="bg-[#D1F2E5] md:p-8 rounded-lg shadow-lg w-full md:w-[580px] h-[600px] h-auto mb-8 ">
        <h2 className="text-lg font-semibold text-[22px] text-gray-900 mt-2">
          Contact Information
        </h2>
        <p className="text-sm text-gray-600 mt-1 text-[16px]">
          For inquiries, feedback, or assistance, reach us at:
        </p>

        <div className="mt-5 space-y-4">
          {/* Phone Number */}
          <div className="bg-white p-4 rounded shadow  items-center">
            <span className="text-green-600 text-xl">📞</span>
            <div className="ml-2 h-[60px]">
              <p className="text-md font-semibold text-gray-900 mt-3">
                Phone Number:
              </p>
              <p className="text-md text-gray-700">+254 712 345 678</p>
            </div>
          </div>

          {/* Email Address */}
          <div className="bg-white p-4 rounded shadow  items-center">
            <span className="text-green-600 text-xl">📧</span>
            <div className="ml-1 mt-2 h-[60px]">
              <p className="text-md font-semibold text-gray-900">
                Email Address:
              </p>
              <p className="text-md text-gray-700">info@datawiseafrica.com</p>
            </div>
          </div>

          {/* Office Location */}
          <div className="bg-white p-4 rounded shadow  items-center mb-5">
            <span className="text-green-600 text-xl">📍</span>
            <div className="ml-1 mt-2 h-[80px] ">
              <p className="text-md font-semibold text-gray-900">
                Office Location:
              </p>
              <p className="text-md text-gray-700">
                Magharibi Place, GAI1 Nairobi West, Kenya
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="bg-white  ml-12 md:p-8 rounded shadow-lg w-800px md:w-[600px] min-h-[60px] mb-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {/* First Name */}
          <div >
            <p className="text-md text-gray-900 text-[16px] mb-2 ">
              First Name
            </p>
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-4 border-b-2 border-gray-800 outline-none text-sm bg-[#F6F6F6]"
            />
          </div>

          {/* Last Name */}
          <div>
            <p className="text-md  text-gray-900 text-[16px] mb-2">
              Last Name
            </p>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-4 border-b-2 border-gray-800 outline-none text-sm bg-[#F6F6F6]"
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="mt-4">
          <p className="text-md  text-gray-900 text-[16px] ">
            Email Address
          </p>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 border-b-2 border-gray-800 outline-none text-sm bg-[#F6F6F6]"
          />
        </div>

        {/* Subject */}
        <div className="mt-4">
          <p className=" text-md text-gray-900 text-[16px]  ">
            Your Subject
          </p>
          <input
            type="text"
            placeholder="Your subject"
            className="w-full p-4 border-b-2 border-gray-800 outline-none text-sm bg-[#F6F6F6]"
          />
        </div>

        {/* Message */}
        <div className="mt-4">
          <p className="text-md  text-gray-900 text-[16px] ">Message</p>
          <textarea
            placeholder="Input your message here "
            className="w-full p-4 border-b-2 border-gray-800 border-outline-none text-sm bg-[#F6F6F6] "
            rows="3"
          />
        </div>

        <button className="mt-6 w-full bg-[#26A37E] text-white text-sm font-semibold py-3 rounded hover:bg-green-700 transition">
          Send Message
        </button>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
