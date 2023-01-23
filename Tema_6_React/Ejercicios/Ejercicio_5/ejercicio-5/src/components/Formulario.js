import { useState } from "react";

export default function Formulario({ setContacto }) {

    // Un estado por cada input
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [telefono, setTelefono] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [codigoPostal, setCodigoPostal] = useState("");


    // Estas funciones reciben el valor del input en cuestion
    const handleNombre = e => setNombre(e.target.value);
    const handleApellidos = e => setApellidos(e.target.value);
    const handleCiudad = e => setCiudad(e.target.value);
    const handleCodigoPostal = e => setCodigoPostal(e.target.value);
    const handleTelefono = e => setTelefono(e.target.value);

  

    function submit(e) {
        e.preventDefault();

        // Podemos crear una propiedad de un objeto directamente con una variable
        // Asignará el nombre de la variable y su valor a una propiedad.

        const nuevoContacto = {nombre, apellidos, ciudad, codigoPostal, telefono};
    

        // Alternativa: setContacto([...contactoActual, nuevoContacto]); Necesitaria recibir "contacto" por "props".
        setContacto(contactoActual => [...contactoActual, nuevoContacto]);  //setState puede recibir una funcion
    
        //e.target.reset(); // No nos vale, no actualiza los estados.

        setNombre("");
        setApellidos("");
        setCiudad("");
        setCodigoPostal("");
        setTelefono("");
    };


    return (
        <div className="container mb-4">
            <form onSubmit={submit}>
                <input type="text" id="nombre"       value={nombre}       onChange={handleNombre} placeholder="Introduce un nombre" className="form-control mb-3"/>
                <input type="text" id="apellidos"    value={apellidos}    onChange={handleApellidos} placeholder="Introduce los apellidos" className="form-control mb-3"/>
                <input type="text" id="ciudad"       value={ciudad}       onChange={handleCiudad} placeholder="Introduce la dirección" className="form-control mb-3"/>
                <input type="text" id="codigoPostal" value={codigoPostal} onChange={handleCodigoPostal} placeholder="Introduce el código postal" className="form-control mb-3"/>
                <input type="text" id="telefono"     value={telefono}     onChange={handleTelefono} placeholder="Introduce el número de telefono" className="form-control mb-3"/>
                <input type="submit" className="btn btn-success" value="Registrar"/>
            </form>
        </div>
    )
}