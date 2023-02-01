import { Route, Routes, NavLink } from 'react-router-dom'
import './index.css'
import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from "./pages/Ejercicio2"
import Ejercicio3 from "./pages/Ejercicio3"
import Ejercicio4 from "./pages/Ejercicio4"

function App() {

  return (
    <div className="App">
      <nav className="navbar px-5 py-3 bg-dark">
        <NavLink to='/' className="text-light fw-bold" activeClassName="active">Ejercicio 1</NavLink>
        <NavLink to='/ejercicio2' className="text-light fw-bold" activeClassName="active">Ejercicio 2</NavLink>
        <NavLink to='/ejercicio3' className="text-light fw-bold" activeClassName="active">Ejercicio 3</NavLink>
        <NavLink to='/ejercicio4' className="text-light fw-bold" activeClassName="active">Ejercicio 4</NavLink>
      </nav>

      <Routes>
        <Route exact path='/' element={<Ejercicio1 />}/>
        <Route path='/ejercicio2' element={<Ejercicio2 />}/>
        <Route path='/ejercicio3' element={<Ejercicio3 />}/>
        <Route path='/ejercicio4' element={<Ejercicio4 />}/>
       
      </Routes>
    </div>
  )
}

export default App
