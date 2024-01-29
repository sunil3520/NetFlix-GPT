import { useDispatch } from "react-redux";
import {API_OPTIONS} from '../utils/constant'
import { addTrailerMovie } from "../redux/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
    const getTrailer = async () =>{
      let res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS)
      let data = await res.json();
      console.log(data);
  
      const filterData = data.results.filter((el)=>el.type==="Trailer")
      const trailerMovie = filterData.length ? filterData[0] : data.results[0];
      dispatch(addTrailerMovie(trailerMovie))
    }
  
    useEffect(()=>{
      getTrailer();
    },[])
}

export default useMovieTrailer