import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie';


export const PrivateRouter = ({token}) => {
 


  
  // let auth = {'token':true}

return (
    token ? <Outlet/> : <Navigate to=''/>
  )
}
