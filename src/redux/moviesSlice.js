import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        upcomingMovies : null,
        trailerMovie : null,
        singleMovie : null
    },
    reducers : {
        addNowPlayingMovies: (state,action)=>{
           state.nowPlayingMovies = action.payload;
        },
        addUpcomingMovies : (state,action) =>{
            state.upcomingMovies = action.payload;
        },
        addTrailerMovie : (state,action) =>{
            state.trailerMovie = action.payload;
        },
        addSingleMovie : (state,action) =>{
            state.singleMovie = action.payload
        },
       
    }
})

 export const {addNowPlayingMovies ,addUpcomingMovies, addTrailerMovie,addSingleMovie} = moviesSlice.actions

export default moviesSlice.reducer;