import React from "react"
import { useContext, useState } from 'react'
import { GlobalContext } from "../App";

export default function NewToDo() {

    const { setToDos } = useContext(GlobalContext);

    const [newToDo, setNewToDo] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        setToDos(currentToDos => [{title: newToDo, completed: false},...currentToDos])

        setNewToDo("");
    }

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input type="text"
                    placeholder="Introduce un nuevo ToDo"
                    className="form-control"
                    onChange={e => setNewToDo(e.target.value)}
                    value={newToDo}
            />
        </form>
    )
};
