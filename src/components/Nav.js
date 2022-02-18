import React, { useEffect, useState } from 'react'
import Collapsible from 'react-collapsible'
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
<div className="topnav">
          <a className="active" href="/home">STARBOOK</a>
          {locate === '/home' && <a className="linkk" href="/login">ADMIN</a>}
          {locate === '/dashboard' && <div className='dropdown'>
          <button className="dropbtn">Dropdown
      <i className="fa fa-caret-down"></i>  </button>

      <div className="dropdown-content">
      <input type='submit' value='clear all' ></input>
      <input type='submit' value='logout' ></input>
    </div>
      
      </div>}

         </div>


    </div>
  )
}

export default Nav