import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { BsFillCartFill, BsFillPersonFill } from "react-icons/bs";

const NavBar = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "PRODUCTS", link: "/product" },
    { name: "CONTACT", link: "/" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full top-0 left-0 bg-white z-50">
      <div className="container flex items-center justify-between mx-auto py-4 md:px-10 px-7">
        <div className="cursor-pointer flex items-center">
          <span className="text-[38px] h-[70px] font-[600] mb-[-12px] text-[#4CAF50]">
            Dyne
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-5 cursor-pointer lg:hidden"
        >
          {open ? (
            <IoClose className="text-4xl text-[#bcbcbc]" />
          ) : (
            <IoMenu className="text-4xl text-[#bcbcbc]" />
          )}
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0  absolute lg:static text-[20px] font-[300] bg-white lg:z-auto z-50 left-0 w-full lg:w-auto lg:pl-0 pl-6 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="lg:mx-8 text-xl lg:my-0  my-3">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <ul
          className={`flex lg:items-center lg:pb-0 justify-end pr-7 lg:pr-0 absolute lg:static text-[20px] font-[500] bg-white lg:z-auto z-50 left-0 w-full lg:w-auto lg:pl-0 pl-2 transition-all duration-500 ease-in ${
            open ? "top-[250px] py-3 space-x-4" : "top-[-490px]"
          }`}
        >
          <li className="block relative lg:mx-3 ">
            <BsFillCartFill className="text-2xl text-gray-800" />
            <span className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-xs">
              7
            </span>
          </li>
          <li className="block relative lg:mx-3">
            <BsFillPersonFill className="text-2xl text-gray-800" />
            <span className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-xs">
              99+
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
