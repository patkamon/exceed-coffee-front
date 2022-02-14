import React from 'react'

const Form = () => {
  return (
    <div>Form

            <label for="name">Enter your Name:</label>
            <input className='customer-name' id='name' placeholder='name'/><br/>

            <label for="phone">Enter your phone number:</label>
            <input className='phone-number' id='phone' type='tel' placeholder='ex.088-777-3333'pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>





    </div>
  )
}

export default Form