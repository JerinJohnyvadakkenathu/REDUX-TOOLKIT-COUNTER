import React from 'react'
import { createSlice } from '@reduxjs/toolkit';


const CounterSlice=createSlice({
    name:"count",
    initialState:{value:0},
    reducers:{
        increment:(state)=>{
            state.value+=1;
            console.log(state);
            
        },
        decrement:(state)=>{
            state.value-=1;
        },
        incrementByAmount:(state,action)=>{
            state.value+=action.payload;
        },

    },
})

export default CounterSlice.reducer;
export const {increment,decrement,incrementByAmount}=CounterSlice.actions;