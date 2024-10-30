import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="mt-[70px]">
        <div className="container">
          <div className="flex flex-col md:grid grid-cols-[3fr_1fr_1fr]">
            <div className='mb-6 md:mb-0'>
              <h1 className='josefin_sans text-[18px] font-medium'>Ecommerce-app</h1>
              <p className='josefin_sans text-[14px] sm:text-[15px] md:text-[14px] font-medium md:w-2/3 mt-5 text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ut earum commodi suscipit aperiam fugit deserunt?
                 Recusandae cumque necessitatibus, blanditiis, ipsa autem quae, cupiditate corporis fuga repellat enim tempore nisi.
                  In provident rem optio porro nulla,</p>
            </div>
            <div className='mb-6 md:mb-0'>
              <p className='roboto_thin text-[21px] font-bold text-gray-700'>COMPANY</p>
              <ul className='josefin_sans mt-4 flex flex-col gap-2 text-gray-600'>
                <li>
                  <Link to="/">Home</Link>                 
                </li>
                <li>
                  <Link to="/about">About us</Link> 
                </li>
                <li>
                  <Link to="/">Delivery</Link>
                </li>
                <li>
                  <Link to="/">Privacy policy</Link>
                </li>
              </ul>
            </div>
            <div className=''>
              <p className='roboto_thin text-[21px] font-bold text-gray-700'>GET IN TOUCH</p>
              <ul className='josefin_sans mt-4 flex flex-col gap-2 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>
                  <Link to="/"> Contact@gmail.com</Link>
                </li>                
              </ul>
            </div>
          </div>          
        </div>
        {/* ***************Sub Footer part**************** */}
        <div className='text-center mt-10'>
          <div className="container">
            <hr className='border-gray-200'/>
            <p className='py-5 josefin_sans text-[16px] font-medium text-gray-500'> Copyright 2024@ forever.com - All Right Reseved.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
