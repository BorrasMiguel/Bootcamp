import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Record from "./pages/Record";
import Error from './pages/Error';

export default function Router() {
  return (
    <div>
        <BrowserRouter>

          <div>
            <header>
              <h1>My App</h1>
              <nav>
                <ul>
                  <li>
                  <NavLink to="/" className={({ isActive }) => {
                    return isActive ? 'is-active' : undefined
                  }}>Ir al inicio</NavLink>
                  </li>
                  <li>
                  <NavLink to="/dashboard" className={({ isActive }) => {
                    return isActive ? 'is-active' : undefined
                  }}>Ir al Dashboard</NavLink>
                  </li>
                  <li>
                  <NavLink to="/record/1" className={({ isActive }) => {
                    return isActive ? 'is-active' : undefined
                  }}>Usuario 1</NavLink>
                  </li>
                  <li>
                  <NavLink to="/record/2" className={({ isActive }) => {
                    return isActive ? 'is-active' : undefined
                  }}>Usuario 2</NavLink>
                  </li>
                  <li>
                  <NavLink to="/record/3" className={({ isActive }) => {
                    return isActive ? 'is-active' : undefined
                  }}>Usuario 3</NavLink>
                  </li>
                  <li>
                  <NavLink to="/record/4" className={({ isActive }) => {
                    return isActive ? 'is-active' : undefined
                  }}>Usuario 4</NavLink>
                  </li>
                </ul>
              </nav>
            </header>
          </div>

          <Routes>
            <Route exact path="/" element={<Index />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/record/:user" element={<Record />}/>
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}
