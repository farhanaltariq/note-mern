import "./ToDoCreate.css";
import { useState } from "react";
import axios from "axios";

const ToDoCreate = (props) => {
    const [getNewTodo, setNewTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Math.floor(Math.random() * 50000) + 1,
            title: getNewTodo,
        };
        axios.post("http://localhost:5000/", newTodo).then((res) => {});
        setNewTodo(``);
    };
    const handleNewTodo = (e) => {
        setNewTodo(e.target.value);
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" value={getNewTodo} onChange={handleNewTodo} />
            <button type="submit">Add</button>
        </form>
    );
};
export default ToDoCreate;
