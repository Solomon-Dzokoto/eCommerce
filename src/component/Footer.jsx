import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#212934]  ">
      <div className="grid md:grid-cols-8 gap-x-4 py-10 mx-4 ">
        <div className="md:col-start-2 md:col-span-2">
          <h1 className="text-green-500 text-4xl font-[500] text-start border-b-2 border-[#343b47] py-4">
            Dyne
          </h1>
          <div className="pt-6 flex items-end">
            <FaLocationDot className="text-white text-xl mb-1" />
            <span className="text-white text-xl font-[200] ml-2">
              123 Consectetur at ligula 10660
            </span>
          </div>
          <div className="pt-4 flex items-end">
            <FaPhone className="text-white text-xl mb-1" />
            <span className="text-white text-xl font-[200] ml-2">
              010-020-0340
            </span>
          </div>
          <div className="pt-4 flex items-end">
            <FaEnvelope className="text-white text-xl mb-1" />
            <span className="text-white text-xl font-[200] ml-2">
              info@company.com
            </span>
          </div>
        </div>
        <div className="md:col-span-2">
          <h1 className="text-white text-4xl font-[200] text-start border-b-2 border-[#343b47] py-4">
            Products
          </h1>
          <ul className="pt-6 text-white text-xl font-[200]">
            <li className="pb-2">Luxury</li>
            <li className="pb-2">Sport Wear</li>
            <li className="pb-2">Men's Shoes</li>
            <li className="pb-2">Women's Shoes</li>
            <li className="pb-2">Popular Dress</li>
            <li className="pb-2">Gym Accessories</li>
            <li>Sport Shoes</li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h1 className="text-white text-4xl font-[200] text-start border-b-2 border-[#343b47] py-4">
            Further Info
          </h1>
          <ul className="pt-6 text-white text-xl font-[200]">
            <li className="pb-2">Home</li>
            <li className="pb-2">Abouut Us</li>
            <li className="pb-2">Shop Locations</li>
            <li className="pb-2">FAQs</li>
            <li className="pb-2">Contacts</li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-8 ">
        <div className="md:col-start-2 md:col-span-6 border-t-2 border-[#343b47] mx-4">
          <div className="md:flex justify-between pt-10">
            <div className="flex gap-x-3">
              <FaFacebookF className=" text-white text-5xl border-[#343b47] border p-2 rounded-full " />
              <FaInstagram className=" text-white text-5xl border-[#343b47] border p-2 rounded-full " />
              <FaTwitter className=" text-white text-5xl border-[#343b47] border p-2 rounded-full " />
              <FaLinkedin className=" text-white text-5xl border-[#343b47] border p-2 rounded-full " />
            </div>
            <div>
              <input
                type="email"
                className="bg-[#212934] border-[#343b47] border px-4 py-2 text-white"
                placeholder="Email Address"
              />
              <button className="bg-green-500 text-white py-2 px-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1d242d] pt-5 pb-8">
        <div className="grid md:grid-cols-8 mx-4">
            <div className="md:col-start-2 md:col-span-2">
                <h1 className="text-white font-[200]">Copyright © 2024 Dyne | Designed by Golden</h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
