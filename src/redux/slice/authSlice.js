import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import * as api from "../api";

export const register=createAsyncThunk("/signup", async({formValue},{rejectWithValue})=>{
    try{
        const response=await api.signUp(formValue);
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data)
    }
})

const authSlice=createSlice({
    name:'auth',
    initialState:{
        user:null,
        error:"",
        loading:false
    },
    reducers:{
        registerUser: (state,action)=>{
            state.user=action.payload;
        }
    }
});

export const authActions=authSlice.actions;

export default authSlice;