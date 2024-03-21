import axios from "axios";

const fetchingCocktails= async(cocktail="")=>{
    
    const endpoint = cocktail===""?"cocktails":`cocktails/${cocktail}`;

    const apiUrl = `http://localhost:3045/${endpoint}`

    try{
        const response=await axios.get(apiUrl);
        return response.data
    }catch (err){
        console.log(err)
    }

}

export default fetchingCocktails;