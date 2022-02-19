import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import { checkCurrentPPL, checkCurrentQueue } from '../service/queue'

import './style/Home.css'
import './style/Nav.css'

const Home = () => {
  const [seat, setSeat] = useState({})
  const [queueDetail, setQueueDetail] = useState({})
  const [pplDetail, setPPLDetail] = useState({})

  useEffect(() => {
    //first load
    checkCurrentQueue().then((data) => {
      setQueueDetail(data)
    })
    checkCurrentPPL().then((data) => {
      setPPLDetail(data)
    })

    // do every 10sec
    const checkQ = setInterval(() => {
      console.log('10sec passed')
      checkCurrentQueue().then((data) => {
        setQueueDetail(data)
      })
      // check current amount of ppl in cafe
      checkCurrentPPL().then((data) => {
        setPPLDetail(data)
      })
    }, 10000)

    // auto logout for admin in 1 min
    const adminAutoLogout = setInterval(() => {
      console.log('1min passed')
      if (localStorage.getItem('token') != null) {
        localStorage.removeItem('token')
      }
    }, 60000)
  }, [])
  let avaiSeat = (pplDetail.all_sit - pplDetail.now_sit) / pplDetail.all_sit
  if (avaiSeat < 0) {
    avaiSeat = 0
  }

  return (
    <div className="home">
      <Nav></Nav>

      <div className="container">
        <h1>Starbook Shop</h1>
        <br />

        {/* {seat.current}/{seat.limit}<br/>
        39/40<br/>  */}

        <p>
          {' '}
          available seats: {avaiSeat}
          <br />
          current queue: {queueDetail.now_queue}
          <br />
          waiting queue(s): {queueDetail.wait_queue}{' '}
        </p>
        <br />
        <div className="wall"></div>

        <div className="button">
          <a href="/form" className="cta">
            <span>Booking</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
