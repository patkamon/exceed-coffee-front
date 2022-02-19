import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthProvider'
import { queueLogin } from '../service/auth'
import { getObjForm } from '../utils/form'
import './style/Nav.css'

import './style/Form.css'
import Nav from '../components/Nav'

const Form = () => {
  const { setQueueInfo } = useAuth()
  const [error,setError] = useState()




  function handleSubmit(e) {
      e.preventDefault()
      const data = getObjForm(e.target)
      console.log(data)

      // wating for backend
      queueLogin(data)
      .then((s) => {
        setQueueInfo(data.phone)
      }).catch((e)=>{
        if (e.response.status=== 406){
          setError('this phone number already in queue!')
        }
      })
     


    // wating for backend
    queueLogin(data).then((d) => {
      setQueueInfo(data.phone)
    })
  }

  return (

    <div className='form'>
    <Nav></Nav>

    <div className='container'>
      <h1>Starbook Shop</h1><br />
      <div className='wall'></div>

      <form onSubmit={handleSubmit} >


        <div className='grid-container'>
        <input className='customer-name' name='name' type='text' placeholder='Name' required></input><br/>
     
        <input className='phone-number' name='phone' type='tel' placeholder='ex.088-777-3333'pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/><br/> 

        <input className='num-seat' name='willsit'  type="number" min="1" max="8" placeholder='seat' required></input>
        <h5>{error}</h5>
        <button className='submit-btn' type='submit' hidden>Submit</button>
        
        
        </div>
      </form>
      




    </div>
 
    </div>

  )
}

export default Form
