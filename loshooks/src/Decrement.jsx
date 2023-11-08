import React, { useContext } from 'react'
import { counterContext } from './context/counterContext';

const Decrement = () => {
    const {counter,decrement}=useContext(counterContext)
  return (
    <div>
        <h2>{counter}</h2>
        <button onClick={()=>decrement()}>decrement</button>
        </div>
  )
}

export default Decrement;