import React from 'react'
import { IMAGE_CDN_URL } from '../../utils/constant'

const MovieCard = ({poster_path,title}) => {
  return (
    <div className='w-40 p-2 hover:w-44 cursor-pointer '>
        <img src={IMAGE_CDN_URL+poster_path} alt={title} />
    </div>
  )
}

export default MovieCard