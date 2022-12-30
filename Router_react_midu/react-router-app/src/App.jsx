import './App.css'
import { Route, Routes, NavLink, Link, useParams, Outlet } from 'react-router-dom'

const Home = () => <h1>Home</h1>

const SearchPage = () => {
  const tacos = [
    'cochinita',
    'chili',
    'carnita',
    'quesadilla'
  ]

  return (
    <div>
      <h1>Search Page</h1>
      <ul>
        {tacos.map(taco => (
          <li key={taco}><Link to={`/tacos/${taco}`}>{taco}</Link></li>
        ))}
      </ul>
    </div>
  )
}

const Tacos = () => {
  const { name } = useParams()

  return (
    <div>
      <h1>Tacos</h1>
      {name}
      <Link to='details'> Ir a los detalles</Link>
      <Outlet />
      {/* Outlet indica en que parte se renderiza */}
    </div>
  )
}

const TacoDetails = () => {
  const { name } = useParams()

  return (
    <h1>Taco Details {name}</h1>
  )
}

function App () {
  return (
    <div className='App'>
      <header>
        <h1>miduchollo</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? 'is-active' : undefined
                }} to='/'
              >Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? 'is-active' : undefined
                }} to='/search-page'
              >Search Page
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/tacos/:name' element={<Tacos />}>
          <Route path='details' element={<TacoDetails />} />
        </Route>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
