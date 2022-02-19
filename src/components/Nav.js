import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../pages/style/Nav.css'
const Nav = () => {

    const [locate,setLocate] = useState()
    const location = useLocation()

    useEffect(() => {
        setLocate(location.pathname.toString())
    },[])


  return (
    <div>
<div class="topnav">
          <a className="active" href="/home">STARBOOK</a>
          {locate === '/home' && <a className="linkk" href="/login">ADMIN</a>}
         </div>


    </div>
  )
}

export default Nav