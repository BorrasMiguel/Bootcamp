import { useEffect, useState } from "react";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {GlobalContext} from "./contexts/Context";
import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from "./pages/Ejercicio2";
import Ejercicio3 from "./pages/Ejercicio3";
import Ejercicio4 from "./pages/Ejercicio4";

function App() {
  const [contactos, setContactos] = useState([
      {nombre: "Federica", apellidos: "Rica America", direccion: "Calle Angustias, Nº 27, 2ºB", provincia: "Málaga", codigoPostal: "29006", telefono: "748452178"},
      {nombre: "Rafael", apellidos: "Remar Martinez", direccion: "Calle Hipofeses, Nº 11, 3ºA", provincia: "Málaga", codigoPostal: "29006", telefono: "667542184"},
      {nombre: "Laura", apellidos: "Ausente Asencio", direccion: "Avenida de los Guindos, Nº 124, 6ºF", provincia: "Málaga", codigoPostal: "29003", telefono: "652785462"}
    ]);
    
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => setTodos(data.splice(0,20)));
  }, []);

  return (
    <BrowserRouter>
      <nav className="row justify-content-around bg-dark py-3 mx-0">
        <NavLink to="/Ejercicio1" exact className="font-weight-bold text-light text-decoration-none h-100" activeClassName="active">Ejercicio 1</NavLink>
        <NavLink to="/Ejercicio2" exact className="font-weight-bold text-light text-decoration-none" activeClassName="active">Ejercicio 2</NavLink>
        <NavLink to="/Ejercicio3" exact className="font-weight-bold text-light text-decoration-none" activeClassName="active">Ejercicio 3</NavLink>
        <NavLink to="/Ejercicio4" exact className="font-weight-bold text-light text-decoration-none" activeClassName="active">Ejercicio 4</NavLink>
      </nav>


      <GlobalContext.Provider value={{contactos, setContactos, todos, setTodos}}>
        <Route path="/Ejercicio1" exact component={Ejercicio1} />
        <Route path="/Ejercicio2" exact component={Ejercicio2} />
        <Route path="/Ejercicio3" exact component={Ejercicio3} />
        <Route path="/Ejercicio4" exact component={Ejercicio4} />
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
