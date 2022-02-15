import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './style/Home.css'



const Home = () => {

  const [seat,setSeat] = useState({})
  
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
        
    
      
      <div className='container'>
        <h1>Starbook Shop</h1><br/>

        {seat.current}/{seat.limit}<br/>
        39/40<br/> 


        <p> available seat: 1<br/>
        previous queue: 3<br/>
        waiting queue: 2 </p><br/>
        <div className='wall'></div>
        

        <a href="/form" class="cta">
          <span>Booking</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>



      </div>

      

    </div>
  )
}

export default Home