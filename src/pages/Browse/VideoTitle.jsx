import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegPlayCircle } from "react-icons/fa";

const VideoTitle = ({title,overview,movieId}) => {
    title = title.split(" ");
    title = title.length>=2 ? title[0]+" "+ title[1]:title[0];
    
  return (
    <div className=' absolute pt-[15%] px-12 bg-gradient-to-r from-black text-white w-screen aspect-video'>
        <h1 className='font-bold text-3xl md:text-5xl lg:text-6xl'>{title}</h1>
        <p className='hidden sm:block md:py-6 w-[90%] md:w-2/3  lg:w-1/3'>{overview}</p>
        <div className='flex mt-24 sm:mt-0'>
            <Link to={`/browse/${movieId}`}><button className='flex items-center gap-4 px-4  md:px-8 cursor-pointer py-2 bg-white text-black rounded-md hover:bg-opacity-80'><span><FaRegPlayCircle className='text:2xl md:text-3xl'/></span>Play</button></Link>
            <button className='ml-2 px-4 md:px-8 py-2 bg-gray-600 cursor-pointer text-black rounded-md hover:bg-opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle