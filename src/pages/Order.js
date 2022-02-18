import React, { useState } from 'react'
import Nav from '../components/Nav'
import { getObjForm } from '../utils/form'


import './style/Order.css'

const Order = () => {



    

  function handleSubmit(e) {
    e.preventDefault()
    const a = document.getElementById("q-menu1").value
    const b = document.getElementById("q-menu2").value
    const c = document.getElementById("q-menu3").value
    console.log(a,b,c)
  }

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  



  return (
    <div className='order'>
        <Nav></Nav>
 
       
        <div className='order-container'>
        <form onSubmit={handleSubmit}>
            <h2 className='menu1'>Cappucino</h2>
            <ul >
                <li>300 xcd</li>
                <input id='q-menu1' type='number' min='0'  placeholder='Qty'></input>
            </ul>
           

            <h2 className='menu2'>Hot Coco</h2>
            <ul >
                <li>280 xcd</li> 
                <input  id='q-menu2' type='number' min='0'  placeholder='Qty'></input>
             
            </ul>

            <h2 className='menu3'>Ice Cream Cake</h2>
            <ul >
                <li>500 xcd</li>
                <input  id='q-menu3' type='number' min='0' placeholder='Qty'></input>

                
             
            </ul>
            <input type='submit' hidden></input>
            </form>
        </div>

          
   


        <button className="open-button" onClick={openForm}>Order</button>

        

                <div className="form-popup" id="myForm">
  <form action="/action_page.php" autoComplete='off' onSubmit={handleSubmit} className="form-container">
    <h3>Order</h3>

    {/* <input className='customer-name-d' name='name' type='text' placeholder='Name' ></input><br/>
        <input className='phone-number-d' name='phone' type='tel' placeholder='ex.088-777-3333'pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/><br/> 

        <input className='num-seat-d' name='willsit'  type="number" min="1" max="8" placeholder='seat' required></input> */}


        <input type='radio'></input>

        <button className='submit-btn' type='submit' hidden>Submit</button>
        



    <button type="submit" className="btn">Order Now</button>
    <button type="button" className="btn cancel" onClick={closeForm} >Close</button>
  </form>
  </div>



    </div>
  )
}

export default Order