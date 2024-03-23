import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import cocktailSlice from "./slice/cocktailSlice";

const store = configureStore({
  reducer: {
    auth:  authSlice.reducer,
    cocktail: cocktailSlice.reducer
  },
});

export default store;
