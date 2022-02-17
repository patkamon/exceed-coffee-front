import React from 'react'
import { useAuth } from '../contexts/AuthProvider'
import './style/Nav.css'

const Dashboard = () => {

  const { token } = useAuth()


  return (
    
    
    <div>Dashboard
      <div class="topnav">
  <a class="active" href="/home">STARBOOK</a>
</div>




      token equal to {token}



    </div>
    



  )
}

export default Dashboard