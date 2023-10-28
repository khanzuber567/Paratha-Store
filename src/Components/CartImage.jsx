import React from 'react'

function CartImage() {
  return (
    <>
     <div className='col-lg-8 col-md-8 col-12  d-flex flex-column justify-content-center align-items-center'>
     {/* <h4 className='text-center'>OOPs!..Your Cart Is Empty</h4> */}
     <img src='https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif' style={{"margin-top":"-65px"}} className="cartImage img-fluid" />
     
     </div>
    </>
  )
}

export default CartImage