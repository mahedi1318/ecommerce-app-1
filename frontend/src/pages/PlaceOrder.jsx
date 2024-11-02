import React, { useState } from 'react'
import Title from '../components/Title/Title'
import CartTotal from '../components/CartTotal-part/CartTotal'
import { Link } from 'react-router-dom'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod')

  return (
    <div className=''>
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-15 min-h-[80vh] border-t">
          {/* ---------------------Left Side bAR----------------- */}
          <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
            <div className="text-[20px] sm:text-[30px] josefin_sans font-semibold my-3">
              <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
            </div>
            <div className="flex gap-3 ">
              <input className='border border-gray-500 rounded w-full px-3.5 py-1.5 josefin_sans' type="text" placeholder='First name' />
              <input className='border border-gray-500 rounded w-full px-3.5 py-1.5 josefin_sans' type="text" placeholder='Last name' />
            </div>
            <input className='border border-gray-500 rounded w-full px-3.5 py-1.5 josefin_sans' type="email" placeholder='Email address' />
            <input className='border border-gray-500 rounded w-full px-3.5 py-1.5 josefin_sans' type="text" placeholder='Street' />
            <div className="flex gap-3">
              <input className='border border-gray-500 rounded w-full px-3.5 py-1.5 josefin_sans' type="text" placeholder='City' />
              <input className='border border-gray-500 rounded w-full px-3.5 py-1.5 josefin_sans' type="text" placeholder='State' />
            </div>
            <div className="flex gap-3">
              <input className='border border-gray-500 rounded w-full px-3.5 py-1.5 josefin_sans' type="number" placeholder='Zipcode' />
              <input className='border border-gray-500 rounded w-full px-3.5 py-1.5 josefin_sans' type="text" placeholder='Country' />
            </div>
            <input className='border border-gray-500 rounded w-full px-3.5 py-1.5 josefin_sans' type="number" placeholder='Phone' />
          </div>
           {/* ---------------------Right Side bAR----------------- */}
           <div className="mt-8">
            <div className="mt-8 min-w-80">
              <CartTotal/>
            </div>
            <div className="mt-12 text-[20px] josefin_sans font-semibold">
              <Title text1={'PAYMENT'} text2={'METHOD'}/>
                {/* ---------------------Payment Method----------------- */}
                <div className="flex flex-col gap-3 lg:flex-row">
                  <div onClick={()=>setMethod('bkash')} className="flex items-center gap-3 border py-2 px-4 cursor-pointer">
                    <p className={`min-w-3.5 h-3.5 rounded-full border ${method === 'bkash' ? 'bg-green-500' : ''}`}></p>
                    <p className='text-[#D12053] josefin_sans text-[16px] font-normal'>Bkash</p>                    
                  </div>
                  <div onClick={()=>setMethod('nagad')} className="flex items-center gap-3 border py-2 px-4 cursor-pointer">
                    <p className={`min-w-3.5 h-3.5 rounded-full border ${method === 'nagad' ? 'bg-green-500' : ''}`}></p>
                    <p className='text-[#F6921E] josefin_sans text-[16px] font-normal'>Nagad</p>                    
                  </div>
                  <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border py-2 px-4 cursor-pointer">
                    <p className={`min-w-3.5 h-3.5 rounded-full border ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
                    <p className='text-gray-500 josefin_sans text-[16px] font-normal'>Cash on delivery</p>                    
                  </div>
                </div>
                <div className="w-full text-end mt-10">
                  <Link to="/orders">
                  <button className='bg-black text-white px-12 py-3 josefin_sans text-[16px] font-normal rounded'>PLACE ORDER</button></Link>
                </div>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
