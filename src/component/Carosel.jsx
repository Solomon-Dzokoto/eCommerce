import React, { useState, useEffect } from 'react'

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carosel = ({ children: slides }) => {
    const [curr, setCurr] = useState(0)

    const prev = () => setCurr(curr => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () => setCurr(curr => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 5000); 

        return () => clearInterval(interval); 
    }, );

    return (
        <div className="w-full overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="w-full  flex-shrink-0">
                        {slide}
                    </div>
                ))}
            </div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button onClick={prev}>
                    <IoIosArrowBack className="text-green-600 text-4xl md:text-5xl lg:text-6xl" />
                </button>
                <button onClick={next}>
                <IoIosArrowForward className="text-green-600 text-4xl md:text-5xl lg:text-6xl" />
                </button>
            </div>
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((_, i) => (
                        <div key={i} className={`transition-all w-3 h-3 bg-green-500 rounded-full ${curr === i ? 'p-2' : 'bg-opacity-50'}`}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carosel
