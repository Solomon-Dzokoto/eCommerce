import React from 'react'
import pic1 from './assets/banner_img_01.jpg'

const Heroitem1 = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-wrap">
      <div className="  md:w-[45%]   lg:order-last mx-auto ">
          <img className="w-full h-auto mx-auto" src={pic1} alt="Banner"/>
        </div>
        <div className="w-full lg:w-1/2 mb-10  flex items-center">
          <div className="text-left self-center mx-8 md:ml-32 md:w-[550px] w-full">
            <h1 className="md:text-6xl text-5xl font-thin text-green-600 mb-3"><b>Dyne</b> eCommerce</h1>
            <h3 className="text-3xl mb-2 ">Tiny and Perfect eCommerce Template</h3>
            <p className='text-base' >
              Dyne Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). 
              This template is 100% free provided by <a rel="sponsored" className="text-green-600" href="https://templatemo.com" >TemplateMo</a> website. 
              Image credits go to <a rel="sponsored" className="text-green-600" href="https://stories.freepik.com/" >Freepik Stories</a>,
              <a rel="sponsored" className="text-green-600" href="https://unsplash.com/" >Unsplash</a> and
              <a rel="sponsored" className="text-green-600" href="https://icons8.com/">Icons 8</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heroitem1
