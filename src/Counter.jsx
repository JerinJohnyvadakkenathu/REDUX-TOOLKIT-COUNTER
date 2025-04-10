import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './CounterSlice';
const Counter=()=>{
        const dispatch=useDispatch();
        const count=useSelector((state)=>state.counter.value);
        const [amount,setAmount]=useState(0);
        return (
            <>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <input 
            type="number"
            value={amount}
            onChange={(e)=>setAmount(Number(e.target.amount))}
             />
             <button onClick={()=>dispatch(incrementByAmount(amount))}></button>
            </>
        )
}
export default Counter;
