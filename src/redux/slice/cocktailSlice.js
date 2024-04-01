import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addCocktail,
  fetchingCocktails,
  deleteCocktail,
  editCocktail,
} from "../api";
import { toast } from "react-toastify";

export const getCocktails = createAsyncThunk("cocktails/fetch", async () => {
  try {
    console.log("drugi log");
    const response = await fetchingCocktails();
    return response.data;
  } catch (err) {
    return "error";
  }
});

export const newCocktail = createAsyncThunk(
  "addcocktail",
  async (formValue, { rejectWithValue }) => {
    try {
      console.log(formValue);
      const response = await addCocktail(formValue);
      console.log(response);
      toast.success(
        "You have been successfully add your creation. Thank you for sharing with us"
      );
      return response;
    } catch (err) {
      return toast.error(rejectWithValue.error.message);
    }
  }
);

export const editYourCocktail = createAsyncThunk(
  "editcocktail",
  async (formValue, { rejectWithValue }) => {
    try {
      console.log(formValue);
      const response = await editCocktail(formValue);
      console.log(response);
      toast.success(
        "You have been successfully edit your creation. Thank you for sharing with us"
      );
      return response;
    } catch (err) {
      return toast.error(rejectWithValue.error.message);
    }
  }
);

export const deleteUserCocktail = createAsyncThunk(
  "deletecocktail",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteCocktail(id);
      console.log(response);
      toast.success("You deleted your cocktail.");
      return id;
    } catch (err) {
      return toast.error(rejectWithValue.error.message);
    }
  }
);

const initialState = {
  cocktails: [],
  cocktailsByAuthor: [],
  loading: false,
};

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {
    setCocktailList: (state) => {
      const cocktails = localStorage.getItem("cocktails");
      state.cocktails = JSON.parse(cocktails);
    },
    setCocktailByAuthor: (state) => {
      const cocktails = JSON.parse(localStorage.getItem("cocktails"));
      const user = JSON.parse(localStorage.getItem("user"));
      state.cocktailsByAuthor = cocktails.filter(
        (elem) => elem.author.toLowerCase() == user.toLowerCase()
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCocktails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCocktails.fulfilled, (state, action) => {
        state.cocktails = action.payload.data.cocktails;
        console.log(action);
        state.loading = false;
        localStorage.setItem(
          "cocktails",
          JSON.stringify(action.payload.data.cocktails)
        );
      })
      .addCase(getCocktails.rejected, (state) => {
        state.loading = false;
        state.cocktails = [];
      })
      .addCase(newCocktail.fulfilled, (state, action) => {
        const newCocktail = action.payload.data.data;
        state.cocktails = [...state.cocktails, newCocktail];
        localStorage.setItem("cocktails", JSON.stringify(state.cocktails));
      })
      .addCase(newCocktail.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(deleteUserCocktail.fulfilled, (state, action) => {
        const id = action.meta.arg;
        console.log(action);
        state.cocktails = state.cocktails.filter(
          (cocktail) => cocktail._id !== id
        );
        console.log(state.cocktails);
        localStorage.setItem("cocktails", JSON.stringify(state.cocktails));
      })
      .addCase(deleteUserCocktail.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(editYourCocktail.fulfilled, (state, action) => {
        const updatedCocktail = action.payload.data.data;
        console.log(updatedCocktail);
        const updatedCocktailIndex = state.cocktails.findIndex(
          (cocktail) => cocktail._id === updatedCocktail.id
        );
        if (updatedCocktailIndex !== -1) {
          state.cocktails[updatedCocktailIndex] = updatedCocktail;
        }
        localStorage.setItem("cocktails", JSON.stringify(state.cocktails));

      });
  },
});

export const cocktailActions = cocktailSlice.actions;
export default cocktailSlice;
