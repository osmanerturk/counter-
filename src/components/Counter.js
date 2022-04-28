import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {increment,decrement, incrementByAmount} from "../redux/counter/counterSlice"
function Counter() {
    const [amount,setAmount] = React.useState(0)

  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()

  console.log(countValue);
  return (
    <div>
      <h1>{countValue}</h1>
      <button onClick={() =>dispatch(increment())} >increment</button>
      <button onClick={() =>dispatch(decrement())} >decrement</button>
      <br></br>
      <br></br>
        <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <button onClick={() =>dispatch(incrementByAmount(amount))} >Increment By Amount</button>
    </div>
  );
}

export default Counter;
