import React from "react";
import "./css/ProductCard.css";
import { FaStar, FaHeart, FaRegEye,FaCartPlus  } from "react-icons/fa";

const ProductCard = ({ imgSrc, link, productName, sizes, price }) => {
  return (
    <div className="mb-4 product-wap rounded-0 shadow-md">
      <div className="rounded-0 relative">
        <img
          className="rounded-0 img-fluid w-full"
          src={imgSrc}
          alt={productName}
        />
        <div className="card-img-overlay rounded-0 product-overlay flex items-center justify-center absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity duration-300 hover:opacity-100">
          <ul className="list-unstyled">
            <li>
              <a className="btn  text-white" href={link}>
               <FaHeart className="bg-green-500 text-5xl mb-4 p-2 rounded-lg"/>
              </a>
            </li>
            <li>
              <a className="btn  text-white mt-2" href={link}>
                <FaRegEye className="bg-green-500 text-5xl mb-4 p-2 rounded-lg"/>
              </a>
            </li>
            <li>
              <a className="btn  text-white mt-2" href={link}>
                <FaCartPlus className="bg-green-500 text-5xl p-2 rounded-lg"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body px-3">
        <a
          href={link}
          className="block text-lg font-[400] text-black hover:text-gray-900 "
        >
          {productName}
        </a>
        <ul className="w-full list-unstyled d-flex justify-between mb-0">
          <li className="text-xl font-[300]">{sizes}</li>
        
        </ul>
        <div className="flex items-center justify-center">
          <ol>
            <FaStar size={25} color="#ede861" />
          </ol>
          <ol>
            <FaStar size={25} color="#ede861" />
          </ol>
          <ol>
            <FaStar size={25} color="#ede861" />
          </ol>
          <ol>
            <FaStar size={25} color="#bcbcbc" />
          </ol>
          <ol>
            <FaStar size={25} color="#bcbcbc" />
          </ol>
        </div>
        <p className="text-center text-xl py-5 mb-0">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
