import React from 'react'
import MovieList from '../../components/common/MovieList'

const SecondaryContainer = () => {
  return (
    <div className ="bg-black">
     <div className = "mt-0 lg:-mt-[17%] relative z-40">
     <MovieList title ={"Now Playing"}/>
     <MovieList title ={"Popular"}/>
      <MovieList title ={"Trending"}/>
     </div>
    </div>
  )
}

export default SecondaryContainer