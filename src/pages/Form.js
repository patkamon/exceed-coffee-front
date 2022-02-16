import React from 'react'
import { useAuth } from '../contexts/AuthProvider'
import { queueLogin } from '../service/auth'
import { getObjForm } from '../utils/form'

import './style/Form.css'

const Form = () => {

  const { setQueueInfo } = useAuth()

  function handleSubmit(e) {
      e.preventDefault()
      const data = getObjForm(e.target)
      console.log(data)

      // wating for backend
      // queueLogin(data)
      // .then((data) => {
      // setQueueInfo(data.queue)
      // })

  }

  return (
    <div className='container'>
      <h1>Starbook Shop</h1><br />
      <div className='wall'></div>
      <form onSubmit={handleSubmit}>


        <div className='grid-container'>
        <input className='customer-name' name='name' type='text' placeholder='Name' ></input><br/>
        <input className='phone-number' name='tel' type='tel' placeholder='ex.088-777-3333'pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/><br/> 

        <input className='num-seat' name='num-seat'  type="number" min="1" max="8" placeholder='seat' required></input>
        <button className='submit-btn' type='submit' hidden>Submit</button>
        </div>
      </form>




    </div>
  )
}

export default Form