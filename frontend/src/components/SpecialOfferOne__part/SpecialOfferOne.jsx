import React from 'react'
import specialOfferImg from "../../assets/images/SpecialOffee.png"
import { Link } from 'react-router-dom'


    const bgImg = {
        backgroundImage: `url(${specialOfferImg})`,
        backgroundSize: "cover",
        backgroundPosition: "40%",
        backgroundRepeat: "no-repeat"
    }


const SpecialOfferOne = () => {
  return (
    <>
      <main className='mt-[50px] sm:mt-[70px]' style={bgImg}>
        <section className='w-full py-[60px] sm:py-[130px]'>
            <div className="container">
                <div className='text-center'>
                    <h5 className='josefin_sans text-[20px] font-medium text-[#f79837]'>TRENDING</h5>
                    <h2 className='josefin_sans text-[40px] font-bold text-[#fff]'>New Fashion</h2>
                    <p className='josefin_sans text-[16px] sm:text-[18px] font-normal text-[#fff] [215px] sm:w-[415px] m-auto'>Consectetur adipisicing elit. Dolores nisi distinctio magni, iure deserunt doloribus optio</p>
                    <Link className=' inline-block mt-6 px-7 py-3 bg-[#fff] text-[#444] josefin_sans text-[18px] font-normal hover:bg-black hover:text-[#fff] transition-all duration-150' to="/collection">Shop Now</Link>
                </div>
            </div>
        </section>
      </main>
    </>
  )
}

export default SpecialOfferOne










