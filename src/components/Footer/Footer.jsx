import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { socials } from "../../constants";
import { Link } from "react-router-dom";
import datawise_logo from "/assets/datawise-logo-dark.png";

const socialIcons = {
  LinkedIn: faLinkedin,
  Github: faGithub,
  X: faXTwitter,
}

const Footer = () => {
  return (
    <div className="bg-[#0F2542] text-[#E5E7EB] px-5 lg:px-15 xl:px-20 py-10">
      <div className="grid grid-cols-3 gap-8">
        <div className="">
          <div className="py-3">
            <Link to="/" className="w-[12rem] xl:mr-12">
              <img
                src={datawise_logo}
                alt="Datawise logo"
                loading="lazy"
                width={180}
                height={20}
              />
            </Link>
          </div>
          <div className="py-3">
            <p className="flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              +254 710 891 741
            </p>
          </div>
          <div className="py-3">
            <p className="flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  className="size-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </span>
              info@datawiseafrica.com
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Magharibi Place, GA11 Nairobi West, Kenya
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <h4 className="lora-font font-bold text-[24px] leading-[167%] tracking-[-0.02em] col-span-2">
            Company
          </h4>
          <div className="flex flex-col space-y-2">
            <Link to="/">Home</Link>
            <Link to="/datalab">Datalab</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/projects">Projects</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link to="/jobs">Jobs</Link>
            <Link to="#">Blogs</Link>
            <Link to="#">Contact Us</Link>
            <Link to="#">Privacy Policy</Link>
          </div>
        </div>
        <div className="">
          <h4 className="lora-font font-bold text-[24px] leading-[167%] tracking-[-0.02em] col-span-2]">
            Stay Connected
          </h4>
          <p>
            Get the latest updates on our research, projects, and opportunities.
          </p>
          <form className="mt-4 space-y-4">
            <div className="flex flex-col">
              <label htmlFor="full-name" className="text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="mt-1 p-2 border rounded-md bg-[#FFFFFF] text-[#0F2542] focus:outline-none focus:ring-2 focus:ring-[#26A37E]"
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border rounded-md bg-[#FFFFFF] text-[#0F2542] focus:outline-none focus:ring-2 focus:ring-[#26A37E]"
                placeholder="Enter your email address"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-[#26A37E] text-white font-medium py-2 rounded-md hover:bg-[#1e8c68] transition duration-300"
            >
              Subscribe to Newsletter
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
      <hr className="border-[#E5E7EB]/50 my-6" />
      <div className="flex justify-between items-center">
        <p className="text-sm">Datawise Africa © 2025. All rights reserved.</p>

        {/* Social Media Icons (Placeholder) */}
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a key={item.id} href={item.url} target="_blank" rel="noopner noreferrer" className="flex items-center justify-center w-10 h-10 bg-[#0F2542] rounded-full transition-colors hover:bg-[#15131D] cursor-pointer">
              <FontAwesomeIcon icon={socialIcons[item.name]} />
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
