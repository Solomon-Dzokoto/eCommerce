import React from 'react'
import Carosel from './Carosel'
import HeroItem1 from './HeroItem1'
import HeroItem2 from './HeroItem2'
import HeroItem3 from './HeroItem3'
const Hero = () => {
    const slides = [
        <HeroItem1/>,
        <HeroItem2/>,
        <HeroItem3/>
    ]

    return (
        <div className='w-full bg-[#efefef]'>
            <Carosel>
                {slides.map((data, index) => (
                    <div key={index} className="w-full">
                        {data}
                    </div>
                ))}
            </Carosel>
        </div>
    )
}

export default Hero
