import React from 'react'
// import Hero from '../../Components/Hero'
import FoodContainer from '../../Components/FoodContainer'
import Footer from '../../Footer/Footer'
import Contactus from './Contactus'
// import logo2 from '../../assets/Home.png'


const Home = () => {
  return (
   
   <>
   <div className='Logo2'>
  {/* <img id="logo2" src={logo2} alt=""/>   */}
  {/* <h1 className="Hero-Text">It's Not just Food, its an Experience</h1>   */}
  <button className='Order-btn'>Order Now</button>
  
 
  </div>
  <FoodContainer/>
  <Contactus/>
  <Footer/>
   </>
  )
}

export default Home