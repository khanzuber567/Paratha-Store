import React from 'react'
import CartProduct from '../Components/Cart'
import { useSelector } from 'react-redux'

function CartItem() {
    const cart = useSelector(state => state.cart)
  return (
   <>
   <div className='col-lg-8 col-md-8 col-12 d-flex flex-wrap'>
   {
      cart.map(product=>
          <CartProduct key={product.id} product={product}/>
        )
    }
   </div>
   </>
  )
}

export default CartItem