import React from "react";
import BrandCarousel from "./BrandCarousel";
import brand1 from './assets/brand_01.png';
import brand2 from './assets/brand_02.png';
import brand3 from './assets/brand_03.png';
import brand4 from './assets/brand_04.png';
import brand5 from './assets/brand_05.png';
import './css/BrandCarousel.css'

const Brand = () => {
    const slides = [
        brand1,
        brand2,
        brand3,
        brand4,
        brand5,
        brand1,
        brand2,
        brand3,
        brand4,
        brand5,
        brand2,
        brand1,
    ];

    return (
        <div className="bg-[#e9eef5]">
            <div className="mb-2">
                <div className="lg:grid lg:grid-cols-6  mx-8">
                    <div className="lg:col-start-3 lg:col-span-2">
                        <div className="flex justify-center">
                            <div>
                                <div>
                                    <h1 className="text-center text-5xl pt-20 pb-4 font-thin text-gray-600 mx-auto">
                                        Our Brands
                                    </h1>
                                </div>
                                <div className="text-center">
                                    <p className="flex justify-center font-thin text-gray-600 text-xl">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:grid lg:grid-cols-6 lg:pt-8 md:container md:mx-auto w-full">
                    <div className="lg:col-start-2 lg:col-span-4">
                        <BrandCarousel slides={slides} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;
