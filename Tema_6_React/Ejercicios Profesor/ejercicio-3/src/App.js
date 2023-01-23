import { useState } from 'react';
import List from './components/List';
import ContactForm from './components/ContactForm';

function App() {
  const [contactos, setContactos] = useState([
    {nombre: "Federica", apellidos: "Rica America", direccion: "Calle Angustias, Nº 27, 2ºB", provincia: "Málaga", codigoPostal: "29006", telefono: "748452178"},
    {nombre: "Rafael", apellidos: "Remar Martinez", direccion: "Calle Hipofeses, Nº 11, 3ºA", provincia: "Málaga", codigoPostal: "29006", telefono: "667542184"},
    {nombre: "Laura", apellidos: "Ausente Asencio", direccion: "Avenida de los Guindos, Nº 124, 6ºF", provincia: "Málaga", codigoPostal: "29003", telefono: "652785462"}
  ]);
  
  return (
    <div className="container">
      <h1 className="my-3">Lista de contactos</h1>
      <List contactos={contactos} setContactos={setContactos} className="mb-3"/>
      <ContactForm setContactos={setContactos} />
    </div>
  );
}

export default App;