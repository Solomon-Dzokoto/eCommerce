import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './css/BrandCarousel.css'; 

const BrandCarousel = ({ slides }) => {
  const [curr, setCurr] = useState(0);
  const itemsPerSlide = 4;

  const groupedSlides = [];
  for (let i = 0; i < slides.length; i += itemsPerSlide) {
    groupedSlides.push(slides.slice(i, i + itemsPerSlide));
  }

  const prev = () =>
    setCurr((curr) => (curr === 0 ? groupedSlides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === groupedSlides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 500000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {groupedSlides.map((group, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex justify-center items-center"
          >
            <div className="grid grid-cols-9 gap-4 p-5">
              {group.reduce((acc, slide, i) => {
                acc.push(
                  <div key={`empty-${i}`} className=" sm:hidden lg:block md:block"></div>,
                  <div key={`slide-${i}`} className="lg:p-2 brand-img sm:col-span-2 lg:col-span-1 md:col-span-1">
                    <img src={slide} alt={`Brand ${i}`} className="w-full filter grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition duration-500" />
                  </div>
                );
                return acc;
              }, [])}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev}>
          <IoIosArrowBack className="text-sky-600 text-xl md:text-5xl lg:text-6xl" />
        </button>
        <button onClick={next}>
          <IoIosArrowForward className="text-sky-600 text-xl md:text-5xl lg:text-6xl" />
        </button>
      </div>
    </div>
  );
};

export default BrandCarousel;
