import {useContext} from "react";
import {GlobalContext} from "../contexts/Context";

function List(){

    const {contactos, setContactos} = useContext(GlobalContext);

    const removeContact  = (telefono) => {
        return (e) => {
            setContactos(contactos.filter(contacto => contacto.telefono !== telefono))
        };
    };

    return (
        <div className="row">
            {contactos.map(({nombre, apellidos, direccion, provincia, codigoPostal, telefono}, index) => {
                return <ul key={telefono} className="list-group mb-3 col-6">
                            <li className="list-group-item list-group-item-action active"><h5>Contacto {index}</h5></li>
                            <li className="list-group-item list-group-item-action">{nombre}</li>
                            <li className="list-group-item list-group-item-action">{apellidos}</li>
                            <li className="list-group-item list-group-item-action">{telefono}</li>
                            <li className="list-group-item list-group-item-action">{direccion}, {codigoPostal}, {provincia}</li>
                            <li className="list-group-item list-group-item-action"><button className="btn btn-warning" onClick={removeContact(telefono)}>Eliminar</button></li>
                        </ul>
            })}
        </div>
    );
}

export default List;