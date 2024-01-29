import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import moviesReducer from "../redux/moviesSlice"

export const store = configureStore({
  reducer: { user: userReducer,movies : moviesReducer },
});
