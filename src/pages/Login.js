import React from 'react'
import { getObjForm } from '../utils/form'

const Login = () => {

    function handleSubmit(e) {
        e.preventDefault()
        const data = getObjForm(e.target)
        console.log(data)

        // wating for backend
    //     login(data)
    //   .then((data) => {
    //     setUserInfo(data.user)
    //   })
    //   .catch((resError) => {
    //     setError(resError.response.data)
    //   })
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