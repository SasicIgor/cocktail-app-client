import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchingCocktails } from "../api";

export const getCocktails= createAsyncThunk(
    "cocktails/fetch", async ()=>{
        try{
            console.log("drugi log")
            const response = await fetchingCocktails();
            return response.data;
        }catch (err){
            console.log("error occured in thunk")
            return "error"
        }
    }
);

const initialState={
    cocktails:[]
};

const cocktailSlice = createSlice({
    name:"cocktails",
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(getCocktails.fulfilled, (state, action) => {
            state.cocktails=action.payload.data.cocktails;
          })
          .addCase(getCocktails.rejected, (state) => {
            state.cocktails = [];
          });
      }

});

export default cocktailSlice;