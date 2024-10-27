import React, { useContext, useEffect, useState } from 'react'
import Title from '../Title/Title'
import { ShopContext } from '../../context/ShopContext'
import ProductItem from '../ProductItem-Part/ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [ bestseller, setBestseller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestseller(bestProduct.slice(0,5))
    },[])

  return (
    <>
      <div className='mt-[100px]'>
        <div className="container">
            <div className='text-center josefin_sans text-[30px] font-semibold'>
                <Title text1={"BEST"} text2={"SELLERS"}/>
                <p className='w-3/4 m-auto josefin_sans text-[17px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. exercitationem officia atque dicta?</p>
            </div>
            {/* ********************** */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6 mt-[10px] sm:mt-[50px]'>
                {bestseller.map((item, index)=>(                   
                    <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
                ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default BestSeller
