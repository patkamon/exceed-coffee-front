import React from 'react'
import Nav from '../components/Nav'
import { useAuth } from '../contexts/AuthProvider'
import { adminLogin } from '../service/auth'
import { getObjForm } from '../utils/form'



import './style/Login.css'


const Login = () => {

    const { setAdminInfo } = useAuth()

    function handleSubmit(e) {
        e.preventDefault()
        const data = getObjForm(e.target)

        // wating for backend
        adminLogin(data)
      .then((data) => {
        setAdminInfo(data.access_token)
      })
    }


  return (

    <div className='login'>
    <Nav></Nav>

      <div className='container'>
        <h1>STARBOOK</h1>
        <h1>SHOP</h1>
        <div className='wall'></div>
        <br/>
        <br/>
        <div className= 'lefty'>
          <form className='form-login' onSubmit={handleSubmit}>
      
            <input name="username" type='text' placeholder="username" className="signup-text"/>
            <br/>
              
            <input name="password" placeholder="password" type="password" className="signup-text-input" />
            <br/>

            <button type="submit" hidden />

          </form>
        </div>
      </div>


    </div>


  )
}

export default Login