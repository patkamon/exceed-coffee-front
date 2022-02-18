import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthProvider'
import { checkQueueExist } from '../service/queue'

import './style/Queue.css'

const Queue = () => {
  const { queue, queueLogout } = useAuth()

  const [currentQ, setCurrentQ] = useState()
  const [currentName, setCurrentName] = useState()
  const [currentTel, setCurrentTel] = useState()
  const [currentAmount, setCurrentAmount] = useState()

  useEffect(() => {
    const phone = localStorage.getItem('number').slice(1, 13)
    checkQueueExist(phone).then((data) => {
      console.log(data)
      setCurrentName(data.name)
      setCurrentQ(data.queue_number)
      setCurrentTel(data.phone)
      setCurrentAmount(data.willsit)
    })
    console.log(currentQ)
    // console.log('currentQ is', currentQ.queue_number)
    const interval = setInterval(() => {
      console.log('10sec passed')

      // console.log('phone3 is', phone)
      // console.log('checkQueue2', checkQueueExist(phone))
      //.catch((resError) => {
      // setError(resError.response.data)
      //  queueLogout()
      // })
    }, 4000)
  }, [])
  // console.log('currentQ name is', currentQ.name)
  return (
    <div className="queue">
      <div className="container">
        <div className="circle-container">
          <div class="numberCircle">{currentQ}</div>
        </div>
        <div>Name: {currentName}</div>
        <div>Tel: {currentTel}</div>
        <div>Amount: {currentAmount}</div>
        {/* {currentQ} */}
        {/* No. 3 { queue[0] } <br/>
      ... queue ahead.
      status: pending. */}
      </div>
    </div>
  )
}

export default Queue
