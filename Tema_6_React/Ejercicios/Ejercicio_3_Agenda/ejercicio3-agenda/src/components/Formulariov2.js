import { useState } from "react";
import React from 'react'

export default function Formulariov2(setContacto) {

    //Guardamos el estado inicial para poder utilizarlo cuando queramos hacer reset.
    const initialState = {
        nombre: "",
        apellidos: "",
        ciudad: "",
        codigoPostal: "",
        telefono: "",
    }

    // Creamos un unico estado para todo el formulario, es un objeto con tantas propiedades como inputs tengamos 
    const [inputs, setInputs] = useState(initialState)

    // Actualizamos solo la propiedad relacionada con el input que nos llega a través del atributo "name"
    const handleInput = e => setInputs({ ...inputs, [e.target.name]: e.target.value }); // Los corchetes sirven para crear una propiedad dentro de un objeto.

    function submit(e) {
        e.preventDefault();

        const nuevoContacto = {
            name: inputs.name,
            apellidos: inputs.apellidos,
            ciudad: inputs.ciudad,
            codigoPostal: inputs.codigoPostal,
            telefono: inputs.telefono
        };

        setContacto(contactoActual => [...contactoActual, nuevoContacto]); // Añadimos el nuevo contacto al input.

        setInputs(initialState); // Reiniciamos el formulario.
    }


  return (
    <div className="container mb-4">
            <form onSubmit={submit}>
                <input type="text" id="nombre"       value={inputs.name}       onChange={handleInput} placeholder="Introduce un nombre" className="form-control mb-3"/>
                <input type="text" id="apellidos"    value={inputs.apellidos}    onChange={handleInput} placeholder="Introduce los apellidos" className="form-control mb-3"/>
                <input type="text" id="ciudad"       value={inputs.ciudad}       onChange={handleInput} placeholder="Introduce la dirección" className="form-control mb-3"/>
                <input type="text" id="codigoPostal" value={inputs.codigoPostal} onChange={handleInput} placeholder="Introduce el código postal" className="form-control mb-3"/>
                <input type="text" id="telefono"     value={inputs.telefono}     onChange={handleInput} placeholder="Introduce el número de telefono" className="form-control mb-3"/>
                <input type="submit" className="btn btn-success" value="Registrar"/>
            </form>
        </div>
  )
}
