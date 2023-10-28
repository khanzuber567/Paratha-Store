import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../assets/Features/CartSlice';
import { Link } from 'react-router-dom';


const FoodCart = ({data}) => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  // const handleAdd =(data)=>{
    
  // }

  const [visibility, setVisibility] = useState('hidden');

  const [addOns , setAdons] = useState({
    quater : '',
    half : '',
    full  : '',
    mayo : '',
    saus : '',
    pepsi : ''
  })
  const handleClick = () => {
    setVisibility(visibility === 'hidden' ? 'visible' : 'hidden');
  };
  
  const { quater , half , full ,mayo , saus , pepsi} = addOns
  const handleCart =(e)=>{
    e.preventDefault()
      
    setAdons( {...addOns , [e.target.name] : e.target.value})
 
   
  }

  
  const AddCart = ()=>{
    dispatch(add(data));
  }
  return (
    <div className="Product">
      <img  className="FoodImage"src={data.image} alt=""/>
      <h1 className= "FoodName">{data.title}</h1>
      <span>
        
        <h3 className="prize">{data.prize}</h3>
        {/* <h3 className="Price">₹120</h3> */}
        <h3 className="Rating">{data.Rating}</h3>
        <h3 className="Ratings">*****</h3>
        {/* <button className="add_Cart" onClick={()=> handleAdd(data)}>
         Add to Cart
        </button> */}
           <div>
      <button  className="Addon" onClick={handleClick}>Add-ON</button>
      <div className="sub-ordr-btn" style={{ visibility }}>
        <ul className="addon-1">
          <li>
            <input  type="checkbox" value='quater' name='quater' onChange={handleCart} required/> Quater</li>
          <li>
          <input  type="checkbox" value="half" name='half' onChange={handleCart}/> Half</li>
          <li>
          <input  type="checkbox" value="full" name='full' onChange={handleCart}/> Full</li>
        </ul>
        <ul className="addon-2">
          <li>
          <input type="checkbox" value="mayo" name='mayo' onChange={handleCart}/> Mayonees</li>
          <li>
          <input  type="checkbox" value="saus" name='saus' onChange={handleCart}/> Saus</li>
          <li>
          <input type="checkbox" value="pepsi" name='pepsi' onChange={handleCart}/> Pepsi</li>
        </ul>
        <div>
         <div>
         <button className="Addon-Cart"  type='button' onClick={()=>AddCart(data)}>Add To Cart</button>
         </div>
        </div>
      </div>
    </div>

      </span>

      {/* <h3 className="Count">Count :{data.count}</h3> */}

    </div>
  )
}

export default FoodCart