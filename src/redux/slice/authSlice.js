import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
import { deleteToken, setToken } from "../../helpers/auth";
import { toast } from "react-toastify";

export const register = createAsyncThunk(
  "/signup",
  async ({ formValue }, { rejectWithValue }) => {
    try {
      const response = await api.signUp(formValue);
      toast.success(
        `You have been successfully register! Welcome ${response.data.data}`
      );
      return response.data;
    } catch (err) {
      toast.error(err.response.data.message);
      return rejectWithValue(err.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "/signin",
  async ({ formValue }, { rejectWithValue }) => {
    try {
      const response = await api.signIn(formValue);
      toast.success(
        `You have been successfully logged in, welcome back ${response.data.data}`
      );
      setToken(response.data.token)
      return response.data;
    } catch (err) {
      toast.error(err.response.data.message);
      return rejectWithValue(err.response.data.message);
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
      const user = localStorage.getItem("user");
      state.user = JSON.parse(user);
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
      localStorage.removeItem("user");
      toast.success(
        `You have been successfully logged out. I hope to see you soon!`
      )
      deleteToken();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isAuth = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.isAuth = true;
        localStorage.setItem("user", JSON.stringify(action.payload.data));
      })
      .addCase(login.rejected, (state) => {
        state.isAuth = false;
      })
      .addCase(register.pending, (state) => {
        state.isAuth = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.isAuth = true;
        localStorage.setItem("user", JSON.stringify(action.payload.data));
      })
      .addCase(register.rejected, (state) => {
        state.isAuth = false;
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice;
