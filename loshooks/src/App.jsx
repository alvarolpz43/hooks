
import React , { useContext } from "react"
import { counterContext } from "./context/counterContext"

const Header = ({children})=>{
  
const {counter,increment}= useContext(counterContext)
    return (
        <>
        <div>{children}</div>
        <h1>HEADER</h1>
        <h4>{counter}</h4>
        <button onClick={()=>increment()}>increment</button>
        </>
    )
}
export default Header;