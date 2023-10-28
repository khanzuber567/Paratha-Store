import React from 'react'
import { useSelector } from 'react-redux'
import AddtoCart from '../assets/Pages/AddtoCart'



const Add = () => {

   

    const cartItem = useSelector(state => state.cart)
    console.log(cartItem)
  return (
    <>
    {
        cartItem.map(cart => <AddtoCart key={cart.id} cart={cart}/>)
    }
    </>
  )
}

export default Add