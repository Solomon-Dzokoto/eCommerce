import React from "react";
import pic1 from './assets/category_img_01.jpg'
import pic2 from './assets/category_img_02.jpg'
import pic3 from './assets/category_img_03.jpg'
const FeaturedCategories = () => {
  return (
    <div className="mb-2 mx-8">
      <div className="lg:grid lg:grid-cols-6">
        <div className="lg:col-start-3  lg:col-span-2">
          <div className="flex justify-center">
            <div className="">
              <div>
                <h1 className="text-center text-5xl pt-20 pb-4 font-thin text-gray-600 mx-auto ">
                  Categories of The Month
                </h1>
              </div>
              <div className="text-center">
                <p className="flex justify-center font-thin text-gray-600 text-xl">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16  grid lg:grid-cols-5 md:grid-cols-3 md:mx-8  gap-x-16">
        <div className="lg:col-start-2 pb-20">
            <img src={pic1} alt="" className="rounded-full border my-3" />
            <h1 className="text-center text-xl font-semibold ">Watches</h1>
            <div className="flex justify-center">
                    <button className="bg-green-600 text-white p-2 mt-4 rounded-md">Go Shop</button>
            </div>
        </div>
        <div className="pb-20">
        <img src={pic2} alt="" className="rounded-full border my-3" />
            <h1 className="text-center text-xl font-semibold ">Shoes</h1>
            <div className="flex justify-center">
                    <button className="bg-green-600 text-white p-2 mt-4 rounded-md">Go Shop</button>
            </div>
        </div>
        <div className="pb-20">
        <img src={pic3} alt="" className="rounded-full border my-3" />
            <h1 className="text-center text-xl font-semibold ">Accesories</h1>
            <div className="flex justify-center">
                    <button className="bg-green-600 text-white p-2 mt-4 rounded-md">Go Shop</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
