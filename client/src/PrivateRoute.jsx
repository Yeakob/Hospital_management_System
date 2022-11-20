import React from 'react'
import { Outlet,Navigate} from 'react-router-dom'

const PrivateRoute = (props) => {
  let auth1 ={'token':true}
  return (
    auth1.token? <Outlet/> : <Navigate to='/Login'/>
        
  )
}

export default PrivateRoute
