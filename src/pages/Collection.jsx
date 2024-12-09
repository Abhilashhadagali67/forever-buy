import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import { assets } from '../assets/assets'
import  Title  from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products, search , showSearch } = useContext(ShopContext)
  const [showFilter, setshowFilter] = useState(false)
  const [filterProducts, setfilterProducts] = useState([])
  const [category, setcategory] = useState([])
  const [subCategory, setsubCategory] = useState([])
  const [sortType, setsortType] = useState("relevant")


  const toggleCategory = (e)=>{

    if (category.includes(e.target.value)) {
      setcategory(prev => prev.filter(item => item!==e.target.value))
    }
    else{
      setcategory(prev => [...prev, e.target.value ])
    }
  }

  const toggleSubCategory = (e)=>{

    if (subCategory.includes(e.target.value)) {
      setsubCategory(prev => prev.filter(item => item!==e.target.value))
    }
    else{
      setsubCategory(prev => [...prev, e.target.value ])
    }
  }

  const applyFilter = ()=>{

    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) )
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    if(subCategory.length >0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setfilterProducts(productsCopy)
  }

    const sortProducts = ()=>{

      let fcopy = filterProducts.slice()

      switch(sortType){
        case 'Low-high':
          setfilterProducts(fcopy.sort((a,b)=>(a.price - b.price)));
          break;

        case 'High-low':
          setfilterProducts(fcopy.sort((a,b)=>(b.price - a.price)));
          break;
        
        default :
        applyFilter();
        break;
      }
    }

  useEffect(() => {
    applyFilter()
  }, [category,subCategory, search,showSearch])

  useEffect(() => {
    sortProducts();
  }, [sortType])
  
  

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t '>

      {/* Filter options */} 
      <div className='min-w-60 '>
        <p onClick={()=>setshowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90': ' '}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6  ${showFilter ? '': 'hidden'} sm:block `}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3 ' type="checkbox" value={'Men'} onChange={toggleCategory} name="" id="" /> Men
              </p>

              <p className='flex gap-2'>
                <input className='w-3 ' type="checkbox" value={'Women'} onChange={toggleCategory} name="" id="" /> Women
              </p>

              <p className='flex gap-2'>
                <input className='w-3 ' type="checkbox" value={'Kids'} onChange={toggleCategory} name="" id="" /> Kids
              </p>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6  ${showFilter ? '': 'hidden'} sm:block `}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3 ' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} name="" id="" /> Topwear
              </p>

              <p className='flex gap-2'>
                <input className='w-3 ' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} name="" id="" /> Bottomwear
              </p>

              <p className='flex gap-2'>
                <input className='w-3 ' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} name="" id="" /> Winterwear
              </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className='flex-1 '>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2 = {'COLLECTIONS'} />
          {/* Product Sort */}
          <select onChange={(e)=>setsortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2 '>
            <option value="Relevant">Sort by: Relevant</option>
            <option value="Low-high">Sort by: Low to High</option>
            <option value="High-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item,index)=>(
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))}
        </div>

      </div>
    </div>
  )
} 

export default Collection