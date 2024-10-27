import React from 'react'
import heroImg from "../../assets/images/hero.jpg"

const Hero = () => {
  return (
    <>
      <div>
        <div className="container">
            <div className="flex flex-col sm:flex-row border-2 border-[#d4d4d4]">
                {/* *********Hero Left Side******** */}
                <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                    <div className='text-[#414141]'>
                        <div className='flex items-center gap-3'>
                            <p className='w-12 md:w-16 h-[2px] bg-[#696969]'></p>
                            <p className='roboto_thin text-[16px] font-medium text-[#696969]'>OUR BESTSELLERS</p>
                        </div>  
                        <h1 className='josefin_sans sm:py-3 mb:text-[37px] sm:text-[47px] font-medium leading-relaxed'>Latest Arrivvals</h1>
                        <div className='flex items-center gap-3'>
                            <p className='roboto_thin text-[16px] font-medium text-[#696969]'>SHOP NOW</p>
                            <p className='w-12 md:w-16 h-[2px] bg-[#696969]'></p>
                        </div>                        
                    </div>
                  
                </div>
                {/* *********Hero right Side******** */}
                <div className='w-full sm:w-1/2'>
                    <img className='w-full object-cover' src={heroImg} alt="" />
                </div>              
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero
