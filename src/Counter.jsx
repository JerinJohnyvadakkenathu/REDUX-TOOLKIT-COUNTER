import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './CounterSlice';
const Counter=()=>{
        const dispatch=useDispatch();
        const value=useSelector((state)=>state.Counter.value);
        const [amount,setAmount]=useState(0);
        return (
            <>
            <h1>{value}</h1>
            <button onClick={dispatch(increment())}>+</button>
            <button onClick={dispatch(decrement())}>-</button>
            <input 
            type="number"
            value={amount}
            onChange={(e)=>setAmount(e.target.amount)}
             />
             <button onClick={dispatch(incrementByAmount(amount))}></button>
            </>
        )
}
export default Counter;
