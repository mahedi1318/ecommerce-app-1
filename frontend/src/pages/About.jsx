import React from 'react'
import Title from '../components/Title/Title'
import AboutImg from "../assets/images/aboutImage/about.jpg"
import NewsLetter from '../components/NewsLetter-part/NewsLetter'


const About = () => {
  return (
    <>
      <div className="">
        <div className="container">
          <div className="text-center border-t josefin_sans text-[30px] font-semibold pt-10">
            <Title text1={'About'} text2={'US'}/>
          </div>
          <div className="flex flex-col sm:flex-row gap-16 my-10">
            <div className="">
              <img className='w-full md:max-w-[500px] h-[450px] object-cover rounded' src={AboutImg} alt="" />
            </div>
            <div className="flex flex-col gap-6 justify-center">
              <p className='  md:w-[615px] josefin_sans text-[16px] font-normal text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quo fugit expedita dignissimos enim ipsum labore excepturi modi ad accusantium,
                 magnam suscipit aspernatur laboriosam voluptate, omnis nihil soluta saepe mollitia!</p>
              <p className='  md:w-[615px] josefin_sans text-[16px] font-normal text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita provident ducimus quis, repellat veniam vitae unde. Dolores nulla odio at? Eaque obcaecati dolorem eligendi provident consequuntur asperiores perferendis quos omnis, animi aliquam,
                 ex facilis dolor debitis beatae possimus officiis ad consectetur minima non inventore odio minus suscipit. Qui, sed voluptate?</p>
              <b className='josefin_sans text-[20px] font-semibold'>Our Mission</b>
              <p className='  md:w-[615px] josefin_sans text-[16px] font-normal text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis id doloribus expedita, facilis dignissimos quaerat praesentium optio at tempore vero. Atque dolores,
                 corporis magni beatae sequi libero itaque porro adipisci!</p>
            </div>
          </div>
          {/* ****************Why Choose us part*********** */}
          <div className="josefin_sans text-[25px] font-semibold py-4">
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="border px-10 py-8 md:px-14 sm:py-12 flex flex-col gap-5 ">
              <b className='josefin_sans text-[25px] font-semibold text-gray-900'>Quality Assurance:</b>
              <p className='josefin_sans text-[16px] font-normal text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur illo aut repellat unde quaerat quod saepe temporibus. Odit, autem architecto!</p>
            </div>
            <div className="border px-10 py-8 md:px-14 sm:py-12 flex flex-col gap-5 ">
              <b className='josefin_sans text-[25px] font-semibold text-gray-900'>Convenience:</b>
              <p className='josefin_sans text-[16px] font-normal text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur illo aut repellat unde quaerat quod saepe temporibus. Odit, autem architecto!</p>
            </div>
            <div className="border px-10 py-8 md:px-14 sm:py-12 flex flex-col gap-5 ">
              <b className='josefin_sans text-[25px] font-semibold text-gray-900'>Exceptional Customer Service:</b>
              <p className='josefin_sans text-[16px] font-normal text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur illo aut repellat unde quaerat quod saepe temporibus. Odit, autem architecto!</p>
            </div>
          </div>
          {/* ****************NewsLetter part*********** */}
          <div className="mb-[70px] md:mb-[100px]">
            <NewsLetter/>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
