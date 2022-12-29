import React from 'react';
import './ToDoList.css';

export default function listToDo({ toDos, setToDos }) {

  const removeToDo = (title) => setToDos(toDos.filter(toDo => toDo.title !== title))


  const toggleCompleted = (e, index) => {
    if (e.target.tagName !== "BUTTON") {
      const newToDo = [...toDos];
      newToDo[index].completed = !newToDo[index].completed
      setToDos(newToDo);
    }
  }
 
  return (
    <div>
        <ul className='list-group'>
           {toDos.map((item, index) => {
              return <li className={`d-flex justify-content-between list-group-item  ${item.completed ? "completed" : ""}`} 
                        onClick={e => toggleCompleted(e, index)}>
                        <span>{index}: {item.title} </span>
                        <button className='btn btn-danger' onClick={() => removeToDo(item.title)}>X</button>
                      </li>
           })}
        </ul>
    </div>
  )
}
