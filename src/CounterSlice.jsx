import React from 'react'
import { createSlice } from '@reduxjs/toolkit';
const initialState={
      value:0
}

const CounterSlice=createSlice({
    name:"count",
    initialState,
    reducers:{
        increment:(state)=>{
            state+=1;
        },
        decrement:(state)=>{
            state-=1;
        },
        incrementByAmount:(state)=>{
            state.value+=Action.payload;
        },

    },
})

export default CounterSlice.reducer;
export const {increment,decrement,incrementByAmount}=CounterSlice.actions;