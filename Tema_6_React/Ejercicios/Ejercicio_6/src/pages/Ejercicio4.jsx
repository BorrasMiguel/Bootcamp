import React from 'react'
import NewToDo from '../components/NewToDo';
import ToDo from '../components/ToDo';


export default function Ejercicio4() {

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <NewToDo />
      <ToDo />
    </div>
  )
}


