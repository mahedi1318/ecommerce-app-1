import React, { useContext, useEffect, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Title from '../components/Title/Title';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem-Part/ProductItem';


const Collection = () => {

  const {products} = useContext(ShopContext)
  const [ filterProduct, setFilterProduct] = useState([])
  const [showFilters, setShowFilters] = useState(false)
  const [category, setCategory] = useState([])
  const [subcategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relavent')


  const categoryHandeler = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }


  const SubCatecoryHandler = (e)=>{
    if(subcategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }


  const applyFilter = ()=>{
    let productCopy = products.slice();

    if(category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category))
    }

    if(subcategory.length > 0) {
      productCopy = productCopy.filter(item => subcategory.includes(item.subcategory))
    }

    setFilterProduct(productCopy)
  }


  // *******************shortProduct************

  const sortProduct = ()=>{
    let fpCopy = filterProduct.slice();
    switch(sortType){
      case "low-high":
        setFilterProduct(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

        case "high-low":
          setFilterProduct(fpCopy.sort((a,b)=>(b.price - a.price)));
          break;
          default:
            applyFilter();
            break;
    }
  }

  
  useEffect(()=>{
    applyFilter();
  },[category, subcategory])
  
  useEffect(()=>{
    sortProduct();
  }, [sortType])

  return (
    <>
    <div>
      <div className="container">
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-12 pt-10 border-t'>
          <div className="w-60">
            <p onClick={()=> setShowFilters(!showFilters)} className=' roboto_thin text-[25px] font-medium text-gray-600 flex items-center'>
              FILTERS
              <IoIosArrowForward className={`h-5 sm:hidden ${showFilters ? "rotate-90" : ""}`} />
            </p>
            {/* *****categoris filters***** */}
            <div className={`border border-gray-300 py-3 pl-5 my-3 ${showFilters ? "" : "hidden"} sm:block`}>
              <p className='mb-3 josefin_sans text-[16px] font-medium text-gray-700'>CATEGORIES</p>
              <div className='flex flex-col gap-2 josefin_sans text-[15px] font-normal text-gray-600'>
                <p className='flex gap-2 items-center'>
                  <input onChange={categoryHandeler} className='w-3' type="checkbox" value={'Men'}/> Men
                </p>
                <p className='flex gap-2 items-center'>
                  <input onChange={categoryHandeler} className='w-3' type="checkbox" value={'Women'}/> Women
                </p>
                <p className='flex gap-2 items-center'>
                  <input onChange={categoryHandeler} className='w-3' type="checkbox" value={'Kids'}/> Kids
                </p>
              </div>
            </div>
             {/* *****Subcategoris filters***** */}
             <div className={`border border-gray-300 py-3 pl-5 my-3 ${showFilters ? "" : "hidden"} sm:block`}>
              <p className='mb-3 josefin_sans text-[16px] font-medium text-gray-700'>TYPE</p>
              <div className='flex flex-col gap-2 josefin_sans text-[15px] font-normal text-gray-600'>
                <p className='flex gap-2 items-center'>
                  <input onChange={SubCatecoryHandler} className='w-3' type="checkbox" value={'Topwear'}/> Topwear
                </p>
                <p className='flex gap-2 items-center'>
                  <input onChange={SubCatecoryHandler} className='w-3' type="checkbox" value={'Bottomwear'}/> Bottomwear
                </p>
                <p className='flex gap-2 items-center'>
                  <input onChange={SubCatecoryHandler} className='w-3' type="checkbox" value={'WinterWear'}/> WinterWear
                </p>
              </div>
            </div>
          </div>
          {/* ********************************* */}
          <div className="flex-1">
            <div className=' block sm:flex justify-between items-end'>
              <div className='josefin_sans text-[20px] font-semibold '>
                <Title text1={"ALL"} text2={"COLLECTION"}/>
              </div>
                <select onChange={(e)=> setSortType(e.target.value)} className='border-2  border-gray-300 text-[16px] px-2 py-3'>
                    <option value="relavent">Sort by: Relavent</option>
                    <option value="low-high">Sort by: Low to High</option>
                    <option value="high-low">Sort by: High to Low</option>
                </select>
            </div>
            {/* ****************product side****************** */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 gap-y-6 mt-[10px] sm:mt-[50px]'">
              {filterProduct.map((item, index)=>(
                <ProductItem key={index}  id={item.id} image={item.image} name={item.name} price={item.price}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>     
    </>
  )
}

export default Collection
