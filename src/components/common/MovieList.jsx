import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ title }) => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const upcomingMovies = useSelector(store=>store.movies?.upcomingMovies)
  return (
    <div className="w-[100%]">
    {
      title === "Now Playing" &&
      <div className="ml-2 md:ml-12">
      <h1 className="text-[20px] font-medium mb-2 font-sans  text-[#CCC] ">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-x-2 my-8">
          {nowPlayingMovies?.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movieId={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
              />
            );
          })}
        </div>
      </div>
    </div>
    }
    {
      title === "Popular" &&
      <div className="ml-2 md:ml-12">
      <h1 className="text-[20px] font-medium mb-2 font-sans text-[#ccc]">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-x-2 my-8">
          {upcomingMovies?.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movieId={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
              />
            );
          })}
        </div>
      </div>
    </div>
    }
     {
      title === "Trending" &&
      <div className="ml-2  md:ml-12">
      <h1 className="text-[20px] font-medium mb-2 font-sans text-[#ccc] ">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-x-2 my-8">
          {upcomingMovies?.map((movie,index) => {
            return (
              <MovieCard
               index={index}
                key={movie.id}
                movieId={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
              />
            );
          })}
        </div>
      </div>
    </div>
    }
    </div>
  );
};

export default MovieList;
