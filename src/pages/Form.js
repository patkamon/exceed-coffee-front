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

      <form onSubmit={handleSubmit}>
        <input className='customer-name' name='name' placeholder='Name' ></input><br/>
        <input className='phone-number' name='tel' type='tel' placeholder='ex.088-777-3333'pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/><br/> 
        <label className='label-num-seat' for='seat'>number of seat</label><br />

        <input className='num-seat' name='num-seat'  type="number" min="1" max="8" required></input>
        <button className='submit-btn' type='submit'>Submit</button>

      </form>




    </div>
  )
}

export default Form