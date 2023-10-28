import { createSlice } from "@reduxjs/toolkit";

const AddSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : () => {
      add : () =>{
      
      } 
    }
})

export const {add} = AddSlice.actions