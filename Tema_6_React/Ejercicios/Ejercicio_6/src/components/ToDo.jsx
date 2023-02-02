import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../App'

export default function() {

    const { toDos, setToDos } = useContext(GlobalContext);

    const removeToDo = (title) => {
        setToDos(toDos.filter(todo => todo.title !== title))
    } 

    const toggleCompleted = (e, index) => {
        if (e.target.tagName !== "BUTTON") {
            const newToDos = [...toDos];
            newToDos[index].completed = !newToDos[index].completed;
            setToDos(newToDos);
        }
    }

    return(
        <ul className="list-group">
            {toDos.map((toDo, index) => {
                return(
                    <li className={ `d-flex justify-content-between list-group-item ${toDo.completed ? "completed bg-primary" : ""}`} 
                        onClick={e => toggleCompleted(e, index)}>
                            <span>ToDo {index}: {toDo.title}</span>
                            <button className='btn btn-danger' onClick={() => removeToDo(toDo.title)}>Eliminar</button>
                    </li>
                )
            })}
        </ul>
    )
} 