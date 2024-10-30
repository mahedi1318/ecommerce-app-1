import React from 'react'

const NewsLetter = () => {

  const onSubmitHandeler = (event) => {
    event.preventDefault() 
  }

  return (
    <>
      <div className="text-center mt-[70px]">
        <div className="container">
            <p className='josefin_sans text-[30px] font-bold text-gray-700'>Subscribe now & get 20% off</p>
            <p className='josefin_sans text-[16px] font-normal text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, perferendis.</p>
            <form onSubmit={onSubmitHandeler} action="" className='w-full sm:w-1/2 flex items-center m-auto border gap-3 pl-3 my-6 josefin_sans'>
                <input className='w-full py-3 sm:flex-1 outline-none text-[15px]' type="email" placeholder='Enter your email' required/>
                <button type='submit' className='bg-black text-white text-[16px] px-10 py-4'>Subscribe</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default NewsLetter
