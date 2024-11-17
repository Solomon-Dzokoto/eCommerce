import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

import pic1 from './assets/shop_01.jpg'
import pic2 from './assets/shop_02.jpg'
import pic3 from './assets/shop_03.jpg'
import pic4 from './assets/shop_04.jpg'
import pic5 from './assets/shop_05.jpg'
import pic6 from './assets/shop_06.jpg'
import pic7 from './assets/shop_07.jpg'
import pic8 from './assets/shop_08.jpg'
import pic9 from './assets/shop_09.jpg'

const ProductContent = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

 

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const link = '/home'
  const sizes = ['S','/', 'M','/', 'L','/', 'XL']
  

  const products = [
    { imgSrc: pic1, productName: 'Oupidatat non', link: link, sizes: sizes,  price: '250.00' },
    { imgSrc: pic2, productName: 'Oupidatat non', link: link, sizes: sizes,  price: '260.00' },
    { imgSrc: pic3, productName: 'Oupidatat non', link: link, sizes: sizes,  price: '270.00' },
    { imgSrc: pic4, productName: 'Oupidatat non', link: link, sizes: sizes,  price: '280.00' },
    { imgSrc: pic5, productName: 'Oupidatat non', link: link, sizes: sizes,  price: '290.00' },
    { imgSrc: pic6, productName: 'Oupidatat non', link: link, sizes: sizes,  price: '300.00' },
    { imgSrc: pic7, productName: 'Oupidatat non', link: link, sizes: sizes,  price: '310.00' },
    { imgSrc: pic8, productName: 'Oupidatat non', link: link, sizes: sizes,  price: '320.00' },
    { imgSrc: pic9, productName: 'Oupidatat non', link: link, sizes: sizes,  price: '330.00' },
  ];

  const productsPerPage = 6;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const displayedProducts = products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);


  return (
   <div>
     <div className='lg:flex container mx-auto pt-10 pb-14 px-4 '>
      <div className='lg:w-1/4 w-full'>
        <h1 className='text-2xl font-[400]'>Categories</h1>
        <ul className="list-none">
          <li className='pb-3 mt-5 lg:mt-10 '>
            <button
              className="flex justify-between w-full text-xl py-3 text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => toggleDropdown('gender')}
            >
              Gender
              <FaChevronDown className="ml-2 -mr-1 h-5 w-5" />
            </button>
            <ul id="gender" className={`pl-4 ${openDropdown === 'gender' ? '' : 'hidden'}`}>
              <li><a className="block py-2 text-gray-600 hover:text-gray-900" href="/">Men</a></li>
              <li><a className="block py-2 text-gray-600 hover:text-gray-900" href="/">Women</a></li>
            </ul>
          </li>
          <li className='pb-3'>
            <button
              className="flex justify-between w-full text-xl py-3 text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => toggleDropdown('sale')}
            >
              Sale
              <FaChevronDown className="ml-2 -mr-1 h-5 w-5" />
            </button>
            <ul id="sale" className={`pl-4 ${openDropdown === 'sale' ? '' : 'hidden'}`}>
              <li><a className="block py-2 text-gray-600 hover:text-gray-900" href="/">Sport</a></li>
              <li><a className="block py-2 text-gray-600 hover:text-gray-900" href="/">Luxury</a></li>
            </ul>
          </li>
          <li className='pb-3'>
            <button
              className="flex justify-between w-full text-xl py-3 text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => toggleDropdown('product')}
            >
              Product
              <FaChevronDown className="ml-2 -mr-1 h-5 w-5" />
            </button>
            <ul id="product" className={`pl-4 ${openDropdown === 'product' ? '' : 'hidden'}`}>
              <li><a className="block py-2 text-gray-600 hover:text-gray-900" href="/">Bag</a></li>
              <li><a className="block py-2 text-gray-600 hover:text-gray-900" href="/">Sweater</a></li>
              <li><a className="block py-2 text-gray-600 hover:text-gray-900" href="/">Sunglass</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className='lg:w-3/4 lg:pl-6 w-full'>
       <div className='container mx-auto'>
       <div className='md:flex lg:flex item-center justify-between block '>
            <div className='sm:block sm:w-full'>
                <span className='px-2 text-xl'>All</span>
                <span className='px-2 text-xl'>Men's</span>
                <span className='px-2 text-xl'>Women's</span>
            </div>
            <div className='lg:w-1/2 md:w-1/2 w-full sm:block'>
                <select className="form-control bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-blue-500 w-full focus:bg-white focus:border-gray-500">
                <option>Featured</option>
                <option>A to Z</option>
                 <option>Item</option>
                </select>
            </div>
        </div>
        <div className='grid md:grid-cols-3 gap-4 pt-6'>
        {products.map((product, index) => (
              <ProductCard
                key={index}
                imgSrc={product.imgSrc}
                link={product.link}
                productName={product.productName}
                sizes={product.sizes}
                colors={product.colors}
                price={product.price}
              />
            ))}
        </div>
       </div>
       <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>
   
   </div>
  );
};

export default ProductContent;
