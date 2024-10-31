import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { FaStar } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";

const Product = () => {

  const {productId} = useParams()
  const {products, currency} = useContext(ShopContext) 
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item)=>{
      if(item.id === productId){
        setProductData(item)
        setImage(item.image)       
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData()
  },[productId])

  return productData ? (
    <div className='border-t-2 border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='container'>
        <div className='flex gap-12 sm:gap-12  md:gap-8 lg:gap-12 flex-col sm:flex-row'>          
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='sm:w-[28%] md:w-[20%] lg:w-[28%] w-[48%] h-[200px] md:h-[100px] lg:h-[200px]'>
              <img className='h-full object-cover rounded-md' src={image} alt="" />
            </div>
            <div className='w-full sm:w-[65%] md:w-[85%] h-[400px] sm:h-[500px] md:h-[400px] lg:h-[600px]'>
              <img className='w-full h-full object-cover rounded-md' src={image} alt="" />
            </div>
          </div>
          {/* ******************product Info******************* */}
          <div className='flex-1'>
            <h1 className='josefin_sans text-3xl font-semibold text-gray-700 mt-5'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2 '>
              <FaStar className='text-[#f59236]' />
              <FaStar className='text-[#f59236]' />
              <FaStar className='text-[#f59236]' />
              <FaStar className='text-[#f59236]' />
              <IoIosStarOutline className='text-[#f59236]' />
              <p className='pl-2 josefin_sans text-xl'>(122)</p>
            </div>
            <p className='roboto_thin text-3xl font-semibold mt-5'>{currency} {productData.price}</p>
            <p className='mt-5 josefin_sans text-[16px] font-medium md:w-3/4 text-gray-500'>{productData.description}</p>
            <div className='flex flex-col gap-2 my-8'>
              <p className='josefin_sans text-xl font-medium'>Select Size</p>
              <div className='flex gap-5 josefin_sans text-md font-medium'>
                {productData.sizes.map((item,index)=>(
                  <button onClick={()=>setSize(item)} className={`border bg-gray-100 py-2 px-4 ${item === size ? "border-orange-300" : "" }`} key={index}>{item}</button>
                ))}
              </div>
            </div>
            <button className='josefin_sans text-[14px] font-normal px-8 py-3 bg-black text-white rounded-md active:bg-gray-500'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className='josefin_sans text-[15px] font-normal text-gray-400 flex flex-col gap-1 mt-6'>
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>          
        </div>
      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product