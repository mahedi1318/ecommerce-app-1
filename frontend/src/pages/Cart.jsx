import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title/Title';
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {

  const {products, currency, cartItem, updateQuantity} = useContext(ShopContext);
  const [cartData, setCartData] = useState([])


  useEffect(()=>{
    const tampData = [];
    for(const items in cartItem){
      for(const item in cartItem [items]){
        if(cartItem[items][item] > 0) {
          tampData.push({
            id: items,
           size: item,
           puantity: cartItem[items][item],
          })
        }
      }
      setCartData(tampData)
    }
  },[cartItem])

  return (
    <div className='border-t pt-14'>
      <div className="container">
        <div className="josefin_sans text-[30px] font-semibold">
          <Title text1={'YOUR'} text2={'CART'}/>
        </div>
        <div>
          {cartData.map((item,index)=>{

            const productData = products.find((product)=> product.id === item.id);

            return(
              <div key={index} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                <div className="flex items-start gap-6">
                  <img className='w-16 sm:w-20' src={productData.image} alt="" />
                  <div className="">
                    <p className='josefin_sans text-[15px] sm:text-[20px]'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 josefin_sans'>{item.size}</p>
                    </div>
                  </div>
                </div>  
                <input onChange={(e)=> e.target.value === "" || e.target.value === "0" ? null : updateQuantity(item.id, item.size,Number(e.target.value)) } className='border max-w-10 sm:max-w-20 px=1 sm:px-2 py-1' type="number" min={1} defaultValue={item.puantity}/>  
                <div className='text-[25px]'>
                  <RiDeleteBin6Line onClick={()=> updateQuantity(item.id,item.size,0)} />
                </div>           
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
