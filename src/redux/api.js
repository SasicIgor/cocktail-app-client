import axios from "axios";

const api=axios.create({baseURL:"http://localhost:3045"});

export const signIn=(formData)=>api.post("/users/signin", formData);
export const signUp=(formData)=>api.post("/users/signup", formData);