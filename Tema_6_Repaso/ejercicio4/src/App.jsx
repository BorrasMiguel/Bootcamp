import React from 'react'
import { useState } from 'react'
import useFecht from './hooks/useFecht';
import NewToDo from './components/NewToDo';
import ToDo from './components/ToDo';


function App() {

  const URL = "https://jsonplaceholder.typicode.com/todos";

  useFecht(URL, setToDos)

  const [toDos, setToDos] = useState([])

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <NewToDo setToDos={setToDos}/>
      <ToDo toDos={toDos} setToDos={setToDos}/>
    </div>
  )
}

export default App
