import { useContext } from 'react';
import { GlobalContext } from "../contexts/Context";

function ToDoList(){
    const {todos, setTodos} = useContext(GlobalContext);

    const removeTodo  = (title) => {
        setTodos(todos.filter(todo => todo.title !== title));
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    return (
            <ul className="list-group container">
                {
                todos.map(({title, completed}, index) => {
                    return (
                        <li key={title} className={`list-group-item ${completed && "completed"}`}>
                            <div className="row">
                                <div className="col-11" onClick={() => toggleTodo(index)}>
                                    <span className={completed ? "completed" : ""}>To-Do {index}: <strong>{title}</strong></span>
                                </div>
                                <div className="col-1">
                                    <button className="btn btn-danger" onClick={() => removeTodo(title)}>X</button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
    );
}

export default ToDoList;