import React from 'react'
import image from './assets/banner_img_02.jpg'

const HeroItem2 = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-wrap">
        <div className=" md:w-[45%]   lg:order-last mx-auto ">
          <img className="w-full h-auto" src={image} alt="Banner"/>
        </div>
        <div className="w-full lg:w-1/2 mb-10  flex items-center">
          <div className="text-left self-center mx-8 md:ml-32 md:w-[550px] w-full">
            <h1 className="md:text-6xl text-5xl font-thin text-sky-500 mb-3"><b>MaaH</b> eCommerce</h1>
            <h3 className="text-4xl mb-2">Tiny and Perfect eCommerce Template</h3>
            <p className='text-base' >
            MaaH Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). 
              This template is 100% free provided by <a rel="sponsored" className="text-sky-500" href="https://templatemo.com" >TemplateMo</a> website. 
              Image credits go to <a rel="sponsored" className="text-sky-500" href="https://stories.freepik.com/" >Freebie Stories</a>,
              <a rel="sponsored" className="text-sky-500" href="https://unsplash.com/" >Unsplash</a> and
              <a rel="sponsored" className="text-sky-500" href="https://icons8.com/">Icons 8</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroItem2
