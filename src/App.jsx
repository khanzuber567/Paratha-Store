import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './assets/Pages/Home'
import Menu from './assets/Pages/Menu'
import Contactus from './assets/Pages/Contactus'
import Cart from './Components/Cart'
// import Footer from './Footer/Footer'






const App = () => {
  return (
  <Router>
     <Navbar/>
   <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/menus" element={<Menu/>}/>
    <Route path="/Contact-us" element={<Contactus/>}/>
    <Route path="/cart" element={<Cart/>}/>
    
   </Routes>
   {/* <Footer/> */}
   
  </Router>
  )
}

export default App