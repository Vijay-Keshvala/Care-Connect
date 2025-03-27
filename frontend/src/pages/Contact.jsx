import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col items-center gap-10 text-sm">
        {/* Contact Section */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          {/* Contact Image */}
          <img
            className="w-full max-w-[360px] mx-auto"
            src={assets.contact_image}
            alt="Contact Us"
          />

          {/* Contact Details */}
          <div className="flex flex-col gap-6 text-gray-500">
            <div>
              <p className="font-semibold text-lg text-gray-600">Our OFFICE</p>
              <p>
                Param doctor house near railway station <br />
                 lal darwaja, Surat, Gujarat, India
              </p>
            </div>
            <div>
              <p>Tel: (+91) 1234567890</p>
              <p>Email: careconnect@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold text-lg text-gray-600">
                Careers at CARECONNECT
              </p>
              <br />
              <p>Learn more about our teams and job openings.</p>
            </div>
            <button className="w-40 border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
