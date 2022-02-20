import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import { checkOrder, insertOrder } from '../service/order'
import { checkQueueExist } from '../service/queue'
import { getObjForm } from '../utils/form'


import { ethers } from 'ethers'
import EXCEED18 from '../artifacts/contracts/Token.sol/EXCEED18.json'



import './style/Order.css'

const { PRIVATE_KEY } = process.env;

const tokenAddress = "0xd2aEf848C402fCc3E04DBa45aae5d372e2728c79"
const ownerAddress = "0xF0A94EC0F27203C399e17d5533A77e00F9813450"


const Order = () => {


  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }



    const [total, setTotal] = useState(0)

    const navigate = useNavigate()
    const locate = useLocation()
    
    const [qty1, setQty1] = useState()
    const [qty2, setQty2] = useState()
    const [qty3, setQty3] = useState()

    const [pay, setPay] = useState(false)

    async function paid(e){
      e.preventDefault()
      const payMethod = document.querySelector('input[name="pay-method"]:checked').value
      const phone = JSON.parse(localStorage.getItem("phone"))

      let pay = false

      if (!total) return 
      if (typeof window.ethereum !== 'undefined' && total >0 && payMethod==='Pay with XCD(MetaMask)') {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
            const contract = new ethers.Contract(tokenAddress, EXCEED18.abi, signer)
            const transaction = await contract.transfer(ownerAddress, total.toString()+'000000000000000000');
            await transaction.wait();
            pay = true
            console.log(`${total} Coins successfully pay to admin`);
           
          }

      else if ( total >0 && payMethod==='Pay Cash') {
        pay = false
      }
          const obj = {
            "cafe_code": 1,
            "phone": phone,
            "cappucino":  qty1,
            "hot_coco": qty2,
            "ice_cream_cake":qty3,
            "already_pay": pay
          }

        
          console.log(obj)
          if(total!==0){
          insertOrder(obj).then((r)=>{
            console.log('success')
            navigate('/queue')
            
          })}else{
            console.log('0 amount wtf!')
          }
          
    }


  useEffect(()=> {
    const phone = JSON.parse(localStorage.getItem("phone"))
    checkOrder(phone).then(()=>{
      navigate('/queue')
    })

    const price = setInterval(()=>{
      const a = document.getElementById("q-menu1").value
      const b = document.getElementById("q-menu2").value
      const c = document.getElementById("q-menu3").value
      const cal = (a*300) + (b*280) + (c*500)
      setTotal(cal)

      a? setQty1(a) : setQty1(0)
      b? setQty2(b) : setQty2(0)
      c? setQty3(c) : setQty3(0)
      // checkOrder(phone).then(()=>{
      //   navigate('/queue')
      // })
    },1000)
  },[])




  function openForm() {
    document.getElementById("myForm").style.display = "block";
    const a = document.getElementById("q-menu1").value
    const b = document.getElementById("q-menu2").value
    const c = document.getElementById("q-menu3").value
    a? setQty1(a) : setQty1(0)
    b? setQty2(b) : setQty2(0)
    c? setQty3(c) : setQty3(0)




  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  



  return (
    <div className='order'>
        <Nav></Nav>
 
       
        <div className='order-container'>
        {/* <form onSubmit={handleSubmit}> */}
            <h2 className='menu1'>Cappucino</h2>
            <ul >
                <li>300 xcd</li>
                <input id='q-menu1' type='number' min='0' placeholder='Qty'></input>
            </ul>
           

            <h2 className='menu2'>Hot Coco</h2>
            <ul >
                <li>280 xcd</li> 
                <input  id='q-menu2' type='number' min='0' placeholder='Qty'></input>
             
            </ul>

            <h2 className='menu3'>Ice Cream Cake</h2>
            <ul >
                <li>500 xcd</li>
                <input  id='q-menu3' type='number' min='0'placeholder='Qty'></input>

                
             
            </ul>
            <input type='submit' hidden></input>
            {/* </form> */}
        </div>

          
   


        <button className="open-button" onClick={openForm}>Order</button>

        

                <div className="form-popup" id="myForm">
  <form action="/action_page.php" autoComplete='off' onSubmit={paid} className="form-container">
    <h3>Order</h3>

    {/* <input className='customer-name-d' name='name' type='text' placeholder='Name' ></input><br/>
        <input className='phone-number-d' name='phone' type='tel' placeholder='ex.088-777-3333'pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/><br/> 

        <input className='num-seat-d' name='willsit'  type="number" min="1" max="8" placeholder='seat' required></input> */}

        <h4>Total is {total}</h4>


        <label for='Pay with XCD(MetaMask)' >Pay with XCD(MetaMask)</label>
        <input id='pay1' type='radio' name='pay-method' value='Pay with XCD(MetaMask)'></input><br/>
        <label for='Pay Cash' >Pay Cash</label>
        <input id='pay2' type='radio' name='pay-method'value='Pay Cash' ></input>
        

        <button className='submit-btn' type='submit' hidden>Submit</button>
        



    <button type="submit" className="order-now-btn">Order Now</button>
    <button type="button" className="btn cancel" onClick={closeForm} >Close</button>
  </form>
  </div>



    </div>
  )
}

export default Order