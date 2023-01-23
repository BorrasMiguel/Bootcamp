import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from "./pages/Ejercicio2";
import Ejercicio3 from "./pages/Ejercicio3";
import Ejercicio4 from "./pages/Ejercicio4";

function App() {
  return (
    <BrowserRouter>
      <nav className="row justify-content-around bg-dark py-3 mx-0">
        <NavLink to="/Ejercicio1" exact className="font-weight-bold text-light text-decoration-none h-100" activeClassName="active">Ejercicio 1</NavLink>
        <NavLink to="/Ejercicio2" exact className="font-weight-bold text-light text-decoration-none" activeClassName="active">Ejercicio 2</NavLink>
        <NavLink to="/Ejercicio3" exact className="font-weight-bold text-light text-decoration-none" activeClassName="active">Ejercicio 3</NavLink>
        <NavLink to="/Ejercicio4" exact className="font-weight-bold text-light text-decoration-none" activeClassName="active">Ejercicio 4</NavLink>
      </nav>

      <Route path="/Ejercicio1" exact component={Ejercicio1} />
      <Route path="/Ejercicio2" exact component={Ejercicio2} />
      <Route path="/Ejercicio3" exact component={Ejercicio3} />
      <Route path="/Ejercicio4" exact component={Ejercicio4} />
    </BrowserRouter>
  );
}

export default App;
