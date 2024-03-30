import { useSelector } from "react-redux"
import Error from "./../pages/Error"

export const PrivateRoutes=({children})=>{
    const user= useSelector((state)=> state.auth.user)
    return user ? children : <Error/>
}