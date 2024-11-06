import React from 'react'
import Title from '../components/Title/Title'
import ContactImg from "../assets/images/contactImg/contact.jpg"
import NewsLetter from '../components/NewsLetter-part/NewsLetter'


const Contact = () => {
  return (
    <>
      <div className="">
        <div className="container">
          <div className="josefin_sans text-[25px] font-semibold text-center pt-10 border-t">
            <Title text1={'Contact'} text2={'US'}/>
          </div>
          <div className="my-10 flex flex-col md:flex-row justify-center gap-10 mb-28">
            <div className="">
              <img className='w-full md:max-w-[500px] h-[450px] object-cover rounded' src={ContactImg} alt="" />
            </div>
            <div className="flex flex-col gap-6 justify-center items-start">
              <p className='josefin_sans text-[30px] font-semibold text-gray-700'>Our Stor</p>
              <p className='josefin_sans text-[15px] font-normal text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
              <p className='josefin_sans text-[15px] font-normal text-gray-500'>Tel (451) 555-0123 <br /> Email: admin@gmail.com</p>
              <p className='josefin_sans text-[20px] font-bold text-gray-700'>Careers at Forever</p>
              <p className='josefin_sans text-[15px] font-normal text-gray-500'>Learn more about our teams and job openings</p>
              <button className='josefin_sans text-[15px] font-medium border border-gray-400 px-8 py-4 hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
            </div>
          </div>
          {/* ******************NewsLetter part***************** */}
          <div className="mb-[70px] md:mb-[100px]">
            <NewsLetter/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
