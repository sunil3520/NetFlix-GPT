import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerMovie = useSelector((store) => store.movies?.trailerMovie);
  if(!trailerMovie || !trailerMovie.key){
    return;
  }

  
  return (
    <div >
      <iframe
      className="w-full aspect-video" 
        src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow=""
      ></iframe>
    </div>
  );
};

export default VideoBackground;
