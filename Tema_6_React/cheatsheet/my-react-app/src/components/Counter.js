//rfc
import { useState } from 'react'
import FirstComponent from './FirstComponent';


export default function Counter() {

    // const state = useState(0); // El cero es el valor inicial
    
    // const count = state[0]
    // const setCount = state[1];

    const [count, setCount] = useState(0);

    const  handleClick = function (event) {
        setCount(count + 1);
    }



    const [mensaje, setMensaje] = useState("");

    const cambiarMensaje = function(event) {
        setMensaje(event.target.value);
    }



  return (
    <div>
        <p>Has hecho click {count} veces.</p>
        <button onClick={handleClick}>Subir</button>
        <button onClick={() => setCount(count - 1)}>Bajar</button> 
        <button onClick={() => setCount(0)}>Reset</button> 

        <h3>Hook + eventos</h3>
        <input type="text" onChange={cambiarMensaje} placeholder="Deje aquí su mensaje y será impreso mas abajo"/>
        <p>{mensaje}</p>
    </div>
  )
}
