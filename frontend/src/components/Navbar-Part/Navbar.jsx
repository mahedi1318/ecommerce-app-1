import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {

    const [visible, setVisible] = useState(false)

    const {setShowSearch} = useContext(ShopContext)

  return (
    <>
    <div className='py-5 bg-[#dbdbdb]'>
        <div className='container'>
            <div className="flex justify-between items-center">
                {/* ****************logo************ */}
                <div>
                    <Link to="/">
                        <h1 className='josefin_sans text-[18px] font-medium'>Ecommerce-app</h1>
                    </Link>
                </div>

                 {/* ****************menu************ */}
                 <div>
                    <ul className='hidden sm:flex gap-8 '>
                        <NavLink to="/" className="flex flex-col items-center">
                            <p className='josefin_sans text-[15px] font-medium'>HOME</p>
                            <hr className='w-2/4 h-[2px] border-none bg-gray-500 hidden'  />
                        </NavLink>
                        <NavLink to="/collection" className="flex flex-col items-center">
                            <p className='josefin_sans text-[15px] font-medium'>COLLECTION</p>
                            <hr className='w-2/4 h-[2px] border-none bg-gray-500 hidden'  />
                        </NavLink>
                        <NavLink to="/about" className="flex flex-col items-center">
                            <p className='josefin_sans text-[15px] font-medium'>ABOUT</p>
                            <hr className='w-2/4 h-[2px] border-none bg-gray-500 hidden'  />
                        </NavLink>
                        <NavLink to="/contact" className="flex flex-col items-center">
                            <p className='josefin_sans text-[15px] font-medium'>CONTACT</p>
                            <hr className='w-2/4 h-[2px] border-none bg-gray-500 hidden'  />
                        </NavLink>
                    </ul>
                 </div>

                 {/* ****************icon************ */}
                 <div>
                    <div className='flex items-center gap-4 text-[23px] font-bold'>
                        <IoSearch onClick={()=>setShowSearch(true)} className='' />
                        <div className='group relative'>
                            <CiUser />
                            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-5'>
                                <div className='flex flex-col gap-2 w-[240px] py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                                    <p className='cursor-pointer josefin_sans text-[17px] font-medium hover:text-black'>My Protfolio</p>
                                    <p className='cursor-pointer josefin_sans text-[17px] font-medium hover:text-black'>Orders</p>
                                    <div>
                                        <p className='cursor-pointer josefin_sans text-[17px] font-medium hover:text-black'>Dark theme</p>
                                    </div>
                                    <p className='cursor-pointer josefin_sans text-[17px] font-medium hover:text-black'>Logout</p>
                                </div>
                            </div>
                        </div>
                        <Link to="/cart" className='relative'>
                            <IoBagOutline />
                            <p className='absolute bottom-[-7px] right-[-7px] w-5 rounded-full bg-slate-600 leading-5 text-white text-center aspect-square text-[11px] josefin_sans'>10</p>
                        </Link>
                    {/* ****************Responsive Icon************ */}
                        <div>
                            <FaBars onClick={()=>setVisible(true)} className='cursor-pointer sm:hidden w-9 text-[30px]' />
                        </div>
                    </div>
                    {/* ****************Responsive sidebar menu************ */}
                    <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-[#dbdbdb] transition-all duration-500 ${visible ? "w-full" : "w-0"}`}>
                        <div className='flex flex-col text-[#444] p-4'>
                            <div className='flex items-center cursor-pointer mb-8' onClick={()=>setVisible(false)}>
                                <MdArrowBackIosNew className='text-[14px]' />
                                <p className='roboto_thin text-[15px] font-medium'>Back</p>
                            </div>                          
                                <NavLink onClick={()=>setVisible(false)} to="/" className="josefin_sans text-[15px] font-semibold py-2 pl-1 border-b border-[#c0bfbf]">HOME</NavLink>
                                <NavLink onClick={()=>setVisible(false)} to="/collection" className="josefin_sans text-[15px] font-semibold py-2 pl-1 border-b border-[#c0bfbf]">COLLECTION</NavLink>
                                <NavLink onClick={()=>setVisible(false)} to="/about" className="josefin_sans text-[15px] font-semibold py-2 pl-1 border-b border-[#c0bfbf]">ABOUT</NavLink>
                                <NavLink onClick={()=>setVisible(false)} to="/contact" className="josefin_sans text-[15px] font-semibold py-2 pl-1 border-b border-[#c0bfbf]">CONTACT</NavLink>                                                    
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>   
    </>
  )
}

export default Navbar
