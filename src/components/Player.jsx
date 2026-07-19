import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { playerContext } from '../context/PlayerContext'

const Player = () => {

    const { seekBar, seekBg, playStatus, play, pause, track, time, previous, next, seekSong } = useContext(playerContext)

  return (
    <div className='text-white h-[10%] bg-black flex justify-between items-center px-4  '>
        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12' src={track.image} alt="songThunnail" />
            <div>
                <h3>{track.name.slice(0,34)}</h3>
                <p className='font-light'>{track.desc.slice(0,36)}...</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex items-center justify-center gap-3'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="shuffleIcon" />
                <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="previousIcon" />
                {
                    playStatus
                    ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="pauseIcon" /> 
                    : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="playIcon" />
                }
                
                <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="nextIcon" />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="loopIcon" />
            </div>
            <div onClick={seekSong} className='flex items-center justify-center gap-5'>
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-200 rounded-full cursor-pointer '>
                    <hr ref={seekBar} className='h-1 border-none bg-green-500 rounded-full w-0 ' />
                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>
        </div>

        <div className='hidden lg:flex items-center justify-center gap-2 pt-2 opacity-75'>
            <img className='w-4' src={assets.play_icon} alt="playIcon" />
            <img className='w-4' src={assets.mic_icon} alt="micIcon" />
            <img className='w-4' src={assets.queue_icon} alt="queueIcon" />
            <img className='w-4' src={assets.speaker_icon} alt="speakerIcon" />
            <img className='w-4' src={assets.volume_icon} alt="volumeIcon" />
            <div className='w-12 h-0.5 bg-white rounded-full'></div>
            <img className='w-4' src={assets.mini_player_icon} alt="miniplayerIcon" />
            <img className='w-4' src={assets.zoom_icon} alt="zoomIcon" />
        </div>
    </div>
  )
}

export default Player
