import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthProvider'
import './style/Nav.css'

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
      <div class="topnav">
          <a class="active" href="/home">STARBOOK</a>
         </div>


      No. 3 { queue[0] } <br/>
      ... queue ahead.
      status: pending.



    </div>
  )
}

export default Queue