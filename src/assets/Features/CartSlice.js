import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // add:(state, action)=>{
    //   console.log(action.payload,"payload")
    //   state.push(action.payload)
    
    // },
      
     add:(state, action) => {
       
        const cartIndex = state.findIndex((item)=>{
          return item.id===action.payload.id
     })
    if(cartIndex>=0){
        alert("Alredy in Cart")
    }
    else{
        const cartItem = {...action.payload , CartQuantity : 1}
        state.push(cartItem)
        // console.log(cartItem)
    }
   
      },
    
    remove: (state, action) => {
      return state.filter(Item => Item.id !==action.payload)
    },


    decrement: (state, action) => {
      const cartIndex = state.findIndex((item) => {
        return item.id === action.payload.id
      })

      state[cartIndex].CartQuantity === 1 ? state[cartIndex].CartQuantity = 1 : state[cartIndex].CartQuantity -= 1
    },

    increment: (state, action) => {
      const cartIndex = state.findIndex((item) => {

        return item.id === action.payload.id
      })
      state[cartIndex].CartQuantity += 1
      // console.log(state[cartIndex].CartQuantity)l

    }
  }
})

export const { add, remove, decrement, increment } = cartSlice.actions;
export default cartSlice.reducer;