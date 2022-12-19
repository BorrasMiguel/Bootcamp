//rfc
import { useState } from 'react'


export default function Counter() {

    // const state = useState(0); // El cero es el valor inicial
    
    // const count = state[0]
    // const setCount = state[1];

    const [count, setCount] = useState(0);



  return (
    <div>
        <p>Has hecho click {count} veces.</p>
    </div>
  )
}
