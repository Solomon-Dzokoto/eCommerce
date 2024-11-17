import React from 'react'
import Services from '../component/Services'
import Brand from '../component/Brand'
import pic1 from "../component/assets/about-hero.svg";
import '../component/css/BrandCarousel.css'

const About = () => {
  return (
    <div>
      <div className="bg-sky-500 py-5">
       <div className=" flex items-center container mx-auto ">
        <div className="grid grid-cols-7">
           <div className="col-span-3 col-start-2 break-words flex flex-col mx-5 align-middle  justify-center h-full">
            <h1 className="text-white text-6xl font-[400] ">About us</h1>
             <h1 className="text-white md:pt-4">
             Welcome to MaaH! We're passionate about providing exceptional customer service and making your online shopping experience as smooth and enjoyable as possible. We pride ourselves on our quick shipping, easy returns, and friendly support team. We're always here to help you find what you need, so browse our selection and let us make your shopping easy!
         </h1>
           </div>
        <div className="col-span-2">
        <img src={pic1} alt="about" className="hidden md:block" />
         </div>
       </div>
       </div>
    </div>
      <Services/>
      <Brand/>
    </div>
  )
}

export default About
