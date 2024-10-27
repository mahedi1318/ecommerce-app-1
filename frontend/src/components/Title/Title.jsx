import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <>
      <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-gray-500'>{text1} <span className='text-gray-700'>{text2}</span></p>
        <p className='w-8 h-[2px] sm:w-12 sm:h-1 bg-gray-700'></p>
      </div>
    </>
  )
}

export default Title