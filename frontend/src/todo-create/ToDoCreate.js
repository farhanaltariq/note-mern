import "./ToDoCreate.css";
import { useState } from "react";
import axios from "axios";

const ToDoCreate = (props) => {
    const [getNewTodo, setNewTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            // id: Math.floor(Math.random() * 50000) + 1,
            title: getNewTodo,
        };
        axios.post("http://localhost:5000/", newTodo).then((res) => {});
        setNewTodo(``);
    };
    const handleNewTodo = (e) => {
        setNewTodo(e.target.value);
    };
    props.func();

    return (
        <>
            <form className="todo-form row g-3" onSubmit={handleSubmit}>
                <div className="col-auto">
                    <input
                        className="form-control"
                        type="text"
                        value={getNewTodo}
                        onChange={handleNewTodo}
                    />
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary mb-2" type="submit">
                        Add
                    </button>
                </div>
            </form>
        </>
    );
};
export default ToDoCreate;
