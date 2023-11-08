import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [value,setValue] = useState(false);

    useEffect(()=>{

        //Esto como minimo se ejecuta una vez, cada vez que se renderice 
        console.log('El codigo a Ejecutar')
    },[])

  return (
    <div>UseEffect</div>
  )
}

export default UseEffect