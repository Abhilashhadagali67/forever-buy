import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import Product from '../pages/Product'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const { products } = useContext(ShopContext)
    const [bestSeller, setbestSeller] = useState([])

    useEffect(() => {
      const bestProducts = products.filter((item)=>(item.bestseller))
      setbestSeller(bestProducts.slice(0,5))
    }, [])
    

  return (
    <div className='m-5'>
        <div className='text-3xl text-center py-8'>
            <Title text1={'BEST'} text2={'SELLERS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the. </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
             {bestSeller.map((item,index)=>(
            <ProductItem key={index} id={item._id}  image={item.image} name={item.name} price={item.price} />
          ))}
        </div>
    </div>
  )
}

export default BestSeller