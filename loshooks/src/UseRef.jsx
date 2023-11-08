import React, { useState,useEffect,useRef } from 'react'

const UseRef = () => {
    const [counter,setCounter] = useState(0);
    const nombre = useRef('Carlos')
    const cuentaRenderizado = useRef(0)
    useEffect(()=>{

        if (cuentaRenderizado.current === 0) {
            cuentaRenderizado.current = cuentaRenderizado.current + 1
            return;
        }
        console.log(`el contador se actualizo al valor de ${counter}`)
        
    },[counter])

    const cambiarNombre =()=>{
        nombre.current='Arturo';
    }
  return (
    <div><h1>{counter}</h1>
    <button onClick={()=> setCounter(counter+1)}>Contador</button>
    <br />
    <h2>Nombre: {nombre.current}</h2>
    <button onClick={cambiarNombre}>Cambiar Nombre</button>
    </div>
  )
}

export default UseRef;