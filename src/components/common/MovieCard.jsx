import React from 'react'
import { IMAGE_CDN_URL } from '../../utils/constant'
import { Link } from 'react-router-dom'

const MovieCard = ({poster_path,title,movieId,index}) => {
  return (
    <Link to={`/browse/${movieId}`}>
    <div className='cursor-pointer hover:z-100  w-24  md:w-40   hover:scale-x-150 hover:scale-y-125 transition-traslate duration-300 ease-in-out'>
        <img className=' object-cover rounded-lg'   src={IMAGE_CDN_URL+poster_path} alt={title} />
    </div>
    </Link>
  )
}

export default MovieCard