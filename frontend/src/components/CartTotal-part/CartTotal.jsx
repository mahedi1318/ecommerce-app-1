import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import Title from '../Title/Title'

const CartTotal = () => {

    const {currency, delivery_fee, getCartAmount} = useContext(ShopContext)

  return (
    <div className='w-full mt-[40px]'>
      <div className="josefin_sans text-[30px] font-semibold">
        <Title text1={'CART'} text2={'TOTALS'}/>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex justify-between">
            <p className='josefin_sans text-[17px] font-normal'>Subtotal</p>
            <p className='josefin_sans text-[17px] font-normal'>{currency} {getCartAmount()}.00</p>
        </div>
        <hr/>
        <div className="flex justify-between">
            <p className='josefin_sans text-[17px] font-normal'>Shopping Fee</p>
            <p className='josefin_sans text-[17px] font-normal'>{currency} {delivery_fee}.00</p>
        </div>
        <hr/>
        <div className="flex justify-between">
            <b className='josefin_sans text-[20px]'>Total</b>
            <b className='josefin_sans text-[20px]'>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
