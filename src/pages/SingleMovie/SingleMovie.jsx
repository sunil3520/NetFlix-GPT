import React from "react";
import useSingleMovie from "../../hooks/useSingleMovie";
import { useParams } from "react-router-dom";
import VideoContainer from "./VideoContainer";
import MoviesSuggestion from "./MoviesSuggestion";

const SingleMovie = () => {
  const { movieId } = useParams();
  useSingleMovie(movieId);

 

  return (
    <div>
      <VideoContainer/>
      <MoviesSuggestion/>
      
    </div>
  );
};

export default SingleMovie;
