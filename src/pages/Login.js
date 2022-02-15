import React from 'react'
import { useAuth } from '../contexts/AuthProvider'
import { adminLogin } from '../service/auth'
import { getObjForm } from '../utils/form'

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

        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
   
            <input name="username" placeholder="username" />
            <input name="password" placeholder="password" type="password" />
           <br/>
           <button className='submit-btn' type='submit'>Submit</button>

        </form>

    </div>






  )
}

export default Login