import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { useAuth } from '../contexts/AuthProvider'
import './style/Nav.css'

import './style/Queue.css'

const Queue = () => {

  const { queue, queueLogout } = useAuth()
  const [currentQ, setCurrentQ] = useState()


useEffect(() => {

  const interval = setInterval(() => {
    console.log('10sec passed');
    // checkQueue(queue).then((data) => {
    //   console.log(data)
    // }).catch((resError) => {
      //   setError(resError.response.data)
          //  queueLogout()
      // })


  }, 10000);


}, [])




  return (

    <div>
      <Nav></Nav>

    <div className='queue'>





    <div className='container'>
      <div className='circle-container'>
        <div class="numberCircle">9</div>
     </div>

           {/* No. 3 { queue[0] } <br/>
      ... queue ahead.
      status: pending. */}
    </div>

    

    </div>
    </div>
  )
}

export default Queue