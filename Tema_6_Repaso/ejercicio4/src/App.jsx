import React from 'react'
import { useState, useEffect } from 'react'
import List from './components/List';


function App() {

  const URL = "https://jsonplaceholder.typicode.com/todos";

  const [toDos, setToDos] = useState([])

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setToDos(data))
  }, [])


  return (
    <div className="container my-3">
      <List toDos={toDos} setToDos={setToDos}/>
    </div>
  )
}

export default App
