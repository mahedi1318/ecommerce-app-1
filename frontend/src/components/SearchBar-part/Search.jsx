import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';

const Search = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false)
    const location = useLocation()

    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }, [location])


  return showSearch && visible ? (
    <>
      <div>
        <div className="container">
            <div className='border-t border-b bg-gray-50 text-cente flex items-center justify-center'>
                <div className="border inline-flex items-center justify-center border-b-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-1/2 ">
                    <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-[16px] josefin_sans' type="text" placeholder='Search' />
                    <div>
                        <IoSearch className='text-[25px]' />
                    </div>
                </div>
                <div>
                    <RxCross2 onClick={()=> setShowSearch(false)} className=' text-[25px]' />
                </div>
            </div>
        </div>
      </div>
    </>
  ) : null
}

export default Search
