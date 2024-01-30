import React from "react";
import { useSelector } from "react-redux";

const VideoContainer = () => {
    const singleMovie = useSelector(store=>store.movies.singleMovie);
    if(!singleMovie || !singleMovie.key){
        return;
    }
    const {key} = singleMovie;
    console.log(singleMovie,"singleMovie");
  return (
    <div>
      <iframe
      className=" w-screen aspect-video"
        
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1`}
        title="YouTube video player"
        
      ></iframe>
    </div>
  );
};

export default VideoContainer;
