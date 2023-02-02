import { useContext } from "react"
import { GlobalContext } from "../App"

export default function Agenda() {
    
    const {contacto, setContacto} = useContext(GlobalContext);

    const eliminarContacto = telefono => {
        return e => {
            setContacto(contacto.filter(contacto => contacto.telefono !== telefono))
        }
    }

    return (
        <div className="row">
            {contacto.map((contacto, index) => {
                return (
                <ul className="list-group mb-3 col-12 col-md-6 col-xl-3" key={contacto.telefono}>
                    <li className="list-group-item active">Contacto {index + 1}</li>
                    <li className="list-group-item">{contacto.nombre}</li>
                    <li className="list-group-item">{contacto.apellidos}</li>
                    <li className="list-group-item">{contacto.telefono}</li>
                    <li className="list-group-item">{contacto.ciudad}, {contacto.codigoPostal}</li>
                    <li className="list-group-item">
                        <button className="btn btn-danger" onClick={eliminarContacto(contacto.telefono)}>Eliminar</button>
                    </li>
                </ul>
                );
            })}
            
        </div>
    )
};


