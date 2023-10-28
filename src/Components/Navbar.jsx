import React from 'react'
import logo from '../assets/Logo.png'
import { Link, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

  // const { cart } = useSearchParams(state => state.cart)

  const cart = useSelector((state )=> state.cart)
  


  
     

  return (
    <nav className='main-Container'>
      <div className="Container">
     
        <img id="logo" src={logo} alt="" />
        {/* <h4 className="span">Food Bites</h4> */}
        <span className="Navbar-section">

          <Link to="Home"><button className="Home">Home</button></Link>
          {/* <Link to="/products"><button className="Products" to="Products">Products</button></Link> */}
          <Link to="/menus"><button className="Menu" to="Menu">Menus</button></Link>
          <Link to="Contact-us"><button className="Contact" to="Contact">Contact-us</button></Link>
          <Link to="/cart"><button className="Add">Cart {cart.length}</button></Link>
        </span>

      </div>
    
    </nav>
    
  )
}

export default Navbar