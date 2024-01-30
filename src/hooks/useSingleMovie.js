import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux";
import {addSingleMovie} from '../redux/moviesSlice'


const useSingleMovie = (movieId="41NUykFTZpQ") =>{
    const dispatch = useDispatch();
    const getSingleMovie = async () =>{
        
        let res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS)
        let data = await res.json();
        
        let filterData = data?.results?.filter((video)=>video.type === "Behind the Scenes")
        if(!filterData){
            return
        }

        const singleMovie = filterData.length ? filterData[0] : data?.results[0];
        dispatch(addSingleMovie(singleMovie))
    }

    useEffect(()=>{
        getSingleMovie()
    },[])
}

export default useSingleMovie;