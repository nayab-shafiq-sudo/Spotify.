import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
      <Navbar/>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
            {albumsData.map((item)=>{
                return <AlbumItem key={item.id} image={item.image} name={item.name} desc={item.desc} bgcolor={item.bgColor} id={item.id} />
            })}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hit</h1>
        <div id='hideScroll' className='flex overflow-auto'>
            {songsData.map((item)=>{
                return <SongItem key={item.id} image={item.image} name={item.name} desc={item.desc} duration={item.duration} file={item.file} id={item.id} />
            })}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
