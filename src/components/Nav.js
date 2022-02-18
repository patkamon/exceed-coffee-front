import React, { useEffect, useState } from 'react'
import Collapsible from 'react-collapsible'
import { useLocation } from 'react-router-dom'
import '../pages/style/Nav.css'
import { clearAllQueue } from '../service/dashboard'
const Nav = () => {

    const [locate,setLocate] = useState()
    const location = useLocation()

    useEffect(() => {
        setLocate(location.pathname.toString())
    },[])




    function clearQueue(e) {
      e.preventDefault()
      const token = JSON.parse(localStorage.getItem("token"))
      clearAllQueue(token).then((data)=>{
        console.log('clear success')
      }).catch((e)=>{
        console.log('error status is: ',e.response.status)
      })
    }



  return (
    <div>
<div className="topnav">
          <a className="active" href="/home">STARBOOK</a>
          {locate === '/home' && <a className="linkk" href="/login">ADMIN</a>}
          {locate === '/dashboard' && <div className='dropdown'>
          <button className="dropbtn">Dropdown
      <i className="fa fa-caret-down"></i>  </button>

      <div className="dropdown-content">
      <input type='submit' onClick={clearQueue} value='clear all' ></input>
      <input type='submit'  value='logout' ></input>
    </div>
      
      </div>}

         </div>


    </div>
  )
}

export default Nav