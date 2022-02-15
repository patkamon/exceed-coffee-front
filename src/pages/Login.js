import React from 'react'
import { useAuth } from '../contexts/AuthProvider'
import { adminLogin } from '../service/auth'
import { getObjForm } from '../utils/form'
import './style/login.css'

const Login = () => {

    const { setAdminInfo } = useAuth()

    function handleSubmit(e) {
        e.preventDefault()
        const data = getObjForm(e.target)
        console.log(data)

        // wating for backend
        adminLogin(data)
      .then((data) => {
        setAdminInfo(data.token)
      })
    }

  return (

    <div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div className='comtainer'>
        <h1>STARBOOK</h1>
        <h1>SHOP</h1>
        <div className='wall'></div>
        <br></br>
          <br></br>
        <form onSubmit={handleSubmit}>
      
          
    <div className= 'lefty'>
            <input name="username" placeholder="username" class="signup-text"/>
            <br></br>
            <br></br>
            <br></br>
            <input name="password" placeholder="password" type="password" class="signup-text-input" />
           <br/>
           <br></br>
           <br></br>
           <button className='submit-btn' type='submit'>Submit</button>
</div>
        </form>
</div>
    </div>






  )
}

export default Login