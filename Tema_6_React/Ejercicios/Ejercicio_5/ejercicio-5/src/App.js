import { Routes, Route, NavLink } from "react-router-dom"
import './App.css';
import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from "./pages/Ejercicio2";
import Ejercicio3 from "./pages/Ejercicio3";



function App() {
  return (
    <div className="App">
      <header>
        <h1>Ejercicio 1</h1>
        <nav>
          <NavLink to='/'>Ejercicio 1</NavLink>
          <NavLink to='/ejercicio2'>Ejercicio 2</NavLink>
          <NavLink to='/ejercicio3'>Ejercicio 3</NavLink>
        </nav>
      </header>

      <Routes>
        <Route exact path='/' component={Ejercicio1}/>
        <Route path='/ejercicio2' component={Ejercicio2}/>
        <Route path='/ejercicio3' component={Ejercicio3}/> 
      </Routes>
    </div>
  );
}

export default App;
