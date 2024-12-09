import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t '>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='flex flex-col my-10 justify-center md:flex-row gap-10 mb-28'> 
        <img src={assets.contact_img} className='w-full md:max-w-[480px] ' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>12th Cross Siddaveerappa badavane,<br /> Davangere 577001, Karnataka</p>
            <p className='text-gray-500'>Tel: 9480350686 <br /> Email: abhilashhadagali67@gmail.com</p>
            <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
            <p className='text-gray-500'>Learn more about our teams and job openings.</p>

            <button className='text-sm px-8 py-4 border border-black hover:bg-black hover:text-white transition-all duration-500 '>Explore Jobs</button>
        </div>

      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact
