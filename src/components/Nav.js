import React, { useEffect, useState } from 'react'
import Collapsible from 'react-collapsible'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthProvider'
import '../pages/style/Nav.css'
import { adminLogin } from '../service/auth'
import { clearAllQueue } from '../service/dashboard'
const Nav = () => {

    const [locate,setLocate] = useState()
    const location = useLocation()
    const {adminLogout} = useAuth()

    const [warn1,setWarn1] = useState()
    const [warn2,setWarn2] = useState()

    const [order,setOrder] = useState()
  


  const modal = document.getElementById("nav-myModal");
  const span = document.getElementsByClassName("nav-close-btn")[0];
  const check = document.getElementsByClassName("nav-check-btn")[0];


    useEffect(() => {
        setLocate(location.pathname.toString())
        setOrder(localStorage.getItem('phone'))
    },[])

    const {setAdminInfo} = useAuth()


    function clearQueue(e) {
      e.preventDefault()

       // show warning 
       modal.style.display = "block";
       check.style.display = "block";
       // set warn msg
       setWarn1(`Are you sure to clear queues. `)
       setWarn2(`*** All queue will be removed ***`)



      // const token = JSON.parse(localStorage.getItem("token"))
      // clearAllQueue(token).then((data)=>{
      //   console.log('clear success')
      // }).catch((e)=>{
      //   console.log('error status is: ',e.response.status)
      // })
    }
    if (locate === '/dashboard'){
    window.onclick = function(event) {
      if (event.target === check ) {
        console.log('click in nav')
        const token = JSON.parse(localStorage.getItem("token"))
        const obj = {'username':document.getElementById('user').value,
                    'password':document.getElementById('pass').value}
        console.log(obj)

        adminLogin(obj).then((d)=>{
          setAdminInfo(d.access_token)
          clearAllQueue(d.access_token).then((data)=>{
            console.log('clear success')
            setWarn1()
            setWarn2()
            modal.style.display = 'none'; 
          }).catch((e)=>{
            console.log('error status is: ',e.response.status)
            setWarn1(e.response.status)
            if (e.response.status == '404'){
              setWarn2('Nothing to removed!')
            }else{
              setWarn2('Troubleshooting!')
            }
          })
        }).catch((e)=>{
          setWarn1(e.response.status)
          setWarn2('wrong password!! or username')
        })

    
      }
      if (event.target === modal || event.target === span) {
        modal.style.display = "none";
        setWarn1()
        setWarn2()
      } 
      
    }
  }





    function logout(e){
      e.preventDefault()
      adminLogout()
    }



  return (
    <div>
<div className="topnav">
          <a className="active" href="/home">STARBOOK</a>
      
          {locate === '/home' && <a className="linkk" href="/login">ADMIN</a>}
          {locate === '/dashboard' && <div className='dropdown'>
          <button className="dropbtn">Option
      <i className="fa fa-caret-down"></i>  </button>

     



      <div className="dropdown-content">
      <input type='submit' onClick={clearQueue} value='clear all' ></input>
      <input type='submit'  onClick={logout} value='logout' ></input>
    </div>


    <div id="nav-myModal" className="nav-modal">

<div className="nav-modal-content">
<span className="nav-close-btn">&times;</span>
<span className="nav-check-btn">&#10003;</span>


<p className='nav-warn1'>{warn1}</p>
<p className ='nav-warn2'>{warn2}</p>
<form>
<input id='user' type='text' placeholder='username'></input><br/>
<input id='pass' type='password' placeholder='password'></input>
</form>
</div>

</div>
      
      </div>}
      {order && <a className="linkk" href="/queue">Queue</a>}






         </div>


    </div>
  )
}

export default Nav