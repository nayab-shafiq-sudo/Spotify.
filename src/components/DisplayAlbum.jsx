import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import { playerContext } from '../context/PlayerContext'

const DisplayAlbum = () => {

  const { playWithId } = useContext(playerContext)

    const { id } = useParams()
    // console.log(id)
    const album = albumsData[id]
    // console.log(album)

  return (
    <>
      <Navbar/>
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded' src={album.image} alt="albumThubnail" />
        <div className='flex flex-col'>
            <p className='font-semibold'>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{album.name}</h2>
            <h4>{album.desc}</h4>
            <p className='mt-1'>
                <img className='inline-block w-5' src={assets.spotify_logo} alt="spotifyLogo" />
                <b> Spotify </b>
                 • 2,084,273 Likes
                 • <b>50 Songs </b>
                 about 2hr 30min
            </p>
        </div>
      </div>

      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="colocIcon" />
      </div>

      <hr />
      

        {songsData.map((item, idx)=>{
            return (
                
                    <div onClick={()=>playWithId(item.id)} key={item.id} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center justify-start text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                        <p className='text-white'><b className='mr-4 text-[#a7a7a7]'>{idx+1}</b>
                            <img className='inline w-10 mr-5' src={item.image} alt="songThubnaik" />
                            {item.name}
                        </p>
                        <p className='text-[15px]'>{album.name}</p>
                        <p className='text-[15px] hidden sm:block'>5 Days ago</p>
                        <p className='text-[15px] text-center'>{item.duration}</p>
                    </div>
                
            )    
        })}

    </>
  )
}

export default DisplayAlbum
