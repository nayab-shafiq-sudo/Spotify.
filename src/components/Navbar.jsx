import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='w-full flex items-center justify-between font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>navigate(-1)} className='w-8 bg-black rounded-4xl p-2 cursor-pointer' src={assets.arrow_left} alt="arrowleftIcon" />
            <img onClick={()=>navigate(1)} className='w-8 bg-black rounded-4xl p-2 cursor-pointer' src={assets.arrow_right} alt="arrowrightIcon" />
        </div>
        
        <div className='flex items-center gap-2 '>
            <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
            <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
            <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcast</p>
        </div>

        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer '>Explore Premium</p>
            <p className='bg-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Install App</p>
            <p className='bg-purple-500 rounded-full w-7 h-7 flex items-center justify-center'>N</p>
        </div>
      </div>
    </>
  )
}

export default Navbar
