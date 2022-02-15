import React from 'react'
import { useAuth } from '../contexts/AuthProvider'
import { queueLogin } from '../service/auth'
import { getObjForm } from '../utils/form'

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
    <div>Form

      <form onSubmit={handleSubmit}>
        <input className='customer-name' name='name' placeholder='name' ></input><br/>
        <input className='phone-number' name='tel' type='tel' placeholder='ex.088-777-3333'pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/> 
        <label className='label-num-seat' for='seat'>num.seat</label>

        <input className='num-seat' name='num-seat'  type="number" min="1" max="8" required></input>
        <button className='submit-btn' type='submit'>Submit</button>
      </form>




    </div>
  )
}

export default Form