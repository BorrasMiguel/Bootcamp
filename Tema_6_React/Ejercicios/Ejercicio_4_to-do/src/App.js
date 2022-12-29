import './App.css';

import { useState } from 'react';

import useFetch from './hooks/useFetch';
import InputToDo from './Components/InputToDo';
import ListToDo from './Components/ListToDo';


function App() {
  const URL = "https://jsonplaceholder.typicode.com/todos";
  const [toDos, setToDos] = useState([]);

 
  useFetch(URL, setToDos);
  
  

  return (
    <div className="container">
      <InputToDo setToDos={setToDos}/>
      <ListToDo toDos={toDos} setToDos={setToDos}/>
      

    </div>
  );
}

export default App;
