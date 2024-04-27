import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const PrivateRoutes = ({children}) => {
    
    const state = useSelector(state=>state.authentication)

  return state.isAuth? children : <Navigate to={'/login'}/>

}

export default PrivateRoutes
