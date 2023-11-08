import React, { useContext } from 'react'
import { counterContext } from './context/counterContext'

export const Footer = () => {
    const {counter} = useContext(counterContext)
  return ( <div>
    <h2>En otra parte: {counter}</h2></div>
  )
}


export default Footer;