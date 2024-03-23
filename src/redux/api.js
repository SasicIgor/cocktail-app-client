import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3045" });

export const signIn = (formData) =>
  api.post("/users/signin", formData, { withCredentials: true });

export const signUp = (formData) => api.post("/users/signup", formData);

export const fetchingCocktails = (cocktail = "") => {
  const endpoint = cocktail === "" ? "cocktails" : `cocktails/${cocktail}`;

  try { 
    const response = api.get(endpoint);
    return response;
  } catch (err) {
    console.log(err);
  }
};
