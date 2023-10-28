import React from 'react'
import { useSelector } from 'react-redux'
import CartImage from './CartImage'
import CartItem from './CartItem'


function Cart() {
  const cart = useSelector(state => state.cart)
  console.log(cart)
   const totalPrice = cart.reduce((p,c)=>{
       return parseFloat(p + c.Prize*c.count)
   },[0])

  return (
    
    <div className='container-fluid'>
    <div className='row'>
     {/* {
      cart.length === 0 ? <CartImage/> : <CartItem/>
     } */}
    <div className='col-lg-4 col-md-4 col-12  border border-top-0 border-bottom-0 border-end-0 border-dark w-25 '>
    <div className="card m-2 cartPrice" >
  <div className="card-body">
    
    <h5 className="card-title bg-secondary p-1 rounded-1 text-center">Total Price</h5>
    {
      cart.map((cart)=>
      <p>{`${cart.title} - ${cart.Prize} x ${cart.count} `}</p>
      
      )
    }
    <p className="card-text text-danger"> ₹{totalPrice}</p>
    <button className="PayNow">Pay Now</button>
  </div>
</div>
    </div>
    </div>
    </div>
  )
}

export default Cart