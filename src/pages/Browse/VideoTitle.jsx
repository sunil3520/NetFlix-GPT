import React from 'react'
import { Link } from 'react-router-dom'

const VideoTitle = ({title,overview,movieId}) => {
    title = title.split(" ")[0] 
    
  return (
    <div className=' absolute pt-[15%] px-12 bg-gradient-to-r from-black text-white w-full aspect-video'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 w-1/4'>{overview}</p>
        <div>
            <Link to={`/browse/${movieId}`}><button className='px-12 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>Play</button></Link>
            <button className='ml-2 px-8 py-2 bg-gray-600 text-black rounded-md hover:bg-opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle