import React from 'react'
import { useState, useEffect } from 'react'
import NewToDo from '../components/NewToDo';
import ToDo from '../components/ToDo';


export default function Ejercicio4() {

  const URL = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setToDos(data.slice(0, 20)))
  }, [])

  const [toDos, setToDos] = useState([])

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <NewToDo setToDos={setToDos}/>
      <ToDo toDos={toDos} setToDos={setToDos}/>
    </div>
  )
}


