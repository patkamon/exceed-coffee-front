import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthProvider'
import { checkQueueExist, checkQueueExist2 } from '../service/queue'

import './style/Queue.css'

const Queue = () => {
  const { queue, queueLogout } = useAuth()
  const [currentQ, setCurrentQ] = useState()

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('10sec passed')
      const phone = localStorage.getItem('number')
      const number = 'number'
      const phone2 = JSON.parse({ number: phone })
      checkQueueExist(phone2).then((data) => {
        console.log(data)
      }) //.catch((resError) => {
      // setError(resError.response.data)
      //  queueLogout()
      // })
    }, 4000)
  }, [])

  return (
    <div className="queue">
      <div className="container">
        <div className="circle-container">
          <div class="numberCircle">933</div>
        </div>

        {/* No. 3 { queue[0] } <br/>
      ... queue ahead.
      status: pending. */}
      </div>
    </div>
  )
}

export default Queue
