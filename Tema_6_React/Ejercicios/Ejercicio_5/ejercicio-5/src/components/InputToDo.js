import { useState } from "react";

export default function InputToDo({ setToDos }) {


  const [newToDo, setNewToDo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setToDos(currentToDo => [{title: newToDo, completed: false}, ...currentToDo]);

    setNewToDo("");
  }

  return (
    <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder='Introduce un nuevo To-do' 
            className="form-control mb-3" 
            onChange={e => setNewToDo(e.target.value)}
            value={newToDo}
          />
        </form>
    </div>
  )
}
