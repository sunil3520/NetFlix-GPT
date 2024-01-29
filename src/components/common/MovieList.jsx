import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ title }) => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  return (
    <div className="ml-12">
        <h1 className="text-2xl  text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
