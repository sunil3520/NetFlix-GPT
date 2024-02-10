import React from 'react'
import MovieList from '../../components/common/MovieList'

const SecondaryContainer = () => {
  return (
    <div className ="bg-black ">
     <div className = "mt-0 lg:-mt-[15%] relative z-40">
     <MovieList title ={"Now Playing"}/>
     <MovieList title ={"Popular"}/>
      <MovieList title ={"Trending"}/>
      <MovieList title ={"Horror"}/>
    
      <MovieList title ={"Upcomming"}/>
     </div>
    </div>
  )
}

export default SecondaryContainer