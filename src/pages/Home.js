import React, { useEffect, useState } from 'react'

import './style/Home.css'
import './style/Nav.css'

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

    <div class="topnav">
      <a class="active" href="/home">STARBOOK</a>
      <div class='linkk'>
      <a href="http://localhost:3000/dashboard">Admin</a>
      </div>
    </div>
{/* 
    <script src="https://w7.pngwing.com/pngs/701/653/png-transparent-computer-icons-system-administrator-administrator-icon-silhouette-desktop-wallpaper-administrator-icon.png"></script> */}
    {/* <link rel="stylesheet" href="https://w7.pngwing.com/pngs/701/653/png-transparent-computer-icons-system-administrator-administrator-icon-silhouette-desktop-wallpaper-administrator-icon.png"></link> */}

    {/* <link rel="icon" type="./img/admin.jpeg" href="http://localhost:3000/dashboard" /> */}

    {/* <i class="fa-solid fa-screwdriver-wrench"></i> */}
    {/* <a href="http://localhost:3000/dashboard"> 
    <ion-icon name="hammer-outline"></ion-icon>
    </a>
    
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

     */}
 

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