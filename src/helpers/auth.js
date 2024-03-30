import Cookies from 'js-cookie'

export const getToken=()=>{
    const jwt=Cookies("jwt");
    console.log(jwt)
    return jwt
}

export const deleteToken=()=>{
    return Cookies.remove('jwt');
}

export const setToken=(token)=>{
    const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    return Cookies.set("jwt",token, {expires})
}

