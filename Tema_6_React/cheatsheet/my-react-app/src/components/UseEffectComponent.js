import { useEffect, useState } from "react";


export default function UseEffectComponent() {

    const [count, setCount] = useState(0);

    console.log("Me ejecuto cada vez que cambia el componente");

    useEffect(() => {
      console.log("Acabo de montarme");

      return () => console.log("Me desmonto");
    }, [])


    return (
        <div>
            <span>{count}</span>
            <button onClick={() => setCount(count+1)}>+</button>
        </div>
    )

}