import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const register = createAsyncThunk(
  "/signup",
  async ({ formValue }, { rejectWithValue }) => {
    try {
      const response = await api.signUp(formValue);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "/signin",
  async ({ formValue }, { rejectWithValue }) => {
    try {
      const response = await api.signIn(formValue);
      console.log(response);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  isAuth: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isAuth = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload.data;
      })
      .addCase(login.rejected, (state) => {
        state.isAuth = false;
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice;
