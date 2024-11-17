import React from "react";
import { FaTruck, FaPercent, FaUser  } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="mb-2 mx-8">
      <div className="lg:grid lg:grid-cols-6">
        <div className="lg:col-start-3  lg:col-span-2">
          <div className="flex justify-center">
            <div className="">
              <div>
                <h1 className="text-center text-5xl pt-20 pb-4 font-thin text-gray-600 mx-auto ">
                  Our Services
                </h1>
              </div>
              <div className="text-center">
                <p className="flex justify-center font-thin text-gray-600 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex align-middle justify-center mx-auto pb-16 pt-8">
        <div className="container">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 pb-8">
            <div className="h-full shadow-2xl text-center flex flex-col items-center justify-center align-middle py-5 mb-10 group  hover:bg-[#59ab6e] hover:text-white transition-colors duration-300 ">
              <FaTruck className="text-7xl text-[#59ab6e] group-hover:text-white transition-colors duration-300" />
              <h1 className="font-[700] pt-5">Delivery Services</h1>
            </div>
            <div className="h-full shadow-2xl text-center flex flex-col items-center justify-center align-middle py-5 mb-10 group  hover:bg-[#59ab6e] hover:text-white transition-colors duration-300 ">
              <FaArrowRightArrowLeft className="text-6xl text-[#59ab6e] group-hover:text-white transition-colors duration-300" />
              <h1 className="font-[700] pt-6">Shipping & Return</h1>
            </div>

            <div className="h-full shadow-2xl text-center flex flex-col items-center justify-center align-middle py-5 mb-10 group  hover:bg-[#59ab6e] hover:text-white transition-colors duration-300">
              <FaPercent className="text-6xl text-[#59ab6e] group-hover:text-white transition-colors duration-300" />
              <h1 className="font-[700]  pt-6">Promotion</h1>
            </div>

            <div className="h-full shadow-2xl text-center flex flex-col items-center justify-center align-middle py-5 mb-10 group  hover:bg-[#59ab6e] hover:text-white transition-colors duration-300">
              <FaUser  className="text-6xl text-[#59ab6e] group-hover:text-white transition-colors duration-300" />
              <h1 className="font-[700]  pt-5">Delivery Services</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
