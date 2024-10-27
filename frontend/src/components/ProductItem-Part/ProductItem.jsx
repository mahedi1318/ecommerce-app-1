import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const ProductItem = ({id, image, name, price}) => {

        const {currency} = useContext(ShopContext)

  return (
    <>
      <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden h-[230px] sm:h-[350px]'>
            <img className='w-full h-full object-cover hover:scale-110 transition-all ease-in-out' src={image} alt="" />
        </div>
        <p className='josefin_sans text-[15px] font-bold mt-3 text-gray-500'>{name}</p>
        <p className='josefin_sans text-[16px] font-bold text-gray-700'>{currency}{price}</p>
    </Link>
    </>
  )
}

export default ProductItem
