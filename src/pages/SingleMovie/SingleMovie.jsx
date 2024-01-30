import React from "react";
import useSingleMovie from "../../hooks/useSingleMovie";
import { useParams } from "react-router-dom";
import Header from "../../components/common/Header";
import VideoContainer from "./VideoContainer";
import MoviesSuggestion from "./MoviesSuggestion";

const SingleMovie = () => {
  const { movieId } = useParams();
  useSingleMovie(movieId);

 

  return (
    <div>
      <Header />
      <VideoContainer/>
      <MoviesSuggestion/>
      
    </div>
  );
};

export default SingleMovie;
