import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthProvider'
import { queueLogin } from '../service/auth'
import { getObjForm } from '../utils/form'
import './style/Nav.css'

import './style/Form.css'
import Nav from '../components/Nav'
import { useLocation } from 'react-router-dom'


const Form = () => {

  const { setQueueInfo } = useAuth()
  const [warn1,setWarn1] = useState()
  const [warn2,setWarn2] = useState()

  const location = useLocation()
  


  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close-btn")[0];
  const check = document.getElementsByClassName("check-btn")[0];

  const [formData,setFormData] = useState()

  function handleSubmitForm(e) {

      e.preventDefault()
      const data = getObjForm(e.target)
      console.log(data)
      setFormData(data)
      // show warning 
      modal.style.display = "block";
      check.style.display = 'block';
      // set warn msg
      setWarn1(`Please confirm your queue with ${data.phone}`)
      setWarn2(`*** We will call only 3 times ***`)
      
    
  }
  //check warning event
  window.onclick = function(event) {
    if (event.target === check) {
      console.log('click')
      queueLogin(formData)
      .then((s) => {
        setWarn1(0)
        setWarn2(0)
        setQueueInfo(formData.phone)
      }).catch((e)=>{
        if (e.response.status=== 406){
          setWarn1('this phone number already in queue!')
          setWarn2()
          check.style.display = 'none';
        }
      })
    }
    if (event.target === modal || event.target === span) {
      modal.style.display = "none";
      setWarn1()
      setWarn2()
    } 
    
  }

  return (

    <div className='form'>
    <Nav></Nav>

    <div className='container'>
      <h1>Starbook Shop</h1><br />
      <div className='wall'></div>

      <form onSubmit={handleSubmitForm} >


        <div className='grid-container'>
        <input className='customer-name' name='name' type='text' placeholder='Name' required></input><br/>
     
        <input className='phone-number' name='phone' type='tel' placeholder='ex.088-777-3333'pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/><br/> 

        <input className='num-seat' name='willsit'  type="number" min="1" max="8" placeholder='seat' required></input>
        <button className='submit-btn' type='submit' disabled="">Submit</button>
        
        
        </div>
      </form>
      




    </div>

      {/* warning event */}
      <div id="myModal" className="modal">

          <div className="modal-content">
          <span className="close-btn">&times;</span>
          <span className="check-btn">&#10003;</span>
          
        
          <p className='warn1'>{warn1}</p>
          <p className ='warn2'>{warn2 && warn2}</p>
        </div>

      </div>
 
    </div>

  )
}

export default Form