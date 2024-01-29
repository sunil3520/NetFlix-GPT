import { useEffect } from "react";
import { addNowPlayingMovies } from "../redux/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";


 const useNowPlayingMovies = () =>{
  const dispatch = useDispatch();

    const getNowPlayingMovies = async() =>{
        const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1',API_OPTIONS);
        const data = await res.json();
        console.log(data?.results);
        dispatch(addNowPlayingMovies(data?.results))
      }
    
      useEffect(()=>{
        getNowPlayingMovies()
      },[])
 }

 export default useNowPlayingMovies;