import React, { useEffect, useState } from 'react'

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

      

      Starbook Shop<br/>

      {seat.current}/{seat.limit}<br/>
      39/40<br/> 


      available seat: 1<br/>
      previous queue: 3<br/>
      waiting queue: 2<br/>
      



    </div>
  )
}

export default Home