import { useState } from "react";

export default function Formulario({ setContacto }) {


    // const [nombre, setNombre] = useState("");
    // const [apellidos, setApellidos] = useState("");
    // const [telefono, setTelefono] = useState("");
    // const [ciudad, setCiudad] = useState("");
    // const [codigoPostal, setCodigoPostal] = useState("");

    // function handleNombre(e) {
    //     setNombre(e.target.value);
    // }

    // function handleApellidos(e) {
    //     setApellidos(e.target.value);
    // }

    // function handleCiudad(e) {
    //     setCiudad(e.target.value);
    // }

    // function handleCodigoPostal(e) {
    //     setCodigoPostal(e.target.value);
    // }

    // function handleTelefono(e) {
    //     setTelefono(e.target.value);
    // }

    const initialState = {
        nombre: "",
        apellidos: "",
        ciudad: "",
        codigoPostal: "",
        telefono: "",
    }

    const [inputs, setInputs] = useState(initialState)

    function handleInput(e) {
        const inputId = e.target.id;
        const newValue = e.target.value

        setInputs({...inputs, ...{[inputId]: newValue}})   // Los corchetes sirven para crear una propiedad dentro de un objeto.

    }

    function submit(e) {
        e.preventDefault();

        // const nuevoContacto = {
        //     nombre: nombre,
        //     apellidos: apellidos,
        //     ciudad: ciudad,
        //     codigoPostal: codigoPostal,
        //     telefono: telefono,
        // }
    

    // const nuevoContacto = {nombre, apellidos, ciudad, codigoPostal, telefono};

    // Alternativa: setContacto([...contactoActual, nuevoContacto]); Necesitaria recibir "contacto" desde la App.
    setContacto(contactoActual => [...contactoActual, inputs]);
    
    //e.target.reset();

    setInputs(initialState);

    // setNombre("");
    // setApellidos("");
    // setCiudad("");
    // setCodigoPostal("");
    // setTelefono("");
    };


    return (
        <div className="container mb-4">
            <form onSubmit={submit}>
                <input type="text" id="nombre"       value={inputs.nombre}       onChange={handleInput} placeholder="Introduce un nombre" className="form-control mb-3"/>
                <input type="text" id="apellidos"    value={inputs.apellidos}    onChange={handleInput} placeholder="Introduce los apellidos" className="form-control mb-3"/>
                <input type="text" id="ciudad"       value={inputs.ciudad}       onChange={handleInput} placeholder="Introduce la dirección" className="form-control mb-3"/>
                <input type="text" id="codigoPostal" value={inputs.codigoPostal} onChange={handleInput} placeholder="Introduce el código postal" className="form-control mb-3"/>
                <input type="text" id="telefono"     value={inputs.telefono}     onChange={handleInput} placeholder="Introduce el número de telefono" className="form-control mb-3"/>
                <input type="submit" className="btn btn-success" value="Registrar"/>
            </form>
        </div>
    )
}