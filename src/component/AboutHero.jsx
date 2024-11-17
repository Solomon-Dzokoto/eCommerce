import React from "react";
import pic1 from "./assets/about-hero.svg";
const AboutHero = () => {
  return (
    <div className="bg-[#59ab6e] py-5">
    <div className=" flex items-center container mx-auto ">
        <div className="grid grid-cols-7">
           <div className="col-span-3 col-start-2 break-words flex flex-col mx-5 align-middle  justify-center h-full">
            <h1 className="text-white text-6xl font-[400] ">About us</h1>
             <h1 className="text-white md:pt-4">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
         ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
             aliquip ex ea commodo consequat.
         </h1>
           </div>
        <div className="col-span-2">
            <img src={pic1} alt="" className=""/>
         </div>
       </div>
       </div>
    </div>

  );
};

export default AboutHero;
