import { createContext, useState, useEffect } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom'
import './index.css'
import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from "./pages/Ejercicio2"
import Ejercicio3 from "./pages/Ejercicio3"
import Ejercicio4 from "./pages/Ejercicio4"

export const GlobalContext = createContext({});

function App() {

  //Ejercicio 3
  const contactos = [
    {nombre: "Miguel", apellidos: "Borras Castro", ciudad: "La Carolina", codigoPostal: 23300, telefono: 684036802},
    {nombre:"Ana", apellidos: "Casado Gomez", ciudad: "Linares", codigoPostal: 23700, telefono: 684102689},
    {nombre:"Lola", apellidos: "Dueñas Peralta", ciudad: "Linares", codigoPostal: 23700, telefono: 674837012},
  ];

  const [contacto, setContacto] = useState(contactos)


  //Ejercicio 4

  const URL = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setToDos(data.slice(0, 20)))
  }, [])

  const [toDos, setToDos] = useState([])

  return (
    <div className="App">
      <nav className="navbar px-5 py-3 bg-dark">
        <NavLink to='/' className="text-light fw-bold" activeClassName="active">Ejercicio 1</NavLink>
        <NavLink to='/ejercicio2' className="text-light fw-bold" activeClassName="active">Ejercicio 2</NavLink>
        <NavLink to='/ejercicio3' className="text-light fw-bold" activeClassName="active">Ejercicio 3</NavLink>
        <NavLink to='/ejercicio4' className="text-light fw-bold" activeClassName="active">Ejercicio 4</NavLink>
      </nav>
      <GlobalContext.Provider value={{contacto, setContacto, toDos, setToDos}}>
        <Routes>
          <Route exact path='/' element={<Ejercicio1 />}/>
          <Route path='/ejercicio2' element={<Ejercicio2 />}/>
          <Route path='/ejercicio3' element={<Ejercicio3 />}/>
          <Route path='/ejercicio4' element={<Ejercicio4 />}/>
        </Routes>
      </GlobalContext.Provider>
    </div>
  )
}

export default App
