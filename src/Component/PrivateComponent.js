import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';
const PrivateComponent = () => {
    const auth=localStorage.getItem('user');
  return (
<div>
      <>{
        auth?<Outlet/>:<Navigate to="/signup"/>
      }
      
      </>
    </div>
  )
}

export default PrivateComponent
