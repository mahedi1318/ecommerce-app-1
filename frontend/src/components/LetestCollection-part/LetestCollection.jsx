

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import Title from '../Title/Title';
import ProductItem from '../ProductItem-Part/ProductItem';

const LetestCollection = () => {

    let { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([])
    console.log(products)

    useEffect(()=>{
        setLatestProducts(products.slice(0,10))
    },[])
    console.log(latestProducts)

  return (
    <>
      <div className='my-10'>
        <div className='text-center josefin_sans text-[30px] font-semibold'>
            <Title text1={"LETEST"} text2={"COLLECTION"}/>
            <p className='w-3/4 m-auto josefin_sans text-[17px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. exercitationem officia atque dicta?</p>
        </div>

        {/* ******Rendaring product********* */}
        <div className="container">
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6 mt-[50px]'>
                {latestProducts.map((item, index)=>(
                    <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
                ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default LetestCollection
