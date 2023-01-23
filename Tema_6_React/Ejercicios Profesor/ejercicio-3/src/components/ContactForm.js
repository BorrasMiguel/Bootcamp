import { useState } from 'react';

function ContactForm({setContactos}){
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [direccion, setDireccion] = useState("");
    const [provincia, setProvincia] = useState("");
    const [codigoPostal, setCodigoPostal] = useState("");
    const [telefono, setTelefono] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault();

        const nuevoContacto = {
            nombre: nombre,
            apellidos: apellidos,
            direccion: direccion,
            provincia: provincia,
            codigoPostal: codigoPostal,
            telefono: telefono
        }
        
        setContactos(contactos => {
            const newArray = contactos.slice();
            newArray.push(nuevoContacto);
            return newArray;
        });

        // vaciar los campos:
        setNombre("");
        setApellidos("");
        setDireccion("");
        setProvincia("");
        setCodigoPostal("");
        setTelefono("");
    }

    const handleNombre = (evento)=>{
        setNombre(evento.target.value);
    }
    const handleApellidos = (evento)=>{
        setApellidos(evento.target.value);
    }
    const handleDireccion = (evento)=>{
        setDireccion(evento.target.value);
    }
    const handleProvincia = (evento)=> {
        setProvincia(evento.target.value);
    }
    const handleCodigoPostal = (evento)=> {
        setCodigoPostal(evento.target.value);
    }
    const handleTelefono = (evento)=> {
        setTelefono(evento.target.value);
    }

    return(
        <form onSubmit={handleSubmit} className="form-group">
            <h1 className="my-4">Nuevo contacto</h1>
            <input className="form-control mb-3" type="text" value={nombre} placeholder="Introduce un nombre" onChange={handleNombre} />
            <input className="form-control mb-3" type="text" value={apellidos} placeholder="Introduce los apellidos" onChange={handleApellidos} />
            <input className="form-control mb-3" type="text" value={direccion} placeholder="Introduce la dirección" onChange={handleDireccion} />
            <input className="form-control mb-3" type="text" value={provincia} placeholder="Introduce la provincia" onChange={handleProvincia} />
            <input className="form-control mb-3" type="text" value={codigoPostal} placeholder="Introduce el código postal" onChange={handleCodigoPostal} />
            <input className="form-control mb-3" type="text" value={telefono} placeholder="Introduce el número de teléfono" onChange={handleTelefono} />
            <input className="form-control mb-3 w-25 ml-auto btn-success" type="submit" value="Registrar" />
        </form>
    )
}

export default ContactForm;