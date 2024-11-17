import React from "react";
import pic1 from './assets/feature_prod_01.jpg'
import pic2 from './assets/feature_prod_02.jpg'
import pic3 from './assets/feature_prod_03.jpg'
import { FaStar } from "react-icons/fa";
const FeaturedProduct = () => {
  return (
    <div className="bg-[#e9eef5]">
      <div className="lg:grid lg:grid-cols-6">
        <div className="lg:col-start-3  lg:col-span-2">
          <div className="flex justify-center">
            <div className="">
              <div>
                <h1 className="text-center text-5xl pt-20 pb-4 font-thin text-gray-600 mx-auto ">
                  Featured Product
                </h1>
              </div>
              <div className="text-center">
                <p className="flex justify-center font-thin text-gray-600 text-xl">
                  Reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:py-16  grid md:grid-cols-8  gap-x-6">
        <div className="md:col-start-2 col-span-2 pb-20">
          <div className=" bg-white border border-gray-200  h-[650px] rounded-lg shadow pb-10">
            <a href="/">
              <img class="rounded-t-lg w-full" src={pic1} alt=""/>
            </a>
            <div className="p-5">
                <div className="flex justify-between md:block">
                    <div className="flex mb-2">
                    <ol><FaStar size={25} color="#ede861"/></ol>
                    <ol><FaStar size={25} color="#ede861"/></ol>
                    <ol><FaStar size={25} color="#ede861"/></ol>
                    <ol><FaStar size={25} color="#bcbcbc"/></ol>
                    <ol><FaStar size={25} color="#bcbcbc"/></ol>
                    </div>
                    <div>
                        <h1 className="text-[#bcbcbc] text-xl font-thin">$240.00</h1>
                    </div>
                </div>
                
              <h1 className="mt-3 font-thin text-3xl">
                Gym Weight
              </h1>
              <h1 className="font-thin text-xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
              </h1>
              <h1 className="text-[#bcbcbc] text-xl font-thin">Reviews (24)</h1>
            </div>
          </div>
        </div>

        <div className="pb-20 col-span-2">
        <div class=" bg-white border border-gray-200 rounded-lg h-[650px] shadow pb-3">
            <a href="/">
              <img class="rounded-t-lg w-full" src={pic2} alt=""/>
            </a>
            <div class="p-5">
            <div className="flex justify-between md:block">
                    <div className="flex mb-2">
                    <ol><FaStar size={25} color="#ede861"/></ol>
                    <ol><FaStar size={25} color="#ede861"/></ol>
                    <ol><FaStar size={25} color="#ede861"/></ol>
                    <ol><FaStar size={25} color="#ede861"/></ol>
                    <ol><FaStar size={25} color="#bcbcbc"/></ol>
                    </div>
                    <div>
                        <h1 className="text-[#bcbcbc] text-xl font-thin">$240.00</h1>
                    </div>
                </div>
                
              <h1 className="mt-3 font-thin text-3xl">
              Cloud Nike Shoes
              </h1>
              <h1 className="font-thin text-xl mb-6">
              Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
              </h1>
              <h1 className="text-[#bcbcbc] text-xl font-thin ">Reviews (48)</h1>
            </div>
            </div>
        </div>

        <div className="pb-20 col-span-2">
        <div class=" bg-white border border-gray-200 h-[650px] rounded-lg shadow pb-3">
            <a href="/">
              <img class="rounded-t-lg w-full" src={pic3} alt=""/>
            </a>
            <div class="p-5">
            <div className="flex justify-between md:block">
                    <div className="flex mb-2">
                    <ol><FaStar size={25} color="#ede861"/></ol>
                    <ol><FaStar size={25} color="#ede861"/></ol>
                    <ol><FaStar size={25} color="#ede861"/></ol>
                    <ol><FaStar size={25} color="#bcbcbc"/></ol>
                    <ol><FaStar size={25} color="#bcbcbc"/></ol>
                    </div>
                    <div>
                        <h1 className="text-[#bcbcbc] text-xl font-thin">$240.00</h1>
                    </div>
                </div>
                
              <h1 className="mt-3 font-thin text-3xl">
              Summer Addides Shoes
              </h1>
              <h1 className="font-thin text-xl mb-6">
              Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
              </h1>
              <h1 className="text-[#bcbcbc] text-xl font-thin">Reviews (74)</h1>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
