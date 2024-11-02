import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title/Title'

const Ordesr = () => {
  const {products, currency} = useContext(ShopContext)
  return (
    <div className='boder-t pt-16'>
      <div className="container">
        <div className="josefin_sans text-[30px] font-semibold">
          <Title text1={'MY'} text2={'ORDERS'}/>
        </div>
        <div className="">
          {products.slice(1,4).map((item,index)=>(
            <div key={index} className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-6">
                <img className='w-16 sm:w-20' src={item.image} alt="" />
                <div className="">
                  <p className='josefin_sans text-[17px] font-medium'>{item.name}</p>
                  <div className="flex items-center gap-3 mt-2 josefin_sans text-[15px] font-normal">
                    <p className='text-[18px] font-semibold'>{currency} {item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>                    
                  </div>
                  <p className='mt-2 josefin_sans text-[15px] font-normal'>Date <span className='text-gray-700'>25, jul, 2024</span></p>
                </div>
              </div>
              <div className="flex justify-between md:w-1/2">
                <div className="flex items-center gap-2">
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='josefin_sans text-[14px] md:text-[17px] font-normal'>Ready to shop</p>
                </div>
                <button className='border px-4 py-2 rounded-sm josefin_sans text-[16px] font-semibold'>Track Order</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ordesr

