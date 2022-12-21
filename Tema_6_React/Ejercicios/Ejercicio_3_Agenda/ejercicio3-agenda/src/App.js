import { useState } from "react";
import './App.css';
import Agenda from "./components/Agenda";
import Formulario from './components/Formulario';


function App() {

  const contactos = [
    {nombre: "Miguel", apellidos: "Borras Castro", ciudad: "La Carolina", codigoPostal: 23300, telefono: 684036802},
    {nombre:"Ana", apellidos: "Casado Gomez", ciudad: "Linares", codigoPostal: 23700, telefono: 684102689},
    {nombre:"Lola", apellidos: "Dueñas Peralta", ciudad: "Linares", codigoPostal: 23700, telefono: 674837012},
  ]


  const [contacto, setContacto] = useState(contactos)


  return (
    <div className="container">

      <h2 className="my-4">Agenda</h2>
      <Agenda contactos={contacto} setContacto={setContacto}/>

      <h2 className="my-4">Nuevo Contacto</h2>
      <Formulario setContacto={setContacto} />

    </div>
  );
}

export default App;
