import React from 'react'
import { IMAGE_CDN_URL } from '../../utils/constant'
import { Link } from 'react-router-dom'

const MovieCard = ({poster_path,title,movieId}) => {
  return (
    <Link to={`/browse/${movieId}`}>
    <div className='w-40 p-2 hover:w-44 cursor-pointer '>
        <img src={IMAGE_CDN_URL+poster_path} alt={title} />
    </div>
    </Link>
  )
}

export default MovieCard