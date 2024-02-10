import React from 'react'
import { IMAGE_CDN_URL } from '../../utils/constant'
import { Link } from 'react-router-dom'

const MovieCard = ({poster_path,title,movieId}) => {
  return (
    <Link to={`/browse/${movieId}`}>
    <div className=' cursor-pointer w-24  md:w-40 rounded-md overflow-hidden border-2 border-transparent hover:border-white hover:scale-150 transition-all duration-300 ease-in-out  '>
        <img  src={IMAGE_CDN_URL+poster_path} alt={title} />
    </div>
    </Link>
  )
}

export default MovieCard