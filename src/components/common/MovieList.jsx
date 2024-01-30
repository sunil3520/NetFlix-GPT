import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ title }) => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const upcomingMovies = useSelector(store=>store.movies?.upcomingMovies)
  return (
    <div>
    {
      title === "Now Playing" &&
      <div className="ml-12">
      <h1 className="text-2xl  text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
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
      <div className="ml-12">
      <h1 className="text-2xl  text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
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
    </div>
  );
};

export default MovieList;
