import React from 'react'
import { useSelector } from 'react-redux'

const AddtoCart = ({cart}) => {

    console.log(cart)
     
  return (
    <div>
      <h1>title</h1>
      <button className="CardBox">

        <button className='Addbtn'>Add</button>
        <button className='Removebtn'>Remove</button>
       
      </button>
</div>



  
  )
}

export default AddtoCart