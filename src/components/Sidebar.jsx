import React from 'react'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex '>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around '>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img className='w-5' src={assets.home_icon} alt="homeIcon" />
            <p className='font-bold'>Home</p>
        </div>

        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img className='w-5' src={assets.search_icon} alt="searchIcon" />
            <p className='font-bold'>Search</p>
        </div>
      </div>

      <div className='bg-[#121212] h-[85%] rounded '>
        <div className='flex items-center justify-between p-4'>
            <div className='flex items-center gap-2'>
                <img className='w-8' src={assets.stack_icon} alt="stackIcon" />
                <p className='font-semibold'>Your Library</p>
            </div>
            <div className='flex items-center gap-2'>
                <img className='w-5' src={assets.arrow_right} alt="stackIcon" />
                <img className='w-5' src={assets.plus_icon} alt="plusIcon" />
            </div>
        </div>

        <div className='m-2 p-4 pl-4 bg-[#242424] font-semibold flex flex-col gap-1 items-start justify-start  '>
            <h3 className='capitalize'>creat your first playlist</h3>
            <p className='font-light capitalize'>It's easy we'll help you</p>
            <button className='bg-white text-black text-[15px] px-4 py-1.5 mt-4 rounded-full'>Creat Playlist</button>
        </div>

        <div className='m-2 p-4 pl-4 bg-[#242424] font-semibold flex flex-col gap-1 items-start justify-start mt-4  '>
            <h3 className='capitalize'>let's find some podcasts to follow</h3>
            <p className='font-light capitalize'>we will keep you updated on new episodes</p>
            <button className='bg-white text-black text-[15px] px-4 py-1.5 mt-4 rounded-full'>Browse Podcasts</button>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar
