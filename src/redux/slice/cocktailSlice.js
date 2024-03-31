import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCocktail, fetchingCocktails } from "../api";
import { toast } from "react-toastify";

export const getCocktails = createAsyncThunk("cocktails/fetch", async () => {
  try {
    console.log("drugi log");
    const response = await fetchingCocktails();
    return response.data;
  } catch (err) {
    console.log("error occured in thunk");
    return "error";
  }
});

export const newCocktail= createAsyncThunk("addcocktail", async( formValue, { rejectWithValue })=>{
  try{
    console.log(formValue)
    const response= await addCocktail(formValue);
    if(response.ok){
    return toast.success("You have successfully add your creation. Thank you for sharing with us")}
  } catch(err){
    return toast.error("Opsss, something went wrong")
  }
})

const initialState = {
  cocktails: [],
  loading: false
};

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {
    setCocktailList: (state)=>{
      const cocktails=localStorage.getItem("cocktails");
      state.cocktails=JSON.parse(cocktails)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCocktails.pending, (state)=>{
        state.loading=true
      })
      .addCase(getCocktails.fulfilled, (state, action) => {
        state.cocktails = action.payload.data.cocktails;
        state.loading=false
        localStorage.setItem("cocktails", JSON.stringify(action.payload.data.cocktails))
      })
      .addCase(getCocktails.rejected, (state) => {
        state.loading=false;
        state.cocktails = [];
      })
      .addCase(newCocktail.fulfilled, (state, action) => {
        console.log(action)
        state.cocktails=[...action.meta.arg]
        localStorage.setItem("cocktails", JSON.stringify(state.cocktails))

      })
      .addCase(newCocktail.rejected, (state, action) => {
        console.log(action.payload)
      });
  },
});

export const cocktailActions = cocktailSlice.actions;
export default cocktailSlice;
